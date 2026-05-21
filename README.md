# Joshinkan Dojo

Astro 5 site for the Center for Aikido Study (Joshinkan Dojo, Cary NC). Currently hosts three competing design variants — **Sumi**, **Kaze**, and **Yoru** — under one project so instructors can compare side-by-side before picking one. After a winner is chosen, the two other variants get deleted and the winner is promoted to the site root.

Production target: `https://www.raleighaikido.com`.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview  # serve dist/
```

Requires Node 18.17+ (or 20+).

## Variants

Each variant lives under its own URL prefix and ships only its own theme CSS (per-route bundling — no two themes are ever loaded on the same page).

| URL          | Variant | Feel                          |
|--------------|---------|-------------------------------|
| `/`          | picker  | Three tiles, links each       |
| `/sumi`      | Sumi    | Classical editorial, light    |
| `/kaze`      | Kaze    | Warm modern editorial         |
| `/yoru`      | Yoru    | Refined dark                  |

Each variant exposes `/<variant>`, `/<variant>/about`, and `/<variant>/visit`. A fixed switcher at the bottom of every variant page jumps to the same logical page in the other two variants.

## Structure

```
src/
├── data/site.ts                       SHARED: schedule, contact, dues, links, nav labels
├── content/instructors/*.md           SHARED: instructor bios + photo refs
├── content.config.ts                  collection schema (uses image() for photos)
├── assets/                            optimized via astro:assets
│
├── layouts/
│   ├── PickerLayout.astro             chrome-less shell for /
│   ├── SumiLayout.astro               imports sumi.css + sumi chrome
│   ├── KazeLayout.astro               imports kaze.css + kaze chrome
│   └── YoruLayout.astro               imports yoru.css + yoru chrome
│
├── components/
│   ├── Map.astro                      Google Maps embed (no API key)
│   ├── VariantSwitcher.astro          fixed peer-link bar
│   ├── sumi/  { Header, Footer, Schedule, InstructorList }.astro
│   ├── kaze/  { Header, Footer, Schedule, InstructorList }.astro
│   └── yoru/  { Header, Footer, Schedule, InstructorList }.astro
│
├── styles/
│   ├── sumi.css
│   ├── kaze.css
│   └── yoru.css
│
└── pages/
    ├── index.astro                    picker
    ├── sumi/{index,about,visit}.astro
    ├── kaze/{index,about,visit}.astro
    └── yoru/{index,about,visit}.astro
```

**Per-variant component folders, not a single themed component.** The variants' markup truly differs (Kaze has `.brand-tag`, `.schedule-row-k`, `.stats`; Yoru has `.sec-header` / `.sec-code` and numbered schedule rows; Sumi has kanji columns). Three small parallel folders keep each design faithful and let two folders get deleted cleanly once the winner is picked.

## Shared data

Edit once, all three variants pick it up:

- **`src/data/site.ts`** — `SITE`, `CONTACT`, `SCHEDULE`, `DUES`, `NAV`, `LINKS`. The shared `NAV` constant holds labels with bare paths (`/`, `/about`, `/visit`); each per-variant Header prefixes them with its variant slug at render time.
- **`src/content/instructors/*.md`** — one Markdown file per instructor. Frontmatter `photo:` is a relative path to `src/assets/instructors/*` and is typed as `ImageMetadata` via `image()` in the collection schema.

## Images

All images use `astro:assets` so the build emits responsive optimized WebP variants. Source files live under `src/assets/` (not `public/`). To add a new image:

1. Drop the file in `src/assets/`.
2. `import` it at the top of the `.astro` page and pass to `<Image src={...} alt="..." widths={[...]} sizes="..." />`.

For instructor portraits, set `photo:` in the instructor Markdown to a path relative to the file (e.g. `../../assets/instructors/turner.png`).

## Picking the winner

After instructors choose a variant:

1. Delete the other two variants' `src/components/<variant>/`, `src/layouts/<Variant>Layout.astro`, `src/styles/<variant>.css`, and `src/pages/<variant>/`.
2. Promote the winner: move `src/pages/<winner>/{index,about,visit}.astro` to `src/pages/{index,about,visit}.astro` and update import paths in the layout.
3. Delete `VariantSwitcher.astro` and remove its `<VariantSwitcher />` calls from the surviving layout.
4. Delete `src/pages/index.astro` (the picker) — superseded by the promoted home.
5. Drop variant slugs from `NAV` consumers in the surviving Header.
6. Delete `Site Designs/` (the original HTML reference designs).

## Deferred until launch

Tracked but not implemented while still in variant-comparison mode:

- Mobile hamburger nav
- `JSON-LD MartialArtsSchool` schema
- Favicon, OG image
- Real instructor portraits in the spots that still show placeholders
