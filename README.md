<div align="center">

<img src="./public/favicon.svg" alt="" align="center" height="64" />

# Restaurante Lino

[![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![React](https://img.shields.io/badge/React-19-58c4dc?style=flat-square&logo=react&logoColor=white)](https://react.dev)
[![TanStack Start](https://img.shields.io/badge/TanStack%20Start-ff4154?style=flat-square&logo=reactrouter&logoColor=white)](https://tanstack.com/start/latest)
[![Cloudflare Workers](https://img.shields.io/badge/Cloudflare%20Workers-f38020?style=flat-square&logo=cloudflare&logoColor=white)](https://workers.cloudflare.com)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind%20CSS-v4-0ea5e9?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Bun](https://img.shields.io/badge/Bun-000?style=flat-square&logo=bun&logoColor=white)](https://bun.sh)

Bilingual (PT/EN) restaurant website for Restaurante Lino — a family-run Portuguese restaurant in Castanheira, Paredes de Coura. Built with TanStack Start, deployed on Cloudflare Workers.

</div>

## Features

- **Bilingual by design** — Portuguese default (`/`), English at `/en`. Full i18n via `react-i18next` without browser detection; locale is derived from the URL path.
- **Rich homepage** — Hero section with full-viewport imagery and call-to-action buttons, chef biography, featured dishes gallery, contact information with embedded map, and a curated footer.
- **Menu pages** — Both languages render a structured, data-driven menu (categories, items, prices) editable from a web CMS, with an optional per-language image override for special/handwritten menus. Backed by Cloudflare KV; falls back to the i18n seed data when nothing has been saved yet.
- **Menu CMS** — Password-protected admin at `/admin/menu` to edit menu sections, items and prices, and upload a menu image (converted to WebP in-browser). No code changes or redeploy needed to update the menu.
- **SSR-first** — Server-side rendered on Cloudflare Workers for fast initial loads and SEO.
- **SEO optimized** — Per-route `head()` with localized titles, descriptions, and Open Graph tags; `hreflang` alternate links between language versions; JSON-LD `Restaurant` schema for rich search results; dynamic `sitemap.xml` endpoint.
- **Reservation CTA** — Phone-based booking (`tel:` link). No backend or database required.
- **Resilient error handling** — Custom middleware that captures SSR crashes and serves a branded 500 error page.
- **Responsive design** — Fully mobile-friendly with adaptive navigation, responsive image grids, and touch-friendly interactions.

## Tech stack

| | |
|---|---|
| **Runtime** | [Bun](https://bun.sh) (dev), [Cloudflare Workers](https://workers.cloudflare.com) (production) |
| **Framework** | [TanStack Start](https://tanstack.com/start/latest) + [TanStack Router](https://tanstack.com/router/latest) |
| **UI** | [React 19](https://react.dev), [Tailwind CSS v4](https://tailwindcss.com), [shadcn/ui](https://ui.shadcn.com) (New York style) |
| **i18n** | [i18next](https://www.i18next.com) + [react-i18next](https://react.i18next.com) |
| **Linting** | [ESLint](https://eslint.org) + [Prettier](https://prettier.io) with `typescript-eslint` |
| **CI/CD** | GitHub Actions → Cloudflare Workers |

## Project structure

```
src/
├── server.ts                  # SSR entry point (Cloudflare Worker)
├── start.ts                   # TanStack Start instance with error middleware
├── router.tsx                 # Router and QueryClient initialization
├── styles.css                 # Tailwind v4 + custom rustic Portuguese palette
│
├── routes/                    # File-based routes
│   ├── __root.tsx             # Root layout (i18n, query client, SEO tags)
│   ├── index.tsx              # PT home page
│   ├── menu.tsx               # PT menu page
│   ├── en.tsx                 # EN layout wrapper (Outlet)
│   ├── en.index.tsx           # EN home page
│   ├── en.menu.tsx            # EN structured menu page
│   └── sitemap[.]xml.ts       # Dynamic sitemap generation
│
├── components/                # React components
│   ├── Navbar.tsx             # Fixed navbar with scroll-aware styling
│   ├── HeroSection.tsx        # Full-screen hero with CTAs
│   ├── AboutSection.tsx       # Chef bio + restaurant story
│   ├── DishesSection.tsx      # Featured dishes grid
│   ├── ContactSection.tsx     # Contact info + map embed
│   ├── Footer.tsx             # Multi-column footer
│   ├── MenuPageContent.tsx    # Structured i18n-driven menu
│   ├── LanguageSwitcher.tsx   # PT/EN toggle
│   └── ui/                    # shadcn/ui primitives
│
├── i18n/                      # Internationalization
│   ├── index.ts               # i18next initialization
│   └── messages/
│       ├── pt.json            # Portuguese translations
│       └── en.json            # English translations
│
├── lib/                       # Utilities
│   ├── locale.ts              # URL-based locale detection
│   ├── utils.ts               # cn() helper (clsx + tailwind-merge)
│   ├── error-capture.ts       # SSR error capture utilities
│   └── error-page.ts          # Branded 500 error page HTML
│
├── hooks/
│   └── use-mobile.tsx         # Mobile viewport hook
│
└── assets/                    # Static images
    ├── hero.png, logo.png
    ├── chef-jose-gomes.jpeg
    ├── dish-*.png             # Dish photography
    └── menu-fim-de-semana-lino.jpeg
```

## Getting started

### Prerequisites

- [Bun](https://bun.sh) >= 1.x
- [Node.js](https://nodejs.org) >= 22 (for the CI pipeline)

### Local development

```bash
# Install dependencies
bun install

# Start the development server
bun run dev
```

The app runs at `http://localhost:5173` by default. Hot module replacement is enabled.

### Build for production

```bash
bun run build
```

Output is written to `dist/`. To preview the production build locally:

```bash
bun run preview
```

### Lint & format

```bash
bun run lint      # ESLint check
bun run format    # Prettier formatting
```

## Deployment

The site is deployed to Cloudflare Workers. Pushes to `main` trigger an automatic deploy via GitHub Actions:

```bash
# Manual deploy from your machine
bun run deploy
```

> [!NOTE]
> Deploying requires valid `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` secrets configured in your repository.

## Menu CMS

The menu is editable at `/admin/menu` without touching code. Content is stored in a Cloudflare KV namespace (`MENU_CMS_KV`) — structured data under `menuData:{pt,en}` and an optional image under `menuImage:{pt,en}`. Until something is saved, pages fall back to the seed data in `src/i18n/messages/*.json`.

One-time setup:

```bash
# 1. Create the KV namespace, then paste the returned id into wrangler.jsonc
#    (replaces "REPLACE_WITH_KV_NAMESPACE_ID")
wrangler kv namespace create MENU_CMS_KV

# 2. Set the admin password (used to log into /admin/menu)
wrangler secret put ADMIN_PASSWORD

# 3. (optional, for local dev) create a .dev.vars file at the project root:
```

```env
ADMIN_PASSWORD=test
```

Regenerate binding types after editing `wrangler.jsonc`:

```bash
wrangler types
```

Editing:

- Visit `/admin/menu`, log in with `ADMIN_PASSWORD`.
- PT/EN tabs. Edit section titles, add/remove/reorder sections, edit item name, price and description.
- Upload a menu image to override the structured menu for that language; clear it to revert.
- Changes are live immediately (KV is read on each menu request).

> [!NOTE]
> Sections that use nested subsections in the seed data are shown read-only in the editor; the flat item list covers day-to-day edits.

## Design

The visual identity evokes a rustic Portuguese tavern:

- **Palette** — Warm cream and parchment backgrounds, wine-red primary, olive green accents, azulejo blue details, espresso brown text.
- **Typography** — Cormorant Garamond (serif headings) + Inter (sans-serif body) via Google Fonts.
- **Texture** — Subtle paper-texture gradients on sections, decorative ornament dividers, soft shadows and rounded corners.

## i18n strategy

Locale is determined exclusively from the URL path — no cookie or browser detection:

| Path | Language |
|---|---|
| `/` | Portuguese (default) |
| `/en` | English |
| `/menu` | Portuguese menu |
| `/en/menu` | English menu |

The `LanguageSwitcher` component navigates between the current page and its counterpart in the other language. All translatable content lives in `src/i18n/messages/{pt,en}.json`.
