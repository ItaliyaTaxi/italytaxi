'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import { useLanguage } from '@/context/LanguageContext';

// Drives the Google Translate "Website Translator" widget from the site's
// existing EN/IT toggle. Selecting Italian sets the `googtrans` cookie and
// reloads once; Google Translate then translates the whole page (any route —
// blogs, services, routes, hotel pages) into Italian. Selecting English clears
// the cookie and restores the original text. The visible Google banner is
// hidden via CSS in globals.css.

declare global {
    interface Window {
        googleTranslateElementInit?: () => void;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        google?: any;
    }
}

function readGoogtrans(): string {
    const m = typeof document !== 'undefined' ? document.cookie.match(/(?:^|;\s*)googtrans=([^;]+)/) : null;
    return m ? decodeURIComponent(m[1]) : '';
}

function writeGoogtrans(value: string | null) {
    const host = window.location.hostname;
    const targets = ['/', `/;domain=${host}`, `/;domain=.${host}`];
    if (value === null) {
        targets.forEach((suffix) => {
            document.cookie = `googtrans=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=${suffix}`;
        });
    } else {
        targets.forEach((suffix) => {
            document.cookie = `googtrans=${value};path=${suffix}`;
        });
    }
}

export default function GoogleTranslate() {
    const { language } = useLanguage();

    // Register the init callback the Google script calls when it loads.
    useEffect(() => {
        window.googleTranslateElementInit = () => {
            if (window.google?.translate?.TranslateElement) {
                new window.google.translate.TranslateElement(
                    { pageLanguage: 'en', includedLanguages: 'en,it', autoDisplay: false },
                    'google_translate_element'
                );
            }
        };
    }, []);

    // When the chosen language changes, sync the googtrans cookie and reload once.
    useEffect(() => {
        if (typeof window === 'undefined') return;
        const current = readGoogtrans();
        if (language === 'it') {
            if (current !== '/en/it') {
                writeGoogtrans('/en/it');
                window.location.reload();
            }
        } else {
            // English / original
            if (current && current !== '/en/en') {
                writeGoogtrans(null);
                window.location.reload();
            }
        }
    }, [language]);

    return (
        <>
            <div id="google_translate_element" aria-hidden="true" style={{ display: 'none' }} />
            <Script
                src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
                strategy="afterInteractive"
            />
        </>
    );
}
