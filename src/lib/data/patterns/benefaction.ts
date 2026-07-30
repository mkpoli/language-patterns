import type { Pattern } from '$lib/types';

export const benefaction: Pattern = {
	slug: 'benefaction',
	title: 'Doing Something for Someone',
	shortTitle: 'she cooked me a meal',
	question: 'How does a language say an action was done for someone?',
	summary:
		'English hangs a beneficiary on the end of the clause with “for”, or slips it in front of the object: cook a meal for her, cook her a meal. Elsewhere the verb itself carries the news. Swahili adds a suffix to the verb, Tagalog rebuilds the clause around the person who profits, and across East and Southeast Asia, as in parts of West Africa, a second verb meaning “give” follows the first. Japanese splits that second verb several ways, so one act of cooking is worded differently depending on who ends up better off — and uses the passive when the answer is nobody.',
	tags: ['benefaction', 'grammatical-relations', 'valency-change', 'multiverb-construction', 'grammaticalization'],
	strategies: [
		{
			id: 'give-verb',
			label: 'A second verb “give”',
			schematic: '[V] + GIVE → done for someone',
			description:
				'The verb that names the action is joined by a verb that elsewhere means handing something over. Japanese 〜てくれる and 〜てあげる, Korean 〜어 주다, Mandarin 給 gěi, Thai ให้ hâi, Vietnamese cho and Ewe ná all work this way. The goods have dropped out: what is given is the action. Several of these sit on a line running from full verb to preposition, and grammars differ over where along it to place them.',
			color: 'sky'
		},
		{
			id: 'receive-verb',
			label: 'A second verb “receive”',
			schematic: '[V] + RECEIVE → I had it done for me',
			description:
				'The same event told from the other end, with the beneficiary as subject. Japanese 〜てもらう makes the person who profits the one the sentence is about, so 作ってもらった says of the speaker what 作ってくれた says of the cook. This is the rarest of the strategies here, and the languages that have it cluster in and around Japan.',
			color: 'violet'
		},
		{
			id: 'applicative',
			label: 'An applicative on the verb',
			schematic: 'V-APPL → the beneficiary becomes an object',
			description:
				'An affix on the verb licenses a beneficiary and gives it object properties, with no preposition needed. Swahili pika “cook” becomes pikia “cook for”, Chichewa and Zulu use reflexes of -ir-/-el-, Classical Nahuatl has -ia/-lia/-huia, and Ainu prefixes ko- to the verb. The clause gains an argument it had no room for before. How far the new argument behaves like an ordinary object varies from language to language, and the same affixes also serve locative and instrumental roles.',
			color: 'emerald'
		},
		{
			id: 'voice',
			label: 'Voice on the verb',
			schematic: 'V-VOICE → the affected person is what the clause is built on',
			description:
				'Voice morphology rebuilds the clause around the person the event lands on, without adding an argument the way an applicative does. Tagalog i- selects the beneficiary as the pivot, the participant the ang-phrase names. Japanese reaches for the passive in the unwelcome case and can build it on an intransitive verb, which admits an affected person into an event that has no slot for one.',
			color: 'amber'
		},
		{
			id: 'adposition',
			label: 'A “for” phrase',
			schematic: 'for / 替 / ために + BENEFICIARY',
			description:
				'A preposition or postposition marks the beneficiary and leaves the verb untouched. English for, German für, Russian для, Turkish için, Hindi के लिए and Japanese のために sit here. In Turkish and Hindi this is the ordinary way to name a beneficiary; in Japanese it competes with the auxiliaries and carries a more detached, less personal tone.',
			color: 'rose'
		},
		{
			id: 'case',
			label: 'Dative or bare object',
			schematic: 'V + BENEFICIARY.DAT',
			description:
				'A case ending does the work — German ihm, Russian ему, Latin mihi, the Ancient Greek dative — or, in a language with no case left, the beneficiary simply takes an object slot next to the thing produced, as in cook her a meal. The same datives often double as possessors: French je lui ai lavé les mains puts the owner of the hands in the dative rather than the genitive.',
			color: 'slate'
		}
	],
	attestations: [
		{ language: 'ja', strategy: 'give-verb', expression: '作ってくれた', transliteration: 'tsukutte kureta', confidence: 'high', note: 'くれる when the speaker or the speaker’s side profits, あげる when someone else does — a matter of alignment and empathy rather than physical direction. The full set runs やる, あげる, さしあげる, くれる, くださる', sources: [{ source: 'shibatani-1994' }, { source: 'yamada-2004' }] },
		{ language: 'ja', strategy: 'receive-verb', expression: '作ってもらった', transliteration: 'tsukutte moratta', confidence: 'high', note: 'もらう < 貰う, to receive; いただく in deferential use', sources: [{ source: 'shibatani-1994' }, { source: 'yamada-2004' }] },
		{ language: 'ja', strategy: 'voice', expression: '雨に降られた', transliteration: 'ame ni furareta', confidence: 'high', note: 'the adversative passive, here on an intransitive verb — the unwelcome counterpart of the benefactive auxiliaries', sources: [{ source: 'shibatani-1994' }] },
		{ language: 'ja', strategy: 'adposition', expression: '私のために', transliteration: 'watashi no tame ni', confidence: 'high', note: 'names the beneficiary without the empathy the auxiliaries carry' },

		{ language: 'ko', strategy: 'give-verb', expression: '만들어 줬다', transliteration: 'mandeureo jwotda', confidence: 'high', note: '주다, to give; one form for both directions, with 드리다 when the person served outranks the server', sources: [{ source: 'shibatani-1994' }] },
		{ language: 'ko', strategy: 'adposition', expression: '나를 위해서', transliteration: 'nareul wihaeseo', confidence: 'high', note: 'Korean has no auxiliary matching Japanese もらう and uses a full verb, 도움을 받다, to put the beneficiary in subject position; 받다 does occur in bound forms like 사랑받다', sources: [{ source: 'shibatani-1994' }] },

		{ language: 'zh', strategy: 'give-verb', expression: '給我做飯', transliteration: 'gěi wǒ zuò fàn', confidence: 'high', note: 'preverbal 給 is read as a coverb or preposition by most accounts, with its GIVE origin still visible', sources: [{ source: 'newman-1996' }] },
		{ language: 'zh', strategy: 'adposition', expression: '替我 / 為我', transliteration: 'tì wǒ / wèi wǒ', confidence: 'high', note: '替, in someone’s place; 為, for or on behalf of' },

		{ language: 'th', strategy: 'give-verb', expression: 'ทำอาหารให้ผม', transliteration: 'tham aahǎan hâi phǒm', confidence: 'high', note: 'ให้ hâi is the ordinary verb “give”; with no object between them, ทำให้ reads as a causative instead', sources: [{ source: 'newman-1996' }] },

		{ language: 'vi', strategy: 'give-verb', expression: 'nấu cho tôi', confidence: 'high', note: 'cho, to give', sources: [{ source: 'newman-1996' }] },
		{ language: 'vi', strategy: 'receive-verb', expression: 'được giúp', confidence: 'medium', note: 'được, to get, marks the welcome case; the unwelcome one takes bị' },

		{ language: 'ee', strategy: 'give-verb', expression: 'ná', confidence: 'low', note: 'the form alone, without a clause to fix its analysis: descriptions place it between a serial verb “give” and a benefactive preposition', sources: [{ source: 'heine-kuteva-2002' }] },

		{ language: 'sw', strategy: 'applicative', expression: 'nilimpikia', confidence: 'high', note: 'ni-li-m-pik-i-a, I cooked for him; pika “cook” → pikia “cook for”. The suffix vowel is -i- after a, i or u in the stem and -e- after e or o', sources: [{ source: 'ashton-1944' }, { source: 'peterson-2007' }] },
		{ language: 'ny', strategy: 'applicative', expression: '-ir-a / -er-a', confidence: 'high', note: 'the Bantu applicative extension, which also carries locative and instrumental readings', sources: [{ source: 'peterson-2007' }] },
		{ language: 'zu', strategy: 'applicative', expression: '-el-a', confidence: 'high', sources: [{ source: 'peterson-2007' }] },
		{ language: 'nah', strategy: 'applicative', expression: '-ia / -lia / -huia', confidence: 'medium', note: 'Classical Nahuatl, where the applicative has several allomorphs', sources: [{ source: 'peterson-2007' }] },
		{ language: 'ain', strategy: 'applicative', expression: 'ko-', confidence: 'medium', note: 'a prefix adding a participant the action is directed at; it covers goal and dative roles besides benefit, and the reading depends on the verb', sources: [{ source: 'sato-2008' }] },

		{ language: 'tl', strategy: 'voice', expression: 'i- (ibili)', confidence: 'medium', note: 'the beneficiary becomes the pivot and takes the ang-phrase; ipag- serves other verb classes, and on this root ipagbili means “sell” rather than “buy for”', sources: [{ source: 'schachter-otanes-1972' }] },

		{ language: 'en', strategy: 'adposition', expression: 'cook a meal for her', confidence: 'high' },
		{ language: 'en', strategy: 'case', expression: 'cook her a meal', confidence: 'high', note: 'productive with native verbs; Latinate ones resist it, hence explain the problem to me but not *explain me the problem' },

		{ language: 'de', strategy: 'case', expression: 'Ich habe ihr Essen gekocht', confidence: 'high', note: 'a free dative: kochen does not require it. Whether it reads as advantage or disadvantage depends on the verb — the same case marks both' },
		{ language: 'de', strategy: 'adposition', expression: 'für sie', confidence: 'high' },

		{ language: 'ru', strategy: 'case', expression: 'Я ей приготовил еду', transliteration: 'Ja ej prigotovil edu', confidence: 'high' },
		{ language: 'ru', strategy: 'adposition', expression: 'для меня', transliteration: 'dlja menja', confidence: 'high' },

		{ language: 'la', strategy: 'case', expression: 'mihi', confidence: 'medium', note: 'the case form on its own: the dative of advantage, dativus commodi, is a use of the dative rather than a marker of its own, and stands beside the dative of disadvantage' },
		{ language: 'grc', strategy: 'case', expression: 'μοι', transliteration: 'moi', confidence: 'medium', note: 'likewise a use of the dative, which also covers the recipient, the possessor and the instrument' },

		{ language: 'fr', strategy: 'case', expression: 'Je lui ai préparé un repas', confidence: 'high', note: 'an indirect-object clitic rather than a case ending; French keeps the dative only in its pronouns' },
		{ language: 'fr', strategy: 'adposition', expression: 'pour elle', confidence: 'high' },

		{ language: 'es', strategy: 'case', expression: 'Le preparé la cena', confidence: 'high', note: 'an indirect-object clitic, as in French' },

		{ language: 'tr', strategy: 'adposition', expression: 'onun için', confidence: 'high' },

		{ language: 'hi', strategy: 'adposition', expression: 'उसके लिए', transliteration: 'uske liye', confidence: 'high' },
		{ language: 'hi', strategy: 'give-verb', expression: 'बना देना', transliteration: 'banā denā', confidence: 'medium', note: 'देना as a vector verb; it also marks completion, so the benefactive reading depends on context' }
	],
	paradigm: {
		title: 'Who ends up better off',
		summary:
			'One meal cooked, put four ways according to who profits, and a fifth row for the case where somebody loses. Japanese changes the auxiliary every time; Korean uses one auxiliary for the first two rows and reserves its marking for rank; German and Russian move a pronoun into the dative and leave the verb alone. An empty cell is a language with no dedicated construction there.',
		axes: [
			{ id: 'inward', label: 'someone cooks for me', description: 'The benefit arrives at the speaker or the speaker’s side.' },
			{ id: 'outward', label: 'I cook for someone', description: 'The benefit leaves the speaker for someone else.' },
			{ id: 'receiving', label: 'I had them cook for me', description: 'The same event with the beneficiary as the subject of the sentence.' },
			{ id: 'deferential', label: 'cooking for a superior', description: 'The construction registers the social standing of the person served.' },
			{ id: 'adverse', label: 'it happened on me', description: 'The counterpart of benefit: someone is worse off for the event.' }
		],
		cells: [
			// ─── Japanese ──────────────────────────────────────────────────────
			{ language: 'ja', axis: 'inward', form: '作ってくれた', transliteration: 'tsukutte kureta', strategy: 'give-verb', lemma: 'くれる', note: 'gave me the cooking' },
			{ language: 'ja', axis: 'outward', form: '作ってあげた', transliteration: 'tsukutte ageta', strategy: 'give-verb', lemma: 'あげる', note: 'あげる is 上げる, to raise' },
			{ language: 'ja', axis: 'receiving', form: '作ってもらった', transliteration: 'tsukutte moratta', strategy: 'receive-verb', lemma: 'もらう', note: 'received the cooking' },
			{ language: 'ja', axis: 'deferential', form: '作って差し上げた', transliteration: 'tsukutte sashiageta', strategy: 'give-verb', lemma: 'さしあげる', note: 'さしあげる for serving a superior; くださる is the mirror image, a superior doing it for me' },
			{ language: 'ja', axis: 'adverse', form: '雨に降られた', transliteration: 'ame ni furareta', strategy: 'voice', lemma: '〜られる', note: 'the adversative passive, built on an intransitive verb' },

			// ─── Korean ────────────────────────────────────────────────────────
			{ language: 'ko', axis: 'inward', form: '만들어 줬다', transliteration: 'mandeureo jwotda', strategy: 'give-verb', lemma: '주다' },
			{ language: 'ko', axis: 'outward', form: '만들어 줬다', transliteration: 'mandeureo jwotda', strategy: 'give-verb', lemma: '주다', note: 'the same form as the row above' },
			{ language: 'ko', axis: 'deferential', form: '만들어 드렸다', transliteration: 'mandeureo deuryeotda', strategy: 'give-verb', lemma: '드리다', note: '드리다 when the person served outranks the server' },

			// ─── Mandarin Chinese ──────────────────────────────────────────────
			{ language: 'zh', axis: 'inward', form: '他給我做了飯', transliteration: 'tā gěi wǒ zuò le fàn', strategy: 'give-verb', lemma: '給' },
			{ language: 'zh', axis: 'outward', form: '我給他做了飯', transliteration: 'wǒ gěi tā zuò le fàn', strategy: 'give-verb', lemma: '給', note: 'the same 給, with the pronouns swapped' },

			// ─── Thai ──────────────────────────────────────────────────────────
			{ language: 'th', axis: 'inward', form: 'ทำอาหารให้ผม', transliteration: 'tham aahǎan hâi phǒm', strategy: 'give-verb', lemma: 'ให้' },
			{ language: 'th', axis: 'outward', form: 'ทำอาหารให้เขา', transliteration: 'tham aahǎan hâi kháo', strategy: 'give-verb', lemma: 'ให้', note: 'the object อาหาร has to stand between the verbs; bare ทำให้ is read as a causative' },

			// ─── Vietnamese ────────────────────────────────────────────────────
			{ language: 'vi', axis: 'inward', form: 'nấu cho tôi', strategy: 'give-verb', lemma: 'cho' },
			{ language: 'vi', axis: 'outward', form: 'nấu cho anh ấy', strategy: 'give-verb', lemma: 'cho' },

			// ─── Swahili ───────────────────────────────────────────────────────
			{ language: 'sw', axis: 'inward', form: 'amenipikia', strategy: 'applicative', lemma: '-pikia', note: 'a-me-ni-pik-i-a, he has cooked for me' },
			{ language: 'sw', axis: 'outward', form: 'nimempikia', strategy: 'applicative', lemma: '-pikia', note: 'ni-me-m-pik-i-a, I have cooked for him' },

			// ─── Tagalog ───────────────────────────────────────────────────────
			{ language: 'tl', axis: 'inward', form: 'Ibili mo ako ng tinapay', strategy: 'voice', lemma: 'ibili', note: 'buying rather than cooking; ako, the beneficiary, is the pivot of the clause' },

			// ─── English ───────────────────────────────────────────────────────
			{ language: 'en', axis: 'inward', form: 'she cooked me a meal', strategy: 'case', lemma: 'cook', note: 'no marking on the verb; the beneficiary takes an object slot' },
			{ language: 'en', axis: 'outward', form: 'I cooked her a meal', strategy: 'case', lemma: 'cook' },
			{ language: 'en', axis: 'receiving', form: 'I got her to cook for me', lemma: 'get', note: 'a causative pressed into service; English has no benefactive construction here' },
			{ language: 'en', axis: 'adverse', form: 'the car died on me', strategy: 'adposition', lemma: 'on', note: 'the “on me” of misfortune' },

			// ─── German ────────────────────────────────────────────────────────
			{ language: 'de', axis: 'inward', form: 'sie hat mir Essen gekocht', strategy: 'case', lemma: 'kochen', note: 'a free dative: kochen does not ask for one' },
			{ language: 'de', axis: 'outward', form: 'ich habe ihr Essen gekocht', strategy: 'case', lemma: 'kochen' },
			{ language: 'de', axis: 'adverse', form: 'mir ist der Zug weggefahren', strategy: 'case', lemma: 'wegfahren', note: 'the dative of disadvantage: the train left on me' },

			// ─── Russian ───────────────────────────────────────────────────────
			{ language: 'ru', axis: 'inward', form: 'она мне приготовила еду', transliteration: 'ona mne prigotovila edu', strategy: 'case', lemma: 'приготовить' },
			{ language: 'ru', axis: 'outward', form: 'я ей приготовил еду', transliteration: 'ja ej prigotovil edu', strategy: 'case', lemma: 'приготовить' },

			// ─── French ────────────────────────────────────────────────────────
			{ language: 'fr', axis: 'inward', form: "elle m'a préparé un repas", strategy: 'case', lemma: 'préparer' },
			{ language: 'fr', axis: 'outward', form: 'je lui ai préparé un repas', strategy: 'case', lemma: 'préparer' },

			// ─── Hindi ─────────────────────────────────────────────────────────
			{ language: 'hi', axis: 'inward', form: 'मेरे लिए खाना बना दिया', transliteration: 'mere liye khānā banā diyā', strategy: 'give-verb', lemma: 'देना', note: 'two strategies at once: the के लिए phrase and the vector verb देना' },
			{ language: 'hi', axis: 'outward', form: 'उसके लिए खाना बना दिया', transliteration: 'uske liye khānā banā diyā', strategy: 'give-verb', lemma: 'देना' },

			// ─── Turkish ───────────────────────────────────────────────────────
			{ language: 'tr', axis: 'inward', form: 'benim için yemek yaptı', strategy: 'adposition', lemma: 'için' },
			{ language: 'tr', axis: 'outward', form: 'onun için yemek yaptım', strategy: 'adposition', lemma: 'için' }
		],
		sources: [
			{ source: 'shibatani-1994' },
			{ source: 'yamada-2004' },
			{ source: 'zuniga-kittila-2010' },
			{ source: 'peterson-2007' }
		]
	},
	examples: [
		{
			language: 'ja',
			original: '友達が作ってくれた。',
			transliteration: 'tomodachi ga tsukutte kureta.',
			gloss: 'friend NOM make.GER give.IN.PST',
			literal: 'My friend gave me the making of it.',
			natural: 'A friend made it for me.',
			set: 'direction',
			sources: [{ source: 'yamada-2004' }]
		},
		{
			language: 'ja',
			original: '妹に本を読んであげた。',
			transliteration: 'imōto ni hon o yonde ageta.',
			gloss: 'younger.sister DAT book ACC read.GER give.OUT.PST',
			literal: 'I gave my sister the reading of a book.',
			natural: 'I read my little sister a book.',
			set: 'direction',
			sources: [{ source: 'yamada-2004' }]
		},
		{
			language: 'ja',
			original: '友達に作ってもらった。',
			transliteration: 'tomodachi ni tsukutte moratta.',
			gloss: 'friend DAT make.GER receive.PST',
			literal: 'I received the making of it from a friend.',
			natural: 'I had a friend make it for me.',
			set: 'direction',
			sources: [{ source: 'yamada-2004' }]
		},
		{
			language: 'ko',
			original: '친구가 만들어 줬어.',
			transliteration: 'chingu-ga mandeureo jwosseo.',
			gloss: 'friend NOM make.CVB give.PST',
			literal: 'A friend gave the making of it.',
			natural: 'A friend made it for me.',
			set: 'direction',
			sources: [{ source: 'shibatani-1994' }]
		},
		{
			language: 'zh',
			original: '我給他做了飯。',
			transliteration: 'wǒ gěi tā zuò le fàn.',
			gloss: '1SG for 3SG make PFV meal',
			literal: 'I, for him, made a meal.',
			natural: 'I cooked him a meal.',
			set: 'direction',
			sources: [{ source: 'newman-1996' }]
		},
		{
			language: 'th',
			original: 'เขาทำอาหารให้ผม',
			transliteration: 'kháo tham aahǎan hâi phǒm',
			gloss: '3SG make food give 1SG',
			literal: 'He made food give me.',
			natural: 'He cooked a meal for me.',
			set: 'direction',
			sources: [{ source: 'newman-1996' }]
		},

		{
			language: 'sw',
			original: 'Amepika chakula.',
			gloss: '3SG-PRF-cook-FV food',
			literal: 'He has cooked food.',
			natural: 'He has cooked a meal.',
			set: 'onverb',
			sources: [{ source: 'ashton-1944' }]
		},
		{
			language: 'sw',
			original: 'Amenipikia chakula.',
			gloss: '3SG-PRF-1SG-cook-APPL-FV food',
			literal: 'He has cooked-for me food.',
			natural: 'He has cooked me a meal.',
			set: 'onverb',
			sources: [{ source: 'ashton-1944' }]
		},
		{
			language: 'tl',
			original: 'Ibili mo ako ng tinapay.',
			gloss: 'BV-buy 2SG.GEN 1SG.ANG GEN bread',
			literal: 'Let bread be bought by you with me as the one it is for.',
			natural: 'Buy me some bread.',
			set: 'onverb',
			sources: [{ source: 'schachter-otanes-1972' }]
		},

		{
			language: 'ja',
			original: '雨に降られた。',
			transliteration: 'ame ni furareta.',
			gloss: 'rain DAT fall.PASS.PST',
			literal: 'The rain fell, and I was the one it happened to.',
			natural: 'I got caught in the rain.',
			set: 'adverse',
			sources: [{ source: 'shibatani-1994' }]
		},
		{
			language: 'de',
			original: 'Mir ist der Zug weggefahren.',
			gloss: '1SG.DAT AUX.3SG the train away.drive.PTCP',
			literal: 'To me the train has driven away.',
			natural: 'The train left without me.',
			set: 'adverse'
		},
		{
			language: 'en',
			original: 'The car died on me.',
			gloss: 'the car died on 1SG',
			literal: 'The car died on me.',
			natural: 'The car broke down and left me stranded.',
			set: 'adverse'
		}
	],
	exampleSets: [
		{
			id: 'direction',
			label: 'which way the benefit runs',
			title: 'Who gives, who receives',
			description:
				'Japanese picks a different auxiliary for each direction, and a third for telling the story from the beneficiary’s side. Korean, Mandarin and Thai use one GIVE verb throughout.'
		},
		{
			id: 'onverb',
			label: 'marking it on the verb',
			title: 'The verb takes the beneficiary',
			description:
				'A pair of Swahili sentences differing only in the applicative suffix, which adds an object the bare verb has no room for; then a Tagalog clause where the affix instead selects the person the bread is for as the one the sentence is built on.'
		},
		{
			id: 'adverse',
			label: 'the unwelcome kind',
			title: 'Worse off for it',
			description:
				'Three constructions doing comparable work when the event goes against someone. German reuses the very dative that marks advantage; Japanese switches from the benefactive auxiliaries to the passive, and English from “for” to “on”, so the mirror is a matter of function rather than of form.'
		}
	],
	related: [
		{ kind: 'pattern', slug: 'possession', label: 'Possession' },
		{ kind: 'pattern', slug: 'switching-on', label: 'Switching a Device On' },
		{ kind: 'pathway', slug: 'see-to-try', label: 'From seeing to trying' }
	],
	sources: [
		{ source: 'zuniga-kittila-2010' },
		{ source: 'creissels-2010' },
		{ source: 'kittila-2005' },
		{ source: 'peterson-2007' },
		{ source: 'newman-1996' },
		{ source: 'shibatani-1994' },
		{ source: 'yamada-2004' },
		{ source: 'ashton-1944' },
		{ source: 'schachter-otanes-1972' },
		{ source: 'sato-2008' },
		{ source: 'heine-kuteva-2002' }
	]
};
