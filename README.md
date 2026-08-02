# WeFaber — Corporate Website

Corporate site for **WeFaber**, a software and applied AI studio based in Montevideo, Uruguay. This is the public face of the Itica-to-WeFaber rebrand: a single-page marketing site with bilingual (English/Spanish) content, scroll-driven motion, and static, crawler-safe SEO metadata.

## Description

WeFaber builds software, applied AI and R&D products ("we fabricate" — the name is a commitment to shipping finished, usable things). This site presents the studio's three practices — software development, applied AI, and research & development — plus the story behind the name, the team's stack and approach, and its values. It is served at [wefaber.net](https://wefaber.net).

## Features

- **Bilingual by default** — full English and Spanish copy with a client-side language switcher (EN/ES), backed by a typed i18n copy layer.
- **Static SEO without JavaScript** — title, description, canonical, Open Graph and Twitter tags are injected at build time from `src/config/site.ts` and the English copy, so social scrapers (Twitter, LinkedIn, Slack) see the correct metadata; `src/components/SEO.tsx` keeps the client-rendered tags deduplicated.
- **Single-page sections** — What we do, The name, Stack & approach, Values, and Contact, with scroll-reveal animations built on Motion.
- **Generated brand assets** — favicons and the Open Graph image are generated from source art under `brand/` via `bun run assets` (script: `scripts/generate-assets.ts`).
- **Continuous deployment** — a GitHub Actions workflow deploys the site to a self-hosted runner on every push to `master`.

## Tech Stack

| Layer       | Technology                                   |
| ----------- | -------------------------------------------- |
| Runtime     | [Bun](https://bun.sh)                        |
| Frontend    | React 19 + TypeScript + Vite 8               |
| Styling     | Tailwind CSS v4 (via `@tailwindcss/vite`)    |
| Animation   | [Motion](https://motion.dev)                 |
| Icons       | lucide-react                                 |
| SEO         | react-helmet-async + build-time tag injection|
| Linting     | Oxlint (`.oxlintrc.json`)                    |
| CI/CD       | GitHub Actions on self-hosted runners        |

## Getting Started

```bash
# Install dependencies
bun install

# Start the dev server
bun run dev

# Type-check
bun run typecheck

# Lint (oxlint)
bun run lint

# Production build
bun run build

# Preview the production build
bun run preview

# Regenerate favicons / OG assets from /brand
bun run assets
```

## Project Structure

```
wefaber-net/
├── src/
│   ├── components/       # UI sections (Hero, WhatWeDo, Stack, Values, Contact...)
│   ├── content/copy.ts   # Typed EN/ES copy layer (single source of words)
│   ├── config/site.ts    # Single source of truth for URLs, handles, brand
│   ├── i18n/             # Language provider + context
│   └── main.tsx / App.tsx
├── brand/                # Source art for generated assets
├── public/               # Generated favicons, OG image, fonts
├── scripts/              # generate-assets.ts (bun run assets)
├── index.html            # Static SEO tags (%TOKENS% substituted at build time)
└── .github/workflows/    # Deploy workflow (self-hosted runner, push to master)
```

## CI/CD

On every push to `master`, `.github/workflows/deploy.yml` runs on a self-hosted runner and invokes the generic deploy script with the `wefaber.net` site and repository URL.

## License

No license file is included in this repository.
