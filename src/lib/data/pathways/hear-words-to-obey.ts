import type { Pathway } from '$lib/types';

export const hearWordsToObey: Pathway = {
	slug: 'hear-words-to-obey',
	title: 'From hearing words to obedience',
	shortTitle: 'HEAR WORDS → OBEY',
	question: 'How does “listen” come to mean “obey”?',
	kind: 'shift',
	summary:
		'Verbs of hearing and listening repeatedly grow a sense of obeying. The pattern recurs from Mandarin tīnghuà and Japanese iu koto o kiku to Latin oboedīre, built on audīre “to hear”, behind French obéir and English obey.',
	evidenceNote:
		'Each expression retains hearing or listening in its structure while conventionally expressing attention, compliance, or obedience.',
	stages: [
		{
			id: 'auditory-reception',
			number: 1,
			label: 'Auditory reception',
			schematic: 'HEAR/LISTEN + WORDS/VOICE',
			description: 'A listener perceives speech or deliberately attends to a speaker’s words.'
		},
		{
			id: 'attentive-uptake',
			number: 2,
			label: 'Attentive uptake',
			schematic: 'HEAR → ACCEPT AS GUIDANCE',
			description:
				'Listening implies that the message is understood, accepted, or treated as advice or instruction.'
		},
		{
			id: 'compliant-action',
			number: 3,
			label: 'Compliant action',
			schematic: 'HEED → OBEY / COMPLY',
			description:
				'The expression conventionally describes acting according to another person’s words or displaying obedience.'
		}
	],
	bands: [
		{
			language: 'la',
			form: 'oboedīre',
			stageId: 'compliant-action',
			start: -200,
			end: 600,
			status: 'dominant',
			uncertaintyStart: -220,
			note: 'A compound of ob- and audīre “to hear,” attested from Plautus (dicto oboediens) through Late Latin, and the ancestor of the Romance verbs.',
			sources: [{ source: 'lewis-short-oboedio' }]
		},
		{
			language: 'fr',
			form: 'obeïr → obéir',
			stageId: 'compliant-action',
			start: 1120,
			end: 2000,
			status: 'dominant',
			uncertaintyStart: 1100,
			note: 'First attested in the early twelfth century (Vie de Saint Brandan), from Latin oboedīre.',
			sources: [{ source: 'cnrtl-obeir' }]
		},
		{
			language: 'en',
			form: 'obeien → obey',
			stageId: 'compliant-action',
			start: 1300,
			end: 2000,
			status: 'dominant',
			uncertaintyStart: 1275,
			note: 'Middle English obeien, taken up through Anglo-Norman obeier from Latin oboedīre.',
			sources: [{ source: 'wiktionary-obey' }]
		},
		{
			language: 'de',
			form: 'gihōren → gehorchen',
			stageId: 'compliant-action',
			start: 1100,
			end: 2000,
			status: 'dominant',
			uncertaintyStart: 800,
			note: 'Middle High German gehorchen, from Old High German gihōren, a prefixed form of hōren “to hear.”',
			sources: [{ source: 'dwds-gehorchen' }]
		},
		{
			language: 'grc',
			form: 'ὑπακούω',
			stageId: 'attentive-uptake',
			start: -750,
			end: -450,
			status: 'dominant',
			note: 'In Homer, “hearken, give ear to, answer a call” (Il. 8.4, Od. 4.283) — attentive response, on ἀκούω “to hear.”',
			sources: [{ source: 'lsj-hypakouo' }]
		},
		{
			language: 'grc',
			form: 'ὑπακούω “obey”',
			stageId: 'compliant-action',
			start: -450,
			end: 600,
			status: 'dominant',
			note: 'From Herodotus (3.101) and Thucydides (1.29) on, the standard prose verb for “obey, submit”; Modern Greek υπακούω continues it.',
			sources: [{ source: 'lsj-hypakouo' }]
		},
		{
			language: 'ang',
			form: 'hīeran (+ dative)',
			stageId: 'compliant-action',
			start: 750,
			end: 1100,
			status: 'dominant',
			note: 'Old English hīeran with the dative meant “obey, belong to”; the derivatives hīersum “obedient” and hīersumian “to obey” are built on “hear.” Replaced after 1066 by French-derived obey.',
			sources: [{ source: 'wiktionary-hieran' }, { source: 'bosworth-toller-hiersumian' }]
		},
		{
			language: 'sv',
			form: 'hlýða → lyda',
			stageId: 'compliant-action',
			start: 1225,
			end: 2000,
			status: 'dominant',
			uncertaintyStart: 900,
			note: 'Old Norse hlýða “listen; obey” (Proto-Germanic *hliuþijaną, PIE *ḱlew- “hear”) continues as Swedish lyda, Danish lyde, Icelandic hlýða — all now primarily “obey.”',
			sources: [{ source: 'wiktionary-hlytha' }, { source: 'wiktionary-lyda' }]
		},
		{
			language: 'zh',
			form: '聽 “heed, obey” · 聽命',
			stageId: 'compliant-action',
			start: -500,
			end: 2000,
			status: 'dominant',
			uncertaintyStart: -770,
			note: 'Classical Chinese 聽 “listen” takes the reading “heed, obey” in compounds like 聽命 “obey orders”; colloquial 听话 continues the same move with an overt “words” object.',
			sources: [{ source: 'wiktionary-tingming' }, { source: 'moe-taiwan-2021-tinghua' }]
		},
		{
			language: 'egy',
			form: 'sḏm → ⲥⲱⲧⲙ',
			stageId: 'compliant-action',
			start: -2000,
			end: 1000,
			status: 'dominant',
			uncertaintyStart: -2400,
			note: 'Egyptian sḏm “hear; obey (someone)” runs through Demotic stm into Coptic ⲥⲱⲧⲙ, whose noun means both “hearing” and “obedience.”',
			sources: [{ source: 'wiktionary-sdm' }, { source: 'wiktionary-sotm' }]
		},
		{
			language: 'akk',
			form: 'šemû',
			stageId: 'compliant-action',
			start: -1900,
			end: -500,
			status: 'dominant',
			uncertaintyStart: -2300,
			note: '“To hear; to listen; to obey a word or command” throughout the corpus (CAD Š/2).',
			sources: [{ source: 'cad-semu' }]
		},
		{
			language: 'hbo',
			form: 'šāmaʿ bə-qōl',
			stageId: 'compliant-action',
			start: -1000,
			end: -150,
			status: 'dominant',
			note: '“Hear the voice of” as the Biblical Hebrew idiom for obeying, across the Hebrew Bible.',
			sources: [{ source: 'leal-glanz-2022' }]
		}
	],
	exampleSets: [
		{
			id: 'phrase',
			label: 'Hearing words or a voice',
			title: 'Phrases with words or a voice as object',
			description:
				'HEAR or LISTEN takes words, speech, or a voice as its object, and the phrase as a whole means heeding or obeying the speaker.'
		},
		{
			id: 'lexeme',
			label: 'Hearing verbs meaning obey',
			title: 'Hearing and listening verbs with the meaning “obey”',
			description:
				'The verb of hearing or listening itself expresses obedience. The Latin compound oboedīre (ob- + audīre “to hear”) heads the Romance series and reached English through French; German gehorchen continues a prefixed form of hören; Slavic attaches a reflexive to “listen”; and Greek, Akkadian, and Egyptian verbs of hearing carry obedience readings in attested texts.'
		}
	],
	examples: [
		{
			language: 'ain',
			set: 'phrase',
			original: 'u-itak-nu',
			gloss: 'RECP-word-hear',
			literal: 'hear or accept one another’s words',
			natural: 'agree; obey',
			sources: [
				{ source: 'tamura-1996', locator: 'p. 808, s.v. uitaknu' },
				{ source: 'bugaeva-2016', locator: 'p. 103' },
				{ source: 'bugaeva-kobayashi-2022', locator: '§4.2.1' }
			]
		},
		{
			language: 'zh',
			set: 'phrase',
			original: '聽話 / 听话',
			transliteration: 'tīnghuà',
			gloss: 'listen-word',
			literal: 'listen to words',
			natural: 'obey; be compliant',
			sources: [{ source: 'moe-taiwan-2021-tinghua' }]
		},
		{
			language: 'ja',
			set: 'phrase',
			original: '言うことを聞く',
			transliteration: 'iu koto o kiku',
			gloss: 'say thing ACC hear',
			literal: 'hear what (someone) says',
			natural: 'obey; do as one is told',
			illustration: {
				original: 'この子は親の言うことをよく聞く',
				transliteration: 'kono ko wa oya no iu koto o yoku kiku',
				gloss: 'this child TOP parent GEN say thing ACC well hear',
				literal: 'this child listens well to what the parents say',
				natural: 'this child obeys the parents well'
			},
			sources: [{ source: 'shogakukan-progressive-kiku' }]
		},
		{
			language: 'ko',
			set: 'phrase',
			original: '말을 듣다',
			transliteration: 'mal-eul deutda',
			gloss: 'word-ACC hear',
			literal: 'listen to (someone’s) words',
			natural: 'obey; heed',
			illustration: {
				original: '시시는 의심하지 않고 어머니의 말을 들었다',
				transliteration: 'Sissi-neun uisimha-ji anh-ko eomeoni-ui mal-eul deul-eoss-da',
				gloss: 'Cissie-TOP doubt-CONN NEG-and mother-GEN word-ACC hear-PST-DECL',
				literal: 'Cissie heard her mother’s words without doubting',
				natural: 'Cissie obeyed her mother without question'
			},
			sources: [{ source: 'collins-korean-obey' }]
		},
		{
			language: 'tr',
			set: 'phrase',
			original: 'söz dinlemek',
			gloss: 'word listen.INF',
			literal: 'listen to a word or someone’s words',
			natural: 'obey; heed advice',
			sources: [{ source: 'cambridge-turkish-obey' }]
		},
		{
			language: 'fa',
			set: 'phrase',
			original: 'حرف‌شنوی',
			transliteration: 'harf-šenavi',
			gloss: 'word-hearing',
			literal: 'word-hearing',
			natural: 'obedience; compliance',
			sources: [{ source: 'dehkhoda-harf-shenavi' }]
		},
		{
			language: 'vi',
			set: 'phrase',
			original: 'nghe lời',
			gloss: 'hear word',
			literal: 'hear words',
			natural: 'be obedient; obey',
			sources: [{ source: 'tran-2022-vietnamese', locator: 'flash card 068' }]
		},
		{
			language: 'hbo',
			set: 'phrase',
			original: 'שָׁמַע בְּקוֹל',
			transliteration: 'šāmaʿ bə-qōl',
			gloss: 'hear in-voice',
			literal: 'hear the voice of',
			natural: 'obey, comply with',
			illustration: {
				original: 'וַיִּשְׁמַע יְהוָה בְּקוֹל אֵלִיָּהוּ',
				transliteration: 'wayyišmaʿ YHWH bə-qōl ʾĒliyyāhū',
				gloss: 'and.hear YHWH in-voice Elijah',
				literal: 'YHWH listened to the voice of Elijah (1 Kings 17:22)',
				natural: 'YHWH heeded Elijah — read as “obeyed” by Glanz & Leal'
			},
			sources: [{ source: 'leal-glanz-2022', locator: 'pp. 203–226; 1 Kings 17:22' }]
		},
		{
			language: 'la',
			set: 'lexeme',
			original: 'oboedīre',
			gloss: 'ob-hear.INF',
			literal: 'to give ear to, to listen to (ob- + audīre “to hear”)',
			natural: 'to obey, to yield obedience to',
			sources: [{ source: 'lewis-short-oboedio' }]
		},
		{
			language: 'fr',
			set: 'lexeme',
			original: 'obéir',
			gloss: 'obey.INF',
			literal: 'to give obedience (from Latin oboedīre)',
			natural: 'to obey',
			sources: [{ source: 'cnrtl-obeir' }]
		},
		{
			language: 'it',
			set: 'lexeme',
			original: 'obbedire',
			gloss: 'obey.INF',
			literal: 'to give ear, to comply (from Latin oboedīre)',
			natural: 'to obey',
			sources: [{ source: 'treccani-obbedire' }]
		},
		{
			language: 'es',
			set: 'lexeme',
			original: 'obedecer',
			gloss: 'obey.INF',
			literal: 'to comply (from Latin oboedēscere, inchoative of oboedīre)',
			natural: 'to obey',
			sources: [{ source: 'rae-obedecer' }]
		},
		{
			language: 'pt',
			set: 'lexeme',
			original: 'obedecer',
			gloss: 'obey.INF',
			literal: 'to comply (from Latin oboedēscere)',
			natural: 'to obey',
			sources: [{ source: 'priberam-obedecer' }]
		},
		{
			language: 'ca',
			set: 'lexeme',
			original: 'obeir',
			gloss: 'obey.INF',
			literal: 'to comply (from Latin oboedīre)',
			natural: 'to obey',
			sources: [{ source: 'wiktionary-obeir' }]
		},
		{
			language: 'en',
			set: 'lexeme',
			original: 'obey',
			gloss: 'obey.INF',
			literal: 'to comply (Middle English obeien, via Anglo-Norman obeier, from Latin oboedīre)',
			natural: 'to obey',
			sources: [{ source: 'wiktionary-obey' }]
		},
		{
			language: 'ro',
			set: 'lexeme',
			original: 'a asculta de cineva',
			gloss: 'listen.INF of someone',
			literal: 'to listen to someone (from Latin auscultāre “to listen attentively”)',
			natural: 'to obey someone',
			sources: [{ source: 'dexonline-asculta' }, { source: 'wiktionary-asculta' }]
		},
		{
			language: 'de',
			set: 'lexeme',
			original: 'gehorchen',
			gloss: 'GE-hear.INF',
			literal:
				'to hear toward (Middle High German gehorchen, Old High German gihōren, a prefixed form of hören)',
			natural: 'to obey',
			sources: [{ source: 'dwds-gehorchen' }]
		},
		{
			language: 'de',
			set: 'lexeme',
			original: 'gehorsam',
			gloss: 'GE-hear-ADJ',
			literal: 'disposed to hear (derivative of gehorchen)',
			natural: 'obedient',
			sources: [{ source: 'dwds-gehorsam' }]
		},
		{
			language: 'ru',
			set: 'lexeme',
			original: 'слушаться',
			gloss: 'listen-REFL.INF',
			literal: 'to listen (reflexive of слушать “to listen”)',
			natural: 'to obey, to be obedient',
			sources: [{ source: 'wiktionary-slushatsya' }]
		},
		{
			language: 'uk',
			set: 'lexeme',
			original: 'слухатися',
			gloss: 'listen-REFL.INF',
			literal: 'to listen (reflexive of слухати “to listen”)',
			natural: 'to obey, to be obedient',
			sources: [{ source: 'sum11-slukhatysja' }]
		},
		{
			language: 'grc',
			set: 'lexeme',
			original: 'ὑπακούω',
			transliteration: 'hypakoúō',
			gloss: 'under-hear.PRS.1SG',
			literal: 'to listen from below, to give ear (ὑπό + ἀκούω “to hear”)',
			natural: 'to hearken to, to obey',
			sources: [{ source: 'wiktionary-hypakouo' }]
		},
		{
			language: 'akk',
			set: 'lexeme',
			original: 'šemû',
			gloss: 'hear.INF',
			literal: 'to hear, to listen',
			natural: 'to hear; to obey a word or command',
			sources: [{ source: 'cad-semu' }]
		},
		{
			language: 'egy',
			set: 'lexeme',
			original: 'sḏm',
			gloss: 'hear',
			literal: 'to hear, to listen (with n, to someone)',
			natural: 'to hear; to obey someone',
			sources: [{ source: 'wiktionary-sdm' }, { source: 'erman-grapow-1931' }]
		},
		{
			language: 'cop',
			set: 'lexeme',
			original: 'ⲥⲱⲧⲙ',
			transliteration: 'sōtm',
			gloss: 'hear',
			literal: 'to hear, to listen (from Egyptian sḏm via Demotic stm)',
			natural: 'to hear; as a noun, hearing or obedience',
			sources: [{ source: 'wiktionary-sotm' }]
		},
		{
			language: 'ang',
			set: 'lexeme',
			original: 'hīeran',
			gloss: 'hear.INF',
			literal: 'to hear; with the dative, to listen with assent',
			natural: 'to obey; to belong to',
			illustration: {
				original: 'hīersumian',
				gloss: 'hear-some-VBZ.INF',
				literal: 'to be “hearsome” toward (derivative of hīeran, like gehorsam beside gehorchen)',
				natural: 'to obey, to serve'
			},
			sources: [{ source: 'wiktionary-hieran' }, { source: 'bosworth-toller-hiersumian' }]
		},
		{
			language: 'is',
			set: 'lexeme',
			original: 'hlýða',
			gloss: 'listen.INF',
			literal: 'to listen (Old Norse hlýða, Proto-Germanic *hliuþijaną, from PIE *ḱlew- “hear”)',
			natural: 'to obey',
			sources: [{ source: 'wiktionary-hlytha' }]
		},
		{
			language: 'sv',
			set: 'lexeme',
			original: 'lyda',
			gloss: 'obey.INF',
			literal: 'to listen (from Old Norse hlýða “listen; obey”)',
			natural: 'to obey',
			illustration: {
				original: 'en god hund lyder sin husbondes röst',
				gloss: 'a good dog obeys its master:GEN voice',
				literal: 'a good dog heeds its master’s voice',
				natural: 'a good dog obeys its master'
			},
			sources: [{ source: 'wiktionary-lyda' }]
		},
		{
			language: 'nl',
			set: 'lexeme',
			original: 'gehoorzamen',
			gloss: 'GE-hear-some-VBZ.INF',
			literal: 'to be “hearsome” (built on gehoor “hearing”, from horen “to hear”)',
			natural: 'to obey',
			sources: [{ source: 'wiktionary-gehoorzamen' }]
		},
		{
			language: 'zh',
			set: 'lexeme',
			original: '聽命 / 听命',
			transliteration: 'tīngmìng',
			gloss: 'listen-command',
			literal: 'listen to commands',
			natural: 'to obey orders; to be at someone’s command',
			sources: [{ source: 'wiktionary-tingming' }]
		},
		{
			language: 'sa',
			set: 'lexeme',
			original: 'शुश्रूषा',
			transliteration: 'śuśrūṣā',
			gloss: 'hear.DESID-NMLZ',
			literal: 'the desire to hear (desiderative of श्रु śru “to hear”)',
			natural: 'obedience; dutiful service; reverence',
			sources: [{ source: 'wiktionary-shushrusha' }]
		}
	],
	related: [],
	sources: [
		{ source: 'tamura-1996' },
		{ source: 'bugaeva-2016' },
		{ source: 'bugaeva-kobayashi-2022' },
		{ source: 'moe-taiwan-2021-tinghua' },
		{ source: 'shogakukan-progressive-kiku' },
		{ source: 'collins-korean-obey' },
		{ source: 'cambridge-turkish-obey' },
		{ source: 'dehkhoda-harf-shenavi' },
		{ source: 'tran-2022-vietnamese' },
		{ source: 'leal-glanz-2022' },
		{ source: 'lewis-short-oboedio' },
		{ source: 'cnrtl-obeir' },
		{ source: 'treccani-obbedire' },
		{ source: 'rae-obedecer' },
		{ source: 'priberam-obedecer' },
		{ source: 'wiktionary-obeir' },
		{ source: 'wiktionary-obey' },
		{ source: 'dexonline-asculta' },
		{ source: 'wiktionary-asculta' },
		{ source: 'dwds-gehorchen' },
		{ source: 'dwds-gehorsam' },
		{ source: 'wiktionary-slushatsya' },
		{ source: 'sum11-slukhatysja' },
		{ source: 'wiktionary-hypakouo' },
		{ source: 'lsj-hypakouo' },
		{ source: 'cad-semu' },
		{ source: 'wiktionary-sdm' },
		{ source: 'erman-grapow-1931' },
		{ source: 'wiktionary-sotm' },
		{ source: 'wiktionary-hieran' },
		{ source: 'bosworth-toller-hiersumian' },
		{ source: 'wiktionary-hlytha' },
		{ source: 'wiktionary-lyda' },
		{ source: 'wiktionary-gehoorzamen' },
		{ source: 'wiktionary-tingming' },
		{ source: 'wiktionary-shushrusha' }
	]
};
