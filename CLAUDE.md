# CLAUDE.md — Portfolio Project Context

## Project
Personal portfolio website for Joaquín Ferrer. Static site, no backend. Single scrollable page.

## Owner
- **Name:** Joaquín Ferrer
- **Role:** Industrial Engineer → BI Consultant → transitioning to Analytics Engineer
- **Stack:** Python, SQL, Apache Spark, Power Query, Power BI, Microsoft Fabric
- **GitHub:** joacoferrer00

## Tech Stack
- **Framework:** React (via Vite)
- **Styling:** Tailwind CSS
- **Build tool:** Vite
- **Deployment target:** Vercel or Netlify (not yet deployed)

## Current State
Phase 3 (visual design) is complete. Next is Phase 4: scroll animations, mobile layout, performance. See PLANNING.md for full detail.

## Visual Rules
- **Theme:** Dark background always. No light mode. Ever.
- **Color palette:**
  - Primary greens: `#3A7A5A` (primary), `#2F6B4F` (dark), `#2A5E45` (darker)
  - Backgrounds: `#0f1117` (page), `#1a1d27` (surface), `#222533` (surface 2)
  - Borders: `#2a2d3a`
  - Text: `#e2e8f0` (primary), `#94a3b8` (muted), `#64748b` (faint)
- **Animations:** Subtle and purposeful only. Hover states, smooth transitions, scroll reveals are fine. Never decorative.
- **Aesthetic:** Clean, professional, minimal. No gradients, no loud effects.

## Professional Positioning
Positioned as an **Analytics Engineer**, not a generic data analyst.

**Key message:** "I build systems that make data useful, scalable, and automated."

**Core differentiators:**
- Automation focus: reducing manual work, building repeatable systems
- End-to-end thinking: ingestion → transformation → visualization
- Business value: technical solutions tied to measurable outcomes
- Modern data stack: SQL, Python, Power BI, Microsoft Fabric, Spark

**Target roles:** Analytics Engineer, BI Engineer (technical), data roles with engineering + business mix

## Tone & Writing Rules
- Professional, direct, confident — no buzzwords
- Never use "passionate about data" or similar generic phrases
- Do not overuse "AI" as a buzzword
- Every tool mentioned must have context — no bare lists

## Site Sections (in order)
1. **Hero** — Name, title, tagline, profile photo, CTA buttons, social links
2. **About** — Bio + "How I think" principles (merged into one section)
3. **Projects** — Two tiers: featured full cards (2-col) + secondary compact list
4. **Skills** — Grouped: Data Engineering → SQL → Python → BI → Tools
5. **Contact** — Link cards (LinkedIn, GitHub, Kaggle, Email)

## Key Interactions (already built)
- Clicking a project card toggles expand/collapse — only one open at a time
- Expanded detail panel: green background, crack animation from center
- Navbar links highlight green for active section; "Joaquín Ferrer" scrolls to hero
- Smooth scroll: custom RAF easing, 700ms

## Important Links
- **CV:** https://drive.google.com/file/d/1iH_FYZtkNhHINkNI65pICpwkOV25cLqi/view
- **Kaggle:** https://www.kaggle.com/joaqunferrer
- **LinkedIn:** https://linkedin.com/in/joaquínferrer

## Content Source
Content lives in `/content` — read these before modifying any UI:
- `content/about.md`
- `content/skills.md`
- `content/projects/*.md`

Note: actual rendered content lives in `src/data/projects.js` and `src/data/skills.js` — the markdown files are the source of truth but the JS data files are what the UI reads.

## Commit Rules
- **NEVER add Claude as co-author in commits.** No `Co-Authored-By` lines. Ever.
- Commit messages should be concise and in English.

## Project Structure
```
src/
  components/
    Navbar.jsx       ← fixed nav, active section tracking, smooth scroll
    ProjectCard.jsx  ← full card + minimal variant (minimal prop)
  sections/
    Hero.jsx
    About.jsx        ← includes "How I think" principles at bottom
    Projects.jsx     ← two-tier layout (featured + secondary)
    Skills.jsx
    Contact.jsx
  data/
    projects.js      ← 9 projects, source of truth for UI
    skills.js        ← skill groups, ordered by Analytics Engineer priority
  assets/
    cv.png           ← profile photo (used in Hero, circular)
content/
  about.md
  skills.md
  projects/*.md
```
