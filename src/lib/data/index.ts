import type { Pattern, Pathway } from '$lib/types';
import { existence } from './patterns/existence';
import { nonPossession } from './patterns/non-possession';
import { possession } from './patterns/possession';
import { jespersensCycle } from './pathways/jespersens-cycle';

export { languages, getLanguage } from './languages';

export const patterns: Pattern[] = [existence, possession, nonPossession];
export const pathways: Pathway[] = [jespersensCycle];

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
	category: string[];
}

export const topics: TopicEntry[] = [
	...patterns.map((p): TopicEntry => ({
		kind: 'pattern',
		slug: p.slug,
		title: p.title,
		shortTitle: p.shortTitle,
		question: p.question,
		summary: p.summary,
		category: p.category
	})),
	...pathways.map((p): TopicEntry => ({
		kind: 'pathway',
		slug: p.slug,
		title: p.title,
		shortTitle: p.shortTitle,
		question: p.question,
		summary: p.summary,
		category: ['Cycles & Pathways']
	}))
];
