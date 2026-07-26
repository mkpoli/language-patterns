export type LanguageCode = string;

export type Confidence = 'high' | 'medium' | 'low';

export interface Language {
	code: LanguageCode;
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
	confidence: Confidence;
	note?: string;
	sources?: Citation[];
	/** Lexical origin of the predicate, with how securely it is known. */
	origin?: { value: PredicateOrigin; evidence: OriginEvidence };
	/** An expletive or locative element filling the subject slot: there, ci, y. */
	proform?: 'none' | 'locative' | 'expletive';
	/** Which of location / existence / possession this predicate also covers. */
	syncretism?: LocationalFunction[];
	/**
	 * Whether the predicate HEAD can carry a plain locational clause with a
	 * definite subject, independently of whether this existential CONSTRUCTION
	 * can. English `be` can (`the book is on the table`) even though `there is`
	 * cannot take `the book`; Turkish `var` cannot at all. `strategy` classifies
	 * the construction, so this records the separate fact about the head.
	 */
	headAlsoLocates?: boolean;
}

export type PolarityRelation = 'same-with-negator' | 'suppletive' | 'compound';

export interface PolarityContrast {
	language: LanguageCode;
	affirmative: string;
	negative: string;
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
	strategy?: string;
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

export interface Pattern {
	slug: string;
	title: string;
	shortTitle: string;
	question: string;
	summary: string;
	category: string[];
	strategies: Strategy[];
	attestations?: Attestation[];
	examples: Example[];
	exampleSets?: ExampleSet[];
	paradigm?: ParadigmSection;
	polarity?: PolaritySection;
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
	evidenceNote?: string;
	stages: Stage[];
	bands: TimelineBand[];
	examples?: Example[];
	exampleSets?: ExampleSet[];
	neighboringShifts?: NeighboringShift[];
	related: { kind: 'pattern' | 'pathway'; slug: string; label: string }[];
	sources?: Citation[];
}
