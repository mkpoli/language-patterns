import type { Pattern } from '$lib/types';

export const nonPossession: Pattern = {
	slug: 'non-possession',
	title: 'Non-possession',
	shortTitle: 'Not having',
	question: 'How do languages say “I don’t have X”?',
	summary:
		'To express absence of possession, languages either negate a HAVE-verb, add a negative determiner to the object, or reframe the situation as one of non-existence or absence — with the possessor as topic, location, or dative.',
	category: ['Meaning & Expression', 'Possession & Existence', 'Negation & Polarity'],
	strategies: [
		{
			id: 'negated-have',
			label: 'Negated HAVE',
			schematic: '[I] NEG [have] [X]',
			description: 'A HAVE-verb is negated by a sentential negator.',
			color: 'sky'
		},
		{
			id: 'negative-determiner',
			label: 'Negative determiner',
			schematic: '[I] [have] [NEG.DET X]',
			description: 'No negative on the verb; instead a negative determiner like “no” marks the object.',
			color: 'amber'
		},
		{
			id: 'existential-absence',
			label: 'Existential absence',
			schematic: '[X to me] [does not exist]',
			description:
				'The frame shifts: instead of negating possession, the language denies the existence of the thing (to me / at me).',
			color: 'emerald'
		},
		{
			id: 'possessed-absence',
			label: 'Possessed absence',
			schematic: '[my X] [is absent / not present]',
			description: 'A possessed noun is predicated as absent or lacking.',
			color: 'violet'
		}
	],
	attestations: [
		{ language: 'en', strategy: 'negated-have', expression: 'I do not have money', confidence: 'high' },
		{ language: 'en', strategy: 'negative-determiner', expression: 'I have no money', confidence: 'high', sources: [{ source: 'haspelmath-1997' }] },
		{ language: 'es', strategy: 'negated-have', expression: 'No tengo dinero', confidence: 'high', sources: [{ source: 'stassen-2009' }] },
		{ language: 'de', strategy: 'negative-determiner', expression: 'Ich habe kein Geld', confidence: 'high', sources: [{ source: 'haspelmath-1997' }] },
		{ language: 'ja', strategy: 'existential-absence', expression: 'お金がない', confidence: 'high', note: 'money-NOM not.exist', sources: [{ source: 'veselinova-hamari-2022' }] },
		{ language: 'tr', strategy: 'possessed-absence', expression: 'Param yok', confidence: 'high', note: 'money.POSS.1SG absent', sources: [{ source: 'stassen-2009' }] },
		{ language: 'ru', strategy: 'existential-absence', expression: 'У меня нет денег', confidence: 'high', note: 'at me NEG.EXIST money.GEN', sources: [{ source: 'stassen-2009' }, { source: 'veselinova-hamari-2022' }] }
	],
	examples: [
		{
			language: 'ja',
			original: 'お金がない。',
			transliteration: 'okane ga nai.',
			gloss: 'money NOM not.exist',
			literal: 'Money does not exist.',
			natural: 'I don’t have money.'
		},
		{
			language: 'tr',
			original: 'Param yok.',
			gloss: 'money.POSS.1SG absent',
			literal: 'My-money is absent.',
			natural: 'I don’t have money.'
		},
		{
			language: 'ru',
			original: 'У меня нет денег.',
			transliteration: 'U menya net deneg.',
			gloss: 'at me.GEN NEG.EXIST money.GEN.PL',
			literal: 'At me, money does not exist.',
			natural: 'I don’t have money.'
		},
		{
			language: 'de',
			original: 'Ich habe kein Geld.',
			gloss: '1SG have.1SG no money',
			literal: 'I have no money.',
			natural: 'I don’t have money.'
		}
	],
	related: [
		{ kind: 'pattern', slug: 'existence', label: 'Existence' },
		{ kind: 'pattern', slug: 'possession', label: 'Possession' },
		{ kind: 'pathway', slug: 'jespersens-cycle', label: "Jespersen's Cycle" }
	],
	sources: [
		{ source: 'stassen-2009' },
		{ source: 'heine-1997' },
		{ source: 'veselinova-hamari-2022' },
		{ source: 'veselinova-2014' },
		{ source: 'haspelmath-1997' }
	]
};
