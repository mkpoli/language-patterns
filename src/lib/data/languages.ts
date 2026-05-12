import type { Language } from '$lib/types';

// Coordinates are deliberately approximate — a representative cultural or
// historical centre of the language, not a territorial claim. Many of these
// languages span vastly more territory than one point, and several (Sanskrit,
// Latin, Akkadian, Coptic, Gothic, Pali, Old Church Slavonic) are historical
// or no longer spoken as first languages anywhere. The point survey is meant
// to anchor a language on the atlas, not to define where it "belongs".
//
// TODO: source provenance — most coordinates here are picked by hand based
// on commonly-cited cultural centres; a future pass should reconcile against
// Glottolog or WALS coordinates for consistency.
export const languages: Record<string, Language> = {
	// ─── Indo-European › Germanic ──────────────────────────────────────────────
	en: { code: 'en', name: 'English', family: 'Indo-European › Germanic', lat: 51.5, lng: -0.12, locationNote: 'London (historical core)' },
	de: { code: 'de', name: 'German', endonym: 'Deutsch', family: 'Indo-European › Germanic', lat: 52.52, lng: 13.4, locationNote: 'Berlin' },
	nl: { code: 'nl', name: 'Dutch', endonym: 'Nederlands', family: 'Indo-European › Germanic', lat: 52.37, lng: 4.9, locationNote: 'Amsterdam' },
	af: { code: 'af', name: 'Afrikaans', family: 'Indo-European › Germanic', lat: -33.92, lng: 18.42, locationNote: 'Cape Town' },
	sv: { code: 'sv', name: 'Swedish', endonym: 'svenska', family: 'Indo-European › Germanic', lat: 59.33, lng: 18.07, locationNote: 'Stockholm' },
	da: { code: 'da', name: 'Danish', endonym: 'dansk', family: 'Indo-European › Germanic', lat: 55.68, lng: 12.57, locationNote: 'Copenhagen' },
	nb: { code: 'nb', name: 'Norwegian', endonym: 'norsk bokmål', family: 'Indo-European › Germanic', lat: 59.91, lng: 10.74, locationNote: 'Oslo' },
	is: { code: 'is', name: 'Icelandic', endonym: 'íslenska', family: 'Indo-European › Germanic', lat: 64.13, lng: -21.82, locationNote: 'Reykjavík' },
	fo: { code: 'fo', name: 'Faroese', endonym: 'føroyskt', family: 'Indo-European › Germanic', lat: 62.0, lng: -6.78, locationNote: 'Tórshavn' },
	yi: { code: 'yi', name: 'Yiddish', endonym: 'ייִדיש', family: 'Indo-European › Germanic', lat: 50.1, lng: 20.0, locationNote: 'Central Europe (historical Ashkenazi)' },
	got: { code: 'got', name: 'Gothic', family: 'Indo-European › Germanic (historical)', lat: 45.0, lng: 35.0, locationNote: 'Crimea (4th-century Wulfila)' },

	// ─── Indo-European › Romance ───────────────────────────────────────────────
	fr: { code: 'fr', name: 'French', endonym: 'français', family: 'Indo-European › Romance', lat: 48.85, lng: 2.35, locationNote: 'Paris' },
	es: { code: 'es', name: 'Spanish', endonym: 'español', family: 'Indo-European › Romance', lat: 40.4, lng: -3.7, locationNote: 'Madrid' },
	it: { code: 'it', name: 'Italian', endonym: 'italiano', family: 'Indo-European › Romance', lat: 41.9, lng: 12.5, locationNote: 'Rome' },
	pt: { code: 'pt', name: 'Portuguese', endonym: 'português', family: 'Indo-European › Romance', lat: 38.72, lng: -9.14, locationNote: 'Lisbon' },
	ro: { code: 'ro', name: 'Romanian', endonym: 'română', family: 'Indo-European › Romance', lat: 44.43, lng: 26.1, locationNote: 'Bucharest' },
	ca: { code: 'ca', name: 'Catalan', endonym: 'català', family: 'Indo-European › Romance', lat: 41.39, lng: 2.16, locationNote: 'Barcelona' },
	gl: { code: 'gl', name: 'Galician', endonym: 'galego', family: 'Indo-European › Romance', lat: 42.88, lng: -8.55, locationNote: 'Santiago de Compostela' },
	oc: { code: 'oc', name: 'Occitan', family: 'Indo-European › Romance', lat: 43.6, lng: 1.45, locationNote: 'Toulouse' },
	rm: { code: 'rm', name: 'Romansh', family: 'Indo-European › Romance', lat: 46.85, lng: 9.53, locationNote: 'Chur (Grisons)' },
	sc: { code: 'sc', name: 'Sardinian', endonym: 'sardu', family: 'Indo-European › Romance', lat: 40.0, lng: 9.0, locationNote: 'Sardinia (central)' },
	la: { code: 'la', name: 'Latin', endonym: 'lingua Latina', family: 'Indo-European › Italic (historical)', lat: 41.9, lng: 12.5, locationNote: 'Rome (classical)' },

	// ─── Indo-European › Celtic ────────────────────────────────────────────────
	cy: { code: 'cy', name: 'Welsh', endonym: 'Cymraeg', family: 'Indo-European › Celtic', lat: 52.4, lng: -3.5, locationNote: 'mid Wales' },
	ga: { code: 'ga', name: 'Irish', endonym: 'Gaeilge', family: 'Indo-European › Celtic', lat: 53.35, lng: -6.27, locationNote: 'Dublin' },
	gd: { code: 'gd', name: 'Scottish Gaelic', endonym: 'Gàidhlig', family: 'Indo-European › Celtic', lat: 58.21, lng: -6.39, locationNote: 'Stornoway, Outer Hebrides' },
	br: { code: 'br', name: 'Breton', endonym: 'brezhoneg', family: 'Indo-European › Celtic', lat: 48.2, lng: -4.0, locationNote: 'Brittany' },
	kw: { code: 'kw', name: 'Cornish', endonym: 'Kernewek', family: 'Indo-European › Celtic', lat: 50.27, lng: -5.05, locationNote: 'Cornwall' },
	gv: { code: 'gv', name: 'Manx', endonym: 'Gaelg', family: 'Indo-European › Celtic', lat: 54.24, lng: -4.55, locationNote: 'Isle of Man' },

	// ─── Indo-European › Slavic ────────────────────────────────────────────────
	ru: { code: 'ru', name: 'Russian', endonym: 'русский', family: 'Indo-European › Slavic', lat: 55.75, lng: 37.6, locationNote: 'Moscow' },
	uk: { code: 'uk', name: 'Ukrainian', endonym: 'українська', family: 'Indo-European › Slavic', lat: 50.45, lng: 30.52, locationNote: 'Kyiv' },
	be: { code: 'be', name: 'Belarusian', endonym: 'беларуская', family: 'Indo-European › Slavic', lat: 53.9, lng: 27.57, locationNote: 'Minsk' },
	pl: { code: 'pl', name: 'Polish', endonym: 'polski', family: 'Indo-European › Slavic', lat: 52.23, lng: 21.01, locationNote: 'Warsaw' },
	cs: { code: 'cs', name: 'Czech', endonym: 'čeština', family: 'Indo-European › Slavic', lat: 50.08, lng: 14.43, locationNote: 'Prague' },
	sk: { code: 'sk', name: 'Slovak', endonym: 'slovenčina', family: 'Indo-European › Slavic', lat: 48.15, lng: 17.11, locationNote: 'Bratislava' },
	bg: { code: 'bg', name: 'Bulgarian', endonym: 'български', family: 'Indo-European › Slavic', lat: 42.7, lng: 23.32, locationNote: 'Sofia' },
	mk: { code: 'mk', name: 'Macedonian', endonym: 'македонски', family: 'Indo-European › Slavic', lat: 41.99, lng: 21.43, locationNote: 'Skopje' },
	sr: { code: 'sr', name: 'Serbian', endonym: 'српски', family: 'Indo-European › Slavic', lat: 44.79, lng: 20.45, locationNote: 'Belgrade' },
	hr: { code: 'hr', name: 'Croatian', endonym: 'hrvatski', family: 'Indo-European › Slavic', lat: 45.81, lng: 15.98, locationNote: 'Zagreb' },
	sl: { code: 'sl', name: 'Slovenian', endonym: 'slovenščina', family: 'Indo-European › Slavic', lat: 46.05, lng: 14.51, locationNote: 'Ljubljana' },
	cu: { code: 'cu', name: 'Old Church Slavonic', family: 'Indo-European › Slavic (historical)', lat: 41.34, lng: 22.4, locationNote: '9th-c. Macedonia / Cyril & Methodius' },

	// ─── Indo-European › Indo-Aryan ────────────────────────────────────────────
	hi: { code: 'hi', name: 'Hindi', endonym: 'हिन्दी', family: 'Indo-European › Indo-Aryan', lat: 28.6, lng: 77.2, locationNote: 'Delhi' },
	ur: { code: 'ur', name: 'Urdu', endonym: 'اردو', family: 'Indo-European › Indo-Aryan', lat: 31.55, lng: 74.34, locationNote: 'Lahore' },
	bn: { code: 'bn', name: 'Bengali', endonym: 'বাংলা', family: 'Indo-European › Indo-Aryan', lat: 23.81, lng: 90.41, locationNote: 'Dhaka' },
	pa: { code: 'pa', name: 'Punjabi', endonym: 'ਪੰਜਾਬੀ / پنجابی', family: 'Indo-European › Indo-Aryan', lat: 30.73, lng: 76.78, locationNote: 'Punjab plain' },
	mr: { code: 'mr', name: 'Marathi', endonym: 'मराठी', family: 'Indo-European › Indo-Aryan', lat: 19.08, lng: 72.88, locationNote: 'Mumbai' },
	gu: { code: 'gu', name: 'Gujarati', endonym: 'ગુજરાતી', family: 'Indo-European › Indo-Aryan', lat: 23.02, lng: 72.57, locationNote: 'Ahmedabad' },
	ne: { code: 'ne', name: 'Nepali', endonym: 'नेपाली', family: 'Indo-European › Indo-Aryan', lat: 27.71, lng: 85.32, locationNote: 'Kathmandu' },
	si: { code: 'si', name: 'Sinhala', endonym: 'සිංහල', family: 'Indo-European › Indo-Aryan', lat: 6.93, lng: 79.85, locationNote: 'Colombo' },
	as: { code: 'as', name: 'Assamese', endonym: 'অসমীয়া', family: 'Indo-European › Indo-Aryan', lat: 26.14, lng: 91.74, locationNote: 'Guwahati' },
	odi: { code: 'odi', name: 'Odia', endonym: 'ଓଡ଼ିଆ', family: 'Indo-European › Indo-Aryan', lat: 20.3, lng: 85.82, locationNote: 'Bhubaneswar' },
	sd: { code: 'sd', name: 'Sindhi', endonym: 'سنڌي / सिन्धी', family: 'Indo-European › Indo-Aryan', lat: 25.39, lng: 68.37, locationNote: 'Hyderabad, Sindh' },
	sa: { code: 'sa', name: 'Sanskrit', endonym: 'संस्कृतम्', family: 'Indo-European › Indo-Aryan (historical / liturgical)', lat: 27.0, lng: 78.0, locationNote: 'Ganges plain (classical)' },
	pi: { code: 'pi', name: 'Pali', endonym: 'पालि', family: 'Indo-European › Indo-Aryan (Middle, liturgical)', lat: 25.0, lng: 85.0, locationNote: 'Magadha (historical)' },

	// ─── Indo-European › Iranian ───────────────────────────────────────────────
	fa: { code: 'fa', name: 'Persian (Farsi)', endonym: 'فارسی', family: 'Indo-European › Iranian', lat: 35.69, lng: 51.39, locationNote: 'Tehran' },
	tg: { code: 'tg', name: 'Tajik', endonym: 'тоҷикӣ', family: 'Indo-European › Iranian', lat: 38.56, lng: 68.79, locationNote: 'Dushanbe' },
	ps: { code: 'ps', name: 'Pashto', endonym: 'پښتو', family: 'Indo-European › Iranian', lat: 34.53, lng: 69.17, locationNote: 'Kabul' },
	ku: { code: 'ku', name: 'Kurdish (Kurmanji)', endonym: 'Kurdî', family: 'Indo-European › Iranian', lat: 37.91, lng: 40.24, locationNote: 'Diyarbakır' },
	os: { code: 'os', name: 'Ossetian', endonym: 'ирон', family: 'Indo-European › Iranian', lat: 43.02, lng: 44.68, locationNote: 'Vladikavkaz' },
	bal: { code: 'bal', name: 'Balochi', family: 'Indo-European › Iranian', lat: 30.18, lng: 66.99, locationNote: 'Quetta' },

	// ─── Indo-European › Hellenic, Armenian, Albanian, Baltic ──────────────────
	el: { code: 'el', name: 'Greek (Modern)', endonym: 'ελληνικά', family: 'Indo-European › Hellenic', lat: 37.98, lng: 23.73, locationNote: 'Athens' },
	grc: { code: 'grc', name: 'Ancient Greek', endonym: 'ἑλληνική', family: 'Indo-European › Hellenic (historical)', lat: 37.98, lng: 23.73, locationNote: 'Athens (classical)' },
	hy: { code: 'hy', name: 'Armenian', endonym: 'հայերեն', family: 'Indo-European › Armenian', lat: 40.18, lng: 44.51, locationNote: 'Yerevan' },
	sq: { code: 'sq', name: 'Albanian', endonym: 'shqip', family: 'Indo-European › Albanian', lat: 41.33, lng: 19.82, locationNote: 'Tirana' },
	lt: { code: 'lt', name: 'Lithuanian', endonym: 'lietuvių', family: 'Indo-European › Baltic', lat: 54.69, lng: 25.28, locationNote: 'Vilnius' },
	lv: { code: 'lv', name: 'Latvian', endonym: 'latviešu', family: 'Indo-European › Baltic', lat: 56.95, lng: 24.11, locationNote: 'Riga' },

	// ─── Uralic ────────────────────────────────────────────────────────────────
	fi: { code: 'fi', name: 'Finnish', endonym: 'suomi', family: 'Uralic › Finnic', lat: 60.17, lng: 24.94, locationNote: 'Helsinki' },
	et: { code: 'et', name: 'Estonian', endonym: 'eesti', family: 'Uralic › Finnic', lat: 59.44, lng: 24.75, locationNote: 'Tallinn' },
	hu: { code: 'hu', name: 'Hungarian', endonym: 'magyar', family: 'Uralic › Ugric', lat: 47.5, lng: 19.04, locationNote: 'Budapest' },
	se: { code: 'se', name: 'Northern Sami', endonym: 'davvisámegiella', family: 'Uralic › Sami', lat: 69.47, lng: 25.51, locationNote: 'Kárášjohka (Karasjok)' },
	udm: { code: 'udm', name: 'Udmurt', endonym: 'удмурт', family: 'Uralic › Permic', lat: 56.85, lng: 53.2, locationNote: 'Izhevsk' },
	kpv: { code: 'kpv', name: 'Komi-Zyrian', family: 'Uralic › Permic', lat: 61.67, lng: 50.84, locationNote: 'Syktyvkar' },
	chm: { code: 'chm', name: 'Mari (Meadow)', family: 'Uralic › Mari', lat: 56.63, lng: 47.89, locationNote: 'Yoshkar-Ola' },
	myv: { code: 'myv', name: 'Erzya (Mordvinic)', family: 'Uralic › Mordvinic', lat: 54.18, lng: 45.18, locationNote: 'Saransk' },
	mns: { code: 'mns', name: 'Mansi', family: 'Uralic › Ob-Ugric', lat: 61.0, lng: 69.0, locationNote: 'Khanty-Mansiysk' },
	kca: { code: 'kca', name: 'Khanty', family: 'Uralic › Ob-Ugric', lat: 61.0, lng: 70.0, locationNote: 'lower Ob' },

	// ─── Turkic ───────────────────────────────────────────────────────────────
	tr: { code: 'tr', name: 'Turkish', endonym: 'Türkçe', family: 'Turkic › Oghuz', lat: 39.93, lng: 32.86, locationNote: 'Ankara' },
	az: { code: 'az', name: 'Azerbaijani', endonym: 'azərbaycanca', family: 'Turkic › Oghuz', lat: 40.4, lng: 49.87, locationNote: 'Baku' },
	tk: { code: 'tk', name: 'Turkmen', endonym: 'türkmençe', family: 'Turkic › Oghuz', lat: 37.94, lng: 58.38, locationNote: 'Ashgabat' },
	uz: { code: 'uz', name: 'Uzbek', endonym: 'oʻzbekcha', family: 'Turkic › Karluk', lat: 41.31, lng: 69.24, locationNote: 'Tashkent' },
	ug: { code: 'ug', name: 'Uyghur', endonym: 'ئۇيغۇرچە', family: 'Turkic › Karluk', lat: 43.83, lng: 87.62, locationNote: 'Ürümqi' },
	kk: { code: 'kk', name: 'Kazakh', endonym: 'қазақша', family: 'Turkic › Kipchak', lat: 43.24, lng: 76.94, locationNote: 'Almaty' },
	ky: { code: 'ky', name: 'Kyrgyz', endonym: 'кыргызча', family: 'Turkic › Kipchak', lat: 42.87, lng: 74.59, locationNote: 'Bishkek' },
	tt: { code: 'tt', name: 'Tatar', endonym: 'татарча', family: 'Turkic › Kipchak', lat: 55.79, lng: 49.1, locationNote: 'Kazan' },
	ba: { code: 'ba', name: 'Bashkir', endonym: 'башҡортса', family: 'Turkic › Kipchak', lat: 54.74, lng: 55.97, locationNote: 'Ufa' },
	cv: { code: 'cv', name: 'Chuvash', endonym: 'чӑвашла', family: 'Turkic › Oghur', lat: 56.13, lng: 47.27, locationNote: 'Cheboksary' },
	sah: { code: 'sah', name: 'Sakha (Yakut)', endonym: 'саха тыла', family: 'Turkic › Siberian', lat: 62.04, lng: 129.74, locationNote: 'Yakutsk' },

	// ─── Mongolic, Tungusic ────────────────────────────────────────────────────
	mn: { code: 'mn', name: 'Mongolian (Khalkha)', endonym: 'монгол хэл', family: 'Mongolic', lat: 47.89, lng: 106.91, locationNote: 'Ulaanbaatar' },
	bua: { code: 'bua', name: 'Buryat', family: 'Mongolic', lat: 51.83, lng: 107.59, locationNote: 'Ulan-Ude' },
	xal: { code: 'xal', name: 'Kalmyk', family: 'Mongolic', lat: 46.31, lng: 44.27, locationNote: 'Elista' },
	mnc: { code: 'mnc', name: 'Manchu', family: 'Tungusic', lat: 45.75, lng: 126.65, locationNote: 'Heilongjiang (historical Manchuria)' },
	evn: { code: 'evn', name: 'Evenki', family: 'Tungusic', lat: 60.0, lng: 110.0, locationNote: 'central Siberia' },

	// ─── Sino-Tibetan ──────────────────────────────────────────────────────────
	zh: { code: 'zh', name: 'Mandarin Chinese', endonym: '普通话', family: 'Sino-Tibetan › Sinitic', lat: 34.5, lng: 108.95, locationNote: 'Xi’an (historical Sinitic core)' },
	yue: { code: 'yue', name: 'Cantonese', endonym: '粵語', family: 'Sino-Tibetan › Sinitic', lat: 23.13, lng: 113.26, locationNote: 'Guangzhou' },
	wuu: { code: 'wuu', name: 'Wu (Shanghainese)', endonym: '吳語', family: 'Sino-Tibetan › Sinitic', lat: 31.23, lng: 121.47, locationNote: 'Shanghai' },
	nan: { code: 'nan', name: 'Min Nan (Hokkien)', endonym: '閩南語', family: 'Sino-Tibetan › Sinitic', lat: 24.49, lng: 118.08, locationNote: 'Xiamen' },
	hak: { code: 'hak', name: 'Hakka', endonym: '客家話', family: 'Sino-Tibetan › Sinitic', lat: 24.3, lng: 116.12, locationNote: 'Meixian' },
	bo: { code: 'bo', name: 'Tibetan', endonym: 'བོད་སྐད', family: 'Sino-Tibetan › Bodish', lat: 29.65, lng: 91.11, locationNote: 'Lhasa' },
	my: { code: 'my', name: 'Burmese', endonym: 'မြန်မာ', family: 'Sino-Tibetan › Burmish', lat: 16.84, lng: 96.17, locationNote: 'Yangon' },
	ii: { code: 'ii', name: 'Yi (Nuosu)', endonym: 'ꆈꌠꉙ', family: 'Sino-Tibetan › Loloish', lat: 27.91, lng: 102.27, locationNote: 'Liangshan' },
	dz: { code: 'dz', name: 'Dzongkha', endonym: 'རྫོང་ཁ', family: 'Sino-Tibetan › Bodish', lat: 27.47, lng: 89.64, locationNote: 'Thimphu' },
	new: { code: 'new', name: 'Newar', endonym: 'नेपाल भाषा', family: 'Sino-Tibetan › Newaric', lat: 27.7, lng: 85.32, locationNote: 'Kathmandu valley' },
	mni: { code: 'mni', name: 'Meitei (Manipuri)', endonym: 'ꯃꯩꯇꯩ ꯂꯣꯟ', family: 'Sino-Tibetan › Kuki-Chin-Naga', lat: 24.82, lng: 93.94, locationNote: 'Imphal' },
	lis: { code: 'lis', name: 'Lisu', family: 'Sino-Tibetan › Loloish', lat: 26.07, lng: 99.17, locationNote: 'Nujiang valley' },

	// ─── Tai-Kadai, Hmong-Mien ────────────────────────────────────────────────
	th: { code: 'th', name: 'Thai', endonym: 'ภาษาไทย', family: 'Tai-Kadai › Tai', lat: 13.75, lng: 100.5, locationNote: 'Bangkok' },
	lo: { code: 'lo', name: 'Lao', endonym: 'ພາສາລາວ', family: 'Tai-Kadai › Tai', lat: 17.97, lng: 102.61, locationNote: 'Vientiane' },
	za: { code: 'za', name: 'Zhuang', endonym: 'Vahcuengh', family: 'Tai-Kadai › Tai', lat: 23.83, lng: 108.94, locationNote: 'Guangxi' },
	shn: { code: 'shn', name: 'Shan', endonym: 'လိၵ်ႈတႆး', family: 'Tai-Kadai › Tai', lat: 21.86, lng: 97.83, locationNote: 'Shan State' },
	hmn: { code: 'hmn', name: 'Hmong', family: 'Hmong-Mien', lat: 26.84, lng: 107.3, locationNote: 'Guizhou highlands' },

	// ─── Austroasiatic ─────────────────────────────────────────────────────────
	vi: { code: 'vi', name: 'Vietnamese', endonym: 'tiếng Việt', family: 'Austroasiatic › Vietic', lat: 21.03, lng: 105.85, locationNote: 'Hanoi' },
	km: { code: 'km', name: 'Khmer', endonym: 'ភាសាខ្មែរ', family: 'Austroasiatic › Khmeric', lat: 11.56, lng: 104.92, locationNote: 'Phnom Penh' },
	mnw: { code: 'mnw', name: 'Mon', endonym: 'ဘာသာ မန်', family: 'Austroasiatic › Monic', lat: 16.5, lng: 97.62, locationNote: 'Mon State' },
	kha: { code: 'kha', name: 'Khasi', endonym: 'Ka Ktien Khasi', family: 'Austroasiatic › Khasic', lat: 25.58, lng: 91.89, locationNote: 'Shillong' },
	sat: { code: 'sat', name: 'Santali', endonym: 'ᱥᱟᱱᱛᱟᱲᱤ', family: 'Austroasiatic › Munda', lat: 23.3, lng: 86.83, locationNote: 'Jharkhand' },

	// ─── Dravidian ─────────────────────────────────────────────────────────────
	ta: { code: 'ta', name: 'Tamil', endonym: 'தமிழ்', family: 'Dravidian › Southern', lat: 13.08, lng: 80.27, locationNote: 'Chennai' },
	te: { code: 'te', name: 'Telugu', endonym: 'తెలుగు', family: 'Dravidian › South-Central', lat: 17.39, lng: 78.49, locationNote: 'Hyderabad' },
	kn: { code: 'kn', name: 'Kannada', endonym: 'ಕನ್ನಡ', family: 'Dravidian › Southern', lat: 12.97, lng: 77.59, locationNote: 'Bengaluru' },
	ml: { code: 'ml', name: 'Malayalam', endonym: 'മലയാളം', family: 'Dravidian › Southern', lat: 9.93, lng: 76.27, locationNote: 'Kochi' },
	tcy: { code: 'tcy', name: 'Tulu', endonym: 'ತುಳು', family: 'Dravidian › Southern', lat: 12.91, lng: 74.86, locationNote: 'Mangaluru' },
	brh: { code: 'brh', name: 'Brahui', family: 'Dravidian › Northern (isolated)', lat: 30.18, lng: 66.99, locationNote: 'Quetta' },

	// ─── Austronesian › Malayo-Polynesian ─────────────────────────────────────
	id: { code: 'id', name: 'Indonesian', endonym: 'Bahasa Indonesia', family: 'Austronesian › Malayic', lat: -6.2, lng: 106.85, locationNote: 'Jakarta' },
	ms: { code: 'ms', name: 'Malay', endonym: 'Bahasa Melayu', family: 'Austronesian › Malayic', lat: 3.14, lng: 101.69, locationNote: 'Kuala Lumpur' },
	jv: { code: 'jv', name: 'Javanese', endonym: 'ꦧꦱꦗꦮ', family: 'Austronesian › Javanic', lat: -7.8, lng: 110.36, locationNote: 'Yogyakarta' },
	su: { code: 'su', name: 'Sundanese', endonym: 'Basa Sunda', family: 'Austronesian › Sundic', lat: -6.92, lng: 107.61, locationNote: 'Bandung' },
	ace: { code: 'ace', name: 'Acehnese', family: 'Austronesian › Chamic', lat: 5.55, lng: 95.32, locationNote: 'Banda Aceh' },
	ban: { code: 'ban', name: 'Balinese', endonym: 'ᬩᬲᬩᬮᬶ', family: 'Austronesian › Bali-Sasak', lat: -8.65, lng: 115.22, locationNote: 'Denpasar' },
	min: { code: 'min', name: 'Minangkabau', family: 'Austronesian › Malayic', lat: -0.95, lng: 100.35, locationNote: 'Padang' },
	tl: { code: 'tl', name: 'Tagalog (Filipino)', endonym: 'Wikang Tagalog', family: 'Austronesian › Philippine', lat: 14.6, lng: 120.98, locationNote: 'Manila' },
	ceb: { code: 'ceb', name: 'Cebuano', family: 'Austronesian › Philippine', lat: 10.32, lng: 123.9, locationNote: 'Cebu' },
	ilo: { code: 'ilo', name: 'Ilocano', family: 'Austronesian › Philippine', lat: 17.57, lng: 120.39, locationNote: 'Vigan' },
	hil: { code: 'hil', name: 'Hiligaynon', family: 'Austronesian › Philippine', lat: 10.72, lng: 122.56, locationNote: 'Iloilo' },
	pau: { code: 'pau', name: 'Palauan', family: 'Austronesian › Sunda-Sulawesi', lat: 7.5, lng: 134.62, locationNote: 'Ngerulmud' },
	mg: { code: 'mg', name: 'Malagasy', family: 'Austronesian › Malayo-Polynesian (Barito)', lat: -18.88, lng: 47.51, locationNote: 'Antananarivo' },
	mi: { code: 'mi', name: 'Māori', endonym: 'te reo Māori', family: 'Austronesian › Polynesian', lat: -41.3, lng: 174.78, locationNote: 'Wellington' },
	haw: { code: 'haw', name: 'Hawaiian', endonym: 'ʻŌlelo Hawaiʻi', family: 'Austronesian › Polynesian', lat: 21.31, lng: -157.86, locationNote: 'Honolulu' },
	sm: { code: 'sm', name: 'Samoan', endonym: 'gagana fa’a Sāmoa', family: 'Austronesian › Polynesian', lat: -13.84, lng: -171.76, locationNote: 'Apia' },
	to: { code: 'to', name: 'Tongan', endonym: 'lea fakatonga', family: 'Austronesian › Polynesian', lat: -21.14, lng: -175.2, locationNote: 'Nuku’alofa' },
	fj: { code: 'fj', name: 'Fijian', endonym: 'Na vosa vaka-Viti', family: 'Austronesian › Oceanic', lat: -18.14, lng: 178.42, locationNote: 'Suva' },
	mh: { code: 'mh', name: 'Marshallese', family: 'Austronesian › Oceanic', lat: 7.11, lng: 171.18, locationNote: 'Majuro' },
	ty: { code: 'ty', name: 'Tahitian', endonym: 'reo Tahiti', family: 'Austronesian › Polynesian', lat: -17.55, lng: -149.57, locationNote: 'Papeete' },

	// ─── Afro-Asiatic ──────────────────────────────────────────────────────────
	ar: { code: 'ar', name: 'Arabic (MSA)', endonym: 'العربية', family: 'Afro-Asiatic › Semitic', lat: 30.04, lng: 31.24, locationNote: 'Cairo (cultural centre)' },
	arz: { code: 'arz', name: 'Egyptian Arabic', family: 'Afro-Asiatic › Semitic', lat: 30.04, lng: 31.24, locationNote: 'Cairo' },
	ary: { code: 'ary', name: 'Moroccan Arabic (Darija)', family: 'Afro-Asiatic › Semitic', lat: 33.57, lng: -7.59, locationNote: 'Casablanca' },
	he: { code: 'he', name: 'Hebrew (Modern)', endonym: 'עברית', family: 'Afro-Asiatic › Semitic', lat: 31.78, lng: 35.21, locationNote: 'Jerusalem' },
	hbo: { code: 'hbo', name: 'Biblical Hebrew', family: 'Afro-Asiatic › Semitic (historical)', lat: 31.78, lng: 35.21, locationNote: 'Iron Age Levant' },
	aii: { code: 'aii', name: 'Assyrian Neo-Aramaic', endonym: 'ܣܘܪܝܬ', family: 'Afro-Asiatic › Semitic', lat: 36.22, lng: 44.0, locationNote: 'Ankawa, Iraq' },
	syc: { code: 'syc', name: 'Classical Syriac', endonym: 'ܠܫܢܐ ܣܘܪܝܝܐ', family: 'Afro-Asiatic › Semitic (historical)', lat: 36.2, lng: 37.16, locationNote: 'Edessa (historical)' },
	akk: { code: 'akk', name: 'Akkadian', family: 'Afro-Asiatic › Semitic (historical)', lat: 33.1, lng: 44.3, locationNote: 'Babylon (historical Mesopotamia)' },
	mlt: { code: 'mlt', name: 'Maltese', endonym: 'Malti', family: 'Afro-Asiatic › Semitic', lat: 35.9, lng: 14.51, locationNote: 'Valletta' },
	am: { code: 'am', name: 'Amharic', endonym: 'አማርኛ', family: 'Afro-Asiatic › Semitic', lat: 9.03, lng: 38.74, locationNote: 'Addis Ababa' },
	ti: { code: 'ti', name: 'Tigrinya', endonym: 'ትግርኛ', family: 'Afro-Asiatic › Semitic', lat: 15.32, lng: 38.93, locationNote: 'Asmara' },
	ber: { code: 'ber', name: 'Tamazight (Berber)', endonym: 'ⵜⴰⵎⴰⵣⵉⵖⵜ', family: 'Afro-Asiatic › Berber', lat: 31.79, lng: -7.09, locationNote: 'Atlas region' },
	cop: { code: 'cop', name: 'Coptic', endonym: 'ⲙⲉⲧⲣⲉⲙⲛ̀ⲭⲏⲙⲓ', family: 'Afro-Asiatic › Egyptian (historical / liturgical)', lat: 30.04, lng: 31.24, locationNote: 'late-antique Egypt' },
	ha: { code: 'ha', name: 'Hausa', endonym: 'Harshen Hausa', family: 'Afro-Asiatic › Chadic', lat: 12.0, lng: 8.52, locationNote: 'Kano' },
	so: { code: 'so', name: 'Somali', endonym: 'af Soomaali', family: 'Afro-Asiatic › Cushitic', lat: 2.05, lng: 45.32, locationNote: 'Mogadishu' },
	om: { code: 'om', name: 'Oromo', endonym: 'afaan Oromoo', family: 'Afro-Asiatic › Cushitic', lat: 8.55, lng: 39.27, locationNote: 'Adama' },

	// ─── Niger-Congo (Atlantic-Congo + Mande) ──────────────────────────────────
	sw: { code: 'sw', name: 'Swahili', endonym: 'Kiswahili', family: 'Atlantic-Congo › Bantu', lat: -6.17, lng: 35.74, locationNote: 'central Tanzania' },
	yo: { code: 'yo', name: 'Yoruba', endonym: 'Èdè Yorùbá', family: 'Atlantic-Congo › Volta-Niger', lat: 6.52, lng: 3.38, locationNote: 'Lagos' },
	ig: { code: 'ig', name: 'Igbo', endonym: 'Asụsụ Igbo', family: 'Atlantic-Congo › Volta-Niger', lat: 6.45, lng: 7.5, locationNote: 'Enugu' },
	zu: { code: 'zu', name: 'Zulu', endonym: 'isiZulu', family: 'Atlantic-Congo › Bantu', lat: -29.86, lng: 31.03, locationNote: 'Durban' },
	xh: { code: 'xh', name: 'Xhosa', endonym: 'isiXhosa', family: 'Atlantic-Congo › Bantu', lat: -32.3, lng: 27.5, locationNote: 'Eastern Cape' },
	sn: { code: 'sn', name: 'Shona', endonym: 'chiShona', family: 'Atlantic-Congo › Bantu', lat: -17.83, lng: 31.05, locationNote: 'Harare' },
	ny: { code: 'ny', name: 'Chichewa (Nyanja)', endonym: 'Chicheŵa', family: 'Atlantic-Congo › Bantu', lat: -13.96, lng: 33.79, locationNote: 'Lilongwe' },
	rw: { code: 'rw', name: 'Kinyarwanda', endonym: 'Ikinyarwanda', family: 'Atlantic-Congo › Bantu', lat: -1.95, lng: 30.06, locationNote: 'Kigali' },
	rn: { code: 'rn', name: 'Kirundi', endonym: 'Ikirundi', family: 'Atlantic-Congo › Bantu', lat: -3.36, lng: 29.36, locationNote: 'Bujumbura' },
	lg: { code: 'lg', name: 'Luganda', endonym: 'Oluganda', family: 'Atlantic-Congo › Bantu', lat: 0.35, lng: 32.58, locationNote: 'Kampala' },
	ki: { code: 'ki', name: 'Kikuyu (Gĩkũyũ)', family: 'Atlantic-Congo › Bantu', lat: -0.7, lng: 37.5, locationNote: 'Mt Kenya region' },
	ln: { code: 'ln', name: 'Lingala', endonym: 'lingála', family: 'Atlantic-Congo › Bantu', lat: -4.32, lng: 15.3, locationNote: 'Kinshasa' },
	kg: { code: 'kg', name: 'Kongo (Kikongo)', family: 'Atlantic-Congo › Bantu', lat: -4.0, lng: 13.0, locationNote: 'lower Congo' },
	ts: { code: 'ts', name: 'Tsonga', endonym: 'Xitsonga', family: 'Atlantic-Congo › Bantu', lat: -23.55, lng: 31.65, locationNote: 'Limpopo / southern Mozambique' },
	wo: { code: 'wo', name: 'Wolof', endonym: 'Wolof', family: 'Atlantic-Congo › Atlantic', lat: 14.69, lng: -17.45, locationNote: 'Dakar' },
	ff: { code: 'ff', name: 'Fula (Fulfulde)', endonym: 'Fulfulde / Pulaar', family: 'Atlantic-Congo › Atlantic', lat: 13.45, lng: -2.0, locationNote: 'Sahel belt (Niamey area)' },
	ak: { code: 'ak', name: 'Akan (Twi)', endonym: 'Akan kasa', family: 'Atlantic-Congo › Kwa', lat: 5.61, lng: -0.2, locationNote: 'Accra' },
	ee: { code: 'ee', name: 'Ewe', endonym: 'Eʋegbe', family: 'Atlantic-Congo › Kwa', lat: 6.13, lng: 1.22, locationNote: 'Lomé' },
	fon: { code: 'fon', name: 'Fon', endonym: 'Fɔngbè', family: 'Atlantic-Congo › Kwa', lat: 6.36, lng: 2.43, locationNote: 'Cotonou' },
	bm: { code: 'bm', name: 'Bambara', endonym: 'bamanankan', family: 'Mande', lat: 12.65, lng: -8.0, locationNote: 'Bamako' },
	sg: { code: 'sg', name: 'Sango', family: 'Atlantic-Congo › Ubangian (creolised)', lat: 4.36, lng: 18.55, locationNote: 'Bangui' },

	// ─── Nilo-Saharan ──────────────────────────────────────────────────────────
	mas: { code: 'mas', name: 'Maasai', endonym: 'ɔl Maa', family: 'Nilo-Saharan › Eastern Nilotic', lat: -2.5, lng: 34.5, locationNote: 'Maasai Mara / Serengeti' },
	din: { code: 'din', name: 'Dinka', endonym: 'Thuɔŋjäŋ', family: 'Nilo-Saharan › Western Nilotic', lat: 7.5, lng: 30.0, locationNote: 'South Sudan' },
	luo: { code: 'luo', name: 'Dholuo', family: 'Nilo-Saharan › Western Nilotic', lat: -0.1, lng: 34.75, locationNote: 'Kisumu, Lake Victoria' },

	// ─── Khoe-Kwadi / Tuu ──────────────────────────────────────────────────────
	naq: { code: 'naq', name: 'Khoekhoe (Nama)', endonym: 'Khoekhoegowab', family: 'Khoe-Kwadi (with clicks)', lat: -22.56, lng: 17.08, locationNote: 'Windhoek (Namibia)' },
	ktz: { code: 'ktz', name: 'Juǀ’hoan', family: 'Tuu / Kx’a (with clicks)', lat: -19.5, lng: 20.0, locationNote: 'northeast Namibia' },

	// ─── Eskimo-Aleut ──────────────────────────────────────────────────────────
	iu: { code: 'iu', name: 'Inuktitut', endonym: 'ᐃᓄᒃᑎᑐᑦ', family: 'Eskimo-Aleut › Inuit', lat: 63.75, lng: -68.51, locationNote: 'Iqaluit' },
	kl: { code: 'kl', name: 'Kalaallisut (Greenlandic)', endonym: 'Kalaallisut', family: 'Eskimo-Aleut › Inuit', lat: 64.18, lng: -51.74, locationNote: 'Nuuk' },
	ess: { code: 'ess', name: 'Central Yupik', family: 'Eskimo-Aleut › Yupik', lat: 60.79, lng: -161.76, locationNote: 'Bethel, AK' },

	// ─── Athabaskan, Algic, Iroquoian, Siouan, Uto-Aztecan, Mayan, Otomanguean ─
	nv: { code: 'nv', name: 'Navajo', endonym: 'Diné Bizaad', family: 'Athabaskan', lat: 35.5, lng: -109.5, locationNote: 'Navajo Nation' },
	chr: { code: 'chr', name: 'Cherokee', endonym: 'ᏣᎳᎩ', family: 'Iroquoian', lat: 35.5, lng: -83.5, locationNote: 'southern Appalachia' },
	moh: { code: 'moh', name: 'Mohawk', endonym: 'Kanienʼkéha', family: 'Iroquoian', lat: 45.0, lng: -74.0, locationNote: 'Akwesasne (NY/Quebec)' },
	cr: { code: 'cr', name: 'Cree', endonym: 'ᓀᐦᐃᔭᐍᐏᐣ', family: 'Algic', lat: 53.0, lng: -95.0, locationNote: 'central Canada' },
	oj: { code: 'oj', name: 'Ojibwe', endonym: 'Anishinaabemowin', family: 'Algic', lat: 47.0, lng: -84.0, locationNote: 'Great Lakes' },
	lkt: { code: 'lkt', name: 'Lakota', endonym: 'Lakȟótiyapi', family: 'Siouan', lat: 44.5, lng: -101.5, locationNote: 'Great Plains' },
	nah: { code: 'nah', name: 'Nahuatl', endonym: 'Nāhuatlahtōlli', family: 'Uto-Aztecan', lat: 19.43, lng: -99.13, locationNote: 'central Mexico' },
	hop: { code: 'hop', name: 'Hopi', endonym: 'Hopilavayi', family: 'Uto-Aztecan', lat: 35.84, lng: -110.51, locationNote: 'Hopi Reservation' },
	yua: { code: 'yua', name: 'Yucatec Maya', endonym: 'Maaya t’aan', family: 'Mayan', lat: 20.97, lng: -89.62, locationNote: 'Mérida' },
	quc: { code: 'quc', name: 'Kʼicheʼ', family: 'Mayan', lat: 14.84, lng: -91.52, locationNote: 'Quetzaltenango' },
	mam: { code: 'mam', name: 'Mam', family: 'Mayan', lat: 15.32, lng: -91.47, locationNote: 'Huehuetenango' },
	tzo: { code: 'tzo', name: 'Tzotzil', endonym: 'Batsʼi kʼop', family: 'Mayan', lat: 16.74, lng: -92.63, locationNote: 'Chiapas highlands' },
	zap: { code: 'zap', name: 'Zapotec', family: 'Otomanguean', lat: 17.07, lng: -96.72, locationNote: 'Oaxaca' },
	mix: { code: 'mix', name: 'Mixtec', family: 'Otomanguean', lat: 17.08, lng: -97.78, locationNote: 'Oaxaca highlands' },

	// ─── Andean & Amazonian ───────────────────────────────────────────────────
	qu: { code: 'qu', name: 'Quechua', endonym: 'Runa simi', family: 'Quechuan', lat: -13.53, lng: -71.97, locationNote: 'Cuzco' },
	ay: { code: 'ay', name: 'Aymara', endonym: 'aymar aru', family: 'Aymaran', lat: -16.5, lng: -68.15, locationNote: 'La Paz' },
	gn: { code: 'gn', name: 'Guaraní', endonym: "Avañe’ẽ", family: 'Tupian', lat: -25.27, lng: -57.58, locationNote: 'Asunción' },
	hix: { code: 'hix', name: 'Hixkaryana', family: 'Cariban', lat: -1.0, lng: -58.0, locationNote: 'lower Amazon (Brazil)' },
	guc: { code: 'guc', name: 'Wayuu (Wayuunaiki)', family: 'Arawakan', lat: 11.5, lng: -72.5, locationNote: 'La Guajira (Colombia/Venezuela)' },

	// ─── Australian ───────────────────────────────────────────────────────────
	wbp: { code: 'wbp', name: 'Warlpiri', family: 'Pama-Nyungan', lat: -22.25, lng: 131.78, locationNote: 'Yuendumu, NT' },
	dbl: { code: 'dbl', name: 'Dyirbal', family: 'Pama-Nyungan', lat: -17.5, lng: 145.7, locationNote: 'NE Queensland' },
	pjt: { code: 'pjt', name: 'Pitjantjatjara', family: 'Pama-Nyungan', lat: -25.5, lng: 131.0, locationNote: 'central Australia' },

	// ─── Papuan / Trans-New Guinea / creoles ──────────────────────────────────
	tpi: { code: 'tpi', name: 'Tok Pisin', family: 'English-based creole (Pacific)', lat: -9.45, lng: 147.18, locationNote: 'Port Moresby' },
	kal: { code: 'kal', name: 'Kalam', family: 'Trans-New Guinea › Kalam-Kobon', lat: -5.5, lng: 144.5, locationNote: 'PNG highlands' },

	// ─── Caucasian (Kartvelian, NE Caucasian, NW Caucasian) ───────────────────
	ka: { code: 'ka', name: 'Georgian', endonym: 'ქართული', family: 'Kartvelian', lat: 41.72, lng: 44.79, locationNote: 'Tbilisi' },
	xmf: { code: 'xmf', name: 'Mingrelian', endonym: 'მარგალური ნინა', family: 'Kartvelian', lat: 42.51, lng: 41.87, locationNote: 'Zugdidi' },
	av: { code: 'av', name: 'Avar', endonym: 'авар мацӀ', family: 'Northeast Caucasian', lat: 42.98, lng: 47.5, locationNote: 'Dagestan' },
	lez: { code: 'lez', name: 'Lezgian', family: 'Northeast Caucasian', lat: 41.4, lng: 47.85, locationNote: 'southern Dagestan' },
	ady: { code: 'ady', name: 'Adyghe', endonym: 'адыгабзэ', family: 'Northwest Caucasian', lat: 44.61, lng: 40.1, locationNote: 'Maykop' },
	ab: { code: 'ab', name: 'Abkhaz', endonym: 'аҧсуа', family: 'Northwest Caucasian', lat: 43.0, lng: 41.02, locationNote: 'Sukhumi' },

	// ─── Paleo-Siberian and isolates ──────────────────────────────────────────
	ket: { code: 'ket', name: 'Ket', family: 'Yeniseian (isolate-like)', lat: 62.0, lng: 88.0, locationNote: 'middle Yenisei' },
	ckt: { code: 'ckt', name: 'Chukchi', endonym: "ԓыгъоравэтԓьэн йиԓыйиԓ", family: 'Chukotko-Kamchatkan', lat: 64.74, lng: 177.51, locationNote: 'Anadyr' },
	niv: { code: 'niv', name: 'Nivkh (Gilyak)', family: 'isolate', lat: 53.0, lng: 142.0, locationNote: 'Sakhalin / Amur estuary' },
	bsk: { code: 'bsk', name: 'Burushaski', family: 'isolate', lat: 36.32, lng: 74.62, locationNote: 'Hunza valley' },
	ja: { code: 'ja', name: 'Japanese', endonym: '日本語', family: 'Japonic', lat: 35.7, lng: 139.7, locationNote: 'Tokyo' },
	ko: { code: 'ko', name: 'Korean', endonym: '한국어', family: 'Koreanic', lat: 37.57, lng: 127.0, locationNote: 'Seoul' },
	ain: { code: 'ain', name: 'Ainu', endonym: 'アイヌ・イタㇰ aynu itak', family: 'Ainu (isolate, critically endangered)', lat: 43.5, lng: 142.5, locationNote: 'central Hokkaido' },
	eu: { code: 'eu', name: 'Basque', endonym: 'euskara', family: 'Basque (isolate)', lat: 43.26, lng: -2.92, locationNote: 'Bilbao' },

	// ─── Constructed / a posteriori ───────────────────────────────────────────
	eo: { code: 'eo', name: 'Esperanto', family: 'Constructed (a posteriori, Indo-European-based)', lat: 52.23, lng: 21.01, locationNote: 'Białystok (Zamenhof birthplace)' },
	ia: { code: 'ia', name: 'Interlingua', family: 'Constructed (a posteriori, Romance)', lat: 48.85, lng: 2.35, locationNote: 'IALA, Paris (committee origin)' },
	tok: { code: 'tok', name: 'Toki Pona', family: 'Constructed (a priori, minimalist)', lat: 45.42, lng: -75.7, locationNote: 'Ottawa (Sonja Lang)' },

	// ─── Additional Germanic ───────────────────────────────────────────────────
	lb: { code: 'lb', name: 'Luxembourgish', endonym: 'Lëtzebuergesch', family: 'Indo-European › Germanic', lat: 49.61, lng: 6.13, locationNote: 'Luxembourg City' },
	nds: { code: 'nds', name: 'Low German', endonym: 'Plattdüütsch', family: 'Indo-European › Germanic', lat: 53.55, lng: 9.99, locationNote: 'Hamburg' },
	frr: { code: 'frr', name: 'North Frisian', family: 'Indo-European › Germanic', lat: 54.78, lng: 8.83, locationNote: 'Sylt / Föhr' },
	li: { code: 'li', name: 'Limburgish', family: 'Indo-European › Germanic', lat: 51.0, lng: 5.95, locationNote: 'Limburg' },

	// ─── Additional Romance ────────────────────────────────────────────────────
	an: { code: 'an', name: 'Aragonese', endonym: 'aragonés', family: 'Indo-European › Romance', lat: 42.5, lng: -0.5, locationNote: 'Aragonese Pyrenees' },
	mwl: { code: 'mwl', name: 'Mirandese', endonym: 'mirandés', family: 'Indo-European › Romance', lat: 41.5, lng: -6.27, locationNote: 'Miranda do Douro' },
	fur: { code: 'fur', name: 'Friulian', endonym: 'furlan', family: 'Indo-European › Romance', lat: 46.07, lng: 13.23, locationNote: 'Udine' },
	vec: { code: 'vec', name: 'Venetian', endonym: 'vèneto', family: 'Indo-European › Romance', lat: 45.44, lng: 12.32, locationNote: 'Venice' },
	nap: { code: 'nap', name: 'Neapolitan', endonym: 'napulitano', family: 'Indo-European › Romance', lat: 40.85, lng: 14.27, locationNote: 'Naples' },
	scn: { code: 'scn', name: 'Sicilian', endonym: 'sicilianu', family: 'Indo-European › Romance', lat: 38.12, lng: 13.36, locationNote: 'Palermo' },
	lad: { code: 'lad', name: 'Ladino (Judeo-Spanish)', endonym: 'djudeoespanyol', family: 'Indo-European › Romance', lat: 41.01, lng: 28.97, locationNote: 'Istanbul / Sephardic diaspora' },

	// ─── Additional Slavic ────────────────────────────────────────────────────
	hsb: { code: 'hsb', name: 'Upper Sorbian', endonym: 'hornjoserbsce', family: 'Indo-European › Slavic', lat: 51.18, lng: 14.42, locationNote: 'Bautzen' },
	dsb: { code: 'dsb', name: 'Lower Sorbian', endonym: 'dolnoserbski', family: 'Indo-European › Slavic', lat: 51.76, lng: 14.33, locationNote: 'Cottbus' },
	csb: { code: 'csb', name: 'Kashubian', endonym: 'kaszëbsczi', family: 'Indo-European › Slavic', lat: 54.25, lng: 17.93, locationNote: 'Kashubia' },
	rue: { code: 'rue', name: 'Rusyn', endonym: 'русиньскый', family: 'Indo-European › Slavic', lat: 48.93, lng: 22.27, locationNote: 'Subcarpathian / eastern Slovakia' },

	// ─── More Indo-Aryan ──────────────────────────────────────────────────────
	bho: { code: 'bho', name: 'Bhojpuri', endonym: 'भोजपुरी', family: 'Indo-European › Indo-Aryan', lat: 25.59, lng: 85.14, locationNote: 'Patna' },
	mai: { code: 'mai', name: 'Maithili', endonym: 'मैथिली', family: 'Indo-European › Indo-Aryan', lat: 26.13, lng: 85.9, locationNote: 'Mithila / Janakpur' },
	awa: { code: 'awa', name: 'Awadhi', endonym: 'अवधी', family: 'Indo-European › Indo-Aryan', lat: 26.84, lng: 80.95, locationNote: 'Lucknow / Awadh' },
	mag: { code: 'mag', name: 'Magahi', endonym: 'मगही', family: 'Indo-European › Indo-Aryan', lat: 24.79, lng: 85.0, locationNote: 'Magadha plain' },
	ks: { code: 'ks', name: 'Kashmiri', endonym: 'कॉशुर / كٲشُر', family: 'Indo-European › Indo-Aryan (Dardic)', lat: 34.08, lng: 74.79, locationNote: 'Srinagar' },
	rmn: { code: 'rmn', name: 'Romani', family: 'Indo-European › Indo-Aryan', lat: 46.0, lng: 25.0, locationNote: 'Roma diaspora (Carpathian / Balkans)' },

	// ─── More Iranian ─────────────────────────────────────────────────────────
	ckb: { code: 'ckb', name: 'Central Kurdish (Sorani)', endonym: 'سۆرانی', family: 'Indo-European › Iranian', lat: 35.57, lng: 45.43, locationNote: 'Sulaymaniyah' },
	zza: { code: 'zza', name: 'Zazaki', family: 'Indo-European › Iranian', lat: 39.74, lng: 39.49, locationNote: 'Dersim / Tunceli' },

	// ─── More Sino-Tibetan / Tibeto-Burman ────────────────────────────────────
	lep: { code: 'lep', name: 'Lepcha', endonym: 'ᰛᰩᰵᰛᰧᰵ', family: 'Sino-Tibetan › Lepcha', lat: 27.3, lng: 88.6, locationNote: 'Sikkim / Darjeeling' },
	ksw: { code: 'ksw', name: 'S’gaw Karen', family: 'Sino-Tibetan › Karenic', lat: 17.15, lng: 97.99, locationNote: 'Kayin State' },
	lhu: { code: 'lhu', name: 'Lahu', family: 'Sino-Tibetan › Loloish', lat: 22.5, lng: 99.9, locationNote: 'southern Yunnan / northern Thailand' },
	lus: { code: 'lus', name: 'Mizo', endonym: 'Mizo ṭawng', family: 'Sino-Tibetan › Kuki-Chin', lat: 23.73, lng: 92.72, locationNote: 'Aizawl' },
	naq2: { code: 'naq2', name: 'Naxi', endonym: 'Nakhi', family: 'Sino-Tibetan › Loloish', lat: 26.87, lng: 100.23, locationNote: 'Lijiang' },

	// ─── More Austronesian ────────────────────────────────────────────────────
	mad: { code: 'mad', name: 'Madurese', family: 'Austronesian › Madurese', lat: -7.0, lng: 113.21, locationNote: 'Madura' },
	bug: { code: 'bug', name: 'Buginese', family: 'Austronesian › South Sulawesi', lat: -5.13, lng: 119.41, locationNote: 'Makassar' },
	mak: { code: 'mak', name: 'Makasar', family: 'Austronesian › South Sulawesi', lat: -5.13, lng: 119.41, locationNote: 'Makassar' },
	ch: { code: 'ch', name: 'Chamorro', family: 'Austronesian › Sunda-Sulawesi', lat: 13.46, lng: 144.74, locationNote: 'Hagåtña, Guam' },
	yap: { code: 'yap', name: 'Yapese', family: 'Austronesian › Oceanic', lat: 9.51, lng: 138.13, locationNote: 'Yap' },
	chk: { code: 'chk', name: 'Chuukese', family: 'Austronesian › Oceanic', lat: 7.45, lng: 151.86, locationNote: 'Weno, Chuuk' },
	pon: { code: 'pon', name: 'Pohnpeian', family: 'Austronesian › Oceanic', lat: 6.96, lng: 158.21, locationNote: 'Kolonia, Pohnpei' },
	gil: { code: 'gil', name: 'Gilbertese (Kiribati)', endonym: 'taetae ni Kiribati', family: 'Austronesian › Oceanic', lat: 1.33, lng: 173.04, locationNote: 'Tarawa' },
	niu: { code: 'niu', name: 'Niuean', family: 'Austronesian › Polynesian', lat: -19.05, lng: -169.92, locationNote: 'Alofi' },
	tkl: { code: 'tkl', name: 'Tokelauan', family: 'Austronesian › Polynesian', lat: -9.2, lng: -171.85, locationNote: 'Tokelau' },
	tvl: { code: 'tvl', name: 'Tuvaluan', family: 'Austronesian › Polynesian', lat: -8.52, lng: 179.2, locationNote: 'Funafuti' },
	rar: { code: 'rar', name: 'Rarotongan (Cook Islands Māori)', family: 'Austronesian › Polynesian', lat: -21.21, lng: -159.78, locationNote: 'Avarua' },
	mri2: { code: 'mri2', name: 'Tetum', family: 'Austronesian › Central Malayo-Polynesian', lat: -8.55, lng: 125.58, locationNote: 'Dili, Timor-Leste' },
	tay: { code: 'tay', name: 'Atayal', family: 'Austronesian › Formosan', lat: 24.5, lng: 121.5, locationNote: 'northern Taiwan' },
	ami: { code: 'ami', name: 'Amis', family: 'Austronesian › Formosan', lat: 23.76, lng: 121.61, locationNote: 'east coast Taiwan' },
	pwn: { code: 'pwn', name: 'Paiwan', family: 'Austronesian › Formosan', lat: 22.6, lng: 120.7, locationNote: 'southern Taiwan' },
	bnn: { code: 'bnn', name: 'Bunun', family: 'Austronesian › Formosan', lat: 23.5, lng: 121.0, locationNote: 'central highlands Taiwan' },

	// ─── Tai-Kadai additions ──────────────────────────────────────────────────
	lic: { code: 'lic', name: 'Hlai', family: 'Tai-Kadai › Hlai', lat: 18.7, lng: 109.5, locationNote: 'Hainan' },
	pcc: { code: 'pcc', name: 'Bouyei', family: 'Tai-Kadai › Tai', lat: 26.58, lng: 106.71, locationNote: 'southwestern Guizhou' },

	// ─── Austroasiatic additions ──────────────────────────────────────────────
	kjg: { code: 'kjg', name: 'Khmu', family: 'Austroasiatic › Khmuic', lat: 19.88, lng: 102.13, locationNote: 'Luang Prabang province' },
	prk: { code: 'prk', name: 'Wa (Parauk)', family: 'Austroasiatic › Palaungic', lat: 22.0, lng: 99.0, locationNote: 'Wa hills (Yunnan / Shan State)' },

	// ─── Hmong-Mien addition ──────────────────────────────────────────────────
	ium: { code: 'ium', name: 'Iu Mien', family: 'Hmong-Mien › Mienic', lat: 25.0, lng: 110.0, locationNote: 'southern China / SE Asia diaspora' },

	// ─── More Niger-Congo / Mande / West Africa ───────────────────────────────
	nyn: { code: 'nyn', name: 'Runyankole', family: 'Atlantic-Congo › Bantu', lat: -0.6, lng: 30.65, locationNote: 'Mbarara' },
	gaa: { code: 'gaa', name: 'Ga', family: 'Atlantic-Congo › Kwa', lat: 5.55, lng: -0.21, locationNote: 'Accra' },
	mos: { code: 'mos', name: 'Mooré (Mossi)', family: 'Atlantic-Congo › Gur', lat: 12.37, lng: -1.52, locationNote: 'Ouagadougou' },
	dyu: { code: 'dyu', name: 'Dyula', family: 'Mande', lat: 7.69, lng: -5.03, locationNote: 'Bouaké' },
	snk: { code: 'snk', name: 'Soninke', family: 'Mande', lat: 14.27, lng: -10.0, locationNote: 'upper Senegal valley' },
	mnk: { code: 'mnk', name: 'Mandinka', family: 'Mande', lat: 13.45, lng: -16.58, locationNote: 'Banjul' },

	// ─── More Nilo-Saharan ────────────────────────────────────────────────────
	kau: { code: 'kau', name: 'Kanuri', family: 'Nilo-Saharan › Saharan', lat: 11.85, lng: 13.16, locationNote: 'Maiduguri' },
	son: { code: 'son', name: 'Songhay (Koyra Chiini)', family: 'Nilo-Saharan › Songhay', lat: 16.77, lng: -3.01, locationNote: 'Timbuktu' },
	kln: { code: 'kln', name: 'Kalenjin', family: 'Nilo-Saharan › Southern Nilotic', lat: 0.2, lng: 35.5, locationNote: 'Rift Valley, Kenya' },

	// ─── More Cushitic + Omotic ───────────────────────────────────────────────
	aar: { code: 'aar', name: 'Afar', family: 'Afro-Asiatic › Cushitic', lat: 11.59, lng: 41.27, locationNote: 'Afar triangle' },
	bej: { code: 'bej', name: 'Beja', family: 'Afro-Asiatic › Cushitic', lat: 19.62, lng: 37.21, locationNote: 'Port Sudan' },
	wal: { code: 'wal', name: 'Wolaitta', family: 'Afro-Asiatic › Omotic', lat: 6.81, lng: 37.78, locationNote: 'Wolayita Sodo' },

	// ─── Khoisan / clicks additions ───────────────────────────────────────────
	sad: { code: 'sad', name: 'Sandawe', family: 'isolate (with clicks)', lat: -4.7, lng: 35.4, locationNote: 'Dodoma region, Tanzania' },
	hts: { code: 'hts', name: 'Hadza', family: 'isolate (with clicks)', lat: -4.0, lng: 35.0, locationNote: 'Lake Eyasi, Tanzania' },

	// ─── Siberia + Far East ───────────────────────────────────────────────────
	yux: { code: 'yux', name: 'Yukaghir (Northern)', family: 'Yukaghir (isolate-like)', lat: 67.0, lng: 150.0, locationNote: 'lower Kolyma' },
	itl: { code: 'itl', name: 'Itelmen', family: 'Chukotko-Kamchatkan', lat: 56.0, lng: 159.0, locationNote: 'western Kamchatka' },
	kpy: { code: 'kpy', name: 'Koryak', family: 'Chukotko-Kamchatkan', lat: 62.91, lng: 167.65, locationNote: 'Kamchatka / Koryak Okrug' },
	yrk: { code: 'yrk', name: 'Nenets', family: 'Uralic › Samoyedic', lat: 66.5, lng: 66.6, locationNote: 'Yamal peninsula' },
	sel: { code: 'sel', name: 'Selkup', family: 'Uralic › Samoyedic', lat: 60.4, lng: 80.7, locationNote: 'middle Ob' },
	nio: { code: 'nio', name: 'Nganasan', family: 'Uralic › Samoyedic', lat: 71.85, lng: 102.5, locationNote: 'Taimyr peninsula' },
	eve: { code: 'eve', name: 'Even', family: 'Tungusic', lat: 64.0, lng: 152.0, locationNote: 'northeast Siberia' },
	gld: { code: 'gld', name: 'Nanai', family: 'Tungusic', lat: 50.6, lng: 137.0, locationNote: 'lower Amur' },

	// ─── More NE / NW Caucasian ───────────────────────────────────────────────
	ce: { code: 'ce', name: 'Chechen', endonym: 'нохчийн', family: 'Northeast Caucasian › Nakh', lat: 43.32, lng: 45.7, locationNote: 'Grozny' },
	inh: { code: 'inh', name: 'Ingush', family: 'Northeast Caucasian › Nakh', lat: 43.17, lng: 44.81, locationNote: 'Magas' },
	kbd: { code: 'kbd', name: 'Kabardian', family: 'Northwest Caucasian', lat: 43.49, lng: 43.62, locationNote: 'Nalchik' },

	// ─── More Mayan + Mesoamerican ────────────────────────────────────────────
	kek: { code: 'kek', name: 'Qʼeqchiʼ', family: 'Mayan', lat: 15.48, lng: -90.4, locationNote: 'Cobán, Alta Verapaz' },
	cak: { code: 'cak', name: 'Kaqchikel', family: 'Mayan', lat: 14.55, lng: -90.97, locationNote: 'Chimaltenango' },
	tzh: { code: 'tzh', name: 'Tzeltal', family: 'Mayan', lat: 16.84, lng: -92.36, locationNote: 'Chiapas highlands' },
	mam2: { code: 'mam2', name: 'Wastek (Huastec)', family: 'Mayan', lat: 22.0, lng: -99.0, locationNote: 'San Luis Potosí' },
	otq: { code: 'otq', name: 'Querétaro Otomi', family: 'Otomanguean', lat: 20.59, lng: -100.39, locationNote: 'Querétaro' },

	// ─── More Andean / South American ────────────────────────────────────────
	arn: { code: 'arn', name: 'Mapudungun', endonym: 'Mapudungun', family: 'Araucanian', lat: -38.74, lng: -72.59, locationNote: 'Araucanía / Wallmapu' },
	shp: { code: 'shp', name: 'Shipibo-Konibo', family: 'Pano-Tacanan', lat: -8.39, lng: -74.55, locationNote: 'Ucayali river' },
	yag: { code: 'yag', name: 'Yagán (Yámana)', family: 'isolate (Tierra del Fuego)', lat: -54.93, lng: -67.61, locationNote: 'Ushuaia, Tierra del Fuego' },

	// ─── More Athabaskan / Pacific NW / Algic ────────────────────────────────
	mic: { code: 'mic', name: "Miʼkmaq", family: 'Algic', lat: 46.5, lng: -63.5, locationNote: "Miʼkmaʼki (eastern Canada)" },
	apw: { code: 'apw', name: 'Western Apache', family: 'Athabaskan', lat: 33.16, lng: -110.0, locationNote: 'San Carlos / White Mountain' },
	den: { code: 'den', name: 'Slavey', endonym: 'Dene Zhatıé', family: 'Athabaskan', lat: 62.45, lng: -114.37, locationNote: 'NWT' },

	// ─── Pidgins & Creoles ────────────────────────────────────────────────────
	ht: { code: 'ht', name: 'Haitian Creole', endonym: 'kreyòl ayisyen', family: 'French-based creole', lat: 18.55, lng: -72.34, locationNote: 'Port-au-Prince' },
	jam: { code: 'jam', name: 'Jamaican Patois', endonym: 'Patwa', family: 'English-based creole', lat: 17.97, lng: -76.79, locationNote: 'Kingston' },
	srn: { code: 'srn', name: 'Sranan Tongo', family: 'English-based creole', lat: 5.85, lng: -55.2, locationNote: 'Paramaribo' },
	pcm: { code: 'pcm', name: 'Nigerian Pidgin', family: 'English-based creole (Atlantic)', lat: 6.46, lng: 3.4, locationNote: 'Lagos' },
	kri: { code: 'kri', name: 'Krio', family: 'English-based creole (Atlantic)', lat: 8.48, lng: -13.23, locationNote: 'Freetown' },
	mfe: { code: 'mfe', name: 'Mauritian Creole', endonym: 'kreol morisien', family: 'French-based creole', lat: -20.16, lng: 57.5, locationNote: 'Port Louis' },
	bi: { code: 'bi', name: 'Bislama', family: 'English-based creole (Pacific)', lat: -17.74, lng: 168.32, locationNote: 'Port Vila' },
	pis: { code: 'pis', name: 'Pijin (Solomon Islands)', family: 'English-based creole (Pacific)', lat: -9.43, lng: 159.95, locationNote: 'Honiara' },
	ho: { code: 'ho', name: 'Hiri Motu', family: 'Austronesian-based pidgin', lat: -9.45, lng: 147.18, locationNote: 'Port Moresby (administrative use)' },

	// ─── Sign languages (illustrative) ────────────────────────────────────────
	ase: { code: 'ase', name: 'American Sign Language', family: 'Sign language', lat: 38.91, lng: -77.0, locationNote: 'Washington, DC (Gallaudet)' },
	bfi: { code: 'bfi', name: 'British Sign Language', family: 'Sign language', lat: 51.5, lng: -0.12, locationNote: 'London' },
	jsl: { code: 'jsl', name: 'Japanese Sign Language', family: 'Sign language', lat: 35.7, lng: 139.7, locationNote: 'Tokyo' }
};

export function getLanguage(code: string): Language {
	const lang = languages[code];
	if (!lang) throw new Error(`Unknown language code: ${code}`);
	return lang;
}
