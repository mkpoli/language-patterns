import type { Pattern } from '$lib/types';

export const indefinites: Pattern = {
	slug: 'indefinites',
	title: 'Indefinites & Quantifiers',
	shortTitle: 'someone, anyone, no one, everyone',
	question: 'How do languages build the paradigm of someone, anyone, no one, and everyone?',
	summary:
		'Across languages, the words for *someone*, *anyone (under negation)*, *anyone (free choice)*, *no one*, and *everyone* are rarely five unrelated items. Far more often they are built from a small set of recurring ingredients: an interrogative base (*who?*) combined with a tiny suffix or particle — “also/even”, “every”, “some”, “any” — that flips it into one or another quantifier reading. Japanese 誰も, 誰でも, 誰か; Mandarin 誰也, 誰都; Korean 누구도, 누구나, 누군가; Russian кто-то, кто-нибудь, никто all show variants of this “interrogative + small particle” construction. English took a different road and lexicalised the series outright (some-/any-/no-/every-). The grid below is the heart of the pattern: read across a row to see one language’s paradigm, read down a column to see how the same function gets built in radically different ways.',
	category: ['Meaning & Expression', 'Negation & Polarity', 'Grammar & Morphosyntax'],
	strategies: [
		{
			id: 'interrogative-additive',
			label: 'Interrogative + additive (“also / even”)',
			schematic: '[wh-] + [also / even]',
			description:
				'Builds NPI / negative / universal readings. Japanese 誰も (dare-mo), Mandarin 誰也, Korean 누구도, Welsh neb (historical), Turkish kim + de.',
			color: 'sky'
		},
		{
			id: 'interrogative-universal',
			label: 'Interrogative + universal (“every / all”)',
			schematic: '[wh-] + [every / -ever]',
			description:
				'Builds free-choice readings. Japanese 誰でも (dare-demo), Mandarin 誰都, Korean 누구나 / 누구든지, English wh-ever forms.',
			color: 'amber'
		},
		{
			id: 'interrogative-indefinite',
			label: 'Interrogative + indefinite (“some / any”)',
			schematic: '[wh-] + [some]',
			description:
				'Builds existential indefinites. Japanese 誰か (dare-ka), Korean 누군가, Russian кто-то / кто-нибудь, Mandarin 誰 in question contexts.',
			color: 'emerald'
		},
		{
			id: 'series',
			label: 'Dedicated indefinite series',
			schematic: 'some- / any- / no- / every- + N',
			description:
				'A lexicalised paradigm of independent words built from determiner-like elements. English (someone/anyone/no one/everyone), German (jemand, niemand, jeder).',
			color: 'violet'
		},
		{
			id: 'one-based',
			label: '“One”-based indefinite',
			schematic: '[some / any / no] + [one / person]',
			description:
				'A numeral or noun meaning “one / person” is bound by a quantifier-like element. French quelqu’un (some-one), Italian qualcuno, Spanish alguien (< Latin aliquis-unus).',
			color: 'rose'
		},
		{
			id: 'n-word',
			label: 'N-word (negative concord)',
			schematic: 'NEG-word, co-occurs with sentential NEG',
			description:
				'A morphologically negative indefinite that requires (or strongly prefers) clausal negation. Russian никто, Spanish nadie, Italian nessuno, French personne.',
			color: 'slate'
		}
	],
	paradigm: {
		title: 'Paradigm grid: who → someone, anyone, no one, everyone',
		summary:
			'Across rows you see one language’s paradigm. Across columns you see how each function gets built. Where the same form covers more than one cell (a common pattern in Japanese, Korean, Mandarin) you can trace the syncretism by eye.',
		axes: [
			{ id: 'someone', label: 'someone', description: 'Existential indefinite, positive declarative.' },
			{ id: 'anyone-npi', label: 'anyone (NPI)', description: 'Used under negation, in questions, and other negative-polarity contexts.' },
			{ id: 'anyone-fci', label: 'anyone (free choice)', description: 'Used in generics, modals, conditionals; “anyone at all”.' },
			{ id: 'no-one', label: 'no one', description: 'Negative indefinite. May be a dedicated word or a NPI under sentential negation.' },
			{ id: 'everyone', label: 'everyone', description: 'Universal quantifier over people (全稱詞 in the East Asian linguistic tradition).' }
		],
		cells: [
			// English
			{ language: 'en', axis: 'someone', form: 'someone / somebody', strategy: 'series' },
			{ language: 'en', axis: 'anyone-npi', form: 'anyone / anybody', strategy: 'series' },
			{ language: 'en', axis: 'anyone-fci', form: 'anyone (at all)', strategy: 'series', note: 'same form as NPI; FCI reading needs the right context' },
			{ language: 'en', axis: 'no-one', form: 'no one / nobody', strategy: 'series' },
			{ language: 'en', axis: 'everyone', form: 'everyone / everybody', strategy: 'series' },

			// French
			{ language: 'fr', axis: 'someone', form: 'quelqu’un', strategy: 'one-based', note: 'lit. “some-one”' },
			{ language: 'fr', axis: 'anyone-npi', form: 'qui que ce soit / personne (+ ne)', strategy: 'n-word', note: 'personne is the n-word, requires ne' },
			{ language: 'fr', axis: 'anyone-fci', form: 'n’importe qui', strategy: 'interrogative-universal', note: 'lit. “it doesn’t matter who”' },
			{ language: 'fr', axis: 'no-one', form: 'personne (+ ne)', strategy: 'n-word' },
			{ language: 'fr', axis: 'everyone', form: 'tout le monde', strategy: 'series', note: 'lit. “all the world”' },

			// Spanish
			{ language: 'es', axis: 'someone', form: 'alguien', strategy: 'one-based', note: 'historically aliquis + unus' },
			{ language: 'es', axis: 'anyone-npi', form: 'nadie (+ no)', strategy: 'n-word', note: 'negative concord' },
			{ language: 'es', axis: 'anyone-fci', form: 'cualquiera', strategy: 'interrogative-universal' },
			{ language: 'es', axis: 'no-one', form: 'nadie', strategy: 'n-word' },
			{ language: 'es', axis: 'everyone', form: 'todos / todo el mundo', strategy: 'series' },

			// German
			{ language: 'de', axis: 'someone', form: 'jemand', strategy: 'series' },
			{ language: 'de', axis: 'anyone-npi', form: 'jemand / irgendwer', strategy: 'interrogative-indefinite', note: 'irgend- is the indefinite particle' },
			{ language: 'de', axis: 'anyone-fci', form: 'irgendwer / wer auch immer', strategy: 'interrogative-universal' },
			{ language: 'de', axis: 'no-one', form: 'niemand', strategy: 'series' },
			{ language: 'de', axis: 'everyone', form: 'jeder / alle / jedermann', strategy: 'series' },

			// Russian
			{ language: 'ru', axis: 'someone', form: 'кто-то kto-to', strategy: 'interrogative-indefinite', note: '-то is the specific indefinite particle' },
			{ language: 'ru', axis: 'anyone-npi', form: 'кто-нибудь kto-nibud’', strategy: 'interrogative-indefinite', note: '-нибудь for non-specific / questions' },
			{ language: 'ru', axis: 'anyone-fci', form: 'кто угодно / кто бы то ни был', strategy: 'interrogative-universal' },
			{ language: 'ru', axis: 'no-one', form: 'никто (+ не)', strategy: 'n-word', sources: [{ source: 'haspelmath-1997' }] },
			{ language: 'ru', axis: 'everyone', form: 'все / каждый', strategy: 'series' },

			// Japanese — the textbook 何も / 誰も case
			{ language: 'ja', axis: 'someone', form: '誰か dare-ka', strategy: 'interrogative-indefinite', note: 'か = indefinite particle', sources: [{ source: 'kratzer-shimoyama-2002' }] },
			{ language: 'ja', axis: 'anyone-npi', form: '誰か (in questions) / 誰も (in negation)', strategy: 'interrogative-additive', note: '誰も requires sentential negation; with negation it yields “no one”', sources: [{ source: 'kratzer-shimoyama-2002' }, { source: 'haspelmath-1997' }] },
			{ language: 'ja', axis: 'anyone-fci', form: '誰でも dare-demo', strategy: 'interrogative-universal', note: 'でも = even-if particle; 何でも parallels for things' },
			{ language: 'ja', axis: 'no-one', form: '誰も + neg', strategy: 'interrogative-additive', note: 'same form as the NPI; the negative reading comes from the clausal negation' },
			{ language: 'ja', axis: 'everyone', form: '誰もが / 皆 / 全員', strategy: 'interrogative-additive', note: '誰もが (with NOM が) is the affirmative universal; 皆 / 全員 are lexical universals' },

			// Korean
			{ language: 'ko', axis: 'someone', form: '누군가 nuguinga', strategy: 'interrogative-indefinite' },
			{ language: 'ko', axis: 'anyone-npi', form: '누구도 nugudo / 아무도 amudo', strategy: 'interrogative-additive', note: '아무 is a dedicated NPI / FCI root' },
			{ language: 'ko', axis: 'anyone-fci', form: '누구나 nuguna / 누구든지', strategy: 'interrogative-universal' },
			{ language: 'ko', axis: 'no-one', form: '아무도 + neg', strategy: 'interrogative-additive' },
			{ language: 'ko', axis: 'everyone', form: '모두 modu / 모든 사람', strategy: 'series' },

			// Mandarin Chinese
			{ language: 'zh', axis: 'someone', form: '有人 yǒu rén / 某人 mǒu rén', strategy: 'series', note: 'lit. “there-is person / a-certain person”' },
			{ language: 'zh', axis: 'anyone-npi', form: '誰 shéi (in questions) / 任何人', strategy: 'interrogative-indefinite' },
			{ language: 'zh', axis: 'anyone-fci', form: '誰都 / 任何人', strategy: 'interrogative-universal', note: '都 = universal selector' },
			{ language: 'zh', axis: 'no-one', form: '沒人 méi rén / 誰也不 / 誰都不', strategy: 'interrogative-additive', note: '誰也不 is the wh-additive NPI under negation' },
			{ language: 'zh', axis: 'everyone', form: '大家 / 每個人 / 人人', strategy: 'series', note: '大家 lit. “big-family”; 全稱 (universal-term) tradition' },

			// Turkish
			{ language: 'tr', axis: 'someone', form: 'biri / birisi', strategy: 'one-based', note: 'bir = “one”' },
			{ language: 'tr', axis: 'anyone-npi', form: 'kimse / hiç kimse', strategy: 'n-word' },
			{ language: 'tr', axis: 'anyone-fci', form: 'herhangi biri', strategy: 'series' },
			{ language: 'tr', axis: 'no-one', form: 'hiç kimse (+ neg verb)', strategy: 'n-word', note: 'requires negation; effectively negative concord' },
			{ language: 'tr', axis: 'everyone', form: 'herkes', strategy: 'series' },

			// Hindi
			{ language: 'hi', axis: 'someone', form: 'कोई koī', strategy: 'series' },
			{ language: 'hi', axis: 'anyone-npi', form: 'कोई भी koī bhī', strategy: 'interrogative-additive', note: 'भी = also/even' },
			{ language: 'hi', axis: 'anyone-fci', form: 'कोई भी', strategy: 'interrogative-additive' },
			{ language: 'hi', axis: 'no-one', form: 'कोई नहीं / कोई भी नहीं', strategy: 'series' },
			{ language: 'hi', axis: 'everyone', form: 'सब / सब लोग / हर कोई', strategy: 'series' },

			// Hebrew
			{ language: 'he', axis: 'someone', form: 'מישהו mishehu', strategy: 'series' },
			{ language: 'he', axis: 'anyone-npi', form: 'אף אחד af exad / מישהו (in questions)', strategy: 'n-word', note: 'af exad lit. “even one”' },
			{ language: 'he', axis: 'anyone-fci', form: 'כל אחד kol exad', strategy: 'series' },
			{ language: 'he', axis: 'no-one', form: 'אף אחד (+ neg)', strategy: 'n-word' },
			{ language: 'he', axis: 'everyone', form: 'כולם kulam / כל אחד', strategy: 'series' },

			// Welsh
			{ language: 'cy', axis: 'someone', form: 'rhywun', strategy: 'one-based', note: 'rhyw “some” + un “one”' },
			{ language: 'cy', axis: 'anyone-npi', form: 'neb', strategy: 'n-word', note: 'neb is the NPI / negative indefinite' },
			{ language: 'cy', axis: 'anyone-fci', form: 'unrhyw un', strategy: 'series' },
			{ language: 'cy', axis: 'no-one', form: 'neb (+ neg)', strategy: 'n-word' },
			{ language: 'cy', axis: 'everyone', form: 'pawb', strategy: 'series' }
		],
		sources: [
			{ source: 'haspelmath-1997' },
			{ source: 'kratzer-shimoyama-2002' },
			{ source: 'giannakidou-2011' }
		]
	},
	examples: [
		// Highlighted Japanese paradigm in action
		{
			language: 'ja',
			original: '誰かが来た。',
			transliteration: 'dare-ka ga kita.',
			gloss: 'who-INDEF NOM came',
			literal: 'Some-who came.',
			natural: 'Someone came.',
			set: 'someone',
			sources: [{ source: 'kratzer-shimoyama-2002' }]
		},
		{
			language: 'ja',
			original: '誰も来なかった。',
			transliteration: 'dare-mo konakatta.',
			gloss: 'who-also come.NEG.PST',
			literal: 'Who-also did-not-come.',
			natural: 'No one came.',
			set: 'no-one',
			sources: [{ source: 'kratzer-shimoyama-2002' }]
		},
		{
			language: 'ja',
			original: '誰でも来れる。',
			transliteration: 'dare-demo koreru.',
			gloss: 'who-even can.come',
			literal: 'Anyone-at-all can come.',
			natural: 'Anyone can come.',
			set: 'anyone-fci'
		},
		{
			language: 'zh',
			original: '誰也不知道。',
			transliteration: 'shéi yě bù zhīdào.',
			gloss: 'who also NEG know',
			literal: 'Who-also not knows.',
			natural: 'No one knows.',
			set: 'no-one'
		},
		{
			language: 'zh',
			original: '誰都可以來。',
			transliteration: 'shéi dōu kěyǐ lái.',
			gloss: 'who all can come',
			literal: 'Who-all can come.',
			natural: 'Anyone can come.',
			set: 'anyone-fci'
		},
		{
			language: 'ko',
			original: '아무도 안 왔다.',
			transliteration: 'amudo an watda.',
			gloss: 'anyone NEG came',
			literal: 'No-one NEG came.',
			natural: 'No one came.',
			set: 'no-one'
		},
		{
			language: 'ru',
			original: 'Никто не пришёл.',
			transliteration: 'Nikto ne prishyol.',
			gloss: 'no-one NEG came',
			literal: 'No-one not came.',
			natural: 'No one came.',
			set: 'no-one',
			sources: [{ source: 'haspelmath-1997' }]
		},
		{
			language: 'es',
			original: 'No vino nadie.',
			gloss: 'NEG came nobody',
			literal: 'Not came nobody.',
			natural: 'No one came.',
			set: 'no-one'
		}
	],
	exampleSets: [
		{ id: 'someone', label: 'someone', title: '“Someone came.”', description: 'Existential indefinite in positive declaratives.' },
		{ id: 'anyone-fci', label: 'anyone (FCI)', title: '“Anyone can come.”', description: 'Free-choice reading — generic / modal contexts.' },
		{ id: 'no-one', label: 'no one', title: '“No one came.”', description: 'Negative indefinite — often built from the NPI form plus sentential negation.' }
	],
	related: [
		{ kind: 'pattern', slug: 'existence', label: 'Existence' },
		{ kind: 'pattern', slug: 'non-possession', label: 'Non-possession' },
		{ kind: 'pathway', slug: 'jespersens-cycle', label: "Jespersen's Cycle" }
	],
	sources: [
		{ source: 'haspelmath-1997' },
		{ source: 'kratzer-shimoyama-2002' },
		{ source: 'giannakidou-2011' }
	]
};
