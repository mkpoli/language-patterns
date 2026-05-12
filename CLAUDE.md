# Language Patterns

A cross-linguistic database of recurring **typological** and **diachronic** patterns — how languages converge, diverge, distribute, and change. This is a PoC.

## Stack

- SvelteKit (Svelte 5 runes mode) + TypeScript + Tailwind v4
- Cloudflare Workers via `@sveltejs/adapter-cloudflare` (`wrangler.jsonc`)
- `bun` for everything (`bun run dev | build | check | gen | preview`)
- No DB in PoC — data lives as TypeScript modules under `src/lib/data/`

After editing `wrangler.jsonc`, rerun `bun run gen` to refresh `worker-configuration.d.ts`.

## Data model

`src/lib/types.ts` defines the schema:

- **Pattern** — abstract cross-linguistic phenomenon ("Non-possession"). Has Strategies, Attestations, Examples, and `related` cross-links.
- **Strategy** — a subtype within a pattern ("Negated HAVE", "Existential absence"). Carries a `color` token from the palette in `src/lib/strategyColor.ts`.
- **Attestation** — claim that a Language uses a Strategy, with an expression and confidence.
- **Example** — concrete sentence with `original / transliteration / gloss / literal / natural`.
- **Pathway** — directional / cyclic change ("Jespersen's Cycle"). Has Stages and TimelineBands.
- **TimelineBand** — one colored band on the historical timeline for one language: `start, end, stageId, status, uncertaintyStart?, uncertaintyEnd?, note?`.

## Where seed data lives

| File | Content |
| --- | --- |
| `src/lib/data/languages.ts` | Language table (en, fr, es, de, ru, cy, ja, zh, tr) |
| `src/lib/data/patterns/existence.ts` | Pattern: "Existence" |
| `src/lib/data/patterns/non-possession.ts` | Pattern: "Non-possession" |
| `src/lib/data/pathways/jespersens-cycle.ts` | Pathway: "Jespersen's Cycle" — drives the timeline viz |
| `src/lib/data/index.ts` | Barrel exports + `getPattern / getPathway / topics` |

To add a pattern, create a file under `src/lib/data/patterns/` and register it in `src/lib/data/index.ts` and in the route's `entries()` function at `src/routes/patterns/[slug]/+page.ts`.

## Signature view

`src/lib/components/HistoricalTimeline.svelte` — SVG-based comparative timeline rendered on `/pathways/jespersens-cycle`. Per language it computes track packing for overlapping bands, sweeps an overlap-zone background, and renders status-specific fills (dominant / emerging / declining / approximate) with uncertainty pre/post-extensions.

## Routes

```
/                                homepage with question-style topic cards
/patterns                        all patterns
/patterns/[slug]                 pattern entry page (strategies → table → examples → related)
/pathways                        all pathways
/pathways/[slug]                 pathway page (stages + cycle diagram + comparative timeline)
/atlas                           stub for the world-atlas view (deferred)
```

Pattern and pathway pages are prerendered via `entries()`.

## TODO (the big roadmap)

**Visualizations**
- World atlas / map view (design ref 2) — MapLibre + Natural Earth boundaries, atlas filter panel, pattern legend, distribution-by-family widget.
- Semantic map (HAVE / EXIST / POSSESSION / LOCATION graph with per-language paths).
- Sound-change pathway viewer (/p/ graveyard) with branching tree.
- NPI / free-choice paradigm grid with cell-merging where one form covers multiple meanings.
- Layered timeline rows (form / meaning / function).
- Frequency "race chart" for corpus data.
- Reanalysis slider (lexical ↔ grammatical reading) for "have"-perfect cycle.
- Areal diffusion animation (time slider over the map).

**Content**
- More patterns: NPI/free-choice, comparison, possibility, age, weather, indefinite article from "one", demonstrative → article, go-future.
- More pathways: negative existential cycle, /p/ loss, demonstrative → definite article, have-perfect.
- Language profile pages (`/languages/[code]`) summarising all patterns for one language.
- Source / citation records and per-attestation confidence display.

**Platform**
- Cloudflare D1 (or KV) — move seed data into a real store with a build-time loader.
- Search (Cloudflare Vectorize or Pagefind).
- JSON/CSV export per entry.
- Contributor workflow (PR-based, since data is in repo).
- Filtering UI (by family, area, time period).
- `wrangler deploy` once ready to publish.

**Visual grammar**
- Settle the design system: shape vocabulary (rectangle=stage, diamond=reanalysis, dashed=uncertain), accessible color tokens, dark mode.

## Commands

```
bun run dev      # vite dev on :5173
bun run check    # wrangler types --check + svelte-kit sync + svelte-check
bun run build    # production build into .svelte-kit/cloudflare
bun run preview  # wrangler dev against the built worker on :4173
bun run gen      # regenerate worker-configuration.d.ts from wrangler.jsonc
```
