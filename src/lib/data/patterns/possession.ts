import type { Pattern } from '$lib/types';

export const possession: Pattern = {
	slug: 'possession',
	title: 'Possession',
	shortTitle: 'I have…',
	question: 'How do languages say “I have X”?',
	summary:
		'Possession looks like one notion, but languages package it in strikingly different ways. Some use a transitive HAVE-verb. Others say something closer to “at me, X is” (locational), “to me, X is” (dative), “I-with X” (comitative), or “as for me, X exists” (topic). The same language often picks a different strategy depending on what is possessed — inanimate, animate, kin, body-parts — so Possession is one of the great showcases of typological diversity.',
	category: ['Meaning & Expression', 'Possession & Existence'],
	strategies: [
		{
			id: 'have',
			label: 'HAVE-transitive',
			schematic: '[I] [have] [X]',
			description:
				'A dedicated transitive verb whose subject is the possessor. Typical of European languages and Mandarin 有.',
			color: 'sky'
		},
		{
			id: 'locational',
			label: 'Locational possession',
			schematic: '[at/to me] [X] [be / EXIST]',
			description:
				'No HAVE-verb. The possessor surfaces as a locative, adessive, or dative phrase, and the possessed item is the subject of an existential or copular predication.',
			color: 'amber'
		},
		{
			id: 'topic',
			label: 'Topic possession',
			schematic: '[me TOP] [X NOM] [be / EXIST]',
			description:
				'The possessor is marked as the topic; the possessed item is the grammatical subject of an existential. Common in Japanese and Korean.',
			color: 'emerald'
		},
		{
			id: 'comitative',
			label: 'Comitative possession',
			schematic: '[I] [with] [X]',
			description:
				'The possessor is the subject of a comitative or “be-with” predicate. Common in many Atlantic-Congo languages — Swahili fuses the pronoun and the comitative particle.',
			color: 'violet'
		},
		{
			id: 'genitive-existential',
			label: 'Genitive-existential',
			schematic: '[my X] [EXIST]',
			description:
				'The possessor is marked on the possessed noun (genitive or possessive suffix); the predicate is an existential. Turkish and Hungarian are textbook examples.',
			color: 'rose'
		}
	],
	attestations: [
		// HAVE-transitive
		{ language: 'en', strategy: 'have', expression: 'I have X', confidence: 'high', sources: [{ source: 'stassen-2009' }] },
		{ language: 'fr', strategy: 'have', expression: "j'ai X", confidence: 'high', sources: [{ source: 'stassen-2009' }] },
		{ language: 'es', strategy: 'have', expression: 'tengo X', confidence: 'high' },
		{ language: 'it', strategy: 'have', expression: 'ho X', confidence: 'high' },
		{ language: 'de', strategy: 'have', expression: 'ich habe X', confidence: 'high' },
		{ language: 'zh', strategy: 'have', expression: '我有 X', confidence: 'high', note: 'same 有 yǒu as the existential', sources: [{ source: 'heine-1997' }] },
		{ language: 'vi', strategy: 'have', expression: 'tôi có X', confidence: 'high' },
		{ language: 'eu', strategy: 'have', expression: 'X daukat', confidence: 'high', note: 'eduki / *edun: transitive HAVE-verbs; ergative-absolutive agreement on the verb' },
		{ language: 'ain', strategy: 'have', expression: 'ku=kor X', confidence: 'high', note: 'kor “have, own”; 1SG agent prefix ku=', sources: [{ source: 'tamura-2000' }] },

		// Locational
		{ language: 'ru', strategy: 'locational', expression: 'у меня есть X', confidence: 'high', note: 'at me.GEN EXIST X', sources: [{ source: 'stassen-2009' }, { source: 'freeze-1992' }] },
		{ language: 'la', strategy: 'locational', expression: 'mihi X est', confidence: 'high', note: 'dative of possessor + copula' },
		{ language: 'cy', strategy: 'locational', expression: 'mae X gennyf', confidence: 'high', note: 'comitative preposition gan + pronoun suffix' },
		{ language: 'ar', strategy: 'locational', expression: 'عندي X ʿindī X', confidence: 'high', note: 'ʿinda “at, with” + 1SG suffix' },
		{ language: 'he', strategy: 'locational', expression: 'יש לי X yesh li X', confidence: 'high', note: 'EXIST + dative; the canonical case study for non-HAVE possession', sources: [{ source: 'stassen-2009' }] },
		{ language: 'hi', strategy: 'locational', expression: 'मेरे पास X है mere pās X hai', confidence: 'high', note: 'literally “near me, X is”' },
		{ language: 'fi', strategy: 'locational', expression: 'minulla on X', confidence: 'high', note: 'adessive case on the possessor' },
		{ language: 'ko', strategy: 'locational', expression: '나에게 X가 있다 na-ege X-ga issda', confidence: 'high', note: 'dative possessor + existential 있다' },

		// Genitive-existential
		{ language: 'tr', strategy: 'genitive-existential', expression: 'benim X-im var', confidence: 'high', note: 'genitive possessor + possessive suffix on noun + var', sources: [{ source: 'stassen-2009' }] },
		{ language: 'hu', strategy: 'genitive-existential', expression: 'van X-em', confidence: 'high', note: 'van + possessive suffix on the possessed noun' },

		// Topic
		{ language: 'ja', strategy: 'topic', expression: '私は X がある / いる', confidence: 'high', note: 'animate/inanimate split inherited from the existential', sources: [{ source: 'clark-1978' }] },

		// Comitative
		{ language: 'sw', strategy: 'comitative', expression: 'ni-na X', confidence: 'high', note: 'ni- (1SG) + -na “with”' }
	],
	examples: [
		{
			language: 'en',
			original: 'I have water.',
			gloss: '1SG have.1SG water',
			literal: 'I have water.',
			natural: 'I have water.',
			set: 'inanimate'
		},
		{
			language: 'fr',
			original: "J'ai de l'eau.",
			gloss: '1SG.have.1SG PART.SG.DEF water',
			literal: 'I have of-the water.',
			natural: 'I have water.',
			set: 'inanimate'
		},
		{
			language: 'es',
			original: 'Tengo agua.',
			gloss: 'have.1SG water',
			literal: 'I-have water.',
			natural: 'I have water.',
			set: 'inanimate'
		},
		{
			language: 'de',
			original: 'Ich habe Wasser.',
			gloss: '1SG have.1SG water',
			literal: 'I have water.',
			natural: 'I have water.',
			set: 'inanimate'
		},
		{
			language: 'zh',
			original: '我有水。',
			transliteration: 'wǒ yǒu shuǐ.',
			gloss: '1SG have water',
			literal: 'I have water.',
			natural: 'I have water.',
			set: 'inanimate'
		},
		{
			language: 'vi',
			original: 'Tôi có nước.',
			gloss: '1SG have water',
			literal: 'I have water.',
			natural: 'I have water.',
			set: 'inanimate'
		},
		{
			language: 'eu',
			original: 'Ura daukat.',
			gloss: 'water.ABS.DEF have.1SG.ERG',
			literal: 'The water I-have.',
			natural: 'I have water.',
			set: 'inanimate'
		},
		{
			language: 'ain',
			original: 'Ku=kor wakka.',
			transliteration: 'クコㇿ ワッカ',
			gloss: '1SG.A=have water',
			literal: 'I-have water.',
			natural: 'I have water.',
			set: 'inanimate',
			sources: [{ source: 'tamura-2000' }]
		},
		{
			language: 'ru',
			original: 'У меня есть вода.',
			transliteration: 'U menya yest’ voda.',
			gloss: 'at 1SG.GEN EXIST water.NOM',
			literal: 'At me, water exists.',
			natural: 'I have water.',
			set: 'inanimate',
			sources: [{ source: 'stassen-2009' }]
		},
		{
			language: 'la',
			original: 'Mihi aqua est.',
			gloss: '1SG.DAT water.NOM be.3SG.PRS',
			literal: 'To-me water is.',
			natural: 'I have water.',
			set: 'inanimate'
		},
		{
			language: 'cy',
			original: 'Mae dŵr gennyf.',
			gloss: 'be.3SG.PRS water with.1SG',
			literal: 'Is water with-me.',
			natural: 'I have water.',
			set: 'inanimate'
		},
		{
			language: 'ar',
			original: 'عندي ماء.',
			transliteration: 'ʿindī māʔ.',
			gloss: 'at.1SG water',
			literal: 'At-me water.',
			natural: 'I have water.',
			set: 'inanimate'
		},
		{
			language: 'he',
			original: 'יש לי מים.',
			transliteration: 'yesh li mayim.',
			gloss: 'EXIST 1SG.DAT water',
			literal: 'There-is to-me water.',
			natural: 'I have water.',
			set: 'inanimate',
			sources: [{ source: 'stassen-2009' }]
		},
		{
			language: 'hi',
			original: 'मेरे पास पानी है।',
			transliteration: 'mere pās pānī hai.',
			gloss: '1SG.GEN near water be.3SG',
			literal: 'Near me, water is.',
			natural: 'I have water.',
			set: 'inanimate'
		},
		{
			language: 'fi',
			original: 'Minulla on vettä.',
			gloss: '1SG.ADE be.3SG water.PART',
			literal: 'At-me is of-water.',
			natural: 'I have water.',
			set: 'inanimate'
		},
		{
			language: 'ko',
			original: '나에게 물이 있다.',
			transliteration: 'na-ege mul-i issda.',
			gloss: '1SG-DAT water-NOM exist',
			literal: 'To-me, water exists.',
			natural: 'I have water.',
			set: 'inanimate'
		},
		{
			language: 'tr',
			original: 'Benim suyum var.',
			gloss: '1SG.GEN water.POSS.1SG EXIST',
			literal: 'My water exists.',
			natural: 'I have water.',
			set: 'inanimate'
		},
		{
			language: 'hu',
			original: 'Van vizem.',
			gloss: 'be.3SG water.POSS.1SG',
			literal: 'Is my-water.',
			natural: 'I have water.',
			set: 'inanimate'
		},
		{
			language: 'ja',
			original: '私は水がある。',
			transliteration: 'watashi wa mizu ga aru.',
			gloss: '1SG TOP water NOM exist.INAN',
			literal: 'As for me, water exists.',
			natural: 'I have water.',
			set: 'inanimate'
		},
		{
			language: 'sw',
			original: 'Nina maji.',
			gloss: '1SG-with water',
			literal: 'I-with water.',
			natural: 'I have water.',
			set: 'inanimate'
		}
	],
	exampleSets: [
		{
			id: 'inanimate',
			label: 'Inanimate',
			title: '“I have water.”',
			description:
				'A mass-noun possession test. The strategy splits are dramatic: HAVE-transitive in Romance, Germanic, and Mandarin; locational in Russian (у меня есть), Latin, Welsh, Arabic, Hebrew, Hindi, Finnish, Korean; genitive-existential in Turkish and Hungarian; topic in Japanese; comitative in Swahili.'
		}
	],
	related: [
		{ kind: 'pattern', slug: 'existence', label: 'Existence' },
		{ kind: 'pattern', slug: 'non-possession', label: 'Non-possession' },
		{ kind: 'pathway', slug: 'jespersens-cycle', label: "Jespersen's Cycle" }
	],
	sources: [
		{ source: 'stassen-2009' },
		{ source: 'heine-1997' },
		{ source: 'freeze-1992' },
		{ source: 'clark-1978' },
		{ source: 'heine-kuteva-2002' }
	]
};
