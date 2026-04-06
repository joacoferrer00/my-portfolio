---
title: Sales Analysis Dashboard
date: 2025-07
type: Power BI — Commercial Analytics
tools: [Power BI, DAX, Power Query]
repo: https://github.com/joacoferrer00/sales_analysis_dashboard
---

# Sales Analysis Dashboard

A Power BI solution that replaced a manual Excel-based sales reporting process. Built for a commercial team tracking product line performance, geographic zone results, and customer-level achievement.

## Context

The existing process was Excel-based, manually updated, and error-prone. The goal was to automate data refresh and add analytical depth — particularly for a business with custom seasonal logic (March–February fiscal year) and proportional KPIs that compare product group ratios against a baseline.

## Data Model

Galaxy schema — two independent fact tables sharing dimension context:
- `Fact_Ventas` — actual sales
- `Fact_Objetivos` — targets
- Shared dimensions: Product, Zone, Customer, Calendar (custom season)

## Business Logic

The core KPIs are ratio-based, not absolute:
- **KPI_GrupoA_vs_Base** — compares a product group's share against a reference baseline
- **KPI_ProductoBase_AvanceTemporada** — accumulates YTD sales through the current date within the custom March–February season

Custom seasonal calendar required building a parallel date table with season-aware logic independent of the standard calendar year.

## Advanced DAX

- `REMOVEFILTERS` for persistent cross-context aggregations
- Auxiliary tables for dynamic KPI selector
- Synchronized slicers across pages
- Custom season accumulation using `DATESYTD` equivalent with March offset

## Visualizations

- Monthly trend lines: previous season, current season, objective
- Compliance indicators (absolute and relative)
- Comparative gauge KPIs
- Accumulated season totals

## Impact

Eliminated manual Excel reporting, reduced errors in period-over-period comparisons, and gave the commercial team real-time visibility into seasonal performance vs targets.

## Skills Applied
Galaxy schema design, advanced DAX (REMOVEFILTERS, custom temporal logic), custom fiscal calendar, Power BI for Service.
