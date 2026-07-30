import type { Pathway } from '$lib/types';

export const seeToTry: Pathway = {
	slug: 'see-to-try',
	title: 'From seeing to trying',
	shortTitle: 'SEE → TRY',
	question: 'How does “see” come to mean “try”?',
	kind: 'shift',
	summary:
		'Verbs of seeing repeatedly become markers of attempting. Japanese 食べてみる “eat and see”, Korean 먹어 보다, Mandarin 試試看, and the Turkic converb + kör- constructions all say “do it and see” for “try doing it”; Voinov (2013) traces the co-lexification across Eurasia, New Guinea, India, and West Africa.',
	tags: ['perception', 'modality', 'colexification', 'multiverb-construction', 'auxiliary-verb', 'metaphor', 'metonymy', 'semantic-bleaching', 'grammaticalization'],
	evidenceNote:
		'The shift is documented almost exclusively inside multiverb constructions — a converb, infinitive, or serial verb followed by SEE — where the perception verb first means “observe the outcome” and then bleaches into an attemptive auxiliary. In several languages the auxiliary further softens commands into polite requests. The Database of Semantic Shifts catalogues it as shift 36 (see → try), with realizations from Adyghe, Chamalal, Croatian, Japanese, Karaim, Meadow Mari, Mongolian, Serbian, and Tuvan — all Eurasian, against 243 worldwide realizations for its sibling hear → obey (shift 34).',
	stages: [
		{
			id: 'visual-perception',
			number: 1,
			label: 'Visual perception',
			schematic: 'SEE + OBJECT',
			description: 'The verb describes perceiving a physical object with the eyes.',
			sources: [{ source: 'voinov-2013', locator: 'pp. 74–75' }]
		},
		{
			id: 'do-and-see',
			number: 2,
			label: 'Do and observe',
			schematic: 'DO V + SEE (the outcome)',
			description:
				'In a converb or serial-verb chain, SEE takes the preceding action as its scope: perform the action and observe what results.',
			sources: [{ source: 'voinov-2013', locator: 'pp. 76–78' }]
		},
		{
			id: 'attemptive-auxiliary',
			number: 3,
			label: 'Attemptive auxiliary',
			schematic: 'V-CVB + SEE → TRY V',
			description:
				'The component of physical sight is lost. The construction states that the subject undertakes the action experimentally, without asserting that its goal is achieved — attemptive modality.',
			sources: [{ source: 'voinov-2013', locator: 'pp. 62–63' }]
		},
		{
			id: 'politeness-hedge',
			number: 4,
			label: 'Politeness hedge',
			schematic: 'TRY V! → PLEASE V',
			description:
				'In directives, the attemptive marker hedges the assumption that the hearer can comply, and the utterance is read as a softened, polite request.',
			sources: [{ source: 'voinov-2013', locator: 'pp. 64–65' }]
		}
	],
	bands: [
		{
			language: 'ja',
			form: '〜てみる',
			stageId: 'attemptive-auxiliary',
			start: 900,
			end: 2000,
			status: 'dominant',
			uncertaintyStart: 800,
			note: 'Auxiliary 見る after the -te form, “do and see → try doing”; classical dictionaries cite the use from Heian texts such as Taketori Monogatari. The action is presupposed to be carried out — 食べてみた entails eating happened — where English “tried to eat” does not. Henderson notes a softening effect in polite imperatives.',
			sources: [
				{ source: 'weblio-kobun-miru' },
				{ source: 'wiktionary-miru' },
				{ source: 'henderson-2011', locator: 'p. 286' },
				{ source: 'voinov-2013', locator: 'p. 67, ex. 15 and fn. 3' }
			]
		},
		{
			language: 'ko',
			form: '-아/어 보다',
			stageId: 'attemptive-auxiliary',
			start: 1900,
			end: 2000,
			status: 'dominant',
			note: 'Auxiliary 보다 “see” after the infinitive, “try (out)”; in directives it leaves the addressee room to decline (Lee 1993). Shown here from its modern documentation; the earlier history is left undated.',
			sources: [
				{ source: 'lee-1993', locator: 'pp. 243–250' },
				{ source: 'wiktionary-boda' },
				{ source: 'voinov-2013', locator: 'p. 67, ex. 14' }
			]
		},
		{
			language: 'zh',
			form: 'V看 “find out”',
			stageId: 'do-and-see',
			start: 950,
			end: 1900,
			status: 'dominant',
			note: 'Post-verbal intransitive 看 with the sense “find out” appears in the Zutangji 祖堂集 (952): 你試説看 “try saying it and find out”. Cheng identifies this as the environment where 看 later grammaticalized.',
			sources: [{ source: 'cheng-2012' }]
		},
		{
			language: 'zh',
			form: 'V(V)看 · 試試看',
			stageId: 'attemptive-auxiliary',
			start: 1900,
			end: 2000,
			status: 'dominant',
			note: '看 after a (typically reduplicated) verb marks a trial: 試試看 “give it a try”, 嘗嘗看 “taste and see”. Cheng dates the fully attemptive V-看看 reading to Modern Chinese.',
			sources: [{ source: 'wiktionary-kan' }, { source: 'cheng-2012' }]
		},
		{
			language: 'chg',
			form: '-A kör-',
			stageId: 'attemptive-auxiliary',
			start: 1400,
			end: 1900,
			status: 'approximate',
			note: 'Chagatay tap-a kör “try to find it” (Eckmann 1966:144), within the span of the Chagatay literary language.',
			sources: [
				{ source: 'eckmann-1966', locator: 'p. 144' },
				{ source: 'voinov-2013', locator: 'p. 65, ex. 5' }
			]
		},
		{
			language: 'tyv',
			form: '-(I)p кör-',
			stageId: 'attemptive-auxiliary',
			start: 1900,
			end: 2000,
			status: 'dominant',
			note: 'Auxiliary kör “see” after the -(I)p converb: bižip kör “try writing”. Tuvan dictionaries list the politeness reading of directives as its primary sense.',
			sources: [
				{ source: 'tenishev-1968', locator: 'p. 258' },
				{ source: 'voinov-2013', locator: 'pp. 63–64' }
			]
		},
		{
			language: 'ky',
			form: '-(I)p көр-',
			stageId: 'attemptive-auxiliary',
			start: 1900,
			end: 2000,
			status: 'dominant',
			note: 'kïl-ïp kör “try to do it” (Judakhin 1965:428).',
			sources: [
				{ source: 'judakhin-1965', locator: 'p. 428' },
				{ source: 'voinov-2013', locator: 'p. 65, ex. 7' }
			]
		},
		{
			language: 'kaa',
			form: '-(I)p көр-',
			stageId: 'attemptive-auxiliary',
			start: 1900,
			end: 2000,
			status: 'dominant',
			note: 'šeg-ip kör “try smoking” (Baskakov 1958:337).',
			sources: [
				{ source: 'baskakov-1958', locator: 'p. 337' },
				{ source: 'voinov-2013', locator: 'p. 65, ex. 6' }
			]
		},
		{
			language: 'sah',
			form: 'көр',
			stageId: 'attemptive-auxiliary',
			start: 1900,
			end: 2000,
			status: 'dominant',
			note: 'keten kör “try to put on (clothes)” (Sleptsov 1972:180); the lexical verb appears without the -(I)p converb.',
			sources: [
				{ source: 'sleptsov-1972', locator: 'p. 180' },
				{ source: 'voinov-2013', locator: 'p. 65, ex. 8' }
			]
		},
		{
			language: 'tt',
			form: '-п күр-',
			stageId: 'politeness-hedge',
			start: 1900,
			end: 2000,
			status: 'dominant',
			note: 'The dictionary records only the polite-directive sense: bar-a kür “please go” (Ganiev 1998:199). The attemptive reading surfaces in texts — libretto jaz-ïp kür-mə-gən “one who has not tried writing a libretto” (from Musa Dzhalil) — so the softener and the attemptive coexist even where lexicographers missed the latter.',
			sources: [
				{ source: 'ganiev-1998', locator: 'p. 199' },
				{ source: 'voinov-2013', locator: 'p. 66, exx. 10–11' }
			]
		},
		{
			language: 'ba',
			form: '-п күр-',
			stageId: 'politeness-hedge',
			start: 1900,
			end: 2000,
			status: 'dominant',
			note: 'The dictionary gives haqlan-a kür as “please be careful” (Uraksin 1996:318); Voinov reports native-writer confirmation of the more literal reading “try to be careful”, so the polite directive still carries the attemptive underneath.',
			sources: [
				{ source: 'uraksin-1996', locator: 'p. 318' },
				{ source: 'voinov-2013', locator: 'p. 66, ex. 9' }
			]
		},
		{
			language: 'mn',
			form: '-ж үз-',
			stageId: 'attemptive-auxiliary',
			start: 1900,
			end: 2000,
			status: 'dominant',
			note: 'xelž üz “try to speak” (Hangin 1986:572); үзэх “see” after a -ж converb means “try, attempt”.',
			sources: [
				{ source: 'hangin-1986', locator: 'p. 572' },
				{ source: 'wiktionary-uzekh' },
				{ source: 'voinov-2013', locator: 'p. 66, ex. 12' }
			]
		},
		{
			language: 'xal',
			form: 'үз-',
			stageId: 'attemptive-auxiliary',
			start: 1900,
			end: 2000,
			status: 'dominant',
			note: 'kütsədž üz-x “try to accomplish it” (Muniev 1977:547).',
			sources: [
				{ source: 'muniev-1977', locator: 'p. 547' },
				{ source: 'voinov-2013', locator: 'p. 67, ex. 13' }
			]
		},
		{
			language: 'mnc',
			form: '-me tuwa-',
			stageId: 'attemptive-auxiliary',
			start: 1600,
			end: 1900,
			status: 'dominant',
			note: 'tuwambi “see, look” as an auxiliary after the -me converb means “try, try out”; already in the seventeenth-century Old Manchu Chronicles: solho han de elcin takūrame tuwambi “they tried sending an emissary to the Korean khan”.',
			sources: [{ source: 'wiktionary-tuwambi' }, { source: 'ulman-2025', locator: 'ex. 79' }]
		},
		{
			language: 'uz',
			form: '-(i)b koʻr-',
			stageId: 'attemptive-auxiliary',
			start: 1900,
			end: 2000,
			status: 'dominant',
			note: 'yeb koʻr “eat and see → try eating”; koʻrmoq “see” after the -(i)b converb (Johanson 2012:760, cited in the ComPLETE overview).',
			sources: [{ source: 'vanhove-bisang-2021' }]
		},
		{
			language: 'ta',
			form: 'V-AVP பார்',
			stageId: 'attemptive-auxiliary',
			start: 1900,
			end: 2000,
			status: 'dominant',
			note: 'பார் pār “see” after the past participle means “try V-ing” — சாப்பிட்டுப் பார் cāppiṭṭup pār “taste, lit. try eating”; after the infinitive, “try to V” (Schiffman 1999:194–195).',
			sources: [{ source: 'schiffman-1999', locator: 'pp. 194–195, §7.9.1' }]
		},
		{
			language: 'ee',
			form: 'V … kpɔ́',
			stageId: 'attemptive-auxiliary',
			start: 1900,
			end: 2000,
			status: 'dominant',
			note: 'The particle kpɔ́, from the verb “see”, adds the meaning of trying to do something: no aha sia kpɔ́ “try some of this wine” (Ameka 2008:169).',
			sources: [
				{ source: 'ameka-2008', locator: 'p. 169' },
				{ source: 'voinov-2013', locator: 'p. 70, exx. 23–24' }
			]
		},
		{
			language: 'ain',
			form: 'V wa inkar / nukar',
			stageId: 'do-and-see',
			start: 1898,
			end: 2000,
			status: 'dominant',
			note: 'A clause-chained “see” verb after wa “and”: kar wa inkar “do and look”, glossed 「〜をしてみる」 in Kanazawa (1898); Tamura records pákari wa nukar 「計ってみなさい」. Both inkar “look” and nukar “see (it)” serve, and the visual sense stays transparent.',
			sources: [{ source: 'kanazawa-1898' }, { source: 'tamura-1996', locator: 's.v. pákari' }]
		},
		{
			language: 'th',
			form: 'ลอง V ดู',
			stageId: 'do-and-see',
			start: 1900,
			end: 2000,
			status: 'dominant',
			note: 'Post-verbal ดู “see” marks an action done for trial: ลองดู “try and see”. The overt verb ลอง “try” still co-occurs, keeping the do-and-see bridge visible.',
			sources: [{ source: 'wiktionary-duu' }]
		}
	],
	exampleSets: [
		{
			id: 'converb-aux',
			label: 'Converb + SEE auxiliaries',
			title: 'SEE as an attemptive auxiliary after a converb or infinitive',
			description:
				'A non-final verb form carries the lexical content and a following SEE verb marks the attempt. The frame recurs across Turkic, Mongolic, Manchu, Korean, and Japanese.'
		},
		{
			id: 'serial',
			label: 'Serial verbs & particles',
			title: 'SEE in serial-verb chains and post-verbal particles',
			description:
				'SEE follows the main verb as a co-verb, particle, or affix. Foley treats the “V + see = try V” serialization as near-universal in Papuan languages; Sinitic, Thai, Ewe, and Indo-Aryan show the same frame.'
		},
		{
			id: 'politeness',
			label: 'Softened directives',
			title: 'Attemptive SEE as a politeness hedge',
			description:
				'A felicitous request presupposes that the hearer is able to comply (Searle 1975). English hedges that presupposition by questioning ability — “can you close the window?” is politer than “close the window” — while these languages hedge it with the attemptive: framing the command as an attempt leaves the hearer a face-saving way out if the action turns out to be beyond them (Voinov 2013:64–65, drawing on Brown & Levinson 1987). Tuvan dictionaries list this polite-directive reading as the primary sense of the kör auxiliary; for Tatar and Bashkir it is the only sense the dictionaries record, with the attemptive reading confirmed from texts and native writers.'
		}
	],
	examples: [
		{
			language: 'ja',
			set: 'converb-aux',
			original: '食べてみる',
			transliteration: 'tabe-te mi-ru',
			gloss: 'eat-CVB see-NPST',
			literal: 'eat and see',
			natural: 'try eating',
			sources: [
				{ source: 'voinov-2013', locator: 'p. 67, ex. 15' },
				{ source: 'wiktionary-miru' }
			]
		},
		{
			language: 'ko',
			set: 'converb-aux',
			original: '먹어 보다',
			transliteration: 'meog-eo bo-da',
			gloss: 'eat-INF see-DECL',
			literal: 'eat and see',
			natural: 'try eating',
			illustration: {
				original: '이 책 읽어 봐',
				transliteration: 'i chayk ilk-e po-a',
				gloss: 'DEM book read-INF AUX-IMV',
				literal: 'read this book and see',
				natural: 'try to read this book'
			},
			sources: [
				{ source: 'lee-1993', locator: 'pp. 249–250' },
				{ source: 'voinov-2013', locator: 'p. 67, ex. 14' },
				{ source: 'wiktionary-boda' }
			]
		},
		{
			language: 'tyv',
			set: 'converb-aux',
			original: 'бижип көр',
			transliteration: 'biži-p kör',
			gloss: 'write-CVB AUX.IMV',
			literal: 'write and see',
			natural: 'try writing',
			illustration: {
				original: 'бо хемге балыктап көрдүвүс',
				transliteration: 'bo xem-ge balïkta-p kör-dü-vüs',
				gloss: 'this river-DAT fish-CVB AUX-PST.I-1PL',
				literal: 'we fished in this river and saw',
				natural: 'we tried fishing in this river'
			},
			sources: [
				{ source: 'tenishev-1968', locator: 'p. 258' },
				{ source: 'voinov-2013', locator: 'pp. 63–64, ex. 2' }
			]
		},
		{
			language: 'chg',
			set: 'converb-aux',
			original: 'tapa kör anï',
			transliteration: 'tap-a kör an-ï',
			gloss: 'find-CVB AUX.IMV it-ACC',
			literal: 'find it and see',
			natural: 'try to find it',
			sources: [
				{ source: 'eckmann-1966', locator: 'p. 144' },
				{ source: 'voinov-2013', locator: 'p. 65, ex. 5' }
			]
		},
		{
			language: 'kaa',
			set: 'converb-aux',
			original: 'шегип көр',
			transliteration: 'šeg-ip kör',
			gloss: 'smoke-CVB AUX.IMV',
			literal: 'smoke and see',
			natural: 'try smoking',
			sources: [
				{ source: 'baskakov-1958', locator: 'p. 337' },
				{ source: 'voinov-2013', locator: 'p. 65, ex. 6' }
			]
		},
		{
			language: 'ky',
			set: 'converb-aux',
			original: 'кылып көр',
			transliteration: 'kïl-ïp kör',
			gloss: 'do-CVB AUX.IMV',
			literal: 'do it and see',
			natural: 'try to do it',
			sources: [
				{ source: 'judakhin-1965', locator: 'p. 428' },
				{ source: 'voinov-2013', locator: 'p. 65, ex. 7' }
			]
		},
		{
			language: 'sah',
			set: 'converb-aux',
			original: 'кэтэн көр',
			transliteration: 'keten kör',
			gloss: 'put.on AUX.IMV',
			literal: 'put on and see',
			natural: 'try (clothes) on',
			sources: [
				{ source: 'sleptsov-1972', locator: 'p. 180' },
				{ source: 'voinov-2013', locator: 'p. 65, ex. 8' }
			]
		},
		{
			language: 'tt',
			set: 'converb-aux',
			original: 'либретто язып күрмәгән',
			transliteration: 'libretto jaz-ïp kür-mə-gən',
			gloss: 'libretto write-CVB AUX-NEG-PTCP.PST',
			literal: 'one who has not written a libretto and seen',
			natural: 'one who has not tried writing a libretto',
			sources: [{ source: 'voinov-2013', locator: 'p. 66, ex. 11' }]
		},
		{
			language: 'mn',
			set: 'converb-aux',
			original: 'хэлж үз',
			transliteration: 'xelž üz',
			gloss: 'speak-CVB AUX.IMV',
			literal: 'speak and see',
			natural: 'try to speak',
			sources: [
				{ source: 'hangin-1986', locator: 'p. 572' },
				{ source: 'wiktionary-uzekh' },
				{ source: 'voinov-2013', locator: 'p. 66, ex. 12' }
			]
		},
		{
			language: 'xal',
			set: 'converb-aux',
			original: 'күцәҗ үзх',
			transliteration: 'kütsədž üz-x',
			gloss: 'accomplish AUX-FUT.PTCP',
			literal: 'accomplish it and see',
			natural: 'try to accomplish it',
			sources: [
				{ source: 'muniev-1977', locator: 'p. 547' },
				{ source: 'voinov-2013', locator: 'p. 67, ex. 13' }
			]
		},
		{
			language: 'uz',
			set: 'converb-aux',
			original: 'yeb koʻr',
			gloss: 'eat-CVB see.IMV',
			literal: 'eat and see',
			natural: 'try eating',
			sources: [{ source: 'vanhove-bisang-2021' }]
		},
		{
			language: 'ta',
			set: 'converb-aux',
			original: 'சாப்பிட்டுப் பார்',
			transliteration: 'cāppiṭṭup pār',
			gloss: 'eat-AVP see.IMV',
			literal: 'eat and see',
			natural: 'taste it; try eating',
			illustration: {
				original: 'குழந்தை நடக்கப் பார்த்தது',
				transliteration: 'korande nadakka paattadu',
				gloss: 'child walk-INF see-PST-3SG.N',
				literal: 'the child saw to walking',
				natural: 'the child tried to walk'
			},
			sources: [{ source: 'schiffman-1999', locator: 'pp. 194–195, §7.9.1' }]
		},
		{
			language: 'mnc',
			set: 'converb-aux',
			original: 'ᡨᡠᠸᠠᠮᠪᡳ',
			transliteration: '-me tuwa-mbi',
			gloss: '(V-CVB) see-NPST',
			literal: 'do and see',
			natural: 'try, try out',
			illustration: {
				original: 'ᠰᠣᠯᡥᠣ ᡥᠠᠨ ᡩᡝ ᡝᠯᠴᡳᠨ ᡨᠠᡴᡡᡵᠠᠮᡝ ᡨᡠᠸᠠᠮᠪᡳ',
				transliteration: 'solho han de elcin takūra-me tuwa-mbi',
				gloss: 'Korea khan ALL emissary send-CVB see-NPST',
				literal: 'they send an emissary to the Korean khan and see (Old Manchu Chronicles, 17th c.)',
				natural: 'they tried sending an emissary to the Korean khan'
			},
			sources: [{ source: 'wiktionary-tuwambi' }, { source: 'ulman-2025', locator: 'ex. 79' }]
		},
		{
			language: 'ain',
			set: 'converb-aux',
			original: 'kar wa inkar',
			gloss: 'do and look',
			literal: 'do it and look',
			natural: 'try doing it (〜をしてみる)',
			illustration: {
				original: 'henpak conpa an ya pákari wa nukar',
				gloss: 'how.many measure exist Q measure and see',
				literal: 'measure how many shō there are and see',
				natural: 'try measuring how much there is (計ってみなさい)'
			},
			sources: [
				{ source: 'kanazawa-1898', locator: '動作 46#14' },
				{ source: 'tamura-1996', locator: 's.v. pákari' }
			]
		},
		{
			language: 'zh',
			set: 'serial',
			original: '試試看 / 试试看',
			transliteration: 'shìshi kàn',
			gloss: 'try-try see',
			literal: 'try a bit and see',
			natural: 'give it a try',
			illustration: {
				original: '嘗嘗看 / 尝尝看',
				transliteration: 'chángcháng kàn',
				gloss: 'taste-taste see',
				literal: 'taste a bit and see',
				natural: 'try a taste'
			},
			sources: [{ source: 'wiktionary-kan' }]
		},
		{
			language: 'th',
			set: 'serial',
			original: 'ลองดู',
			transliteration: 'lɔɔng duu',
			gloss: 'try see',
			literal: 'try and see',
			natural: 'try it out',
			sources: [{ source: 'wiktionary-duu' }]
		},
		{
			language: 'ee',
			set: 'serial',
			original: 'no aha sia kpɔ́',
			gloss: 'drink alcohol PROX PFV(see)',
			literal: 'drink this wine and see',
			natural: 'try some of this wine',
			sources: [
				{ source: 'ameka-2008', locator: 'p. 169' },
				{ source: 'voinov-2013', locator: 'p. 70, ex. 24' }
			]
		},
		{
			language: 'hi',
			set: 'serial',
			original: 'पानी में कूद कर देख',
			transliteration: 'paanii mẽ kuud kar dekh',
			gloss: 'water LOC jump do see',
			literal: 'jump in the water and see',
			natural: 'try jumping in the water',
			sources: [{ source: 'voinov-2013', locator: 'p. 69, ex. 19' }]
		},
		{
			language: 'ur',
			set: 'serial',
			original: 'ابّا کو مطلع کرکے دیکھ',
			transliteration: 'abbaa ko muttalaa karke dekh',
			gloss: 'father ACC inform do see',
			literal: 'inform dad and see',
			natural: 'try to inform dad',
			sources: [{ source: 'voinov-2013', locator: 'p. 69, ex. 20' }]
		},
		{
			language: 'cns',
			set: 'serial',
			original: 'yitim-por',
			gloss: 'arise-see',
			literal: 'arise and see',
			natural: 'try to awaken somebody',
			sources: [
				{ source: 'foley-1986', locator: 'p. 152' },
				{ source: 'voinov-2013', locator: 'p. 68, ex. 16' }
			]
		},
		{
			language: 'bbb',
			set: 'serial',
			original: 'akoe ga',
			gloss: 'throw see',
			literal: 'throw and see',
			natural: 'try throwing it',
			sources: [
				{ source: 'foley-1986', locator: 'p. 152' },
				{ source: 'voinov-2013', locator: 'p. 69, ex. 17' }
			]
		},
		{
			language: 'yee',
			set: 'serial',
			original: 'na-mpi-kwalca-tay-ntut',
			gloss: '3SG-3DL-arise-see-RM.PST',
			literal: 'they two arose-saw him',
			natural: 'they both tried to wake him up',
			sources: [
				{ source: 'foley-1986', locator: 'p. 152' },
				{ source: 'voinov-2013', locator: 'p. 69, ex. 18' }
			]
		},
		{
			language: 'njo',
			set: 'serial',
			original: 'tʃəm-tsə-aŋ',
			gloss: 'drink-CON-IMP',
			literal: 'drink and look',
			natural: 'try a sip',
			illustration: {
				original: '-tsə < atsə',
				literal: 'the conative suffix -tsə most likely continues the verb root atsə “look”',
				natural: 'look → witness, seek proof → try'
			},
			sources: [
				{ source: 'coupe-2007', locator: 'pp. 332–333' },
				{ source: 'voinov-2013', locator: 'p. 69, exx. 21–22' }
			]
		},
		{
			language: 'omb',
			set: 'serial',
			original: 'Nikki vi=ni geni lehi na qeta',
			gloss: 'Nikki 3SG.IRR=IRR eat see ACC taro',
			literal: 'Nikki will eat-see the taro',
			natural: 'Nikki will taste (try) the taro',
			illustration: {
				original: 'geni lehi / geni rongo',
				gloss: 'eat see / eat feel',
				literal: 'the conative slot admits either lehi “see” or rongo “feel, sense”',
				natural: 'taste, test, try'
			},
			sources: [{ source: 'hyslop-2001', locator: 'p. 289, §10.5.4, ex. 53' }]
		},
		{
			language: 'en',
			set: 'serial',
			original: 'See if you can do this today.',
			literal: 'see whether you are able to do this today',
			natural: 'try to do this today',
			sources: [{ source: 'voinov-2013', locator: 'pp. 70–71, ex. 25' }]
		},
		{
			language: 'tyv',
			set: 'politeness',
			original: 'ынчалза-даа бүзүреп көрүңер',
			transliteration: 'ïnčalza-daa büzüre-p kör-üŋer',
			gloss: 'but believe-CVB AUX-2PL.IMV',
			literal: 'but believe and see',
			natural: 'but please believe me',
			sources: [{ source: 'voinov-2013', locator: 'p. 64, ex. 3' }]
		},
		{
			language: 'tt',
			set: 'politeness',
			original: 'бара күр',
			transliteration: 'bar-a kür',
			gloss: 'go-CVB AUX.IMV',
			literal: 'go and see',
			natural: 'please go',
			sources: [
				{ source: 'ganiev-1998', locator: 'p. 199' },
				{ source: 'voinov-2013', locator: 'p. 66, ex. 10' }
			]
		},
		{
			language: 'ba',
			set: 'politeness',
			original: 'һаҡлана күр',
			transliteration: 'haqlan-a kür',
			gloss: 'be.careful-CVB AUX.IMV',
			literal: 'be careful and see; try to be careful',
			natural: 'please be careful',
			sources: [
				{ source: 'uraksin-1996', locator: 'p. 318' },
				{ source: 'voinov-2013', locator: 'p. 66, ex. 9' }
			]
		}
	],
	neighboringShifts: [
		{
			schematic: 'SEE → HAVE EXPERIENCE',
			realizations: 9,
			status: 'accepted',
			url: 'https://datsemshift.ru/shift992',
			note: 'English, Russian, Spanish, Turkic gör-, Akkadian amāru. Voinov treats see = experience as the bridge that lets attempted actions count as things one “sees”.'
		},
		{
			schematic: 'TASTE ↔ TRY',
			realizations: 28,
			status: 'accepted',
			url: 'https://datsemshift.ru/shift4',
			note: 'Bidirectional: English try, German probieren, Russian пробовать, Japanese 試す. A second perception-to-attemptive route beside SEE.'
		},
		{
			schematic: 'SEARCH → TRY',
			realizations: 21,
			status: 'accepted',
			url: 'https://datsemshift.ru/shift9',
			note: 'Ancient Greek ζητέω, French chercher, Italian cercare, Vietnamese tìm.'
		},
		{
			schematic: 'TOUCH ↔ TRY',
			realizations: 1,
			status: 'proposed',
			url: 'https://datsemshift.ru/shift3773',
			note: 'French tâter.'
		},
		{
			schematic: 'SEE → UNDERSTAND',
			realizations: 28,
			status: 'accepted',
			url: 'https://datsemshift.ru/shift746',
			note: 'English see, French voir, Russian видеть, Turkic gör-. The cognitive branch of the same source verb.'
		},
		{
			schematic: 'SEE → KNOW',
			realizations: 16,
			status: 'accepted',
			url: 'https://datsemshift.ru/shift1069',
			note: 'Ancient Greek εἶδον/οἶδα, Latin vidēre beside Icelandic vita, Polynesian kite/ʔite.'
		},
		{
			schematic: 'SEE → FIND',
			realizations: 21,
			status: 'accepted',
			url: 'https://datsemshift.ru/shift2017',
			note: 'Akkadian amāru, Swahili -ona, Maori kite. “Find out” is the reading Mandarin post-verbal 看 shows in the Zutangji.'
		},
		{
			schematic: 'SEE → MEET',
			realizations: 24,
			status: 'accepted',
			url: 'https://datsemshift.ru/shift747',
			note: 'Russian видеться, Turkish görmek, Korean 보다 — the social branch.'
		},
		{
			schematic: 'SEE → OBEY',
			realizations: 1,
			status: 'proposed',
			url: 'https://datsemshift.ru/shift10124',
			note: 'Old Turkic kör- — the same verb behind the Turkic attemptive, heading toward the target of HEAR → OBEY.'
		}
	],
	related: [
		{
			kind: 'pathway',
			slug: 'hear-words-to-obey',
			label: 'From hearing words to obedience — another perception verb turned modal/social'
		}
	],
	sources: [
		{ source: 'voinov-2013' },
		{ source: 'datsemshift', locator: 'shift 36' },
		{ source: 'anderson-2004' },
		{ source: 'tenishev-1968' },
		{ source: 'eckmann-1966' },
		{ source: 'baskakov-1958' },
		{ source: 'judakhin-1965' },
		{ source: 'sleptsov-1972' },
		{ source: 'ganiev-1998' },
		{ source: 'uraksin-1996' },
		{ source: 'hangin-1986' },
		{ source: 'muniev-1977' },
		{ source: 'lee-1993' },
		{ source: 'henderson-2011' },
		{ source: 'foley-1986' },
		{ source: 'coupe-2007' },
		{ source: 'ameka-2008' },
		{ source: 'cheng-2012' },
		{ source: 'schiffman-1999' },
		{ source: 'hyslop-2001' },
		{ source: 'ulman-2025' },
		{ source: 'vanhove-bisang-2021' },
		{ source: 'kanazawa-1898' },
		{ source: 'tamura-1996' },
		{ source: 'weblio-kobun-miru' },
		{ source: 'wiktionary-miru' },
		{ source: 'wiktionary-boda' },
		{ source: 'wiktionary-kan' },
		{ source: 'wiktionary-duu' },
		{ source: 'wiktionary-uzekh' },
		{ source: 'wiktionary-tuwambi' }
	]
};
