---
title: CX Interview Ingestion Pipeline
date: 2025-12
type: Data Engineering — Production ETL
tools: [Python, PySpark, Microsoft Fabric, Delta Lake, Elastic API, Parquet]
repo: https://github.com/joacoferrer00/cx_interview_ingestion_fabric_spark
featured: true
---

# CX Interview Ingestion Pipeline

A production-grade data pipeline built to replace a fragile direct connection between Power BI and an Elastic API. The solution implements a three-layer Lakehouse architecture on Microsoft Fabric, reducing refresh times by 50% and eliminating the tight coupling between data ingestion and reporting.

## The Problem

Power BI was connected directly to Elastic via ODBC. This created several production issues:
- Unpredictable and long refresh times
- Limited query folding — transformations ran in Power Query, not at source
- Hard to monitor or troubleshoot failures
- Fragile Power Query logic that broke on schema changes
- Ingestion and reporting were tightly coupled — a change in one broke the other

## The Solution

A three-layer Lakehouse architecture on Microsoft Fabric:

### Layer 1 — Ingestion (Spark Notebook)
- Queries the Elastic API with pagination (10,000 records per batch)
- Converts API responses to Pandas DataFrames
- Normalizes nested JSON structures
- Adds ingestion metadata (timestamp, batch ID, source)

### Layer 2 — Raw Storage (OneLake)
- Temporary Parquet files written per batch
- Monthly consolidation into OneLake
- Immutable source of truth — supports full reprocessing
- Auditable: every ingestion event is traceable

### Layer 3 — Curated (Delta Lake)
- Downstream Spark notebooks apply business rules and transformations
- Output stored as Delta Lake tables: ACID-compliant, supports schema evolution and time travel
- SQL endpoint exposed directly to Power BI — clean separation from ingestion

## Results

| Metric | Before | After |
|--------|--------|-------|
| Refresh time | Unpredictable | ~50% reduction |
| Reliability | Fragile (ODBC) | Delta transactions |
| Debuggability | Hard | Full audit trail |
| Coupling | Tight | Fully decoupled |
| Maintenance | Ad-hoc | Structured layers |

## Architecture Diagram

```
Elastic API
    ↓
[Spark Notebook — Ingestion]
    ↓
[Raw Parquet — OneLake]
    ↓
[Spark Notebook — Transformation]
    ↓
[Delta Lake Tables — Curated]
    ↓
[SQL Endpoint → Power BI]
```

## Skills Applied
Data pipeline design, REST API ingestion with pagination, PySpark transformation, Lakehouse architecture, Delta Lake (ACID, time travel, schema evolution), Microsoft Fabric, production documentation.
