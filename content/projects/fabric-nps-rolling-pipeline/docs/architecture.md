# Architecture Description

This document provides a text description of the two architecture diagrams included
in this folder, for accessibility and search indexability.

---

## Fabric Artifacts Logic (`fabric_artifacts_logic.png`)

The diagram shows three Microsoft Fabric workspace components and their data relationships:

```
┌─────────────────────────────────┐
│   Fabric Data Warehouse         │
│   lh_raw_surveys                │
│   └── surveys_nps (table)       │
└────────────────┬────────────────┘
                 │ SQL read
                 ▼
┌─────────────────────────────────┐
│   Dataflow Gen2                 │
│   NPS Aggregation               │
│   (Power Query / M Language)    │
│                                 │
│   - Rolling 5-week filter       │
│   - Business transformations    │
│   - GROUP BY aggregation        │
└────────────────┬────────────────┘
                 │ Delta write
                 ▼
┌─────────────────────────────────┐
│   Lakehouse                     │
│   └── cx_nps_rolling_5w         │
│       (Delta table)             │
└────────────────┬────────────────┘
                 │ Spark read
                 ▼
┌─────────────────────────────────┐
│   Spark Notebook                │
│   nb_nps_export_sharepoint      │
│                                 │
│   - Read Delta → pandas         │
│   - Generate CSV                │
│   - OAuth2 authentication       │
│   - Graph API upload            │
└────────────────┬────────────────┘
                 │ HTTPS PUT
                 ▼
┌─────────────────────────────────┐
│   SharePoint                    │
│   (Microsoft Graph API)         │
│   └── nps_rolling_5w_LATEST.csv │
│   └── nps_rolling_5w_YYYYMMDD   │
└─────────────────────────────────┘
```

**Three logical layers:**

1. **Ingestion layer** — Raw NPS survey data lives in a Fabric Data Warehouse table.
   No transformations occur at this layer; it is the authoritative source of record.

2. **Transformation layer** — The Dataflow Gen2 applies all business logic: rolling
   window calculation, field validation, code normalization, and aggregation. The
   output is a clean, compact Delta table in the Lakehouse.

3. **Export layer** — The Spark Notebook reads the Delta table, serializes it to CSV,
   and delivers it to SharePoint. This layer contains no business logic — it is
   purely an I/O concern.

---

## Pipeline DAG (`pipeline_dag.png`)

The diagram shows the Fabric Pipeline orchestration as a directed acyclic graph:

```
[Trigger: Daily Schedule]
         │
         ▼
┌──────────────────────┐
│  Activity 1          │
│  Dataflow Gen2       │──── on failure ──▶ [Pipeline Failed]
│  NPS Aggregation     │
└──────────┬───────────┘
           │ on success
           ▼
┌──────────────────────┐
│  Activity 2          │
│  Notebook            │──── on failure ──▶ [Pipeline Failed]
│  CSV Export          │
└──────────┬───────────┘
           │ on success
           ▼
    [Pipeline Succeeded]
```

**Key properties of this DAG:**

- **Linear, no parallelism**: Activity 2 has a hard success dependency on Activity 1.
  This prevents exporting stale data if the aggregation fails.
- **Fail-fast**: Either activity failing immediately terminates the pipeline run.
  No partial outputs reach SharePoint.
- **No branching**: The pipeline has exactly one success path and two failure paths.
