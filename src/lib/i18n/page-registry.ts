// Single source of truth mapping English pages to their dedicated Italian
// counterparts. Every page listed here has a REAL, hand-translated Italian
// route (not a dynamically-translated copy) — used to drive:
//   1. hreflang alternates on both the English and Italian page
//   2. the language switcher (real navigation, not client-side translation)
//   3. the Italian portion of the sitemap
//
// Pages NOT listed here have no dedicated Italian version yet — the language
// switcher falls back to the legacy dynamic Google Translate toggle for those,
// and they carry no hreflang (correct: no alternate exists to declare).
//
// Extend this list as more Italian pages are built — nothing else needs to
// change; hreflang/switcher/sitemap all read from this one array.

export interface PageTranslationEntry {
    en: string; // English path, always starting with "/"
    it: string; // Italian path, always starting with "/it/..." (or exactly "/it" for the homepage)
}

export const PAGE_REGISTRY: PageTranslationEntry[] = [
    { en: '/', it: '/it' },
    { en: '/services', it: '/it/servizi' },
    { en: '/services/airport-transfers', it: '/it/servizi/trasferimenti-aeroportuali' },
    { en: '/services/city-to-city', it: '/it/servizi/trasferimenti-citta-citta' },
    { en: '/services/hotel-transfers', it: '/it/servizi/trasferimenti-hotel' },
    { en: '/services/business-taxi', it: '/it/servizi/taxi-aziendale' },
    { en: '/services/hourly-taxi', it: '/it/servizi/taxi-a-ore' },
    { en: '/services/private-tours', it: '/it/servizi/tour-privati' },
    { en: '/services/cruise-port-transfers', it: '/it/servizi/trasferimenti-porto-crociere' },
    { en: '/services/wedding-events', it: '/it/servizi/eventi-aziendali-privati' },
    { en: '/services/wedding-transfers', it: '/it/servizi/trasferimenti-matrimonio' },
    { en: '/contact', it: '/it/contatti' },
    { en: '/faq', it: '/it/domande-frequenti' },
];

const SITE_URL = 'https://www.italytaxiservice.com';

/** Returns the Italian path for a given English path, or null if no dedicated Italian version exists. */
export function getItalianPath(enPath: string): string | null {
    const normalized = enPath === '' ? '/' : enPath;
    return PAGE_REGISTRY.find((p) => p.en === normalized)?.it ?? null;
}

/** Returns the English path for a given Italian path, or null if it isn't a registered dedicated page (e.g. it's the blog, which is handled separately). */
export function getEnglishPath(itPath: string): string | null {
    return PAGE_REGISTRY.find((p) => p.it === itPath)?.en ?? null;
}

/** True if the given English path has a dedicated (non-dynamically-translated) Italian version. */
export function hasItalianVersion(enPath: string): boolean {
    return getItalianPath(enPath) !== null;
}

/** Builds the `alternates.languages` object for an English page's metadata. */
export function itHreflangFor(enPath: string): Record<string, string> | undefined {
    const it = getItalianPath(enPath);
    if (!it) return undefined;
    return { 'it-IT': `${SITE_URL}${it}`, 'en': `${SITE_URL}${enPath}`, 'x-default': `${SITE_URL}${enPath}` };
}

/** Builds the `alternates.languages` object for an Italian page's metadata. */
export function enHreflangFor(itPath: string): Record<string, string> | undefined {
    const en = getEnglishPath(itPath);
    if (!en) return undefined;
    return { 'en': `${SITE_URL}${en}`, 'it-IT': `${SITE_URL}${itPath}`, 'x-default': `${SITE_URL}${en}` };
}
