export type LanguageCode = string;

export type Confidence = 'high' | 'medium' | 'low';

export interface Language {
	code: LanguageCode;
	name: string;
	endonym?: string;
	family: string;
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

export interface Example {
	language: LanguageCode;
	original: string;
	transliteration?: string;
	gloss?: string;
	literal: string;
	natural: string;
	set?: string;
	sources?: Citation[];
}

export interface Attestation {
	language: LanguageCode;
	strategy: string;
	expression: string;
	confidence: Confidence;
	note?: string;
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
	attestations: Attestation[];
	examples: Example[];
	exampleSets?: ExampleSet[];
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

export interface Pathway {
	slug: string;
	title: string;
	shortTitle: string;
	question: string;
	kind: 'cycle' | 'pathway' | 'shift';
	summary: string;
	stages: Stage[];
	bands: TimelineBand[];
	related: { kind: 'pattern' | 'pathway'; slug: string; label: string }[];
	sources?: Citation[];
}
