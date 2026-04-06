---
title: Sales vs Targets Dashboard
date: 2025-09
type: Power BI — ETL + Dashboard
tools: [Power BI, DAX, Power Query, Excel]
repo: https://github.com/joacoferrer00/powerbi_sales_vs_targets
featured: true
---

# Sales vs Targets Dashboard

A 2-day Power BI project requiring a full ETL pipeline and a dashboard that compares actual sales against targets at both monthly and daily granularity — with full independence between the two fact tables.

## The Problem

An anonymized sales dataset combining targets and actuals needed to be structured from scratch. The core challenge: targets and sales operate at different granularities and must never contaminate each other's calculations.

## Data Model

**ETL (Power Query):**
- Standardized naming, fixed date formatting, handled nulls
- Created staging table `STG_DATA` as a clean intermediate layer

**Star schema:**
- `FACT_VENTAS` — actual sales
- `FACT_OBJETIVOS` — targets
- 5 shared dimension tables: `Dim_Producto`, `Dim_Marca`, `Dim_Cliente`, `Dim_KAM`, `Dim_Calendario`

Two independent fact tables sharing dimensions — this is the correct pattern for comparing actuals vs targets without cross-contamination.

## Dashboard

- Top KPIs: total sales, total targets, % achievement
- Side-by-side monthly and daily comparisons (blue = sales, orange = targets)
- Interactive slicers: product, brand, KAM, client, month
- Cumulative performance table
- Annual goal progress gauge

## Key Insights

- Overall achievement never exceeded 51% (average 45–50%) — suggests targets were systematically overestimated
- Best month: May at 50.67% achievement
- KAM performance variance: César ~42%, Vanessa ~30%, Daniela ~27%
- Top product: SIMILAC TOTAL COMFORT 1 (>352M in 2020–2021)

## Skills Applied
ETL design in Power Query, star schema with dual fact tables, DAX for time-based comparison, dashboard UX for business stakeholders.
