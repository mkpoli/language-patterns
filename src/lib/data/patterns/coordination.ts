import type { Pattern } from '$lib/types';

// The test sentence is the same across languages: “I bought bread, milk and eggs.”
// What changes is where the coordinator sits, and whether the list has one.
//
// The typological frame follows Haspelmath (2004): a coordinator used once or
// repeated at every item, and placed before the item or after it. Each language
// row rests on the grammar cited with it.

export const coordination: Pattern = {
	slug: 'coordination',
	title: 'Coordination',
	shortTitle: 'bread, milk and eggs',
	question: 'Where does the word for “and” sit when a language lists three things?',
	summary:
		'English puts and once, before the last item: bread, milk and eggs. Japanese can use 及び the same way in formal writing, but speech more often follows each item with と — パンと牛乳と卵 — or leaves the particles out altogether: パン、牛乳、卵. The particle や marks the items as examples and leaves the list open. Arabic puts wa- before every item after the first, Latin attaches -que to the last item, and Korean and Mandarin often use nothing at all. In Japanese, Korean and Swahili the coordinator also means “with”. Languages differ in where the marker sits and in whether a list has one at all.',
	tags: ['coordination', 'syncretism'],
	strategies: [
		{
			id: 'final',
			label: 'One word before the last item',
			schematic: 'A, B and C',
			description:
				'A single coordinator stands before the last item: bread, milk and eggs; Brot, Milch und Eier; 面包、牛奶和鸡蛋; ekmek, süt ve yumurta. The earlier items are separated by punctuation or intonation alone. A list of any length takes the same one word.',
			color: 'sky'
		},
		{
			id: 'each-before',
			label: 'A word before each later item',
			schematic: 'A wa-B wa-C',
			description:
				'Arabic puts wa- before every item after the first: خبز ولبن وبيض, bread, milk and eggs. The first item stands bare, and each later one carries the word.',
			color: 'amber'
		},
		{
			id: 'each-after',
			label: 'A word after each item but the last',
			schematic: 'AとBとC（と）',
			description:
				'Japanese and Korean use a particle that follows each item but the last: パンと牛乳と卵, 빵과 우유와 달걀. Japanese speech often adds a final と as well — パンと牛乳と卵と — and Korean lists frequently drop the particle and rely on commas.',
			color: 'emerald'
		},
		{
			id: 'last-after',
			label: 'A word on the last item',
			schematic: 'A, B C-que',
			description:
				'Latin attaches -que to the final item: panem, lac ovumque ēmī, I bought bread, milk and eggs. The coordinator cannot stand alone; it leans on the word before it, and the earlier items are unmarked.',
			color: 'violet'
		},
		{
			id: 'none',
			label: 'No word at all',
			schematic: 'A, B, C',
			description:
				'Japanese, Korean, Mandarin, Vietnamese and Thai all allow a list with no coordinator: パン、牛乳、卵; 빵, 우유, 달걀; 面包、牛奶、鸡蛋; bánh mì, sữa, trứng; ขนมปัง นม ไข่. Commas, spaces or intonation separate the items. The bare list is ordinary in speech, and writing often keeps it.',
			color: 'rose'
		},
		{
			id: 'open',
			label: 'A list left open',
			schematic: 'A や B（や C）など',
			description:
				'Japanese や joins items the way と does but marks them as examples: パンや牛乳を買った, I bought bread and milk, among other things. It can repeat — パンや牛乳や卵 — and など often closes the list. With と the same items would be the whole purchase.',
			color: 'slate'
		}
	],
	attestations: [
		// ─── One word before the last item ─────────────────────────────────────
		{ language: 'en', strategy: 'final', expression: 'bread, milk and eggs', confidence: 'high', note: 'a serial comma can precede and — bread, milk, and eggs', sources: [{ source: 'huddleston-pullum-2002' }] },
		{ language: 'de', strategy: 'final', expression: 'Brot, Milch und Eier', confidence: 'high', sources: [{ source: 'durrell-2002' }] },
		{ language: 'fr', strategy: 'final', expression: 'pain, lait et œufs', confidence: 'high', sources: [{ source: 'grevisse-goosse-2016' }] },
		{ language: 'es', strategy: 'final', expression: 'pan, leche y huevos', confidence: 'high', sources: [{ source: 'rae-2009' }] },
		{ language: 'ru', strategy: 'final', expression: 'хлеб, молоко и яйца', transliteration: 'khleb, moloko i yaytsa', confidence: 'high', sources: [{ source: 'wade-2011' }] },
		{ language: 'zh', strategy: 'final', expression: '面包、牛奶和鸡蛋', transliteration: 'miànbāo, niúnǎi hé jīdàn', confidence: 'high', note: '和 is the common coordinator; 跟 and 与 also serve', sources: [{ source: 'li-thompson-1981' }] },
		{ language: 'ko', strategy: 'final', expression: '빵, 우유 및 달걀', transliteration: 'ppang, uyu mit dalgyal', confidence: 'high', note: '및 is the formal coordinator; speech uses 와/과 after the item', sources: [{ source: 'sohn-1999' }] },
		{ language: 'tr', strategy: 'final', expression: 'ekmek, süt ve yumurta', confidence: 'high', sources: [{ source: 'goksel-kerslake-2005' }] },
		{ language: 'vi', strategy: 'final', expression: 'bánh mì, sữa và trứng', confidence: 'high', sources: [{ source: 'thompson-1965-vietnamese' }] },
		{ language: 'id', strategy: 'final', expression: 'roti, susu, dan telur', confidence: 'high', sources: [{ source: 'sneddon-1996' }] },
		{ language: 'sw', strategy: 'final', expression: 'mkate, maziwa na mayai', confidence: 'high', note: 'na also means “with”', sources: [{ source: 'ashton-1944' }] },
		{ language: 'cy', strategy: 'final', expression: 'bara, llaeth ac wyau', confidence: 'high', note: 'ac before a vowel, a before a consonant', sources: [{ source: 'king-2015' }] },
		{ language: 'he', strategy: 'final', expression: 'לחם, חלב וביצים', transliteration: 'lechem, chalav u-veytsim', confidence: 'high', note: 'the prefix ve- is attached to the last item; it can repeat, though the single form is usual', sources: [{ source: 'glinert-1989' }] },
		{ language: 'hi', strategy: 'final', expression: 'रोटी, दूध और अंडे', transliteration: 'roṭī, dūdh aur aṇḍe', confidence: 'high', sources: [{ source: 'kachru-2006' }] },
		{ language: 'ja', strategy: 'final', expression: 'パン、牛乳及び卵', transliteration: 'pan, gyūnyū oyobi tamago', confidence: 'high', note: '及び is the formal written coordinator; speech uses と', sources: [{ source: 'weblio-oyobi' }] },
		{ language: 'fa', strategy: 'final', expression: 'نان، شیر و تخممرغ', transliteration: 'nān, shīr va tokhm-e morgh', confidence: 'high', note: 'va stands before the last item; it can also repeat before each item', sources: [{ source: 'mahootian-1997' }] },

		// ─── A word before every item ─────────────────────────────────────────
		{ language: 'ar', strategy: 'each-before', expression: 'خبز ولبن وبيض', transliteration: 'khubz wa-laban wa-bayḍ', confidence: 'high', note: 'wa- is prefixed to every item after the first', sources: [{ source: 'ryding-2005' }] },

		// ─── A word after every item ──────────────────────────────────────────
		{ language: 'ja', strategy: 'each-after', expression: 'パンと牛乳と卵', transliteration: 'pan to gyūnyū to tamago', confidence: 'high', note: 'と follows each item but the last', sources: [{ source: 'shibatani-1990' }] },
		{ language: 'ja', strategy: 'each-after', expression: 'パンと牛乳と卵と', transliteration: 'pan to gyūnyū to tamago to', confidence: 'medium', note: 'a final と after the last item also occurs in speech', sources: [{ source: 'shibatani-1990' }] },
		{ language: 'ko', strategy: 'each-after', expression: '빵과 우유와 달걀', transliteration: 'ppang-gwa uyu-wa dalgyal', confidence: 'high', note: '과 after a consonant, 와 after a vowel; many lists drop the particle', sources: [{ source: 'sohn-1999' }] },

		// ─── A word on the last item ──────────────────────────────────────────
		{ language: 'la', strategy: 'last-after', expression: 'panem, lac ovumque', confidence: 'high', note: '-que is enclitic on the final item', sources: [{ source: 'allen-greenough-1903' }] },

		// ─── No word at all ───────────────────────────────────────────────────
		{ language: 'ja', strategy: 'none', expression: 'パン、牛乳、卵', transliteration: 'pan, gyūnyū, tamago', confidence: 'high', note: 'no particle; the commas carry the list', sources: [{ source: 'shibatani-1990' }] },
		{ language: 'ko', strategy: 'none', expression: '빵, 우유, 달걀', transliteration: 'ppang, uyu, dalgyal', confidence: 'high', sources: [{ source: 'sohn-1999' }] },
		{ language: 'zh', strategy: 'none', expression: '面包、牛奶、鸡蛋', transliteration: 'miànbāo, niúnǎi, jīdàn', confidence: 'high', sources: [{ source: 'li-thompson-1981' }] },
		{ language: 'vi', strategy: 'none', expression: 'bánh mì, sữa, trứng', confidence: 'high', sources: [{ source: 'thompson-1965-vietnamese' }] },
		{ language: 'th', strategy: 'none', expression: 'ขนมปัง นม ไข่', confidence: 'medium', note: 'spaces separate the items; Thai lists often leave the coordinator out', sources: [{ source: 'iwasaki-ingkaphirom-2005' }] },

		// ─── A list left open ─────────────────────────────────────────────────
		{ language: 'ja', strategy: 'open', expression: 'パンや牛乳、卵', transliteration: 'pan ya gyūnyū, tamago', confidence: 'high', note: 'や marks the items as examples; など often follows', sources: [{ source: 'shibatani-1990' }] }
	],
	examples: [
		{
			language: 'en',
			original: 'I bought bread, milk and eggs.',
			marked: 'I bought bread, milk [and] eggs.',
			gloss: '1SG buy.PST bread, milk and eggs',
			literal: 'I bought bread, milk and eggs.',
			natural: 'I bought bread, milk and eggs.',
			sources: [{ source: 'huddleston-pullum-2002' }]
		},
		{
			language: 'ja',
			original: 'パンと牛乳と卵を買った。',
			transliteration: 'pan to gyūnyū to tamago o katta',
			marked: 'パン[と]牛乳[と]卵を買った。',
			gloss: 'bread and milk and egg ACC bought',
			literal: 'I bought bread and milk and egg.',
			natural: 'I bought bread, milk and eggs.',
			sources: [{ source: 'shibatani-1990' }]
		},
		{
			language: 'ja',
			original: 'パン、牛乳及び卵を買った。',
			transliteration: 'pan, gyūnyū oyobi tamago o katta',
			marked: 'パン、牛乳[及び]卵を買った。',
			gloss: 'bread milk and egg ACC bought',
			literal: 'I bought bread, milk and egg.',
			natural: 'I bought bread, milk and eggs.',
			sources: [{ source: 'shibatani-1990' }, { source: 'weblio-oyobi' }]
		},
		{
			language: 'ja',
			original: 'パン、牛乳、卵を買った。',
			transliteration: 'pan, gyūnyū, tamago o katta',
			marked: 'パン、牛乳、卵を買った。',
			gloss: 'bread milk egg ACC bought',
			literal: 'I bought bread, milk, egg.',
			natural: 'I bought bread, milk and eggs.',
			sources: [{ source: 'shibatani-1990' }]
		},
		{
			language: 'ja',
			original: 'パンや牛乳、卵を買った。',
			transliteration: 'pan ya gyūnyū, tamago o katta',
			marked: 'パン[や]牛乳、卵を買った。',
			gloss: 'bread and milk, egg ACC bought',
			literal: 'I bought bread and milk, egg and such.',
			natural: 'I bought bread, milk and eggs, among other things.',
			sources: [{ source: 'shibatani-1990' }]
		},
		{
			language: 'zh',
			original: '我买了面包、牛奶和鸡蛋。',
			transliteration: 'wǒ mǎi le miànbāo, niúnǎi hé jīdàn.',
			marked: '我买了面包、牛奶[和]鸡蛋。',
			gloss: '1SG buy.PFV bread milk and egg',
			literal: 'I bought bread, milk and egg.',
			natural: 'I bought bread, milk and eggs.',
			sources: [{ source: 'li-thompson-1981' }]
		},
		{
			language: 'ko',
			original: '빵과 우유와 달걀을 샀다.',
			transliteration: 'ppang-gwa uyu-wa dalgyal-eul sassda.',
			marked: '빵[과] 우유[와] 달걀을 샀다.',
			gloss: 'bread-and milk-and egg-ACC bought',
			literal: 'I bought bread and milk and egg.',
			natural: 'I bought bread, milk and eggs.',
			sources: [{ source: 'sohn-1999' }]
		},
		{
			language: 'ar',
			original: 'اشتريت خبزًا ولبنًا وبيضًا.',
			transliteration: 'ishtaraytu khubzan wa-labanan wa-bayḍan.',
			marked: 'اشتريت خبزًا [و]لبنًا [و]بيضًا.',
			gloss: 'bought.1SG bread.ACC and-milk.ACC and-eggs.ACC',
			literal: 'I bought bread and milk and eggs.',
			natural: 'I bought bread, milk and eggs.',
			sources: [{ source: 'ryding-2005' }]
		},
		{
			language: 'la',
			original: 'Panem, lac ovumque ēmī.',
			marked: 'Panem, lac [ovumque] ēmī.',
			gloss: 'bread.ACC milk.ACC egg-and bought.1SG',
			literal: 'I bought bread, milk and egg.',
			natural: 'I bought bread, milk and eggs.',
			sources: [{ source: 'allen-greenough-1903' }]
		},
		{
			language: 'tr',
			original: 'Ekmek, süt ve yumurta aldım.',
			marked: 'Ekmek, süt [ve] yumurta aldım.',
			gloss: 'bread milk and egg bought.1SG',
			literal: 'I bought bread, milk and egg.',
			natural: 'I bought bread, milk and eggs.',
			sources: [{ source: 'goksel-kerslake-2005' }]
		},
		{
			language: 'he',
			original: 'קניתי לחם, חלב וביצים.',
			transliteration: 'kaniti lechem, chalav u-veytsim.',
			marked: 'קניתי לחם, חלב [ו]ביצים.',
			gloss: 'bought.1SG bread milk and-eggs',
			literal: 'I bought bread, milk and eggs.',
			natural: 'I bought bread, milk and eggs.',
			sources: [{ source: 'glinert-1989' }]
		},
		{
			language: 'vi',
			original: 'Tôi mua bánh mì, sữa và trứng.',
			marked: 'Tôi mua bánh mì, sữa [và] trứng.',
			gloss: '1SG buy bread milk and egg',
			literal: 'I bought bread, milk and eggs.',
			natural: 'I bought bread, milk and eggs.',
			sources: [{ source: 'thompson-1965-vietnamese' }]
		}
	],
	related: [],
	sources: [{ source: 'haspelmath-2004-coordination' }]
};
