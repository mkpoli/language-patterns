import type { Pathway } from '$lib/types';

export const negativeExistentialCycle: Pathway = {
	slug: 'negative-existential-cycle',
	title: 'The Negative Existential Cycle',
	shortTitle: '“There is no” becomes “not”',
	question: 'How does a word for “there is no” turn into plain “not”?',
	kind: 'cycle',
	summary:
		'A dedicated negative existential (“there is no X”) arises beside the ordinary negator, then spreads from existential sentences into verbal negation until it becomes the standard negator itself. Croft distinguishes six synchronic types — A, A~B, B, B~C, C, C~A — and the languages below sit at different points along the drift.',
	tags: ['negation', 'existence', 'suppletion', 'renewal-cycle', 'reanalysis', 'grammaticalization'],
	evidenceNote:
		'Stage assignments and dates are editorial summaries of the cited literature; band edges are approximate, and transitional stages overlap by design. The schematics show function, not word order or morphological attachment, which vary by language.',
	stages: [
		{
			id: 'stage-a',
			number: 1,
			label: 'A — ordinary negation of the existential',
			schematic: '[NEG] + [EXIST]',
			description:
				'Existence is denied with the standard negator plus the existential predicate, e.g. English “there is not”.',
			sources: [{ source: 'croft-1991' }]
		},
		{
			id: 'stage-ab',
			number: 2,
			label: 'A~B — special form in part of the paradigm',
			schematic: '[NEG.EXIST] ~ [NEG] + [EXIST]',
			description:
				'A special negative existential exists but is restricted — Russian net only in the present tense, while past and future keep ordinary negation (ne bylo, ne budet).',
			sources: [{ source: 'croft-1991' }]
		},
		{
			id: 'stage-b',
			number: 3,
			label: 'B — special negative existential',
			schematic: '[NEG.EXIST]',
			description:
				'A dedicated form expresses non-existence throughout, suppletive with the affirmative existential — Turkish yok beside var.',
			sources: [{ source: 'croft-1991' }]
		},
		{
			id: 'stage-bc',
			number: 4,
			label: 'B~C — spread into verbal negation',
			schematic: '[NEG.EXIST] + [V]',
			description:
				'The negative existential also negates ordinary verbs in part of the grammar — often particular aspects or nominalized clauses, as with Mandarin méi(you) in perfective contexts.',
			sources: [{ source: 'croft-1991' }, { source: 'veselinova-2014' }]
		},
		{
			id: 'stage-c',
			number: 5,
			label: 'C — one form for both',
			schematic: '[NEG(.EXIST)]',
			description:
				'The same form serves as the ordinary verbal negator and the negative existential, like Japanese -nai / nai.',
			sources: [{ source: 'croft-1991' }]
		},
		{
			id: 'stage-ca',
			number: 6,
			label: 'C~A — transparency restored',
			schematic: '[NEG] + [EXIST]',
			description:
				'The now-general negator combines with the affirmative existential again, recreating a transparent negated existential — which is stage A, and the cycle can restart.',
			sources: [{ source: 'croft-1991' }, { source: 'veselinova-2014' }]
		}
	],
	bands: [
		// Japanese — a completed B → C shift
		{
			language: 'ja',
			form: 'なし nasi',
			stageId: 'stage-b',
			start: 700,
			end: 1600,
			status: 'dominant',
			uncertaintyStart: 600,
			note: 'Old and Classical Japanese adjective nasi “not exist”, suppletive with ari “exist”.',
			sources: [{ source: 'frellesvig-2010' }]
		},
		{
			language: 'ja',
			form: '-ない -nai (verbal)',
			stageId: 'stage-bc',
			start: 1500,
			end: 1750,
			status: 'emerging',
			uncertaintyStart: 1400,
			note: 'Late Middle Japanese: Eastern varieties generalize adjectival -nai as the negator of verbs, competing with older -nu.',
			sources: [{ source: 'frellesvig-2010' }]
		},
		{
			language: 'ja',
			form: '-ない / ない',
			stageId: 'stage-c',
			start: 1750,
			end: 2000,
			status: 'dominant',
			note: 'Standard Japanese: -nai negates verbs and nai denies existence. The bound suffix and the free adjective stay syntactically distinct, animate existence uses iru → inai, and Western dialects keep -n / -nu.',
			sources: [{ source: 'frellesvig-2010' }, { source: 'veselinova-2014' }]
		},

		// Mandarin — méi(you) spreading from existential to perfective negation
		{
			language: 'zh',
			form: '無 wú',
			stageId: 'stage-b',
			start: 200,
			end: 1300,
			status: 'approximate',
			note: 'Negative existential from Old Chinese onward (with prohibitive and volitional uses besides), alongside general bù and transparent bù yǒu.',
			sources: [{ source: 'lam-2022' }]
		},
		{
			language: 'zh',
			form: '沒 méi',
			stageId: 'stage-bc',
			start: 1250,
			end: 2000,
			status: 'dominant',
			uncertaintyStart: 1200,
			note: 'Bare méi is documented as both negative existential and verbal negator from the 13th century. The character 沒 “sink” may be a phonetic loan; the semantic link is debated.',
			sources: [{ source: 'lam-2022' }]
		},
		{
			language: 'zh',
			form: '沒有 méiyǒu + V',
			stageId: 'stage-bc',
			start: 1750,
			end: 2000,
			status: 'dominant',
			uncertaintyStart: 1600,
			note: 'Full méiyǒu negating verbs appears centuries after bare méi (existential méiyǒu is Ming-period). The split with bù has since stayed stable — no drift toward a general stage C.',
			sources: [{ source: 'lam-2022' }]
		},

		// Turkish — essentially stage B across the attested record
		{
			language: 'tr',
			form: 'yok',
			stageId: 'stage-b',
			start: 700,
			end: 2000,
			status: 'dominant',
			note: 'Old Turkic yoq (beside bar, modern var) through modern yok, while verbs take -mE-. yok also negates nominalized clauses (gelen yok “nobody is coming”), a limited B~C-type extension.',
			sources: [{ source: 'croft-1991' }, { source: 'veselinova-2014' }]
		},

		// Russian — the textbook A~B split
		{
			language: 'ru',
			form: 'не + есть/было/будет',
			stageId: 'stage-a',
			start: 900,
			end: 2000,
			status: 'dominant',
			uncertaintyStart: 800,
			note: 'Ordinary negation with the existential verb — still the only option in the past and future: ne bylo, ne budet.',
			sources: [{ source: 'veselinova-2014' }]
		},
		{
			language: 'ru',
			form: 'нет',
			stageId: 'stage-ab',
			start: 1300,
			end: 2000,
			status: 'dominant',
			uncertaintyStart: 1200,
			note: 'Fused net (usually derived from ne + the existential verb, though the fusion’s details are debated) is the present-tense negative existential, taking the genitive of negation. Restricted to the present — the A~B split.',
			sources: [{ source: 'veselinova-2014' }]
		},

		// English — stays at stage A, shown for contrast
		{
			language: 'en',
			form: 'there is not',
			stageId: 'stage-a',
			start: 1200,
			end: 2000,
			status: 'dominant',
			uncertaintyStart: 1000,
			note: 'Existential there develops over Old and Middle English; standard English keeps ordinary negation and never recruits a special negative existential.',
			sources: [{ source: 'croft-1991' }]
		}
	],
	examples: [
		{
			language: 'tr',
			original: 'Param yok.',
			transliteration: 'para-m yok',
			gloss: 'money-POSS.1SG NEG.EXIST',
			literal: 'My money does not exist.',
			natural: 'I have no money.'
		},
		{
			language: 'ru',
			original: 'Денег нет.',
			transliteration: 'deneg net',
			gloss: 'money.GEN.PL NEG.EXIST',
			literal: 'Of money there is none.',
			natural: 'There is no money.'
		},
		{
			language: 'ja',
			original: '時間がない。',
			transliteration: 'jikan-ga nai',
			gloss: 'time-NOM NEG.EXIST',
			literal: 'Time does not exist.',
			natural: 'There is no time.'
		},
		{
			language: 'ja',
			original: '行かない。',
			transliteration: 'ik-a-nai',
			gloss: 'go-IRR-NEG',
			literal: 'Go-not.',
			natural: '(I) don’t go / am not going.'
		},
		{
			language: 'zh',
			original: '他没有来。',
			transliteration: 'tā méiyǒu lái',
			gloss: '3SG NEG.PFV come',
			literal: 'He not-have come.',
			natural: 'He didn’t come. / He hasn’t come.'
		}
	],
	related: [
		{ kind: 'pathway', slug: 'jespersens-cycle', label: "Jespersen's Cycle" },
		{ kind: 'pattern', slug: 'existence', label: 'Existence' },
		{ kind: 'pattern', slug: 'non-possession', label: 'Non-possession' }
	],
	sources: [
		{ source: 'croft-1991' },
		{ source: 'veselinova-2014' },
		{ source: 'veselinova-hamari-2022' },
		{ source: 'lam-2022' },
		{ source: 'frellesvig-2010' }
	]
};
