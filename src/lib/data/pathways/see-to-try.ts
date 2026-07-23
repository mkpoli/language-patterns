import type { Pathway } from '$lib/types';

export const seeToTry: Pathway = {
	slug: 'see-to-try',
	title: 'From seeing to trying',
	shortTitle: 'SEE → TRY',
	question: 'How does “see” come to mean “try”?',
	kind: 'shift',
	summary:
		'Verbs of seeing repeatedly become markers of attempting. Japanese 食べてみる “eat and see”, Korean 먹어 보다, Mandarin 試試看, and the Turkic converb + kör- constructions all say “do it and see” for “try doing it”; Voinov (2013) traces the co-lexification across Eurasia, New Guinea, India, and West Africa.',
	evidenceNote:
		'The shift is documented almost exclusively inside multiverb constructions — a converb, infinitive, or serial verb followed by SEE — where the perception verb first means “observe the outcome” and then bleaches into an attemptive auxiliary. In several languages the auxiliary further softens commands into polite requests.',
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
			note: 'Auxiliary 見る after the -te form, “do and see → try doing”; classical dictionaries cite the use from Heian texts such as Taketori Monogatari. Henderson notes a softening effect in polite imperatives.',
			sources: [
				{ source: 'weblio-kobun-miru' },
				{ source: 'wiktionary-miru' },
				{ source: 'henderson-2011', locator: 'p. 286' },
				{ source: 'voinov-2013', locator: 'p. 67, ex. 15' }
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
			form: 'V(V)看 · 試試看',
			stageId: 'attemptive-auxiliary',
			start: 1900,
			end: 2000,
			status: 'dominant',
			note: '看 after a (typically reduplicated) verb marks a trial: 試試看 “give it a try”, 嘗嘗看 “taste and see”. Shown from its modern documentation.',
			sources: [{ source: 'wiktionary-kan' }]
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
			note: 'bar-a kür “please go” (Ganiev 1998:199); the attemptive reading appears in texts, e.g. libretto jaz-ïp kür-mə-gən “one who has not tried writing a libretto”.',
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
			note: 'haqlan-a kür “please be careful”, more literally “try to be careful” (Uraksin 1996:318).',
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
			start: 1650,
			end: 1900,
			status: 'approximate',
			note: 'tuwambi “see, look” as an auxiliary after the -me converb means “try, try out”, within the span of the written Manchu corpus.',
			sources: [{ source: 'wiktionary-tuwambi' }]
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
				'Framing a command as an attempt stops short of assuming the hearer can comply, and the directive reads as a polite request.'
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
			language: 'mnc',
			set: 'converb-aux',
			original: 'ᡨᡠᠸᠠᠮᠪᡳ',
			transliteration: '-me tuwa-mbi',
			gloss: '(V-CVB) see-NPST',
			literal: 'do and see',
			natural: 'try, try out',
			sources: [{ source: 'wiktionary-tuwambi' }]
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
	related: [
		{
			kind: 'pathway',
			slug: 'hear-words-to-obey',
			label: 'From hearing words to obedience — another perception verb turned modal/social'
		}
	],
	sources: [
		{ source: 'voinov-2013' },
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
		{ source: 'weblio-kobun-miru' },
		{ source: 'wiktionary-miru' },
		{ source: 'wiktionary-boda' },
		{ source: 'wiktionary-kan' },
		{ source: 'wiktionary-duu' },
		{ source: 'wiktionary-uzekh' },
		{ source: 'wiktionary-tuwambi' }
	]
};
