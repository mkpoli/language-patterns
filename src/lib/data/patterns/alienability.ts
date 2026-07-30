import type { Pattern } from '$lib/types';

export const alienability: Pattern = {
	slug: 'alienability',
	title: 'Alienability',
	shortTitle: 'My hand, my house',
	question: 'Do “my hand” and “my house” use the same grammar?',
	summary:
		'Hands and mothers come with a possessor built in; houses and books change hands. Grammars pick this up: some force a possessive onto body-part and kin nouns or give them special possessed forms, some route acquired things through a classifier, Mandarin lets its linker drop exactly with kin, and much of Europe moves the body-part possessor onto the verb as a dative.',
	tags: ['possession', 'alienability', 'oblique-marking'],
	strategies: [
		{
			id: 'obligatory',
			label: 'Obligatory possession',
			schematic: '[I=] [hand-POSS]',
			description:
				'Body-part and kin nouns carry a possessed form or never appear without their possessor. Ainu tek “hand” has the possessed form teke(he); Navajo kin terms are bound stems, with ʼa- “someone’s” standing in when no possessor is named.',
			color: 'sky'
		},
		{
			id: 'classifier',
			label: 'Possessive classifier',
			schematic: '[the] [CLF-my] [house]',
			description:
				'Inalienable nouns take the possessive suffix directly; the rest reach it through a classifier. Fijian keeps a general, an edible and a drinkable class; the Polynesian a/o split works the same way with two.',
			color: 'amber'
		},
		{
			id: 'marker-drop',
			label: 'Marker drop',
			schematic: '[my] (LINK) [mom]',
			description:
				'One construction serves everywhere, and its linker weakens where the bond is closest. Mandarin 的 drops freely with kin — 我妈 “my mom” — and stays with belongings — 我的书 “my book”.',
			color: 'emerald'
		},
		{
			id: 'external-possessor',
			label: 'External possessor',
			schematic: '[me.DAT] [wash] [the hand]',
			description:
				'The split shows in the clause. A body part takes a definite article and its possessor climbs onto the verb as a dative — German mir die Hände — across a Western and Central European area.',
			color: 'violet'
		},
		{
			id: 'no-split',
			label: 'No split',
			schematic: '[my] [hand] = [my] [house]',
			description:
				'One possessive for everything. English my, Japanese の and the Turkish suffixes treat hands, mothers and houses alike.',
			color: 'rose'
		}
	],
	attestations: [
		// Obligatory possession
		{ language: 'ain', strategy: 'obligatory', expression: 'tek → teke(he)', confidence: 'high', note: 'concept form against possessed form: sapa “head” → sapaha; a house is alienable and takes attributive kor instead: ku=kor cise “my house”', sources: [{ source: 'tamura-2000' }, { source: 'bugaeva-2012' }] },
		{ language: 'nv', strategy: 'obligatory', expression: 'shimá, shílaʼ', confidence: 'high', note: 'kin and body-part nouns are bound stems; the indefinite prefix ʼa- stands in when no possessor is named: ʼamá “someone’s mother”', sources: [{ source: 'young-morgan-1987' }] },

		// Possessive classifier
		{ language: 'fj', strategy: 'classifier', expression: 'liga-qu vs no-qu vale', confidence: 'high', note: 'the suffix sits on body parts and kin directly; other nouns take it on a classifier — no- general, ke- edible, me- drinkable', sources: [{ source: 'dixon-1988' }] },
		{ language: 'haw', strategy: 'classifier', expression: 'koʻu lima vs kaʻu puke', confidence: 'high', note: 'o-class for body parts, elder kin, clothing and shelter; a-class for acquired things — the split runs on control as much as on alienability', sources: [{ source: 'elbert-pukui-1979' }] },

		// Marker drop
		{ language: 'zh', strategy: 'marker-drop', expression: '我妈 vs 我的书', transliteration: 'wǒ mā vs wǒ de shū', confidence: 'high', note: '的 drops most readily with kin and other close relations', sources: [{ source: 'li-thompson-1981' }] },

		// External possessor
		{ language: 'de', strategy: 'external-possessor', expression: 'mir die Hände', confidence: 'high', note: 'dative possessor with a definite article on the body part: sie wäscht mir die Hände “she washes my hands”', sources: [{ source: 'haspelmath-1999-external' }] },
		{ language: 'fr', strategy: 'external-possessor', expression: 'me … les mains', confidence: 'high', note: 'dative clitic plus definite article', sources: [{ source: 'haspelmath-1999-external' }] },
		{ language: 'es', strategy: 'external-possessor', expression: 'me … las manos', confidence: 'high', sources: [{ source: 'haspelmath-1999-external' }] },

		// No split
		{ language: 'en', strategy: 'no-split', expression: 'my hand / my house', confidence: 'high', note: 'one possessive throughout; even body-part washing keeps my where its neighbours use a dative', sources: [{ source: 'nichols-bickel-2013-possclass' }, { source: 'haspelmath-1999-external' }] },
		{ language: 'ja', strategy: 'no-split', expression: '私の手 / 私の家', transliteration: 'watashi no te / watashi no ie', confidence: 'high', note: 'の throughout' },
		{ language: 'tr', strategy: 'no-split', expression: 'elim / evim', confidence: 'high', note: 'the same possessive suffix on every noun' }
	],
	examples: [
		{
			language: 'ain',
			original: 'ku=tekehe',
			transliteration: 'クテケヘ',
			gloss: '1SG=hand.POSS',
			literal: 'my hand-of',
			natural: 'my hand',
			set: 'hand',
			sources: [{ source: 'tamura-2000' }]
		},
		{
			language: 'nv',
			original: 'shílaʼ',
			gloss: '1SG-hand',
			literal: 'my-hand',
			natural: 'my hand',
			set: 'hand',
			sources: [{ source: 'young-morgan-1987' }]
		},
		{
			language: 'fj',
			original: 'na ligaqu',
			gloss: 'ART hand-1SG',
			literal: 'the hand-my',
			natural: 'my hand',
			set: 'hand',
			sources: [{ source: 'dixon-1988' }]
		},
		{
			language: 'haw',
			original: 'koʻu lima',
			gloss: 'POSS.1SG.O hand',
			literal: 'my(o) hand',
			natural: 'my hand',
			set: 'hand',
			sources: [{ source: 'elbert-pukui-1979' }]
		},
		{
			language: 'en',
			original: 'my hand',
			gloss: '1SG.POSS hand',
			literal: 'my hand',
			natural: 'my hand',
			set: 'hand'
		},
		{
			language: 'ja',
			original: '私の手',
			transliteration: 'watashi no te',
			gloss: '1SG GEN hand',
			literal: 'of-me hand',
			natural: 'my hand',
			set: 'hand'
		},
		{
			language: 'tr',
			original: 'elim',
			gloss: 'hand-POSS.1SG',
			literal: 'hand-my',
			natural: 'my hand',
			set: 'hand'
		},
		{
			language: 'ain',
			original: 'ku=kor cise',
			transliteration: 'クコㇿ チセ',
			gloss: '1SG.A=have house',
			literal: 'I-have house',
			natural: 'my house',
			set: 'house',
			sources: [{ source: 'tamura-2000' }]
		},
		{
			language: 'fj',
			original: 'na noqu vale',
			gloss: 'ART CLF.GENERAL-1SG house',
			literal: 'the my(general) house',
			natural: 'my house',
			set: 'house',
			sources: [{ source: 'dixon-1988' }]
		},
		{
			language: 'en',
			original: 'my house',
			gloss: '1SG.POSS house',
			literal: 'my house',
			natural: 'my house',
			set: 'house'
		},
		{
			language: 'ja',
			original: '私の家',
			transliteration: 'watashi no ie',
			gloss: '1SG GEN house',
			literal: 'of-me house',
			natural: 'my house',
			set: 'house'
		},
		{
			language: 'tr',
			original: 'evim',
			gloss: 'house-POSS.1SG',
			literal: 'house-my',
			natural: 'my house',
			set: 'house'
		},
		{
			language: 'zh',
			original: '我的房子',
			transliteration: 'wǒ de fángzi',
			gloss: '1SG GEN house',
			literal: 'me-of house',
			natural: 'my house',
			set: 'house'
		},
		{
			language: 'zh',
			original: '我妈',
			transliteration: 'wǒ mā',
			gloss: '1SG mom',
			literal: 'me mom',
			natural: 'my mom',
			set: 'mom',
			sources: [{ source: 'li-thompson-1981' }]
		},
		{
			language: 'nv',
			original: 'shimá',
			gloss: '1SG-mother',
			literal: 'my-mother',
			natural: 'my mom',
			set: 'mom',
			sources: [{ source: 'young-morgan-1987' }]
		},
		{
			language: 'en',
			original: 'my mom',
			gloss: '1SG.POSS mom',
			literal: 'my mom',
			natural: 'my mom',
			set: 'mom'
		},
		{
			language: 'ja',
			original: '私の母',
			transliteration: 'watashi no haha',
			gloss: '1SG GEN mother',
			literal: 'of-me mother',
			natural: 'my mom',
			set: 'mom'
		},
		{
			language: 'tr',
			original: 'annem',
			gloss: 'mother-POSS.1SG',
			literal: 'mother-my',
			natural: 'my mom',
			set: 'mom'
		},
		{
			language: 'de',
			original: 'Ich wasche mir die Hände.',
			gloss: '1SG wash.1SG 1SG.DAT the.PL hand.PL',
			literal: 'I wash to-me the hands.',
			natural: 'I wash my hands.',
			set: 'washing',
			sources: [{ source: 'haspelmath-1999-external' }]
		},
		{
			language: 'fr',
			original: 'Je me lave les mains.',
			gloss: '1SG 1SG.DAT wash.1SG the.PL hand.PL',
			literal: 'I to-me wash the hands.',
			natural: 'I wash my hands.',
			set: 'washing',
			sources: [{ source: 'haspelmath-1999-external' }]
		},
		{
			language: 'es',
			original: 'Me lavo las manos.',
			gloss: '1SG.DAT wash.1SG the.PL hand.PL',
			literal: 'To-me I-wash the hands.',
			natural: 'I wash my hands.',
			set: 'washing',
			sources: [{ source: 'haspelmath-1999-external' }]
		},
		{
			language: 'en',
			original: 'I wash my hands.',
			gloss: '1SG wash 1SG.POSS hand.PL',
			literal: 'I wash my hands.',
			natural: 'I wash my hands.',
			set: 'washing',
			sources: [{ source: 'haspelmath-1999-external' }]
		}
	],
	exampleSets: [
		{
			id: 'hand',
			label: 'Body part',
			title: '“my hand”',
			description:
				'The inalienable test. Ainu switches to the possessed form teke(he), Navajo and Fijian attach the person marker straight to the noun, Hawaiian picks its o-class, and English, Japanese and Turkish use their ordinary possessive.'
		},
		{
			id: 'house',
			label: 'Belonging',
			title: '“my house”',
			description:
				'An acquired thing. Ainu reaches for attributive kor “have”, since cise “house” has no possessed form; Fijian brings in its general classifier no-.'
		},
		{
			id: 'mom',
			label: 'Kin',
			title: '“my mom”',
			description:
				'Kinship sits on the inalienable side wherever a language draws the line: Navajo shimá never loses its prefix, and Mandarin drops 的 here more readily than anywhere else.'
		},
		{
			id: 'washing',
			label: 'Body-part clause',
			title: '“I wash my hands.”',
			description:
				'German, French and Spanish move the possessor out of the noun phrase onto the verb as a dative and give the body part a definite article; English keeps the plain possessive.'
		}
	],
	related: [{ kind: 'pattern', slug: 'possession', label: 'Possession' }],
	sources: [
		{ source: 'nichols-1988' },
		{ source: 'chappell-mcgregor-1996' },
		{ source: 'haspelmath-2017' },
		{ source: 'nichols-bickel-2013-possclass' },
		{ source: 'heine-1997' }
	]
};
