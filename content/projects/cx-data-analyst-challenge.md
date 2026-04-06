---
title: CX Data Analyst Challenge
date: 2025-09
type: End-to-end analytics
tools: [Power BI, Python, DAX, SQL, SMTP]
repo: https://github.com/joacoferrer00/CX_data_analyst_challenge
featured: true
---

# CX Data Analyst Challenge

A 2-day end-to-end analytics case covering four independent mini-problems. Each one required building the data model, writing the business logic, and delivering a working solution — not a prototype.

## Context

Given an anonymized CX (Customer Experience) dataset, the challenge was to solve four real-world analytics problems from scratch, independently, within 48 hours.

## What I Built

### 1. Training Completion Dashboard (Power BI)
- Matrix view with traffic-light status indicators (Passed / Failed / Pending)
- KPIs: % completion by state, weekly refresh cadence
- Star schema: `Fact_Trainings`, `Dim_User`, `Dim_Training`, `Dim_Attempt`

### 2. Forms Completion Tracker (Power BI)
- Tracks % of users who completed each form
- Dynamic pending lists per team
- Star schema: `Dim_Forms`, `Fact_CompletedForms`

### 3. Birthday Notifier (Python Automation)
- Daily automated script that detects employee birthdays and emails the relevant manager
- Built with Pandas + SMTP, scheduled daily at 06:00
- Zero manual effort after deployment

### 4. eNPS Analysis Dashboard (Power BI)
- Favorability scores (% Agree + Strongly Agree) by team, gender, and age range
- Unpivoted fact table with DAX measures for dynamic favorability calculation

## Key Decisions
- Chose star schema for all Power BI cases to ensure clean separation between facts and dimensions and enable scalable DAX measures
- Python automation designed to be stateless and scheduled — no manual trigger required

## Impact
Four production-ready solutions delivered in 48 hours, covering automation, BI modeling, and data storytelling.
