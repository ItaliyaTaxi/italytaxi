"use client";

import Image from 'next/image';
import TaxiButton from './TaxiButton';
import { useLanguage } from '@/context/LanguageContext';

export default function Hero() {
    const { t } = useLanguage();

    return (
        <section className="relative h-screen w-full flex items-center overflow-hidden font-inter">
            {/* ── Hero background ────────────────────────────────────────────────
                Using Next.js <Image fill priority> instead of CSS background-image so that:
                  • Next.js serves AVIF/WebP (hero.png ~3 MB → ~400-600 KB)
                  • Browser receives an early <link rel="preload"> hint (LCP fix)
                  • fetchPriority="high" tells the browser to fetch this before
                    other images and non-critical resources
            ──────────────────────────────────────────────────────────────────── */}
            <div className="absolute inset-0">
                <Image
                    src="/images/hero.png"
                    alt="Luxury Private Taxi Service in Italy - Professional Drivers and Transfers"
                    fill
                    priority
                    quality={80}
                    sizes="100vw"
                    className="object-cover object-center"
                    fetchPriority="high"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVQI12NgYGD4z8BQz8DAAAD//wMABgYG/v///wAAAABJRU5ErkJggg=="
                />
                {/* Gradient overlay sits above the image */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0F1C2E]/90 via-[#0F1C2E]/60 to-transparent z-[1]" />
            </div>

            {/* Content Area */}
            <div className="relative z-10 container mx-auto px-6">
                <div className="max-w-4xl pt-20">
                    <h1 className="text-white font-montserrat font-semibold leading-[1.1] mb-6">
                        <span className="text-5xl md:text-6xl block mb-2 animate-slide-left [animation-delay:0.2s]">{t.hero.line1}</span>
                        <span className="text-5xl md:text-7xl text-[#F4C430] font-serif italic block animate-slide-left [animation-delay:0.4s]">{t.hero.line2}</span>
                    </h1>

                    <div className="mb-10 space-y-2">
                        <p className="text-xl md:text-2xl text-gray-200 font-light tracking-wide uppercase animate-slide-left [animation-delay:0.6s]">
                            {t.hero.tagline1}
                        </p>
                        <p className="text-lg md:text-xl text-gray-300 font-light italic animate-slide-left [animation-delay:0.8s]">
                            {t.hero.tagline2}
                        </p>
                    </div>

                    <div className="animate-slide-left [animation-delay:1s]">
                        <TaxiButton href="/book-now/">
                            {t.hero.cta}
                        </TaxiButton>
                    </div>
                </div>
            </div>

            {/* Solid Gold Bottom Edge */}
            <div className="absolute bottom-0 left-0 w-full h-1.5 bg-[#F4C430] shadow-[0_-5px_15px_rgba(244,196,48,0.3)] z-10" />
        </section>
    );
}
