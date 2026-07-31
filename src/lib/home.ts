import { patterns, pathways, languages } from '$lib/data';
import { colorForIndex } from '$lib/strategyColor';
import { project } from '$lib/worldMap';
import type { Example, Language, Pattern, Pathway, Strategy } from '$lib/types';

/**
 * Data files carry plain language codes; the table is keyed by the ones it
 * knows. Anything unlisted simply goes unplotted rather than throwing.
 */
function getLanguage(code: string): Language | undefined {
	return (languages as Record<string, Language>)[code];
}

export interface Scale {
	languages: number;
	families: number;
	forms: number;
	sentences: number;
	patterns: number;
	pathways: number;
}

function languageName(code: string): string {
	return getLanguage(code)?.name ?? code;
}

/** Every language the database says something about, anywhere. */
function coveredLanguages(): Set<string> {
	const codes = new Set<string>();
	for (const p of patterns) {
		p.attestations?.forEach((a) => codes.add(a.language));
		p.examples.forEach((e) => codes.add(e.language));
		p.paradigm?.cells.forEach((c) => codes.add(c.language));
		p.polarity?.contrasts.forEach((c) => codes.add(c.language));
	}
	for (const p of pathways) {
		p.bands.forEach((b) => codes.add(b.language));
		p.examples?.forEach((e) => codes.add(e.language));
	}
	return codes;
}

export function scale(): Scale {
	const codes = coveredLanguages();
	const families = new Set<string>();
	for (const code of codes) {
		const family = getLanguage(code)?.family;
		if (family) families.add(family.split('›')[0].trim());
	}
	let forms = 0;
	let sentences = 0;
	for (const p of patterns) {
		forms += p.attestations?.length ?? 0;
		sentences += p.examples.length;
	}
	for (const p of pathways) {
		forms += p.bands.length;
		sentences += p.examples?.length ?? 0;
	}

	return {
		languages: codes.size,
		families: families.size,
		forms,
		sentences,
		patterns: patterns.length,
		pathways: pathways.length
	};
}

export interface StrategyShare {
	id: string;
	label: string;
	color: Strategy['color'];
	count: number;
}

export function shares(pattern: Pattern): StrategyShare[] {
	const counts = new Map<string, number>();
	for (const a of pattern.attestations ?? []) {
		counts.set(a.strategy, (counts.get(a.strategy) ?? 0) + 1);
	}
	return pattern.strategies
		.map((s) => ({ id: s.id, label: s.label, color: s.color, count: counts.get(s.id) ?? 0 }))
		.filter((s) => s.count > 0)
		.sort((a, b) => b.count - a.count);
}

export interface WallCell {
	key: string;
	language: string;
	form?: string;
	strategy: string;
	color: Strategy['color'];
}

export interface Wall {
	cells: WallCell[];
	languages: number;
	hidden: number;
}

/**
 * A sample of a pattern's attestations, taken round-robin across strategies so
 * every strategy reaches the wall. Where a pattern records surface forms the
 * cell carries the form; where it records a language's type, the language name
 * carries the cell alone.
 */
export function wall(pattern: Pattern, limit = 44): Wall {
	const attestations = pattern.attestations ?? [];
	const distinct = new Set(attestations.map((a) => a.expression)).size;
	const withForms = distinct >= attestations.length * 0.6;
	const colors = new Map(pattern.strategies.map((s) => [s.id, s.color]));
	const labels = new Map(pattern.strategies.map((s) => [s.id, s.label]));

	const queues = new Map<string, typeof attestations>();
	for (const a of attestations) {
		const queue = queues.get(a.strategy);
		if (queue) queue.push(a);
		else queues.set(a.strategy, [a]);
	}

	const order = [...queues.keys()];
	const cells: WallCell[] = [];
	for (let round = 0; cells.length < limit; round++) {
		let placed = false;
		for (const id of order) {
			const queue = queues.get(id)!;
			if (round >= queue.length) continue;
			placed = true;
			const a = queue[round];
			cells.push({
				key: `${a.language}-${a.strategy}-${round}`,
				language: languageName(a.language),
				form: withForms ? a.expression : undefined,
				strategy: labels.get(a.strategy) ?? a.strategy,
				color: colors.get(a.strategy) ?? 'slate'
			});
			if (cells.length >= limit) break;
		}
		if (!placed) break;
	}

	return {
		cells,
		languages: new Set(attestations.map((a) => a.language)).size,
		hidden: Math.max(0, attestations.length - cells.length)
	};
}

/**
 * Locate the attested predicate inside a sentence, so the form that carries
 * the strategy can be marked. Conservative: a whole recorded alternative
 * first, then a single token of one, and nothing at all when neither is found
 * — a wrong mark would be a wrong claim.
 */
export function markPredicate(
	sentence: string,
	expression: string
): { before: string; hit: string; after: string } | null {
	const fold = (value: string) => value.toLowerCase().replace(/[\u2018\u2019]/g, "'");
	if (fold(sentence).length !== sentence.length) return null;
	const hay = fold(sentence);

	const alternatives = expression
		.split(/\s*\/\s*/)
		.map((alt) => alt.replace(/\([^)]*\)/g, ' ').replace(/\s+/g, ' ').trim())
		.filter(Boolean);

	// Inflected forms are often parenthesised beside the lemma: egon (dago / daude).
	const parenthesised = [...expression.matchAll(/\(([^)]*)\)/g)]
		.flatMap((match) => match[1].split(/\s*\/\s*/))
		.map((form) => form.trim())
		.filter((form) => form.length > 1 && form !== form.toUpperCase());

	const nonLatin = /[^\p{Script=Latin}\p{P}\p{N}\s]/u;
	const tokens: string[] = [];
	for (const alt of alternatives) {
		if (!nonLatin.test(alt)) continue;
		// The Latin run beside another script is a romanisation, not the form.
		tokens.push(...alt.split(' ').filter((t) => nonLatin.test(t)));
	}
	for (const alt of alternatives) {
		if (nonLatin.test(alt)) continue;
		tokens.push(...alt.split(' ').filter((t) => t.length > 1));
	}

	const tryFind = (candidate: string, wholeWord: boolean) => {
		const needle = fold(candidate);
		if (needle.length < 1) return null;
		let index = -1;
		if (wholeWord) {
			const escaped = needle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
			index = hay.search(new RegExp(`(^|[^\\p{L}])${escaped}([^\\p{L}]|$)`, 'u'));
			if (index >= 0 && !hay.startsWith(needle, index)) index += 1;
		} else {
			index = hay.indexOf(needle);
		}
		if (index < 0) return null;
		return {
			before: sentence.slice(0, index),
			hit: sentence.slice(index, index + candidate.length),
			after: sentence.slice(index + candidate.length)
		};
	};

	for (const alt of alternatives.slice().sort((a, b) => b.length - a.length)) {
		const found = tryFind(alt, !nonLatin.test(alt));
		if (found) return found;
	}
	for (const token of tokens.sort((a, b) => b.length - a.length)) {
		const found = tryFind(token, !nonLatin.test(token));
		if (found) return found;
	}
	for (const form of parenthesised.sort((a, b) => b.length - a.length)) {
		const found = tryFind(form, !nonLatin.test(form));
		if (found) return found;
	}
	return null;
}

export interface SlideRow {
	key: string;
	label: string;
	sub?: string;
	primary: string;
	/** The primary split around the attested predicate, when it can be found. */
	mark?: { before: string; hit: string; after: string };
	secondary?: string;
	chip?: string;
	year?: number;
	color: Strategy['color'];
}

export interface MapPoint {
	key: string;
	x: number;
	y: number;
	color: Strategy['color'];
}

/** Every language a pattern attests, placed on the map in its strategy colour. */
export function patternPoints(pattern: Pattern): MapPoint[] {
	const colors = new Map(pattern.strategies.map((s) => [s.id, s.color]));
	const seen = new Set<string>();
	const points: MapPoint[] = [];
	for (const a of pattern.attestations ?? []) {
		if (seen.has(a.language)) continue;
		const language = getLanguage(a.language);
		if (language?.lat === undefined || language.lng === undefined) continue;
		seen.add(a.language);
		const { x, y } = project(language.lng, language.lat);
		points.push({ key: a.language, x, y, color: colors.get(a.strategy) ?? 'slate' });
	}
	return points;
}

/** Every language a pathway records, coloured by the stage it sits at. */
function pathwayPoints(pathway: Pathway): MapPoint[] {
	const stageIndex = new Map(pathway.stages.map((s, i) => [s.id, i]));
	const seen = new Set<string>();
	const points: MapPoint[] = [];
	for (const band of pathway.bands) {
		if (seen.has(band.language)) continue;
		const language = getLanguage(band.language);
		if (language?.lat === undefined || language.lng === undefined) continue;
		seen.add(band.language);
		const { x, y } = project(language.lng, language.lat);
		points.push({ key: band.language, x, y, color: colorForIndex(stageIndex.get(band.stageId) ?? 0) });
	}
	return points;
}

export interface Slide {
	kind: 'pattern' | 'pathway';
	slug: string;
	question: string;
	caption: string;
	rows: SlideRow[];
	map: MapPoint[];
}

/** Take from each queue in turn, so the result spans every strategy present. */
function roundRobin<T>(queues: Map<string, T[]>, limit: number): T[] {
	const taken: T[] = [];
	for (let round = 0; taken.length < limit; round++) {
		let placed = false;
		for (const queue of queues.values()) {
			if (round >= queue.length) continue;
			placed = true;
			taken.push(queue[round]);
			if (taken.length >= limit) break;
		}
		if (!placed) break;
	}
	return taken;
}

function patternSlide(pattern: Pattern, limit: number): Slide | null {
	const colors = new Map(pattern.strategies.map((s) => [s.id, s.color]));
	const labels = new Map(pattern.strategies.map((s) => [s.id, s.label]));
	const attestationOf = new Map((pattern.attestations ?? []).map((a) => [a.language, a]));
	const strategyOf = new Map((pattern.attestations ?? []).map((a) => [a.language, a.strategy]));

	// A test sentence carried across languages reads best; fall back to the
	// bare forms where the pattern records no sentence set.
	const bySet = new Map<string, Pattern['examples']>();
	for (const example of pattern.examples) {
		if (!example.set || !strategyOf.has(example.language)) continue;
		const group = bySet.get(example.set);
		if (group) group.push(example);
		else bySet.set(example.set, [example]);
	}
	let biggest: { id: string; examples: Pattern['examples'] } | null = null;
	for (const [id, examples] of bySet) {
		if (!biggest || examples.length > biggest.examples.length) biggest = { id, examples };
	}

	if (biggest && biggest.examples.length >= 4) {
		const queues = new Map<string, SlideRow[]>();
		for (const example of biggest.examples) {
			const attestation = attestationOf.get(example.language)!;
			const strategy = attestation.strategy;
			const language = getLanguage(example.language);
			const row: SlideRow = {
				key: `${pattern.slug}-${example.language}`,
				label: language?.name ?? example.language,
				sub: language?.endonym,
				primary: example.original,
				mark: markPredicate(example.original, attestation.expression) ?? undefined,
				secondary: example.literal,
				chip: labels.get(strategy) ?? strategy,
				color: colors.get(strategy) ?? 'slate'
			};
			const queue = queues.get(strategy);
			if (queue) queue.push(row);
			else queues.set(strategy, [row]);
		}
		const meta = pattern.exampleSets?.find((s) => s.id === biggest.id);
		return {
			kind: 'pattern',
			slug: pattern.slug,
			question: pattern.question,
			caption: meta?.title ?? pattern.title,
			rows: roundRobin(queues, limit),
			map: patternPoints(pattern)
		};
	}

	const queues = new Map<string, SlideRow[]>();
	for (const a of pattern.attestations ?? []) {
		const language = getLanguage(a.language);
		const row: SlideRow = {
			key: `${pattern.slug}-${a.language}-${a.strategy}`,
			label: language?.name ?? a.language,
			sub: language?.endonym,
			primary: a.expression,
			chip: labels.get(a.strategy) ?? a.strategy,
			color: colors.get(a.strategy) ?? 'slate'
		};
		const queue = queues.get(a.strategy);
		if (queue) queue.push(row);
		else queues.set(a.strategy, [row]);
	}
	let rows = roundRobin(queues, limit);

	// Some patterns carry their forms in the paradigm grid rather than in
	// attestations — the grid is then what there is to show.
	if (rows.length < 2 && pattern.paradigm) {
		const axes = new Map(pattern.paradigm.axes.map((a) => [a.id, a.label]));
		const cellQueues = new Map<string, SlideRow[]>();
		const seen = new Set<string>();
		for (const cell of pattern.paradigm.cells) {
			if (seen.has(cell.language)) continue;
			seen.add(cell.language);
			const language = getLanguage(cell.language);
			const key = cell.strategy ?? cell.axis;
			const row: SlideRow = {
				key: `${pattern.slug}-${cell.language}-${cell.axis}`,
				label: language?.name ?? cell.language,
				sub: language?.endonym,
				primary: cell.form,
				secondary: axes.get(cell.axis),
				chip: cell.strategy ? (labels.get(cell.strategy) ?? cell.strategy) : undefined,
				color: (cell.strategy && colors.get(cell.strategy)) || 'slate'
			};
			const queue = cellQueues.get(key);
			if (queue) queue.push(row);
			else cellQueues.set(key, [row]);
		}
		rows = roundRobin(cellQueues, limit);
	}

	if (rows.length < 2) return null;
	return {
		kind: 'pattern',
		slug: pattern.slug,
		question: pattern.question,
		caption: pattern.title,
		rows,
		map: patternPoints(pattern)
	};
}

function pathwaySlide(pathway: Pathway, limit: number): Slide | null {
	const route = track(pathway);
	if (!route) return null;
	return {
		kind: 'pathway',
		slug: pathway.slug,
		question: pathway.question,
		caption: route.language,
		rows: route.steps.slice(0, limit).map((step, i) => ({
			key: `${pathway.slug}-${step.number}`,
			label: step.label,
			primary: step.form,
			year: step.year,
			color: colorForIndex(i)
		})),
		map: pathwayPoints(pathway)
	};
}

/** One frame per entry for the rotating hero panel. */
export function slides(limit = 6): Slide[] {
	const frames: Slide[] = [];
	for (const pattern of patterns) {
		const slide = patternSlide(pattern, limit);
		if (slide) frames.push(slide);
	}
	for (const pathway of pathways) {
		const slide = pathwaySlide(pathway, limit);
		if (slide) frames.push(slide);
	}
	return frames;
}

export interface TrackStep {
	number: number;
	label: string;
	form: string;
	year: number;
}

export interface Track {
	language: string;
	steps: TrackStep[];
	from: number;
	to: number;
}

export interface StripBand {
	key: string;
	form: string;
	/** Percent of the strip's span. */
	left: number;
	width: number;
	color: Strategy['color'];
}

export interface StripRow {
	language: string;
	bands: StripBand[];
}

export interface Strip {
	from: number;
	to: number;
	rows: StripRow[];
}

/**
 * Several languages' forms laid across the pathway's whole span — the
 * comparative timeline in miniature.
 */
export function strip(pathway: Pathway, limit = 3): Strip | null {
	if (pathway.bands.length === 0) return null;
	const from = Math.min(...pathway.bands.map((b) => b.start));
	const to = Math.max(...pathway.bands.map((b) => b.end));
	if (to <= from) return null;

	const stageIndex = new Map(pathway.stages.map((s, i) => [s.id, i]));
	const byLanguage = new Map<string, typeof pathway.bands>();
	for (const band of pathway.bands) {
		const bands = byLanguage.get(band.language);
		if (bands) bands.push(band);
		else byLanguage.set(band.language, [band]);
	}

	const rows = [...byLanguage.entries()]
		.sort((a, b) => b[1].length - a[1].length)
		.slice(0, limit)
		.map(([code, bands]) => ({
			language: languageName(code),
			bands: bands
				.slice()
				.sort((a, b) => a.start - b.start)
				.map((band, i) => ({
					key: `${code}-${band.stageId}-${i}`,
					form: band.form,
					left: ((band.start - from) / (to - from)) * 100,
					width: ((band.end - band.start) / (to - from)) * 100,
					color: colorForIndex(stageIndex.get(band.stageId) ?? 0)
				}))
		}));

	return { from, to, rows };
}

export interface SentenceRow {
	key: string;
	language: string;
	endonym?: string;
	original: string;
	mark?: { before: string; hit: string; after: string };
	transliteration?: string;
	gloss?: string;
	literal: string;
	strategy: string;
	color: Strategy['color'];
}

export interface SentenceSet {
	key: string;
	slug: string;
	title: string;
	rows: SentenceRow[];
	legend: { label: string; color: Strategy['color'] }[];
}

/**
 * Every test sentence the collection carries across a good number of
 * languages — one meaning, rendered by everything that attests it.
 */
export function sentenceSets(minimum = 6): SentenceSet[] {
	const sets: SentenceSet[] = [];
	for (const pattern of patterns) {
		if (!pattern.exampleSets) continue;
		const attestationOf = new Map((pattern.attestations ?? []).map((a) => [a.language, a]));
		const colors = new Map(pattern.strategies.map((s) => [s.id, s.color]));
		const labels = new Map(pattern.strategies.map((s) => [s.id, s.label]));

		for (const meta of pattern.exampleSets) {
			const rows: SentenceRow[] = [];
			const seen = new Map<string, Strategy['color']>();
			for (const example of pattern.examples) {
				if (example.set !== meta.id) continue;
				const attestation = attestationOf.get(example.language);
				if (!attestation) continue;
				const language = getLanguage(example.language);
				const color = colors.get(attestation.strategy) ?? 'slate';
				const label = labels.get(attestation.strategy) ?? attestation.strategy;
				seen.set(label, color);
				rows.push({
					key: `${pattern.slug}-${meta.id}-${example.language}`,
					language: language?.name ?? example.language,
					endonym: language?.endonym,
					original: example.original,
					mark: markPredicate(example.original, attestation.expression) ?? undefined,
					transliteration: example.transliteration,
					gloss: example.gloss,
					literal: example.literal,
					strategy: label,
					color
				});
			}
			if (rows.length < minimum) continue;
			sets.push({
				key: `${pattern.slug}-${meta.id}`,
				slug: pattern.slug,
				title: meta.title,
				rows,
				legend: [...seen].map(([label, color]) => ({ label, color }))
			});
		}
	}
	return sets.sort((a, b) => b.rows.length - a.rows.length);
}

export interface Glossed {
	key: string;
	language: string;
	endonym?: string;
	original: string;
	transliteration?: string;
	pairs: { word: string; gloss: string }[];
	gloss?: string;
	natural: string;
	slug: string;
}

/** Word-by-word alignment, only where the gloss matches the line word for word. */
function align(example: Example): { word: string; gloss: string }[] {
	const line = example.transliteration ?? example.original;
	if (!example.gloss) return [];
	const words = line.trim().split(/\s+/);
	const glosses = example.gloss.trim().split(/\s+/);
	if (words.length !== glosses.length) return [];
	return words.map((word, i) => ({ word, gloss: glosses[i] }));
}

/**
 * Glossed sentences for the interlinear strip: a different question and a
 * different language family in each card.
 */
export function glossed(limit = 3): Glossed[] {
	const queues = new Map<string, { family: string; card: Glossed }[]>();
	for (const pattern of patterns) {
		for (const example of pattern.examples) {
			// The strip shows clauses, so skip the phrase-level entries.
			if (!/[.。．!?！？।]$/.test(example.original.trim())) continue;
			const pairs = align(example);
			if (pairs.length < 3 || pairs.length > 9) continue;
			const language = getLanguage(example.language);
			const family = language?.family.split('›')[0].trim() ?? example.language;
			const card: Glossed = {
				key: `${pattern.slug}-${example.language}`,
				language: language?.name ?? example.language,
				endonym: language?.endonym,
				original: example.original,
				transliteration: example.transliteration,
				pairs,
				gloss: example.gloss,
				natural: example.natural,
				slug: pattern.slug
			};
			const queue = queues.get(pattern.slug);
			if (queue) queue.push({ family, card });
			else queues.set(pattern.slug, [{ family, card }]);
		}
	}

	// One card per question, and no two from the same family.
	const chosen: Glossed[] = [];
	const usedFamilies = new Set<string>();
	for (const queue of queues.values()) {
		const pick = queue.find((entry) => !usedFamilies.has(entry.family));
		if (!pick) continue;
		usedFamilies.add(pick.family);
		chosen.push(pick.card);
		if (chosen.length >= limit) break;
	}
	return chosen;
}

/**
 * One language's route through a pathway — the language whose record covers the
 * most stages, with the earliest form attested at each of them.
 */
export function track(pathway: Pathway): Track | null {
	const byLanguage = new Map<string, typeof pathway.bands>();
	for (const b of pathway.bands) {
		const bands = byLanguage.get(b.language);
		if (bands) bands.push(b);
		else byLanguage.set(b.language, [b]);
	}

	let best: { code: string; bands: typeof pathway.bands; stages: number } | null = null;
	for (const [code, bands] of byLanguage) {
		const stages = new Set(bands.map((b) => b.stageId)).size;
		if (!best || stages > best.stages || (stages === best.stages && bands.length > best.bands.length)) {
			best = { code, bands, stages };
		}
	}
	if (!best || best.stages < 2) return null;

	const steps: TrackStep[] = [];
	for (const stage of pathway.stages) {
		const bands = best.bands.filter((b) => b.stageId === stage.id).sort((a, b) => a.start - b.start);
		if (bands.length === 0) continue;
		steps.push({
			number: stage.number,
			label: stage.label,
			form: bands[0].form,
			year: bands[0].start
		});
	}

	return {
		language: languageName(best.code),
		steps,
		from: Math.min(...best.bands.map((b) => b.start)),
		to: Math.max(...best.bands.map((b) => b.end))
	};
}

