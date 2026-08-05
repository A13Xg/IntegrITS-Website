# IntegrITS Website Design Exploration

A production-ready Vite + React + TypeScript showcase for IntegrITS Corporation. The project presents five dramatically different website concepts built from one shared typed content model and deployed with `HashRouter` for GitHub Pages compatibility.

## Concepts

1. **Mission Command** — tactical cyber-tech dashboard
2. **Human Integrity** — warm editorial, people-first storytelling
3. **Precision Grid** — Swiss modernist systems layout
4. **Modern Defense** — cinematic glassmorphic stealth
5. **Editorial Legacy** — archival neo-brutalist narrative

## Scripts

- `npm run dev` — start the Vite development server
- `npm run build` — type-check in build mode and create a production build
- `npm run preview` — preview the built site locally
- `npm run lint` — run ESLint
- `npm run format:check` — verify formatting with Prettier
- `npm run typecheck` — run TypeScript without emitting files
- `npm run test` — run Vitest
- `npm run verify` — run formatting, lint, typecheck, tests, and build

## Architecture Highlights

- `HashRouter` routes for GitHub Pages
- Route-level code splitting with `React.lazy`
- Shared strict content model in `src/content/`
- Responsive concept pages with semantic landmarks and a skip link
- Skeleton loading states and reduced-motion support
- GitHub Actions CI and Pages deployment workflows

## Local Development

```bash
npm install
npm run dev
```

## Deployment

The Vite base path is configured for this repository:

```txt
/IntegrITS-Website/
```

Push to `main` to trigger the GitHub Pages deployment workflow.
