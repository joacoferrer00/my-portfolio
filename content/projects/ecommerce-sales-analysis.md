---
title: E-Commerce Sales Analysis
date: 2025-09
type: Exploratory Data Analysis
tools: [Python, Pandas, Matplotlib, Seaborn]
repo: https://github.com/joacoferrer00/ecommerce_sales_analysis
dataset: Kaggle UK E-Commerce (2010–2011)
---

# E-Commerce Sales Analysis

Exploratory data analysis on a UK e-commerce dataset with 541,909 transactions from 2010–2011. The goal was to go beyond surface-level metrics and produce actionable business insights.

## Dataset

Kaggle UK E-Commerce dataset — 541,909 rows, covering invoices, products, customers, and revenue across multiple countries.

## Process

### Data Cleaning
- Removed duplicates and handled missing values
- Created a `TotalPrice` derived column (Quantity × UnitPrice)
- Filtered out returns and invalid transactions

### KPI Summary
- **25,900** invoices
- **~3,500** unique customers
- **~4,000** unique products
- **£9.7M** total revenue
- Average order value: **£376**
- Average units per order: **199**
- Return line rate: **2%**

### Analysis
- Monthly revenue trends: clear Q4 seasonality (Nov–Dec spikes)
- Order value distribution: heavily right-skewed — most orders under £500, but bulk orders pull the average up
- Product concentration: top SKUs drive a disproportionate share of revenue
- Geographic breakdown: UK dominates, with secondary revenue from continental Europe

## Key Insights
- **Wholesale-oriented business model**: average 199 units/order indicates B2B or wholesale buyers, not retail
- **Seasonal dependency**: Q4 is critical — inventory and staffing should be planned around it
- **Long tail of bulk orders**: a small number of large orders inflate average metrics significantly

## Actionable Takeaways
- Seasonal forecasting model would materially improve inventory planning
- Product concentration is a risk — top SKUs need supply chain priority
- International revenue is growing — potential for focused geographic expansion
- Return rate is low but worth monitoring as volume scales
