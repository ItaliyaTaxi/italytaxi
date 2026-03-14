"use client";

import TaxiButton from './TaxiButton';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function StickyBookNow() {
    const [isVisible, setIsVisible] = useState(false);
    const { t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            const mobile = window.innerWidth < 1024;
            const scrolled = window.scrollY > 300;
            setIsVisible(mobile && scrolled);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 lg:hidden animate-slide-up">
            <TaxiButton
                href="/book-now/"
                className="w-full"
            >
                {t.sticky.bookNow}
            </TaxiButton>
        </div>
    );
}
