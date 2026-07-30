import type { Strategy } from '$lib/types';

/**
 * Tags sit in four facets, each answering one question about an entry. An
 * entry carries tags from several facets at once.
 */
export type TagFacetId = 'domain' | 'structure' | 'mechanism' | 'scope';

export interface TagFacet {
	id: TagFacetId;
	label: string;
	description: string;
	color: Strategy['color'];
}

export interface Tag {
	id: string;
	label: string;
	facet: TagFacetId;
	definition: string;
}

export const facets: TagFacet[] = [
	{
		id: 'domain',
		label: 'Domain',
		description: 'The area of meaning at issue.',
		color: 'emerald'
	},
	{
		id: 'structure',
		label: 'Structure',
		description: 'The formal machinery a language uses to carry it.',
		color: 'sky'
	},
	{
		id: 'mechanism',
		label: 'Mechanism',
		description: 'The process that produced the form or drives its change.',
		color: 'violet'
	},
	{
		id: 'scope',
		label: 'Scope',
		description: 'How far the phenomenon reaches across families and regions.',
		color: 'slate'
	}
];

const tagList = [
	// domain
	{
		id: 'existence',
		label: 'Existence',
		facet: 'domain',
		definition: 'An assertion that something is present in the world or in some setting.'
	},
	{
		id: 'location',
		label: 'Location',
		facet: 'domain',
		definition: 'Where something is, relative to a place or to another thing.'
	},
	{
		id: 'possession',
		label: 'Possession',
		facet: 'domain',
		definition:
			'A relation between a possessor and a possessed thing, covering ownership, kinship and body parts.'
	},
	{
		id: 'negation',
		label: 'Negation',
		facet: 'domain',
		definition: 'Denial that something holds, together with the elements that mark it.'
	},
	{
		id: 'indefiniteness',
		label: 'Indefiniteness',
		facet: 'domain',
		definition: 'Reference to an entity the hearer is not expected to pick out.'
	},
	{
		id: 'quantification',
		label: 'Quantification',
		facet: 'domain',
		definition: 'How much or how many: every, some, none, both.'
	},
	{
		id: 'perception',
		label: 'Perception',
		facet: 'domain',
		definition: 'Seeing, hearing, and the other senses.'
	},
	{
		id: 'obligation',
		label: 'Obligation',
		facet: 'domain',
		definition: 'Being bound to act — orders, compliance, duty.'
	},
	{
		id: 'aspect',
		label: 'Aspect',
		facet: 'domain',
		definition: 'How an event unfolds: attempted, begun, ongoing, completed.'
	},
	{
		id: 'modality',
		label: 'Modality',
		facet: 'domain',
		definition: 'Possibility, necessity, or attempt, short of asserting that the event came off.'
	},
	{
		id: 'device-operation',
		label: 'Device operation',
		facet: 'domain',
		definition: 'Making a machine start or stop working.'
	},
	{
		id: 'grammatical-relations',
		label: 'Grammatical relations',
		facet: 'domain',
		definition: 'Subject, object, and the other roles a clause assigns its participants.'
	},
	{
		id: 'spatial-relation',
		label: 'Spatial relation',
		facet: 'domain',
		definition: 'Relations like in, on, under, behind.'
	},

	// structure
	{
		id: 'word-order',
		label: 'Word order',
		facet: 'structure',
		definition: 'The sequence of subject, object, verb and their dependents.'
	},
	{
		id: 'adposition',
		label: 'Adposition',
		facet: 'structure',
		definition:
			'Prepositions, postpositions and circumpositions marking the role of a noun phrase.'
	},
	{
		id: 'syncretism',
		label: 'Syncretism',
		facet: 'structure',
		definition: 'One form doing duty across several grammatical functions.'
	},
	{
		id: 'colexification',
		label: 'Colexification',
		facet: 'structure',
		definition: 'One lexeme covering meanings that other languages keep apart.'
	},
	{
		id: 'expletive-subject',
		label: 'Expletive subject',
		facet: 'structure',
		definition: 'A contentless element holding the subject slot: English there, French il.'
	},
	{
		id: 'suppletion',
		label: 'Suppletion',
		facet: 'structure',
		definition: 'Cells of one paradigm filled by unrelated stems, as in Turkish var and yok.'
	},
	{
		id: 'negative-concord',
		label: 'Negative concord',
		facet: 'structure',
		definition: 'Several negative-marked elements in a clause expressing a single negation.'
	},
	{
		id: 'oblique-marking',
		label: 'Oblique marking',
		facet: 'structure',
		definition: 'A participant marked by a case or adposition rather than as subject or object.'
	},
	{
		id: 'topic-marking',
		label: 'Topic marking',
		facet: 'structure',
		definition: 'An element flagged as what the sentence is about.'
	},
	{
		id: 'multiverb-construction',
		label: 'Multiverb construction',
		facet: 'structure',
		definition:
			'Two or more verbs in one clause describing a single event: converbs, serial verbs, auxiliary chains.'
	},
	{
		id: 'auxiliary-verb',
		label: 'Auxiliary verb',
		facet: 'structure',
		definition: 'A verb carrying tense, aspect or modality for a main verb.'
	},

	// mechanism
	{
		id: 'metaphor',
		label: 'Metaphor',
		facet: 'mechanism',
		definition: 'One domain lending its vocabulary to another: fire for electric light.'
	},
	{
		id: 'metonymy',
		label: 'Metonymy',
		facet: 'mechanism',
		definition: 'A shift along contiguity, where a part, cause or outcome names the whole.'
	},
	{
		id: 'grammaticalization',
		label: 'Grammaticalization',
		facet: 'mechanism',
		definition: 'A lexical item hardening into a grammatical marker.'
	},
	{
		id: 'reanalysis',
		label: 'Reanalysis',
		facet: 'mechanism',
		definition: 'The same string parsed with a new structure by later speakers.'
	},
	{
		id: 'semantic-bleaching',
		label: 'Semantic bleaching',
		facet: 'mechanism',
		definition: 'Loss of specific content as a form spreads to more contexts.'
	},
	{
		id: 'renewal-cycle',
		label: 'Renewal cycle',
		facet: 'mechanism',
		definition:
			'A weakened form gets reinforced, the reinforcement takes over, and the sequence starts again.'
	},
	{
		id: 'lexicalization',
		label: 'Lexicalization',
		facet: 'mechanism',
		definition: 'A phrase or paradigm cell frozen into a single stored word.'
	},

	// scope
	{
		id: 'worldwide',
		label: 'Worldwide',
		facet: 'scope',
		definition: 'Recurs in unrelated families across every macroarea.'
	},
	{
		id: 'several-macroareas',
		label: 'Several macroareas',
		facet: 'scope',
		definition: 'Attested in more than one macroarea, without reaching all of them.'
	},
	{
		id: 'areal',
		label: 'Areal',
		facet: 'scope',
		definition: 'Clusters in one region, crossing family lines within it.'
	}
] as const satisfies readonly Tag[];

export type TagId = (typeof tagList)[number]['id'];

export const tags: readonly Tag[] = tagList;

const tagById = new Map(tagList.map((t) => [t.id as TagId, t as Tag]));

export function getTag(id: TagId): Tag {
	const tag = tagById.get(id);
	if (!tag) throw new Error(`Unknown tag: ${id}`);
	return tag;
}

const facetById = new Map(facets.map((f) => [f.id, f]));

export function getFacet(id: TagFacetId): TagFacet {
	return facetById.get(id)!;
}

const facetOrder = new Map(facets.map((f, i) => [f.id, i]));
const vocabularyOrder = new Map(tagList.map((t, i) => [t.id as TagId, i]));

/** Tags in facet order, then in vocabulary order within a facet. */
export function sortTags(ids: readonly TagId[]): Tag[] {
	return ids
		.map(getTag)
		.sort(
			(a, b) =>
				facetOrder.get(a.facet)! - facetOrder.get(b.facet)! ||
				vocabularyOrder.get(a.id as TagId)! - vocabularyOrder.get(b.id as TagId)!
		);
}

/** Tags of one entry, grouped into the facets that entry actually uses. */
export function groupByFacet(ids: readonly TagId[]): { facet: TagFacet; tags: Tag[] }[] {
	const sorted = sortTags(ids);
	return facets
		.map((facet) => ({ facet, tags: sorted.filter((t) => t.facet === facet.id) }))
		.filter((g) => g.tags.length > 0);
}
