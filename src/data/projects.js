export const projects = [
  {
    id: 'fabric-nps-rolling-pipeline',
    title: 'Fabric NPS Rolling Pipeline',
    date: '2025',
    type: 'Data Engineering',
    tools: ['PySpark', 'Microsoft Fabric', 'Delta Lake', 'Dataflow Gen2', 'Graph API', 'OAuth2'],
    summary:
      'Production pipeline automating the daily export of a 5-week rolling NPS aggregation to SharePoint. Replaced a manual weekly extraction with an idempotent, auditable daily job across 10 business dimensions.',
    highlights: [
      'Three-layer architecture: Data Warehouse → Dataflow Gen2 → PySpark export notebook',
      'ISO 8601 Thursday rule and Monday-branching logic for exact 5-week rolling windows',
      'Idempotent full re-aggregation — GROUP BY across 10 dimensions is the deduplication guarantee',
      'Dual CSV output: dated archive + stable LATEST file for downstream consumers',
      'Fail-fast row count validation before any SharePoint upload',
    ],
    repo: 'https://github.com/joacoferrer00/fabric-nps-rolling-pipeline',
    featured: true,
  },
  {
    id: 'cx-interview-pipeline',
    title: 'CX Interview Ingestion Pipeline',
    date: 'Dec 2025',
    type: 'Data Engineering',
    tools: ['Python', 'PySpark', 'Microsoft Fabric', 'Delta Lake', 'Elastic API'],
    summary:
      'Production-grade ETL pipeline replacing a fragile Power BI → Elastic ODBC connection. Three-layer Lakehouse architecture on Microsoft Fabric. Reduced refresh times by 50% and fully decoupled ingestion from reporting.',
    highlights: [
      'Spark notebooks ingesting Elastic API with 10k-record pagination',
      'Three-layer architecture: Raw Parquet → Staging → Delta Lake curated tables',
      'ACID-compliant Delta Lake with schema evolution and time travel',
      'SQL endpoint exposed directly to Power BI — zero ODBC dependency',
    ],
    repo: 'https://github.com/joacoferrer00/cx_interview_ingestion_fabric_spark',
    featured: true,
  },
  {
    id: 'cx-data-analyst-challenge',
    title: 'CX Data Analyst Challenge',
    date: 'Sep 2025',
    type: 'End-to-End Analytics',
    tools: ['Power BI', 'Python', 'DAX', 'SQL', 'SMTP'],
    summary:
      'Four independent analytics problems solved end-to-end in 48 hours: a training completion dashboard, a forms tracker, a Python birthday notifier with daily email automation, and an eNPS analysis.',
    highlights: [
      'Star schema data models for all Power BI cases',
      'Python automation: daily scheduled email script with zero manual trigger',
      'DAX favorability measures with dynamic filtering by team, gender, age range',
    ],
    repo: 'https://github.com/joacoferrer00/CX_data_analyst_challenge',
    featured: true,
  },
  {
    id: 'sales-vs-targets',
    title: 'Sales vs Targets Dashboard',
    date: 'Sep 2025',
    type: 'Power BI — ETL + Dashboard',
    tools: ['Power BI', 'DAX', 'Power Query'],
    summary:
      'Full ETL pipeline and Power BI dashboard comparing actual sales against targets at monthly and daily granularity. Dual independent fact tables with shared dimensions — the correct pattern for this type of comparison.',
    highlights: [
      'Dual fact table star schema: FACT_VENTAS + FACT_OBJETIVOS fully independent',
      'Side-by-side monthly/daily comparison with dynamic slicers',
      'Identified systematic target overestimation: avg achievement 45–50%',
    ],
    repo: 'https://github.com/joacoferrer00/powerbi_sales_vs_targets',
    featured: true,
  },
  {
    id: 'sales-analysis-dashboard',
    title: 'Sales Analysis Dashboard',
    date: 'Jul 2025',
    type: 'Power BI — Commercial Analytics',
    tools: ['Power BI', 'DAX', 'Power Query'],
    summary:
      'Replaced a manual Excel-based commercial reporting process. Galaxy schema with custom March–February fiscal calendar, ratio-based KPIs, and REMOVEFILTERS for persistent cross-context aggregations.',
    highlights: [
      'Galaxy schema: two fact tables sharing five dimension tables',
      'Custom fiscal calendar (March–February) with YTD accumulation logic',
      'REMOVEFILTERS for persistent aggregations independent of slicer context',
    ],
    repo: 'https://github.com/joacoferrer00/sales_analysis_dashboard',
    featured: false,
  },
  {
    id: 'website-performance-dashboard',
    title: 'Website Performance Dashboard',
    date: 'Jul 2025',
    type: 'Power BI — Marketing Analytics',
    tools: ['Power BI', 'DAX', 'Google Analytics'],
    summary:
      'Marketing dashboard tracking product page visits vs. catalog download conversions. Eliminated manual monthly reporting and drove self-service adoption across a non-technical team.',
    highlights: [
      'Automated ingestion from Google Analytics CSV exports via Power Query',
      'Bookmark-based navigation mimicking a multi-page app',
      'Custom JSON theme + Photopea icons for professional UX',
    ],
    repo: 'https://github.com/joacoferrer00/Website_Performance_Dashboard',
    featured: false,
  },
  {
    id: 'ecommerce-sales-analysis',
    title: 'E-Commerce Sales Analysis',
    date: 'Sep 2025',
    type: 'Exploratory Data Analysis',
    tools: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    summary:
      'EDA on 541,909 UK e-commerce transactions (2010–2011). Identified wholesale business model patterns, Q4 seasonality dependency, and product concentration risk.',
    highlights: [
      '541k rows: cleaning, deduplication, derived metrics',
      'KPIs: £9.7M revenue, £376 avg order value, 199 avg units/order',
      'Q4 seasonality, geographic concentration, right-skewed order distribution',
    ],
    repo: 'https://github.com/joacoferrer00/ecommerce_sales_analysis',
    featured: false,
  },
  {
    id: 'f1-historical-performance',
    title: 'F1 Historical Performance Dashboard',
    date: 'Jun 2025',
    type: 'Power BI — Personal Project',
    tools: ['Power BI', 'DAX'],
    summary:
      'Cross-era F1 driver comparison using a normalized points system. Raw totals are misleading across decades — this dashboard adjusts for historical rule changes to enable fair comparisons.',
    highlights: [
      'Normalization logic applied at fact table level, preserving originals',
      'Fangio leads by average: 15.78 normalized pts/race',
      'Shows who gains and loses under a fair points system',
    ],
    repo: 'https://github.com/joacoferrer00/f1_historical_performance_dashboard_powerbi',
    featured: false,
  },
  {
    id: 'f1-data-analysis',
    title: 'F1 Data Analysis',
    date: 'Nov 2024',
    type: 'Data Engineering + Visualization',
    tools: ['Python', 'SQL', 'Power BI', 'Pandas', 'Seaborn'],
    summary:
      'End-to-end analysis of 541k+ F1 race records: Python data cleaning, SQL analytical queries, EDA with visualizations, and a Power BI dashboard with driver and nationality filters.',
    highlights: [
      '541k+ rows cleaned and normalized in Pandas',
      'SQL queries for top drivers, championships, career lengths',
      'Strong correlation found between poles, wins, podiums, and points',
    ],
    repo: 'https://github.com/joacoferrer00/f1_data_analysis',
    featured: false,
  },
]
