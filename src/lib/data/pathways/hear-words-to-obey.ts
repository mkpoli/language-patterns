import type { Pathway } from '$lib/types';

export const hearWordsToObey: Pathway = {
	slug: 'hear-words-to-obey',
	title: 'From hearing words to obedience',
	shortTitle: 'HEAR WORDS → OBEY',
	question: 'Listening to someone’s words can extend to heeding and obeying the speaker.',
	kind: 'shift',
	summary:
		'Expressions built from HEAR or LISTEN plus WORD, SPEECH, or VOICE repeatedly show meanings of attentive uptake, compliance, and obedience. The proposed development passes from receiving speech through accepting it as guidance to acting in accordance with it. Ainu, Mandarin, Japanese, Korean, Turkish, Persian, Vietnamese, and Biblical Hebrew attest this mapping in several language families. The examples establish synchronic polysemy or conventionalized expressions; determining when each extension arose requires separate historical evidence.',
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
	bands: [],
	examples: [
		{
			language: 'ain',
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
			original: '聽話 / 听话',
			transliteration: 'tīnghuà',
			gloss: 'listen-word',
			literal: 'listen to words',
			natural: 'obey; be compliant',
			sources: [{ source: 'moe-taiwan-2021-tinghua' }]
		},
		{
			language: 'ja',
			original: 'この子は親の言うことをよく聞く',
			transliteration: 'kono ko wa oya no iu koto o yoku kiku',
			gloss: 'this child TOP parent GEN say thing ACC well hear',
			literal: 'this child listens well to what the parents say',
			natural: 'this child obeys the parents',
			sources: [{ source: 'shogakukan-progressive-kiku' }]
		},
		{
			language: 'ko',
			original: '시시는 의심하지 않고 어머니의 말을 들었다',
			transliteration: 'Sissi-neun uisimhaji anko eomeoni-ui mal-eul deureotda',
			gloss: 'Cissie-TOP doubt.NEG and mother-GEN word-ACC hear.PST',
			literal: 'Cissie heard her mother’s words without doubting',
			natural: 'Cissie obeyed her mother without question',
			sources: [{ source: 'collins-korean-obey' }]
		},
		{
			language: 'tr',
			original: 'söz dinlemek',
			gloss: 'word listen.INF',
			literal: 'listen to a word or someone’s words',
			natural: 'obey; heed advice',
			sources: [{ source: 'cambridge-turkish-obey' }]
		},
		{
			language: 'fa',
			original: 'حرف‌شنوی',
			transliteration: 'harf-šenavi',
			gloss: 'word-hearing',
			literal: 'word-hearing',
			natural: 'obedience; compliance',
			sources: [{ source: 'dehkhoda-harf-shenavi' }]
		},
		{
			language: 'vi',
			original: 'nghe lời',
			gloss: 'hear word',
			literal: 'hear words',
			natural: 'be obedient; obey',
			sources: [{ source: 'tran-2022-vietnamese', locator: 'flash card 068' }]
		},
		{
			language: 'he',
			original: 'וַיִּשְׁמַע יְהוָה בְּקוֹל אֵלִיָּהוּ',
			transliteration: 'wayyišmaʿ YHWH bə-qōl ʾĒliyyāhū',
			gloss: 'and.hear YHWH in-voice Elijah',
			literal: 'YHWH listened to the voice of Elijah',
			natural: 'YHWH obeyed Elijah',
			sources: [{ source: 'leal-glanz-2022', locator: 'pp. 203–226; 1 Kings 17:22' }]
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
		{ source: 'leal-glanz-2022' }
	]
};
