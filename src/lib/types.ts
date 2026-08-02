import type { TagId } from './data/tags';

import type { LanguageCode } from './data/languages';

export type { LanguageCode };

export type Confidence = 'high' | 'medium' | 'low';

export interface Language {
	/** Same string as the key this entry sits under in the language table. */
	code: string;
	name: string;
	endonym?: string;
	family: string;
	lat?: number;
	lng?: number;
	locationNote?: string;
}

export interface Strategy {
	id: string;
	label: string;
	schematic: string;
	description: string;
	color: 'sky' | 'amber' | 'emerald' | 'violet' | 'rose' | 'slate';
}

export interface Source {
	id: string;
	authors: string[];
	year: number | string;
	title: string;
	container?: string;
	publisher?: string;
	pages?: string;
	editors?: string[];
	url?: string;
	doi?: string;
	type: 'book' | 'article' | 'chapter' | 'dataset' | 'url';
}

export interface Citation {
	source: string;
	locator?: string;
	note?: string;
}

export interface ExampleSet {
	id: string;
	label?: string;
	title: string;
	description?: string;
}

export interface ExampleIllustration {
	original: string;
	transliteration?: string;
	gloss?: string;
	literal?: string;
	natural?: string;
}

export interface Example {
	language: LanguageCode;
	original: string;
	transliteration?: string;
	gloss?: string;
	literal: string;
	natural: string;
	set?: string;
	illustration?: ExampleIllustration;
	sources?: Citation[];
	/** No source is on record for this form yet; it renders as [citation needed]. */
	citationNeeded?: boolean;
}

/**
 * Where the predicate came from lexically. Kept apart from `strategy`, which
 * classifies the synchronic construction: a form can be BE in origin and a
 * specialized existential in current use (Russian есть), or HAVE in origin and
 * no longer the ordinary possessive verb (Spanish hay, against tener).
 */
export type PredicateOrigin =
	| 'be'
	| 'exist'
	| 'have'
	| 'comitative'
	| 'give'
	| 'find'
	| 'posture'
	| 'stay'
	| 'deictic'
	| 'locative'
	| 'article'
	| 'opaque';

/** How well the origin is established. `opaque` origins are usually `unknown`. */
export type OriginEvidence = 'transparent' | 'established' | 'unknown';

/** Functions that may share one predicate — the Clark/Stassen locational triad. */
export type LocationalFunction = 'location' | 'existence' | 'possession';

export interface Attestation {
	language: LanguageCode;
	strategy: string;
	expression: string;
	/** Romanization of `expression`, for languages written in another script. */
	transliteration?: string;
	confidence: Confidence;
	note?: string;
	sources?: Citation[];
	/** No source is on record for this attestation yet; renders as [citation needed]. */
	citationNeeded?: boolean;
	/** Lexical origin of the predicate, with how securely it is known. */
	origin?: { value: PredicateOrigin; evidence: OriginEvidence };
	/** An expletive or locative element filling the subject slot: there, ci, y. */
	proform?: 'none' | 'locative' | 'expletive';
	/**
	 * Which of location / existence / possession the predicate lexeme covers
	 * across all its constructions. Scoped to the lexeme, not to the one
	 * construction in `expression`: English `be` carries `location`, French
	 * `avoir` carries `possession`.
	 */
	syncretism?: LocationalFunction[];
	/**
	 * Whether the predicate also states plain location — English `be` does,
	 * Turkish `var` does not.
	 */
	headAlsoLocates?: boolean;
}

export type PolarityRelation = 'same-with-negator' | 'suppletive' | 'compound';

export interface PolarityContrast {
	language: LanguageCode;
	affirmative: string;
	affirmativeTransliteration?: string;
	negative: string;
	negativeTransliteration?: string;
	relation: PolarityRelation;
	note?: string;
	sources?: Citation[];
}

export interface PolaritySection {
	title?: string;
	summary: string;
	contrasts: PolarityContrast[];
	examples?: Example[];
	exampleSets?: ExampleSet[];
	sources?: Citation[];
}

export interface ParadigmAxis {
	id: string;
	label: string;
	description?: string;
}

export interface ParadigmCell {
	language: LanguageCode;
	axis: string;
	form: string;
	/** Romanization of `form`, for languages written in another script. */
	transliteration?: string;
	strategy?: string;
	/**
	 * Citation form of the word inside `form` that the column turns on. Two cells
	 * of one language sharing a lemma is that language colexifying the two
	 * columns, which is what the column clustering measures. Leave it off where
	 * the language supplies no such word: a placeholder would match every other
	 * placeholder and register as colexification that nothing supports.
	 */
	lemma?: string;
	note?: string;
	sources?: Citation[];
}

export interface ParadigmSection {
	title?: string;
	summary?: string;
	axes: ParadigmAxis[];
	cells: ParadigmCell[];
	sources?: Citation[];
}

/**
 * How a language's off-verb stands to its on-verb. Separate from PolarityRelation,
 * which describes clause negation and carries its own vocabulary.
 */
export type SwitchOffRelation = 'mirrored' | 'domain-switch' | 'particle';

export interface SwitchPair {
	language: LanguageCode;
	on: string;
	off: string;
	/** What the off verb means outside this construction. */
	offSense: string;
	relation: SwitchOffRelation;
	note?: string;
	sources?: Citation[];
}

export interface SwitchOffSection {
	title?: string;
	summary: string;
	pairs: SwitchPair[];
	sources?: Citation[];
}

export interface Pattern {
	slug: string;
	title: string;
	shortTitle: string;
	question: string;
	summary: string;
	tags: TagId[];
	strategies: Strategy[];
	attestations?: Attestation[];
	examples: Example[];
	exampleSets?: ExampleSet[];
	paradigm?: ParadigmSection;
	polarity?: PolaritySection;
	switchOff?: SwitchOffSection;
	related: { kind: 'pattern' | 'pathway'; slug: string; label: string }[];
	sources?: Citation[];
}

export interface Stage {
	id: string;
	number: number;
	label: string;
	schematic: string;
	description: string;
	sources?: Citation[];
}

export type BandStatus = 'dominant' | 'emerging' | 'declining' | 'approximate';

export interface TimelineBand {
	language: LanguageCode;
	form: string;
	/** Romanization of `form`, for languages written in another script. */
	transliteration?: string;
	stageId: string;
	start: number;
	end: number;
	status: BandStatus;
	uncertaintyStart?: number;
	uncertaintyEnd?: number;
	note?: string;
	sources?: Citation[];
}

export interface NeighboringShift {
	schematic: string;
	realizations?: number;
	status: 'accepted' | 'proposed';
	url: string;
	note?: string;
}

export interface Pathway {
	slug: string;
	title: string;
	shortTitle: string;
	question: string;
	kind: 'cycle' | 'pathway' | 'shift';
	summary: string;
	tags: TagId[];
	evidenceNote?: string;
	stages: Stage[];
	bands: TimelineBand[];
	examples?: Example[];
	exampleSets?: ExampleSet[];
	neighboringShifts?: NeighboringShift[];
	related: { kind: 'pattern' | 'pathway'; slug: string; label: string }[];
	sources?: Citation[];
}
