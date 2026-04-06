---
title: Fabric NPS Rolling Pipeline
date: 2025
type: Data Engineering — Production Pipeline
tools: [PySpark, Microsoft Fabric, Delta Lake, Dataflow Gen2, Microsoft Graph API, OAuth2, Power Query]
repo: https://github.com/joacoferrer00/fabric-nps-rolling-pipeline
featured: true
---

# Fabric NPS Rolling Pipeline

A production-grade Microsoft Fabric pipeline that automates the daily export of a 5-week rolling NPS (Net Promoter Score) aggregation to SharePoint. Replaces a manual weekly extraction with a fully automated, idempotent, and auditable daily job covering multiple brands, regions, touchpoints, and vehicle segments across a global CX program.

## The Problem

CX teams needed a daily refresh of NPS data aggregated across the last 5 ISO weeks, broken down by 10 business dimensions. Previously this was a manual weekly export — error-prone, always a week stale, and dependent on one person to run it.

## Architecture

Three-layer pipeline with a single responsibility per layer:

| Layer | Component | Technology |
|---|---|---|
| Ingestion | Raw survey data | Fabric Data Warehouse |
| Transformation | Aggregation logic | Dataflow Gen2 (Power Query / M) |
| Export | CSV delivery | PySpark Notebook + Microsoft Graph API |

A Fabric Pipeline enforces execution order: export only runs after aggregation completes successfully.

## Data Flow

1. Dataflow reads raw NPS responses from `surveys_nps` (Fabric Data Warehouse)
2. Rolling 5-week ISO window computed relative to run date
3. Business transformations: field validation, brand extraction, scope mapping, model cleaning, region normalization
4. NPS bucketing: Detractors (1–6), Passives (7–8), Promoters (9–10)
5. ISO week labeling using ISO 8601 Thursday rule (handles year-boundary edge cases)
6. Aggregation across 10-column composite key → Delta table `cx_nps_rolling_5w`
7. Spark notebook validates row count, writes two CSVs
8. Both files uploaded to SharePoint via Microsoft Graph API (OAuth2 client credentials)

## Key Engineering Decisions

**ISO Week Thursday Rule** — `PERIOD` uses ISO 8601 week numbering where the year is determined by the Thursday of that week. Without this, dates like December 30 would be assigned to the wrong year.

**Monday-vs-Not-Monday Window** — Different offsets depending on run day ensure exactly 5 complete ISO weeks are always covered, regardless of when the pipeline runs.

**Idempotent Full Re-Aggregation** — The entire 5-week window is re-aggregated from raw data on every run. The `GROUP BY` across all 10 dimensions is both the deduplication mechanism and the idempotency guarantee. No mutable state to manage.

**Dual CSV Output Pattern** — Two files per run: a date-stamped archive (`nps_rolling_5w_YYYYMMDD.csv`) and a stable snapshot (`nps_rolling_5w_LATEST.csv`). Downstream consumers reference `LATEST` and always get current data without configuration changes.

**Fail-Fast on Empty Table** — Row count validated before any CSV is written. Prevents uploading a blank file that would silently overwrite the last good export in SharePoint.

## Impact

- Eliminated manual weekly extraction process
- Daily refresh replaces weekly — data is never more than 24 hours stale
- Auditable: dated archive on every run enables point-in-time recovery
- Downstream consumers (Power BI, stakeholder dashboards) fully decoupled from pipeline schedule
