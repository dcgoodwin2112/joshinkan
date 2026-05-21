# Joshinkan Dojo

Astro 5 site for the Center for Aikido Study (Joshinkan Dojo, Cary NC).

Production target: `https://www.raleighaikido.com`.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview  # serve dist/
```

Requires Node 18.17+ (or 20+).

## Structure

```
src/
├── data/site.ts                       schedule, contact, dues, links, nav
├── content/instructors/*.md           instructor bios + photo refs
├── content.config.ts                  collection schema (image() for photos)
├── assets/                            optimized via astro:assets
│
├── layouts/Layout.astro               sole layout; injects theme init + chrome
│
├── components/
│   ├── Header.astro
│   ├── Footer.astro
│   ├── Schedule.astro
│   ├── InstructorList.astro
│   ├── Map.astro                      Google Maps embed (no API key)
│   └── ThemeToggle.astro              tri-state light/dark/auto button
│
├── styles/main.css                    light defaults + dark overrides
│
└── pages/{index,about,visit}.astro    three content routes
```

## Shared data

Edit once, all pages pick it up:

- **`src/data/site.ts`** — `SITE`, `CONTACT`, `SCHEDULE`, `DUES`, `NAV`, `LINKS`.
- **`src/content/instructors/*.md`** — one Markdown file per instructor. Frontmatter `photo:` is a relative path to `src/assets/instructors/*` and is typed as `ImageMetadata` via `image()` in the collection schema.

## Images

All images use `astro:assets`. Source files live under `src/assets/` (not `public/`). To add one:

1. Drop it in `src/assets/`.
2. `import` it in the `.astro` page and pass to `<Image src={...} alt="..." widths={[...]} sizes="..." />`.

For instructor portraits, set `photo:` in the instructor Markdown to a path relative to the file (e.g. `../../assets/instructors/turner.png`).

## Theming

The site ships a **light** and a **dark** theme, plus an **auto** mode that follows the operating system's `prefers-color-scheme`. A button in the header cycles `auto → light → dark → auto`; the choice persists in `localStorage`.

How it works:

- `src/styles/main.css` defines theme colors and fonts as CSS variables on `:root` (light defaults). A `:root[data-theme='dark']` block overrides those variables with the dark palette (charcoal background, cream text, amber accent) and the dark font pairing (Newsreader serif + Manrope sans). Both font families load globally so swapping is instant.
- The light "card" surfaces — `.schedule-card`, `.site-footer` — render via `--card-bg` / `--card-fg` so they stay visibly distinct from the page in both themes.
- A small blocking script in `<head>` (in `Layout.astro`) reads `localStorage.theme` and applies `data-theme` to `<html>` *before* paint, avoiding a flash of incorrect theme.
- `src/components/ThemeToggle.astro` handles the cycle on click and listens to `matchMedia('(prefers-color-scheme: dark)')` so OS-level changes take effect immediately while in auto mode.

## Pre-launch checklist

- [ ] `JSON-LD MartialArtsSchool` schema
- [ ] Favicon
- [ ] OG image
