# Aditya Purohit — AI Engineer & Builder

Personal portfolio built with Next.js App Router and Tailwind CSS.

The site is intentionally structured around technical proof rather than a long list of projects: selected systems, architecture, engineering decisions, experience, and links to source code.

## Positioning

**AI Engineer building autonomous AI systems.**

Primary areas:
- Autonomous agents and AI developer tooling
- RAG and multimodal retrieval
- Browser automation and intelligent workflows
- AI application engineering

## Structure

- `src/app/page.tsx` — homepage
- `src/components/` — navigation, hero, projects, experience, awards, contact
- `src/data/portfolio.ts` — portfolio content and project case-study data
- `src/app/projects/[slug]/page.tsx` — project case-study pages

## Featured systems

1. AI Builder — autonomous coding workflow
2. IntelliForm — framework-aware browser automation
3. Agentic Dating — multi-agent evaluation environment
4. Hierarchical Math RAG — structure-aware multimodal retrieval
5. Med-Le — multimodal AI application

## Local development

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run start
```

## Deployment

The project is designed for Vercel deployment with the Next.js App Router.

The resume is served from `/public/Aditya_purohit_2026.pdf`.

## Content principle

Do not add unsupported metrics. Project pages should separate what is implemented today from what still needs benchmarking, evaluation, hardening, or productionization.
