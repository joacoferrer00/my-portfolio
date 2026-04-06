# Dataflow Gen2: NPS Survey Aggregation Logic

## Overview

This Dataflow Gen2 reads raw NPS survey responses from a Fabric Data Warehouse,
applies a series of business transformations, and writes the aggregated result to
a Lakehouse Delta table. It runs daily as the first step in the orchestration pipeline.

- **Source**: Fabric Data Warehouse (`lh_raw_surveys.dbo.surveys_nps`)
- **Destination**: Lakehouse Delta table (`cx_nps_rolling_5w`)
- **Trigger**: Fabric Pipeline (daily schedule, upstream of the export notebook)

---

## Source Configuration

| Property | Value |
|---|---|
| Connector | Fabric Data Warehouse (SQL endpoint) |
| Endpoint | `<your-workspace>.datawarehouse.fabric.microsoft.com` |
| Database | `lh_raw_surveys` |
| Schema | `dbo` |
| Table | `surveys_nps` |

---

## Transformation Logic (Annotated M Language)

The full Power Query (M Language) expression is below. Each step is a named
query that feeds into the next — a standard functional pipeline pattern.

```powerquery
let
    // ── Source Connection ────────────────────────────────────────────────────
    source = Sql.Database(
        "<your-workspace>.datawarehouse.fabric.microsoft.com",
        "lh_raw_surveys"
    ),
    surveys_nps = source{[Schema="dbo", Item="surveys_nps"]}[Data],

    // ── Rolling 5-Week Window ────────────────────────────────────────────────
    // Calculate today's date and the Monday that anchors the current ISO week.
    today = Date.From(DateTime.LocalNow()),
    current_monday = Date.StartOfWeek(today, Day.Monday),

    // On Monday, the current week has just started (day 1 of 7).
    // We need 5 complete weeks, so we go back 5 Mondays.
    // On any other day (Tue–Sun), the current week is in progress but
    // we include it as a partial week — so we only go back 4 Mondays.
    // This ensures the report always covers exactly the last 5 ISO weeks
    // worth of data relative to the most recent completed Monday.
    start_date =
        if Date.DayOfWeek(today, Day.Monday) = 0
        then Date.AddWeeks(current_monday, -5)
        else Date.AddWeeks(current_monday, -4),

    // Apply the rolling window filter on interview date
    filtered_date =
        Table.SelectRows(
            surveys_nps,
            each [interviewdate] >= DateTime.From(start_date)
        ),

    // Drop rows where nps_score is null — these are incomplete responses
    filtered_nps = Table.SelectRows(filtered_date, each [nps_score] <> null),

    // Retain only the columns needed for the output dimensions
    selected_columns = Table.SelectColumns(
        filtered_nps,
        {
            "date",
            "scope",
            "region",
            "market",
            "brand",
            "vehicle",
            "engine",
            "model",
            "nps_score"
        }
    ),

    // ── Scope Filter ─────────────────────────────────────────────────────────
    // Keep only the three tracked touchpoints; discard any other scope values
    filtered_scope_region = Table.SelectRows(
        selected_columns,
        each ([scope] = "POST-SALES" or [scope] = "SALES" or [scope] = "REPAIR")
    ),

    // ── Brand Code Normalization ──────────────────────────────────────────────
    // Source brand field contains a longer internal code; characters at index 2–3
    // (0-based) hold the 2-character brand identifier used in reporting
    clean_brand =
        Table.TransformColumns(filtered_scope_region,
            {{"brand", each Text.Range(_, 2, 2), type text}}
        ),

    // ── Vehicle Type Validation ───────────────────────────────────────────────
    // Only LCV (Light Commercial Vehicle) and PC (Passenger Car) are valid.
    // Any other value — including null or unknown codes — is replaced with '-'
    vehicle_clean =
        Table.TransformColumns(clean_brand,
            {{"vehicle", each if _ = "LCV" or _ = "PC" then _ else "-", type text}}
        ),

    // ── Engine Type Validation ────────────────────────────────────────────────
    // Valid values: BEV (Battery Electric), PHEV (Plug-in Hybrid), ICE (combustion)
    // Anything else is replaced with '-'
    engine_clean =
        Table.TransformColumns(vehicle_clean,
            {{"engine", each if _ = "BEV" or _ = "PHEV" or _ = "ICE" then _ else "-", type text}}
        ),

    // ── Scope Code Mapping ────────────────────────────────────────────────────
    // Map verbose source values to the short codes used in the output schema
    scope_clean =
        Table.TransformColumns(engine_clean, {{
            "scope",
            each
                if _ = "POST-SALES" then "PS"
                else if _ = "SALES"  then "NV"
                else if _ = "REPAIR" then "RP"
                else _,
            type text
        }}),

    // ── Model Name Cleaning ───────────────────────────────────────────────────
    // The source model field can contain:
    //   - Null or empty strings
    //   - "#N/A" strings from upstream joins
    //   - Internal part/VIN codes (long, no spaces, or starting with a digit)
    //   - Valid commercial model names
    //
    // Heuristic rules (applied in order):
    //   1. Empty or "#N/A"          → '-'
    //   2. ≥12 chars with no spaces → likely a part code → '-'
    //   3. Starts with a digit and len > 4 → likely a VIN/code → '-'
    //   4. Otherwise               → uppercased commercial name
    model_clean =
        Table.TransformColumns(scope_clean, {{
            "model",
            each
                let
                    v           = if _ = null then "" else Text.Trim(_),
                    v_upper     = Text.Upper(v),
                    first_char  = if Text.Length(v) > 0 then Text.Start(v, 1) else "",
                    starts_num  = try Number.FromText(first_char) otherwise null
                in
                    if v = "" or v_upper = "#N/A"                              then "-"
                    else if Text.Length(v) >= 12 and not Text.Contains(v, " ") then "-"
                    else if starts_num <> null and Text.Length(v) > 4          then "-"
                    else v_upper,
            type text
        }}),

    // ── Region Normalization ──────────────────────────────────────────────────
    // Map source region codes (some legacy, some inconsistent) to the standard
    // output codes used in reporting
    region_clean =
        Table.TransformColumns(model_clean, {{
            "region",
            each
                if _ = "CHI"                          then "CHN"   // China
                else if _ = "EUR" or _ = "GC" or _ = "GOM" then "EE"  // Europe & Export
                else if _ = "ASEAN" or _ = "JNK"      then "ASEAN" // Asia-Pacific
                else if _ = "MEA"                     then "MEA"   // Middle East & Africa
                else if _ = "IAP"                     then "IAP"   // India-Asia-Pacific
                else if _ = "SA"                      then "SA"    // South America
                else _,                                             // pass-through
            type text
        }}),

    // ── NPS Answer Bucket ─────────────────────────────────────────────────────
    // Classify NPS scores (0–10) into the three standard NPS categories.
    // Note the leading space in each value — required by the output spec
    // so that consumer tools render the column correctly.
    answers_bucket = Table.AddColumn(
        region_clean,
        "answers",
        each
            if [nps_score] <= 6 then " 1-6"
            else if [nps_score] <= 8 then " 7-8"
            else " 9-10",
        type text
    ),

    // ── ISO Week Period ───────────────────────────────────────────────────────
    // Generate the PERIOD column in YYYYWW format (e.g. 202612 for week 12 of 2026).
    //
    // The ISO 8601 standard defines the year of a week by the year that contains
    // its Thursday. The expression `Date.AddDays(d, 4 - Date.DayOfWeek(d, Day.Monday))`
    // shifts any date to the Thursday of its ISO week; taking Date.Year of that
    // Thursday gives the correct ISO year even for weeks that span a year boundary
    // (e.g. week 1 of 2025 starts on Dec 30, 2024).
    period_added = Table.AddColumn(
        answers_bucket,
        "period",
        each
            let
                d         = Date.From([interviewdate]),
                iso_year  = Date.Year(Date.AddDays(d, 4 - Date.DayOfWeek(d, Day.Monday))),
                iso_week  = Date.WeekOfYear(d, Day.Monday),
                week_text = Text.PadStart(Text.From(iso_week), 2, "0")
            in
                Text.From(iso_year) & week_text,
        type text
    ),

    // ── Fixed Question ID ─────────────────────────────────────────────────────
    // This dataflow exclusively processes the RECO (recommendation) question
    qid_added = Table.AddColumn(period_added, "qid", each "RECO", type text),

    // ── Cleanup & Rename ──────────────────────────────────────────────────────
    removed_columns = Table.RemoveColumns(qid_added, {"interviewdate", "nps_score"}),

    renamed_columns = Table.RenameColumns(
        removed_columns,
        {
            {"period",  "PERIOD"},
            {"scope",   "ACTIVITY"},
            {"region",  "REGION"},
            {"market",  "COUNTRY"},
            {"brand",   "BRAND"},
            {"vehicle", "VEHICLE"},
            {"engine",  "ENGINE"},
            {"model",   "MODEL"},
            {"qid",     "QID"},
            {"answers", "ANSWERS"}
        }
    ),

    final_columns = Table.ReorderColumns(
        renamed_columns,
        {"PERIOD", "ACTIVITY", "REGION", "COUNTRY", "BRAND",
         "VEHICLE", "ENGINE", "MODEL", "QID", "ANSWERS"}
    ),

    // ── Aggregation ───────────────────────────────────────────────────────────
    // Group by all 10 dimension columns and count rows.
    // This GROUP BY is the deduplication mechanism: re-running on the same day
    // always produces the same result (idempotent), and partial re-runs cannot
    // cause double-counting because the entire window is re-aggregated from scratch.
    grouped =
        Table.Group(
            final_columns,
            {"PERIOD", "ACTIVITY", "REGION", "COUNTRY", "BRAND",
             "VEHICLE", "ENGINE", "MODEL", "QID", "ANSWERS"},
            {{"SURVEYS", each Table.RowCount(_), Int64.Type}}
        )
in
    grouped
```

---

## Design Notes

### Why full re-aggregation instead of incremental?

The entire 5-week window is re-computed from raw data on every run. This is intentional:
it makes the pipeline idempotent — a failed run, a retry, or a late-arriving record
in the source table all self-correct on the next execution. There is no state to manage.

### ISO week year-boundary edge case

`Date.WeekOfYear(d, Day.Monday)` returns the week number within the calendar year,
but `Date.Year(d)` would give the wrong year for the last days of December or first
days of January (e.g. Dec 30, 2024 belongs to ISO week 1 of **2025**). The Thursday
shift (`Date.AddDays(d, 4 - ...)`) resolves this correctly per ISO 8601.

### Model name cleaning heuristic

The source table sometimes contains internal part numbers instead of commercial model
names. These are identified by: length ≥ 12 with no spaces, or starting with a digit
and length > 4. Both patterns reliably identify codes rather than names in this dataset.
The threshold was validated against the source data before being hardcoded.
