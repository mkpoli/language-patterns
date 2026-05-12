import type { Language } from '$lib/types';

export const languages: Record<string, Language> = {
	en: { code: 'en', name: 'English', family: 'Indo-European › Germanic' },
	fr: { code: 'fr', name: 'French', endonym: 'français', family: 'Indo-European › Romance' },
	es: { code: 'es', name: 'Spanish', endonym: 'español', family: 'Indo-European › Romance' },
	de: { code: 'de', name: 'German', endonym: 'Deutsch', family: 'Indo-European › Germanic' },
	ru: { code: 'ru', name: 'Russian', endonym: 'русский', family: 'Indo-European › Slavic' },
	cy: { code: 'cy', name: 'Welsh', endonym: 'Cymraeg', family: 'Indo-European › Celtic' },
	ja: { code: 'ja', name: 'Japanese', endonym: '日本語', family: 'Japonic' },
	zh: { code: 'zh', name: 'Mandarin Chinese', endonym: '普通话', family: 'Sino-Tibetan › Sinitic' },
	ko: { code: 'ko', name: 'Korean', endonym: '한국어', family: 'Koreanic' },
	tr: { code: 'tr', name: 'Turkish', endonym: 'Türkçe', family: 'Turkic › Oghuz' },
	it: { code: 'it', name: 'Italian', endonym: 'italiano', family: 'Indo-European › Romance' },
	sv: { code: 'sv', name: 'Swedish', endonym: 'svenska', family: 'Indo-European › Germanic' },
	he: { code: 'he', name: 'Hebrew', endonym: 'עברית', family: 'Afro-Asiatic › Semitic' },
	id: { code: 'id', name: 'Indonesian', endonym: 'Bahasa Indonesia', family: 'Austronesian › Malayic' },
	sw: { code: 'sw', name: 'Swahili', endonym: 'Kiswahili', family: 'Atlantic-Congo › Bantu' },
	la: { code: 'la', name: 'Latin', endonym: 'lingua Latina', family: 'Indo-European › Italic (historical)' },
	fi: { code: 'fi', name: 'Finnish', endonym: 'suomi', family: 'Uralic › Finnic' },
	ain: { code: 'ain', name: 'Ainu', endonym: 'アイヌ・イタㇰ aynu itak', family: 'Ainu (isolate, critically endangered)' },
	hi: { code: 'hi', name: 'Hindi', endonym: 'हिन्दी', family: 'Indo-European › Indo-Aryan' },
	ar: { code: 'ar', name: 'Arabic', endonym: 'العربية', family: 'Afro-Asiatic › Semitic' },
	vi: { code: 'vi', name: 'Vietnamese', endonym: 'tiếng Việt', family: 'Austroasiatic › Vietic' },
	hu: { code: 'hu', name: 'Hungarian', endonym: 'magyar', family: 'Uralic › Ugric' },
	eu: { code: 'eu', name: 'Basque', endonym: 'euskara', family: 'Basque (isolate)' },
	mi: { code: 'mi', name: 'Māori', endonym: 'te reo Māori', family: 'Austronesian › Polynesian' }
};

export function getLanguage(code: string): Language {
	const lang = languages[code];
	if (!lang) throw new Error(`Unknown language code: ${code}`);
	return lang;
}
