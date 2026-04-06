# CLAUDE.md — Portfolio Project Context

## Project
Personal data analyst portfolio website for Joaquín Ferrer. Static site, no backend.

## Owner
- **Name:** Joaquín Ferrer
- **Role:** Industrial Engineer → Business Intelligence Consultant → transitioning to Analytics Engineer
- **Stack:** Python, SQL, Apache Spark, Power Query, Power BI, Microsoft Fabric
- **GitHub:** joacoferrer00

## Tech Stack
- **Framework:** React (via Vite)
- **Styling:** Tailwind CSS
- **Build tool:** Vite
- **Deployment target:** Static hosting (Vercel or Netlify)

## Visual Rules
- **Theme:** Dark background always. No light mode.
- **Color palette:**
  - Primary greens: `#2F6B4F`, `#2A5E45`, `#3A7A5A`
  - Backgrounds: dark greys (e.g. `#0f1117`, `#1a1d27`)
  - Text: light grey/white
- **Animations:** Simple and purposeful only. Never decorative or distracting. Subtle hover states, smooth transitions, scroll reveals are fine.
- **Aesthetic:** Clean, professional, minimal. No gradients, no loud effects, no over-engineering.

## Professional Positioning
This is NOT a generic data analyst portfolio. The profile is positioned as:
- An **Analytics Engineer** who combines BI, data engineering practices, and automation
- A professional who **builds scalable data systems**, not just dashboards
- Someone who thinks in terms of **business impact**, not just data outputs

**Key message:** "I don't just analyze data — I build systems that make data useful, scalable, and automated."

**Core differentiators:**
- Automation focus: reducing manual work, building repeatable systems
- End-to-end thinking: data ingestion → transformation → visualization
- Business value connection: technical solutions tied to measurable outcomes
- Modern data stack: SQL, Python, Power BI, Microsoft Fabric, Spark

**Target roles:** Analytics Engineer, BI Engineer (technical), data roles with strong engineering + business mix  
**Target companies:** Data-driven companies, consulting firms, international environments

## Tone & Writing Rules
- Professional, direct, confident — no buzzwords
- Never use "passionate about data" or similar generic phrases
- Do not overuse "AI" as a buzzword
- Avoid making the profile look junior or overly academic
- Every tool mentioned must have context — no bare lists of technologies

## Site Sections
1. **Hero** — Name, title, short tagline, CTA links
2. **About** — Background, role, short bio — written with the positioning above in mind
3. **Projects** — Cards for each project, expandable detail view — emphasize business impact and system design
4. **Skills** — Grouped by category
5. **Contact** — Links (LinkedIn, GitHub, Kaggle, email)

## Content Source
All content lives in the `/content` folder:
- `content/about.md`
- `content/skills.md`
- `content/projects/*.md` — one file per project

Always read these files before generating or modifying any UI component. Do not invent content.

## Commit Rules
- **NEVER add Claude as co-author in commits.** No `Co-Authored-By` lines. Ever.
- Commit messages should be concise and in English.

## Project Structure
```
src/
  components/    ← reusable UI components
  sections/      ← full-page sections (Hero, About, etc.)
  assets/        ← images, icons
content/
  about.md
  skills.md
  projects/
    *.md
```
