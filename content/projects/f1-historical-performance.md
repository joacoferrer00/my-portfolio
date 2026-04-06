---
title: F1 Historical Performance Dashboard
date: 2025-06
type: Personal visualization project
tools: [Power BI, DAX]
repo: https://github.com/joacoferrer00/f1_historical_performance_dashboard_powerbi
dataset: Kaggle F1 World Championship (1950–2020)
---

# F1 Historical Performance Dashboard

A personal Power BI project analyzing 70 years of Formula 1 history. The central challenge: F1's points system has changed multiple times — raw totals are meaningless across eras without normalization.

## The Problem

Comparing drivers across different decades is inherently unfair if you use raw points. A win in 1960 and a win in 2020 earn different point totals, but they're the same sporting achievement. This dashboard normalizes the scoring system to enable fair cross-era comparisons.

## Data Model

Star schema:
- `Fact_Results` — normalized race results
- Dimensions: `Dim_Circuits`, `Dim_Races`, `Dim_Pilots`, `Dim_Constructors`

Normalization logic applied at the fact table level — original points preserved alongside normalized values for comparison.

## Key Measures

- Normalized total points by driver
- Average normalized points per race
- % variance from original points system (shows who gains/loses from normalization)

## Key Insights

- **Fangio leads by average**: 15.78 normalized points per race — the highest rate in F1 history
- **Normalization benefits**: Schumacher, Prost, and Senna all gain relative position under a fair system
- **Hamilton**: highest absolute totals; most complete driver statistically when volume and rate are both considered
- **Geographic distribution**: UK, USA, and Italy host the most races historically

## Visualizations

- Normalized points ranking
- Constructor totals across eras
- Top 10 by average points per race
- Nationality distribution map
- Normalization impact: original vs adjusted
- Historical driver count by decade

## Skills Applied
DAX normalization logic, star schema design, cross-era data modeling, Power BI advanced visualization.
