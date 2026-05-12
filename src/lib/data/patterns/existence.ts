import type { Pattern } from '$lib/types';

export const existence: Pattern = {
	slug: 'existence',
	title: 'Existence',
	shortTitle: 'There is…',
	question: 'How do languages say “there is”?',
	summary:
		'Languages reach for a small set of recurring strategies to assert that something exists: a copula (BE), a possession verb (HAVE), a dedicated existential predicate (EXIST), or a locative frame (“at the place, X is”). To make the comparison robust, we use three deliberately universal test sentences — inanimate (“there is water in the river”), animate singular (“there is a dog in the house”), and animate plural (“there are people in the village”). Together they expose splits by animacy (Japanese ある↔いる, German es gibt↔sein, Swahili kuna↔yuko), by number (English is↔are, Italian c’è↔ci sono, Latin est↔sunt, Ainu an↔oka), and by case (Finnish partitive on mass / nominative on countable / partitive on existential plural).',
	category: ['Meaning & Expression', 'Possession & Existence'],
	strategies: [
		{
			id: 'be',
			label: 'BE strategy',
			schematic: '([expletive]) [be] [X]',
			description:
				'A copula or BE-verb carries the existential assertion, often with a dummy subject like English there or with a locative clitic like Italian ci.',
			color: 'sky'
		},
		{
			id: 'have',
			label: 'HAVE strategy',
			schematic: '([there]) [has] [X]',
			description:
				'A verb meaning HAVE is recruited as an existential predicate. Common in Romance and in Chinese 有.',
			color: 'amber'
		},
		{
			id: 'exist',
			label: 'EXIST strategy',
			schematic: '[X] [exist / is found]',
			description:
				'A dedicated existential predicate or particle — sometimes a lexical verb meaning “be found / be present”, sometimes an invariant existential word.',
			color: 'emerald'
		},
		{
			id: 'locative',
			label: 'Locative predicate',
			schematic: '[at LOC] [X] [be / stay]',
			description:
				'Existence is framed as location: “at the place, X is.” Japanese ある/いる splits this by animacy; Bantu and Korean use dedicated locative copulas.',
			color: 'violet'
		}
	],
	attestations: [
		// BE
		{ language: 'en', strategy: 'be', expression: 'there is / there are', confidence: 'high', sources: [{ source: 'mcnally-2011' }] },
		{ language: 'it', strategy: 'be', expression: 'c’è / ci sono', confidence: 'high', note: 'locative clitic ci + essere “be”', sources: [{ source: 'freeze-1992' }] },
		{ language: 'cy', strategy: 'be', expression: 'mae / oes', confidence: 'high', note: 'special existential forms of bod “be”' },
		{ language: 'la', strategy: 'be', expression: 'est / sunt', confidence: 'high', note: 'plain copula esse, often clause-initial' },

		// HAVE
		{ language: 'fr', strategy: 'have', expression: 'il y a', confidence: 'high', note: 'literally “it has there”', sources: [{ source: 'freeze-1992' }, { source: 'stassen-2009' }] },
		{ language: 'es', strategy: 'have', expression: 'hay', confidence: 'high', note: 'fossilised ha + y (locative)', sources: [{ source: 'stassen-2009' }] },
		{ language: 'zh', strategy: 'have', expression: '有 yǒu', confidence: 'high', sources: [{ source: 'heine-kuteva-2002', locator: 's.v. HAVE' }] },

		// EXIST
		{ language: 'de', strategy: 'exist', expression: 'es gibt', confidence: 'high', note: 'literally “it gives”', sources: [{ source: 'heine-kuteva-2002', locator: 's.v. GIVE > EXIST' }] },
		{ language: 'sv', strategy: 'exist', expression: 'det finns', confidence: 'high', note: 'literally “it is found”, passive of finna' },
		{ language: 'tr', strategy: 'exist', expression: 'var', confidence: 'high', note: 'invariant existential particle', sources: [{ source: 'stassen-2009' }] },
		{ language: 'ru', strategy: 'exist', expression: 'есть / нет', confidence: 'high', note: 'zero copula in present, есть when emphatic; нет for negation', sources: [{ source: 'stassen-2009' }, { source: 'freeze-1992' }] },
		{ language: 'he', strategy: 'exist', expression: 'יש yesh / אין ein', confidence: 'high', note: 'positive/negative existential particles, no inflection', sources: [{ source: 'veselinova-hamari-2022' }] },
		{ language: 'id', strategy: 'exist', expression: 'ada', confidence: 'high' },
		{ language: 'fi', strategy: 'exist', expression: 'on (+ partitive)', confidence: 'high', note: 'copula on with partitive case marks existence', sources: [{ source: 'freeze-1992' }] },

		// LOCATIVE
		{ language: 'ja', strategy: 'locative', expression: 'ある / いる', confidence: 'high', note: 'animate / inanimate split', sources: [{ source: 'clark-1978' }] },
		{ language: 'ko', strategy: 'locative', expression: '있다 itda', confidence: 'high', note: 'one form for animate and inanimate; honorific 계시다 for animate' },
		{ language: 'sw', strategy: 'locative', expression: 'ku-na / class-po', confidence: 'high', note: 'locative class concord; kuna “there-with”' },
		{ language: 'ain', strategy: 'locative', expression: 'an (SG) / oka(y) (PL)', confidence: 'high', note: 'existential verb; clause shape [LOC] [theme] an. Number split rather than animacy.', sources: [{ source: 'tamura-2000' }, { source: 'bugaeva-2012' }] },

		// More language families
		{ language: 'hi', strategy: 'be', expression: 'है hai', confidence: 'high', note: 'copula honā doubles as the existential predicate' },
		{ language: 'ar', strategy: 'exist', expression: 'هناك hunāka / يوجد yūjad', confidence: 'high', note: 'MSA uses the locative deictic hunāka; some registers use the verb yūjad “is found”' },
		{ language: 'vi', strategy: 'have', expression: 'có', confidence: 'high', note: 'có “have/possess” serves as the existential predicate' },
		{ language: 'hu', strategy: 'be', expression: 'van', confidence: 'high', note: 'the copula van marks both location and existence; possessor adds suffix' },
		{ language: 'eu', strategy: 'locative', expression: 'egon (dago / daude)', confidence: 'high', note: 'Basque has two copulas: izan (identity) vs egon (location/existence)' },
		{ language: 'mi', strategy: 'locative', expression: 'he X kei/i …', confidence: 'high', note: 'no verbal copula; an indefinite NP plus a locative particle' }
	],
	examples: [
		{
			language: 'en',
			original: 'There is water in the river.',
			gloss: 'EXPL be.3SG water in DEF river',
			literal: 'There is water in the river.',
			natural: 'There is water in the river.',
			set: 'inanimate'
		},
		{
			language: 'fr',
			original: 'Il y a de l’eau dans la rivière.',
			gloss: '3SG.EXPL LOC has of.the water in DEF river',
			literal: 'It has there of-the water in the river.',
			natural: 'There is water in the river.',
			set: 'inanimate'
		},
		{
			language: 'es',
			original: 'Hay agua en el río.',
			gloss: 'have.EXIST water in DEF river',
			literal: 'Has water in the river.',
			natural: 'There is water in the river.',
			set: 'inanimate'
		},
		{
			language: 'it',
			original: 'C’è acqua nel fiume.',
			gloss: 'LOC=be.3SG water in.DEF river',
			literal: 'There-is water in-the river.',
			natural: 'There is water in the river.',
			set: 'inanimate'
		},
		{
			language: 'de',
			original: 'Es gibt Wasser im Fluss.',
			gloss: '3SG.EXPL give.3SG water in.DEF river',
			literal: 'It gives water in-the river.',
			natural: 'There is water in the river.',
			set: 'inanimate'
		},
		{
			language: 'sv',
			original: 'Det finns vatten i floden.',
			gloss: '3SG.EXPL be.found.PRS water in river.DEF',
			literal: 'It is-found water in the-river.',
			natural: 'There is water in the river.',
			set: 'inanimate'
		},
		{
			language: 'ja',
			original: '川に水がある。',
			transliteration: 'kawa ni mizu ga aru.',
			gloss: 'river LOC water NOM exist.INAN',
			literal: 'At river, water exists.',
			natural: 'There is water in the river.',
			set: 'inanimate'
		},
		{
			language: 'ko',
			original: '강에 물이 있다.',
			transliteration: 'gang-e mul-i issda.',
			gloss: 'river-LOC water-NOM exist',
			literal: 'At river, water exists.',
			natural: 'There is water in the river.',
			set: 'inanimate'
		},
		{
			language: 'zh',
			original: '河里有水。',
			transliteration: 'hé lǐ yǒu shuǐ.',
			gloss: 'river inside have water',
			literal: 'River-inside has water.',
			natural: 'There is water in the river.',
			set: 'inanimate'
		},
		{
			language: 'tr',
			original: 'Nehirde su var.',
			gloss: 'river.LOC water EXIST',
			literal: 'At-river, water exists.',
			natural: 'There is water in the river.',
			set: 'inanimate'
		},
		{
			language: 'ru',
			original: 'В реке есть вода.',
			transliteration: 'V reke yest’ voda.',
			gloss: 'in river.LOC EXIST water.NOM',
			literal: 'In the river, exists water.',
			natural: 'There is water in the river.',
			set: 'inanimate'
		},
		{
			language: 'he',
			original: 'יש מים בנהר.',
			transliteration: 'yesh mayim ba-nahar.',
			gloss: 'EXIST water in.DEF-river',
			literal: 'There-is water in-the-river.',
			natural: 'There is water in the river.',
			set: 'inanimate'
		},
		{
			language: 'id',
			original: 'Ada air di sungai.',
			gloss: 'EXIST water at river',
			literal: 'Exist water at river.',
			natural: 'There is water in the river.',
			set: 'inanimate'
		},
		{
			language: 'fi',
			original: 'Joessa on vettä.',
			gloss: 'river.INE be.3SG water.PART',
			literal: 'In-river is of-water.',
			natural: 'There is water in the river.',
			set: 'inanimate'
		},
		{
			language: 'sw',
			original: 'Mtoni kuna maji.',
			gloss: 'river.LOC CL17.LOC-with water',
			literal: 'At-river, there-with water.',
			natural: 'There is water in the river.',
			set: 'inanimate'
		},
		{
			language: 'cy',
			original: 'Mae dŵr yn yr afon.',
			gloss: 'be.3SG.PRS water in DEF river',
			literal: 'Is water in the river.',
			natural: 'There is water in the river.',
			set: 'inanimate'
		},
		{
			language: 'la',
			original: 'In flumine aqua est.',
			gloss: 'in river.ABL water.NOM be.3SG.PRS',
			literal: 'In river, water is.',
			natural: 'There is water in the river.',
			set: 'inanimate'
		},
		{
			language: 'ain',
			original: 'Pet or ta wakka an.',
			transliteration: 'ペッ オッタ ワッカ アン',
			gloss: 'river place LOC water exist.SG',
			literal: 'At river-place, water exists.',
			natural: 'There is water in the river.',
			set: 'inanimate',
			sources: [{ source: 'tamura-2000' }]
		},
		{
			language: 'hi',
			original: 'नदी में पानी है।',
			transliteration: 'nadī mẽ pānī hai.',
			gloss: 'river LOC water be.3SG.PRS',
			literal: 'In the river, water is.',
			natural: 'There is water in the river.',
			set: 'inanimate'
		},
		{
			language: 'ar',
			original: 'هناك ماء في النهر.',
			transliteration: 'hunāka māʔun fī n-nahr.',
			gloss: 'there water in DEF-river',
			literal: 'There, water in the river.',
			natural: 'There is water in the river.',
			set: 'inanimate'
		},
		{
			language: 'vi',
			original: 'Có nước trong sông.',
			gloss: 'have water in river',
			literal: 'Has water in the river.',
			natural: 'There is water in the river.',
			set: 'inanimate'
		},
		{
			language: 'hu',
			original: 'A folyóban van víz.',
			gloss: 'DEF river.INE be.3SG water.NOM',
			literal: 'In the river is water.',
			natural: 'There is water in the river.',
			set: 'inanimate'
		},
		{
			language: 'eu',
			original: 'Ibaian ura dago.',
			gloss: 'river.INE water.ABS.DEF be.3SG.LOC',
			literal: 'In river, the water is.',
			natural: 'There is water in the river.',
			set: 'inanimate'
		},
		{
			language: 'mi',
			original: 'He wai kei te awa.',
			gloss: 'INDEF water at DEF river',
			literal: 'A water at the river.',
			natural: 'There is water in the river.',
			set: 'inanimate'
		},

		// ─── Animate set: “There is a dog in the house.” ──────────────────────
		{
			language: 'en',
			original: 'There is a dog in the house.',
			gloss: 'EXPL be.3SG INDEF dog in DEF house',
			literal: 'There is a dog in the house.',
			natural: 'There is a dog in the house.',
			set: 'animate'
		},
		{
			language: 'fr',
			original: 'Il y a un chien dans la maison.',
			gloss: '3SG.EXPL LOC has INDEF dog in DEF house',
			literal: 'It has there a dog in the house.',
			natural: 'There is a dog in the house.',
			set: 'animate'
		},
		{
			language: 'es',
			original: 'Hay un perro en la casa.',
			gloss: 'have.EXIST INDEF dog in DEF house',
			literal: 'Has a dog in the house.',
			natural: 'There is a dog in the house.',
			set: 'animate'
		},
		{
			language: 'it',
			original: 'C’è un cane in casa.',
			gloss: 'LOC=be.3SG INDEF dog in house',
			literal: 'There-is a dog in house.',
			natural: 'There is a dog in the house.',
			set: 'animate'
		},
		{
			language: 'de',
			original: 'Im Haus ist ein Hund.',
			gloss: 'in.DEF house be.3SG INDEF dog',
			literal: 'In the house is a dog.',
			natural: 'There is a dog in the house.',
			set: 'animate',
			sources: [{ source: 'freeze-1992' }]
		},
		{
			language: 'sv',
			original: 'Det finns en hund i huset.',
			gloss: '3SG.EXPL be.found.PRS INDEF dog in house.DEF',
			literal: 'It is-found a dog in the-house.',
			natural: 'There is a dog in the house.',
			set: 'animate'
		},
		{
			language: 'ja',
			original: '家に犬がいる。',
			transliteration: 'ie ni inu ga iru.',
			gloss: 'house LOC dog NOM exist.ANIM',
			literal: 'At house, a dog exists (animate).',
			natural: 'There is a dog in the house.',
			set: 'animate',
			sources: [{ source: 'clark-1978' }]
		},
		{
			language: 'ko',
			original: '집에 개가 있다.',
			transliteration: 'jib-e gae-ga issda.',
			gloss: 'house-LOC dog-NOM exist',
			literal: 'At house, a dog exists.',
			natural: 'There is a dog in the house.',
			set: 'animate'
		},
		{
			language: 'zh',
			original: '家里有狗。',
			transliteration: 'jiā lǐ yǒu gǒu.',
			gloss: 'house inside have dog',
			literal: 'House-inside has dog.',
			natural: 'There is a dog in the house.',
			set: 'animate'
		},
		{
			language: 'tr',
			original: 'Evde bir köpek var.',
			gloss: 'house.LOC INDEF dog EXIST',
			literal: 'At-house, a dog exists.',
			natural: 'There is a dog in the house.',
			set: 'animate'
		},
		{
			language: 'ru',
			original: 'В доме есть собака.',
			transliteration: 'V dome yest’ sobaka.',
			gloss: 'in house.LOC EXIST dog.NOM',
			literal: 'In the house, exists a dog.',
			natural: 'There is a dog in the house.',
			set: 'animate'
		},
		{
			language: 'he',
			original: 'יש כלב בבית.',
			transliteration: 'yesh kelev ba-bayit.',
			gloss: 'EXIST dog in.DEF-house',
			literal: 'There-is a dog in-the-house.',
			natural: 'There is a dog in the house.',
			set: 'animate'
		},
		{
			language: 'id',
			original: 'Ada anjing di rumah.',
			gloss: 'EXIST dog at house',
			literal: 'Exist dog at house.',
			natural: 'There is a dog in the house.',
			set: 'animate'
		},
		{
			language: 'fi',
			original: 'Talossa on koira.',
			gloss: 'house.INE be.3SG dog.NOM',
			literal: 'In-house is a dog.',
			natural: 'There is a dog in the house.',
			set: 'animate'
		},
		{
			language: 'sw',
			original: 'Mbwa yuko nyumbani.',
			gloss: 'CL9.dog CL1.ANIM-LOC house.LOC',
			literal: 'Dog (animate) is-at house.',
			natural: 'There is a dog in the house.',
			set: 'animate'
		},
		{
			language: 'cy',
			original: 'Mae ci yn y tŷ.',
			gloss: 'be.3SG.PRS dog in DEF house',
			literal: 'Is a dog in the house.',
			natural: 'There is a dog in the house.',
			set: 'animate'
		},
		{
			language: 'la',
			original: 'In domō canis est.',
			gloss: 'in house.ABL dog.NOM be.3SG.PRS',
			literal: 'In house, a dog is.',
			natural: 'There is a dog in the house.',
			set: 'animate'
		},
		{
			language: 'ain',
			original: 'Cise or ta seta an.',
			transliteration: 'チセ オッタ セタ アン',
			gloss: 'house place LOC dog exist.SG',
			literal: 'At house-place, dog exists.',
			natural: 'There is a dog in the house.',
			set: 'animate',
			sources: [{ source: 'tamura-2000' }]
		},

		// ─── Plural set: “There are people in the village.” ───────────────────
		{
			language: 'en',
			original: 'There are people in the village.',
			gloss: 'EXPL be.3PL people in DEF village',
			literal: 'There are people in the village.',
			natural: 'There are people in the village.',
			set: 'plural'
		},
		{
			language: 'fr',
			original: 'Il y a des gens dans le village.',
			gloss: '3SG.EXPL LOC has PART.PL people in DEF village',
			literal: 'It has there some people in the village.',
			natural: 'There are people in the village.',
			set: 'plural'
		},
		{
			language: 'es',
			original: 'Hay personas en el pueblo.',
			gloss: 'have.EXIST people in DEF village',
			literal: 'Has people in the village.',
			natural: 'There are people in the village.',
			set: 'plural'
		},
		{
			language: 'it',
			original: 'Ci sono persone nel villaggio.',
			gloss: 'LOC be.3PL people in.DEF village',
			literal: 'There are people in-the village.',
			natural: 'There are people in the village.',
			set: 'plural'
		},
		{
			language: 'de',
			original: 'Es gibt Menschen im Dorf.',
			gloss: '3SG.EXPL give.3SG people in.DEF village',
			literal: 'It gives people in-the village.',
			natural: 'There are people in the village.',
			set: 'plural'
		},
		{
			language: 'sv',
			original: 'Det finns människor i byn.',
			gloss: '3SG.EXPL be.found.PRS people in village.DEF',
			literal: 'It is-found people in the-village.',
			natural: 'There are people in the village.',
			set: 'plural'
		},
		{
			language: 'ja',
			original: '村に人々がいる。',
			transliteration: 'mura ni hitobito ga iru.',
			gloss: 'village LOC people NOM exist.ANIM',
			literal: 'At village, people exist (animate).',
			natural: 'There are people in the village.',
			set: 'plural'
		},
		{
			language: 'ko',
			original: '마을에 사람들이 있다.',
			transliteration: 'maeur-e saramdeul-i issda.',
			gloss: 'village-LOC person-PL-NOM exist',
			literal: 'At village, people exist.',
			natural: 'There are people in the village.',
			set: 'plural'
		},
		{
			language: 'zh',
			original: '村里有人。',
			transliteration: 'cūn lǐ yǒu rén.',
			gloss: 'village inside have person/people',
			literal: 'Village-inside has people.',
			natural: 'There are people in the village.',
			set: 'plural'
		},
		{
			language: 'tr',
			original: 'Köyde insanlar var.',
			gloss: 'village.LOC people.PL EXIST',
			literal: 'At-village, people exist.',
			natural: 'There are people in the village.',
			set: 'plural'
		},
		{
			language: 'ru',
			original: 'В деревне есть люди.',
			transliteration: 'V derevne yest’ lyudi.',
			gloss: 'in village.LOC EXIST people.NOM.PL',
			literal: 'In the village, exists people.',
			natural: 'There are people in the village.',
			set: 'plural'
		},
		{
			language: 'he',
			original: 'יש אנשים בכפר.',
			transliteration: 'yesh anashim ba-kfar.',
			gloss: 'EXIST people.PL in.DEF-village',
			literal: 'There-is people in-the-village.',
			natural: 'There are people in the village.',
			set: 'plural'
		},
		{
			language: 'id',
			original: 'Ada orang di desa.',
			gloss: 'EXIST person at village',
			literal: 'Exist person at village.',
			natural: 'There are people in the village.',
			set: 'plural'
		},
		{
			language: 'fi',
			original: 'Kylässä on ihmisiä.',
			gloss: 'village.INE be.3SG people.PART',
			literal: 'In-village is of-people.',
			natural: 'There are people in the village.',
			set: 'plural'
		},
		{
			language: 'sw',
			original: 'Kijijini kuna watu.',
			gloss: 'village.LOC CL17.LOC-with CL2.people',
			literal: 'At-village, there-with people.',
			natural: 'There are people in the village.',
			set: 'plural'
		},
		{
			language: 'cy',
			original: 'Mae pobl yn y pentref.',
			gloss: 'be.3SG.PRS people in DEF village',
			literal: 'Is people in the village.',
			natural: 'There are people in the village.',
			set: 'plural'
		},
		{
			language: 'la',
			original: 'In vīcō hominēs sunt.',
			gloss: 'in village.ABL people.NOM.PL be.3PL.PRS',
			literal: 'In village, people are.',
			natural: 'There are people in the village.',
			set: 'plural'
		},
		{
			language: 'ain',
			original: 'Kotan or ta utar oka.',
			transliteration: 'コタン オッタ ウタㇻ オカ',
			gloss: 'village place LOC people exist.PL',
			literal: 'At village-place, people exist (PL).',
			natural: 'There are people in the village.',
			set: 'plural',
			sources: [{ source: 'tamura-2000' }, { source: 'bugaeva-2012' }]
		}
	],
	exampleSets: [
		{
			id: 'inanimate',
			label: 'Inanimate',
			title: '“There is water in the river.”',
			description:
				'A mass noun in a natural location. Reveals each language’s basic existential strategy and how it packages the locative phrase.'
		},
		{
			id: 'animate',
			label: 'Animate',
			title: '“There is a dog in the house.”',
			description:
				'Swapping water → dog often switches the strategy: Japanese ある→いる, German es gibt→sein, Swahili kuna→yuko (animate locative copula), Finnish drops the partitive case on the countable animate noun.'
		},
		{
			id: 'plural',
			label: 'Plural',
			title: '“There are people in the village.”',
			description:
				'Plural subject of a universal kind. Exposes number agreement on the existential predicate: English is→are, Italian c’è→ci sono, Latin est→sunt, Welsh stays at 3SG mae, and — most strikingly — Ainu uses a different existential verb entirely (an for singular, oka for plural). Finnish stays 3SG on but the noun goes into the partitive plural ihmisiä.'
		}
	],
	polarity: {
		title: 'Polarity: from “there is” to “there is no”',
		summary:
			'Negating existence — “there is no X” — is its own typological domain. Some languages just stack a sentential negator on top of the affirmative existential (English there is → there isn’t, French il y a → il n’y a pas). Others recruit a wholly different lexical item for negative existence — a *suppletive* negative existential — which is the typologically interesting case (Russian есть/нет, Turkish var/yok, Hebrew יש/אין, Korean 있다/없다, Welsh mae/does, Hungarian van/nincs, Ainu an/isam). A third pattern uses a negator that only attaches to this construction and effectively fuses with the existential (Mandarin 有 → 没有, Swahili kuna → hakuna). Suppletive negative existentials are the seed of Veselinova’s *Negative Existential Cycle* — the diachronic process by which they expand into general clause negation.',
		contrasts: [
			// SUPPLETIVE — typologically the most striking
			{ language: 'ru', affirmative: 'есть', negative: 'нет', relation: 'suppletive', note: 'нет < ne yest’ (fused); negated noun goes into the genitive', sources: [{ source: 'veselinova-hamari-2022' }, { source: 'veselinova-2014' }] },
			{ language: 'tr', affirmative: 'var', negative: 'yok', relation: 'suppletive', note: 'invariant pair; canonical case study', sources: [{ source: 'veselinova-2014' }] },
			{ language: 'he', affirmative: 'יש yesh', negative: 'אין ein', relation: 'suppletive', note: 'invariant particles; both head their own clause', sources: [{ source: 'stassen-2009' }] },
			{ language: 'ko', affirmative: '있다 itda', negative: '없다 eopda', relation: 'suppletive', note: 'distinct verb stems; both inflect normally' },
			{ language: 'cy', affirmative: 'mae', negative: 'does (dim)', relation: 'suppletive', note: 'does is a dedicated negative existential form of bod', sources: [{ source: 'willis-lucas-breitbarth-2013' }] },
			{ language: 'hu', affirmative: 'van', negative: 'nincs', relation: 'suppletive', note: 'nincs fuses nem + van; PL nincsenek', sources: [{ source: 'veselinova-2014' }] },
			{ language: 'ain', affirmative: 'an / oka', negative: 'isam', relation: 'suppletive', note: 'isam “not exist, be absent” is a dedicated negative existential verb', sources: [{ source: 'tamura-2000' }, { source: 'bugaeva-2012' }] },
			{ language: 'ja', affirmative: 'ある / いる', negative: 'ない / いない', relation: 'suppletive', note: 'aru ↔ nai is suppletive (distinct root); iru → inai is regular -nai negation', sources: [{ source: 'clark-1978' }] },

			// COMPOUND — dedicated/fused negator
			{ language: 'zh', affirmative: '有 yǒu', negative: '没有 méi yǒu', relation: 'compound', note: '没 is the dedicated negator for 有 (and for past); ordinary 不 never combines with 有' },
			{ language: 'sw', affirmative: 'kuna', negative: 'hakuna', relation: 'compound', note: 'ha- (negative class 17 prefix) + kuna; lexicalised in greetings like hakuna matata' },

			// SAME FORM + NEGATOR
			{ language: 'en', affirmative: 'there is', negative: 'there is no / isn’t', relation: 'same-with-negator', note: 'no (determiner) or not (clausal); both yield negative existence' },
			{ language: 'fr', affirmative: 'il y a', negative: 'il n’y a pas (de)', relation: 'same-with-negator', note: 'bipartite ne … pas; pas often dropped in speech (see Jespersen’s Cycle)', sources: [{ source: 'mosegaard-hansen-2013' }] },
			{ language: 'es', affirmative: 'hay', negative: 'no hay', relation: 'same-with-negator' },
			{ language: 'it', affirmative: 'c’è / ci sono', negative: 'non c’è / non ci sono', relation: 'same-with-negator' },
			{ language: 'de', affirmative: 'es gibt', negative: 'es gibt kein / nicht', relation: 'same-with-negator', note: 'kein (negative determiner) is the unmarked option for indefinite nouns' },
			{ language: 'sv', affirmative: 'det finns', negative: 'det finns inte / inget', relation: 'same-with-negator' },
			{ language: 'la', affirmative: 'est', negative: 'nōn est', relation: 'same-with-negator' },
			{ language: 'ar', affirmative: 'هناك hunāka / يوجد', negative: 'ليس هناك laysa hunāka / لا يوجد lā yūjad', relation: 'same-with-negator', note: 'laysa is the standard nominal negator; lā yūjad uses the verbal lā' },
			{ language: 'hi', affirmative: 'है hai', negative: 'नहीं है nahī̃ hai', relation: 'same-with-negator' },
			{ language: 'vi', affirmative: 'có', negative: 'không có', relation: 'same-with-negator', note: 'không “not” precedes có' },
			{ language: 'fi', affirmative: 'on (+ partitive)', negative: 'ei ole (+ partitive)', relation: 'same-with-negator', note: 'negative auxiliary ei; subject is partitive under negation' },
			{ language: 'eu', affirmative: 'dago', negative: 'ez dago (+ partitive)', relation: 'same-with-negator', note: 'partitive -ik appears on the existence-predicated noun under negation' },
			{ language: 'mi', affirmative: 'he X kei/i …', negative: 'kāhore he X', relation: 'same-with-negator', note: 'clausal negator kāhore precedes the existential predication' },
			{ language: 'id', affirmative: 'ada', negative: 'tidak ada / tak ada', relation: 'same-with-negator' }
		],
		examples: [
			{
				language: 'en',
				original: 'There is no water in the river.',
				gloss: 'EXPL be.3SG NEG.DET water in DEF river',
				literal: 'There is no water in the river.',
				natural: 'There is no water in the river.',
				set: 'inanimate'
			},
			{
				language: 'fr',
				original: 'Il n’y a pas d’eau dans la rivière.',
				gloss: '3SG.EXPL NEG LOC has NEG PART.SG water in DEF river',
				literal: 'It has-not there of water in the river.',
				natural: 'There is no water in the river.',
				set: 'inanimate'
			},
			{
				language: 'es',
				original: 'No hay agua en el río.',
				gloss: 'NEG have.EXIST water in DEF river',
				literal: 'Not has water in the river.',
				natural: 'There is no water in the river.',
				set: 'inanimate'
			},
			{
				language: 'it',
				original: 'Non c’è acqua nel fiume.',
				gloss: 'NEG LOC=be.3SG water in.DEF river',
				literal: 'Not there-is water in-the river.',
				natural: 'There is no water in the river.',
				set: 'inanimate'
			},
			{
				language: 'de',
				original: 'Es gibt kein Wasser im Fluss.',
				gloss: '3SG.EXPL give.3SG NEG.DET water in.DEF river',
				literal: 'It gives no water in-the river.',
				natural: 'There is no water in the river.',
				set: 'inanimate'
			},
			{
				language: 'sv',
				original: 'Det finns inget vatten i floden.',
				gloss: '3SG.EXPL be.found.PRS NEG.DET water in river.DEF',
				literal: 'It is-found no water in the-river.',
				natural: 'There is no water in the river.',
				set: 'inanimate'
			},
			{
				language: 'zh',
				original: '河里没有水。',
				transliteration: 'hé lǐ méi yǒu shuǐ.',
				gloss: 'river inside NEG have water',
				literal: 'River-inside not has water.',
				natural: 'There is no water in the river.',
				set: 'inanimate'
			},
			{
				language: 'ja',
				original: '川に水がない。',
				transliteration: 'kawa ni mizu ga nai.',
				gloss: 'river LOC water NOM not.exist.INAN',
				literal: 'At river, water does-not-exist.',
				natural: 'There is no water in the river.',
				set: 'inanimate'
			},
			{
				language: 'ko',
				original: '강에 물이 없다.',
				transliteration: 'gang-e mul-i eopda.',
				gloss: 'river-LOC water-NOM not.exist',
				literal: 'At river, water not-exists.',
				natural: 'There is no water in the river.',
				set: 'inanimate'
			},
			{
				language: 'tr',
				original: 'Nehirde su yok.',
				gloss: 'river.LOC water NEG.EXIST',
				literal: 'At-river, water not-exists.',
				natural: 'There is no water in the river.',
				set: 'inanimate'
			},
			{
				language: 'ru',
				original: 'В реке нет воды.',
				transliteration: 'V reke net vody.',
				gloss: 'in river.LOC NEG.EXIST water.GEN',
				literal: 'In the river, not of-water.',
				natural: 'There is no water in the river.',
				set: 'inanimate',
				sources: [{ source: 'veselinova-2014' }]
			},
			{
				language: 'he',
				original: 'אין מים בנהר.',
				transliteration: 'ein mayim ba-nahar.',
				gloss: 'NEG.EXIST water in.DEF-river',
				literal: 'Not-is water in-the-river.',
				natural: 'There is no water in the river.',
				set: 'inanimate'
			},
			{
				language: 'ar',
				original: 'لا يوجد ماء في النهر.',
				transliteration: 'lā yūjad māʔun fī n-nahr.',
				gloss: 'NEG be.found.3SG water in DEF-river',
				literal: 'Not is-found water in the river.',
				natural: 'There is no water in the river.',
				set: 'inanimate'
			},
			{
				language: 'vi',
				original: 'Không có nước trong sông.',
				gloss: 'NEG have water in river',
				literal: 'Not have water in river.',
				natural: 'There is no water in the river.',
				set: 'inanimate'
			},
			{
				language: 'hi',
				original: 'नदी में पानी नहीं है।',
				transliteration: 'nadī mẽ pānī nahī̃ hai.',
				gloss: 'river LOC water NEG be.3SG',
				literal: 'In river, water not is.',
				natural: 'There is no water in the river.',
				set: 'inanimate'
			},
			{
				language: 'hu',
				original: 'A folyóban nincs víz.',
				gloss: 'DEF river.INE NEG.EXIST.3SG water.NOM',
				literal: 'In the river, not-is water.',
				natural: 'There is no water in the river.',
				set: 'inanimate',
				sources: [{ source: 'veselinova-2014' }]
			},
			{
				language: 'fi',
				original: 'Joessa ei ole vettä.',
				gloss: 'river.INE NEG.3SG be.CONNEG water.PART',
				literal: 'In-river not is of-water.',
				natural: 'There is no water in the river.',
				set: 'inanimate'
			},
			{
				language: 'eu',
				original: 'Ibaian ez dago urik.',
				gloss: 'river.INE NEG be.3SG.LOC water.PART',
				literal: 'In river, not is of-water.',
				natural: 'There is no water in the river.',
				set: 'inanimate'
			},
			{
				language: 'cy',
				original: 'Does dim dŵr yn yr afon.',
				gloss: 'NEG.EXIST any water in DEF river',
				literal: 'Not-is any water in the river.',
				natural: 'There is no water in the river.',
				set: 'inanimate'
			},
			{
				language: 'la',
				original: 'In flumine aqua nōn est.',
				gloss: 'in river.ABL water.NOM NEG be.3SG.PRS',
				literal: 'In river, water not is.',
				natural: 'There is no water in the river.',
				set: 'inanimate'
			},
			{
				language: 'sw',
				original: 'Mtoni hakuna maji.',
				gloss: 'river.LOC NEG.CL17.LOC-with water',
				literal: 'At-river, not-there-with water.',
				natural: 'There is no water in the river.',
				set: 'inanimate'
			},
			{
				language: 'ain',
				original: 'Pet or ta wakka isam.',
				transliteration: 'ペッ オッタ ワッカ イサㇺ',
				gloss: 'river place LOC water not.exist',
				literal: 'At river-place, water does-not-exist.',
				natural: 'There is no water in the river.',
				set: 'inanimate',
				sources: [{ source: 'tamura-2000' }]
			},
			{
				language: 'mi',
				original: 'Kāhore he wai i te awa.',
				gloss: 'NEG INDEF water at DEF river',
				literal: 'None a water at the river.',
				natural: 'There is no water in the river.',
				set: 'inanimate'
			},
			{
				language: 'id',
				original: 'Tidak ada air di sungai.',
				gloss: 'NEG EXIST water at river',
				literal: 'Not exist water at river.',
				natural: 'There is no water in the river.',
				set: 'inanimate'
			}
		],
		exampleSets: [
			{
				id: 'inanimate',
				label: 'Inanimate',
				title: '“There is no water in the river.”',
				description:
					'Negating the inanimate-set test sentence. Watch where the negator sits — and where it disappears entirely into a dedicated lexical item.'
			}
		],
		sources: [
			{ source: 'veselinova-hamari-2022' },
			{ source: 'veselinova-2014' },
			{ source: 'croft-1991' },
			{ source: 'miestamo-2005' }
		]
	},
	related: [
		{ kind: 'pattern', slug: 'possession', label: 'Possession' },
		{ kind: 'pattern', slug: 'non-possession', label: 'Non-possession' },
		{ kind: 'pathway', slug: 'jespersens-cycle', label: "Jespersen's Cycle" }
	],
	sources: [
		{ source: 'clark-1978' },
		{ source: 'freeze-1992' },
		{ source: 'mcnally-2011' },
		{ source: 'stassen-2009' },
		{ source: 'heine-1997' },
		{ source: 'dryer-haspelmath-2013', locator: 'Chapter 119: Nominal and Locational Predication' }
	]
};
