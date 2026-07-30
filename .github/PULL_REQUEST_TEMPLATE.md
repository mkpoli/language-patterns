<!--
Data lives in TypeScript modules under src/lib/data/, one file per entry.
CONTRIBUTING.md describes the record shapes and the citation format.
-->

## What changes

<!-- The languages, forms, dates, or claims this touches. Link the issue if there is one. -->

## Where it comes from

<!--
Every new or altered claim needs a source a reader can go and check.
Grammars, dictionaries, corpora, wikis, threads, videos, and your own judgement
as a speaker are all citable — name the medium and the date for the volatile ones,
and say which variety you speak when the evidence is your own.
-->

## Checks

- [ ] Every claim added or changed carries a source, and works cited for the first time are in `src/lib/data/sources.ts`
- [ ] Attestation `confidence` reflects how firmly the source states it
- [ ] Glosses follow the Leipzig rules, and morpheme counts line up with the original
- [ ] `bun run check` passes
- [ ] Content is offered under CC BY-SA 4.0, the licence the rest of the site carries
