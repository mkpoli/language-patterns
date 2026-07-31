import type { Pattern } from '$lib/types';

export const existence: Pattern = {
	slug: 'existence',
	title: 'Existence',
	shortTitle: 'There is…',
	question: 'How do languages say “there is”?',
	summary:
		'“The water is in the river” takes the water as given and tells you where it is. “There is water in the river” reverses that: the river is the setting and the water is the news. Saying that something exists therefore reuses the machinery for saying where it is, and languages differ in how much they change along the way — some leave the locational predicate untouched, some add a placeholder subject, some borrow the possessive verb, and some keep a predicate for existence alone. The choice often splits by animacy and by number.',
	tags: ['existence', 'location', 'possession', 'syncretism', 'expletive-subject', 'grammaticalization', 'reanalysis'],
	strategies: [
		{
			id: 'general-locational',
			label: 'Plain locational clause',
			schematic: '[X] ([at LOC]) [be located]',
			description:
				'One clause shape serves both readings. Japanese 本が机の上にある is “the book is on the desk” with a definite subject and “there is a book on the desk” with an indefinite one; Ainu an and oka(y) behave the same way. Word order, case or agreement often shift between the two.',
			color: 'violet'
		},
		{
			id: 'copular-proform',
			label: 'Copula with a proform',
			schematic: '[there] [be] [X] ([at LOC])',
			description:
				'A proform joins the copula and the thing whose existence is asserted follows it. English there stands in the subject slot; Italian ci is a locative clitic on the verb.',
			color: 'sky'
		},
		{
			id: 'possessive',
			label: 'Possessive frame',
			schematic: '([there]) [has / with] [X]',
			description:
				'The existential borrows the frame of a possessive clause, so the thing whose existence is asserted sits where an object would and controls no agreement — French il y a des livres, never *il y ont.',
			color: 'amber'
		},
		{
			id: 'specialized-existential',
			label: 'Specialized existential',
			schematic: '[X] [exist]',
			description:
				'A predicate kept for existence and absent from plain location. Turkish states location as kitap masada, with no var anywhere in it, and uses var for masada kitap var “there is a book on the table”.',
			color: 'emerald'
		},
		{
			id: 'nonverbal',
			label: 'No verbal predicate',
			schematic: '[there] / [a X] ([at LOC])',
			description:
				'Existence is asserted with no verb at all — a bare indefinite nominal, which a locative phrase may follow.',
			color: 'rose'
		}
	],
	attestations: [
		// ─── Plain locational clause ──────────────────────────────────────────
		{ language: 'ja', strategy: 'general-locational', expression: 'ある / いる', transliteration: 'aru / iru', confidence: 'high', note: 'the same verbs head plain locational clauses with a definite subject (本は机の上にある), and both carry possession — 私に子供がいる. Animate いる against inanimate ある. いる continues an older verb “sit down, be seated”; ある continues an old existential root.', origin: { value: 'exist', evidence: 'established' }, proform: 'none', headAlsoLocates: true, syncretism: ['location', 'existence', 'possession'], sources: [{ source: 'clark-1978' }] },
		{ language: 'ko', strategy: 'general-locational', expression: '있다', transliteration: 'itda', confidence: 'high', note: 'covers location, existence and possession alike, with one form for animate and inanimate. 계시다 is the honorific used of people whose status calls for it, not of animates generally. Suppletive negative 없다.', origin: { value: 'exist', evidence: 'established' }, proform: 'none', headAlsoLocates: true, syncretism: ['location', 'existence', 'possession'] },
		{ language: 'ain', strategy: 'general-locational', expression: 'an (SG) / oka(y) (PL)', confidence: 'high', note: 'one predicate for existence and location. Strictly intransitive: the bare existential is [theme] an, and a location is an optional oblique (N or ta), never a second argument. Number suppletion rather than an animacy split; suppletive negative isam. Possession is mostly the transitive kor, but an also carries a BE-type possessive with affiliative-form inalienable nouns — a=yupi an “I have an elder brother”, a closed class rather than general possession.', origin: { value: 'exist', evidence: 'established' }, proform: 'none', headAlsoLocates: true, syncretism: ['location', 'existence', 'possession'], sources: [{ source: 'tamura-2000' }, { source: 'bugaeva-2012' }, { source: 'sato-2008', locator: '3–4' }, { source: 'nakagawa-2024', locator: '146' }] },
		{ language: 'fi', strategy: 'general-locational', expression: 'on', confidence: 'high', note: 'the copula olla; ground-first order carries the existential reading. An indefinite subject may take the partitive and then suppresses agreement, but singular count subjects can stay nominative — pihalla on poika “there is a boy in the yard”. The same on carries possession with an adessive possessor: minulla on kirja.', origin: { value: 'be', evidence: 'transparent' }, proform: 'none', headAlsoLocates: true, syncretism: ['location', 'existence', 'possession'], sources: [{ source: 'freeze-1992' }] },
		{ language: 'id', strategy: 'general-locational', expression: 'ada', confidence: 'high', note: 'also heads definite locational clauses — bukunya ada di meja “the book is on the table”. Continues Proto-Malayo-Polynesian *wada “be present, exist”.', origin: { value: 'exist', evidence: 'established' }, proform: 'none', headAlsoLocates: true, syncretism: ['location', 'existence'] },
		{ language: 'eu', strategy: 'general-locational', expression: 'egon (dago / daude)', confidence: 'medium', note: 'egon is the stage-level locative copula, against izan for identity, and its lexical domain is “stay, remain” rather than a body posture. Trask records no accepted etymology for it, so the origin is a synchronic domain rather than a derivation. Western and central varieties select egon in existentials; eastern varieties use izan, and the ba- prefixed forms are a further pattern. The -a on ura is not a definite in the English sense: Basque extends the article to where English leaves a mass noun bare, and the partitive -ik replaces it under negation — ez dago urik.', origin: { value: 'stay', evidence: 'unknown' }, proform: 'none', headAlsoLocates: true, syncretism: ['location', 'existence'], sources: [{ source: 'hualde-ortizdeurbina-2003' }] },
		{ language: 'sw', strategy: 'general-locational', expression: '-ko / -po / -mo', confidence: 'high', note: 'an agreeing locative copula built on the locative noun classes (16 pa-, 17 ku-, 18 mu-) and related to the locative referential concords. It states location — mbwa yuko nyumbani “the dog is at the house” — and existence alike: watu wapo “there are people”. The commoner existential is kuna.', origin: { value: 'locative', evidence: 'established' }, proform: 'none', headAlsoLocates: true, syncretism: ['location', 'existence'], sources: [{ source: 'marten-2013' }] },
		{ language: 'de', strategy: 'general-locational', expression: 'sein (ist / sind)', confidence: 'high', note: 'the plain copula competes with es gibt — Im Haus ist ein Hund', origin: { value: 'be', evidence: 'transparent' }, proform: 'none', headAlsoLocates: true, syncretism: ['location', 'existence'] },
		{ language: 'cy', strategy: 'general-locational', expression: 'mae', confidence: 'high', note: 'mae heads both clause types — mae’r ci yn y tŷ “the dog is in the house” against mae ci yn y tŷ “there is a dog in the house” — and the same form of bod carries possession: mae car gan Sioned.', origin: { value: 'be', evidence: 'transparent' }, proform: 'none', headAlsoLocates: true, syncretism: ['location', 'existence', 'possession'], sources: [{ source: 'king-2015' }] },
		{ language: 'ga', strategy: 'general-locational', expression: 'tá', confidence: 'high', note: 'the substantive verb bí. tá cat sa seomra and tá an cat sa seomra differ only in the definiteness of the subject, and the same verb carries possession on a prepositional frame — tá carr agam “there is a car at-me”.', origin: { value: 'be', evidence: 'transparent' }, proform: 'none', headAlsoLocates: true, syncretism: ['location', 'existence', 'possession'], citationNeeded: true },
		{ language: 'gd', strategy: 'general-locational', expression: 'tha', confidence: 'high', note: 'the substantive verb bi, with possession on the same prepositional frame as Irish — tha cù agam.', origin: { value: 'be', evidence: 'transparent' }, proform: 'none', headAlsoLocates: true, syncretism: ['location', 'existence', 'possession'], citationNeeded: true },
		{ language: 'gv', strategy: 'general-locational', expression: 'ta', confidence: 'medium', note: 'the substantive verb ve, patterning with Irish tá and Scottish Gaelic tha; possession likewise takes a prepositional possessor — ta moddey aym.', origin: { value: 'be', evidence: 'transparent' }, proform: 'none', headAlsoLocates: true, syncretism: ['location', 'existence', 'possession'], citationNeeded: true },
		{ language: 'kw', strategy: 'general-locational', expression: 'yma', confidence: 'medium', note: 'the affirmative 3SG present of bos, heading both yma kath y’n stevel and the definite locational clause. Non-affirmative clauses with an indefinite subject switch to eus, as Welsh switches from mae to oes. Possession uses the same verb with a prepositional possessor — yma ki dhymm.', origin: { value: 'be', evidence: 'transparent' }, proform: 'none', headAlsoLocates: true, syncretism: ['location', 'existence', 'possession'], citationNeeded: true },
		{ language: 'br', strategy: 'general-locational', expression: 'zo', confidence: 'medium', note: 'a present form of bezañ “be”. Recorded as location plus existence only: Breton possession is kaout (am eus), built on bezañ but lexicalized as its own verb, so the plain zo of this row does not itself carry possession.', origin: { value: 'be', evidence: 'transparent' }, proform: 'none', headAlsoLocates: true, syncretism: ['location', 'existence'], citationNeeded: true },
		{ language: 'la', strategy: 'general-locational', expression: 'est / sunt', confidence: 'high', note: 'plain copula esse; ground-first order carries the existential reading — in flumine aqua est. The dative of possession uses the same copula: est mihi liber “to me is a book”.', origin: { value: 'be', evidence: 'transparent' }, proform: 'none', headAlsoLocates: true, syncretism: ['location', 'existence', 'possession'] },
		{ language: 'ro', strategy: 'general-locational', expression: 'este / e', confidence: 'high', note: 'the plain copula a fi carries the existential reading with an indefinite pivot — este o pisică în cameră — and locates definite subjects unchanged. The dedicated verb a exista is available for explicit assertions of existence.', origin: { value: 'be', evidence: 'transparent' }, proform: 'none', headAlsoLocates: true, syncretism: ['location', 'existence'], citationNeeded: true },
		{ language: 'hi', strategy: 'general-locational', expression: 'है', transliteration: 'hai', confidence: 'high', note: 'the copula honā doubles as the existential predicate, and carries possession with a postpositional possessor — mere pās kitāb hai “near me a book is”', origin: { value: 'be', evidence: 'transparent' }, proform: 'none', headAlsoLocates: true, syncretism: ['location', 'existence', 'possession'] },
		{ language: 'hu', strategy: 'general-locational', expression: 'van', confidence: 'high', note: 'van marks both location and existence. In the possessive clause the possessed noun carries the possessive suffix and the possessor may take dative marking — Marinak van egy kutyája.', origin: { value: 'be', evidence: 'transparent' }, proform: 'none', headAlsoLocates: true, syncretism: ['location', 'existence', 'possession'] },
		{ language: 'ar', strategy: 'general-locational', expression: 'هناك', transliteration: 'hunāka', confidence: 'high', note: 'the locative deictic is itself the predicate, with no copula in the present. It heads a plain locational clause with a definite subject — al-kitābu hunāka “the book is there” — as well as the existential hunāka kitābun.', origin: { value: 'deictic', evidence: 'transparent' }, proform: 'none', headAlsoLocates: true, syncretism: ['location', 'existence'] },
		{ language: 'ar', strategy: 'general-locational', expression: 'يوجد', transliteration: 'yūjad', confidence: 'high', note: 'passive of wajada “find”, so literally “is found”. It also takes definite subjects — yūjadu l-muʿallimu fī l-ġurfa “the teacher is in the room”.', origin: { value: 'find', evidence: 'transparent' }, proform: 'none', headAlsoLocates: true, syncretism: ['location', 'existence'] },

		// ─── Copula with a proform ────────────────────────────────────────────
		{ language: 'en', strategy: 'copular-proform', expression: 'there is / there are', confidence: 'high', note: 'expletive there fills the subject slot and the coda is optional. The pivot resists a definite — *there is the book on the table — while the plain copula takes one freely: the book is on the table.', origin: { value: 'be', evidence: 'transparent' }, proform: 'expletive', headAlsoLocates: true, syncretism: ['location', 'existence'], sources: [{ source: 'mcnally-2011' }, { source: 'bentley-ciconte-cruschina-2015' }] },
		{ language: 'nl', strategy: 'copular-proform', expression: 'er is / er zijn', confidence: 'high', note: 'er is the unstressed locative pro-form paired with stressed daar “there”, so the element is locative in origin rather than a bare expletive. The copula locates definite subjects on its own — de kat is in de kamer.', origin: { value: 'be', evidence: 'transparent' }, proform: 'locative', headAlsoLocates: true, syncretism: ['location', 'existence'], citationNeeded: true },
		{ language: 'af', strategy: 'copular-proform', expression: 'daar is', confidence: 'high', note: 'the full locative adverb daar “there” fills the slot, without the unstressed/stressed split Dutch draws between er and daar.', origin: { value: 'be', evidence: 'transparent' }, proform: 'locative', headAlsoLocates: true, syncretism: ['location', 'existence'], citationNeeded: true },
		{ language: 'da', strategy: 'copular-proform', expression: 'der er', confidence: 'high', note: 'der “there” against the expletive det of the Norwegian and Icelandic pattern.', origin: { value: 'be', evidence: 'transparent' }, proform: 'locative', headAlsoLocates: true, syncretism: ['location', 'existence'], citationNeeded: true },
		{ language: 'fy', strategy: 'copular-proform', expression: 'der is', confidence: 'medium', note: 'der patterns with Danish der and Dutch er rather than with the expletive det type. Confidence is medium because the proform is read off the construction rather than from a grammar.', origin: { value: 'be', evidence: 'transparent' }, proform: 'locative', headAlsoLocates: true, syncretism: ['location', 'existence'], citationNeeded: true },
		{ language: 'nb', strategy: 'copular-proform', expression: 'det er', confidence: 'high', note: 'expletive det “it”, not a locative. Nynorsk has the same frame — det er ein katt.', origin: { value: 'be', evidence: 'transparent' }, proform: 'expletive', headAlsoLocates: true, syncretism: ['location', 'existence'], citationNeeded: true },
		{ language: 'is', strategy: 'copular-proform', expression: 'það er', confidence: 'high', note: 'expletive það “it”; the pivot stays indefinite while the plain copula locates definite subjects.', origin: { value: 'be', evidence: 'transparent' }, proform: 'expletive', headAlsoLocates: true, syncretism: ['location', 'existence'], citationNeeded: true },
		{ language: 'fo', strategy: 'copular-proform', expression: 'tað er', confidence: 'medium', note: 'expletive tað “it”, matching the Icelandic frame.', origin: { value: 'be', evidence: 'transparent' }, proform: 'expletive', headAlsoLocates: true, syncretism: ['location', 'existence'], citationNeeded: true },
		{ language: 'yi', strategy: 'copular-proform', expression: 'עס איז', transliteration: 'es iz', confidence: 'high', note: 'expletive עס “it”, as in German es, but with the copula rather than the geben “give” frame that German prefers.', origin: { value: 'be', evidence: 'transparent' }, proform: 'expletive', headAlsoLocates: true, syncretism: ['location', 'existence'], citationNeeded: true },
		{ language: 'lb', strategy: 'copular-proform', expression: 'et ass', confidence: 'medium', note: 'expletive et “it” with the copula, beside the German es gibt frame of its neighbour.', origin: { value: 'be', evidence: 'transparent' }, proform: 'expletive', headAlsoLocates: true, syncretism: ['location', 'existence'], citationNeeded: true },
		{ language: 'it', strategy: 'copular-proform', expression: 'c’è / ci sono', confidence: 'high', note: 'the clitic ci plus essere “be”. ci is locative in origin, though in the existential many analyses treat it as a bleached expletive.', origin: { value: 'be', evidence: 'transparent' }, proform: 'locative', headAlsoLocates: true, syncretism: ['location', 'existence'], sources: [{ source: 'freeze-1992' }, { source: 'bentley-ciconte-cruschina-2015' }] },
		{ language: 'co', strategy: 'copular-proform', expression: 'ci hè', confidence: 'high', note: 'the locative clitic ci plus esse “be”, the same shape as Italian c’è.', origin: { value: 'be', evidence: 'transparent' }, proform: 'locative', headAlsoLocates: true, syncretism: ['location', 'existence'], citationNeeded: true },

		// ─── Possessive frame ─────────────────────────────────────────────────
		{ language: 'fr', strategy: 'possessive', expression: 'il y a', confidence: 'high', note: 'expletive il, locative y, and avoir “have”, which is still the ordinary possessive verb. The pivot is an object and controls no agreement — il y a des livres, never *il y ont. avoir states possession, not location.', origin: { value: 'have', evidence: 'transparent' }, proform: 'locative', headAlsoLocates: false, syncretism: ['existence', 'possession'], sources: [{ source: 'freeze-1992' }, { source: 'stassen-2009' }] },
		{ language: 'ca', strategy: 'possessive', expression: 'hi ha', confidence: 'high', note: 'locative clitic hi plus haver “have”. The pivot is an object and controls no agreement — hi ha gats, never *hi han gats. haver has withdrawn to the auxiliary and this existential; ordinary possession is tenir, so the lexeme no longer covers possession the way French avoir does.', origin: { value: 'have', evidence: 'transparent' }, proform: 'locative', headAlsoLocates: false, syncretism: ['existence'], citationNeeded: true },
		{ language: 'oc', strategy: 'possessive', expression: 'i a', confidence: 'medium', note: 'locative i plus aver “have”, matching the French and Catalan frame. Confidence is medium because whether aver still carries ordinary possession varies across the dialects this single row stands for.', origin: { value: 'have', evidence: 'transparent' }, proform: 'locative', headAlsoLocates: false, syncretism: ['existence', 'possession'], citationNeeded: true },
		{ language: 'wa', strategy: 'possessive', expression: 'i gn a', confidence: 'medium', note: 'locative i and the verb aveur “have”, parallel to French il y a with an extra gn.', origin: { value: 'have', evidence: 'transparent' }, proform: 'locative', headAlsoLocates: false, syncretism: ['existence', 'possession'], citationNeeded: true },
		{ language: 'zh', strategy: 'possessive', expression: '有', transliteration: 'yǒu', confidence: 'high', note: 'the ordinary possessive verb also predicates existence in the frame [place] 有 [pivot]. Plain location of a known entity takes 在 instead — 书在桌上.', origin: { value: 'have', evidence: 'transparent' }, proform: 'none', headAlsoLocates: false, syncretism: ['existence', 'possession'], sources: [{ source: 'heine-kuteva-2002', locator: 's.v. HAVE' }] },
		{ language: 'vi', strategy: 'possessive', expression: 'có', confidence: 'medium', note: 'có “have, possess” serves as the existential predicate; plain location normally takes ở. có is also an affirmative focus marker and can appear before ở in that role, which makes the two uses hard to tell apart.', origin: { value: 'have', evidence: 'transparent' }, proform: 'none', headAlsoLocates: false, syncretism: ['existence', 'possession'] },
		{ language: 'sw', strategy: 'possessive', expression: 'kuna / pana / mna', confidence: 'high', note: 'locative class agreement (cl.17 ku-, cl.16 pa-, cl.18 m-) plus comitative -na “with”, the same -na that builds possession in nina “I have”. Marten calls these locative-possessive constructions; they cannot take a definite theme as an ordinary subject.', origin: { value: 'comitative', evidence: 'transparent' }, proform: 'locative', headAlsoLocates: false, syncretism: ['existence', 'possession'], sources: [{ source: 'marten-2013' }] },

		// ─── Specialized existential ──────────────────────────────────────────
		{ language: 'cy', strategy: 'specialized-existential', expression: 'oes', confidence: 'high', note: 'the existential form of bod in present interrogatives, with does dim supplying the negative. It cannot take a definite subject — *oes y ci yn y tŷ, where the locational clause needs mae, or ydy in a question.', origin: { value: 'be', evidence: 'transparent' }, proform: 'none', headAlsoLocates: false, syncretism: ['location', 'existence', 'possession'], sources: [{ source: 'king-2015' }] },
		{ language: 'tr', strategy: 'specialized-existential', expression: 'var / yok', confidence: 'high', note: 'existential and possessive predicate, usually analysed as nominal predication; uninflected for person but takes copular morphology (var-dır, var-dı). Plain location uses no var — kitap masada. A location is typical but optional: Tanrı var “God exists”. Suppletive negative yok. Old Turkic bar “existence, wealth” is a noun, which is why the modern predicate takes copular rather than verbal morphology.', origin: { value: 'exist', evidence: 'established' }, proform: 'none', headAlsoLocates: false, syncretism: ['existence', 'possession'], sources: [{ source: 'stassen-2009' }] },
		{ language: 'he', strategy: 'specialized-existential', expression: 'יש / אין', transliteration: 'yesh / ein', confidence: 'high', note: 'invariant existential particles; a definite located subject drops yesh entirely. The deeper source is debated, so it is recorded as an existential element rather than assigned a lexical domain.', origin: { value: 'exist', evidence: 'unknown' }, proform: 'none', headAlsoLocates: false, syncretism: ['existence', 'possession'], sources: [{ source: 'veselinova-hamari-2022' }] },
		{ language: 'tl', strategy: 'specialized-existential', expression: 'may / mayroon', confidence: 'high', note: 'one predicate for existence and possession, with no transitive HAVE-verb anywhere in the language. May pusa sa bahay “there is a cat in the house” is subjectless; May pera ako “I have money” is the same predicate with the possessor added as the ang-phrase. Plain location of a definite entity takes nasa instead — Nasa bahay ang pusa. The longer mayroon is may plus the locative demonstrative roon “there”, fused as in Spanish hay. Suppletive negative wala covers non-existence and non-possession alike.', origin: { value: 'opaque', evidence: 'unknown' }, proform: 'none', headAlsoLocates: false, syncretism: ['existence', 'possession'], sources: [{ source: 'schachter-otanes-1972' }, { source: 'sabbagh-2009' }] },
		{ language: 'ru', strategy: 'specialized-existential', expression: 'есть / нет', transliteration: 'jest’ / net', confidence: 'high', note: 'есть descends from the 3sg present of быть, but ordinary present locational clauses take zero and reject it — твой мобильник (*есть) на кухне — so есть is now reserved for existential and possessive assertion and does not agree. Negative нет takes a genitive pivot.', origin: { value: 'be', evidence: 'established' }, proform: 'none', headAlsoLocates: false, syncretism: ['existence', 'possession'], sources: [{ source: 'stassen-2009' }, { source: 'freeze-1992' }] },
		{ language: 'es', strategy: 'specialized-existential', expression: 'hay', confidence: 'high', note: 'from ha + y (< Latin ibi), but haber is no longer the ordinary possessive verb — that is tener — and the -y has fused, so synchronically hay is a single invariant impersonal existential rather than verb plus proform.', origin: { value: 'have', evidence: 'established' }, proform: 'none', headAlsoLocates: false, syncretism: ['existence'], sources: [{ source: 'stassen-2009' }] },
		{ language: 'pt', strategy: 'specialized-existential', expression: 'há', confidence: 'high', note: 'haver 3SG, invariant and impersonal — há gatos, never *hão gatos. Ordinary possession is ter, so haver survives here and as an auxiliary. Colloquial Brazilian Portuguese largely replaces it with tem.', origin: { value: 'have', evidence: 'established' }, proform: 'none', headAlsoLocates: false, syncretism: ['existence'], citationNeeded: true },
		{ language: 'gl', strategy: 'specialized-existential', expression: 'hai', confidence: 'high', note: 'the Spanish hay pattern: haber fused with a locative element and now invariant, while ordinary possession is ter.', origin: { value: 'have', evidence: 'established' }, proform: 'none', headAlsoLocates: false, syncretism: ['existence'], citationNeeded: true },
		{ language: 'ast', strategy: 'specialized-existential', expression: 'hai', confidence: 'medium', note: 'the same fused impersonal as Galician and Spanish, with tener carrying possession.', origin: { value: 'have', evidence: 'established' }, proform: 'none', headAlsoLocates: false, syncretism: ['existence'], citationNeeded: true },
		{ language: 'de', strategy: 'specialized-existential', expression: 'es gibt', confidence: 'high', note: 'literally “it gives”. It is not restricted to enduring existence — heute gibt es Pizza — and overlaps in use with sein.', origin: { value: 'give', evidence: 'transparent' }, proform: 'expletive', headAlsoLocates: false, syncretism: ['existence'], sources: [{ source: 'heine-kuteva-2002', locator: 's.v. GIVE > EXIST' }] },
		{ language: 'sv', strategy: 'specialized-existential', expression: 'det finns', confidence: 'high', note: 'with det the pivot is indefinite; without it, finnas states location of a definite subject — boken finns på biblioteket “the book is at the library”. finnas is related to finna “find” but is now a lexicalized verb “exist, be present” rather than a productive passive.', origin: { value: 'find', evidence: 'established' }, proform: 'expletive', headAlsoLocates: true, syncretism: ['location', 'existence'], sources: [{ source: 'holmes-hinchliffe-2003' }] },
		{ language: 'bxd', strategy: 'specialized-existential', expression: 'tʃàʔ', confidence: 'low', note: 'used of concrete things, and continues a verb “remain, be left over”. Pela chooses among three existential predicates by what kind of thing is said to exist; case is unmarked on both sides, so the intransitive analysis is provisional.', origin: { value: 'stay', evidence: 'established' }, proform: 'none', syncretism: ['existence'], sources: [{ source: 'masajaninga-2026-pela', note: 'reported by a linguist on X; a single speaker’s judgement rather than a published description' }] },
		{ language: 'bxd', strategy: 'specialized-existential', expression: 'pá', confidence: 'low', note: 'used of qualities and abstract things such as periods of time, from a verb “contain”. Whether it is transitive, intransitive or both is left open by the contributor.', origin: { value: 'have', evidence: 'established' }, proform: 'none', syncretism: ['existence'], sources: [{ source: 'masajaninga-2026-pela', note: 'reported by a linguist on X; a single speaker’s judgement rather than a published description' }] },
		{ language: 'bxd', strategy: 'specialized-existential', expression: 'ŋjí', confidence: 'low', note: 'used of people standing in a relationship — kin, friends — and continues a verb “dwell, live”.', origin: { value: 'stay', evidence: 'established' }, proform: 'none', syncretism: ['existence'], sources: [{ source: 'masajaninga-2026-pela', note: 'reported by a linguist on X; a single speaker’s judgement rather than a published description' }] },

		// ─── No verbal predicate ──────────────────────────────────────────────
		{ language: 'mi', strategy: 'nonverbal', expression: 'he X', confidence: 'medium', note: 'an affirmative existential can be he plus an indefinite nominal on its own — he kurī “there is a dog” — with no predicate head; he continues the Proto-Polynesian indefinite article. Whether kei/i in he kurī kei te kāinga head that clause is contested.', origin: { value: 'article', evidence: 'established' }, proform: 'none', syncretism: ['existence'], sources: [{ source: 'chung-ladusaw-2004' }] }
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
			gloss: 'river.INE water.ABS.ART be.3SG.LOC',
			literal: 'In-river water is.',
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
			original: 'Kuna mbwa nyumbani.',
			gloss: 'CL17.LOC-with CL9.dog house.LOC',
			literal: 'There-with a dog at-house.',
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
			{ language: 'ru', affirmative: 'есть', affirmativeTransliteration: 'jest’', negative: 'нет', negativeTransliteration: 'net', relation: 'suppletive', note: 'нет < ne yest’ (fused); negated noun goes into the genitive', sources: [{ source: 'veselinova-hamari-2022' }, { source: 'veselinova-2014' }] },
			{ language: 'tr', affirmative: 'var', negative: 'yok', relation: 'suppletive', note: 'invariant pair; canonical case study', sources: [{ source: 'veselinova-2014' }] },
			{ language: 'he', affirmative: 'יש', affirmativeTransliteration: 'yesh', negative: 'אין', negativeTransliteration: 'ein', relation: 'suppletive', note: 'invariant particles; both head their own clause', sources: [{ source: 'stassen-2009' }] },
			{ language: 'tl', affirmative: 'may / mayroon', negative: 'wala', relation: 'suppletive', note: 'wala negates existence and possession alike, matching the reach of may', sources: [{ source: 'schachter-otanes-1972' }, { source: 'sabbagh-2009' }] },
			{ language: 'ko', affirmative: '있다', affirmativeTransliteration: 'itda', negative: '없다', negativeTransliteration: 'eopda', relation: 'suppletive', note: 'distinct verb stems; both inflect normally' },
			{ language: 'cy', affirmative: 'mae', negative: 'does (dim)', relation: 'suppletive', note: 'does is a dedicated negative existential form of bod', sources: [{ source: 'willis-lucas-breitbarth-2013' }] },
			{ language: 'hu', affirmative: 'van', negative: 'nincs', relation: 'suppletive', note: 'nincs fuses nem + van; PL nincsenek', sources: [{ source: 'veselinova-2014' }] },
			{ language: 'ain', affirmative: 'an / oka', negative: 'isam', relation: 'suppletive', note: 'isam “not exist, be absent” is a dedicated negative existential verb', sources: [{ source: 'tamura-2000' }, { source: 'bugaeva-2012' }] },
			{ language: 'ja', affirmative: 'ある / いる', affirmativeTransliteration: 'aru / iru', negative: 'ない / いない', negativeTransliteration: 'nai / inai', relation: 'suppletive', note: 'aru ↔ nai is suppletive (distinct root); iru → inai is regular -nai negation', sources: [{ source: 'clark-1978' }] },

			// COMPOUND — dedicated/fused negator
			{ language: 'zh', affirmative: '有', affirmativeTransliteration: 'yǒu', negative: '没有', negativeTransliteration: 'méi yǒu', relation: 'compound', note: '没 is the dedicated negator for 有 (and for past); ordinary 不 never combines with 有' },
			{ language: 'sw', affirmative: 'kuna', negative: 'hakuna', relation: 'compound', note: 'ha- (negative class 17 prefix) + kuna; lexicalised in greetings like hakuna matata' },

			// SAME FORM + NEGATOR
			{ language: 'en', affirmative: 'there is', negative: 'there is no / isn’t', relation: 'same-with-negator', note: 'no (determiner) or not (clausal); both yield negative existence' },
			{ language: 'fr', affirmative: 'il y a', negative: 'il n’y a pas (de)', relation: 'same-with-negator', note: 'bipartite ne … pas; pas often dropped in speech (see Jespersen’s Cycle)', sources: [{ source: 'mosegaard-hansen-2013' }] },
			{ language: 'es', affirmative: 'hay', negative: 'no hay', relation: 'same-with-negator' },
			{ language: 'it', affirmative: 'c’è / ci sono', negative: 'non c’è / non ci sono', relation: 'same-with-negator' },
			{ language: 'de', affirmative: 'es gibt', negative: 'es gibt kein / nicht', relation: 'same-with-negator', note: 'kein (negative determiner) is the unmarked option for indefinite nouns' },
			{ language: 'sv', affirmative: 'det finns', negative: 'det finns inte / inget', relation: 'same-with-negator' },
			{ language: 'la', affirmative: 'est', negative: 'nōn est', relation: 'same-with-negator' },
			{ language: 'ar', affirmative: 'هناك / يوجد', affirmativeTransliteration: 'hunāka / yūjad', negative: 'ليس هناك / لا يوجد', negativeTransliteration: 'laysa hunāka / lā yūjad', relation: 'same-with-negator', note: 'laysa is the standard nominal negator; lā yūjad uses the verbal lā' },
			{ language: 'hi', affirmative: 'है', affirmativeTransliteration: 'hai', negative: 'नहीं है', negativeTransliteration: 'nahī̃ hai', relation: 'same-with-negator' },
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
		{ source: 'creissels-2019', note: 'existential clauses as inverse-locational predication' },
		{ source: 'freeze-1992' },
		{ source: 'mcnally-2011' },
		{ source: 'stassen-2009' },
		{ source: 'heine-1997' },
		{ source: 'dryer-haspelmath-2013', locator: 'Chapter 119: Nominal and Locational Predication' }
	]
};
