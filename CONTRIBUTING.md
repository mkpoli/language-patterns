# Contributing

Everything on this site is a claim about a language, and claims can be wrong. Forms get mistyped, glosses misread the morphology, a date follows an edition the literature has moved past, and a table row flattens variation that a speaker would notice at once. There are three ways to act on that.

**Open an issue** when something is wrong and you want it recorded. The [issue forms](https://github.com/mkpoli/language-patterns/issues/new/choose) cover a disputed claim, a missing language, a citation problem, and a proposal for a new entry. Naming the language and the problem is enough to file.

**Open a pull request** when you can fix it. Each entry lives in one TypeScript file, and every page has a link to the file it was rendered from, so the edit is usually a few lines in a record.

**Comment on an open issue** when you know something about a dispute already filed. Speaker judgements that contradict a published description are especially useful, and they get recorded as speaker judgements rather than folded into the citation of someone else.

Disagreement about interpretation is the normal state of typology. An entry can end up saying that the sources disagree, which is a better outcome than picking a winner silently.

## Where the data lives

| Path | Holds |
| --- | --- |
| `src/lib/data/patterns/<slug>.ts` | One pattern — strategies, attestations, examples, paradigm and polarity sections |
| `src/lib/data/pathways/<slug>.ts` | One pathway — stages, timeline bands, examples |
| `src/lib/data/languages.ts` | The language table: name, endonym, family, coordinates |
| `src/lib/data/sources.ts` | Every work cited anywhere on the site |
| `src/lib/data/tags.ts` | The tag vocabulary, in four facets |
| `src/lib/types.ts` | The record shapes all of the above are typed against |

The file name is the slug, so `/patterns/existence` is `src/lib/data/patterns/existence.ts`.

```sh
bun install
bun run dev      # http://localhost:5173
bun run check    # types and svelte-check — run before opening a pull request
```

## The records

An **attestation** is one language's answer to the entry's question, and it is what the comparison table, the map and the strategy cards are drawn from.

```ts
{
  language: 'fi',
  strategy: 'general-locational',
  expression: 'on',
  confidence: 'high',
  note: 'the copula olla; ground-first order carries the existential reading.',
  sources: [{ source: 'freeze-1992' }]
}
```

An **example** is one sentence in five layers. `original` and `natural` are the minimum; `gloss` is what makes the example comparable across the page.

```ts
{
  language: 'fr',
  original: 'Il y a de l’eau dans la rivière.',
  gloss: '3SG.EXPL LOC has of.the water in DEF river',
  literal: 'It there has of the water in the river.',
  natural: 'There is water in the river.',
  set: 'inanimate'
}
```

Each entry uses the same test sentences across all its languages, which is what keeps the contrasts like-for-like. A new language is most useful translated into the sentences already on the page. The vocabulary of those sentences stays deliberately ordinary — water, dog, people — so that historical and endangered languages can sit in the same table as contemporary ones.

A **timeline band** places a form on a pathway page between two dates, with `status` recording whether it was dominant, emerging, declining, or dated only approximately. Where the dates are soft, `uncertaintyStart` and `uncertaintyEnd` extend the band into hatching rather than pretending to a precision the sources do not have.

## Sources

Every claim added or changed needs a source that a reader can go and check. Works cited for the first time get a record in `src/lib/data/sources.ts`, and citations point at it by id:

```ts
sources: [{ source: 'tamura-2000', locator: '146' }]
```

Grammars and journal articles are the usual case, and they are not the only citable kind. Dictionaries, corpora, Wiktionary, fan wikis, a linguist's blog post, a thread, a recorded talk, a personal communication, and your own judgement as a speaker are all usable evidence here, and all of them get named. A tweet used as evidence and then credited to a grammar that happens to say something nearby is a fabricated citation.

Where the evidence is thin, the citation says so — the medium, the date, that it rests on one speaker. For anything that can vanish, an archive link goes in `url`. Speaker judgement is recorded with the variety and the date, kept apart from what a description states.

`confidence` grades how firmly the evidence supports the claim, which is a separate question from who made it:

- `high` — a description or a speaker states it directly, and nothing contradicts it.
- `medium` — the sources support it with hedging, or one row is standing in for variation.
- `low` — inferred, reconstructed, or contested between sources.

## Glosses

Glosses follow the [Leipzig Glossing Rules](https://www.eva.mpg.de/lingua/resources/glossing-rules.php): morphemes separated by hyphens in both lines and aligned one to one, grammatical categories in small caps written as plain capitals (`3SG`, `DEF`, `EXPL`, `NEG`), and lexical material in lower case. A gloss whose morpheme count disagrees with the original is the most common thing to catch in review.

Original text goes in the language's own script in `original`, with `transliteration` alongside for scripts a reader may not have. Reconstructed forms carry their asterisk; unattested forms do not appear at all.

## Adding a whole entry

An entry starts as a question that several unrelated languages answer in a handful of ways. Two to six strategies with a few languages under each is enough to open with — entries grow.

1. Write `src/lib/data/patterns/<slug>.ts` (or `pathways/`) against the types in `src/lib/types.ts`.
2. Register it in `src/lib/data/index.ts`.
3. Add the slug to `entries()` in `src/routes/patterns/[slug]/+page.ts`, which is what prerenders the page.
4. Tag it from the vocabulary in `src/lib/data/tags.ts`, at least one tag per facet where a facet applies.

New languages go in `src/lib/data/languages.ts` with family and coordinates. Coordinates anchor a language on the atlas at a representative historical or cultural centre, and are not a claim about territory.

## Review

A pull request gets merged when each new claim carries a source, the glosses line up, and `bun run check` passes. What gets pushed back is a claim stated more strongly than its source supports, a language row that hides dialectal variation the source itself flags, or an example built to demonstrate the strategy rather than attested.

Corrections to entries are merged ahead of additions.

## Licence

Content is under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/), and contributions are taken under the same licence. Contributors keep authorship of what they write; the file history is the record of who added which claim.
