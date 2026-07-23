"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { translations, Language } from '@/lib/translations';

const STORAGE_KEY = 'its-language';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: typeof translations['en'];
    hasChosen: boolean;
    confirmLanguage: (lang: Language) => void;
    /** True when the current URL is a dedicated, natively-Italian route (e.g. /it/...), as opposed to the EN site with the client-side language toggle set to 'it'. */
    isNativeItalianRoute: boolean;
}

const LanguageContext = createContext<LanguageContextType>({
    language: 'en',
    setLanguage: () => {},
    t: translations.en,
    hasChosen: false,
    confirmLanguage: () => {},
    isNativeItalianRoute: false,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
    const pathname = usePathname();
    // Dedicated Italian routes (/it or /it/...) are natively Italian content —
    // the nav/footer chrome must render in Italian here regardless of any
    // stored preference, and this is NOT the dynamic Google Translate toggle.
    const isNativeItalianRoute = pathname === '/it' || pathname.startsWith('/it/');

    const [storedLanguage, setStoredLanguageState] = useState<Language>('en');
    const [hasChosen, setHasChosen] = useState(true); // start true to avoid flash

    useEffect(() => {
        const saved = localStorage.getItem(STORAGE_KEY) as Language | null;
        if (saved && (saved === 'en' || saved === 'it')) {
            setStoredLanguageState(saved);
            setHasChosen(true);
        } else {
            const isBot = typeof navigator !== 'undefined' && /bot|crawler|spider|crawling|lighthouse|pagespeed|gtmetrix|headless/i.test(navigator.userAgent);
            setHasChosen(isBot);
        }
    }, []);

    const language: Language = isNativeItalianRoute ? 'it' : storedLanguage;

    const setLanguage = (lang: Language) => {
        setStoredLanguageState(lang);
        localStorage.setItem(STORAGE_KEY, lang);
    };

    // Called from the modal — sets language AND marks as chosen
    const confirmLanguage = (lang: Language) => {
        setLanguage(lang);
        setHasChosen(true);
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t: translations[language], hasChosen, confirmLanguage, isNativeItalianRoute }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}
