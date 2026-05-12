# Language Patterns

**Recurring patterns across languages, space, and time.**

Live at [languagepatterns.org](https://languagepatterns.org).

Language Patterns is a typological and historical database of recurring linguistic patterns across the world's languages. Each entry asks the same kind of question — **"how do languages solve this problem, and how do those solutions change?"** — and answers it with comparison tables, aligned glosses, side-by-side example sentences, and timelines of change.

It is not a feature checklist or a generic encyclopedia. It is a curated, cross-linguistic record of:

- **Expression patterns** — how unrelated languages converge on the same handful of strategies to say *there is*, *I have*, *I don't have*, *anyone*, *no one*, *everyone*, *I am cold*, *X is bigger than Y*…
- **Polarity systems** — how affirmative ↔ negative pairs line up, where they go suppletive, how negation re-builds itself through Jespersen-type cycles, how negative existentials grow into general negators.
- **Pathways and cycles of change** — how a "step" becomes a negator, how a demonstrative becomes a definite article, how /p/ weakens through ɸ and h to nothing.
- **Areal and contact patterns** — where strategies cluster geographically, and where they spread without inheritance.

Every claim is meant to be cited, traceable, and revisable. Entries include a bibliography of the primary literature each cross-linguistic claim leans on.

## What you'll find

Each pattern entry follows the same shape:

- A plain-language question.
- A handful of named **strategies** (e.g. BE / HAVE / EXIST / LOCATIVE for existence).
- A **comparison table** showing which strategy each documented language uses, and the surface form it surfaces as.
- **Aligned example sentences** in many languages — original script, transliteration, morpheme gloss, literal translation, and natural translation — toggleable so a beginner can read the natural line and a linguist can read the gloss. The same test sentence is used across all languages, so contrasts are like-for-like, with universal vocabulary that works for endangered, historical, and contemporary languages alike.
- **Switchable example sets** for the dimensions that matter (e.g. inanimate / animate / plural — to expose animacy splits and number agreement).
- A dedicated **polarity** section where it applies, separating affirmative from negative content cleanly while keeping them on the same page so the relation between them is visible.
- A **References** section grounding the page in Stassen, Heine, Freeze, McNally, Veselinova, Croft, Miestamo, Haspelmath, Tamura, Bugaeva, Mosegaard Hansen, Wallage, and others.

Pathway entries (e.g. Jespersen's Cycle) add a **comparative historical timeline** that places several languages on the same axis, with overlap zones for periods when old and new forms coexisted, and visual conventions for *dominant*, *emerging*, *declining*, and *approximate-range* attestations.

The brief animating principle: **show language change as layered, directional, and uncertain** — not as a clean before-and-after.

## Languages

The database currently spans languages from Indo-European, Sino-Tibetan, Japonic, Koreanic, Turkic, Uralic, Afro-Asiatic, Atlantic-Congo, Austronesian, Austroasiatic, Indo-Aryan, Italic (incl. historical), as well as the language isolates Basque and Ainu. Ainu is included deliberately — both because its split between *an* (singular existence) and *oka* (plural) is typologically striking, and because the choice of universal test sentences ("there is water", "there is a dog", "there are people") means even critically endangered and historical languages can sit in the same comparison.

## What it isn't

- It's not a clone of WALS. WALS asks *what feature does this language have?* Language Patterns asks *what recurring solution is this language using, what other languages use a similar solution, how can this solution change, and is the resemblance inheritance, contact, universal, or convergence?*
- It's not a dictionary. Words appear here as evidence for *constructions* and *strategies*, not as headwords.
- It's not closed. The data lives in version control alongside the code, so contributions are pull requests against well-typed records with sources attached.

## Tech

SvelteKit + TypeScript + Tailwind v4, deployed to Cloudflare Workers with a custom domain. The data layer is plain TypeScript modules — readable, diffable, and trivially exportable — with the long-term option to move to a real datastore once contribution volume justifies it.

### Local development

```sh
bun install
bun run dev      # http://localhost:5173
bun run check    # types + svelte-check
bun run build    # production build
bun run preview  # serve the built worker locally
bun run deploy   # build + wrangler deploy
```

`bun run gen` regenerates `worker-configuration.d.ts` after edits to `wrangler.jsonc`.

### CI

`.github/workflows/deploy.yml` builds and deploys on every push to `main`. It needs two repository secrets: `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`.

## License

To be decided. Until then, please ask before reusing the data.
