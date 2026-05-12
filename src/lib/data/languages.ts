import type { Language } from '$lib/types';

// Coordinates are deliberately approximate — a representative cultural / historical
// centre of the language. They are not claims about where the language is spoken
// today, and many of these languages span vastly more territory than one point.
export const languages: Record<string, Language> = {
	en: { code: 'en', name: 'English', family: 'Indo-European › Germanic', lat: 51.5, lng: -0.12, locationNote: 'London (historical core)' },
	fr: { code: 'fr', name: 'French', endonym: 'français', family: 'Indo-European › Romance', lat: 48.85, lng: 2.35, locationNote: 'Paris' },
	es: { code: 'es', name: 'Spanish', endonym: 'español', family: 'Indo-European › Romance', lat: 40.4, lng: -3.7, locationNote: 'Madrid' },
	de: { code: 'de', name: 'German', endonym: 'Deutsch', family: 'Indo-European › Germanic', lat: 52.52, lng: 13.4, locationNote: 'Berlin' },
	ru: { code: 'ru', name: 'Russian', endonym: 'русский', family: 'Indo-European › Slavic', lat: 55.75, lng: 37.6, locationNote: 'Moscow' },
	cy: { code: 'cy', name: 'Welsh', endonym: 'Cymraeg', family: 'Indo-European › Celtic', lat: 52.4, lng: -3.5, locationNote: 'mid Wales' },
	ja: { code: 'ja', name: 'Japanese', endonym: '日本語', family: 'Japonic', lat: 35.7, lng: 139.7, locationNote: 'Tokyo' },
	zh: { code: 'zh', name: 'Mandarin Chinese', endonym: '普通话', family: 'Sino-Tibetan › Sinitic', lat: 34.5, lng: 108.95, locationNote: 'Xi’an (historical Sinitic core)' },
	ko: { code: 'ko', name: 'Korean', endonym: '한국어', family: 'Koreanic', lat: 37.57, lng: 127.0, locationNote: 'Seoul' },
	tr: { code: 'tr', name: 'Turkish', endonym: 'Türkçe', family: 'Turkic › Oghuz', lat: 39.93, lng: 32.86, locationNote: 'Ankara' },
	it: { code: 'it', name: 'Italian', endonym: 'italiano', family: 'Indo-European › Romance', lat: 41.9, lng: 12.5, locationNote: 'Rome' },
	sv: { code: 'sv', name: 'Swedish', endonym: 'svenska', family: 'Indo-European › Germanic', lat: 59.33, lng: 18.07, locationNote: 'Stockholm' },
	he: { code: 'he', name: 'Hebrew', endonym: 'עברית', family: 'Afro-Asiatic › Semitic', lat: 31.78, lng: 35.21, locationNote: 'Jerusalem' },
	id: { code: 'id', name: 'Indonesian', endonym: 'Bahasa Indonesia', family: 'Austronesian › Malayic', lat: -6.2, lng: 106.85, locationNote: 'Jakarta' },
	sw: { code: 'sw', name: 'Swahili', endonym: 'Kiswahili', family: 'Atlantic-Congo › Bantu', lat: -6.17, lng: 35.74, locationNote: 'central Tanzania' },
	la: { code: 'la', name: 'Latin', endonym: 'lingua Latina', family: 'Indo-European › Italic (historical)', lat: 41.9, lng: 12.5, locationNote: 'Rome (classical)' },
	fi: { code: 'fi', name: 'Finnish', endonym: 'suomi', family: 'Uralic › Finnic', lat: 60.17, lng: 24.94, locationNote: 'Helsinki' },
	ain: { code: 'ain', name: 'Ainu', endonym: 'アイヌ・イタㇰ aynu itak', family: 'Ainu (isolate, critically endangered)', lat: 43.5, lng: 142.5, locationNote: 'central Hokkaido' },
	hi: { code: 'hi', name: 'Hindi', endonym: 'हिन्दी', family: 'Indo-European › Indo-Aryan', lat: 28.6, lng: 77.2, locationNote: 'Delhi' },
	ar: { code: 'ar', name: 'Arabic', endonym: 'العربية', family: 'Afro-Asiatic › Semitic', lat: 30.04, lng: 31.24, locationNote: 'Cairo (cultural centre)' },
	vi: { code: 'vi', name: 'Vietnamese', endonym: 'tiếng Việt', family: 'Austroasiatic › Vietic', lat: 21.03, lng: 105.85, locationNote: 'Hanoi' },
	hu: { code: 'hu', name: 'Hungarian', endonym: 'magyar', family: 'Uralic › Ugric', lat: 47.5, lng: 19.04, locationNote: 'Budapest' },
	eu: { code: 'eu', name: 'Basque', endonym: 'euskara', family: 'Basque (isolate)', lat: 43.26, lng: -2.92, locationNote: 'Bilbao' },
	mi: { code: 'mi', name: 'Māori', endonym: 'te reo Māori', family: 'Austronesian › Polynesian', lat: -41.3, lng: 174.78, locationNote: 'Wellington' }
};

export function getLanguage(code: string): Language {
	const lang = languages[code];
	if (!lang) throw new Error(`Unknown language code: ${code}`);
	return lang;
}
