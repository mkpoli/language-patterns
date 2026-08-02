import type { Pattern } from '$lib/types';

export const numeralClassifiers: Pattern = {
	slug: 'numeral-classifiers',
	title: 'Counting Things',
	shortTitle: 'three books, three sheets of paper',
	question: 'What has to stand between a number and the thing counted?',
	summary:
		'English puts a number straight in front of most nouns — three books, three dogs — and only reaches for an extra word when the noun resists counting: three sheets of paper, two head of cattle. Across East and Southeast Asia that extra word is required for ordinary countable things, and which one you pick depends on what the thing is. Japanese counts books with 冊, sheets with 枚 and pencils with 本. Bantu languages get at a comparable job from the other end, making the numeral agree with the class the noun already belongs to.',
	tags: ['quantification', 'nominal-classification', 'grammaticalization'],
	strategies: [
		{
			id: 'sortal',
			label: 'A classifier picked by the thing',
			schematic: 'NUM + CLF + N  /  N + NUM + CLF',
			description:
				'A counting word joins the numeral, and which word it is depends on the thing counted — its shape, whether it is alive, what it is for. Japanese, Korean, Mandarin, Thai, Vietnamese, Burmese and Yucatec Maya all work this way. Mandarin and Vietnamese put the numeral and classifier before the noun; Thai and Burmese put them after it. Counting ordinary things, the classifier is required; units of time, money and measure are counted without one, as in Japanese 三年 san-nen “three years”.',
			color: 'sky'
		},
		{
			id: 'repeater',
			label: 'The noun as its own classifier',
			schematic: 'N + NUM + N',
			description:
				'When no dedicated classifier covers a noun, the noun itself fills the slot. Burmese does this readily, and Thai and Vietnamese allow it for some nouns. The construction shows how firmly the slot is held: something has to go there, so the noun goes there twice.',
			color: 'amber'
		},
		{
			id: 'optional',
			label: 'Classifiers you may drop',
			schematic: 'NUM (+ CLF) + N',
			description:
				'The language has a set of counting words but does not require them. Indonesian and Malay have orang for people, ekor for animals and buah for things, and everyday speech often leaves them out where a formal register keeps them.',
			color: 'rose'
		},
		{
			id: 'mensural',
			label: 'A unit word only where needed',
			schematic: 'NUM + UNIT of N',
			description:
				'No classifier for ordinary countable nouns, but a measure word for anything that comes without natural units. English needs sheets of paper, loaves of bread, head of cattle; German has drei Blatt Papier. The word names a portion or a unit, and is not chosen by the kind of thing.',
			color: 'emerald'
		},
		{
			id: 'noun-class',
			label: 'Agreement instead',
			schematic: 'N-CLASS + NUM-CLASS',
			description:
				'The noun already belongs to a class marked on the noun itself, and the numeral picks up that class as agreement. Swahili vitabu vitatu “three books” and watu watatu “three people” carry the class on both words. Typologists keep noun class and numeral classifiers apart, since a noun class runs as concord through the whole clause while a classifier is a word chosen for one counting phrase. It sits here because it answers the same question about counting from the other direction: nothing is inserted, because the sorting is in the nouns to begin with.',
			color: 'violet'
		},
		{
			id: 'bare',
			label: 'Nothing in between',
			schematic: 'NUM + N',
			description:
				'The numeral sits directly against the noun, with no classifier and no agreement to speak of. This is the ordinary case across Europe and much of the world.',
			color: 'slate'
		}
	],
	attestations: [
		{ language: 'ja', strategy: 'sortal', expression: '本を三冊', transliteration: 'hon o san-satsu', confidence: 'high', note: 'the numeral and classifier form one word, and stand apart from the noun', sources: [{ source: 'downing-1996' }, { source: 'aikhenvald-2000' }] },
		{ language: 'ko', strategy: 'sortal', expression: '책 세 권', transliteration: 'chaek se gwon', confidence: 'high', sources: [{ source: 'aikhenvald-2000' }] },
		{ language: 'zh', strategy: 'sortal', expression: '三本書', transliteration: 'sān běn shū', confidence: 'high', sources: [{ source: 'chao-1968' }, { source: 'aikhenvald-2000' }] },
		{ language: 'th', strategy: 'sortal', expression: 'หนังสือสามเล่ม', transliteration: 'nǎngsɯ̌ɯ sǎam lêm', confidence: 'high', note: 'the noun comes first, then the numeral, then the classifier', sources: [{ source: 'aikhenvald-2000' }] },
		{ language: 'vi', strategy: 'sortal', expression: 'ba quyển sách', confidence: 'high', sources: [{ source: 'nguyen-1957' }, { source: 'aikhenvald-2000' }] },
		{ language: 'my', strategy: 'sortal', expression: 'စာအုပ် သုံး အုပ်', transliteration: 'sa-ouʔ thóuñ ouʔ', confidence: 'medium', note: 'noun, numeral, classifier — and here the classifier is the second half of the noun itself', sources: [{ source: 'okell-1969' }] },
		{ language: 'yua', strategy: 'sortal', expression: 'óox-túul / óox-p’éel', confidence: 'medium', note: 'the classifier attaches to the numeral and splits animate from inanimate', sources: [{ source: 'lucy-1992' }, { source: 'blaha-skopeteas-2024' }, { source: 'aikhenvald-2000' }] },
		{ language: 'bn', strategy: 'sortal', expression: 'তিনটি বই', transliteration: 'tinṭi boi', confidence: 'medium', note: '-ṭi and -ṭa are enclitics on the numeral rather than separate words, and on a noun they mark it as definite: boi-ṭi “the book”. South Asian classifiers work this way generally', sources: [{ source: 'aikhenvald-2000' }] },

		{ language: 'my', strategy: 'repeater', expression: 'မြို့ သုံး မြို့', transliteration: 'myo̰ thóuñ myo̰', confidence: 'medium', note: '“city three city” — the noun repeats where no separate classifier serves', sources: [{ source: 'okell-1969' }] },

		{ language: 'id', strategy: 'optional', expression: 'tiga (buah) buku', confidence: 'high', note: 'orang for people, ekor for animals, buah for things; casual speech drops them', sources: [{ source: 'aikhenvald-2000' }] },

		{ language: 'en', strategy: 'mensural', expression: 'three sheets of paper', confidence: 'high', note: 'and two head of cattle, where the unit word survives in an old invariant form' },
		{ language: 'en', strategy: 'bare', expression: 'three books', confidence: 'high' },
		{ language: 'de', strategy: 'mensural', expression: 'drei Blatt Papier', confidence: 'high', note: 'Blatt stays singular after a numeral, as do Stück and Mann in the same use' },
		{ language: 'de', strategy: 'bare', expression: 'drei Bücher', confidence: 'high' },
		{ language: 'ru', strategy: 'bare', expression: 'три книги', transliteration: 'tri knigi', confidence: 'high', note: 'the numeral governs the case of the noun, but nothing stands between them' },
		{ language: 'fr', strategy: 'bare', expression: 'trois livres', confidence: 'high' },

		{ language: 'sw', strategy: 'noun-class', expression: 'vitabu vitatu', confidence: 'high', note: 'class 8 vi- on both the noun and the numeral', sources: [{ source: 'ashton-1944' }] },
		{ language: 'zu', strategy: 'noun-class', expression: 'izincwadi ezintathu', confidence: 'medium', note: 'class 10 agreement on the numeral' }
	],
	paradigm: {
		title: 'Which counting word for which thing',
		summary:
			'Read across a row for one language counting seven things; read down a column for one thing across languages. The classifier languages split the row into several different words, while English and German leave almost every cell empty and Swahili fills them with agreement rather than a separate word. Where one language reuses a word down several rows, the run of a single colour shows it.',
		axes: [
			{ id: 'book', label: 'books', description: 'Bound volumes — often their own class. Cells show the numeral and classifier only; Thai and Burmese put that pair after the noun, the others before it.' },
			{ id: 'paper', label: 'sheets of paper', description: 'Flat, thin things. The one English also has to mark.' },
			{ id: 'pencil', label: 'pencils', description: 'Long and thin, the commonest shape category.' },
			{ id: 'dog', label: 'dogs', description: 'An animal, where animacy usually decides.' },
			{ id: 'car', label: 'cars', description: 'A machine, and a recent arrival to every system here.' },
			{ id: 'person', label: 'people', description: 'Humans, almost always set apart from everything else.' },
			{ id: 'house', label: 'houses', description: 'Buildings, counted by their own word in most of these languages.' }
		],
		cells: [
			// ─── Japanese ──────────────────────────────────────────────────────
			{ language: 'ja', axis: 'book', form: '三冊', transliteration: 'san-satsu', strategy: 'sortal', lemma: '冊', note: 'bound volumes' },
			{ language: 'ja', axis: 'paper', form: '三枚', transliteration: 'san-mai', strategy: 'sortal', lemma: '枚', note: 'flat thin things: paper, plates, shirts' },
			{ language: 'ja', axis: 'pencil', form: '三本', transliteration: 'san-bon', strategy: 'sortal', lemma: '本', note: 'long thin things' },
			{ language: 'ja', axis: 'dog', form: '三匹', transliteration: 'san-biki', strategy: 'sortal', lemma: '匹', note: 'small animals; large ones take 頭' },
			{ language: 'ja', axis: 'car', form: '三台', transliteration: 'san-dai', strategy: 'sortal', lemma: '台', note: 'machines and vehicles' },
			{ language: 'ja', axis: 'person', form: '三人', transliteration: 'san-nin', strategy: 'sortal', lemma: '人' },
			{ language: 'ja', axis: 'house', form: '三軒', transliteration: 'san-gen', strategy: 'sortal', lemma: '軒', note: 'houses and shops' },

			// ─── Korean ────────────────────────────────────────────────────────
			{ language: 'ko', axis: 'book', form: '세 권', transliteration: 'se gwon', strategy: 'sortal', lemma: '권' },
			{ language: 'ko', axis: 'paper', form: '세 장', transliteration: 'se jang', strategy: 'sortal', lemma: '장', note: 'flat sheets' },
			{ language: 'ko', axis: 'pencil', form: '세 자루', transliteration: 'se jaru', strategy: 'sortal', lemma: '자루', note: 'things with a shaft or handle' },
			{ language: 'ko', axis: 'dog', form: '세 마리', transliteration: 'se mari', strategy: 'sortal', lemma: '마리', note: 'animals of any size' },
			{ language: 'ko', axis: 'car', form: '세 대', transliteration: 'se dae', strategy: 'sortal', lemma: '대' },
			{ language: 'ko', axis: 'person', form: '세 명', transliteration: 'se myeong', strategy: 'sortal', lemma: '명' },
			{ language: 'ko', axis: 'house', form: '세 채', transliteration: 'se chae', strategy: 'sortal', lemma: '채' },

			// ─── Mandarin Chinese ──────────────────────────────────────────────
			{ language: 'zh', axis: 'book', form: '三本', transliteration: 'sān běn', strategy: 'sortal', lemma: '本' },
			{ language: 'zh', axis: 'paper', form: '三張', transliteration: 'sān zhāng', strategy: 'sortal', lemma: '張', note: 'flat spreadable things: paper, tables, beds' },
			{ language: 'zh', axis: 'pencil', form: '三支', transliteration: 'sān zhī', strategy: 'sortal', lemma: '支' },
			{ language: 'zh', axis: 'dog', form: '三隻', transliteration: 'sān zhī', strategy: 'sortal', lemma: '隻', note: 'homophonous with 支 but a different word' },
			{ language: 'zh', axis: 'car', form: '三輛', transliteration: 'sān liàng', strategy: 'sortal', lemma: '輛', note: 'wheeled vehicles' },
			{ language: 'zh', axis: 'person', form: '三個', transliteration: 'sān gè', strategy: 'sortal', lemma: '個', note: '個 is the general classifier; 位 is the polite one for people' },
			{ language: 'zh', axis: 'house', form: '三棟', transliteration: 'sān dòng', strategy: 'sortal', lemma: '棟', note: 'buildings; 間 counts rooms' },

			// ─── Thai ──────────────────────────────────────────────────────────
			{ language: 'th', axis: 'book', form: 'สามเล่ม', transliteration: 'sǎam lêm', strategy: 'sortal', lemma: 'เล่ม', note: 'books, and also knives and candles. Thai puts the whole phrase after the noun: หนังสือสามเล่ม' },
			{ language: 'th', axis: 'paper', form: 'สามแผ่น', transliteration: 'sǎam phàen', strategy: 'sortal', lemma: 'แผ่น' },
			{ language: 'th', axis: 'pencil', form: 'สามแท่ง', transliteration: 'sǎam thâeng', strategy: 'sortal', lemma: 'แท่ง', note: 'ด้าม is used for pens and other things held by a handle' },
			{ language: 'th', axis: 'dog', form: 'สามตัว', transliteration: 'sǎam tua', strategy: 'sortal', lemma: 'ตัว', note: 'animals, and clothing with a body shape' },
			{ language: 'th', axis: 'car', form: 'สามคัน', transliteration: 'sǎam khan', strategy: 'sortal', lemma: 'คัน' },
			{ language: 'th', axis: 'person', form: 'สามคน', transliteration: 'sǎam khon', strategy: 'sortal', lemma: 'คน', note: 'the same word as the noun “person”' },
			{ language: 'th', axis: 'house', form: 'สามหลัง', transliteration: 'sǎam lǎng', strategy: 'sortal', lemma: 'หลัง' },

			// ─── Vietnamese ────────────────────────────────────────────────────
			{ language: 'vi', axis: 'book', form: 'ba quyển', strategy: 'sortal', lemma: 'quyển', note: 'cuốn in the south' },
			{ language: 'vi', axis: 'paper', form: 'ba tờ', strategy: 'sortal', lemma: 'tờ' },
			{ language: 'vi', axis: 'pencil', form: 'ba cây', strategy: 'sortal', lemma: 'cây', note: 'cây is also the noun “tree”' },
			{ language: 'vi', axis: 'dog', form: 'ba con', strategy: 'sortal', lemma: 'con', note: 'con covers animals and marks animacy broadly' },
			{ language: 'vi', axis: 'car', form: 'ba chiếc', strategy: 'sortal', lemma: 'chiếc' },
			{ language: 'vi', axis: 'person', form: 'ba người', strategy: 'sortal', lemma: 'người', note: 'the same word as the noun “person”' },
			{ language: 'vi', axis: 'house', form: 'ba ngôi', strategy: 'sortal', lemma: 'ngôi', note: 'căn is also used' },

			// ─── Burmese ───────────────────────────────────────────────────────
			{ language: 'my', axis: 'book', form: 'သုံး အုပ်', transliteration: 'thóuñ ouʔ', strategy: 'sortal', lemma: 'အုပ်' },
			{ language: 'my', axis: 'dog', form: 'သုံး ကောင်', transliteration: 'thóuñ kaung', strategy: 'sortal', lemma: 'ကောင်', note: 'animals' },
			{ language: 'my', axis: 'person', form: 'သုံး ယောက်', transliteration: 'thóuñ yauʔ', strategy: 'sortal', lemma: 'ယောက်' },

			// ─── Indonesian ────────────────────────────────────────────────────
			{ language: 'id', axis: 'book', form: 'tiga (buah) buku', strategy: 'optional', lemma: 'buah' },
			{ language: 'id', axis: 'paper', form: 'tiga lembar kertas', strategy: 'optional', lemma: 'lembar' },
			{ language: 'id', axis: 'pencil', form: 'tiga batang pensil', strategy: 'optional', lemma: 'batang', note: 'batang is also the noun “stem, trunk”' },
			{ language: 'id', axis: 'dog', form: 'tiga ekor anjing', strategy: 'optional', lemma: 'ekor', note: 'ekor is the noun “tail”' },
			{ language: 'id', axis: 'person', form: 'tiga orang', strategy: 'optional', lemma: 'orang', note: 'orang is the noun “person”' },

			// ─── Bengali ───────────────────────────────────────────────────────
			{ language: 'bn', axis: 'book', form: 'তিনটি বই', transliteration: 'tinṭi boi', strategy: 'sortal', lemma: '-টি', note: '-ṭi attaches to the numeral; -jon is used for people' },
			{ language: 'bn', axis: 'person', form: 'তিনজন', transliteration: 'tinjon', strategy: 'sortal', lemma: '-জন' },

			// ─── Yucatec Maya ──────────────────────────────────────────────────
			{ language: 'yua', axis: 'book', form: 'óoxp’éel', strategy: 'sortal', lemma: '-p’éel', note: 'the inanimate classifier' },
			{ language: 'yua', axis: 'dog', form: 'óoxtúul', strategy: 'sortal', lemma: '-túul', note: 'the animate classifier' },
			{ language: 'yua', axis: 'person', form: 'óoxtúul', strategy: 'sortal', lemma: '-túul' },

			// ─── Swahili ───────────────────────────────────────────────────────
			{ language: 'sw', axis: 'book', form: 'vitabu vitatu', strategy: 'noun-class', lemma: 'vi-', note: 'class 8 on the noun and on the numeral' },
			{ language: 'sw', axis: 'dog', form: 'mbwa watatu', strategy: 'noun-class', lemma: 'wa-', note: 'animals take class 2 agreement whatever their own prefix' },
			{ language: 'sw', axis: 'person', form: 'watu watatu', strategy: 'noun-class', lemma: 'wa-', note: 'class 2' },

			// ─── English ───────────────────────────────────────────────────────
			{ language: 'en', axis: 'book', form: 'three books', strategy: 'bare' },
			{ language: 'en', axis: 'paper', form: 'three sheets of paper', strategy: 'mensural', lemma: 'sheet', note: 'paper cannot be counted directly' },
			{ language: 'en', axis: 'pencil', form: 'three pencils', strategy: 'bare' },
			{ language: 'en', axis: 'dog', form: 'three dogs', strategy: 'bare' },
			{ language: 'en', axis: 'car', form: 'three cars', strategy: 'bare' },
			{ language: 'en', axis: 'person', form: 'three people', strategy: 'bare' },
			{ language: 'en', axis: 'house', form: 'three houses', strategy: 'bare' },

			// ─── German ────────────────────────────────────────────────────────
			{ language: 'de', axis: 'book', form: 'drei Bücher', strategy: 'bare' },
			{ language: 'de', axis: 'paper', form: 'drei Blatt Papier', strategy: 'mensural', lemma: 'Blatt', note: 'Blatt keeps its singular form after a numeral' },
			{ language: 'de', axis: 'pencil', form: 'drei Bleistifte', strategy: 'bare' },
			{ language: 'de', axis: 'dog', form: 'drei Hunde', strategy: 'bare' },
			{ language: 'de', axis: 'person', form: 'drei Menschen', strategy: 'bare' },

			// ─── Russian ───────────────────────────────────────────────────────
			{ language: 'ru', axis: 'book', form: 'три книги', transliteration: 'tri knigi', strategy: 'bare', note: 'the numeral puts the noun in a particular case, but adds no word' },
			{ language: 'ru', axis: 'person', form: 'три человека', transliteration: 'tri cheloveka', strategy: 'bare' },

			// ─── French ────────────────────────────────────────────────────────
			{ language: 'fr', axis: 'book', form: 'trois livres', strategy: 'bare' },
			{ language: 'fr', axis: 'paper', form: 'trois feuilles de papier', strategy: 'mensural', lemma: 'feuille' },
			{ language: 'fr', axis: 'person', form: 'trois personnes', strategy: 'bare' }
		],
		sources: [{ source: 'aikhenvald-2000' }, { source: 'downing-1996' }, { source: 'chao-1968' }]
	},
	examples: [
		{
			language: 'ja',
			original: '本を三冊買った。',
			transliteration: 'hon o san-satsu katta.',
			gloss: 'book ACC three-CLF.volume buy.PST',
			literal: 'I bought book three-volumes.',
			natural: 'I bought three books.',
			set: 'three-books',
			sources: [{ source: 'downing-1996' }]
		},
		{
			language: 'zh',
			original: '我買了三本書。',
			transliteration: 'wǒ mǎi le sān běn shū.',
			gloss: '1SG buy PFV three CLF.volume book',
			literal: 'I bought three volume book.',
			natural: 'I bought three books.',
			set: 'three-books',
			sources: [{ source: 'chao-1968' }]
		},
		{
			language: 'th',
			original: 'หนังสือสามเล่ม',
			transliteration: 'nǎngsɯ̌ɯ sǎam lêm',
			gloss: 'book three CLF.volume',
			literal: 'Book three volume.',
			natural: 'Three books.',
			set: 'three-books'
		},
		{
			language: 'sw',
			original: 'vitabu vitatu',
			gloss: 'CL8-book CL8-three',
			literal: 'Books three-of-their-class.',
			natural: 'Three books.',
			set: 'three-books',
			sources: [{ source: 'ashton-1944' }]
		},
		{
			language: 'en',
			original: 'three books',
			gloss: 'three book.PL',
			literal: 'Three books.',
			natural: 'Three books.',
			set: 'three-books'
		},

		{
			language: 'ja',
			original: '鉛筆を二本',
			transliteration: 'enpitsu o ni-hon',
			gloss: 'pencil ACC two-CLF.long',
			literal: 'Pencil two-longs.',
			natural: 'Two pencils.',
			set: 'hon',
			sources: [{ source: 'downing-1996' }]
		},
		{
			language: 'ja',
			original: '電話を二本',
			transliteration: 'denwa o ni-hon',
			gloss: 'telephone ACC two-CLF.long',
			literal: 'Telephone call two-longs.',
			natural: 'Two phone calls.',
			set: 'hon',
			sources: [{ source: 'downing-1996' }]
		},
		{
			language: 'ja',
			original: 'ホームランを二本',
			transliteration: 'hōmuran o ni-hon',
			gloss: 'home.run ACC two-CLF.long',
			literal: 'Home run two-longs.',
			natural: 'Two home runs.',
			set: 'hon',
			sources: [{ source: 'downing-1996' }]
		},

		{
			language: 'en',
			original: 'two head of cattle',
			gloss: 'two CLF.head of cattle',
			literal: 'Two head of cattle.',
			natural: 'Two cows.',
			set: 'english-units'
		},
		{
			language: 'en',
			original: 'three sheets of paper',
			gloss: 'three CLF.sheet of paper',
			literal: 'Three sheets of paper.',
			natural: 'Three sheets of paper.',
			set: 'english-units'
		},
		{
			language: 'de',
			original: 'drei Blatt Papier',
			gloss: 'three CLF.sheet.SG paper',
			literal: 'Three sheet paper.',
			natural: 'Three sheets of paper.',
			set: 'english-units'
		}
	],
	exampleSets: [
		{
			id: 'three-books',
			label: 'three books',
			title: 'The same three books',
			description:
				'One phrase in five languages: a classifier word in Japanese, Mandarin and Thai, class agreement on the numeral in Swahili, and nothing at all in English.'
		},
		{
			id: 'hon',
			label: 'what counts as long and thin',
			title: 'Japanese 本 hon',
			description:
				'本 counts long thin things, and then keeps going: phone calls, film reels, judo throws, home runs. The category starts from a shape and ends somewhere a shape alone will not take you.'
		},
		{
			id: 'english-units',
			label: 'English and German units',
			title: 'Where a counting word is required anyway',
			description:
				'Languages with no classifier system still need a unit for things that come in no natural pieces — and keep a few frozen forms, like head of cattle and Blatt Papier, that behave much as a classifier does.'
		}
	],
	related: [
		{ kind: 'pattern', slug: 'possession', label: 'Possession' },
		{ kind: 'pattern', slug: 'indefinites', label: 'Indefinite pronouns' }
	],
	sources: [
		{ source: 'aikhenvald-2000' },
		{ source: 'gil-wals-55' },
		{ source: 'grinevald-2000' },
		{ source: 'senft-2000' },
		{ source: 'bisang-1999' },
		{ source: 'downing-1996' },
		{ source: 'chao-1968' },
		{ source: 'okell-1969' },
		{ source: 'nguyen-1957' },
		{ source: 'lucy-1992' },
		{ source: 'blaha-skopeteas-2024' },
		{ source: 'ashton-1944' }
	]
};
