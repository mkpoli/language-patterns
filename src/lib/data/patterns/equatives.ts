import type { Pattern } from '$lib/types';

export const equatives: Pattern = {
	slug: 'equatives',
	title: 'Equal Comparison',
	shortTitle: 'as tall as her mother',
	question: 'How does a language say that two things match in degree?',
	summary:
		'English needs two little words for it: as tall as her mother. The commonest arrangement worldwide uses just one — French grande comme sa mère, Turkish annesi kadar uzun — and a smaller group puts the two people together and calls them equally tall. A few make a verb do the work, so that she reaches her mother in height. Across a 119-language survey, one arrangement is virtually unattested wherever the standard stands as a phrase of its own: a degree word with the standard left bare.',
	tags: ['comparison', 'adposition', 'syncretism'],
	strategies: [
		{
			id: 'standard-only',
			label: 'A “like” word alone',
			schematic: '[TALL] + LIKE + [STANDARD]',
			description:
				'The adjective stands as it is, and one marker introduces the person compared against: tall like her mother. This is the commonest arrangement in the world sample — 57 of 136 constructions. The marker is often the ordinary similative “like” (French comme, Babungo yaa), but it can be a dedicated equative word: Turkish kadar and Korean 만큼 attach to the standard and say “to the extent of”.',
			color: 'sky'
		},
		{
			id: 'degree-standard',
			label: 'A degree word and a “like” word',
			schematic: 'AS + [TALL] + AS + [STANDARD]',
			description:
				'One word marks the degree, another the standard: English as … as, French aussi … que, German so … wie. This is the core European type, and it is not only European: Hiligaynon prefixes kasing- to the adjective, Mandarin sets 跟 before the standard and 一樣 before the adjective, Japanese uses 〜と同じくらい “to the same extent as”, Swahili sawa na “equal with”.',
			color: 'amber'
		},
		{
			id: 'unified',
			label: 'Both at once, equally',
			schematic: '[X AND Y] + EQUALLY + [TALL]',
			description:
				'The two things being compared stand together as one subject, and a degree word does the rest: the twins are equally tall. Canela-Krahô in Brazil builds its equative this way; English and its neighbours have the same shape beside as … as, and Zay in Ethiopia does it with a verb, the two of them equalling each other in height. With both parties named at once there is no separate standard to mark, so the bare degree word is at home here.',
			color: 'emerald'
		},
		{
			id: 'reach',
			label: 'A verb “reach”',
			schematic: '[X] REACHES [Y] in height',
			description:
				'A verb meaning “reach” or “equal” carries the comparison, and the standard is its object. In Malgwa the verb is the whole predicate: she reaches her father in growth. In Degema it follows an ordinary adjective as a second predicate: tall, reaching me. Mandarin 有…那麼高 “has her mother that tall” puts a have-verb in the same frame, and Japanese keeps a reach verb for the negative side alone: 及ばない, does not reach.',
			color: 'violet'
		}
	],
	attestations: [
		{
			language: 'fr',
			strategy: 'standard-only',
			expression: 'grande comme sa mère',
			confidence: 'high',
			note: 'comme, the ordinary “like”',
			sources: [{ source: 'haspelmath-buchholz-1998' }]
		},
		{
			language: 'tr',
			strategy: 'standard-only',
			expression: 'annesi kadar uzun',
			confidence: 'high',
			note: 'kadar “to the extent of” follows the standard',
			sources: [{ source: 'goksel-kerslake-2005' }]
		},
		{
			language: 'ko',
			strategy: 'standard-only',
			expression: '엄마만큼 키가 크다',
			transliteration: 'eomma-mankeum ki-ga keuda',
			confidence: 'high',
			note: '만큼 attaches to the standard like a case particle',
			citationNeeded: true
		},
		{
			language: 'ja',
			strategy: 'standard-only',
			expression: '母のように背が高い',
			transliteration: 'haha no yō ni se ga takai',
			confidence: 'medium',
			note: 'the similative のように pressed into equative service; the plainer equative is 〜と同じくらい',
			sources: [{ source: 'makino-tsutsui-1986' }]
		},

		{
			language: 'en',
			strategy: 'degree-standard',
			expression: 'as tall as her mother',
			confidence: 'high',
			note: 'both as-words continue Old English eallswā “all so”',
			sources: [{ source: 'haspelmath-buchholz-1998' }]
		},
		{
			language: 'fr',
			strategy: 'degree-standard',
			expression: 'aussi grande que sa mère',
			confidence: 'high',
			sources: [{ source: 'haspelmath-buchholz-1998' }]
		},
		{
			language: 'de',
			strategy: 'degree-standard',
			expression: 'so groß wie ihre Mutter',
			confidence: 'high',
			note: 'wie is the question word “how”',
			sources: [{ source: 'haspelmath-buchholz-1998' }]
		},
		{
			language: 'es',
			strategy: 'degree-standard',
			expression: 'tan alta como su madre',
			confidence: 'high',
			sources: [{ source: 'haspelmath-buchholz-1998' }]
		},
		{
			language: 'ru',
			strategy: 'degree-standard',
			expression: 'такая же высокая, как мать',
			transliteration: 'takaja že vysokaja, kak matʼ',
			confidence: 'high',
			note: 'такой “such” with the particle же, then как “how”',
			sources: [{ source: 'haspelmath-buchholz-1998' }]
		},
		{
			language: 'hu',
			strategy: 'degree-standard',
			expression: 'olyan magas, mint az anyja',
			confidence: 'medium',
			note: 'the demonstrative olyan “such” carries the degree',
			sources: [{ source: 'haspelmath-buchholz-1998' }]
		},
		{
			language: 'zh',
			strategy: 'degree-standard',
			expression: '跟她媽媽一樣高',
			transliteration: 'gēn tā māma yíyàng gāo',
			confidence: 'high',
			note: '跟 “with” marks the standard, 一樣 “same” the degree',
			sources: [{ source: 'li-thompson-1981', locator: '565' }]
		},
		{
			language: 'ja',
			strategy: 'degree-standard',
			expression: '母と同じくらい背が高い',
			transliteration: 'haha to onaji kurai se ga takai',
			confidence: 'high',
			note: 'と marks the standard, 同じくらい “the same extent” the degree; under negation ほど takes over: 母ほど高くない',
			sources: [{ source: 'makino-tsutsui-1986' }]
		},
		{
			language: 'hil',
			strategy: 'degree-standard',
			expression: 'si Pedro kasing-gwapo ni Juan',
			confidence: 'medium',
			note: 'the prefix kasing- on the adjective carries the equative degree',
			sources: [
				{ source: 'haspelmath-equative-2017', locator: 'ex. 13, after Wolfenden 1971: 103' }
			]
		},
		{
			language: 'sw',
			strategy: 'degree-standard',
			expression: 'hodari sawa na Juma',
			confidence: 'medium',
			note: 'sawa “equal” with na “with”',
			sources: [{ source: 'henkelmann-2006', locator: '386' }]
		},

		{
			language: 'bav',
			strategy: 'standard-only',
			expression: "we' yaa Làmbi",
			confidence: 'medium',
			note: '“strong like Lambi” — the ordinary similative yaa doing equative work',
			sources: [{ source: 'haspelmath-equative-2017', locator: 'ex. 9, after Schaub 1985: 116' }]
		},

		{
			language: 'en',
			strategy: 'unified',
			expression: 'the twins are equally tall',
			confidence: 'high',
			note: 'the one shape where a degree word needs no standard marker'
		},
		{
			language: 'ram',
			strategy: 'unified',
			expression: 'capi me kryt cati pipẽn',
			confidence: 'medium',
			note: '“Capi and Kryt big equal” — the two compared stand as one subject',
			sources: [
				{ source: 'haspelmath-equative-2017', locator: 'ex. 18, after Popjes & Popjes 1986: 144' }
			]
		},
		{
			language: 'ru',
			strategy: 'unified',
			expression: 'они одинаково высокие',
			transliteration: 'oni odinakovo vysokie',
			confidence: 'medium',
			note: 'одинаково “identically” over a plural subject',
			citationNeeded: true
		},

		{
			language: 'deg',
			strategy: 'reach',
			expression: 'túl mé=ēn',
			confidence: 'medium',
			note: '“this child is tall, reaches me” — the reach verb follows an ordinary adjective',
			sources: [{ source: 'haspelmath-equative-2017', locator: 'ex. 24, after Kari 2004: 156' }]
		},
		{
			language: 'zh',
			strategy: 'reach',
			expression: '有她媽媽那麼高',
			transliteration: 'yǒu tā māma nàme gāo',
			confidence: 'medium',
			note: '有 “have”, in its extent reading, takes the standard as its object; most at home in questions and negatives',
			citationNeeded: true
		}
	],
	examples: [
		{
			language: 'en',
			original: 'She is as tall as her mother.',
			gloss: '3SG.F is EQ tall STD her mother',
			literal: 'She is as tall as her mother.',
			natural: 'She is as tall as her mother.',
			set: 'same-height',
			sources: [{ source: 'haspelmath-buchholz-1998' }]
		},
		{
			language: 'fr',
			original: 'Elle est aussi grande que sa mère.',
			gloss: '3SG.F is EQ tall STD her mother',
			literal: 'She is also-so tall than her mother.',
			natural: 'She is as tall as her mother.',
			set: 'same-height',
			sources: [{ source: 'haspelmath-buchholz-1998' }]
		},
		{
			language: 'de',
			original: 'Sie ist so groß wie ihre Mutter.',
			gloss: '3SG.F is so tall how her mother',
			literal: 'She is so tall how her mother.',
			natural: 'She is as tall as her mother.',
			set: 'same-height',
			sources: [{ source: 'haspelmath-buchholz-1998' }]
		},
		{
			language: 'zh',
			original: '她跟她媽媽一樣高。',
			transliteration: 'tā gēn tā māma yíyàng gāo.',
			gloss: '3SG with 3SG mother same tall',
			literal: 'She with her mother same tall.',
			natural: 'She is as tall as her mother.',
			set: 'same-height',
			sources: [{ source: 'li-thompson-1981', locator: '565' }]
		},
		{
			language: 'ja',
			original: '母と同じくらい背が高い。',
			transliteration: 'haha to onaji kurai se ga takai.',
			gloss: 'mother with same extent stature NOM tall',
			literal: 'Tall to the same extent as mother.',
			natural: 'As tall as her mother.',
			set: 'same-height',
			sources: [{ source: 'makino-tsutsui-1986' }]
		},
		{
			language: 'tr',
			original: 'Annesi kadar uzun.',
			gloss: 'mother.POSS.3SG extent tall',
			literal: 'Tall to her mother’s extent.',
			natural: 'As tall as her mother.',
			set: 'same-height',
			sources: [{ source: 'goksel-kerslake-2005' }]
		},
		{
			language: 'ko',
			original: '엄마만큼 키가 크다.',
			transliteration: 'eomma-mankeum ki-ga keuda.',
			gloss: 'mother-extent height-NOM big',
			literal: 'Big in height to mother’s extent.',
			natural: 'As tall as her mother.',
			set: 'same-height',
			citationNeeded: true
		},

		{
			language: 'en',
			original: 'She is not as tall as her mother.',
			gloss: '3SG.F is not EQ tall STD her mother',
			literal: 'She is not as tall as her mother.',
			natural: 'She is not as tall as her mother.',
			set: 'negated'
		},
		{
			language: 'ja',
			original: '母ほど背が高くない。',
			transliteration: 'haha hodo se ga takakunai.',
			gloss: 'mother extent stature NOM tall.NEG',
			literal: 'Not tall to mother’s extent.',
			natural: 'Not as tall as her mother.',
			set: 'negated',
			sources: [{ source: 'makino-tsutsui-1986' }]
		},
		{
			language: 'ja',
			original: '母には及ばない。',
			transliteration: 'haha ni wa oyobanai.',
			gloss: 'mother DAT TOP reach.NEG',
			literal: 'Does not reach her mother.',
			natural: 'She falls short of her mother.',
			set: 'negated',
			citationNeeded: true
		},
		{
			language: 'tr',
			original: 'Annesi kadar uzun değil.',
			gloss: 'mother.POSS.3SG extent tall not',
			literal: 'Not tall to her mother’s extent.',
			natural: 'Not as tall as her mother.',
			set: 'negated',
			sources: [{ source: 'goksel-kerslake-2005' }]
		}
	],
	exampleSets: [
		{
			id: 'same-height',
			label: 'as tall as her mother',
			title: 'One sentence, language by language',
			description:
				'The same comparison across the first two strategies: paired markers in English, French and German, a with-word and a same-word in Mandarin, an extent word in Japanese, Turkish and Korean.'
		},
		{
			id: 'negated',
			label: 'falling short',
			title: 'Not quite as tall',
			description:
				'Negation reshuffles the field. English simply negates the equative, Turkish adds değil, and Japanese switches particles — 同じくらい in the affirmative, ほど under negation — or reaches for the verb 及ぶ, which only compares downward.'
		}
	],
	related: [{ kind: 'pattern', slug: 'adposition-order', label: 'Adposition order' }],
	sources: [
		{ source: 'haspelmath-equative-2017' },
		{ source: 'haspelmath-buchholz-1998' },
		{ source: 'henkelmann-2006' },
		{ source: 'treis-vanhove-2017' },
		{
			source: 'stassen-wals-121',
			note: 'the comparative counterpart the equative types are measured against'
		},
		{ source: 'li-thompson-1981' },
		{ source: 'makino-tsutsui-1986' },
		{ source: 'goksel-kerslake-2005' }
	]
};
