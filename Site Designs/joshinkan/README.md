# Joshinkan Dojo, site redesign

Three multi-page design variants for raleighaikido.com plus an Astro scaffold for porting the winner. The current single page site is restructured into three pages: Home, About, Visit.

## What is in this folder

```
variant-1-sumi/      Three static HTML pages, classical editorial aesthetic
variant-2-kaze/      Three static HTML pages, warm modern editorial aesthetic
variant-3-yoru/      Three static HTML pages, refined dark aesthetic
astro-scaffold/      Astro 5 project, default theme is Sumi, others swappable
```

To review the variants, open each `index.html` in a browser and click through the nav.

## Page structure

All three variants ship the same three pages so they can be compared 1:1.

**Home.** Hero, what we practice, schedule preview, primary CTA. The orientation page.

**About.** Dojo story since 2020, what Aikido is, the three instructors, lineage. The depth page, for people deciding if this practice is for them.

**Visit.** Schedule, two paths to begin, dues, what to wear, location, contact. The action page, for people ready to come train.

This split keeps each page focused: who we are, what the practice is, and how to come.

## Variant 1: Sumi 墨

> Classical editorial. Ink on paper, vermilion accent, centered typographic columns.

Cormorant Garamond display paired with body serif, plus a Japanese serif for kanji. Warm paper background, sumi ink text, vermilion accents used sparingly. Classical proportions. Hairline rules. Kanji column (合氣道) in the hero as the signature element.

Mood: quiet, reverent, traditional. Reads like a small literary journal. Lowest reliance on photography of the three.

Best fit if the dojo wants to feel timeless and aligned with traditional Japanese aesthetics. The most "small nonprofit dojo" coded of the three.

## Variant 2: Kaze 風

> Warm modern editorial. Forest, clay, cream, sage. Asymmetric magazine grid.

Variable serif paired with sans, plus a Japanese serif for kanji. Cream background, deep forest green primary, terracotta clay accent, sage soft. Rounded brand mark. Stats bar. Pull quotes that break the grid. Full-bleed forest footer.

Mood: warm, contemporary, welcoming. Reads like Kinfolk or a thoughtful boutique studio. Modern without losing the practice's character.

Best fit if the dojo wants to attract a younger or first-time martial arts audience without sacrificing depth. The most conversion-friendly layout, with the strongest hierarchy and clearest CTAs.

## Variant 3: Yoru 夜

> Refined dark. Near-black, warm cream, amber. Mono labels, hairline rules, kanji watermarks.

Literary serif paired with sans and a mono for accents, plus a Japanese serif for kanji. Near-black background, warm cream text, restrained amber accent. Kanji watermark in the hero. Mono section labels. Hairline rules.

Mood: quiet confidence, modern, evening. Reads like a contemporary art catalog. Distinct from a typical "dark mode" site by leaning on warm neutrals rather than cool blacks.

Best fit if the dojo wants to feel intentional and modern without leaning on bright color. Works well if photography becomes available later, since dark backgrounds flatter most martial arts imagery.

## What is different from previous work

The earlier round produced single page variants (Shoji, Tatami, Keiko). This round splits into three pages and starts fresh on aesthetics. Sumi is closest in spirit to the previous Shoji direction but tighter and more typographically refined. Kaze and Yoru are net new directions.

## Trade offs at a glance

|                 | Sumi               | Kaze                  | Yoru                  |
|-----------------|--------------------|-----------------------|-----------------------|
| Tone            | Quiet, traditional | Warm, modern          | Refined, evening      |
| Color           | Cream, vermilion   | Cream, sage, clay     | Charcoal, amber       |
| Typography      | Classical serif    | Variable serif + sans | Literary serif + mono |
| Needs photos    | Optional           | Helpful               | Helpful               |
| Conversion feel | Subtle             | Strongest             | Strong                |
| Risk            | Could feel sleepy  | Could feel trendy     | Could feel cold       |

My recommendation, if you want one: **Kaze**. It balances welcoming with depth, doesn't depend on photography to land, and has the clearest hierarchy for a first-time visitor scanning quickly. Sumi is the safest choice for tradition. Yoru is the most distinctive but asks the most of the rest of the brand to keep up.

## Once you pick

The Astro scaffold in `astro-scaffold/` is wired to the Sumi markup by default and runs out of the box. To switch themes, swap `src/styles/global.css` for `theme-kaze.css` or `theme-yoru.css` AND update the Header and Footer components to match that variant's markup (each variant has its own structure, not just different CSS). See `astro-scaffold/README.md` for setup and the theming caveat.

```bash
cd astro-scaffold
npm install
npm run dev
```

## Open items

- Real photography is the single biggest lift. All three variants accommodate it; only Sumi works fine without.
- Mobile hamburger nav is not yet built. Easy Astro island.
- Google Maps embed is a placeholder.
- JSON-LD MartialArtsSchool schema should be added before launch.
- Favicon and OG image need designing. Could reuse the kanji 浄心館 as the mark.
