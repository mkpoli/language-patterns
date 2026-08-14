import { patterns, pathways, languages } from '$lib/data';
import { colorForIndex } from '$lib/strategyColor';
import { project } from '$lib/worldMap';
import type { Attestation, Example, Language, Pattern, Pathway, Strategy } from '$lib/types';

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
	// Some patterns record their forms in the paradigm grid instead.
	if (counts.size === 0) {
		const seen = new Set<string>();
		for (const cell of pattern.paradigm?.cells ?? []) {
			if (!cell.strategy || seen.has(`${cell.language}-${cell.strategy}`)) continue;
			seen.add(`${cell.language}-${cell.strategy}`);
			counts.set(cell.strategy, (counts.get(cell.strategy) ?? 0) + 1);
		}
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
	const attestations: Attestation[] = pattern.attestations?.length
		? pattern.attestations
		: (pattern.paradigm?.cells ?? [])
				.filter((cell) => cell.strategy)
				.map((cell) => ({
					language: cell.language,
					strategy: cell.strategy!,
					expression: cell.form,
					confidence: 'medium' as const
				}));
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

/** A sentence cut into plain and marked runs, in order. */
export type Segment = { text: string; hit: boolean };

const NON_LATIN = /[^\p{Script=Latin}\p{P}\p{N}\s]/u;
/** The slot an attestation leaves for what is possessed, existing, counted. */
const SLOT = /^[XYZ](?:[-=]\p{L}+)?$/u;

const fold = (value: string) => value.toLowerCase().replace(/[‘’]/g, "'");

/**
 * Cut a recorded expression into the literal material around its slots.
 * `benim X-im var` carries the strategy in `benim` and `var`; `X` stands for
 * the thing possessed, which the sentence supplies and which marking would
 * misattribute. Neighbouring literal words stay in one chunk, so they are
 * looked for as a phrase rather than separately.
 */
function chunksOf(expression: string): string[] {
	const chunks: string[] = [];
	let run: string[] = [];
	const close = () => {
		if (run.length) chunks.push(run.join(' '));
		run = [];
	};
	for (const token of expression.split(' ')) {
		// A suffix written on the slot (X-im) belongs to the word that fills it,
		// where vowel harmony or case has usually reshaped it.
		if (SLOT.test(token)) close();
		else run.push(token);
	}
	close();
	return chunks;
}

/** Where a chunk sits in the folded sentence, at or after `from`. */
function locate(hay: string, chunk: string, from: number): { start: number; end: number } | null {
	const needle = fold(chunk);
	if (!needle) return null;
	if (NON_LATIN.test(needle)) {
		const index = hay.indexOf(needle, from);
		return index < 0 ? null : { start: index, end: index + needle.length };
	}
	const escaped = needle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	const pattern = new RegExp(`(^|[^\\p{L}\\p{N}])(${escaped})(?![\\p{L}\\p{N}])`, 'gu');
	pattern.lastIndex = Math.max(0, from - 1);
	const found = pattern.exec(hay);
	if (!found) return null;
	const start = found.index + found[1].length;
	return start < from ? null : { start, end: start + needle.length };
}

/**
 * Mark the material an attestation records inside a sentence that shows it, so
 * the strategy label has something to point at. Conservative at both ends:
 * material that cannot be found stays unmarked, and a sentence whose every
 * letter would be marked is left plain, a mark over the whole line
 * distinguishing nothing.
 */
export function markExpression(sentence: string, expression: string): Segment[] | null {
	if (fold(sentence).length !== sentence.length) return null;
	const hay = fold(sentence);

	const candidates: string[] = [];
	for (const raw of expression.split(/\s*\/\s*/)) {
		const alt = raw
			.replace(/\([^)]*\)/g, ' ')
			.replace(/\s+/g, ' ')
			.trim();
		if (!alt) continue;
		candidates.push(alt);
		// A romanization written beside another script is not in the sentence:
		// "\u96fb\u6c17\u3092\u3064\u3051\u308b denki o tsukeru" is also tried without it.
		if (NON_LATIN.test(alt)) {
			const kept = alt.split(' ').filter((token) => NON_LATIN.test(token));
			if (kept.length) candidates.push(kept.join(' '));
		}
		// Morpheme boundaries are an editorial mark: Swahili ni-na is written
		// nina, Ainu ku=kor is written ku=kor. Both spellings get a try.
		const joined = alt.replace(/(\p{L})[-=](\p{L})/gu, '$1$2');
		if (joined !== alt) candidates.push(joined);
	}

	// Inflected forms often sit in parentheses beside the citation form:
	// egon (dago / daude).
	for (const inside of expression.matchAll(/\(([^)]*)\)/g)) {
		for (const form of inside[1].split(/\s*\/\s*/)) {
			const trimmed = form.trim();
			if (trimmed.length > 1 && trimmed !== trimmed.toUpperCase()) candidates.push(trimmed);
		}
	}

	let best: { start: number; end: number }[] = [];
	let bestLength = 0;
	for (const candidate of candidates) {
		const spans: { start: number; end: number }[] = [];
		let cursor = 0;
		for (const chunk of chunksOf(candidate)) {
			const span = locate(hay, chunk, cursor);
			if (!span) continue;
			spans.push(span);
			cursor = span.end;
		}
		const length = spans.reduce((sum, s) => sum + (s.end - s.start), 0);
		if (length > bestLength) {
			best = spans;
			bestLength = length;
		}
	}
	if (!best.length) return null;

	const letters = (value: string) => value.replace(/[\p{P}\p{Z}\s]/gu, '').length;
	if (best.reduce((sum, s) => sum + letters(sentence.slice(s.start, s.end)), 0) >= letters(sentence))
		return null;

	const segments: Segment[] = [];
	let at = 0;
	for (const span of best) {
		if (span.start > at) segments.push({ text: sentence.slice(at, span.start), hit: false });
		segments.push({ text: sentence.slice(span.start, span.end), hit: true });
		at = span.end;
	}
	if (at < sentence.length) segments.push({ text: sentence.slice(at), hit: false });
	return segments;
}

/**
 * Read an example's bracketed annotation: `adam[ın] baş[ı]` becomes the phrase
 * with its two suffixes marked. A phrase that marks nothing is written without
 * brackets and comes back plain.
 */
export function markAnnotation(example: Example): Segment[] | null {
	if (!example.marked) return null;
	const segments: Segment[] = [];
	let plain = '';
	for (const part of example.marked.split(/(\[[^\]]*\])/)) {
		if (!part) continue;
		const hit = part.startsWith('[') && part.endsWith(']');
		const text = hit ? part.slice(1, -1) : part;
		plain += text;
		if (text) segments.push({ text, hit });
	}
	if (plain !== example.original) {
		throw new Error(
			`marked annotation does not match the example: ${example.marked} vs ${example.original}`
		);
	}
	return segments.some((segment) => segment.hit) ? segments : null;
}

/**
 * A language may attest several strategies for one pattern — Welsh existence
 * records both `mae` and `oes`. Pick the one whose form appears in this
 * sentence, so the chip describes the sentence rather than file order.
 */
function attestationFor(
	attestations: Attestation[],
	example: Example
): { attestation: Attestation; marks: Segment[] | null } | null {
	const forLanguage = attestations.filter((a) => a.language === example.language);
	if (forLanguage.length === 0) return null;
	const annotated = markAnnotation(example);
	for (const attestation of forLanguage) {
		const marks = markExpression(example.original, attestation.expression);
		if (marks) return { attestation, marks: annotated ?? marks };
	}
	return { attestation: forLanguage[0], marks: annotated };
}

export interface SlideRow {
	key: string;
	label: string;
	sub?: string;
	primary: string;
	/** The primary split around the attested predicate, when it can be found. */
	marks?: Segment[];
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
	const placed = pattern.attestations?.length
		? pattern.attestations
		: (pattern.paradigm?.cells ?? [])
				.filter((cell) => cell.strategy)
				.map((cell) => ({ language: cell.language, strategy: cell.strategy! }));
	for (const a of placed) {
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
		points.push({
			key: band.language,
			x,
			y,
			color: colorForIndex(stageIndex.get(band.stageId) ?? 0)
		});
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
		const seen = new Set<string>();
		for (const example of biggest.examples) {
			// One row per language: a set may hold several sentences for one of them.
			if (seen.has(example.language)) continue;
			const picked = attestationFor(pattern.attestations ?? [], example);
			if (!picked) continue;
			seen.add(example.language);
			const strategy = picked.attestation.strategy;
			const language = getLanguage(example.language);
			const row: SlideRow = {
				key: `${pattern.slug}-${example.language}`,
				label: language?.name ?? example.language,
				sub: language?.endonym,
				primary: example.original,
				marks: picked.marks ?? undefined,
				secondary: example.literal,
				chip: labels.get(strategy) ?? strategy,
				color: colors.get(strategy) ?? 'slate'
			};
			const queue = queues.get(strategy);
			if (queue) queue.push(row);
			else queues.set(strategy, [row]);
		}
		const chosen = biggest;
		const meta = pattern.exampleSets?.find((s) => s.id === chosen.id);
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
	marks?: Segment[];
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
		const colors = new Map(pattern.strategies.map((s) => [s.id, s.color]));
		const labels = new Map(pattern.strategies.map((s) => [s.id, s.label]));

		for (const meta of pattern.exampleSets) {
			const rows: SentenceRow[] = [];
			const seen = new Map<string, Strategy['color']>();
			const listed = new Set<string>();
			for (const example of pattern.examples) {
				if (example.set !== meta.id) continue;
				if (listed.has(example.language)) continue;
				const picked = attestationFor(pattern.attestations ?? [], example);
				if (!picked) continue;
				listed.add(example.language);
				const attestation = picked.attestation;
				const language = getLanguage(example.language);
				const color = colors.get(attestation.strategy) ?? 'slate';
				const label = labels.get(attestation.strategy) ?? attestation.strategy;
				seen.set(label, color);
				rows.push({
					key: `${pattern.slug}-${meta.id}-${example.language}`,
					language: language?.name ?? example.language,
					endonym: language?.endonym,
					original: example.original,
					marks: picked.marks ?? undefined,
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
		if (
			!best ||
			stages > best.stages ||
			(stages === best.stages && bands.length > best.bands.length)
		) {
			best = { code, bands, stages };
		}
	}
	if (!best || best.stages < 2) return null;

	const steps: TrackStep[] = [];
	for (const stage of pathway.stages) {
		const bands = best.bands
			.filter((b) => b.stageId === stage.id)
			.sort((a, b) => a.start - b.start);
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
