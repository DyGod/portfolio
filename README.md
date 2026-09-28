# Portfolio

Personal portfolio built with [React Router v8](https://reactrouter.com/) framework mode (the successor to Remix), Tailwind CSS v4, and TypeScript. Every page is pre-rendered to static HTML at build time.

**Requires Node ≥ 22.22** (see `.nvmrc`). With nvm-windows: `nvm use 26.10.0`.

## Scripts

| Command             | What it does                                         |
| ------------------- | ---------------------------------------------------- |
| `npm run dev`       | Dev server with HMR at http://localhost:5173         |
| `npm run typecheck` | Generate route types and run `tsc`                   |
| `npm run build`     | Pre-render the site into `build/client/`             |
| `npm run preview`   | Serve `build/client/` locally to check the real build |

## Where things live

| To change…            | Edit                                                  |
| --------------------- | ----------------------------------------------------- |
| Colors & fonts        | `app/app.css` → `@theme` block (+ dark-mode overrides) |
| All content / resume  | `app/data/resume.ts`                                  |
| Resume PDF download   | Put the file at `public/resume.pdf`                   |
| Pages / routes        | `app/routes.ts`, `app/routes/*.tsx`                   |
| Page layout (nav etc.) | `app/root.tsx`, `app/components/`                    |

Components only use semantic color utilities (`bg-bg`, `bg-surface`, `text-fg`, `text-muted`, `text-primary`, `border-border`, `text-accent`), so changing a token in `app.css` restyles the whole site.

Adding a project to `projects` in `resume.ts` automatically creates its `/projects/<slug>` page (see `react-router.config.ts`).

## Deploy

Run `npm run build` and upload the contents of `build/client/` to any static host (Netlify, Cloudflare Pages, GitHub Pages, Vercel static, S3…).
