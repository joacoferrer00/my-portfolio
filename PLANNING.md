# PLANNING.md — Portfolio Build Progress

## Project Structure
```
my_portfolio/
├── public/
├── src/
│   ├── components/       ← reusable UI (Navbar, ProjectCard, SkillBadge, etc.)
│   ├── sections/         ← page sections (Hero, About, Projects, Skills, Contact)
│   └── assets/
├── content/
│   ├── about.md
│   ├── skills.md
│   └── projects/
│       ├── cx-data-analyst-challenge.md
│       ├── f1-data-analysis.md
│       ├── ecommerce-sales-analysis.md
│       ├── sales-vs-targets-dashboard.md
│       ├── website-performance-dashboard.md
│       ├── sales-analysis-dashboard.md
│       ├── f1-historical-performance.md
│       └── cx-interview-pipeline.md
├── CLAUDE.md
├── PLANNING.md
├── README.md
├── index.html
├── vite.config.js
└── package.json
```

---

## Sections

| Section   | Status         | Notes                                        |
|-----------|----------------|----------------------------------------------|
| Setup     | [x] Done       | Vite + React + Tailwind, git, content files  |
| Hero      | [ ] Not started | Name, title, tagline, CTAs                  |
| About     | [ ] Not started | Bio, background, contact links               |
| Projects  | [ ] Not started | Cards + detail modal/expand                  |
| Skills    | [ ] Not started | Grouped categories                           |
| Contact   | [ ] Not started | Links to LinkedIn, GitHub, Kaggle, email     |
| Deploy    | [ ] Not started | Vercel or Netlify                            |

---

## Projects

| Project | Type | Tools | Status |
|---------|------|-------|--------|
| CX Data Analyst Challenge | End-to-end BI | Power BI, Python, DAX | [ ] |
| F1 Data Analysis | Data engineering + viz | Python, SQL, Power BI | [ ] |
| E-Commerce Sales Analysis | EDA | Python, Pandas | [ ] |
| Sales vs Targets Dashboard | Power BI | Power BI, DAX, ETL | [ ] |
| Website Performance Dashboard | Power BI | Power BI, DAX, Google Analytics | [ ] |
| Sales Analysis Dashboard | Power BI | Power BI, DAX, Galaxy schema | [ ] |
| F1 Historical Performance (Power BI) | Personal viz | Power BI, DAX | [ ] |
| CX Interview Ingestion Pipeline | Data engineering | Python, Spark, Microsoft Fabric, Delta Lake | [ ] |

---

## Design Tokens (for reference)

| Token | Value |
|-------|-------|
| Green primary | `#3A7A5A` |
| Green dark | `#2F6B4F` |
| Green darker | `#2A5E45` |
| Background | `#0f1117` |
| Surface | `#1a1d27` |
| Text | `#e2e8f0` |
| Text muted | `#94a3b8` |

---

## Decisions Log

- Language: English only
- Repo visibility: Public
- No backend, no CMS — content from local markdown files
- No light mode
