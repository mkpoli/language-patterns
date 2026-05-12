import type { Source } from '$lib/types';

export const sources: Record<string, Source> = {
	// ─── Existential & possessive constructions ─────────────────────────────────
	'clark-1978': {
		id: 'clark-1978',
		authors: ['Clark, Eve V.'],
		year: 1978,
		title: 'Locationals: Existential, locative, and possessive constructions',
		container: 'Universals of Human Language, Vol. 4: Syntax',
		editors: ['Greenberg, Joseph H.'],
		publisher: 'Stanford University Press',
		pages: '85–126',
		type: 'chapter'
	},
	'freeze-1992': {
		id: 'freeze-1992',
		authors: ['Freeze, Ray'],
		year: 1992,
		title: 'Existentials and other locatives',
		container: 'Language',
		pages: '68(3): 553–595',
		doi: '10.2307/415794',
		type: 'article'
	},
	'mcnally-2011': {
		id: 'mcnally-2011',
		authors: ['McNally, Louise'],
		year: 2011,
		title: 'Existential sentences',
		container: 'Semantics: An International Handbook of Natural Language Meaning, Vol. 2',
		editors: ['von Heusinger, Klaus', 'Maienborn, Claudia', 'Portner, Paul'],
		publisher: 'De Gruyter Mouton',
		pages: '1829–1848',
		type: 'chapter'
	},
	'stassen-2009': {
		id: 'stassen-2009',
		authors: ['Stassen, Leon'],
		year: 2009,
		title: 'Predicative Possession',
		publisher: 'Oxford University Press',
		type: 'book'
	},
	'heine-1997': {
		id: 'heine-1997',
		authors: ['Heine, Bernd'],
		year: 1997,
		title: 'Possession: Cognitive Sources, Forces, and Grammaticalization',
		publisher: 'Cambridge University Press',
		type: 'book'
	},

	// ─── Negation ───────────────────────────────────────────────────────────────
	'jespersen-1917': {
		id: 'jespersen-1917',
		authors: ['Jespersen, Otto'],
		year: 1917,
		title: 'Negation in English and Other Languages',
		publisher: 'A. F. Høst, Copenhagen',
		type: 'book'
	},
	'dahl-1979': {
		id: 'dahl-1979',
		authors: ['Dahl, Östen'],
		year: 1979,
		title: 'Typology of sentence negation',
		container: 'Linguistics',
		pages: '17(1–2): 79–106',
		doi: '10.1515/ling.1979.17.1-2.79',
		type: 'article'
	},
	'vanderauwera-2009': {
		id: 'vanderauwera-2009',
		authors: ['van der Auwera, Johan'],
		year: 2009,
		title: 'The Jespersen Cycles',
		container: 'Cyclical Change',
		editors: ['van Gelderen, Elly'],
		publisher: 'John Benjamins',
		pages: '35–71',
		type: 'chapter'
	},
	'mosegaard-hansen-2013': {
		id: 'mosegaard-hansen-2013',
		authors: ['Mosegaard Hansen, Maj-Britt'],
		year: 2013,
		title: 'Negation in the history of French',
		container: 'The History of Negation in the Languages of Europe and the Mediterranean, Vol. 1',
		editors: ['Willis, David', 'Lucas, Christopher', 'Breitbarth, Anne'],
		publisher: 'Oxford University Press',
		pages: '51–76',
		type: 'chapter'
	},
	'wallage-2017': {
		id: 'wallage-2017',
		authors: ['Wallage, Phillip'],
		year: 2017,
		title: 'Negation in Early English: Grammatical and Functional Change',
		publisher: 'Cambridge University Press',
		type: 'book'
	},
	'willis-lucas-breitbarth-2013': {
		id: 'willis-lucas-breitbarth-2013',
		authors: ['Willis, David', 'Lucas, Christopher', 'Breitbarth, Anne'],
		year: 2013,
		title: 'The History of Negation in the Languages of Europe and the Mediterranean, Volume 1: Case Studies',
		publisher: 'Oxford University Press',
		type: 'book'
	},
	'veselinova-2014': {
		id: 'veselinova-2014',
		authors: ['Veselinova, Ljuba N.'],
		year: 2014,
		title: 'The Negative Existential Cycle viewed through the lens of comparative data',
		container: 'On Multiple Source Constructions in Language Change',
		editors: ['Hancil, Sylvie', 'van Gelderen, Elly'],
		publisher: 'John Benjamins',
		pages: '139–187',
		type: 'chapter'
	},
	'veselinova-hamari-2022': {
		id: 'veselinova-hamari-2022',
		authors: ['Veselinova, Ljuba N.', 'Hamari, Arja'],
		year: 2022,
		title: 'The Negative Existential Cycle',
		publisher: 'Language Science Press',
		url: 'https://langsci-press.org/catalog/book/335',
		type: 'book'
	},
	'croft-1991': {
		id: 'croft-1991',
		authors: ['Croft, William'],
		year: 1991,
		title: 'The evolution of negation',
		container: 'Journal of Linguistics',
		pages: '27(1): 1–27',
		doi: '10.1017/S0022226700012391',
		type: 'article'
	},
	'miestamo-2005': {
		id: 'miestamo-2005',
		authors: ['Miestamo, Matti'],
		year: 2005,
		title: 'Standard Negation: The Negation of Declarative Verbal Main Clauses in a Typological Perspective',
		publisher: 'Mouton de Gruyter',
		type: 'book'
	},
	'haspelmath-1997': {
		id: 'haspelmath-1997',
		authors: ['Haspelmath, Martin'],
		year: 1997,
		title: 'Indefinite Pronouns',
		publisher: 'Oxford University Press',
		type: 'book'
	},
	'kratzer-shimoyama-2002': {
		id: 'kratzer-shimoyama-2002',
		authors: ['Kratzer, Angelika', 'Shimoyama, Junko'],
		year: 2002,
		title: 'Indeterminate pronouns: The view from Japanese',
		container: 'Proceedings of the Third Tokyo Conference on Psycholinguistics',
		editors: ['Otsu, Yukio'],
		publisher: 'Hituzi Syobo, Tokyo',
		pages: '1–25',
		type: 'chapter'
	},
	'giannakidou-2011': {
		id: 'giannakidou-2011',
		authors: ['Giannakidou, Anastasia'],
		year: 2011,
		title: 'Negative and positive polarity items: Variation, licensing, and compositionality',
		container: 'Semantics: An International Handbook of Natural Language Meaning',
		editors: ['von Heusinger, Klaus', 'Maienborn, Claudia', 'Portner, Paul'],
		publisher: 'De Gruyter Mouton',
		pages: '1660–1712',
		type: 'chapter'
	},

	// ─── Grammaticalization & typology ─────────────────────────────────────────
	'heine-kuteva-2002': {
		id: 'heine-kuteva-2002',
		authors: ['Heine, Bernd', 'Kuteva, Tania'],
		year: 2002,
		title: 'World Lexicon of Grammaticalization',
		publisher: 'Cambridge University Press',
		type: 'book'
	},
	'kuteva-et-al-2019': {
		id: 'kuteva-et-al-2019',
		authors: [
			'Kuteva, Tania',
			'Heine, Bernd',
			'Hong, Bo',
			'Long, Haiping',
			'Narrog, Heiko',
			'Rhee, Seongha'
		],
		year: 2019,
		title: 'World Lexicon of Grammaticalization',
		container: '2nd edition',
		publisher: 'Cambridge University Press',
		type: 'book'
	},
	'hopper-traugott-2003': {
		id: 'hopper-traugott-2003',
		authors: ['Hopper, Paul J.', 'Traugott, Elizabeth Closs'],
		year: 2003,
		title: 'Grammaticalization',
		container: '2nd edition',
		publisher: 'Cambridge University Press',
		type: 'book'
	},
	'croft-1990': {
		id: 'croft-1990',
		authors: ['Croft, William'],
		year: 1990,
		title: 'Typology and Universals',
		publisher: 'Cambridge University Press',
		type: 'book'
	},
	'comrie-1989': {
		id: 'comrie-1989',
		authors: ['Comrie, Bernard'],
		year: 1989,
		title: 'Language Universals and Linguistic Typology',
		container: '2nd edition',
		publisher: 'Blackwell',
		type: 'book'
	},
	'tamura-2000': {
		id: 'tamura-2000',
		authors: ['Tamura, Suzuko'],
		year: 2000,
		title: 'The Ainu Language',
		container: 'ICHEL Linguistic Studies, Vol. 2',
		publisher: 'Sanseido, Tokyo',
		type: 'book'
	},
	'bugaeva-2012': {
		id: 'bugaeva-2012',
		authors: ['Bugaeva, Anna'],
		year: 2012,
		title: 'Southern Hokkaido Ainu',
		container: 'The Languages of Japan and Korea',
		editors: ['Tranter, Nicolas'],
		publisher: 'Routledge',
		pages: '461–509',
		type: 'chapter'
	},
	'dryer-2013-svo': {
		id: 'dryer-2013-svo',
		authors: ['Dryer, Matthew S.'],
		year: 2013,
		title: 'Order of Subject, Object and Verb',
		container: 'WALS Online (v2020.4), Chapter 81',
		editors: ['Dryer, Matthew S.', 'Haspelmath, Martin'],
		publisher: 'Max Planck Institute for Evolutionary Anthropology',
		url: 'https://wals.info/chapter/81',
		type: 'chapter'
	},
	'dryer-2013-adposition': {
		id: 'dryer-2013-adposition',
		authors: ['Dryer, Matthew S.'],
		year: 2013,
		title: 'Order of Adposition and Noun Phrase',
		container: 'WALS Online (v2020.4), Chapter 85',
		editors: ['Dryer, Matthew S.', 'Haspelmath, Martin'],
		publisher: 'Max Planck Institute for Evolutionary Anthropology',
		url: 'https://wals.info/chapter/85',
		type: 'chapter'
	},
	'dryer-haspelmath-2013': {
		id: 'dryer-haspelmath-2013',
		authors: ['Dryer, Matthew S.', 'Haspelmath, Martin'],
		year: 2013,
		title: 'The World Atlas of Language Structures Online',
		publisher: 'Max Planck Institute for Evolutionary Anthropology',
		url: 'https://wals.info',
		type: 'dataset'
	}
};

export function getSource(id: string): Source {
	const s = sources[id];
	if (!s) throw new Error(`Unknown source: ${id}`);
	return s;
}

export function formatAuthorYear(s: Source): string {
	const [first] = s.authors;
	const lastName = first.split(',')[0];
	if (s.authors.length === 1) return `${lastName} ${s.year}`;
	if (s.authors.length === 2) {
		const second = s.authors[1].split(',')[0];
		return `${lastName} & ${second} ${s.year}`;
	}
	return `${lastName} et al. ${s.year}`;
}

export function formatFullCitation(s: Source): string {
	const authors = s.authors.join('; ');
	const editorPart = s.editors?.length ? ` In ${s.editors.join('; ')} (eds.), ` : '';
	const container = s.container ? `${editorPart}${s.container}` : '';
	const pubParts = [container, s.publisher, s.pages].filter(Boolean).join('. ');
	return `${authors} (${s.year}). ${s.title}. ${pubParts}${pubParts ? '.' : ''}`;
}
