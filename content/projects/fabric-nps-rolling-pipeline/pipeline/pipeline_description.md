# Pipeline: NPS Daily Export

## Overview

A Microsoft Fabric Pipeline that orchestrates the full NPS export workflow.
It runs on a daily schedule and consists of two sequential activities with a
hard dependency between them: the notebook runs only if the dataflow succeeds.

**DAG visualization**: see [pipeline_dag.png](../docs/pipeline_dag.png)

---

## Activities

### Activity 1 — Dataflow Gen2: NPS Aggregation

| Property | Value |
|---|---|
| Type | Dataflow activity |
| Target | `cx_nps_rolling_5w` (Lakehouse Delta table) |
| On success | Trigger Activity 2 |
| On failure | Pipeline fails; Activity 2 does not run |
| Retry | 1 retry with 2-minute delay (Fabric default) |

Executes the Power Query transformation. Reads raw survey data from the
Data Warehouse, applies the rolling 5-week filter and all business
transformations, then writes the aggregated result to the Lakehouse.

### Activity 2 — Notebook: CSV Export to SharePoint

| Property | Value |
|---|---|
| Type | Notebook activity |
| Dependency | Activity 1 — success only |
| On failure | Pipeline fails; no file is uploaded to SharePoint |
| Retry | 1 retry with 2-minute delay (Fabric default) |

Reads the Delta table written by Activity 1, converts it to a pandas
DataFrame, generates two CSV files (timestamped and LATEST snapshot),
authenticates to Microsoft Graph via OAuth2, and uploads both files to
the configured SharePoint folder.

---

## Trigger

| Property | Value |
|---|---|
| Type | Scheduled |
| Cadence | Daily |
| Recommended time | Off-peak UTC (e.g. 03:00 UTC) |
| Timezone | UTC |

---

## Failure Handling

**Activity 1 failure**: The pipeline marks the run as failed immediately.
Activity 2 is not triggered. No stale data is exported. The previous day's
SharePoint file remains unchanged.

**Activity 2 failure (empty table)**: If the Delta table is empty after the
Dataflow completes, the notebook raises an explicit exception before generating
any CSV. This prevents uploading an empty file that would silently overwrite the
previous good export.

**Activity 2 failure (Graph API error)**: `requests.raise_for_status()` raises
an exception on any non-2xx HTTP response. The pipeline marks the run as failed.
No partial file is left in SharePoint.

All pipeline run history is retained in the Fabric workspace for audit purposes.

---

## Idempotency

Re-running the pipeline on the same day — or on a subsequent day after a failed
run — produces the same output:

- The Dataflow uses a full re-aggregation (GROUP BY) over the rolling window.
  There is no incremental state; the result is always deterministic given the
  same source data.
- The notebook overwrites the LATEST CSV on every successful run.
- The timestamped CSV (e.g. `nps_rolling_5w_20260318.csv`) is also overwritten
  if the same date runs twice, so there is no duplicate accumulation.

---

## Sequence Diagram

```
[Fabric Scheduler]
      │ (daily trigger)
      ▼
[Activity 1: Dataflow Gen2]
  reads: DWH → surveys_nps
  writes: Lakehouse → cx_nps_rolling_5w (Delta)
      │ success
      ▼
[Activity 2: Notebook]
  reads: Lakehouse → cx_nps_rolling_5w
  writes: /Files/dumps/nps_rolling_5w_YYYYMMDD.csv
          /Files/dumps/nps_rolling_5w_LATEST.csv
  uploads: SharePoint (via Microsoft Graph API)
      │ success
      ▼
[Pipeline: Succeeded]
```

---

## Potential Improvements

- **Email notification on failure**: Configure a Fabric Pipeline failure
  activity that sends an email alert when either activity fails.
- **Parameterized rolling window**: The 5-week window is currently hardcoded
  in the Dataflow. Exposing it as a pipeline parameter would allow ad-hoc
  historical extracts without code changes.
- **Retry with exponential backoff**: The Graph API upload could benefit from
  client-side retry logic (e.g. `tenacity` library) to handle transient
  throttling errors gracefully before the pipeline marks the run as failed.
- **Managed Identity authentication**: Replace the AAD app registration
  (client credentials flow) with a Managed Identity attached to the Fabric
  workspace, eliminating the need to manage and rotate client secrets.
