---
title: Website Performance Dashboard
date: 2025-07
type: Power BI — Marketing Analytics
tools: [Power BI, DAX, Power Query, Google Analytics]
repo: https://github.com/joacoferrer00/Website_Performance_Dashboard
---

# Website Performance Dashboard

A Power BI dashboard built for a marketing team to monitor website performance — specifically the relationship between product page visits and catalog download conversions.

## Context

The team needed to replace a manual monthly reporting process. Data came from Google Analytics CSV exports and needed to be standardized, modeled, and visualized in a way non-technical stakeholders could navigate independently.

## Data Model

Simple star schema:
- `Fact_Views` and `Fact_Downloads`
- `Dim_Products`, `Dim_Calendar`, `Dim_KPIs`

Monthly Google Analytics CSVs are ingested via Power Query, standardized, and loaded into the model automatically.

## Design

- Custom color palette (JSON theme file): dark blue base with yellow/orange accents
- Web-style navigation with Power BI bookmarks — mimics a multi-page app without page breaks
- Custom icons designed in Photopea + sourced from Flaticon
- Layout optimized for non-technical users: no clutter, clear hierarchy

## Key Measures

```dax
% Downloads = DIVIDE([Downloads], [Visits], 0)
Top Product by Downloads = TOPN(1, VALUES(Product), [Downloads], DESC)
```

## Impact

- Eliminated manual monthly reporting
- Marketing team can now self-serve insights without waiting for analyst intervention
- Dashboard design drove internal adoption — stakeholders actually use it

## Skills Applied
Power BI advanced design, DAX, Google Analytics data ingestion, user-centered dashboard layout.
