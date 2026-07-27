import type { Pattern } from '$lib/types';

export const switchingOn: Pattern = {
	slug: 'switching-on',
	title: 'Switching a Device On',
	shortTitle: 'turn on the light, play the music',
	question: 'Which verb makes a machine start working?',
	summary:
		'A lamp, an air conditioner, recorded music, a vacuum cleaner and a washing machine each need a verb, and languages take that verb from fire, from opening, from rotation, from putting things down. The choice also moves from appliance to appliance inside one language: Japanese attaches a light and hangs music, while Korean kindles the light and rotates the washing machine.',
	category: ['Meaning & Expression', 'Lexicon & Collocation'],
	strategies: [
		{
			id: 'fire',
			label: 'Fire and light',
			schematic: 'KINDLE / MAKE BRIGHT → switch on',
			description:
				'The verb otherwise lights a lamp, strikes a match or sets something alight. Korean 켜다 kyeoda lights an oil lamp; Spanish encender continues Latin incendere; Swahili washa sets something on fire; Persian روشن کردن rowšan kardan makes it bright.',
			color: 'sky'
		},
		{
			id: 'opening',
			label: 'Opening',
			schematic: 'OPEN → switch on',
			description:
				'The verb otherwise opens a door, a lid or a knot. Mandarin 開 kāi, Turkish açmak, Thai เปิด pə̀ət, Vietnamese mở and Greek ανοίγω all reach the switch this way, and in Turkish and Thai the same verb serves the lamp, the air conditioner and the music.',
			color: 'amber'
		},
		{
			id: 'turning',
			label: 'Turning',
			schematic: 'TURN / TWIST / ROTATE → switch on',
			description:
				'The verb turns or twists something. English turn on and Korean 틀다 teulda go back to knobs and taps; Korean 돌리다 dollida, Japanese 回す mawasu and Indonesian memutar name a drum or a disc going round.',
			color: 'emerald'
		},
		{
			id: 'joining',
			label: 'Connecting and switching',
			schematic: 'JOIN / FLIP → switch on',
			description:
				'The verb makes or breaks a connection. Russian включить and Polish włączyć are built on joining and enclosing, calqued on Latin inclūdere; Portuguese ligar is Latin ligāre, to bind; German einschalten uses schalten, to shift; Vietnamese bật snaps.',
			color: 'slate'
		},
		{
			id: 'placing',
			label: 'Placing',
			schematic: 'PUT / HANG / LET GO → switch on',
			description:
				'The verb puts the thing somewhere, or lets it loose. French mettre, Spanish poner, Greek βάζω and Hebrew לשים lasim all put music on; Mandarin 放 fàng and Polish puścić release it; Japanese つける tsukeru attaches and かける kakeru hangs.',
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
		{ language: 'en', strategy: 'turning', expression: 'turn on the light', confidence: 'high', note: 'from rotary switches and taps' },
		{ language: 'en', strategy: 'joining', expression: 'switch on', confidence: 'high' },
		{ language: 'en', strategy: 'running', expression: 'vacuum the floor', confidence: 'high', note: 'denominal verb from the appliance' },

		{ language: 'zh', strategy: 'opening', expression: '開燈 kāi dēng', confidence: 'high', sources: [{ source: 'wiktionary-kai' }] },
		{ language: 'zh', strategy: 'placing', expression: '放音樂 fàng yīnyuè', confidence: 'high', sources: [{ source: 'wiktionary-fang' }] },
		{ language: 'zh', strategy: 'running', expression: '用洗衣機 yòng xǐyījī', confidence: 'high' },

		{ language: 'ja', strategy: 'placing', expression: '電気をつける denki o tsukeru', confidence: 'high', note: 'つける is 付ける, to attach; the spelling 点ける marks the lighting sense', sources: [{ source: 'wiktionary-tsukeru' }] },
		{ language: 'ja', strategy: 'turning', expression: '洗濯機を回す sentakuki o mawasu', confidence: 'high' },

		{ language: 'ko', strategy: 'fire', expression: '불을 켜다 bul-eul kyeoda', confidence: 'high', sources: [{ source: 'wiktionary-kyeoda' }] },
		{ language: 'ko', strategy: 'turning', expression: '에어컨을 틀다 eeokeon-eul teulda', confidence: 'high', note: '틀다 is to twist; 돌리다 is to make something rotate', sources: [{ source: 'wiktionary-teulda' }, { source: 'wiktionary-dollida' }] },

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
		{ language: 'id', strategy: 'running', expression: 'menghidupkan AC', confidence: 'high', note: 'hidup is alive; mati, dead, turns it off', sources: [{ source: 'wiktionary-menghidupkan' }] },
		{ language: 'id', strategy: 'turning', expression: 'memutar musik', confidence: 'high' },

		{ language: 'hi', strategy: 'fire', expression: 'बत्ती जलाना battī jalānā', confidence: 'high', sources: [{ source: 'wiktionary-jalana' }] },
		{ language: 'hi', strategy: 'running', expression: 'मशीन चलाना maśīn calānā', confidence: 'high', sources: [{ source: 'wiktionary-chalana' }] },

		{ language: 'fa', strategy: 'fire', expression: 'چراغ را روشن کردن čerâq râ rowšan kardan', confidence: 'high', note: 'rowšan is bright' },
		{ language: 'fa', strategy: 'placing', expression: 'آهنگ گذاشتن âhang gozâštan', confidence: 'medium' },

		{ language: 'he', strategy: 'fire', expression: 'להדליק אור lehadlik or', confidence: 'high' },
		{ language: 'he', strategy: 'placing', expression: 'לשים מוזיקה lasim muzika', confidence: 'medium' },
		{ language: 'he', strategy: 'running', expression: 'להפעיל מכונת כביסה lehaf‘il mekhonat kvisa', confidence: 'medium', note: 'lehaf‘il, to activate, from פעל, to act' },

		{ language: 'sw', strategy: 'fire', expression: 'kuwasha taa', confidence: 'high', note: 'washa, to set on fire; zima, to extinguish, turns it off', sources: [{ source: 'wiktionary-washa' }] },

		{ language: 'cy', strategy: 'fire', expression: "cynnau'r golau", confidence: 'high', sources: [{ source: 'wiktionary-cynnau' }] }
	],
	paradigm: {
		title: 'Which verb for which appliance',
		summary:
			'Read across a row for one language handling five appliances; read down a column for one appliance across languages. The lamp column leans on fire, the music column on placing and letting go, the washing-machine column on rotation and on plain “do the washing”. Where a language reuses one verb down several rows, the run of a single colour shows it.',
		axes: [
			{ id: 'light', label: 'the light', description: 'An electric lamp, heir to the candle and the oil lamp.' },
			{ id: 'ac', label: 'the air conditioner', description: 'A machine with no pre-electric ancestor to borrow words from.' },
			{ id: 'music', label: 'music', description: 'Putting on a record, a tape, a file.' },
			{ id: 'vacuum', label: 'the vacuum cleaner', description: 'A hand tool that has to be pushed across a floor.' },
			{ id: 'washer', label: 'the washing machine', description: 'A drum that turns for an hour unattended.' }
		],
		cells: [
			// ─── English ───────────────────────────────────────────────────────────
			{ language: 'en', axis: 'light', form: 'turn on the light', strategy: 'turning' },
			{ language: 'en', axis: 'ac', form: 'turn on the AC', strategy: 'turning' },
			{ language: 'en', axis: 'music', form: 'put on music / play music', strategy: 'placing' },
			{ language: 'en', axis: 'vacuum', form: 'vacuum (the floor)', strategy: 'running', note: 'the appliance became the verb' },
			{ language: 'en', axis: 'washer', form: 'do the washing / run a load', strategy: 'running' },

			// ─── Mandarin Chinese ──────────────────────────────────────────────────
			{ language: 'zh', axis: 'light', form: '開燈 kāi dēng', strategy: 'opening', note: 'open the light' },
			{ language: 'zh', axis: 'ac', form: '開冷氣 / 開空調 kāi lěngqì', strategy: 'opening', note: 'open the cold air' },
			{ language: 'zh', axis: 'music', form: '放音樂 fàng yīnyuè', strategy: 'placing', note: 'release the music' },
			{ language: 'zh', axis: 'vacuum', form: '用吸塵器 yòng xīchénqì', strategy: 'running', note: 'use the dust-sucker' },
			{ language: 'zh', axis: 'washer', form: '用洗衣機 yòng xǐyījī', strategy: 'running', note: 'use the clothes-washer' },

			// ─── Japanese ──────────────────────────────────────────────────────────
			{ language: 'ja', axis: 'light', form: '電気をつける denki o tsukeru', strategy: 'placing', note: 'attach the electricity; spelled 点ける in the lighting sense' },
			{ language: 'ja', axis: 'ac', form: 'エアコンをつける eakon o tsukeru', strategy: 'placing', note: 'attach the air conditioner' },
			{ language: 'ja', axis: 'music', form: '音楽をかける ongaku o kakeru', strategy: 'placing', note: 'hang the music' },
			{ language: 'ja', axis: 'vacuum', form: '掃除機をかける sōjiki o kakeru', strategy: 'placing', note: 'hang the cleaner' },
			{ language: 'ja', axis: 'washer', form: '洗濯機をまわす sentakuki o mawasu', strategy: 'turning', note: 'turn the washer' },

			// ─── Korean ────────────────────────────────────────────────────────────
			{ language: 'ko', axis: 'light', form: '불을 켜다 bul-eul kyeoda', strategy: 'fire', note: 'kindle the light' },
			{ language: 'ko', axis: 'ac', form: '에어컨을 틀다 eeokeon-eul teulda', strategy: 'turning', note: 'twist the air conditioner' },
			{ language: 'ko', axis: 'music', form: '음악을 틀다 eumak-eul teulda', strategy: 'turning', note: 'twist the music' },
			{ language: 'ko', axis: 'vacuum', form: '청소기를 돌리다 cheongsogi-reul dollida', strategy: 'turning', note: 'make the cleaner rotate' },
			{ language: 'ko', axis: 'washer', form: '세탁기를 돌리다 setakgi-reul dollida', strategy: 'turning', note: 'make the washer rotate' },

			// ─── French ────────────────────────────────────────────────────────────
			{ language: 'fr', axis: 'light', form: 'allumer la lumière', strategy: 'fire', note: 'light it up' },
			{ language: 'fr', axis: 'ac', form: 'allumer / mettre la clim', strategy: 'fire' },
			{ language: 'fr', axis: 'music', form: 'mettre de la musique', strategy: 'placing', note: 'put some music' },
			{ language: 'fr', axis: 'vacuum', form: "passer l'aspirateur", strategy: 'running', note: 'pass the vacuum' },
			{ language: 'fr', axis: 'washer', form: 'lancer une machine', strategy: 'running', note: 'launch a machine' },

			// ─── Spanish ───────────────────────────────────────────────────────────
			{ language: 'es', axis: 'light', form: 'encender la luz', strategy: 'fire', note: 'from Latin incendere' },
			{ language: 'es', axis: 'ac', form: 'poner el aire', strategy: 'placing', note: 'put the air' },
			{ language: 'es', axis: 'music', form: 'poner música', strategy: 'placing' },
			{ language: 'es', axis: 'vacuum', form: 'pasar la aspiradora', strategy: 'running', note: 'pass the vacuum' },
			{ language: 'es', axis: 'washer', form: 'poner la lavadora', strategy: 'placing' },

			// ─── Italian ───────────────────────────────────────────────────────────
			{ language: 'it', axis: 'light', form: 'accendere la luce', strategy: 'fire', note: 'from Latin accendere, to kindle' },
			{ language: 'it', axis: 'ac', form: 'accendere il condizionatore', strategy: 'fire' },
			{ language: 'it', axis: 'music', form: 'mettere la musica', strategy: 'placing' },
			{ language: 'it', axis: 'vacuum', form: "passare l'aspirapolvere", strategy: 'running' },
			{ language: 'it', axis: 'washer', form: 'fare la lavatrice', strategy: 'running', note: 'do the washer' },

			// ─── Portuguese ────────────────────────────────────────────────────────
			{ language: 'pt', axis: 'light', form: 'acender / ligar a luz', strategy: 'fire' },
			{ language: 'pt', axis: 'ac', form: 'ligar o ar-condicionado', strategy: 'joining', note: 'connect it, from Latin ligāre' },
			{ language: 'pt', axis: 'music', form: 'pôr música', strategy: 'placing' },
			{ language: 'pt', axis: 'vacuum', form: 'passar o aspirador', strategy: 'running' },
			{ language: 'pt', axis: 'washer', form: 'pôr a máquina de lavar', strategy: 'placing' },

			// ─── German ────────────────────────────────────────────────────────────
			{ language: 'de', axis: 'light', form: 'das Licht einschalten / anmachen', strategy: 'joining', note: 'schalten, to shift a switch' },
			{ language: 'de', axis: 'ac', form: 'die Klimaanlage einschalten', strategy: 'joining' },
			{ language: 'de', axis: 'music', form: 'Musik auflegen / anmachen', strategy: 'placing', note: 'lay the record on' },
			{ language: 'de', axis: 'vacuum', form: 'staubsaugen', strategy: 'running', note: 'dust-suck' },
			{ language: 'de', axis: 'washer', form: 'die Waschmaschine anstellen', strategy: 'placing', note: 'stellen, to set' },

			// ─── Dutch ─────────────────────────────────────────────────────────────
			{ language: 'nl', axis: 'light', form: 'het licht aandoen / aanzetten', strategy: 'placing', note: 'set it on' },
			{ language: 'nl', axis: 'ac', form: 'de airco aanzetten', strategy: 'placing' },
			{ language: 'nl', axis: 'music', form: 'muziek opzetten', strategy: 'placing', note: 'set it up' },
			{ language: 'nl', axis: 'vacuum', form: 'stofzuigen', strategy: 'running', note: 'dust-suck' },
			{ language: 'nl', axis: 'washer', form: 'de wasmachine aanzetten', strategy: 'placing' },

			// ─── Russian ───────────────────────────────────────────────────────────
			{ language: 'ru', axis: 'light', form: 'включить свет vključit’ svet', strategy: 'joining', note: 'calqued on Latin inclūdere, to enclose' },
			{ language: 'ru', axis: 'ac', form: 'включить кондиционер', strategy: 'joining' },
			{ language: 'ru', axis: 'music', form: 'включить / поставить музыку', strategy: 'joining', note: 'поставить, to stand it up, is the placing alternative' },
			{ language: 'ru', axis: 'vacuum', form: 'пропылесосить propylesosit’', strategy: 'running', note: 'a verb made from пылесос, dust-sucker' },
			{ language: 'ru', axis: 'washer', form: 'запустить стирку', strategy: 'running', note: 'launch the wash' },

			// ─── Polish ────────────────────────────────────────────────────────────
			{ language: 'pl', axis: 'light', form: 'zapalić światło', strategy: 'fire', note: 'ignite the light' },
			{ language: 'pl', axis: 'ac', form: 'włączyć klimatyzację', strategy: 'joining', note: 'w- plus łączyć, to join' },
			{ language: 'pl', axis: 'music', form: 'puścić muzykę', strategy: 'placing', note: 'let the music go' },
			{ language: 'pl', axis: 'vacuum', form: 'odkurzać', strategy: 'running', note: 'de-dust' },
			{ language: 'pl', axis: 'washer', form: 'nastawić pralkę', strategy: 'placing', note: 'set the washer' },

			// ─── Greek ─────────────────────────────────────────────────────────────
			{ language: 'el', axis: 'light', form: 'ανάβω το φως anávo to fos', strategy: 'fire', note: 'from Ancient Greek ἀνάπτω, to kindle' },
			{ language: 'el', axis: 'ac', form: 'ανοίγω το κλιματιστικό', strategy: 'opening' },
			{ language: 'el', axis: 'music', form: 'βάζω μουσική vázo mousikí', strategy: 'placing' },
			{ language: 'el', axis: 'washer', form: 'βάζω πλυντήριο vázo plyntírio', strategy: 'placing', note: 'put the washer' },

			// ─── Turkish ───────────────────────────────────────────────────────────
			{ language: 'tr', axis: 'light', form: 'ışığı açmak', strategy: 'opening', note: 'open the light' },
			{ language: 'tr', axis: 'ac', form: 'klimayı açmak', strategy: 'opening' },
			{ language: 'tr', axis: 'music', form: 'müzik açmak', strategy: 'opening' },
			{ language: 'tr', axis: 'vacuum', form: 'süpürmek', strategy: 'running', note: 'sweep — the same verb as with a broom' },
			{ language: 'tr', axis: 'washer', form: 'çamaşır makinesini çalıştırmak', strategy: 'running', note: 'make the washer work' },

			// ─── Thai ──────────────────────────────────────────────────────────────
			{ language: 'th', axis: 'light', form: 'เปิดไฟ pə̀ət fai', strategy: 'opening', note: 'open the light' },
			{ language: 'th', axis: 'ac', form: 'เปิดแอร์ pə̀ət ɛɛ', strategy: 'opening' },
			{ language: 'th', axis: 'music', form: 'เปิดเพลง pə̀ət phleeng', strategy: 'opening' },
			{ language: 'th', axis: 'vacuum', form: 'ดูดฝุ่น dùut fùn', strategy: 'running', note: 'suck dust' },
			{ language: 'th', axis: 'washer', form: 'ซักผ้า sák phâa', strategy: 'running', note: 'wash the clothes' },

			// ─── Vietnamese ────────────────────────────────────────────────────────
			{ language: 'vi', axis: 'light', form: 'bật đèn', strategy: 'joining', note: 'snap the lamp' },
			{ language: 'vi', axis: 'ac', form: 'bật điều hòa', strategy: 'joining' },
			{ language: 'vi', axis: 'music', form: 'mở nhạc / bật nhạc', strategy: 'opening', note: 'open the music' },
			{ language: 'vi', axis: 'vacuum', form: 'hút bụi', strategy: 'running', note: 'suck dust' },

			// ─── Indonesian ────────────────────────────────────────────────────────
			{ language: 'id', axis: 'light', form: 'menyalakan lampu', strategy: 'fire', note: 'from nyala, flame' },
			{ language: 'id', axis: 'ac', form: 'menghidupkan AC', strategy: 'running', note: 'make it live' },
			{ language: 'id', axis: 'music', form: 'memutar musik', strategy: 'turning', note: 'from putar, to turn' },
			{ language: 'id', axis: 'vacuum', form: 'menyedot debu', strategy: 'running', note: 'suck dust' },

			// ─── Hindi ─────────────────────────────────────────────────────────────
			{ language: 'hi', axis: 'light', form: 'बत्ती जलाना battī jalānā', strategy: 'fire', note: 'burn the light' },
			{ language: 'hi', axis: 'ac', form: 'एसी चलाना esī calānā', strategy: 'running', note: 'make the AC go' },
			{ language: 'hi', axis: 'music', form: 'गाना बजाना gānā bajānā', strategy: 'running', note: 'make the song sound' },
			{ language: 'hi', axis: 'washer', form: 'मशीन चलाना maśīn calānā', strategy: 'running' },

			// ─── Persian ───────────────────────────────────────────────────────────
			{ language: 'fa', axis: 'light', form: 'چراغ را روشن کردن čerâq râ rowšan kardan', strategy: 'fire', note: 'make the lamp bright' },
			{ language: 'fa', axis: 'ac', form: 'کولر را روشن کردن kulir râ rowšan kardan', strategy: 'fire' },
			{ language: 'fa', axis: 'music', form: 'آهنگ گذاشتن âhang gozâštan', strategy: 'placing', note: 'put a song' },
			{ language: 'fa', axis: 'washer', form: 'ماشین لباسشویی را روشن کردن mâšin-e lebâsšuyi râ rowšan kardan', strategy: 'fire' },

			// ─── Hebrew ────────────────────────────────────────────────────────────
			{ language: 'he', axis: 'light', form: 'להדליק אור lehadlik or', strategy: 'fire', note: 'kindle a light' },
			{ language: 'he', axis: 'ac', form: 'להדליק מזגן lehadlik mazgan', strategy: 'fire' },
			{ language: 'he', axis: 'music', form: 'לשים מוזיקה lasim muzika', strategy: 'placing', note: 'put music' },
			{ language: 'he', axis: 'washer', form: 'להפעיל מכונת כביסה lehaf‘il mekhonat kvisa', strategy: 'running', note: 'activate the washer' },

			// ─── Swahili ───────────────────────────────────────────────────────────
			{ language: 'sw', axis: 'light', form: 'kuwasha taa', strategy: 'fire', note: 'set the lamp alight; kuzima, to extinguish, turns it off' },
			{ language: 'sw', axis: 'ac', form: 'kuwasha kiyoyozi', strategy: 'fire' },

			// ─── Welsh ─────────────────────────────────────────────────────────────
			{ language: 'cy', axis: 'light', form: "cynnau'r golau", strategy: 'fire', note: 'kindle the light' }
		],
		sources: [{ source: 'francois-2008' }, { source: 'koptjevskaja-tamm-rakhilina-vanhove-2016' }]
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
			sources: [{ source: 'wiktionary-menghidupkan' }]
		},
		{
			language: 'sw',
			original: 'Zima taa.',
			gloss: 'extinguish.IMP lamp',
			literal: 'Extinguish the lamp.',
			natural: 'Turn the light off.',
			set: 'off',
			sources: [{ source: 'wiktionary-washa' }]
		}
	],
	exampleSets: [
		{ id: 'light', label: 'the light', title: '“Turn the light on.”', description: 'The oldest of the five appliances, and the one that inherited the vocabulary of flame.' },
		{ id: 'music', label: 'music', title: '“Put some music on.”', description: 'Placing and releasing verbs crowd this row, several of them traceable to the record player.' },
		{ id: 'machines', label: 'the washing machine', title: '“I put a load on.”', description: 'Japanese and Korean both reach for rotation once the appliance is a turning drum.' },
		{ id: 'off', label: 'switching off', title: '“Turn the light off.”', description: 'The reverse operation often runs through extinguishing or dying: Swahili zima, Indonesian mematikan.' }
	],
	related: [
		{ kind: 'pathway', slug: 'see-to-try', label: 'From seeing to trying' },
		{ kind: 'pathway', slug: 'hear-words-to-obey', label: 'From hearing words to obedience' }
	],
	sources: [{ source: 'francois-2008' }, { source: 'koptjevskaja-tamm-rakhilina-vanhove-2016' }]
};
