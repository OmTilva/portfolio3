# Om Tilva — Portfolio

Personal portfolio built with React, TypeScript, and Vite. Multi-page (routed), with a subtle 3D
node-graph in the hero, Framer Motion transitions, and a dark/light theme toggle.

## Stack

- Vite + React 19 + TypeScript
- React Router (routing)
- Tailwind CSS v4 (styling, via `@tailwindcss/vite`)
- Framer Motion (page + scroll animations)
- React Three Fiber + Drei (the hero's 3D node graph)
- lucide-react (icons)

## Getting started

```bash
pnpm install
pnpm dev
```

Open the printed local URL (usually http://localhost:5173).

## Scripts

- `pnpm dev` — start the dev server
- `pnpm build` — type-check and build for production into `dist/`
- `pnpm preview` — serve the production build locally
- `pnpm lint` — run oxlint

## Structure

```
src/
  components/
    layout/     Navbar, Footer, Layout, ThemeToggle
    three/      HeroShape (the 3D node graph)
    ui/         Card, Tag, ProjectCard, Timeline, etc.
  context/      ThemeContext (dark/light)
  data/         portfolio.ts — all content lives here
  hooks/        useTheme, usePrefersReducedMotion
  pages/        Home, Experience, Projects, Education
public/
  profile.jpg
  Om_Tilva_Resume.pdf
```

## Editing content

Everything text-based — experience, projects, education, skills, stats — lives in
`src/data/portfolio.ts`. Edit that file and the whole site updates; no need to touch components
for content changes.

## Deploying

This project is set up for Vercel (a `vercel.json` handles SPA route rewrites so direct links like
`/projects` don't 404). Push to a GitHub repo and import it in Vercel, or run `vercel` from this
folder with the Vercel CLI. Any static host works as long as it rewrites unknown paths to
`index.html`.
