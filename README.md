## Restaurante Lino — Site Plan

A warm, rustic, premium Portuguese restaurant website built on the project's existing stack (TanStack Start + React + Tailwind v4 + TypeScript). Note: your brief mentions Next.js App Router and `/app/[locale]`, but this project runs on **TanStack Start**, so locale routing will use TanStack file routes (`/`, `/en`, `/menu`, `/en/menu`) and `react-i18next` instead of `next-intl`. The visual result and feature set will match the brief.

### Pages & routes
- `/` — Portuguese home (default)
- `/menu` — Portuguese menu
- `/en` — English home
- `/en/menu` — English menu

Each route gets its own `head()` with localized title, description, og tags, and JSON-LD `Restaurant` schema on home. Canonical + `hreflang` alternate links between PT/EN.

### Home page sections
1. **Hero** — full-width generated image (rustic Portuguese tavern interior, warm light), restaurant name in elegant serif, slogan, two CTAs (Ver Menu / Reservar Mesa → `tel:`).
2. **About** — Portuguese-first copy on tradition, local ingredients, family atmosphere, regional Minho cooking.
3. **Featured dishes** — 5 cards (Arroz de Sarrabulho, Bacalhau à Lino, Posta Barrosã, Rojões à Minhota, Leite Creme Caseiro), each with custom-generated dish photo.
4. **Gallery** — responsive masonry-ish grid, 6 generated images (food, interior, wine, rustic detail, exterior, table setting).
5. **Contact** — address (Castanheira, Paredes de Coura), phone, email, opening hours table, embedded Google Maps `<iframe>` placeholder, reservation CTA.
6. **Footer** — nav, social placeholders, contact, copyright.

### Menu page
- Elegant categorized card layout (Entradas / Carnes / Peixes / Sobremesas / Bebidas) with placeholder dishes & prices.
- "Download PDF" button wired to `/menu.pdf` placeholder in `public/`.
- Inline `<embed>`/`<iframe>` PDF preview with mobile fallback to "open in new tab".

### Components (`src/components/`)
`Navbar`, `Footer`, `HeroSection`, `SectionTitle`, `DishCard`, `GalleryGrid`, `ContactInfo`, `LanguageSwitcher`, `MenuViewer`, `CTAButton`, `Container`.

### i18n
- `react-i18next` + `i18next` (no language detector — locale derived from URL prefix).
- `src/i18n/messages/pt.json`, `src/i18n/messages/en.json` with all strings.
- `LanguageSwitcher` toggles between current path and its PT/EN counterpart.
- Initialized in `__root.tsx`; locale resolved from `useLocation()`.

### Design system (`src/styles.css`)
Rewrite tokens for rustic Portuguese palette:
- Backgrounds: warm cream `oklch(0.97 0.02 80)`, soft parchment
- Primary: deep terracotta / wine red
- Accent: olive green + muted azulejo blue (for subtle details only)
- Foreground: dark espresso brown
- Fonts: **Cormorant Garamond** (headings, serif) + **Inter** (body) via Google Fonts in `__root.tsx`
- Soft shadows, rounded-xl cards, subtle paper-texture background on sections

### Imagery
Generate ~12 custom images with `imagegen` into `src/assets/`:
- 1 hero (rustic tavern interior, warm candlelight)
- 5 dish photos (top-down rustic plating on wood)
- 6 gallery shots (interior, wine, exterior stone, table setting, dessert close-up, fireplace)
- 1 OG image (1920×1080)
- 1 simple favicon (terracotta "L" monogram, transparent PNG)

### SEO & meta
- Per-route `head()` with PT/EN titles & descriptions, og:title/description/image/url, hreflang alt links, canonical on leaves only.
- JSON-LD `Restaurant` on home (address, geo, openingHours, servesCuisine: Portuguese).
- Semantic HTML (`<header>`, `<main>`, `<nav>`, `<section>`, `<footer>`, proper headings, alt text).
- `public/robots.txt` + `public/sitemap.xml` with the four routes.

### Out of scope (for this build)
- Real reservation backend (CTA opens `tel:` link / mailto).
- Real menu PDF (placeholder file in `public/`; you can replace later).
- Google Maps API key (uses public embed iframe, no key needed).

### Deliverables
Fully working preview with PT default + EN at `/en`, custom imagery, downloadable placeholder menu PDF, polished rustic design — ready to publish.