# PLANNING.md — Portfolio Roadmap

## What we're building

A single-page portfolio website. One long scrollable page, divided into sections. No separate pages, no routing, no login — just a clean, fast static site that loads instantly and works on any device.

The site will present you as an Analytics Engineer, not a generic analyst. Every section should reinforce that positioning.

---

## Build phases

### Phase 1 — Foundation (DONE)
Git repo, Vite + React + Tailwind setup, all content files written, pushed to GitHub.
No visual output yet — this is scaffolding only.

### Phase 2 — Layout + first POC (DONE)
Full page layout built, all 9 projects, all sections with real content. Reviewed and approved.

### Phase 3 — Visual design ← WE ARE HERE
Apply the full dark theme, green color palette, spacing, typography, and component styling.
Add one screenshot image per project card where a good visual exists.
After this phase the site looks like the real thing.

### Phase 4 — Polish + interactions
Hover states, scroll animations, mobile layout, performance check.
Minor UX adjustments based on Phase 2 feedback.

### Phase 5 — Deploy
Push to Vercel or Netlify. Custom domain optional.

---

## Site sections (in order)

| # | Section | What it contains |
|---|---------|-----------------|
| 1 | **Hero** | Your name, title ("Analytics Engineer"), one-line tagline, two buttons: View Projects + Download CV |
| 2 | **About** | Short bio (3–4 sentences), your background, what you actually do |
| 3 | **Projects** | Cards for each project — click to expand and see full detail |
| 4 | **Skills** | Grouped by category: BI, SQL, Python, Data Engineering, Tools |
| 5 | **Contact** | LinkedIn, GitHub, Kaggle, Email |

---

## Project order

Most impactful and technical projects first. Personal or academic ones last.

| Priority | Project | Why this position |
|----------|---------|-------------------|
| 1 | **Fabric NPS Rolling Pipeline** | Most complete engineering project. Production pipeline, OAuth2, Graph API, ISO logic, idempotency. |
| 2 | **CX Interview Ingestion Pipeline** (Spark + Fabric) | Production-grade Lakehouse ETL. Directly targets Analytics Engineer roles. |
| 3 | **CX Data Analyst Challenge** | End-to-end: modeling + automation + BI. Shows breadth in 48 hours. |
| 4 | **Sales vs Targets Dashboard** | Strong data modeling (dual fact tables), ETL, real business problem. |
| 5 | **Sales Analysis Dashboard** | Advanced DAX, custom fiscal calendar, replaced a real Excel process. |
| 6 | **Website Performance Dashboard** | Good design, eliminated manual reporting, shows stakeholder-facing work. |
| 7 | **E-Commerce Sales Analysis** | Clean Python EDA with real insights. Accessible to non-technical recruiters. |
| 8 | **F1 Historical Performance** (Power BI) | Personal project. Interesting normalization angle, lower business relevance. |
| 9 | **F1 Data Analysis** (Python + SQL) | Academic origin. Oldest project.

---

## Open decisions (your call)

- **LinkedIn URL:** Your profile URL has a special character (í). Worth checking it resolves correctly.
- **Tagline in Hero:** I'll draft a few options for you to choose from when we get there.

---

## Locked decisions

- **All 9 projects stay** — no cuts (includes fabric-nps-rolling-pipeline added from GitHub)
- **Project cards** — minimal: title, type badge, 2-line summary, tool tags, expandable details, GitHub link. No in-page modal or detail page — GitHub is the detail view.
- **One image per project card** — a single screenshot where one exists (dashboards especially). Pipeline/engineering projects with no visual output: skip the image. Images sourced from `notion_portfolio/`, moved to `src/assets/projects/` before Phase 3.
- **CV link** — already updated in `content/about.md`
- **Contact section** — links only (LinkedIn, GitHub, Kaggle, Email). No form.

---

## File structure

```
my_portfolio/
├── src/
│   ├── components/     ← small reusable pieces (buttons, cards, badges)
│   ├── sections/       ← full sections (Hero.jsx, About.jsx, Projects.jsx...)
│   └── assets/         ← images, icons
├── content/
│   ├── about.md
│   ├── skills.md
│   └── projects/
│       └── *.md        ← one file per project (8 total)
├── CLAUDE.md           ← context for Claude (do not delete)
├── PLANNING.md         ← this file
└── README.md
```

---

## Design decisions (already locked in)

- Dark theme only — no light mode
- Green palette: `#3A7A5A` (primary), `#2F6B4F` (dark), `#2A5E45` (darker)
- Background: near-black (`#0f1117`)
- Animations: subtle only — hover states, smooth scrolling, maybe a fade-in on scroll
- Font: system font or one clean sans-serif (no decorative fonts)
- No backend, no database, no CMS
