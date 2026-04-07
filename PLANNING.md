# PLANNING.md — Portfolio Roadmap

## What we're building

A single-page portfolio website. One long scrollable page, divided into sections. No separate pages, no routing, no login — just a clean, fast static site that loads instantly and works on any device.

The site presents Joaquín as an Analytics Engineer, not a generic analyst. Every section reinforces that positioning.

---

## Build phases

### Phase 1 — Foundation (DONE)
Git repo, Vite + React + Tailwind setup, all content files written, pushed to GitHub.

### Phase 2 — Layout + first POC (DONE)
Full page layout built, all 9 projects, all sections with real content. Reviewed and approved.

### Phase 3 — Visual design (DONE)
Full dark theme, green palette, spacing, typography, component styling applied.
Project hierarchy, card interactions, navbar active states, smooth scroll — all done.
No project images — skipped by decision.

### Phase 4 — Polish + interactions (DONE)
- Scroll animations: IntersectionObserver fade-in from bottom on all sections
- Mobile layout: hamburger menu for small screens
- Performance: profile photo compressed 2.2 MB → 581 KB
- UX: smooth scroll shared utility, View Projects button fixed, Email card copies to clipboard

### Phase 5 — Deploy (DONE)
Deployed to Vercel. Live at https://joaquin-ferrer-portfolio.vercel.app
Custom domain optional.

---

## Site sections (in order)

| # | Section | Notes |
|---|---------|-------|
| 1 | **Hero** | Name, title, tagline, photo, CTA buttons, social links |
| 2 | **About** | Bio + "How I think" principles merged into one section |
| 3 | **Projects** | Two tiers: featured (2-col full cards) + secondary (compact list) |
| 4 | **Skills** | Grouped by category, ordered by Analytics Engineer priority |
| 5 | **Contact** | LinkedIn, GitHub, Kaggle, Email cards |

---

## Project hierarchy

### Featured (4 projects) — full cards, 2-column grid, click to expand
| Project | Type |
|---------|------|
| Fabric NPS Rolling Pipeline | Data Engineering |
| CX Interview Ingestion Pipeline | Data Engineering |
| CX Data Analyst Challenge | End-to-End Analytics |
| Sales vs Targets Dashboard | Power BI — ETL + Dashboard |

### Secondary (5 projects) — compact horizontal list, click to expand one-liner
| Project | Type |
|---------|------|
| Sales Analysis Dashboard | Power BI — Commercial Analytics |
| Website Performance Dashboard | Power BI — Marketing Analytics |
| E-Commerce Sales Analysis | Exploratory Data Analysis |
| F1 Historical Performance Dashboard | Power BI — Personal Project |
| F1 Data Analysis | Data Engineering + Visualization |

---

## Locked decisions

- **No project images** — skipped. Image field exists in data but all set to null.
- **9 projects total** — no cuts.
- **Card interaction** — click anywhere on card to expand/collapse. Only one open at a time.
- **Crack animation** — detail panel expands from center (scaleY + max-height).
- **Detail panel** — green background (#2F6B4F), gray text, mint arrows.
- **Navbar** — active section highlight in green. "Joaquín Ferrer" scrolls to hero.
- **Smooth scroll** — custom RAF easing (700ms ease-in-out).
- **CV link** — https://drive.google.com/file/d/1iH_FYZtkNhHINkNI65pICpwkOV25cLqi/view
- **Contact section** — links only (LinkedIn, GitHub, Kaggle, Email). No form.
- **No light mode.**

---

## Key URLs

- **Kaggle:** https://www.kaggle.com/joaqunferrer
- **GitHub:** https://github.com/joacoferrer00
- **LinkedIn:** https://linkedin.com/in/joaquínferrer
- **CV:** https://drive.google.com/file/d/1iH_FYZtkNhHINkNI65pICpwkOV25cLqi/view

---

## Design tokens

- Background: `#0f1117`
- Surface: `#1a1d27`
- Surface 2: `#222533`
- Border: `#2a2d3a`
- Green primary: `#3A7A5A`
- Green dark: `#2F6B4F`
- Green darker: `#2A5E45`
- Text: `#e2e8f0`
- Text muted: `#94a3b8`
- Text faint: `#64748b`

---

## File structure

```
src/
  components/
    Navbar.jsx       ← fixed top nav, active section tracking, smooth scroll
    ProjectCard.jsx  ← full card + minimal card (minimal prop)
  sections/
    Hero.jsx         ← name, tagline, photo (cv.png), CTA buttons
    About.jsx        ← bio + "How I think" principles
    Projects.jsx     ← two-tier project layout
    Skills.jsx       ← skill groups from data/skills.js
    Contact.jsx      ← link cards
  data/
    projects.js      ← all 9 projects with highlights, tools, image (null)
    skills.js        ← skill groups ordered: Data Eng → SQL → Python → BI → Tools
  assets/
    cv.png           ← profile photo used in Hero
content/
  about.md           ← source of truth for bio content
  skills.md          ← source of truth for skills content
  projects/*.md      ← one file per project
```
