import type { Pattern, Pathway } from '$lib/types';
import { type Tag, type TagId, facets, sortTags } from './tags';
import { existence } from './patterns/existence';
import { nonPossession } from './patterns/non-possession';
import { possession } from './patterns/possession';
import { alienability } from './patterns/alienability';
import { possessiveMarking } from './patterns/possessive-marking';
import { indefinites } from './patterns/indefinites';
import { wordOrder } from './patterns/word-order';
import { adpositionOrder } from './patterns/adposition-order';
import { switchingOn } from './patterns/switching-on';
import { benefaction } from './patterns/benefaction';
import { jespersensCycle } from './pathways/jespersens-cycle';
import { hearWordsToObey } from './pathways/hear-words-to-obey';
import { seeToTry } from './pathways/see-to-try';
import { negativeExistentialCycle } from './pathways/negative-existential-cycle';

export { languages, getLanguage } from './languages';
export { facets, tags, getTag, getFacet, groupByFacet, sortTags, localized } from './tags';
export type { Tag, TagId, TagFacet, TagFacetId, Localized } from './tags';

export const patterns: Pattern[] = [
	existence,
	possession,
	alienability,
	possessiveMarking,
	nonPossession,
	indefinites,
	wordOrder,
	adpositionOrder,
	switchingOn,
	benefaction
];
export const pathways: Pathway[] = [
	jespersensCycle,
	negativeExistentialCycle,
	hearWordsToObey,
	seeToTry
];

const patternBySlug = new Map(patterns.map((p) => [p.slug, p]));
const pathwayBySlug = new Map(pathways.map((p) => [p.slug, p]));

export function getPattern(slug: string): Pattern | undefined {
	return patternBySlug.get(slug);
}

export function getPathway(slug: string): Pathway | undefined {
	return pathwayBySlug.get(slug);
}

export interface TopicEntry {
	kind: 'pattern' | 'pathway';
	slug: string;
	title: string;
	shortTitle: string;
	question: string;
	summary: string;
	tags: TagId[];
}

const toTopic =
	(kind: 'pattern' | 'pathway') =>
	(p: Pattern | Pathway): TopicEntry => ({
		kind,
		slug: p.slug,
		title: p.title,
		shortTitle: p.shortTitle,
		question: p.question,
		summary: p.summary,
		tags: p.tags
	});

export const topics: TopicEntry[] = [
	...patterns.map(toTopic('pattern')),
	...pathways.map(toTopic('pathway'))
];

for (const topic of topics) {
	const seen = new Set<TagId>();
	for (const id of topic.tags) {
		if (seen.has(id)) throw new Error(`${topic.slug} lists the tag ${id} twice`);
		seen.add(id);
	}
}

export function topicsWithTag(id: TagId): TopicEntry[] {
	return topics.filter((t) => t.tags.includes(id));
}

/** Every tag carried by at least one entry, with how many carry it. */
export const tagIndex: { facet: (typeof facets)[number]; entries: { tag: Tag; count: number }[] }[] =
	(() => {
		const counts = new Map<TagId, number>();
		for (const topic of topics) {
			for (const id of topic.tags) counts.set(id, (counts.get(id) ?? 0) + 1);
		}
		const used = sortTags([...counts.keys()]);
		return facets
			.map((facet) => ({
				facet,
				entries: used
					.filter((tag) => tag.facet === facet.id)
					.map((tag) => ({ tag, count: counts.get(tag.id as TagId)! }))
			}))
			.filter((group) => group.entries.length > 0);
	})();

export const usedTagIds: TagId[] = tagIndex.flatMap((g) => g.entries.map((e) => e.tag.id as TagId));
