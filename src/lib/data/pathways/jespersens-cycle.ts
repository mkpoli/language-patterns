import type { Pathway } from '$lib/types';

export const jespersensCycle: Pathway = {
	slug: 'jespersens-cycle',
	title: "Jespersen's Cycle",
	shortTitle: 'Negation rebuilds itself',
	question: 'How does negation rebuild itself over time?',
	kind: 'cycle',
	summary:
		'A recurrent diachronic pattern: a simple preverbal negator weakens, gets reinforced by an extra element (often a minimizer like “step” or “thing”), the reinforcement is reanalysed as the real negator, the old marker fades, and the new negator may itself start weakening — restarting the cycle.',
	stages: [
		{
			id: 'stage-1',
			number: 1,
			label: 'Simple preverbal negator',
			schematic: '[NEG] [V]',
			description: 'A single, often phonologically light particle precedes the verb.'
		},
		{
			id: 'stage-2',
			number: 2,
			label: 'Reinforced negation',
			schematic: '[NEG] [V] [reinforcer]',
			description: 'The old negator co-occurs with a postverbal reinforcer — typically a minimizer or generic noun.'
		},
		{
			id: 'stage-3',
			number: 3,
			label: 'New negator dominant, old optional',
			schematic: '([NEG]) [V] [NEG.new]',
			description: 'The reinforcer is reanalysed as the principal negator; the original element becomes optional, formal, or register-restricted.'
		},
		{
			id: 'stage-4',
			number: 4,
			label: 'New negator only',
			schematic: '[V] [NEG.new]',
			description: 'The old marker is lost. The new negator now stands alone — and may itself begin to weaken, restarting the cycle.'
		}
	],
	bands: [
		// French — the textbook case
		{
			language: 'fr',
			form: 'ne',
			stageId: 'stage-1',
			start: 1000,
			end: 1200,
			status: 'dominant',
			uncertaintyStart: 900,
			note: 'Old French preverbal ne, inherited from Latin non.',
			sources: [{ source: 'mosegaard-hansen-2013' }]
		},
		{
			language: 'fr',
			form: 'ne … pas',
			stageId: 'stage-2',
			start: 1200,
			end: 1700,
			status: 'dominant',
			uncertaintyStart: 1150,
			note: '“pas” (a step) generalises from one of several minimizers (mie, point, goutte) into the bipartite negator.',
			sources: [{ source: 'mosegaard-hansen-2013' }, { source: 'jespersen-1917' }]
		},
		{
			language: 'fr',
			form: 'ne … pas (literary)',
			stageId: 'stage-3',
			start: 1700,
			end: 2000,
			status: 'declining',
			note: 'Survives in formal writing and careful speech; ne is variably dropped.',
			sources: [{ source: 'mosegaard-hansen-2013' }]
		},
		{
			language: 'fr',
			form: 'pas',
			stageId: 'stage-4',
			start: 1800,
			end: 2000,
			status: 'dominant',
			uncertaintyStart: 1700,
			note: 'Colloquial French: ne is omitted in the vast majority of spoken tokens.',
			sources: [{ source: 'mosegaard-hansen-2013' }]
		},

		// English — completed cycle
		{
			language: 'en',
			form: 'ne',
			stageId: 'stage-1',
			start: 1000,
			end: 1300,
			status: 'dominant',
			uncertaintyStart: 800,
			note: 'Old English preverbal ne.',
			sources: [{ source: 'wallage-2017' }]
		},
		{
			language: 'en',
			form: 'ne … not',
			stageId: 'stage-2',
			start: 1150,
			end: 1450,
			status: 'dominant',
			note: '“not” < OE nawiht / naht “no thing” reinforces ne.',
			sources: [{ source: 'wallage-2017' }, { source: 'jespersen-1917' }]
		},
		{
			language: 'en',
			form: 'not',
			stageId: 'stage-3',
			start: 1400,
			end: 1700,
			status: 'dominant',
			note: 'ne is lost; not is the principal sentential negator.',
			sources: [{ source: 'wallage-2017' }]
		},
		{
			language: 'en',
			form: "do not / don't",
			stageId: 'stage-4',
			start: 1600,
			end: 2000,
			status: 'dominant',
			uncertaintyStart: 1550,
			note: 'Do-support emerges; the auxiliary host becomes obligatory for sentential negation.',
			sources: [{ source: 'wallage-2017' }]
		},

		// Welsh — parallel cycle with ddim
		{
			language: 'cy',
			form: 'ni / nid',
			stageId: 'stage-1',
			start: 1000,
			end: 1500,
			status: 'dominant',
			uncertaintyStart: 800,
			note: 'Old / Middle Welsh preverbal particle.',
			sources: [{ source: 'willis-lucas-breitbarth-2013' }]
		},
		{
			language: 'cy',
			form: 'ni(d) … ddim',
			stageId: 'stage-2',
			start: 1400,
			end: 1900,
			status: 'dominant',
			note: '“ddim” (a thing / a bit) reinforces the preverbal negator.',
			sources: [{ source: 'willis-lucas-breitbarth-2013' }]
		},
		{
			language: 'cy',
			form: 'ddim',
			stageId: 'stage-4',
			start: 1800,
			end: 2000,
			status: 'dominant',
			uncertaintyStart: 1700,
			note: 'Colloquial Modern Welsh drops the preverbal particle entirely.',
			sources: [{ source: 'willis-lucas-breitbarth-2013' }]
		},

		// Japanese — does NOT cycle: stable suffixal negation, shown for contrast
		{
			language: 'ja',
			form: '-zu / -nu',
			stageId: 'stage-1',
			start: 1000,
			end: 1600,
			status: 'declining',
			uncertaintyStart: 700,
			note: 'Classical Japanese suffixal negators, productive in writing but receding in speech.'
		},
		{
			language: 'ja',
			form: '-nai',
			stageId: 'stage-1',
			start: 1500,
			end: 2000,
			status: 'dominant',
			uncertaintyEnd: 2000,
			note: 'Modern suffixal -nai; no Jespersen-style reinforcement has taken hold.'
		},

		// Turkish — also stable, shown for contrast
		{
			language: 'tr',
			form: '-mE- / değil',
			stageId: 'stage-1',
			start: 1000,
			end: 2000,
			status: 'dominant',
			uncertaintyStart: 700,
			note: 'Verbal negation by infix -mE-; copular değil. Stable across the attested history.'
		}
	],
	related: [
		{ kind: 'pattern', slug: 'non-possession', label: 'Non-possession' },
		{ kind: 'pattern', slug: 'existence', label: 'Existence' }
	],
	sources: [
		{ source: 'jespersen-1917' },
		{ source: 'dahl-1979' },
		{ source: 'vanderauwera-2009' },
		{ source: 'mosegaard-hansen-2013' },
		{ source: 'wallage-2017' },
		{ source: 'willis-lucas-breitbarth-2013' },
		{ source: 'hopper-traugott-2003' }
	]
};
