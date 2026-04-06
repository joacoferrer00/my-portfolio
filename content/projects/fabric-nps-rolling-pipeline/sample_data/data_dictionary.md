# Data Dictionary: NPS Rolling Export

## Output File Format

| Property | Value |
|---|---|
| Format | CSV, comma-separated |
| Header row | Included |
| Missing / invalid values | Represented as `-` |
| Encoding | UTF-8 |
| Special note | The `ANSWERS` column values are prefixed with a space character (e.g. ` 9-10`) — required for correct rendering in downstream tools |

---

## Columns

| Column | Type | Format / Values | Composite Key? |
|---|---|---|---|
| PERIOD | string | `YYYYWW` — ISO 8601 week number, zero-padded | Yes |
| ACTIVITY | string | `NV` (Sales), `PS` (Post-Sales), `RP` (Repair) | Yes |
| REGION | string | `CHN`, `EE`, `ASEAN`, `MEA`, `IAP`, `SA` | Yes |
| COUNTRY | string | ISO 3166-1 alpha-2 (e.g. `FR`, `DE`, `CN`) | Yes |
| BRAND | string | 2-character brand code | Yes |
| VEHICLE | string | `PC` (Passenger Car), `LCV` (Light Commercial Vehicle), or `-` | Yes |
| ENGINE | string | `BEV`, `PHEV`, `ICE`, or `-` | Yes |
| MODEL | string | Uppercased commercial model name, or `-` if unavailable | Yes |
| QID | string | Fixed value: `RECO` | Yes |
| ANSWERS | string | ` 1-6`, ` 7-8`, ` 9-10` (each prefixed with a space) | Yes |
| SURVEYS | integer | Count of survey responses for this row's dimension combination | No |

---

## Composite Key

All columns except `SURVEYS` form the composite key. No two rows in a given
daily export should share the same combination of these 10 dimensions.

---

## Region Codes

| Code | Description |
|---|---|
| CHN | China |
| EE | Europe & Export markets |
| ASEAN | Southeast Asia |
| MEA | Middle East & Africa |
| IAP | India & Asia-Pacific |
| SA | South America |

---

## PERIOD Format

`PERIOD` uses the ISO 8601 week-date system:

- Format: `YYYYWW` where `WW` is the ISO week number (01–53), zero-padded
- Example: `202612` = ISO week 12 of 2026 (starts Monday 16 March 2026)
- The year component reflects the ISO week year, which may differ from the
  calendar year for dates in the first or last week of January/December

---

## Rolling Window Logic

Each daily export covers the **last 5 ISO weeks** relative to the run date:

- If the run date is a **Monday**: weeks −5 through −1 (5 complete past weeks)
- If the run date is **Tuesday–Sunday**: weeks −4 through the current partial week

The window always starts on a Monday.

---

## Sample Row

```
PERIOD,ACTIVITY,REGION,COUNTRY,BRAND,VEHICLE,ENGINE,MODEL,QID,ANSWERS,SURVEYS
202612,NV,EE,FR,B1,PC,BEV,COMPACT SEDAN,RECO, 9-10,14
```

This row means: in ISO week 12 of 2026, there were 14 NPS survey responses
from customers in France who purchased a Passenger Car with a BEV powertrain
of the "COMPACT SEDAN" model, in the Sales (NV) touchpoint, who gave a score
of 9 or 10 (Promoters).
