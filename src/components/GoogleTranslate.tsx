'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import { useLanguage } from '@/context/LanguageContext';

// Drives the Google Translate "Website Translator" from the site's EN/IT toggle.
// Google translates the WHOLE page body (every route) via the `googtrans` cookie
// + one reload. The visible Google banner is hidden via CSS in globals.css.
//
// IMPORTANT (why the body wasn't translating): `element.js` calls the global
// `googleTranslateElementInit` callback as soon as it loads. If that callback is
// only defined inside a React useEffect, the script can fire before the effect
// runs, so the translator never initialises and only the dictionary-translated
// nav/homepage appear in Italian. We therefore define the callback in an inline
// script that runs *before* element.js, guaranteeing initialisation on load.

declare global {
    interface Window {
        googleTranslateElementInit?: () => void;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        google?: any;
    }
}

const COOKIE_SCOPES = (host: string) => ['/', `/;domain=${host}`, `/;domain=.${host}`];

function cookieTargetsItalian(): boolean {
    return document.cookie.split(';').some((c) => {
        const [k, v] = c.split('=');
        if (k.trim() !== 'googtrans') return false;
        const parts = decodeURIComponent(v || '').split('/');
        return parts[parts.length - 1] === 'it';
    });
}

function setItalianCookie() {
    const host = window.location.hostname;
    COOKIE_SCOPES(host).forEach((suffix) => { document.cookie = `googtrans=/en/it;path=${suffix}`; });
}

function clearGoogtransCookie() {
    const host = window.location.hostname;
    COOKIE_SCOPES(host).forEach((suffix) => {
        document.cookie = `googtrans=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=${suffix}`;
    });
}

const INIT_SCRIPT =
    "window.googleTranslateElementInit=function(){" +
    "if(window.google&&google.translate&&google.translate.TranslateElement){" +
    "new google.translate.TranslateElement({pageLanguage:'en',includedLanguages:'en,it',autoDisplay:false},'google_translate_element');}};";

export default function GoogleTranslate() {
    const { language, isNativeItalianRoute } = useLanguage();

    // Sync the page to the chosen language: set/clear the googtrans cookie and
    // reload ONCE. Loop-safe via a tolerant "is the cookie already Italian?" check.
    useEffect(() => {
        if (typeof window === 'undefined') return;
        // Dedicated Italian routes (/it/...) are natively Italian — running them
        // through Google Translate (EN source -> IT) would be wrong. If the
        // googtrans cookie is somehow still set from a previous page, clear it
        // so native Italian content renders as authored, not re-translated.
        if (isNativeItalianRoute) {
            if (cookieTargetsItalian()) clearGoogtransCookie();
            return;
        }
        const wantItalian = language === 'it';
        const isItalian = cookieTargetsItalian();
        if (wantItalian === isItalian) return;

        const last = Number(sessionStorage.getItem('gt-reload-at') || '0');
        if (Date.now() - last < 4000) return;
        sessionStorage.setItem('gt-reload-at', String(Date.now()));

        if (wantItalian) setItalianCookie();
        else clearGoogtransCookie();
        window.location.reload();
    }, [language]);

    return (
        <>
            <div id="google_translate_element" aria-hidden="true" style={{ display: 'none' }} />
            {/* Define the init callback BEFORE element.js loads (runs at parse time). */}
            <script dangerouslySetInnerHTML={{ __html: INIT_SCRIPT }} />
            <Script
                src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
                strategy="afterInteractive"
            />
        </>
    );
}
