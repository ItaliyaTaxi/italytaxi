"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Language } from '@/lib/translations';

const STORAGE_KEY = 'its-language';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: typeof translations['en'];
    hasChosen: boolean;
    confirmLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType>({
    language: 'en',
    setLanguage: () => {},
    t: translations.en,
    hasChosen: false,
    confirmLanguage: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<Language>('en');
    const [hasChosen, setHasChosen] = useState(true); // start true to avoid flash

    useEffect(() => {
        const saved = localStorage.getItem(STORAGE_KEY) as Language | null;
        if (saved && (saved === 'en' || saved === 'it')) {
            setLanguageState(saved);
            setHasChosen(true);
        } else {
            setHasChosen(false);
        }
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem(STORAGE_KEY, lang);
    };

    // Called from the modal — sets language AND marks as chosen
    const confirmLanguage = (lang: Language) => {
        setLanguage(lang);
        setHasChosen(true);
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t: translations[language], hasChosen, confirmLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}
