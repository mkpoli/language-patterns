import type { Pathway } from '$lib/types';

export const negativeExistentialCycle: Pathway = {
	slug: 'negative-existential-cycle',
	title: 'The Negative Existential Cycle',
	shortTitle: '“There is no” becomes “not”',
	question: 'How does a word for “there is no” turn into plain “not”?',
	kind: 'cycle',
	summary:
		'A dedicated negative existential (“there is no X”) arises beside the ordinary negator, then spreads from existential sentences into verbal negation until it becomes the standard negator itself. Croft’s stages A → B → C describe the drift; several East Asian languages sit at different points along it.',
	evidenceNote:
		'Stage assignments and dates are editorial summaries of the cited literature; band edges are approximate, and transitional stages overlap by design.',
	stages: [
		{
			id: 'stage-a',
			number: 1,
			label: 'A — ordinary negation of the existential',
			schematic: '[NEG] [EXIST]',
			description:
				'Existence is denied with the standard negator plus the existential predicate, e.g. English “there is not”.',
			sources: [{ source: 'croft-1991' }]
		},
		{
			id: 'stage-b',
			number: 2,
			label: 'B — special negative existential',
			schematic: '[NEG.EXIST]',
			description:
				'A dedicated form expresses non-existence, suppletive with the affirmative existential — Turkish yok beside var, Russian net beside est’.',
			sources: [{ source: 'croft-1991' }]
		},
		{
			id: 'stage-bc',
			number: 3,
			label: 'B~C — spread into verbal negation',
			schematic: '[NEG.EXIST] [V]',
			description:
				'The negative existential starts negating ordinary verbs, first in restricted contexts such as perfective or nominalized clauses.',
			sources: [{ source: 'croft-1991' }, { source: 'veselinova-2014' }]
		},
		{
			id: 'stage-c',
			number: 4,
			label: 'C — new standard negator',
			schematic: '[V]-[NEG.new]',
			description:
				'The former negative existential is the ordinary negator. It may then acquire a new existential use, restarting the cycle.',
			sources: [{ source: 'croft-1991' }]
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
			start: 1400,
			end: 1750,
			status: 'emerging',
			uncertaintyStart: 1300,
			note: 'Eastern Japanese generalizes adjectival -nai as the negator of verbs, competing with older -nu.',
			sources: [{ source: 'frellesvig-2010' }]
		},
		{
			language: 'ja',
			form: '-ない / ない',
			stageId: 'stage-c',
			start: 1750,
			end: 2000,
			status: 'dominant',
			note: 'Modern standard: -nai negates verbs while nai remains the negative existential — one form covers both.',
			sources: [{ source: 'frellesvig-2010' }, { source: 'veselinova-2014' }]
		},

		// Mandarin — méi(you) spreading from existential to perfective negation
		{
			language: 'zh',
			form: '無 wú',
			stageId: 'stage-b',
			start: 500,
			end: 1300,
			status: 'dominant',
			uncertaintyStart: 500,
			note: 'Classical Chinese negative existential wú “there is no / have not”, beside general negator bù.',
			sources: [{ source: 'veselinova-hamari-2022' }]
		},
		{
			language: 'zh',
			form: '沒 méi',
			stageId: 'stage-b',
			start: 1200,
			end: 2000,
			status: 'dominant',
			uncertaintyStart: 1000,
			note: 'méi “sink, disappear” becomes the negative existential and negator of yǒu “have”.',
			sources: [{ source: 'veselinova-hamari-2022' }]
		},
		{
			language: 'zh',
			form: '沒(有) + V',
			stageId: 'stage-bc',
			start: 1400,
			end: 2000,
			status: 'dominant',
			uncertaintyStart: 1300,
			note: 'méi(you) negates perfective verbal predicates (“did not V”), splitting the negation system with bù.',
			sources: [{ source: 'croft-1991' }, { source: 'veselinova-hamari-2022' }]
		},

		// Turkish — stable stage B across the attested record
		{
			language: 'tr',
			form: 'yok',
			stageId: 'stage-b',
			start: 700,
			end: 2000,
			status: 'dominant',
			note: 'Old Turkic yoq through modern yok: suppletive negative existential beside var, while verbs take -mA-. Stable stage B.',
			sources: [{ source: 'croft-1991' }, { source: 'veselinova-2014' }]
		},

		// Russian — net as a fused negative existential
		{
			language: 'ru',
			form: 'не (есть)',
			stageId: 'stage-a',
			start: 900,
			end: 1400,
			status: 'declining',
			uncertaintyStart: 800,
			note: 'Ordinary negator ne with the existential copula.',
			sources: [{ source: 'veselinova-2014' }]
		},
		{
			language: 'ru',
			form: 'нет / нету',
			stageId: 'stage-b',
			start: 1300,
			end: 2000,
			status: 'dominant',
			uncertaintyStart: 1200,
			note: 'Fused net (from ne + (j)estĭ tu) takes over present-tense negated existence, with a genitive subject.',
			sources: [{ source: 'veselinova-2014' }]
		},

		// English — stays at stage A, shown for contrast
		{
			language: 'en',
			form: 'there is not',
			stageId: 'stage-a',
			start: 900,
			end: 2000,
			status: 'dominant',
			note: 'English never develops a dedicated negative existential; the standard negator does the work throughout.',
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
			transliteration: 'zikan-ga na-i',
			gloss: 'time-NOM NEG.EXIST-NPST',
			literal: 'Time does not exist.',
			natural: 'There is no time.'
		},
		{
			language: 'ja',
			original: '行かない。',
			transliteration: 'ik-ana-i',
			gloss: 'go-NEG-NPST',
			literal: 'Go-not.',
			natural: '(I) am not going.'
		},
		{
			language: 'zh',
			original: '他没有来。',
			transliteration: 'tā méiyǒu lái',
			gloss: '3SG NEG.EXIST come',
			literal: 'He not-exist come.',
			natural: 'He did not come.'
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
		{ source: 'frellesvig-2010' }
	]
};
