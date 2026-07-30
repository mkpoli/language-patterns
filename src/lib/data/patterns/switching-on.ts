import type { Pattern } from '$lib/types';

export const switchingOn: Pattern = {
	slug: 'switching-on',
	title: 'Switching a Device On',
	shortTitle: 'turn on the light, play the music',
	question: 'Which verb makes a machine start working?',
	summary:
		'A lamp, an air conditioner, a tap, recorded music, an alarm clock, a vacuum cleaner and a washing machine each need a verb. Some languages reach for fire, some for opening or rotation, some for the plain act of putting a thing down. The choice also shifts from one thing to the next within a single language: Japanese attaches a light and hangs music, where Korean kindles the light and rotates the washing machine.',
	tags: ['device-operation', 'colexification', 'metaphor', 'metonymy', 'worldwide'],
	strategies: [
		{
			id: 'fire',
			label: 'Fire and light',
			schematic: 'KINDLE / MAKE BRIGHT → switch on',
			description:
				'Away from the switch, this verb lights a lamp or strikes a match. Korean 켜다 kyeoda lights an oil lamp, Spanish encender continues Latin incendere, Swahili washa sets something on fire. Persian روشن کردن rowšan kardan works from brightness instead of flame.',
			color: 'sky'
		},
		{
			id: 'opening',
			label: 'Opening',
			schematic: 'OPEN → switch on',
			description:
				'A door, a lid and a knot take the same verb. Mandarin 開 kāi, Turkish açmak, Thai เปิด pə̀ət, Vietnamese mở and Greek ανοίγω all reach the switch this way. In Turkish and Thai one verb covers the lamp, the air conditioner and the music alike.',
			color: 'amber'
		},
		{
			id: 'turning',
			label: 'Turning',
			schematic: 'TURN / TWIST / ROTATE → switch on',
			description:
				'Knobs and taps left their mark here. English turn on and Korean 틀다 teulda come from twisting a control, while Korean 돌리다 dollida, Japanese 回す mawasu and Indonesian memutar name a drum or a disc going round.',
			color: 'emerald'
		},
		{
			id: 'joining',
			label: 'Connecting and switching',
			schematic: 'JOIN / FLIP → switch on',
			description:
				'Making and breaking a connection. Russian включить and Polish włączyć are built on joining and enclosing, calqued on Latin inclūdere, and Portuguese ligar is Latin ligāre, to bind. German einschalten uses schalten, to shift; Vietnamese bật snaps.',
			color: 'slate'
		},
		{
			id: 'placing',
			label: 'Placing',
			schematic: 'PUT / HANG / LET GO → switch on',
			description:
				'Here the thing gets put somewhere, or let loose. French mettre, Spanish poner, Greek βάζω and Hebrew לשים lasim all put music on, where Mandarin 放 fàng and Polish puścić release it. Japanese つける tsukeru attaches and かける kakeru hangs.',
			color: 'rose'
		},
		{
			id: 'running',
			label: 'Running and doing',
			schematic: 'MAKE GO / DO THE JOB → switch on',
			description:
				'The verb names the machine working or the job getting done. Hindi चलाना calānā is the causative of “go”; Turkish çalıştırmak makes it work; Indonesian menghidupkan makes it live, and mematikan makes it die; German staubsaugen and Polish odkurzać are built out of the appliance itself.',
			color: 'violet'
		}
	],
	attestations: [
		{ language: 'en', strategy: 'turning', expression: 'turn on the light', confidence: 'high', note: 'from rotary switches and taps', sources: [{ source: 'mkpoli-2022-collocations' }] },
		{ language: 'en', strategy: 'joining', expression: 'switch on', confidence: 'high', sources: [{ source: 'mkpoli-2022-collocations' }] },
		{ language: 'en', strategy: 'running', expression: 'vacuum the floor', confidence: 'high', note: 'denominal verb from the appliance', sources: [{ source: 'mkpoli-2022-collocations' }] },

		{ language: 'zh', strategy: 'opening', expression: '開燈 kāi dēng', confidence: 'high', sources: [{ source: 'wiktionary-kai' }, { source: 'mkpoli-2022-collocations' }] },
		{ language: 'zh', strategy: 'placing', expression: '放音樂 fàng yīnyuè', confidence: 'high', sources: [{ source: 'wiktionary-fang' }, { source: 'mkpoli-2022-collocations' }] },
		{ language: 'zh', strategy: 'running', expression: '用洗衣機 yòng xǐyījī', confidence: 'high', sources: [{ source: 'mkpoli-2022-collocations' }] },

		{ language: 'ja', strategy: 'placing', expression: '電気をつける denki o tsukeru', confidence: 'high', note: 'つける is 付ける, to attach; the spelling 点ける marks the lighting sense', sources: [{ source: 'wiktionary-tsukeru' }, { source: 'yuki7979seoul-2022-collocations' }, { source: 'mkpoli-2022-collocations' }] },
		{ language: 'ja', strategy: 'turning', expression: '洗濯機を回す sentakuki o mawasu', confidence: 'high', sources: [{ source: 'yuki7979seoul-2022-collocations' }, { source: 'mkpoli-2022-collocations' }] },

		{ language: 'ko', strategy: 'fire', expression: '불을 켜다 bul-eul kyeoda', confidence: 'high', sources: [{ source: 'wiktionary-kyeoda' }, { source: 'yuki7979seoul-2022-collocations' }, { source: 'mkpoli-2022-collocations' }] },
		{ language: 'ko', strategy: 'turning', expression: '에어컨을 틀다 eeokeon-eul teulda', confidence: 'high', note: '틀다 is to twist; 돌리다 is to make something rotate', sources: [{ source: 'wiktionary-teulda' }, { source: 'wiktionary-dollida' }, { source: 'yuki7979seoul-2022-collocations' }, { source: 'mkpoli-2022-collocations' }] },

		{ language: 'fr', strategy: 'fire', expression: 'allumer la lumière', confidence: 'high', sources: [{ source: 'wiktionary-allumer' }] },
		{ language: 'fr', strategy: 'placing', expression: 'mettre de la musique', confidence: 'high' },
		{ language: 'fr', strategy: 'running', expression: "passer l'aspirateur", confidence: 'high' },

		{ language: 'es', strategy: 'fire', expression: 'encender la luz', confidence: 'high', sources: [{ source: 'wiktionary-encender' }] },
		{ language: 'es', strategy: 'placing', expression: 'poner música', confidence: 'high' },
		{ language: 'es', strategy: 'running', expression: 'pasar la aspiradora', confidence: 'high' },

		{ language: 'it', strategy: 'fire', expression: 'accendere la luce', confidence: 'high' },
		{ language: 'it', strategy: 'placing', expression: 'mettere la musica', confidence: 'high' },
		{ language: 'it', strategy: 'running', expression: 'fare la lavatrice', confidence: 'high' },

		{ language: 'pt', strategy: 'joining', expression: 'ligar o ar-condicionado', confidence: 'high', note: 'ligar is Latin ligāre, to bind', sources: [{ source: 'wiktionary-ligar' }] },
		{ language: 'pt', strategy: 'fire', expression: 'acender a luz', confidence: 'high' },
		{ language: 'pt', strategy: 'placing', expression: 'pôr música', confidence: 'high' },

		{ language: 'de', strategy: 'joining', expression: 'das Licht einschalten', confidence: 'high', sources: [{ source: 'wiktionary-einschalten' }] },
		{ language: 'de', strategy: 'placing', expression: 'Musik auflegen', confidence: 'high', note: 'auflegen, to lay on — from the record player' },
		{ language: 'de', strategy: 'running', expression: 'staubsaugen', confidence: 'high' },

		{ language: 'nl', strategy: 'placing', expression: 'het licht aanzetten', confidence: 'high', note: 'zetten, to set; the particle aan carries “on”' },
		{ language: 'nl', strategy: 'running', expression: 'stofzuigen', confidence: 'high' },

		{ language: 'ru', strategy: 'joining', expression: 'включить свет vključit’ svet', confidence: 'high', sources: [{ source: 'wiktionary-vkljuchit' }] },
		{ language: 'ru', strategy: 'running', expression: 'пропылесосить propylesosit’', confidence: 'high' },

		{ language: 'pl', strategy: 'fire', expression: 'zapalić światło', confidence: 'high' },
		{ language: 'pl', strategy: 'joining', expression: 'włączyć klimatyzację', confidence: 'high', sources: [{ source: 'wiktionary-wlaczyc' }] },
		{ language: 'pl', strategy: 'placing', expression: 'puścić muzykę', confidence: 'high', note: 'puścić, to let go — the same move as Mandarin 放', sources: [{ source: 'wiktionary-puscic' }] },
		{ language: 'pl', strategy: 'running', expression: 'odkurzać', confidence: 'high' },

		{ language: 'el', strategy: 'fire', expression: 'ανάβω το φως anávo to fos', confidence: 'high', sources: [{ source: 'wiktionary-anavo' }] },
		{ language: 'el', strategy: 'opening', expression: 'ανοίγω το κλιματιστικό', confidence: 'high' },
		{ language: 'el', strategy: 'placing', expression: 'βάζω μουσική vázo mousikí', confidence: 'high' },

		{ language: 'tr', strategy: 'opening', expression: 'ışığı açmak', confidence: 'high', sources: [{ source: 'wiktionary-acmak' }] },
		{ language: 'tr', strategy: 'running', expression: 'çamaşır makinesini çalıştırmak', confidence: 'high' },

		{ language: 'th', strategy: 'opening', expression: 'เปิดไฟ pə̀ət fai', confidence: 'high', sources: [{ source: 'wiktionary-poet' }] },
		{ language: 'th', strategy: 'running', expression: 'ดูดฝุ่น dùut fùn', confidence: 'medium', note: 'literally “suck dust”' },

		{ language: 'vi', strategy: 'joining', expression: 'bật đèn', confidence: 'high', note: 'bật, to snap or bounce', sources: [{ source: 'wiktionary-bat' }] },
		{ language: 'vi', strategy: 'opening', expression: 'mở nhạc', confidence: 'high' },
		{ language: 'vi', strategy: 'running', expression: 'hút bụi', confidence: 'medium' },

		{ language: 'id', strategy: 'fire', expression: 'menyalakan lampu', confidence: 'high', note: 'nyala is flame' },
		{ language: 'id', strategy: 'running', expression: 'menghidupkan AC', confidence: 'high', note: 'hidup is alive; mati, dead, turns it off', sources: [{ source: 'wiktionary-menghidupkan' }, { source: 'wiktionary-mematikan' }] },
		{ language: 'id', strategy: 'turning', expression: 'memutar musik', confidence: 'high' },

		{ language: 'hi', strategy: 'fire', expression: 'बत्ती जलाना battī jalānā', confidence: 'high', sources: [{ source: 'wiktionary-jalana' }] },
		{ language: 'hi', strategy: 'running', expression: 'मशीन चलाना maśīn calānā', confidence: 'high', sources: [{ source: 'wiktionary-chalana' }] },

		{ language: 'fa', strategy: 'fire', expression: 'چراغ را روشن کردن čerâq râ rowšan kardan', confidence: 'high', note: 'rowšan is bright' },
		{ language: 'fa', strategy: 'placing', expression: 'آهنگ گذاشتن âhang gozâštan', confidence: 'medium' },

		{ language: 'he', strategy: 'fire', expression: 'להדליק אור lehadlik or', confidence: 'high' },
		{ language: 'he', strategy: 'placing', expression: 'לשים מוזיקה lasim muzika', confidence: 'medium' },
		{ language: 'he', strategy: 'running', expression: 'להפעיל מכונת כביסה lehaf‘il mekhonat kvisa', confidence: 'medium', note: 'lehaf‘il, to activate, from פעל, to act' },

		{ language: 'sw', strategy: 'fire', expression: 'kuwasha taa', confidence: 'high', note: 'washa, to set on fire; zima, to extinguish, turns it off', sources: [{ source: 'wiktionary-washa' }, { source: 'wiktionary-zima' }] },

		{ language: 'cy', strategy: 'fire', expression: "cynnau'r golau", confidence: 'high', sources: [{ source: 'wiktionary-cynnau' }] },

		// Verbs for switching a device on generally, from the Wiktionary translation
		// table; the basic sense of each verb comes from its own entry. These carry no
		// appliance of their own, so they stay out of the grid and off the map.
		{ language: 'ca', strategy: 'fire', expression: 'encendre', confidence: 'high', note: 'sets fire to something', sources: [{ source: 'wiktionary-turn-on' }, { source: 'wiktionary-encendre' }] },
		{ language: 'gl', strategy: 'fire', expression: 'acender', confidence: 'high', note: 'lights a fire or a match', sources: [{ source: 'wiktionary-turn-on' }, { source: 'wiktionary-acender' }] },
		{ language: 'oc', strategy: 'fire', expression: 'alucar', confidence: 'high', note: 'lights something', sources: [{ source: 'wiktionary-turn-on' }, { source: 'wiktionary-alucar' }] },
		{ language: 'da', strategy: 'fire', expression: 'tænde', confidence: 'high', note: 'kindles, ignites, sets fire to', sources: [{ source: 'wiktionary-turn-on' }, { source: 'wiktionary-taende' }] },
		{ language: 'is', strategy: 'fire', expression: 'kveikja á', confidence: 'high', note: 'kindles, and starts a fire', sources: [{ source: 'wiktionary-turn-on' }, { source: 'wiktionary-kveikja' }] },
		{ language: 'yi', strategy: 'fire', expression: 'אָנצינדן ontsindn', confidence: 'high', note: 'lights, sparks, kindles', sources: [{ source: 'wiktionary-turn-on' }, { source: 'wiktionary-ontsindn' }] },
		{ language: 'ro', strategy: 'fire', expression: 'aprinde', confidence: 'high', note: 'lights a fire, a candle, a lamp', sources: [{ source: 'wiktionary-turn-on' }, { source: 'wiktionary-aprinde' }] },
		{ language: 'mlt', strategy: 'fire', expression: 'xegħel', confidence: 'high', note: 'lights a candle', sources: [{ source: 'wiktionary-turn-on' }, { source: 'wiktionary-xeghel' }] },
		{ language: 'af', strategy: 'joining', expression: 'aanskakel', confidence: 'high', note: 'skakel, to switch', sources: [{ source: 'wiktionary-turn-on' }, { source: 'wiktionary-aanskakel' }] },
		{ language: 'hy', strategy: 'joining', expression: 'միացնել miats‘nel', confidence: 'high', note: 'joins, unites, connects', sources: [{ source: 'wiktionary-turn-on' }, { source: 'wiktionary-miatsnel' }] },
		{ language: 'lt', strategy: 'joining', expression: 'įjungti', confidence: 'high', note: 'į- plus jungti, to connect or yoke', sources: [{ source: 'wiktionary-turn-on' }, { source: 'wiktionary-jungti' }] },
		{ language: 'lv', strategy: 'joining', expression: 'ieslēgt', confidence: 'high', note: 'ie- plus slēgt, to close', sources: [{ source: 'wiktionary-turn-on' }, { source: 'wiktionary-slegt' }] },
		{ language: 'cs', strategy: 'joining', expression: 'zapnout', confidence: 'high', sources: [{ source: 'wiktionary-turn-on' }, { source: 'wiktionary-zapnout' }] },
		{ language: 'sk', strategy: 'joining', expression: 'zapnúť', confidence: 'high', sources: [{ source: 'wiktionary-turn-on' }, { source: 'wiktionary-zapnut' }] },
		{ language: 'sl', strategy: 'joining', expression: 'vklopiti', confidence: 'high', sources: [{ source: 'wiktionary-turn-on' }, { source: 'wiktionary-vklopiti' }] },
		{ language: 'hu', strategy: 'joining', expression: 'bekapcsol', confidence: 'high', note: 'kapcsol, to switch, connect or join', sources: [{ source: 'wiktionary-turn-on' }, { source: 'wiktionary-kapcsol' }] },
		{ language: 'bg', strategy: 'joining', expression: 'включвам vključvam', confidence: 'high', note: 'the Slavic в- plus ключ-, as in Russian включить', sources: [{ source: 'wiktionary-turn-on' }, { source: 'wiktionary-vkljucvam' }] },
		{ language: 'be', strategy: 'joining', expression: 'уключыць uključyć', confidence: 'high', note: 'the same в-ключ- formation', sources: [{ source: 'wiktionary-turn-on' }, { source: 'wiktionary-ukljucyc' }] },
		{ language: 'mk', strategy: 'joining', expression: 'вклучува vklučuva', confidence: 'high', note: 'the same в-ключ- formation', sources: [{ source: 'wiktionary-turn-on' }, { source: 'wiktionary-vklucuva' }] },
		{ language: 'uk', strategy: 'joining', expression: 'вмикати vmykaty', confidence: 'high', note: 'в- plus микати; включати stands beside it', sources: [{ source: 'wiktionary-turn-on' }, { source: 'wiktionary-vmykaty' }] },
		{ language: 'my', strategy: 'opening', expression: 'ဖွင့် hpwin', confidence: 'high', note: 'opens; the dictionary names the tap for this sense', sources: [{ source: 'wiktionary-turn-on' }, { source: 'wiktionary-hpwin' }] },
		{ language: 'km', strategy: 'opening', expression: 'បើក baək', confidence: 'high', note: 'opens, uncovers, reveals', sources: [{ source: 'wiktionary-turn-on' }, { source: 'wiktionary-baek' }] },
		{ language: 'lo', strategy: 'opening', expression: 'ເປີດ pòet', confidence: 'high', note: 'opens', sources: [{ source: 'wiktionary-turn-on' }, { source: 'wiktionary-poet-lo' }] },
		{ language: 'tl', strategy: 'running', expression: 'paandarin', confidence: 'high', note: 'causes it to work or move', sources: [{ source: 'wiktionary-turn-on' }, { source: 'wiktionary-paandarin' }] },
		{ language: 'ar', strategy: 'running', expression: 'شغّل šaġġala', confidence: 'high', note: 'from شغل, to occupy or keep busy', sources: [{ source: 'wiktionary-turn-on' }, { source: 'wiktionary-shaghala' }] },
		{ language: 'sv', strategy: 'placing', expression: 'sätta på', confidence: 'high', note: 'sätta, to put or place', sources: [{ source: 'wiktionary-turn-on' }, { source: 'wiktionary-satta' }] }
	],
	paradigm: {
		title: 'Which verb for which appliance',
		summary:
			'Read across a row for one language handling seven things; read down a column for one thing across languages. Columns sit in clustered order, so the pairs that most often share a verb stand side by side. Fire dominates the lamp column, the tap draws opening verbs even where nothing electric is involved, and the vacuum cleaner takes a verb of its own almost everywhere. Where a language reuses one verb down several rows, the run of a single colour shows it.',
		axes: [
			{ id: 'light', label: 'the light', description: 'An electric lamp, heir to the candle and the oil lamp.' },
			{ id: 'ac', label: 'the air conditioner', description: 'A machine with no pre-electric ancestor to borrow words from.' },
			{ id: 'tap', label: 'the tap', description: 'Not electric at all — a valve you open, and the source of English “turn on”.' },
			{ id: 'music', label: 'music', description: 'Putting on a record, a tape, a file.' },
			{ id: 'alarm', label: 'the alarm clock', description: 'Set rather than switched: it has to be told a time.' },
			{ id: 'vacuum', label: 'the vacuum cleaner', description: 'A hand tool that has to be pushed across a floor.' },
			{ id: 'washer', label: 'the washing machine', description: 'A drum that turns for an hour unattended.' }
		],
		cells: [
			// ─── English ───────────────────────────────────────────────────────
			{ language: 'en', axis: 'light', form: 'turn on the light', strategy: 'turning', lemma: 'turn on' },
			{ language: 'en', axis: 'ac', form: 'turn on the AC', strategy: 'turning', lemma: 'turn on' },
			{ language: 'en', axis: 'tap', form: 'turn on the tap', strategy: 'turning', lemma: 'turn on', note: 'the tap is where “turn on” came from' },
			{ language: 'en', axis: 'music', form: 'put on music / play music', strategy: 'placing', lemma: 'put on' },
			{ language: 'en', axis: 'alarm', form: 'set the alarm', strategy: 'placing', lemma: 'set' },
			{ language: 'en', axis: 'vacuum', form: 'vacuum (the floor)', strategy: 'running', lemma: 'vacuum', note: 'the appliance became the verb' },
			{ language: 'en', axis: 'washer', form: 'do the washing / run a load', strategy: 'running', lemma: 'do' },

			// ─── Mandarin Chinese ──────────────────────────────────────────────
			{ language: 'zh', axis: 'light', form: '開燈 kāi dēng', strategy: 'opening', lemma: '開', note: 'open the light' },
			{ language: 'zh', axis: 'ac', form: '開冷氣 / 開空調 kāi lěngqì', strategy: 'opening', lemma: '開', note: 'open the cold air' },
			{ language: 'zh', axis: 'tap', form: '開水龍頭 kāi shuǐlóngtóu', strategy: 'opening', lemma: '開', note: 'open the water-dragon-head' },
			{ language: 'zh', axis: 'music', form: '放音樂 fàng yīnyuè', strategy: 'placing', lemma: '放', note: 'release the music' },
			{ language: 'zh', axis: 'alarm', form: '定鬧鐘 dìng nàozhōng', strategy: 'placing', lemma: '定', note: 'fix the alarm clock' },
			{ language: 'zh', axis: 'vacuum', form: '用吸塵器 yòng xīchénqì', strategy: 'running', lemma: '用', note: 'use the dust-sucker' },
			{ language: 'zh', axis: 'washer', form: '用洗衣機 yòng xǐyījī', strategy: 'running', lemma: '用', note: 'use the clothes-washer' },

			// ─── Japanese ──────────────────────────────────────────────────────
			{ language: 'ja', axis: 'light', form: '電気をつける denki o tsukeru', strategy: 'placing', lemma: 'つける', note: 'attach the electricity; spelled 点ける in the lighting sense' },
			{ language: 'ja', axis: 'ac', form: 'エアコンをつける eakon o tsukeru', strategy: 'placing', lemma: 'つける', note: 'attach the air conditioner' },
			{ language: 'ja', axis: 'tap', form: '蛇口をひねる jaguchi o hineru', strategy: 'turning', lemma: 'ひねる', note: 'twist the tap' },
			{ language: 'ja', axis: 'music', form: '音楽をかける ongaku o kakeru', strategy: 'placing', lemma: 'かける', note: 'hang the music' },
			{ language: 'ja', axis: 'alarm', form: '目覚ましをかける mezamashi o kakeru', strategy: 'placing', lemma: 'かける', note: 'hang the alarm' },
			{ language: 'ja', axis: 'vacuum', form: '掃除機をかける sōjiki o kakeru', strategy: 'placing', lemma: 'かける', note: 'hang the cleaner' },
			{ language: 'ja', axis: 'washer', form: '洗濯機をまわす sentakuki o mawasu', strategy: 'turning', lemma: 'まわす', note: 'turn the washer' },

			// ─── Korean ────────────────────────────────────────────────────────
			{ language: 'ko', axis: 'light', form: '불을 켜다 bul-eul kyeoda', strategy: 'fire', lemma: '켜다', note: 'kindle the light' },
			{ language: 'ko', axis: 'ac', form: '에어컨을 틀다 eeokeon-eul teulda', strategy: 'turning', lemma: '틀다', note: 'twist the air conditioner' },
			{ language: 'ko', axis: 'tap', form: '수도꼭지를 틀다 sudokkokji-reul teulda', strategy: 'turning', lemma: '틀다', note: 'twist the tap' },
			{ language: 'ko', axis: 'music', form: '음악을 틀다 eumak-eul teulda', strategy: 'turning', lemma: '틀다', note: 'twist the music' },
			{ language: 'ko', axis: 'alarm', form: '알람을 맞추다 allam-eul matchuda', strategy: 'placing', lemma: '맞추다', note: 'set it to match' },
			{ language: 'ko', axis: 'vacuum', form: '청소기를 돌리다 cheongsogi-reul dollida', strategy: 'turning', lemma: '돌리다', note: 'make the cleaner rotate' },
			{ language: 'ko', axis: 'washer', form: '세탁기를 돌리다 setakgi-reul dollida', strategy: 'turning', lemma: '돌리다', note: 'make the washer rotate' },

			// ─── French ────────────────────────────────────────────────────────
			{ language: 'fr', axis: 'light', form: 'allumer la lumière', strategy: 'fire', lemma: 'allumer', note: 'light it up' },
			{ language: 'fr', axis: 'ac', form: 'allumer / mettre la clim', strategy: 'fire', lemma: 'allumer' },
			{ language: 'fr', axis: 'tap', form: 'ouvrir le robinet', strategy: 'opening', lemma: 'ouvrir', note: 'open the tap' },
			{ language: 'fr', axis: 'music', form: 'mettre de la musique', strategy: 'placing', lemma: 'mettre', note: 'put some music' },
			{ language: 'fr', axis: 'alarm', form: 'mettre le réveil', strategy: 'placing', lemma: 'mettre', note: 'put the alarm' },
			{ language: 'fr', axis: 'vacuum', form: "passer l'aspirateur", strategy: 'running', lemma: 'passer', note: 'pass the vacuum' },
			{ language: 'fr', axis: 'washer', form: 'lancer une machine', strategy: 'running', lemma: 'lancer', note: 'launch a machine' },

			// ─── Spanish ───────────────────────────────────────────────────────
			{ language: 'es', axis: 'light', form: 'encender la luz', strategy: 'fire', lemma: 'encender', note: 'from Latin incendere' },
			{ language: 'es', axis: 'ac', form: 'poner el aire', strategy: 'placing', lemma: 'poner', note: 'put the air' },
			{ language: 'es', axis: 'tap', form: 'abrir el grifo', strategy: 'opening', lemma: 'abrir', note: 'open the tap' },
			{ language: 'es', axis: 'music', form: 'poner música', strategy: 'placing', lemma: 'poner' },
			{ language: 'es', axis: 'alarm', form: 'poner el despertador', strategy: 'placing', lemma: 'poner' },
			{ language: 'es', axis: 'vacuum', form: 'pasar la aspiradora', strategy: 'running', lemma: 'pasar', note: 'pass the vacuum' },
			{ language: 'es', axis: 'washer', form: 'poner la lavadora', strategy: 'placing', lemma: 'poner' },

			// ─── Italian ───────────────────────────────────────────────────────
			{ language: 'it', axis: 'light', form: 'accendere la luce', strategy: 'fire', lemma: 'accendere', note: 'from Latin accendere, to kindle' },
			{ language: 'it', axis: 'ac', form: 'accendere il condizionatore', strategy: 'fire', lemma: 'accendere' },
			{ language: 'it', axis: 'tap', form: 'aprire il rubinetto', strategy: 'opening', lemma: 'aprire', note: 'open the tap' },
			{ language: 'it', axis: 'music', form: 'mettere la musica', strategy: 'placing', lemma: 'mettere' },
			{ language: 'it', axis: 'alarm', form: 'mettere la sveglia', strategy: 'placing', lemma: 'mettere' },
			{ language: 'it', axis: 'vacuum', form: "passare l'aspirapolvere", strategy: 'running', lemma: 'passare' },
			{ language: 'it', axis: 'washer', form: 'fare la lavatrice', strategy: 'running', lemma: 'fare', note: 'do the washer' },

			// ─── Portuguese ────────────────────────────────────────────────────
			{ language: 'pt', axis: 'light', form: 'acender / ligar a luz', strategy: 'fire', lemma: 'acender' },
			{ language: 'pt', axis: 'ac', form: 'ligar o ar-condicionado', strategy: 'joining', lemma: 'ligar', note: 'connect it, from Latin ligāre' },
			{ language: 'pt', axis: 'tap', form: 'abrir a torneira', strategy: 'opening', lemma: 'abrir', note: 'open the tap' },
			{ language: 'pt', axis: 'music', form: 'pôr música', strategy: 'placing', lemma: 'pôr' },
			{ language: 'pt', axis: 'alarm', form: 'pôr o despertador', strategy: 'placing', lemma: 'pôr' },
			{ language: 'pt', axis: 'vacuum', form: 'passar o aspirador', strategy: 'running', lemma: 'passar' },
			{ language: 'pt', axis: 'washer', form: 'pôr a máquina de lavar', strategy: 'placing', lemma: 'pôr' },

			// ─── German ────────────────────────────────────────────────────────
			{ language: 'de', axis: 'light', form: 'das Licht einschalten / anmachen', strategy: 'joining', lemma: 'einschalten', note: 'schalten, to shift a switch' },
			{ language: 'de', axis: 'ac', form: 'die Klimaanlage einschalten', strategy: 'joining', lemma: 'einschalten' },
			{ language: 'de', axis: 'tap', form: 'den Wasserhahn aufdrehen', strategy: 'turning', lemma: 'aufdrehen', note: 'screw it open' },
			{ language: 'de', axis: 'music', form: 'Musik auflegen / anmachen', strategy: 'placing', lemma: 'auflegen', note: 'lay the record on' },
			{ language: 'de', axis: 'alarm', form: 'den Wecker stellen', strategy: 'placing', lemma: 'stellen', note: 'place the alarm' },
			{ language: 'de', axis: 'vacuum', form: 'staubsaugen', strategy: 'running', lemma: 'staubsaugen', note: 'dust-suck' },
			{ language: 'de', axis: 'washer', form: 'die Waschmaschine anstellen', strategy: 'placing', lemma: 'anstellen', note: 'stellen, to set' },

			// ─── Dutch ─────────────────────────────────────────────────────────
			{ language: 'nl', axis: 'light', form: 'het licht aandoen / aanzetten', strategy: 'placing', lemma: 'aanzetten', note: 'set it on' },
			{ language: 'nl', axis: 'ac', form: 'de airco aanzetten', strategy: 'placing', lemma: 'aanzetten' },
			{ language: 'nl', axis: 'tap', form: 'de kraan opendraaien', strategy: 'turning', lemma: 'opendraaien', note: 'turn it open' },
			{ language: 'nl', axis: 'music', form: 'muziek opzetten', strategy: 'placing', lemma: 'opzetten', note: 'set it up' },
			{ language: 'nl', axis: 'alarm', form: 'de wekker zetten', strategy: 'placing', lemma: 'zetten', note: 'set the alarm' },
			{ language: 'nl', axis: 'vacuum', form: 'stofzuigen', strategy: 'running', lemma: 'stofzuigen', note: 'dust-suck' },
			{ language: 'nl', axis: 'washer', form: 'de wasmachine aanzetten', strategy: 'placing', lemma: 'aanzetten' },

			// ─── Russian ───────────────────────────────────────────────────────
			{ language: 'ru', axis: 'light', form: 'включить свет vključit’ svet', strategy: 'joining', lemma: 'включить', note: 'calqued on Latin inclūdere, to enclose' },
			{ language: 'ru', axis: 'ac', form: 'включить кондиционер', strategy: 'joining', lemma: 'включить' },
			{ language: 'ru', axis: 'tap', form: 'открыть кран otkryt’ kran', strategy: 'opening', lemma: 'открыть', note: 'open the tap' },
			{ language: 'ru', axis: 'music', form: 'включить / поставить музыку', strategy: 'joining', lemma: 'включить', note: 'поставить, to stand it up, is the placing alternative' },
			{ language: 'ru', axis: 'alarm', form: 'поставить будильник', strategy: 'placing', lemma: 'поставить', note: 'stand the alarm up' },
			{ language: 'ru', axis: 'vacuum', form: 'пропылесосить propylesosit’', strategy: 'running', lemma: 'пропылесосить', note: 'a verb made from пылесос, dust-sucker' },
			{ language: 'ru', axis: 'washer', form: 'запустить стирку', strategy: 'running', lemma: 'запустить', note: 'launch the wash' },

			// ─── Polish ────────────────────────────────────────────────────────
			{ language: 'pl', axis: 'light', form: 'zapalić światło', strategy: 'fire', lemma: 'zapalić', note: 'ignite the light' },
			{ language: 'pl', axis: 'ac', form: 'włączyć klimatyzację', strategy: 'joining', lemma: 'włączyć', note: 'w- plus łączyć, to join' },
			{ language: 'pl', axis: 'tap', form: 'odkręcić kran', strategy: 'turning', lemma: 'odkręcić', note: 'unscrew the tap' },
			{ language: 'pl', axis: 'music', form: 'puścić muzykę', strategy: 'placing', lemma: 'puścić', note: 'let the music go' },
			{ language: 'pl', axis: 'alarm', form: 'nastawić budzik', strategy: 'placing', lemma: 'nastawić', note: 'set the alarm' },
			{ language: 'pl', axis: 'vacuum', form: 'odkurzać', strategy: 'running', lemma: 'odkurzać', note: 'de-dust' },
			{ language: 'pl', axis: 'washer', form: 'nastawić pralkę', strategy: 'placing', lemma: 'nastawić', note: 'set the washer' },

			// ─── Greek (Modern) ────────────────────────────────────────────────
			{ language: 'el', axis: 'light', form: 'ανάβω το φως anávo to fos', strategy: 'fire', lemma: 'ανάβω', note: 'from Ancient Greek ἀνάπτω, to kindle' },
			{ language: 'el', axis: 'ac', form: 'ανοίγω το κλιματιστικό', strategy: 'opening', lemma: 'ανοίγω' },
			{ language: 'el', axis: 'tap', form: 'ανοίγω τη βρύση', strategy: 'opening', lemma: 'ανοίγω', note: 'open the tap' },
			{ language: 'el', axis: 'music', form: 'βάζω μουσική vázo mousikí', strategy: 'placing', lemma: 'βάζω' },
			{ language: 'el', axis: 'alarm', form: 'βάζω ξυπνητήρι', strategy: 'placing', lemma: 'βάζω', note: 'put the alarm' },
			{ language: 'el', axis: 'washer', form: 'βάζω πλυντήριο vázo plyntírio', strategy: 'placing', lemma: 'βάζω', note: 'put the washer' },

			// ─── Turkish ───────────────────────────────────────────────────────
			{ language: 'tr', axis: 'light', form: 'ışığı açmak', strategy: 'opening', lemma: 'açmak', note: 'open the light' },
			{ language: 'tr', axis: 'ac', form: 'klimayı açmak', strategy: 'opening', lemma: 'açmak' },
			{ language: 'tr', axis: 'tap', form: 'musluğu açmak', strategy: 'opening', lemma: 'açmak', note: 'open the tap' },
			{ language: 'tr', axis: 'music', form: 'müzik açmak', strategy: 'opening', lemma: 'açmak' },
			{ language: 'tr', axis: 'alarm', form: 'alarm kurmak', strategy: 'placing', lemma: 'kurmak', note: 'set it up; the same verb winds a clock' },
			{ language: 'tr', axis: 'vacuum', form: 'süpürmek', strategy: 'running', lemma: 'süpürmek', note: 'sweep — the same verb as with a broom' },
			{ language: 'tr', axis: 'washer', form: 'çamaşır makinesini çalıştırmak', strategy: 'running', lemma: 'çalıştırmak', note: 'make the washer work' },

			// ─── Thai ──────────────────────────────────────────────────────────
			{ language: 'th', axis: 'light', form: 'เปิดไฟ pə̀ət fai', strategy: 'opening', lemma: 'เปิด', note: 'open the light' },
			{ language: 'th', axis: 'ac', form: 'เปิดแอร์ pə̀ət ɛɛ', strategy: 'opening', lemma: 'เปิด' },
			{ language: 'th', axis: 'tap', form: 'เปิดก๊อกน้ำ pə̀ət kɔ́k náam', strategy: 'opening', lemma: 'เปิด', note: 'open the tap' },
			{ language: 'th', axis: 'music', form: 'เปิดเพลง pə̀ət phleeng', strategy: 'opening', lemma: 'เปิด' },
			{ language: 'th', axis: 'alarm', form: 'ตั้งนาฬิกาปลุก tâng naalikaa plùk', strategy: 'placing', lemma: 'ตั้ง', note: 'set the waking clock' },
			{ language: 'th', axis: 'vacuum', form: 'ดูดฝุ่น dùut fùn', strategy: 'running', lemma: 'ดูดฝุ่น', note: 'suck dust' },
			{ language: 'th', axis: 'washer', form: 'ซักผ้า sák phâa', strategy: 'running', lemma: 'ซัก', note: 'wash the clothes' },

			// ─── Vietnamese ────────────────────────────────────────────────────
			{ language: 'vi', axis: 'light', form: 'bật đèn', strategy: 'joining', lemma: 'bật', note: 'snap the lamp' },
			{ language: 'vi', axis: 'ac', form: 'bật điều hòa', strategy: 'joining', lemma: 'bật' },
			{ language: 'vi', axis: 'tap', form: 'mở vòi nước', strategy: 'opening', lemma: 'mở', note: 'open the tap' },
			{ language: 'vi', axis: 'music', form: 'mở nhạc / bật nhạc', strategy: 'opening', lemma: 'mở', note: 'open the music' },
			{ language: 'vi', axis: 'alarm', form: 'đặt báo thức', strategy: 'placing', lemma: 'đặt', note: 'place the alarm' },
			{ language: 'vi', axis: 'vacuum', form: 'hút bụi', strategy: 'running', lemma: 'hút bụi', note: 'suck dust' },

			// ─── Indonesian ────────────────────────────────────────────────────
			{ language: 'id', axis: 'light', form: 'menyalakan lampu', strategy: 'fire', lemma: 'menyalakan', note: 'from nyala, flame' },
			{ language: 'id', axis: 'ac', form: 'menghidupkan AC', strategy: 'running', lemma: 'menghidupkan', note: 'make it live' },
			{ language: 'id', axis: 'tap', form: 'membuka keran', strategy: 'opening', lemma: 'membuka', note: 'open the tap' },
			{ language: 'id', axis: 'music', form: 'memutar musik', strategy: 'turning', lemma: 'memutar', note: 'from putar, to turn' },
			{ language: 'id', axis: 'alarm', form: 'menyetel alarm', strategy: 'placing', lemma: 'menyetel', note: 'set the alarm' },
			{ language: 'id', axis: 'vacuum', form: 'menyedot debu', strategy: 'running', lemma: 'menyedot', note: 'suck dust' },

			// ─── Hindi ─────────────────────────────────────────────────────────
			{ language: 'hi', axis: 'light', form: 'बत्ती जलाना battī jalānā', strategy: 'fire', lemma: 'जलाना', note: 'burn the light' },
			{ language: 'hi', axis: 'ac', form: 'एसी चलाना esī calānā', strategy: 'running', lemma: 'चलाना', note: 'make the AC go' },
			{ language: 'hi', axis: 'tap', form: 'नल खोलना nal kholnā', strategy: 'opening', lemma: 'खोलना', note: 'open the tap' },
			{ language: 'hi', axis: 'music', form: 'गाना बजाना gānā bajānā', strategy: 'running', lemma: 'बजाना', note: 'make the song sound' },
			{ language: 'hi', axis: 'alarm', form: 'अलार्म लगाना alārm lagānā', strategy: 'placing', lemma: 'लगाना', note: 'apply the alarm' },
			{ language: 'hi', axis: 'washer', form: 'मशीन चलाना maśīn calānā', strategy: 'running', lemma: 'चलाना' },

			// ─── Persian (Farsi) ───────────────────────────────────────────────
			{ language: 'fa', axis: 'light', form: 'چراغ را روشن کردن čerâq râ rowšan kardan', strategy: 'fire', lemma: 'روشن کردن', note: 'make the lamp bright' },
			{ language: 'fa', axis: 'ac', form: 'کولر را روشن کردن kulir râ rowšan kardan', strategy: 'fire', lemma: 'روشن کردن' },
			{ language: 'fa', axis: 'tap', form: 'شیر آب را باز کردن šir-e âb râ bâz kardan', strategy: 'opening', lemma: 'باز کردن', note: 'open the tap' },
			{ language: 'fa', axis: 'music', form: 'آهنگ گذاشتن âhang gozâštan', strategy: 'placing', lemma: 'گذاشتن', note: 'put a song' },
			{ language: 'fa', axis: 'vacuum', form: 'جارو کشیدن jâru kešidan', strategy: 'running', lemma: 'کشیدن', note: 'pull the broom' },
			{ language: 'fa', axis: 'washer', form: 'ماشین لباسشویی را روشن کردن mâšin-e lebâsšuyi râ rowšan kardan', strategy: 'fire', lemma: 'روشن کردن' },

			// ─── Hebrew (Modern) ───────────────────────────────────────────────
			{ language: 'he', axis: 'light', form: 'להדליק אור lehadlik or', strategy: 'fire', lemma: 'להדליק', note: 'kindle a light' },
			{ language: 'he', axis: 'ac', form: 'להדליק מזגן lehadlik mazgan', strategy: 'fire', lemma: 'להדליק' },
			{ language: 'he', axis: 'tap', form: 'לפתוח את הברז liftoach et ha-berez', strategy: 'opening', lemma: 'לפתוח', note: 'open the tap' },
			{ language: 'he', axis: 'music', form: 'לשים מוזיקה lasim muzika', strategy: 'placing', lemma: 'לשים', note: 'put music' },
			{ language: 'he', axis: 'vacuum', form: 'לשאוב אבק lish’ov avak', strategy: 'running', lemma: 'לשאוב', note: 'suck dust' },
			{ language: 'he', axis: 'washer', form: 'להפעיל מכונת כביסה lehaf‘il mekhonat kvisa', strategy: 'running', lemma: 'להפעיל', note: 'activate the washer' },

			// ─── Swahili ───────────────────────────────────────────────────────
			{ language: 'sw', axis: 'light', form: 'kuwasha taa', strategy: 'fire', lemma: 'kuwasha', note: 'set the lamp alight; kuzima, to extinguish, turns it off' },
			{ language: 'sw', axis: 'ac', form: 'kuwasha kiyoyozi', strategy: 'fire', lemma: 'kuwasha' },
			{ language: 'sw', axis: 'tap', form: 'kufungua bomba', strategy: 'opening', lemma: 'kufungua', note: 'open the tap' },

			// ─── Welsh ─────────────────────────────────────────────────────────
			{ language: 'cy', axis: 'light', form: "cynnau'r golau", strategy: 'fire', lemma: 'cynnau', note: 'kindle the light' },
		],
		sources: [
			{
				source: 'yuki7979seoul-2022-collocations',
				note: 'the Japanese and Korean rows, and five of the columns'
			},
			{
				source: 'mkpoli-2022-collocations',
				note: 'the English and Chinese rows, and the literal gloss under each verb'
			},
			{ source: 'francois-2008' },
			{ source: 'koptjevskaja-tamm-rakhilina-vanhove-2016' }
		]
	},
	examples: [
		{
			language: 'ja',
			original: '電気をつけて。',
			transliteration: 'denki o tsukete.',
			gloss: 'electricity ACC attach.IMP',
			literal: 'Attach the electricity.',
			natural: 'Turn the light on.',
			set: 'light',
			sources: [{ source: 'wiktionary-tsukeru' }]
		},
		{
			language: 'ko',
			original: '불 좀 켜 줘.',
			transliteration: 'bul jom kyeo jwo.',
			gloss: 'light a.bit kindle give.IMP',
			literal: 'Kindle the light for me.',
			natural: 'Turn the light on, would you.',
			set: 'light',
			sources: [{ source: 'wiktionary-kyeoda' }]
		},
		{
			language: 'zh',
			original: '把燈打開。',
			transliteration: 'bǎ dēng dǎkāi.',
			gloss: 'BA lamp strike-open',
			literal: 'Open the lamp.',
			natural: 'Turn the light on.',
			set: 'light',
			sources: [{ source: 'wiktionary-kai' }]
		},
		{
			language: 'sw',
			original: 'Washa taa.',
			gloss: 'set.alight.IMP lamp',
			literal: 'Set the lamp alight.',
			natural: 'Turn the light on.',
			set: 'light',
			sources: [{ source: 'wiktionary-washa' }]
		},
		{
			language: 'zh',
			original: '放點音樂吧。',
			transliteration: 'fàng diǎn yīnyuè ba.',
			gloss: 'release a.bit music PRT',
			literal: 'Release a bit of music.',
			natural: 'Put some music on.',
			set: 'music',
			sources: [{ source: 'wiktionary-fang' }]
		},
		{
			language: 'pl',
			original: 'Puść jakąś muzykę.',
			gloss: 'let.go.IMP some music',
			literal: 'Let some music go.',
			natural: 'Put some music on.',
			set: 'music',
			sources: [{ source: 'wiktionary-puscic' }]
		},
		{
			language: 'ja',
			original: '音楽をかけよう。',
			transliteration: 'ongaku o kakeyō.',
			gloss: 'music ACC hang.VOL',
			literal: 'Let us hang some music.',
			natural: 'Let’s put some music on.',
			set: 'music',
			sources: [{ source: 'wiktionary-kakeru' }]
		},
		{
			language: 'ko',
			original: '세탁기를 돌렸어.',
			transliteration: 'setakgi-reul dollyeosseo.',
			gloss: 'washer ACC rotate.CAUS.PST',
			literal: 'I made the washer rotate.',
			natural: 'I put a load on.',
			set: 'machines',
			sources: [{ source: 'wiktionary-dollida' }]
		},
		{
			language: 'ja',
			original: '洗濯機をまわしておいた。',
			transliteration: 'sentakuki o mawashite oita.',
			gloss: 'washer ACC turn.GER put.PST',
			literal: 'I turned the washer and left it.',
			natural: 'I put a load on.',
			set: 'machines'
		},
		{
			language: 'id',
			original: 'Matikan lampunya.',
			gloss: 'die.CAUS.IMP lamp-DEF',
			literal: 'Make the lamp die.',
			natural: 'Turn the light off.',
			set: 'off',
			sources: [{ source: 'wiktionary-mematikan' }]
		},
		{
			language: 'sw',
			original: 'Zima taa.',
			gloss: 'extinguish.IMP lamp',
			literal: 'Extinguish the lamp.',
			natural: 'Turn the light off.',
			set: 'off',
			sources: [{ source: 'wiktionary-zima' }]
		},

		// ─── More of the lamp ──────────────────────────────────────────────────
		{
			language: 'tr',
			original: 'Işığı aç.',
			gloss: 'light.ACC open.IMP',
			literal: 'Open the light.',
			natural: 'Turn the light on.',
			set: 'light',
			sources: [{ source: 'wiktionary-acmak' }]
		},
		{
			language: 'th',
			original: 'เปิดไฟ',
			transliteration: 'pə̀ət fai',
			gloss: 'open light',
			literal: 'Open the light.',
			natural: 'Turn the light on.',
			set: 'light',
			sources: [{ source: 'wiktionary-poet' }]
		},
		{
			language: 'el',
			original: 'Άναψε το φως.',
			transliteration: 'Ánapse to fos.',
			gloss: 'kindle.IMP the light',
			literal: 'Kindle the light.',
			natural: 'Turn the light on.',
			set: 'light',
			sources: [{ source: 'wiktionary-anavo' }]
		},
		{
			language: 'fr',
			original: 'Allume la lumière.',
			gloss: 'light.IMP the light',
			literal: 'Light the light.',
			natural: 'Turn the light on.',
			set: 'light',
			sources: [{ source: 'wiktionary-allumer' }]
		},
		{
			language: 'es',
			original: 'Enciende la luz.',
			gloss: 'kindle.IMP the light',
			literal: 'Kindle the light.',
			natural: 'Turn the light on.',
			set: 'light',
			sources: [{ source: 'wiktionary-encender' }]
		},
		{
			language: 'ru',
			original: 'Включи свет.',
			transliteration: 'Vključi svet.',
			gloss: 'include.IMP light',
			literal: 'Include the light.',
			natural: 'Turn the light on.',
			set: 'light',
			sources: [{ source: 'wiktionary-vkljuchit' }]
		},
		{
			language: 'pl',
			original: 'Zapal światło.',
			gloss: 'ignite.IMP light',
			literal: 'Ignite the light.',
			natural: 'Turn the light on.',
			set: 'light'
		},
		{
			language: 'de',
			original: 'Mach das Licht an.',
			gloss: 'make.IMP the light on',
			literal: 'Make the light on.',
			natural: 'Turn the light on.',
			set: 'light'
		},
		{
			language: 'vi',
			original: 'Bật đèn lên.',
			gloss: 'snap lamp up',
			literal: 'Snap the lamp up.',
			natural: 'Turn the light on.',
			set: 'light',
			sources: [{ source: 'wiktionary-bat' }]
		},
		{
			language: 'hi',
			original: 'बत्ती जलाओ।',
			transliteration: 'battī jalāo.',
			gloss: 'light burn.CAUS.IMP',
			literal: 'Burn the light.',
			natural: 'Turn the light on.',
			set: 'light',
			sources: [{ source: 'wiktionary-jalana' }]
		},
		{
			language: 'fa',
			original: 'چراغ را روشن کن',
			transliteration: 'čerâq râ rowšan kon',
			gloss: 'lamp OBJ bright do.IMP',
			literal: 'Make the lamp bright.',
			natural: 'Turn the light on.',
			set: 'light'
		},
		{
			language: 'id',
			original: 'Nyalakan lampunya.',
			gloss: 'flame.CAUS.IMP lamp-DEF',
			literal: 'Make the lamp flame.',
			natural: 'Turn the light on.',
			set: 'light'
		},

		// ─── More of the music ─────────────────────────────────────────────────
		{
			language: 'fr',
			original: 'Mets de la musique.',
			gloss: 'put.IMP of the music',
			literal: 'Put some music.',
			natural: 'Put some music on.',
			set: 'music'
		},
		{
			language: 'es',
			original: 'Pon música.',
			gloss: 'put.IMP music',
			literal: 'Put music.',
			natural: 'Put some music on.',
			set: 'music'
		},
		{
			language: 'el',
			original: 'Βάλε μουσική.',
			transliteration: 'Vále mousikí.',
			gloss: 'put.IMP music',
			literal: 'Put music.',
			natural: 'Put some music on.',
			set: 'music'
		},
		{
			language: 'tr',
			original: 'Müzik aç.',
			gloss: 'music open.IMP',
			literal: 'Open music.',
			natural: 'Put some music on.',
			set: 'music',
			sources: [{ source: 'wiktionary-acmak' }]
		},
		{
			language: 'th',
			original: 'เปิดเพลง',
			transliteration: 'pə̀ət phleeng',
			gloss: 'open song',
			literal: 'Open the song.',
			natural: 'Put some music on.',
			set: 'music',
			sources: [{ source: 'wiktionary-poet' }]
		},
		{
			language: 'ru',
			original: 'Включи музыку.',
			transliteration: 'Vključi muzyku.',
			gloss: 'include.IMP music.ACC',
			literal: 'Include the music.',
			natural: 'Put some music on.',
			set: 'music',
			sources: [{ source: 'wiktionary-vkljuchit' }]
		},
		{
			language: 'de',
			original: 'Leg Musik auf.',
			gloss: 'lay.IMP music on',
			literal: 'Lay music on.',
			natural: 'Put some music on.',
			set: 'music'
		},
		{
			language: 'id',
			original: 'Putar musiknya.',
			gloss: 'turn music-DEF',
			literal: 'Turn the music.',
			natural: 'Put some music on.',
			set: 'music'
		},
		{
			language: 'hi',
			original: 'गाना बजाओ।',
			transliteration: 'gānā bajāo.',
			gloss: 'song sound.CAUS.IMP',
			literal: 'Make the song sound.',
			natural: 'Put some music on.',
			set: 'music'
		},

		// ─── More of the machines ──────────────────────────────────────────────
		{
			language: 'tr',
			original: 'Çamaşır makinesini çalıştır.',
			gloss: 'laundry machine.ACC work.CAUS.IMP',
			literal: 'Make the washing machine work.',
			natural: 'Put a load on.',
			set: 'machines'
		},
		{
			language: 'fr',
			original: "J'ai lancé une machine.",
			gloss: 'I.have launched a machine',
			literal: 'I launched a machine.',
			natural: 'I put a load on.',
			set: 'machines'
		},
		{
			language: 'es',
			original: 'Voy a poner la lavadora.',
			gloss: 'I.go to put.INF the washer',
			literal: 'I am going to put the washer.',
			natural: "I'm going to put a load on.",
			set: 'machines'
		},
		{
			language: 'it',
			original: 'Ho fatto la lavatrice.',
			gloss: 'I.have done the washer',
			literal: 'I did the washer.',
			natural: 'I ran the washing machine.',
			set: 'machines'
		},
		{
			language: 'ru',
			original: 'Я пропылесосил.',
			transliteration: 'Ja propylesosil.',
			gloss: 'I dust-suck.PFV.PST',
			literal: 'I dust-suckered.',
			natural: 'I vacuumed.',
			set: 'machines'
		},
		{
			language: 'pl',
			original: 'Muszę odkurzyć.',
			gloss: 'must.1SG de-dust.INF',
			literal: 'I must de-dust.',
			natural: 'I need to vacuum.',
			set: 'machines'
		},
		{
			language: 'de',
			original: 'Ich muss noch staubsaugen.',
			gloss: 'I must still dust-suck',
			literal: 'I still have to dust-suck.',
			natural: 'I still have to vacuum.',
			set: 'machines'
		},
		{
			language: 'fa',
			original: 'جارو کشیدم',
			transliteration: 'jâru kešidam',
			gloss: 'broom pull.PST.1SG',
			literal: 'I pulled the broom.',
			natural: 'I vacuumed.',
			set: 'machines'
		},
		{
			language: 'he',
			original: 'הפעלתי את מכונת הכביסה',
			transliteration: 'hif‘alti et mekhonat ha-kvisa',
			gloss: 'activate.PST.1SG ACC machine.CONSTR the-laundry',
			literal: 'I activated the laundry machine.',
			natural: 'I put a load on.',
			set: 'machines'
		},

		// ─── More of switching off ─────────────────────────────────────────────
		{
			language: 'ja',
			original: '電気を消して。',
			transliteration: 'denki o keshite.',
			gloss: 'electricity ACC extinguish.IMP',
			literal: 'Extinguish the electricity.',
			natural: 'Turn the light off.',
			set: 'off',
			sources: [{ source: 'wiktionary-kesu' }]
		},
		{
			language: 'ko',
			original: '불 꺼.',
			transliteration: 'bul kkeo.',
			gloss: 'light extinguish.IMP',
			literal: 'Extinguish the light.',
			natural: 'Turn the light off.',
			set: 'off',
			sources: [{ source: 'wiktionary-kkeuda' }]
		},
		{
			language: 'zh',
			original: '把燈關掉。',
			transliteration: 'bǎ dēng guāndiào.',
			gloss: 'BA lamp close-away',
			literal: 'Close the lamp away.',
			natural: 'Turn the light off.',
			set: 'off',
			sources: [{ source: 'wiktionary-guan' }]
		},
		{
			language: 'tr',
			original: 'Işığı kapat.',
			gloss: 'light.ACC close.IMP',
			literal: 'Close the light.',
			natural: 'Turn the light off.',
			set: 'off',
			sources: [{ source: 'wiktionary-kapatmak' }]
		},
		{
			language: 'th',
			original: 'ปิดไฟ',
			transliteration: 'pìt fai',
			gloss: 'close light',
			literal: 'Close the light.',
			natural: 'Turn the light off.',
			set: 'off',
			sources: [{ source: 'wiktionary-pit' }]
		},
		{
			language: 'vi',
			original: 'Tắt đèn.',
			gloss: 'go.out.CAUS lamp',
			literal: 'Put the lamp out.',
			natural: 'Turn the light off.',
			set: 'off',
			sources: [{ source: 'wiktionary-tat' }]
		},
		{
			language: 'ru',
			original: 'Выключи свет.',
			transliteration: 'Vyključi svet.',
			gloss: 'exclude.IMP light',
			literal: 'Exclude the light.',
			natural: 'Turn the light off.',
			set: 'off',
			sources: [{ source: 'wiktionary-vykljuchit' }]
		},
		{
			language: 'fr',
			original: 'Éteins la lumière.',
			gloss: 'extinguish.IMP the light',
			literal: 'Extinguish the light.',
			natural: 'Turn the light off.',
			set: 'off',
			sources: [{ source: 'wiktionary-eteindre' }]
		},
		{
			language: 'es',
			original: 'Apaga la luz.',
			gloss: 'extinguish.IMP the light',
			literal: 'Extinguish the light.',
			natural: 'Turn the light off.',
			set: 'off',
			sources: [{ source: 'wiktionary-apagar' }]
		},
		{
			language: 'el',
			original: 'Σβήσε το φως.',
			transliteration: 'Svíse to fos.',
			gloss: 'extinguish.IMP the light',
			literal: 'Extinguish the light.',
			natural: 'Turn the light off.',
			set: 'off',
			sources: [{ source: 'wiktionary-svino' }]
		},
		{
			language: 'de',
			original: 'Mach das Licht aus.',
			gloss: 'make.IMP the light out',
			literal: 'Make the light out.',
			natural: 'Turn the light off.',
			set: 'off'
		}
	],
	exampleSets: [
		{ id: 'light', label: 'the light', title: '“Turn the light on.”', description: 'The oldest of these appliances, and the one that inherited the vocabulary of flame.' },
		{ id: 'music', label: 'music', title: '“Put some music on.”', description: 'Placing and releasing verbs crowd this row, several of them traceable to the record player.' },
		{ id: 'machines', label: 'machines at work', title: '“I put a load on.”', description: 'Japanese and Korean reach for rotation once the appliance is a turning drum; elsewhere the verb names the job, and the vacuum cleaner turns into a verb of its own.' },
		{ id: 'off', label: 'switching off', title: '“Turn the light off.”', description: 'Switching off usually mirrors the verb that switched on: Turkish opens then closes, Russian includes then excludes, and languages that kindle go on to extinguish.' }
	],
	related: [
		{ kind: 'pathway', slug: 'see-to-try', label: 'From seeing to trying' },
		{ kind: 'pathway', slug: 'hear-words-to-obey', label: 'From hearing words to obedience' }
	],
	sources: [
		{ source: 'yuki7979seoul-2022-collocations' },
		{ source: 'mkpoli-2022-collocations' },
		{ source: 'francois-2008' },
		{ source: 'koptjevskaja-tamm-rakhilina-vanhove-2016' }
	]
};
