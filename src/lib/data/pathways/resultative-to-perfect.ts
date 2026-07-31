import type { Pathway } from '$lib/types';

export const resultativeToPerfect: Pathway = {
	slug: 'resultative-to-perfect',
	title: 'From a Result to a Past Tense',
	shortTitle: 'I have the letter written → I wrote it',
	question: 'How does “I have it written” turn into an ordinary past tense?',
	kind: 'pathway',
	summary:
		'Latin habeō litterās scrīptās means “I have the letter in a written state” — a description of how the letter is now. That sentence became French j’ai écrit la lettre, which reports the writing rather than the letter, and in speech it is now the plain past: the old simple past has gone out of use. The same road runs from Old Japanese -tari to modern -ta. English started down it and stopped: have written is still a perfect, and cannot be used with yesterday.',
	tags: ['tense-aspect', 'auxiliary-verb', 'grammaticalization', 'reanalysis', 'semantic-bleaching'],
	evidenceNote:
		'Stages 1 to 3 are the chain set out by Bybee, Perkins and Pagliuca; stage 4 is a separate development that only some varieties show, listed here because it fills the gap stage 3 opens. Dates summarize the cited literature, band edges are approximate, and a language usually spends centuries with two readings available at once. Where a variety differs from the standard language, the note says so.',
	stages: [
		{
			id: 'resultative',
			number: 1,
			label: 'Resultative — a state something is in',
			schematic: '[HAVE/BE] + [OBJ] + [PTCP]',
			description:
				'The sentence describes how something stands now, and the participle agrees with it like an adjective. The earlier event is implied by the state, not asserted. Latin habeō litterās scrīptās, “I have the letter written”.',
			sources: [{ source: 'bybee-perkins-pagliuca-1994' }, { source: 'heine-kuteva-2002' }]
		},
		{
			id: 'perfect',
			number: 2,
			label: 'Perfect — a past event that still counts',
			schematic: '[AUX] + [PTCP]',
			description:
				'The auxiliary and participle are reanalysed as one verb form reporting the event itself, with the result that it bears on the present. English I have written the letter, Spanish he escrito. In English and its neighbours the form resists a plain past-time adverb: not *I have written it yesterday.',
			sources: [
				{ source: 'bybee-perkins-pagliuca-1994' },
				{ source: 'bybee-dahl-1989' },
				{ source: 'dahl-velupillai-wals-68' }
			]
		},
		{
			id: 'past',
			number: 3,
			label: 'Past — the present relevance drops away',
			schematic: '[AUX] + [PTCP] = simple past',
			description:
				'The requirement of current relevance erodes, the form takes past-time adverbs, and it starts to crowd out whatever simple past the language had. Spoken French and southern German have gone this far.',
			sources: [{ source: 'bybee-perkins-pagliuca-1994' }, { source: 'drinka-2017' }]
		},
		{
			id: 'renewal',
			number: 4,
			label: 'A second layer, in some varieties',
			schematic: '[AUX] + [AUX.PTCP] + [PTCP]',
			description:
				'Where the old perfect has become a past, some varieties stack the auxiliary a second time: French passé surcomposé j’ai eu écrit, German Doppelperfekt ich habe geschrieben gehabt. These are anterior forms, largely confined to subordinate temporal clauses and to regional speech, and they have not replaced the stage-3 form. They stand outside the three-stage chain, and are shown here because they arise where it ends.',
			sources: [{ source: 'drinka-2017' }]
		}
	],
	bands: [
		// Latin into French — the full run
		{
			language: 'la',
			form: 'habeō litterās scrīptās',
			stageId: 'resultative',
			start: -100,
			end: 400,
			status: 'emerging',
			uncertaintyEnd: 600,
			note: 'A restricted construction, possible only where the subject holds the resulting state of a transitive object. The dominant past throughout the period is the synthetic perfect scrīpsī; this is the minor pattern that later takes over.',
			sources: [{ source: 'drinka-2017' }, { source: 'harris-1982' }]
		},
		{
			language: 'fr',
			form: 'j’ai écrit',
			stageId: 'perfect',
			start: 1100,
			end: 1600,
			status: 'dominant',
			uncertaintyStart: 900,
			note: 'Old and Middle French: a perfect beside the passé simple, which still carried plain narrative past.',
			sources: [{ source: 'harris-1982' }, { source: 'drinka-2017' }]
		},
		{
			language: 'fr',
			form: 'j’ai écrit',
			stageId: 'past',
			start: 1600,
			end: 2000,
			status: 'dominant',
			uncertaintyStart: 1500,
			note: 'The passé composé takes over narrative past in speech; the passé simple survives in writing and formal registers only.',
			sources: [{ source: 'harris-1982' }, { source: 'drinka-2017' }]
		},
		{
			language: 'fr',
			form: 'j’ai eu écrit',
			stageId: 'renewal',
			start: 1600,
			end: 2000,
			status: 'approximate',
			note: 'The passé surcomposé, regional and colloquial rather than standard, marks anteriority the passé composé no longer can.',
			sources: [{ source: 'drinka-2017' }]
		},

		// English — stops at the perfect
		{
			language: 'ang',
			form: 'ic hæbbe þā bōc āwritene',
			stageId: 'resultative',
			start: 800,
			end: 1100,
			status: 'dominant',
			uncertaintyStart: 700,
			uncertaintyEnd: 950,
			note: 'Old English habban with an agreeing participle; beside it bēon with participles of intransitive verbs. Uninflected participles appear in late Old English, and the reanalysis is under way before Middle English proper.',
			sources: [{ source: 'carey-1994' }, { source: 'drinka-2017' }]
		},
		{
			language: 'en',
			form: 'I have written',
			stageId: 'perfect',
			start: 1100,
			end: 2000,
			status: 'dominant',
			uncertaintyStart: 1000,
			note: 'English settles here and stays: the perfect still refuses a plain past-time adverb, and no simple past has been displaced. American English goes the other way from stage 3 — the simple past has taken over ground the perfect holds in Britain, so “did you eat yet” answers what British English asks with “have you eaten yet”.',
			sources: [{ source: 'carey-1994' }, { source: 'dahl-velupillai-wals-68' }]
		},

		// German — the south goes further
		{
			language: 'de',
			form: 'ich habe geschrieben',
			stageId: 'perfect',
			start: 1200,
			end: 1700,
			status: 'dominant',
			uncertaintyStart: 1000,
			sources: [{ source: 'drinka-2017' }]
		},
		{
			language: 'de',
			form: 'ich habe geschrieben',
			stageId: 'past',
			start: 1600,
			end: 2000,
			status: 'dominant',
			uncertaintyStart: 1500,
			note: 'The Präteritum is lost from speech across the Upper German south, and the Perfekt carries plain past. Northern German and written German keep the two apart.',
			sources: [{ source: 'drinka-2017' }]
		},
		{
			language: 'de',
			form: 'ich habe geschrieben gehabt',
			stageId: 'renewal',
			start: 1700,
			end: 2000,
			status: 'approximate',
			note: 'The Doppelperfekt, in the same southern varieties that lost the Präteritum.',
			sources: [{ source: 'drinka-2017' }]
		},

		// Spanish — mostly still a perfect, with peninsular drift
		{
			language: 'es',
			form: 'he escrito',
			stageId: 'perfect',
			start: 1200,
			end: 2000,
			status: 'dominant',
			uncertaintyStart: 1100,
			note: 'Latin American Spanish keeps the perfect distinct and uses the preterite freely.',
			sources: [{ source: 'drinka-2017' }, { source: 'dahl-velupillai-wals-68' }]
		},
		{
			language: 'es',
			form: 'he escrito (peninsular)',
			stageId: 'past',
			start: 1600,
			end: 2000,
			status: 'emerging',
			uncertaintyStart: 1500,
			note: 'The spread to events earlier the same day — he comido hace una hora — is under way by Early Modern Spanish and widens through the eighteenth century. Covering today is the step toward a plain past.',
			sources: [{ source: 'drinka-2017' }]
		},

		// Japanese — the same road outside Europe
		{
			language: 'ja',
			form: '-tari',
			stageId: 'resultative',
			start: 800,
			end: 1200,
			status: 'emerging',
			uncertaintyStart: 700,
			note: 'From -te ari, “having done, there is”: a state left by an event. In Old Japanese it is the newcomer, beside the established -tsu, -nu, -ki and -keri, and it grows dominant over the following centuries as those fall away.',
			sources: [{ source: 'frellesvig-2010' }]
		},
		{
			language: 'ja',
			form: '-tari / -ta',
			stageId: 'perfect',
			start: 1200,
			end: 1600,
			status: 'dominant',
			note: 'Late Middle Japanese: -tari contracts to -ta and takes over the other past and perfective suffixes as they fall out of use.',
			sources: [{ source: 'frellesvig-2010' }]
		},
		{
			language: 'ja',
			form: '-ta',
			stageId: 'past',
			start: 1600,
			end: 2000,
			status: 'dominant',
			note: 'Modern -ta is the ordinary past and carries no requirement of present relevance. 〜ている has since grown into the language’s resultative, which is where -tari began.',
			sources: [{ source: 'frellesvig-2010' }, { source: 'shirai-1998' }]
		},

		// Swedish — a stable perfect, for contrast
		{
			language: 'sv',
			form: 'jag har skrivit',
			stageId: 'perfect',
			start: 1550,
			end: 2000,
			status: 'dominant',
			uncertaintyStart: 1450,
			note: 'The uninflected supine in -it separates from the agreeing past participle over the sixteenth century; before that, Old Swedish had hava with a participle that agreed, as Latin and Old English did. Like English, Swedish holds at the perfect and keeps a separate simple past.',
			sources: [{ source: 'dahl-2000' }, { source: 'dahl-1985' }]
		}
	],
	examples: [
		{
			language: 'la',
			original: 'Habeō litterās scrīptās.',
			gloss: 'have.1SG letter.ACC.PL write.PTCP.ACC.PL',
			literal: 'I have the letter written.',
			natural: 'I have the letter in a written state.',
			set: 'the-turn',
			sources: [{ source: 'drinka-2017' }]
		},
		{
			language: 'fr',
			original: 'J’ai écrit la lettre.',
			gloss: '1SG.have written the letter',
			literal: 'I have written the letter.',
			natural: 'I wrote the letter.',
			set: 'the-turn',
			sources: [{ source: 'harris-1982' }]
		},
		{
			language: 'fr',
			original: 'Hier, j’ai écrit la lettre.',
			gloss: 'yesterday 1SG.have written the letter',
			literal: 'Yesterday I have written the letter.',
			natural: 'I wrote the letter yesterday.',
			set: 'adverb-test',
			sources: [{ source: 'harris-1982' }]
		},
		{
			language: 'en',
			original: '*Yesterday I have written the letter.',
			gloss: 'yesterday 1SG have written the letter',
			literal: 'Yesterday I have written the letter.',
			natural: 'Not available in English — the perfect refuses a plain past-time adverb.',
			set: 'adverb-test',
			sources: [{ source: 'dahl-1985' }]
		},
		{
			language: 'de',
			original: 'Gestern habe ich den Brief geschrieben.',
			gloss: 'yesterday have 1SG the letter written',
			literal: 'Yesterday have I the letter written.',
			natural: 'I wrote the letter yesterday.',
			set: 'adverb-test',
			sources: [{ source: 'drinka-2017' }]
		},
		{
			language: 'ja',
			original: '手紙を書いた。',
			transliteration: 'tegami o kaita.',
			gloss: 'letter ACC write.PST',
			literal: 'Wrote the letter.',
			natural: 'I wrote the letter.',
			set: 'the-turn',
			sources: [{ source: 'frellesvig-2010' }]
		},
		{
			language: 'ja',
			original: '窓が開いている。',
			transliteration: 'mado ga aite iru.',
			gloss: 'window NOM open.GER be',
			literal: 'The window, having opened, is.',
			natural: 'The window is open.',
			set: 'renewal',
			sources: [{ source: 'shirai-1998' }]
		},
		{
			language: 'fr',
			original: 'Quand j’ai eu écrit la lettre, je suis sorti.',
			gloss: 'when 1SG.have had written the letter 1SG.am gone.out',
			literal: 'When I have had written the letter, I went out.',
			natural: 'Once I had written the letter, I went out.',
			set: 'renewal',
			sources: [{ source: 'drinka-2017' }]
		}
	],
	exampleSets: [
		{
			id: 'the-turn',
			label: 'the same sentence, three stages',
			title: 'A state, then an event, then a past',
			description:
				'The Latin sentence is about the letter and the condition it is in — litterae is plural in form but names a single letter, and the participle agrees with it. The French one is about the writing. Japanese arrived at the same place from 〜てあり, and modern -ta is simply the past.'
		},
		{
			id: 'adverb-test',
			label: 'the yesterday test',
			title: 'What “yesterday” tells you',
			description:
				'In English and its Germanic neighbours a perfect will not take a plain past-time adverb, while a past tense will: French and German take “yesterday” and English does not. The test is sharp in this corner of Europe and blunt elsewhere — several languages with perfects in good standing, Spanish among them, accept a past-time adverb without having moved to stage 3.'
		},
		{
			id: 'renewal',
			label: 'building a new one',
			title: 'Filling the gap again',
			description:
				'Two different ways of refilling the gap. Japanese built a fresh resultative out of 〜ている, which is where -tari itself started; French stacks the auxiliary a second time, mostly in subordinate clauses, to say what the passé composé alone no longer says.'
		}
	],
	related: [
		{ kind: 'pathway', slug: 'jespersens-cycle', label: "Jespersen's Cycle" },
		{ kind: 'pathway', slug: 'negative-existential-cycle', label: 'The Negative Existential Cycle' },
		{ kind: 'pattern', slug: 'possession', label: 'Possession' }
	],
	sources: [
		{ source: 'bybee-perkins-pagliuca-1994' },
		{ source: 'bybee-dahl-1989' },
		{ source: 'dahl-1985' },
		{ source: 'dahl-2000' },
		{ source: 'dahl-velupillai-wals-68' },
		{ source: 'drinka-2017' },
		{ source: 'harris-1982' },
		{ source: 'carey-1994' },
		{ source: 'frellesvig-2010' },
		{ source: 'shirai-1998' },
		{ source: 'heine-kuteva-2002' }
	]
};
