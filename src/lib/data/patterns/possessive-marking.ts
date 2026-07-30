import type { Pattern } from '$lib/types';

export const possessiveMarking: Pattern = {
	slug: 'possessive-marking',
	title: 'Possessive marking',
	shortTitle: 'The man’s head',
	question: 'Where does “the man’s head” carry its mark?',
	summary:
		'Two nouns get tied together in five ways: a genitive on the possessor (Latin, Russian, English ’s), a person affix on the possessed noun (Hungarian, Ainu, Navajo), both at once (Turkish, Quechua), a free particle between the two (Japanese の, Mandarin 的, Romance de), or nothing beyond word order (Welsh, Indonesian).',
	tags: ['possession', 'case-marking', 'adposition'],
	strategies: [
		{
			id: 'possessor-marked',
			label: 'Possessor-marked',
			schematic: '[man-GEN] [head]',
			description:
				'A genitive case or clitic sits on the possessor. Latin caput virī, Russian голова человека — and English ’s, which leans on the whole possessor phrase: the King of Spain’s daughter.',
			color: 'sky'
		},
		{
			id: 'possessee-marked',
			label: 'Possessee-marked',
			schematic: '[man] [head-his]',
			description:
				'The possessed noun carries a person affix and the possessor stands beside it unmarked. Hungarian a férfi feje “the man head-his”; Ainu okkayo sapaha; Navajo hastiin bighan “the man his-home”.',
			color: 'amber'
		},
		{
			id: 'double-marked',
			label: 'Double-marked',
			schematic: '[man-GEN] [head-his]',
			description:
				'Both at once. Turkish adamın başı puts the genitive on the possessor and a person suffix on the possessed; Quechua does the same with -pa and -n.',
			color: 'emerald'
		},
		{
			id: 'linker',
			label: 'Linker particle',
			schematic: '[man] [LINK] [head]',
			description:
				'A free particle or adposition ties the two nouns without agreeing with either: Japanese の, Mandarin 的, Romance de. The order differs — の and 的 follow the possessor, de leads it.',
			color: 'violet'
		},
		{
			id: 'juxtaposition',
			label: 'Juxtaposition',
			schematic: '[head] [the man]',
			description:
				'No marker at all; a fixed order carries the relation. Welsh pen y dyn “head the man” keeps the article on the possessor only; Indonesian kepala laki-laki itu works the same way.',
			color: 'rose'
		}
	],
	attestations: [
		// Possessor-marked
		{ language: 'en', strategy: 'possessor-marked', expression: 'X’s Y', confidence: 'high', note: '’s is a phrasal clitic on the possessor phrase: the King of Spain’s daughter', sources: [{ source: 'nichols-bickel-2013-locus' }] },
		{ language: 'ru', strategy: 'possessor-marked', expression: 'Y X-а', transliteration: 'golova čeloveka', confidence: 'high', note: 'genitive case on the possessor, which follows the head' },
		{ language: 'la', strategy: 'possessor-marked', expression: 'caput virī', confidence: 'high', note: 'genitive case; either order occurs' },
		{ language: 'de', strategy: 'possessor-marked', expression: 'der Kopf des Mannes', confidence: 'high', note: 'genitive on article and noun; prenominal des Mannes Kopf survives in names and set phrases' },

		// Possessee-marked
		{ language: 'hu', strategy: 'possessee-marked', expression: 'a férfi feje', confidence: 'high', note: 'possessor unmarked, person suffix -e/-je on the head; a dative possessor (a férfinak a feje) adds emphasis', sources: [{ source: 'nichols-bickel-2013-locus' }] },
		{ language: 'ain', strategy: 'possessee-marked', expression: 'okkayo sapaha', confidence: 'high', note: 'possessed form -hV/-VhV on body-part, kin and part nouns; alienables use attributive kor instead', sources: [{ source: 'tamura-2000' }, { source: 'bugaeva-2012' }] },
		{ language: 'nv', strategy: 'possessee-marked', expression: 'hastiin bighan', confidence: 'high', note: '3rd-person bi- on the possessed noun: “the man his-home”', sources: [{ source: 'young-morgan-1987' }] },

		// Double-marked
		{ language: 'tr', strategy: 'double-marked', expression: 'adam-ın baş-ı', confidence: 'high', note: 'genitive -ın on the possessor and person -ı on the possessed, the izafet chain', sources: [{ source: 'goksel-kerslake-2005' }] },
		{ language: 'qu', strategy: 'double-marked', expression: 'runa-pa wasi-n', confidence: 'high', note: 'genitive -pa and 3rd-person -n; the genitive’s shape varies across Quechua varieties', sources: [{ source: 'weber-1989' }] },

		// Linker particle
		{ language: 'ja', strategy: 'linker', expression: 'XのY', transliteration: 'X no Y', confidence: 'high' },
		{ language: 'zh', strategy: 'linker', expression: 'X的Y', transliteration: 'X de Y', confidence: 'high', note: '的 drops with kin and close relations', sources: [{ source: 'li-thompson-1981' }] },
		{ language: 'fr', strategy: 'linker', expression: 'Y de X', confidence: 'high' },
		{ language: 'es', strategy: 'linker', expression: 'Y de X', confidence: 'high' },

		// Juxtaposition
		{ language: 'cy', strategy: 'juxtaposition', expression: 'pen y dyn', confidence: 'high', note: 'the possessed noun drops its article; only the possessor keeps one', sources: [{ source: 'king-2003' }] },
		{ language: 'id', strategy: 'juxtaposition', expression: 'kepala laki-laki itu', confidence: 'high', note: 'possessed–possessor order with no marker', sources: [{ source: 'sneddon-1996' }] }
	],
	examples: [
		{
			language: 'en',
			original: 'the man’s head',
			gloss: 'the man-GEN head',
			literal: 'the man’s head',
			natural: 'the man’s head',
			set: 'head'
		},
		{
			language: 'ru',
			original: 'голова человека',
			transliteration: 'golova čeloveka',
			gloss: 'head.NOM man.GEN',
			literal: 'head of-man',
			natural: 'the man’s head',
			set: 'head'
		},
		{
			language: 'la',
			original: 'caput virī',
			gloss: 'head.NOM man.GEN',
			literal: 'head of-man',
			natural: 'the man’s head',
			set: 'head'
		},
		{
			language: 'de',
			original: 'der Kopf des Mannes',
			gloss: 'the.NOM head the.GEN man.GEN',
			literal: 'the head of-the man',
			natural: 'the man’s head',
			set: 'head'
		},
		{
			language: 'hu',
			original: 'a férfi feje',
			gloss: 'the man head-POSS.3SG',
			literal: 'the man head-his',
			natural: 'the man’s head',
			set: 'head',
			sources: [{ source: 'nichols-bickel-2013-locus' }]
		},
		{
			language: 'ain',
			original: 'okkayo sapaha',
			transliteration: 'オッカヨ サパハ',
			gloss: 'man head-POSS',
			literal: 'man head-his',
			natural: 'the man’s head',
			set: 'head',
			sources: [{ source: 'tamura-2000' }]
		},
		{
			language: 'nv',
			original: 'hastiin bitsiitsʼiin',
			gloss: 'man 3SG-head',
			literal: 'man his-head',
			natural: 'the man’s head',
			set: 'head',
			sources: [{ source: 'young-morgan-1987' }]
		},
		{
			language: 'tr',
			original: 'adamın başı',
			gloss: 'man-GEN head-POSS.3SG',
			literal: 'man-of head-his',
			natural: 'the man’s head',
			set: 'head',
			sources: [{ source: 'goksel-kerslake-2005' }]
		},
		{
			language: 'qu',
			original: 'runapa uman',
			gloss: 'man-GEN head-3SG',
			literal: 'man-of head-his',
			natural: 'the man’s head',
			set: 'head',
			sources: [{ source: 'weber-1989' }]
		},
		{
			language: 'ja',
			original: '男の頭',
			transliteration: 'otoko no atama',
			gloss: 'man GEN head',
			literal: 'man-of head',
			natural: 'the man’s head',
			set: 'head'
		},
		{
			language: 'zh',
			original: '男人的头',
			transliteration: 'nánrén de tóu',
			gloss: 'man GEN head',
			literal: 'man-of head',
			natural: 'the man’s head',
			set: 'head'
		},
		{
			language: 'fr',
			original: 'la tête de l’homme',
			gloss: 'the head of the.man',
			literal: 'the head of the-man',
			natural: 'the man’s head',
			set: 'head'
		},
		{
			language: 'cy',
			original: 'pen y dyn',
			gloss: 'head the man',
			literal: 'head the man',
			natural: 'the man’s head',
			set: 'head',
			sources: [{ source: 'king-2003' }]
		},
		{
			language: 'id',
			original: 'kepala laki-laki itu',
			gloss: 'head man that',
			literal: 'head man that',
			natural: 'that man’s head',
			set: 'head',
			sources: [{ source: 'sneddon-1996' }]
		}
	],
	exampleSets: [
		{
			id: 'head',
			label: 'The man’s head',
			title: '“the man’s head”',
			description:
				'One phrase across every locus. The genitive languages mark the man, Hungarian, Ainu and Navajo mark the head, Turkish and Quechua mark both, Japanese, Mandarin and French put a particle between the nouns, and Welsh and Indonesian rely on order alone.'
		}
	],
	related: [
		{ kind: 'pattern', slug: 'possession', label: 'Possession' },
		{ kind: 'pattern', slug: 'alienability', label: 'Alienability' }
	],
	sources: [
		{ source: 'nichols-1986' },
		{ source: 'nichols-bickel-2013-locus' }
	]
};
