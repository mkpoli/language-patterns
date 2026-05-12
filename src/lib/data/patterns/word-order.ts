import type { Pattern } from '$lib/types';

// Strategy assignments follow the dominant order classification in WALS
// Chapter 81 (Dryer 2013). Where two orders are reported as comparably
// frequent (typically OV / VO mix), the attestation is filed under the
// historically older or the one most-cited in standard grammars; this is
// noted in the `note` field. "Free / no dominant" covers languages with
// pragmatically-driven scrambling, focus-fronting, or information-structure-
// driven order.
//
// Confidence: 'high' for languages with extensive grammatical description in
// the major typological surveys (WALS sample); 'medium' for languages where
// the answer is well-attested but information-structure variation is
// significant; 'low' is reserved for cases I’m uncertain about and would
// rather verify against a primary grammar.
//
// TODO: many languages here are flagged 'medium' purely out of caution and
// could be lifted to 'high' once cross-checked against Dryer 2013 directly.
// TODO: add aligned example sentences ("the dog sees the cat") for one
// representative language per order, with morpheme gloss.
//
// Source: Dryer, M. S. (2013). "Order of Subject, Object and Verb."
// WALS Online (v2020.4), Chapter 81.

export const wordOrder: Pattern = {
	slug: 'word-order',
	title: 'Basic word order',
	shortTitle: 'S, O, V',
	question: 'In what order do languages arrange subject, object, and verb?',
	summary:
		'Of the six logically possible orderings of subject, object, and verb, only two account for most of the world: SOV (subject-object-verb, the largest group — Japanese, Hindi, Korean, Turkish, Quechua, Navajo) and SVO (English, Mandarin, Romance, most Bantu). VSO (verb-initial) is consistent across Celtic, much of Polynesian, Classical Arabic, and Biblical Hebrew. VOS shows up famously in Malagasy. Object-initial orders (OVS, OSV) are vanishingly rare and the textbook examples — Hixkaryana, Nadëb, Warao — are still debated. Many languages have no fixed dominant order at all: word order is set by information structure (Latin, Sanskrit, Hungarian, Russian to a lesser extent) or by extensive scrambling (Warlpiri, Dyirbal).',
	category: ['Word Order', 'Grammar & Morphosyntax'],
	strategies: [
		{ id: 'sov', label: 'SOV', schematic: '[S] [O] [V]', description: 'Subject – Object – Verb. The most common order globally (≈45% of the WALS sample).', color: 'sky' },
		{ id: 'svo', label: 'SVO', schematic: '[S] [V] [O]', description: 'Subject – Verb – Object. The second-largest group (≈42%).', color: 'amber' },
		{ id: 'vso', label: 'VSO', schematic: '[V] [S] [O]', description: 'Verb – Subject – Object. Robust in Celtic, Polynesian, Classical Semitic, and parts of Mesoamerica.', color: 'emerald' },
		{ id: 'vos', label: 'VOS', schematic: '[V] [O] [S]', description: 'Verb – Object – Subject. Rare; textbook case is Malagasy.', color: 'violet' },
		{ id: 'ovs', label: 'OVS', schematic: '[O] [V] [S]', description: 'Object – Verb – Subject. Extremely rare; Hixkaryana is the canonical attestation.', color: 'rose' },
		{ id: 'free', label: 'Free / no dominant', schematic: '[…] driven by information structure', description: 'Word order is determined pragmatically — by topic, focus, or contrast — rather than by a fixed syntactic template. Includes Latin, Sanskrit, Hungarian, and many Australian languages.', color: 'slate' }
	],
	attestations: [
		// ─── SOV ─────────────────────────────────────────────────────────────
		// Japonic, Koreanic, Ainu
		{ language: 'ja', strategy: 'sov', expression: 'SOV', confidence: 'high', sources: [{ source: 'dryer-2013-svo' }] },
		{ language: 'ko', strategy: 'sov', expression: 'SOV', confidence: 'high', sources: [{ source: 'dryer-2013-svo' }] },
		{ language: 'ain', strategy: 'sov', expression: 'SOV', confidence: 'high', note: 'verb-final; case marking + agreement', sources: [{ source: 'tamura-2000' }] },
		// Turkic
		{ language: 'tr', strategy: 'sov', expression: 'SOV', confidence: 'high', sources: [{ source: 'dryer-2013-svo' }] },
		{ language: 'az', strategy: 'sov', expression: 'SOV', confidence: 'high' },
		{ language: 'tk', strategy: 'sov', expression: 'SOV', confidence: 'high' },
		{ language: 'uz', strategy: 'sov', expression: 'SOV', confidence: 'high' },
		{ language: 'ug', strategy: 'sov', expression: 'SOV', confidence: 'high' },
		{ language: 'kk', strategy: 'sov', expression: 'SOV', confidence: 'high' },
		{ language: 'ky', strategy: 'sov', expression: 'SOV', confidence: 'high' },
		{ language: 'tt', strategy: 'sov', expression: 'SOV', confidence: 'high' },
		{ language: 'ba', strategy: 'sov', expression: 'SOV', confidence: 'high' },
		{ language: 'cv', strategy: 'sov', expression: 'SOV', confidence: 'high' },
		{ language: 'sah', strategy: 'sov', expression: 'SOV', confidence: 'high' },
		// Mongolic, Tungusic
		{ language: 'mn', strategy: 'sov', expression: 'SOV', confidence: 'high' },
		{ language: 'bua', strategy: 'sov', expression: 'SOV', confidence: 'high' },
		{ language: 'xal', strategy: 'sov', expression: 'SOV', confidence: 'high' },
		{ language: 'mnc', strategy: 'sov', expression: 'SOV', confidence: 'high' },
		{ language: 'evn', strategy: 'sov', expression: 'SOV', confidence: 'high' },
		// Indo-Aryan, Iranian
		{ language: 'hi', strategy: 'sov', expression: 'SOV', confidence: 'high', sources: [{ source: 'dryer-2013-svo' }] },
		{ language: 'ur', strategy: 'sov', expression: 'SOV', confidence: 'high' },
		{ language: 'bn', strategy: 'sov', expression: 'SOV', confidence: 'high' },
		{ language: 'pa', strategy: 'sov', expression: 'SOV', confidence: 'high' },
		{ language: 'mr', strategy: 'sov', expression: 'SOV', confidence: 'high' },
		{ language: 'gu', strategy: 'sov', expression: 'SOV', confidence: 'high' },
		{ language: 'ne', strategy: 'sov', expression: 'SOV', confidence: 'high' },
		{ language: 'si', strategy: 'sov', expression: 'SOV', confidence: 'high' },
		{ language: 'as', strategy: 'sov', expression: 'SOV', confidence: 'high' },
		{ language: 'odi', strategy: 'sov', expression: 'SOV', confidence: 'high' },
		{ language: 'sd', strategy: 'sov', expression: 'SOV', confidence: 'high' },
		{ language: 'pi', strategy: 'sov', expression: 'SOV', confidence: 'high', note: 'Pali grammars show pragmatically-flexible OV order' },
		{ language: 'fa', strategy: 'sov', expression: 'SOV', confidence: 'high' },
		{ language: 'tg', strategy: 'sov', expression: 'SOV', confidence: 'high' },
		{ language: 'ps', strategy: 'sov', expression: 'SOV', confidence: 'high' },
		{ language: 'ku', strategy: 'sov', expression: 'SOV', confidence: 'high', note: 'Kurmanji; some Sorani patterns differ' },
		{ language: 'os', strategy: 'sov', expression: 'SOV', confidence: 'high' },
		{ language: 'bal', strategy: 'sov', expression: 'SOV', confidence: 'high' },
		// Caucasian
		{ language: 'ka', strategy: 'sov', expression: 'SOV', confidence: 'high', note: 'flexible but OV-leaning; some grammars list as "no dominant"' },
		{ language: 'xmf', strategy: 'sov', expression: 'SOV', confidence: 'medium' },
		{ language: 'av', strategy: 'sov', expression: 'SOV', confidence: 'high' },
		{ language: 'lez', strategy: 'sov', expression: 'SOV', confidence: 'high' },
		{ language: 'ady', strategy: 'sov', expression: 'SOV', confidence: 'high' },
		{ language: 'ab', strategy: 'sov', expression: 'SOV', confidence: 'high' },
		// Armenian (SOV)
		{ language: 'hy', strategy: 'sov', expression: 'SOV', confidence: 'high' },
		// Uralic (SOV-leaning)
		{ language: 'mns', strategy: 'sov', expression: 'SOV', confidence: 'high' },
		{ language: 'kca', strategy: 'sov', expression: 'SOV', confidence: 'high' },
		{ language: 'udm', strategy: 'sov', expression: 'SOV', confidence: 'high' },
		{ language: 'kpv', strategy: 'sov', expression: 'SOV', confidence: 'high' },
		{ language: 'chm', strategy: 'sov', expression: 'SOV', confidence: 'high' },
		{ language: 'myv', strategy: 'sov', expression: 'SOV', confidence: 'medium', note: 'OV-leaning but flexible' },
		{ language: 'fi', strategy: 'svo', expression: 'SVO', confidence: 'high', note: 'flexible word order; SVO is unmarked' },
		// Sino-Tibetan (Tibeto-Burman branch is SOV)
		{ language: 'bo', strategy: 'sov', expression: 'SOV', confidence: 'high' },
		{ language: 'my', strategy: 'sov', expression: 'SOV', confidence: 'high' },
		{ language: 'ii', strategy: 'sov', expression: 'SOV', confidence: 'high' },
		{ language: 'dz', strategy: 'sov', expression: 'SOV', confidence: 'high' },
		{ language: 'new', strategy: 'sov', expression: 'SOV', confidence: 'high' },
		{ language: 'mni', strategy: 'sov', expression: 'SOV', confidence: 'high' },
		{ language: 'lis', strategy: 'sov', expression: 'SOV', confidence: 'high' },
		// Dravidian (all SOV)
		{ language: 'ta', strategy: 'sov', expression: 'SOV', confidence: 'high' },
		{ language: 'te', strategy: 'sov', expression: 'SOV', confidence: 'high' },
		{ language: 'kn', strategy: 'sov', expression: 'SOV', confidence: 'high' },
		{ language: 'ml', strategy: 'sov', expression: 'SOV', confidence: 'high' },
		{ language: 'tcy', strategy: 'sov', expression: 'SOV', confidence: 'high' },
		{ language: 'brh', strategy: 'sov', expression: 'SOV', confidence: 'high' },
		// Basque
		{ language: 'eu', strategy: 'sov', expression: 'SOV', confidence: 'high', note: 'SOV unmarked; OSV / SVO permitted under focus' },
		// Eskimo-Aleut (SOV)
		{ language: 'iu', strategy: 'sov', expression: 'SOV', confidence: 'high' },
		{ language: 'kl', strategy: 'sov', expression: 'SOV', confidence: 'high' },
		{ language: 'ess', strategy: 'sov', expression: 'SOV', confidence: 'high' },
		// Athabaskan
		{ language: 'nv', strategy: 'sov', expression: 'SOV', confidence: 'high' },
		// Iroquoian, Algic, Siouan, Uto-Aztecan (mostly verb-medial / verb-final tendencies vary)
		{ language: 'chr', strategy: 'sov', expression: 'SOV', confidence: 'medium', note: 'verb-final tendency but order is largely free' },
		{ language: 'cr', strategy: 'free', expression: 'free / no dominant', confidence: 'medium' },
		{ language: 'oj', strategy: 'free', expression: 'free / no dominant', confidence: 'medium' },
		{ language: 'lkt', strategy: 'sov', expression: 'SOV', confidence: 'high' },
		{ language: 'hop', strategy: 'sov', expression: 'SOV', confidence: 'high' },
		// Andean
		{ language: 'qu', strategy: 'sov', expression: 'SOV', confidence: 'high' },
		{ language: 'ay', strategy: 'sov', expression: 'SOV', confidence: 'high' },
		// Tupian
		{ language: 'gn', strategy: 'sov', expression: 'SOV', confidence: 'medium', note: 'historically SOV; modern Paraguayan Guaraní shows SVO under Spanish contact' },
		// Cushitic, Ethiosemitic, Omotic — verb-final
		{ language: 'am', strategy: 'sov', expression: 'SOV', confidence: 'high', note: 'Ethio-Semitic is verb-final (areal feature of the Ethiopian highlands)' },
		{ language: 'ti', strategy: 'sov', expression: 'SOV', confidence: 'high' },
		{ language: 'so', strategy: 'sov', expression: 'SOV', confidence: 'high' },
		{ language: 'om', strategy: 'sov', expression: 'SOV', confidence: 'high' },
		// Ket, Chukchi, Nivkh, Burushaski
		{ language: 'ket', strategy: 'sov', expression: 'SOV', confidence: 'high' },
		{ language: 'ckt', strategy: 'sov', expression: 'SOV', confidence: 'medium' },
		{ language: 'niv', strategy: 'sov', expression: 'SOV', confidence: 'high' },
		{ language: 'bsk', strategy: 'sov', expression: 'SOV', confidence: 'high' },
		// PNG
		{ language: 'kal', strategy: 'sov', expression: 'SOV', confidence: 'high', note: 'Trans-New Guinea family is strongly verb-final' },
		// Akkadian — SOV (unusual for Semitic; areal contact with Sumerian)
		{ language: 'akk', strategy: 'sov', expression: 'SOV', confidence: 'high', note: 'verb-final unlike other Semitic; convergence with Sumerian' },

		// ─── SVO ─────────────────────────────────────────────────────────────
		{ language: 'en', strategy: 'svo', expression: 'SVO', confidence: 'high' },
		{ language: 'de', strategy: 'svo', expression: 'SVO / V2', confidence: 'high', note: 'matrix clauses are V2 (verb-second); embedded clauses are SOV' },
		{ language: 'nl', strategy: 'svo', expression: 'SVO / V2', confidence: 'high', note: 'V2 matrix, SOV embedded — like German' },
		{ language: 'af', strategy: 'svo', expression: 'SVO / V2', confidence: 'high' },
		{ language: 'sv', strategy: 'svo', expression: 'SVO / V2', confidence: 'high' },
		{ language: 'da', strategy: 'svo', expression: 'SVO / V2', confidence: 'high' },
		{ language: 'nb', strategy: 'svo', expression: 'SVO / V2', confidence: 'high' },
		{ language: 'is', strategy: 'svo', expression: 'SVO / V2', confidence: 'high' },
		{ language: 'fo', strategy: 'svo', expression: 'SVO / V2', confidence: 'high' },
		{ language: 'yi', strategy: 'svo', expression: 'SVO / V2', confidence: 'high' },
		// Romance
		{ language: 'fr', strategy: 'svo', expression: 'SVO', confidence: 'high' },
		{ language: 'es', strategy: 'svo', expression: 'SVO', confidence: 'high', note: 'fairly flexible; SVO unmarked' },
		{ language: 'it', strategy: 'svo', expression: 'SVO', confidence: 'high' },
		{ language: 'pt', strategy: 'svo', expression: 'SVO', confidence: 'high' },
		{ language: 'ro', strategy: 'svo', expression: 'SVO', confidence: 'high' },
		{ language: 'ca', strategy: 'svo', expression: 'SVO', confidence: 'high' },
		{ language: 'gl', strategy: 'svo', expression: 'SVO', confidence: 'high' },
		{ language: 'oc', strategy: 'svo', expression: 'SVO', confidence: 'high' },
		{ language: 'rm', strategy: 'svo', expression: 'SVO', confidence: 'high' },
		{ language: 'sc', strategy: 'svo', expression: 'SVO', confidence: 'medium' },
		// Modern Slavic
		{ language: 'ru', strategy: 'svo', expression: 'SVO', confidence: 'high', note: 'flexible / pragmatically-driven; SVO is the unmarked default' },
		{ language: 'uk', strategy: 'svo', expression: 'SVO', confidence: 'high' },
		{ language: 'be', strategy: 'svo', expression: 'SVO', confidence: 'high' },
		{ language: 'pl', strategy: 'svo', expression: 'SVO', confidence: 'high', note: 'rich case allows scrambling' },
		{ language: 'cs', strategy: 'svo', expression: 'SVO', confidence: 'high' },
		{ language: 'sk', strategy: 'svo', expression: 'SVO', confidence: 'high' },
		{ language: 'bg', strategy: 'svo', expression: 'SVO', confidence: 'high' },
		{ language: 'mk', strategy: 'svo', expression: 'SVO', confidence: 'high' },
		{ language: 'sr', strategy: 'svo', expression: 'SVO', confidence: 'high' },
		{ language: 'hr', strategy: 'svo', expression: 'SVO', confidence: 'high' },
		{ language: 'sl', strategy: 'svo', expression: 'SVO', confidence: 'high' },
		// Hellenic, Albanian
		{ language: 'el', strategy: 'svo', expression: 'SVO', confidence: 'high', note: 'flexible' },
		{ language: 'sq', strategy: 'svo', expression: 'SVO', confidence: 'high' },
		// Baltic
		{ language: 'lt', strategy: 'svo', expression: 'SVO', confidence: 'high', note: 'flexible' },
		{ language: 'lv', strategy: 'svo', expression: 'SVO', confidence: 'high' },
		// Uralic (mostly SVO/free)
		{ language: 'et', strategy: 'svo', expression: 'SVO', confidence: 'high' },
		// Sinitic
		{ language: 'zh', strategy: 'svo', expression: 'SVO', confidence: 'high', note: 'with topicalisation it can surface as OSV' },
		{ language: 'yue', strategy: 'svo', expression: 'SVO', confidence: 'high' },
		{ language: 'wuu', strategy: 'svo', expression: 'SVO', confidence: 'high' },
		{ language: 'nan', strategy: 'svo', expression: 'SVO', confidence: 'high' },
		{ language: 'hak', strategy: 'svo', expression: 'SVO', confidence: 'high' },
		// Mainland Southeast Asia
		{ language: 'vi', strategy: 'svo', expression: 'SVO', confidence: 'high' },
		{ language: 'th', strategy: 'svo', expression: 'SVO', confidence: 'high' },
		{ language: 'lo', strategy: 'svo', expression: 'SVO', confidence: 'high' },
		{ language: 'km', strategy: 'svo', expression: 'SVO', confidence: 'high' },
		{ language: 'mnw', strategy: 'svo', expression: 'SVO', confidence: 'high' },
		{ language: 'za', strategy: 'svo', expression: 'SVO', confidence: 'high' },
		{ language: 'shn', strategy: 'svo', expression: 'SVO', confidence: 'medium' },
		{ language: 'hmn', strategy: 'svo', expression: 'SVO', confidence: 'high' },
		{ language: 'kha', strategy: 'svo', expression: 'SVO', confidence: 'high' },
		{ language: 'sat', strategy: 'sov', expression: 'SOV', confidence: 'high', note: 'Munda branch of Austroasiatic is SOV (areal contact with Indo-Aryan)' },
		// Western Austronesian
		{ language: 'id', strategy: 'svo', expression: 'SVO', confidence: 'high' },
		{ language: 'ms', strategy: 'svo', expression: 'SVO', confidence: 'high' },
		{ language: 'jv', strategy: 'svo', expression: 'SVO', confidence: 'high' },
		{ language: 'su', strategy: 'svo', expression: 'SVO', confidence: 'high' },
		{ language: 'ace', strategy: 'svo', expression: 'SVO', confidence: 'medium' },
		{ language: 'ban', strategy: 'svo', expression: 'SVO', confidence: 'medium' },
		{ language: 'min', strategy: 'svo', expression: 'SVO', confidence: 'medium' },
		{ language: 'pau', strategy: 'svo', expression: 'SVO', confidence: 'medium' },
		{ language: 'mh', strategy: 'svo', expression: 'SVO', confidence: 'medium' },
		// Bantu (all SVO)
		{ language: 'sw', strategy: 'svo', expression: 'SVO', confidence: 'high' },
		{ language: 'zu', strategy: 'svo', expression: 'SVO', confidence: 'high' },
		{ language: 'xh', strategy: 'svo', expression: 'SVO', confidence: 'high' },
		{ language: 'sn', strategy: 'svo', expression: 'SVO', confidence: 'high' },
		{ language: 'ny', strategy: 'svo', expression: 'SVO', confidence: 'high' },
		{ language: 'rw', strategy: 'svo', expression: 'SVO', confidence: 'high' },
		{ language: 'rn', strategy: 'svo', expression: 'SVO', confidence: 'high' },
		{ language: 'lg', strategy: 'svo', expression: 'SVO', confidence: 'high' },
		{ language: 'ki', strategy: 'svo', expression: 'SVO', confidence: 'high' },
		{ language: 'ln', strategy: 'svo', expression: 'SVO', confidence: 'high' },
		{ language: 'kg', strategy: 'svo', expression: 'SVO', confidence: 'high' },
		{ language: 'ts', strategy: 'svo', expression: 'SVO', confidence: 'high' },
		// Other Niger-Congo (mostly SVO)
		{ language: 'yo', strategy: 'svo', expression: 'SVO', confidence: 'high' },
		{ language: 'ig', strategy: 'svo', expression: 'SVO', confidence: 'high' },
		{ language: 'ak', strategy: 'svo', expression: 'SVO', confidence: 'high' },
		{ language: 'ee', strategy: 'svo', expression: 'SVO', confidence: 'high' },
		{ language: 'fon', strategy: 'svo', expression: 'SVO', confidence: 'high' },
		{ language: 'wo', strategy: 'svo', expression: 'SVO', confidence: 'high' },
		{ language: 'ff', strategy: 'svo', expression: 'SVO', confidence: 'high' },
		{ language: 'bm', strategy: 'sov', expression: 'SOV', confidence: 'high', note: 'Mande is SOV — unusual for Niger-Congo, where SVO dominates' },
		{ language: 'sg', strategy: 'svo', expression: 'SVO', confidence: 'medium' },
		// Hausa, modern Aramaic, Maltese, Egyptian/Moroccan Arabic
		{ language: 'ha', strategy: 'svo', expression: 'SVO', confidence: 'high' },
		{ language: 'aii', strategy: 'svo', expression: 'SVO', confidence: 'high', note: 'shift from classical VSO Aramaic' },
		{ language: 'mlt', strategy: 'svo', expression: 'SVO', confidence: 'high', note: 'shift from classical VSO Arabic' },
		{ language: 'arz', strategy: 'svo', expression: 'SVO', confidence: 'high' },
		{ language: 'ary', strategy: 'svo', expression: 'SVO', confidence: 'high' },
		// Other modern Semitic
		{ language: 'he', strategy: 'svo', expression: 'SVO', confidence: 'high', note: 'Modern Hebrew is SVO; Biblical Hebrew was VSO' },
		// Nilotic
		{ language: 'din', strategy: 'svo', expression: 'SVO', confidence: 'medium' },
		{ language: 'luo', strategy: 'svo', expression: 'SVO', confidence: 'high' },
		// Tok Pisin
		{ language: 'tpi', strategy: 'svo', expression: 'SVO', confidence: 'high' },
		// Mohawk — actually verb-medial / pragmatic; mark as free
		{ language: 'moh', strategy: 'free', expression: 'free / no dominant', confidence: 'medium' },
		// Nahuatl
		{ language: 'nah', strategy: 'svo', expression: 'SVO', confidence: 'medium', note: 'historically VSO, modern dialects often SVO under Spanish contact' },
		// Esperanto (constructed but the answer is well-defined)
		{ language: 'eo', strategy: 'svo', expression: 'SVO', confidence: 'high', note: 'accusative -n permits scrambling; SVO is by-far the dominant pattern' },

		// ─── VSO ─────────────────────────────────────────────────────────────
		{ language: 'cy', strategy: 'vso', expression: 'VSO', confidence: 'high', note: 'literary Welsh; colloquial uses periphrastic auxiliaries' },
		{ language: 'ga', strategy: 'vso', expression: 'VSO', confidence: 'high' },
		{ language: 'gd', strategy: 'vso', expression: 'VSO', confidence: 'high' },
		{ language: 'br', strategy: 'vso', expression: 'VSO', confidence: 'high' },
		{ language: 'kw', strategy: 'vso', expression: 'VSO', confidence: 'high' },
		{ language: 'gv', strategy: 'vso', expression: 'VSO', confidence: 'high' },
		{ language: 'ar', strategy: 'vso', expression: 'VSO', confidence: 'high', note: 'Classical Arabic; MSA permits SVO; many spoken dialects are SVO' },
		{ language: 'hbo', strategy: 'vso', expression: 'VSO', confidence: 'high' },
		{ language: 'syc', strategy: 'vso', expression: 'VSO', confidence: 'high' },
		{ language: 'ber', strategy: 'vso', expression: 'VSO', confidence: 'high' },
		{ language: 'mas', strategy: 'vso', expression: 'VSO', confidence: 'high' },
		{ language: 'tl', strategy: 'vso', expression: 'VSO / VOS', confidence: 'high', note: 'Philippine-type voice system; verb-initial' },
		{ language: 'ceb', strategy: 'vso', expression: 'VSO / VOS', confidence: 'high' },
		{ language: 'ilo', strategy: 'vso', expression: 'VSO', confidence: 'high' },
		{ language: 'hil', strategy: 'vso', expression: 'VSO', confidence: 'medium' },
		{ language: 'sm', strategy: 'vso', expression: 'VSO', confidence: 'high' },
		{ language: 'to', strategy: 'vso', expression: 'VSO', confidence: 'high' },
		{ language: 'haw', strategy: 'vso', expression: 'VSO', confidence: 'high', note: 'also reports of VOS in stative clauses' },
		{ language: 'mi', strategy: 'vso', expression: 'VSO', confidence: 'high' },
		{ language: 'ty', strategy: 'vso', expression: 'VSO', confidence: 'high' },
		{ language: 'fj', strategy: 'vso', expression: 'VSO', confidence: 'medium' },
		// Mayan tend toward V-initial (VOS or VSO)
		{ language: 'yua', strategy: 'vos', expression: 'VOS', confidence: 'high', note: 'V-initial with VOS as primary; VSO permitted' },
		{ language: 'quc', strategy: 'vso', expression: 'VSO', confidence: 'medium' },
		{ language: 'mam', strategy: 'vso', expression: 'VSO', confidence: 'medium' },
		{ language: 'tzo', strategy: 'vos', expression: 'VOS', confidence: 'medium' },
		{ language: 'zap', strategy: 'vso', expression: 'VSO', confidence: 'medium' },
		{ language: 'mix', strategy: 'vso', expression: 'VSO', confidence: 'medium' },

		// ─── VOS ─────────────────────────────────────────────────────────────
		{ language: 'mg', strategy: 'vos', expression: 'VOS', confidence: 'high', note: 'textbook example; Verb – Object – Subject' },

		// ─── OVS ─────────────────────────────────────────────────────────────
		{ language: 'hix', strategy: 'ovs', expression: 'OVS', confidence: 'high', note: 'Derbyshire 1979; the canonical Object-initial language' },

		// ─── Free / no dominant ──────────────────────────────────────────────
		{ language: 'la', strategy: 'free', expression: 'free / no dominant', confidence: 'high', note: 'pragmatically-driven; SOV statistically the most common in Classical prose' },
		{ language: 'grc', strategy: 'free', expression: 'free / no dominant', confidence: 'high' },
		{ language: 'sa', strategy: 'free', expression: 'free / no dominant', confidence: 'high', note: 'SOV statistically most common but order is famously flexible' },
		{ language: 'cu', strategy: 'free', expression: 'free / no dominant', confidence: 'medium' },
		{ language: 'got', strategy: 'free', expression: 'free / no dominant', confidence: 'medium' },
		{ language: 'hu', strategy: 'free', expression: 'free / no dominant', confidence: 'high', note: 'word order is information-structure-driven (topic + focus)' },
		{ language: 'se', strategy: 'free', expression: 'free / no dominant', confidence: 'medium' },
		{ language: 'cop', strategy: 'svo', expression: 'SVO', confidence: 'medium' },
		{ language: 'wbp', strategy: 'free', expression: 'free / no dominant', confidence: 'high', note: 'famously non-configurational; case marking + agreement carry the load' },
		{ language: 'dbl', strategy: 'free', expression: 'free / no dominant', confidence: 'high' },
		{ language: 'pjt', strategy: 'free', expression: 'free / no dominant', confidence: 'high' },
		// Click languages
		{ language: 'naq', strategy: 'sov', expression: 'SOV', confidence: 'medium' },
		{ language: 'ktz', strategy: 'svo', expression: 'SVO', confidence: 'medium' },
		// South American
		{ language: 'guc', strategy: 'sov', expression: 'SOV', confidence: 'medium', note: 'Arawakan; SOV documented in modern grammars' },

		// ─── Batch 2: latest language additions ──────────────────────────────
		// Romance minors (SVO)
		{ language: 'frp', strategy: 'svo', expression: 'SVO', confidence: 'high' },
		{ language: 'wa', strategy: 'svo', expression: 'SVO', confidence: 'high' },
		{ language: 'pms', strategy: 'svo', expression: 'SVO', confidence: 'high' },
		{ language: 'lij', strategy: 'svo', expression: 'SVO', confidence: 'high' },
		{ language: 'lmo', strategy: 'svo', expression: 'SVO', confidence: 'high' },
		{ language: 'co', strategy: 'svo', expression: 'SVO', confidence: 'high' },
		{ language: 'ast', strategy: 'svo', expression: 'SVO', confidence: 'high' },
		{ language: 'rgn', strategy: 'svo', expression: 'SVO', confidence: 'high' },
		{ language: 'ext', strategy: 'svo', expression: 'SVO', confidence: 'medium' },
		{ language: 'cbk', strategy: 'svo', expression: 'SVO', confidence: 'high' },
		{ language: 'pap', strategy: 'svo', expression: 'SVO', confidence: 'high' },
		// Historical Germanic / Romance / Celtic
		{ language: 'ang', strategy: 'free', expression: 'free / mixed OV-VO', confidence: 'high', note: 'Old English; OV and VO both attested, V2 features in matrix clauses' },
		{ language: 'enm', strategy: 'svo', expression: 'SVO', confidence: 'high', note: 'shifts to fixed SVO during the Middle English period' },
		{ language: 'fro', strategy: 'svo', expression: 'V2 / SVO', confidence: 'high', note: 'Old French is V2; modern French has lost it' },
		{ language: 'cy_old', strategy: 'vso', expression: 'VSO', confidence: 'high' },
		// Historical Semitic & Indo-European
		{ language: 'gez', strategy: 'vso', expression: 'VSO', confidence: 'high' },
		{ language: 'har', strategy: 'sov', expression: 'SOV', confidence: 'high' },
		{ language: 'dat', strategy: 'sov', expression: 'SOV', confidence: 'medium' },
		{ language: 'aeq', strategy: 'free', expression: 'free', confidence: 'low', note: 'minimal corpus' },
		{ language: 'xpu', strategy: 'vso', expression: 'VSO', confidence: 'medium' },
		{ language: 'phn', strategy: 'vso', expression: 'VSO', confidence: 'medium' },
		{ language: 'sux', strategy: 'sov', expression: 'SOV', confidence: 'high', note: 'isolate; verb-final' },
		{ language: 'elx', strategy: 'sov', expression: 'SOV', confidence: 'medium' },
		{ language: 'hit', strategy: 'sov', expression: 'SOV', confidence: 'high', note: 'Anatolian IE; verb-final' },
		{ language: 'hbo2', strategy: 'free', expression: 'free / VSO-leaning', confidence: 'medium', note: 'Old Egyptian VSO; later stages drift' },
		// Indo-Aryan + Koreanic small
		{ language: 'pa2', strategy: 'sov', expression: 'SOV', confidence: 'high' },
		{ language: 'jje', strategy: 'sov', expression: 'SOV', confidence: 'high' },
		// Mesoamerican / Mixe-Zoque / Uto-Aztecan / Chibchan
		{ language: 'mtv', strategy: 'vos', expression: 'VOS', confidence: 'medium', note: 'Mixe-Zoquean generally V-initial' },
		{ language: 'zoc', strategy: 'vos', expression: 'VOS', confidence: 'medium' },
		{ language: 'tar', strategy: 'sov', expression: 'SOV', confidence: 'high' },
		{ language: 'bzd', strategy: 'sov', expression: 'SOV', confidence: 'high' },
		{ language: 'cuk', strategy: 'sov', expression: 'SOV', confidence: 'high' },
		{ language: 'kog', strategy: 'sov', expression: 'SOV', confidence: 'high' },
		{ language: 'chl', strategy: 'sov', expression: 'SOV', confidence: 'medium' },
		{ language: 'guu', strategy: 'sov', expression: 'SOV', confidence: 'high' },
		// Pacific NW
		{ language: 'hur', strategy: 'vso', expression: 'VSO', confidence: 'high' },
		{ language: 'squ', strategy: 'vso', expression: 'VSO', confidence: 'high' },
		{ language: 'kwk', strategy: 'vso', expression: 'VSO', confidence: 'high' },
		{ language: 'tsi', strategy: 'vso', expression: 'VSO', confidence: 'medium' },
		{ language: 'nez', strategy: 'free', expression: 'free / SOV-leaning', confidence: 'medium' },
		{ language: 'wlk', strategy: 'sov', expression: 'SOV', confidence: 'medium' },
		// Australian + Papuan
		{ language: 'mwf', strategy: 'free', expression: 'free', confidence: 'medium' },
		{ language: 'tiw', strategy: 'free', expression: 'free / SOV-leaning', confidence: 'medium' },
		{ language: 'gup', strategy: 'free', expression: 'free', confidence: 'medium' },
		{ language: 'yim', strategy: 'free', expression: 'free / SOV-leaning', confidence: 'medium' },
		{ language: 'yle', strategy: 'sov', expression: 'SOV', confidence: 'medium' },
		// Click languages
		{ language: 'nmn', strategy: 'svo', expression: 'SVO', confidence: 'medium' },
		// More African
		{ language: 'dik', strategy: 'vso', expression: 'VSO', confidence: 'medium' },
		{ language: 'teo', strategy: 'vso', expression: 'VSO', confidence: 'medium' },
		{ language: 'zna', strategy: 'sov', expression: 'SOV', confidence: 'medium' },
		// Constructed
		{ language: 'io', strategy: 'svo', expression: 'SVO', confidence: 'high' },
		{ language: 'vo', strategy: 'svo', expression: 'SVO', confidence: 'high' },
		{ language: 'jbo', strategy: 'free', expression: 'free (SVO-like but operator-driven)', confidence: 'high', note: 'predicate-argument logical structure; gismu order is flexible via prenex' },
		{ language: 'tlh', strategy: 'ovs', expression: 'OVS', confidence: 'high', note: 'Marc Okrand deliberately picked OVS as a typological rarity' },
		{ language: 'qya', strategy: 'svo', expression: 'SVO', confidence: 'medium', note: 'Tolkien Quenya is broadly SVO with poetic flexibility' },
		// Sign languages — vary by language, but most are topic-comment (often glossed as SOV or topic-OV)
		{ language: 'ase', strategy: 'free', expression: 'topic–comment (often SVO or OSV)', confidence: 'medium', note: 'topic-prominent; analysis depends on theoretical framework' },
		{ language: 'bfi', strategy: 'free', expression: 'topic–comment', confidence: 'medium' },
		{ language: 'jsl', strategy: 'sov', expression: 'SOV', confidence: 'medium', note: 'tends toward verb-final, like spoken Japanese' },
		{ language: 'csn', strategy: 'free', expression: 'topic–comment', confidence: 'low' },
		{ language: 'fsl', strategy: 'free', expression: 'topic–comment', confidence: 'low' },
		{ language: 'nzs', strategy: 'free', expression: 'topic–comment', confidence: 'low' }
	],
	examples: [
		{
			language: 'ja',
			original: '猫が魚を食べる。',
			transliteration: 'neko ga sakana wo taberu.',
			gloss: 'cat NOM fish ACC eat',
			literal: 'Cat fish eats.',
			natural: 'The cat eats the fish.'
		},
		{
			language: 'en',
			original: 'The cat eats the fish.',
			gloss: 'DEF cat eat.3SG DEF fish',
			literal: 'The cat eats the fish.',
			natural: 'The cat eats the fish.'
		},
		{
			language: 'cy',
			original: 'Mae’r gath yn bwyta’r pysgodyn.',
			gloss: 'be.3SG.PRS=DEF cat PROG eat=DEF fish',
			literal: 'Is the cat eating the fish.',
			natural: 'The cat eats the fish.'
		},
		{
			language: 'mg',
			original: 'Mihinana ny trondro ny saka.',
			gloss: 'eat DEF fish DEF cat',
			literal: 'Eats the fish the cat.',
			natural: 'The cat eats the fish.'
		}
	],
	related: [
		{ kind: 'pattern', slug: 'existence', label: 'Existence' },
		{ kind: 'pattern', slug: 'possession', label: 'Possession' }
	],
	sources: [
		{ source: 'dryer-2013-svo' },
		{ source: 'dryer-haspelmath-2013' },
		{ source: 'croft-1990' },
		{ source: 'comrie-1989' }
	]
};
