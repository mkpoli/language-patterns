/**
 * Renders one social card per page into `static/og/`.
 *
 *   bun run og            # every page
 *   bun run og existence  # only pages whose file name contains "existence"
 */
import { mkdirSync, readFileSync, rmSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';
import {
	facets,
	getTag,
	patterns,
	pathways,
	tagIndex,
	topics,
	topicsWithTag,
	usedTagIds,
	type Tag,
	type TagFacet,
	type TagId,
	type TopicEntry
} from '../../src/lib/data';
import { getLanguage } from '../../src/lib/data/languages';
import { colorForIndex } from '../../src/lib/strategyColor';
import { ogImagePath } from '../../src/lib/og';
import type { Example, Pattern, Pathway } from '../../src/lib/types';
import { CARD_HEIGHT, CARD_WIDTH, cardHtml, type CardDot, type CardSpec } from './card';

const outDir = fileURLToPath(new URL('../../static/og', import.meta.url));
const messages = JSON.parse(
	readFileSync(fileURLToPath(new URL('../../messages/en.json', import.meta.url)), 'utf8')
) as Record<string, string>;

function coords(code: string): { lng: number; lat: number } | null {
	const lang = getLanguage(code);
	return lang.lat == null || lang.lng == null ? null : { lng: lang.lng, lat: lang.lat };
}

function dotsFor(entries: { code: string; color: CardDot['color']; weight?: number }[]): CardDot[] {
	const out: CardDot[] = [];
	for (const e of entries) {
		const c = coords(e.code);
		if (c) out.push({ ...c, color: e.color, weight: e.weight });
	}
	return out;
}

function countLanguages(codes: string[]): number {
	return new Set(codes).size;
}

function plural(n: number, one: string, many = one + 's'): string {
	return `${n} ${n === 1 ? one : many}`;
}

function exampleLanguages(examples: Example[] = []): string[] {
	return examples.map((e) => e.language);
}

/** The eyebrow names the area of meaning the entry sits in. */
function domainOf(ids: TagId[]): string | undefined {
	const carried = ids.map(getTag);
	return (carried.find((t) => t.facet === 'domain') ?? carried[0])?.label.en;
}

function patternSpec(pattern: Pattern): CardSpec {
	const colorOf = new Map(pattern.strategies.map((s) => [s.id, s.color]));
	const attested = pattern.attestations ?? [];

	let entries = attested.map((a) => ({
		code: a.language,
		color: colorOf.get(a.strategy) ?? ('slate' as const)
	}));
	if (!entries.length && pattern.paradigm) {
		entries = pattern.paradigm.cells.map((c) => ({
			code: c.language,
			color: (c.strategy && colorOf.get(c.strategy)) || ('slate' as const)
		}));
	}
	if (!entries.length) {
		entries = exampleLanguages(pattern.examples).map((code) => ({
			code,
			color: pattern.strategies[0]?.color ?? ('slate' as const)
		}));
	}

	return {
		kind: 'Pattern',
		category: domainOf(pattern.tags),
		title: pattern.question,
		chips: pattern.strategies.map((s) => ({ label: s.label, color: s.color })),
		dots: dotsFor(entries),
		stat: `${plural(countLanguages(entries.map((e) => e.code)), 'language')} · ${plural(pattern.strategies.length, 'strategy', 'strategies')}`,
		accent: pattern.strategies[0]?.color ?? 'sky'
	};
}

function pathwaySpec(pathway: Pathway): CardSpec {
	const stageColor = new Map(pathway.stages.map((s, i) => [s.id, colorForIndex(i)]));

	// One dot per language, coloured by the latest stage it is attested in.
	const latest = new Map<string, { end: number; stageId: string }>();
	for (const band of pathway.bands) {
		const prev = latest.get(band.language);
		if (!prev || band.end > prev.end)
			latest.set(band.language, { end: band.end, stageId: band.stageId });
	}
	let entries = [...latest.entries()].map(([code, b]) => ({
		code,
		color: stageColor.get(b.stageId) ?? ('slate' as const)
	}));
	if (!entries.length) {
		entries = [...new Set(exampleLanguages(pathway.examples))].map((code, i) => ({
			code,
			color: colorForIndex(i)
		}));
	}

	const kindLabel = { cycle: 'Cycle', pathway: 'Pathway', shift: 'Shift' }[pathway.kind];

	return {
		kind: 'Pathway',
		category: kindLabel,
		title: pathway.question,
		chips: pathway.stages.map((s, i) => ({
			label: s.label,
			color: colorForIndex(i),
			badge: String(s.number)
		})),
		dots: dotsFor(entries),
		stat: `${plural(countLanguages(entries.map((e) => e.code)), 'language')} · ${plural(pathway.stages.length, 'stage')}`,
		accent: colorForIndex(0)
	};
}

function languagesOf(topic: TopicEntry): Set<string> {
	const source =
		topic.kind === 'pattern'
			? patterns.find((p) => p.slug === topic.slug)
			: pathways.find((p) => p.slug === topic.slug);
	if (!source) return new Set();
	const codes =
		'attestations' in source && source.attestations?.length
			? source.attestations.map((a) => a.language)
			: 'bands' in source && source.bands.length
				? source.bands.map((b) => b.language)
				: exampleLanguages(source.examples);
	return new Set(codes);
}

function topicLanguages(selection: TopicEntry[]): Map<TopicEntry, Set<string>> {
	return new Map(selection.map((topic) => [topic, languagesOf(topic)]));
}

function ofKinds(kinds: ('pattern' | 'pathway')[]): TopicEntry[] {
	return topics.filter((t) => kinds.includes(t.kind));
}

/** The five chromatic tokens; slate carries whatever the legend does not name. */
const NAMED_GROUPS = 5;

/**
 * One marker per language on the overview cards. The five widest topics keep a
 * colour of their own and the legend names them; a language documented only
 * outside those five stays neutral, and one documented in several takes the
 * narrowest, so a topic with a handful of languages still shows.
 */
function topicView(selection: TopicEntry[]): {
	dots: CardDot[];
	chips: { label: string; color: CardDot['color'] }[];
	languages: number;
} {
	const ranked = [...topicLanguages(selection).entries()].sort((a, b) => b[1].size - a[1].size);
	const color = new Map<string, CardDot['color']>();
	const covered = new Map<string, number>();
	for (const [rank, [, codes]] of ranked.entries()) {
		for (const code of codes) {
			color.set(code, rank < NAMED_GROUPS ? colorForIndex(rank) : 'slate');
			covered.set(code, (covered.get(code) ?? 0) + 1);
		}
	}
	return {
		dots: dotsFor(
			[...color].map(([code, c]) => ({ code, color: c, weight: covered.get(code) ?? 1 }))
		),
		chips: ranked.slice(0, NAMED_GROUPS).map(([topic], rank) => ({
			label: topic.shortTitle,
			color: colorForIndex(rank)
		})),
		languages: color.size
	};
}

/** The home card shows reach rather than topic identity: one hue, size by coverage. */
function coverageDots(): CardDot[] {
	const covered = new Map<string, number>();
	for (const codes of topicLanguages(topics).values()) {
		for (const code of codes) covered.set(code, (covered.get(code) ?? 0) + 1);
	}
	return dotsFor([...covered].map(([code, weight]) => ({ code, color: 'sky' as const, weight })));
}

/** `Indo-European › Romance` and its siblings count as one family on the card. */
function topFamily(code: string): string {
	return (getLanguage(code).family || 'Other').split(/[›>]/)[0].trim();
}

/** The atlas card groups by family, as the atlas page does. */
function familyView(): { dots: CardDot[]; chips: { label: string; color: CardDot['color'] }[] } {
	const codes = new Set<string>();
	for (const set of topicLanguages(topics).values()) {
		for (const code of set) codes.add(code);
	}

	const byFamily = new Map<string, string[]>();
	for (const code of codes) {
		const family = topFamily(code);
		byFamily.set(family, [...(byFamily.get(family) ?? []), code]);
	}
	const ranked = [...byFamily.entries()].sort((a, b) => b[1].length - a[1].length);
	const named = ranked.slice(0, 5);

	const color = new Map<string, CardDot['color']>();
	named.forEach(([family], i) => color.set(family, colorForIndex(i)));

	return {
		dots: dotsFor(
			[...codes].map((code) => ({ code, color: color.get(topFamily(code)) ?? ('slate' as const) }))
		),
		chips: named.map(([family], i) => ({ label: family, color: colorForIndex(i) }))
	};
}

function topicLanguageCount(kinds: ('pattern' | 'pathway')[]): number {
	const codes = new Set<string>();
	for (const p of patterns) {
		if (!kinds.includes('pattern')) break;
		for (const a of p.attestations ?? []) codes.add(a.language);
		for (const c of p.paradigm?.cells ?? []) codes.add(c.language);
		for (const e of p.examples) codes.add(e.language);
	}
	for (const w of pathways) {
		if (!kinds.includes('pathway')) break;
		for (const b of w.bands) codes.add(b.language);
		for (const e of w.examples ?? []) codes.add(e.language);
	}
	return codes.size;
}

/** A tag card carries the topics that wear the tag, and their languages. */
function tagSpec(tag: Tag, facet: TagFacet): CardSpec {
	const tagged = topicsWithTag(tag.id as TagId);
	const view = topicView(tagged);
	return {
		kind: 'Tag',
		category: facet.label.en,
		title: tag.label.en,
		lede: tag.definition.en,
		chips: view.chips,
		dots: view.dots,
		stat: `${plural(view.languages, 'language')} · ${plural(tagged.length, 'topic')}`,
		accent: facet.color
	};
}

interface Target {
	path: string;
	spec: CardSpec;
}

function targets(): Target[] {
	const atlas = familyView();
	const patternView = topicView(ofKinds(['pattern']));
	const pathwayView = topicView(ofKinds(['pathway']));
	const list: Target[] = [
		{
			path: '/',
			spec: {
				category: messages.home_eyebrow,
				title: messages.home_title,
				lede: messages.home_subtitle,
				dots: coverageDots(),
				stat: `${plural(topicLanguageCount(['pattern', 'pathway']), 'language')} · ${plural(topics.length, 'topic')}`,
				accent: 'sky'
			}
		},
		{
			path: '/patterns',
			spec: {
				kind: 'Patterns',
				category: 'Typology',
				title: 'How languages express the same idea differently',
				chips: patternView.chips,
				dots: patternView.dots,
				stat: `${plural(topicLanguageCount(['pattern']), 'language')} · ${plural(patterns.length, 'pattern')}`,
				accent: 'sky'
			}
		},
		{
			path: '/pathways',
			spec: {
				kind: 'Pathways',
				category: 'Language change',
				title: 'How languages change — directionally and recurrently',
				chips: pathwayView.chips,
				dots: pathwayView.dots,
				stat: `${plural(topicLanguageCount(['pathway']), 'language')} · ${plural(pathways.length, 'pathway')}`,
				accent: 'violet'
			}
		},
		{
			path: '/atlas',
			spec: {
				kind: 'Atlas',
				category: 'Geography',
				title: messages.atlas_title,
				chips: atlas.chips,
				dots: atlas.dots,
				stat: `${plural(topicLanguageCount(['pattern', 'pathway']), 'language')} · ${plural(topics.length, 'topic')}`,
				accent: 'sky'
			}
		},
		{
			path: '/tags',
			spec: {
				kind: 'Tags',
				category: 'Facets',
				title: messages.tags_title,
				lede: messages.tags_subtitle,
				chips: facets.map((f) => ({ label: f.label.en, color: f.color })),
				dots: coverageDots(),
				stat: `${plural(usedTagIds.length, 'tag')} · ${plural(facets.length, 'facet')}`,
				accent: 'violet'
			}
		},
		{
			path: '/contribute',
			spec: {
				kind: 'Corrections',
				category: 'Open data',
				title: messages.contribute_title,
				lede: messages.contribute_lede,
				dots: coverageDots(),
				stat: `${plural(topicLanguageCount(['pattern', 'pathway']), 'language')} · ${plural(topics.length, 'topic')}`,
				accent: 'amber'
			}
		}
	];

	for (const pattern of patterns) {
		list.push({ path: `/patterns/${pattern.slug}`, spec: patternSpec(pattern) });
	}
	for (const pathway of pathways) {
		list.push({ path: `/pathways/${pathway.slug}`, spec: pathwaySpec(pathway) });
	}
	for (const group of tagIndex) {
		for (const entry of group.entries) {
			list.push({ path: `/tags/${entry.tag.id}`, spec: tagSpec(entry.tag, group.facet) });
		}
	}
	return list;
}

async function main() {
	const filter = process.argv.slice(2).filter((a) => !a.startsWith('-'));
	const all = targets();
	const selected = filter.length
		? all.filter((t) => filter.some((f) => ogImagePath(t.path).includes(f)))
		: all;

	if (!filter.length) rmSync(outDir, { recursive: true, force: true });
	mkdirSync(outDir, { recursive: true });

	const browser = await chromium.launch();
	const page = await browser.newPage({
		viewport: { width: CARD_WIDTH, height: CARD_HEIGHT }
	});

	for (const target of selected) {
		await page.setContent(cardHtml(target.spec), { waitUntil: 'load' });
		await page.evaluate(() => document.fonts.ready);
		await fitTitle(page);
		const file = `${outDir}/${ogImagePath(target.path).split('/').pop()}`;
		await page.screenshot({ path: file, type: 'jpeg', quality: 92 });
		console.log(`${target.path.padEnd(34)} → ${file.split('/static/')[1]}`);
	}

	await browser.close();
}

/** Long questions step down through a few sizes rather than overrunning the panel. */
async function fitTitle(page: import('playwright').Page) {
	await page.evaluate(() => {
		const title = document.querySelector('.title') as HTMLElement | null;
		const block = document.querySelector('.block') as HTMLElement | null;
		const content = document.querySelector('.content') as HTMLElement | null;
		if (!title || !block || !content) return;
		const room = content.clientHeight - 240;
		for (let size = 58; size >= 34; size -= 2) {
			title.style.fontSize = `${size}px`;
			if (block.offsetHeight <= room) break;
		}
	});
}

await main();
