"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import TaxiButton from './TaxiButton';
import { useLanguage } from '@/context/LanguageContext';

const WHATSAPP_NUMBER = "923148932631";

function WhatsAppIcon({ className = "" }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.316 1.592 5.448 0 9.886-4.438 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.718-.975v-.006zm9.766-7.392c.272.136.433.226.482.308.049.082.049.474-.15.939-.199.464-1.14 1.153-1.585 1.185-.444.032-.904.14-2.731-.606-1.826-.747-3.03-2.634-3.121-2.755-.09-.121-.767-.983-.767-1.902 0-.919.467-1.37.633-1.564.167-.193.367-.242.489-.242.122 0 .245.001.35.006.115.005.27.022.415.361.16.376.545 1.326.592 1.422.047.096.078.208.016.333-.061.125-.092.203-.184.308-.092.105-.193.234-.275.314-.092.09-.188.19-.081.372.108.182.479.791 1.028 1.282.706.626 1.302.821 1.489.912.187.091.295.076.403-.046.108-.121.463-.54.586-.725.123-.186.246-.155.415-.093.169.062 1.08.51 1.265.602z" />
        </svg>
    );
}

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { language, setLanguage, t } = useLanguage();

    useEffect(() => {
        // RAF throttle: the callback is only executed once per animation frame,
        // preventing layout-thrashing on every single scroll tick.
        // passive: true lets the browser skip calling preventDefault() checks,
        // unlocking hardware-accelerated scrolling on mobile devices.
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    setIsScrolled(window.scrollY > 20);
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const services = [
        { name: 'Airport Transfers', path: '/services/airport-transfers' },
        { name: 'City to City Transfers', path: '/services/city-to-city' },
        { name: 'Cruise Port Transfers', path: '/services/cruise-port-transfers' },
        { name: 'Hotel Transfers', path: '/services/hotel-transfers' },
        { name: 'Business / Corporate', path: '/services/business-taxi' },
        { name: 'Wedding & Event Transfers', path: '/services/wedding-events' },
        { name: 'Beach Transfers', path: '/beach-transfer' },
        { name: 'Attraction Transfers', path: '/attraction-transfer' },
    ];

    const airports = [
        { name: 'Rome Fiumicino', path: '/airport/rome-fiumicino' },
        { name: 'Rome Ciampino', path: '/airport/rome-ciampino' },
        { name: 'Milan Malpensa', path: '/airport/milan-malpensa' },
        { name: 'Milan Linate', path: '/airport/milan-linate' },
        { name: 'Venice Marco Polo', path: '/airport/venice' },
        { name: 'Naples Airport', path: '/airport/naples' },
        { name: 'Florence Airport', path: '/airport/florence' },
        { name: 'Bologna Marconi', path: '/airport/bologna-marconi' },
        { name: 'Pisa Airport', path: '/airport/pisa' },
        { name: 'Verona Airport', path: '/airport/verona' },
        { name: 'Palermo Airport', path: '/airport/palermo' },
        { name: 'Catania Airport', path: '/airport/catania-fontanarossa' },
        { name: 'Bari Airport', path: '/airport/bari' },
        { name: 'Genoa Airport', path: '/airport/genoa' },
    ];

    const cities = [
        { name: 'Rome', path: '/city/rome' },
        { name: 'Milan', path: '/city/milan' },
        { name: 'Venice', path: '/city/venice' },
        { name: 'Florence', path: '/city/florence' },
        { name: 'Naples', path: '/city/naples' },
        { name: 'Amalfi', path: '/city/amalfi' },
        { name: 'Positano', path: '/city/positano' },
        { name: 'Ravello', path: '/city/ravello' },
        { name: 'Sorrento', path: '/city/sorrento' },
        { name: 'Portofino', path: '/city/portofino' },
        { name: 'Lake Como', path: '/city/como' },
        { name: 'Taormina', path: '/city/taormina' },
        { name: 'Bologna', path: '/city/bologna' },
        { name: 'Bari', path: '/city/bari' },
        { name: 'Palermo', path: '/city/palermo' },
        { name: 'Siena', path: '/city/siena' },
        { name: 'Pisa', path: '/city/pisa' },
        { name: 'Lucca', path: '/city/lucca' },
        { name: 'San Gimignano', path: '/city/san-gimignano' },
        { name: 'Cinque Terre', path: '/city/cinque-terre' },
        { name: 'Agrigento', path: '/city/agrigento' },
        { name: 'Alberobello', path: '/city/alberobello' },
    ];

    const tours = [
        { name: 'Amalfi Coast Tour', path: '/tour/amalfi-coast' },
        { name: 'Tuscany Tour', path: '/tour/tuscany-wine-tour' },
        { name: 'Lake Como Tour', path: '/tour/lake-como' },
        { name: 'Vatican Tour', path: '/tour/vatican' },
        { name: 'Dolomites Tour', path: '/tour/dolomites' },
    ];

    const borders = [
        { name: 'Italy → Switzerland', path: '/border/italy-to-switzerland' },
        { name: 'Italy → France', path: '/border/italy-to-france' },
        { name: 'Italy → Austria', path: '/border/italy-to-austria' },
        { name: 'Italy → Germany', path: '/border/italy-to-germany' },
        { name: 'Italy → Slovenia', path: '/border/italy-to-slovenia' },
        { name: 'Italy → Croatia', path: '/border/italy-to-croatia' },
    ];

    return (
        <>
            <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-[#0F1C2E]/95 py-3 shadow-xl backdrop-blur-md' : 'bg-transparent py-5'}`}>
                <div className="container mx-auto px-6 relative flex flex-col items-center">

                    {/* Top Section: Logo (Center) and Book Now (Upper Right) */}
                    <div className="w-full relative flex justify-center items-center mb-6">
                        <Link href="/" className="transition-transform duration-300 hover:scale-105 block animate-slide-left [animation-delay:0.2s]">
                            <Image
                                src="/images/logo.png"
                                alt="ItaliaRide"
                                width={180}
                                height={60}
                                className="h-14 md:h-16 w-auto"
                                priority
                            />
                        </Link>

                        {/* DESKTOP ONLY: Email - Upper Left */}
                        <a
                            href="mailto:booking@italytaxiservice.com"
                            className="hidden lg:flex items-center gap-2 absolute left-0 top-1/2 -translate-y-1/2 text-[10px] font-bold text-gold uppercase tracking-widest hover:text-white transition-colors animate-slide-left [animation-delay:0.2s]"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            booking@italytaxiservice.com
                        </a>

                        {/* DESKTOP ONLY: Language Toggle + WhatsApp + Get Quote - Upper Right */}
                        <div className="hidden lg:flex items-center gap-3 absolute right-0 top-1/2 -translate-y-1/2 animate-slide-left [animation-delay:0.4s]">
                            {/* Language Toggle */}
                            <div className="flex items-center bg-white/10 rounded-full p-0.5 border border-white/20">
                                <button
                                    onClick={() => setLanguage('en')}
                                    className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-200 ${language === 'en' ? 'bg-[#F4C430] text-[#0F1C2E]' : 'text-white/70 hover:text-white'}`}
                                >
                                    EN
                                </button>
                                <button
                                    onClick={() => setLanguage('it')}
                                    className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-200 ${language === 'it' ? 'bg-[#F4C430] text-[#0F1C2E]' : 'text-white/70 hover:text-white'}`}
                                >
                                    IT
                                </button>
                            </div>
                            {/* WhatsApp Icon Link */}
                            <a
                                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Contact on WhatsApp"
                                className="bg-[#25D366] text-white p-2 rounded-full hover:scale-110 active:scale-95 transition-all shadow-lg"
                            >
                                <WhatsAppIcon className="w-4 h-4" />
                            </a>
                            <TaxiButton href="/book-now">
                                {t.nav.getQuote}
                            </TaxiButton>
                        </div>

                        {/* MOBILE ONLY: Left group — hamburger + EN/IT toggle */}
                        <div className="lg:hidden absolute left-0 top-1/2 -translate-y-1/2 flex items-center gap-2 animate-slide-left [animation-delay:0.4s]">
                            <button
                                className="text-white p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
                                onClick={() => setIsMobileMenuOpen(true)}
                                aria-label="Open mobile menu"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </button>
                            {/* Language toggle — clearly visible next to hamburger */}
                            <div className="flex items-center bg-white/10 rounded-full p-0.5 border border-white/20">
                                <button
                                    onClick={() => setLanguage('en')}
                                    className={`px-2 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest transition-all duration-200 min-w-[28px] min-h-[28px] ${language === 'en' ? 'bg-[#F4C430] text-[#0F1C2E]' : 'text-white/70 hover:text-white'}`}
                                >
                                    EN
                                </button>
                                <button
                                    onClick={() => setLanguage('it')}
                                    className={`px-2 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest transition-all duration-200 min-w-[28px] min-h-[28px] ${language === 'it' ? 'bg-[#F4C430] text-[#0F1C2E]' : 'text-white/70 hover:text-white'}`}
                                >
                                    IT
                                </button>
                            </div>
                        </div>

                        {/* MOBILE ONLY: Right — Get Quote only (WhatsApp is the fixed floating button) */}
                        <div className="lg:hidden absolute right-0 top-1/2 -translate-y-1/2 scale-75 origin-right animate-slide-left [animation-delay:0.4s]">
                            <TaxiButton href="/book-now">
                                {t.nav.getQuote}
                            </TaxiButton>
                        </div>
                    </div>

                    {/* Bottom Section: Navigation Links (Center) */}
                    <div className="hidden lg:flex items-center gap-8 xl:gap-10 animate-slide-left [animation-delay:0.6s]">
                        {/* Home */}
                        <Link href="/" className="text-white hover:text-[#F4C430] transition-colors text-xs font-bold uppercase tracking-widest relative group">
                            {t.nav.home}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#F4C430] transition-all duration-300 group-hover:w-full"></span>
                        </Link>

                        {/* Services Dropdown */}
                        <div className="relative group dropdown-trigger">
                            <button className="text-white group-hover:text-[#F4C430] transition-colors text-xs font-bold uppercase tracking-widest flex items-center gap-1">
                                {t.nav.services}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 transition-transform group-hover:rotate-180">
                                    <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                </svg>
                            </button>
                            <div className="absolute top-full left-0 w-64 pt-4 dropdown-menu pointer-events-none group-hover:pointer-events-auto">
                                <div className="bg-[#0F1C2E] border-t-2 border-[#F4C430] shadow-2xl py-2">
                                    {services.map((item) => (
                                        <Link key={item.name} href={item.path} className="block px-6 py-3 text-[11px] text-white hover:bg-[#F4C430]/10 hover:text-[#F4C430] transition-colors uppercase tracking-widest font-bold border-b border-white/5 last:border-0">
                                            {item.name}
                                        </Link>
                                    ))}
                                    <Link href="/services" className="block px-6 py-3 text-[11px] text-[#F4C430] hover:bg-[#F4C430]/10 transition-colors uppercase tracking-widest font-bold border-t border-white/10">
                                        {t.nav.viewAllServices}
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Airports Mega Menu */}
                        <div className="relative group mega-menu-trigger">
                            <button className="text-white group-hover:text-[#F4C430] transition-colors text-xs font-bold uppercase tracking-widest flex items-center gap-1">
                                {t.nav.airports}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 transition-transform group-hover:rotate-180">
                                    <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                </svg>
                            </button>
                            <div className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] pt-4 mega-menu pointer-events-none group-hover:pointer-events-auto">
                                <div className="bg-[#0F1C2E] border-t-2 border-[#F4C430] shadow-2xl p-8">
                                    <p className="text-[#F4C430] text-sm font-bold uppercase tracking-[0.2em] mb-6 border-b border-[#F4C430]/20 pb-2">{t.nav.topItalianAirports}</p>
                                    <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                                        {airports.map((item) => (
                                            <Link key={item.name} href={item.path} className="text-white hover:text-[#F4C430] transition-colors text-[10px] uppercase tracking-widest font-semibold flex items-center gap-2">
                                                <span className="w-1 h-1 bg-[#F4C430] rounded-full"></span>
                                                {item.name}
                                            </Link>
                                        ))}
                                        <Link href="/airport" className="text-[#F4C430] hover:underline transition-colors text-[11px] uppercase tracking-widest font-bold mt-2 col-span-2">{t.nav.viewAllAirports}</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Cities Mega Menu */}
                        <div className="relative group mega-menu-trigger">
                            <button className="text-white group-hover:text-[#F4C430] transition-colors text-xs font-bold uppercase tracking-widest flex items-center gap-1">
                                {t.nav.cities}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 transition-transform group-hover:rotate-180">
                                    <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                </svg>
                            </button>
                            <div className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] pt-4 mega-menu pointer-events-none group-hover:pointer-events-auto">
                                <div className="bg-[#0F1C2E] border-t-2 border-[#F4C430] shadow-2xl p-8">
                                    <p className="text-[#F4C430] text-sm font-bold uppercase tracking-[0.2em] mb-6 border-b border-[#F4C430]/20 pb-2">{t.nav.topItalianCities}</p>
                                    <div className="grid grid-cols-4 gap-x-4 gap-y-3">
                                        {cities.map((item) => (
                                            <Link key={item.name} href={item.path} className="text-white hover:text-[#F4C430] transition-colors text-[9px] uppercase tracking-widest font-semibold flex items-center gap-1.5">
                                                <span className="w-1 h-1 bg-[#F4C430] rounded-full"></span>
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                    <Link href="/city" className="text-[#F4C430] hover:underline transition-colors text-[11px] uppercase tracking-widest font-bold mt-6 inline-block">{t.nav.viewAllCities}</Link>
                                </div>
                            </div>
                        </div>

                        {/* Tours Dropdown */}
                        <div className="relative group dropdown-trigger">
                            <button className="text-white group-hover:text-[#F4C430] transition-colors text-xs font-bold uppercase tracking-widest flex items-center gap-1">
                                {t.nav.tours}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 transition-transform group-hover:rotate-180">
                                    <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                </svg>
                            </button>
                            <div className="absolute top-full left-0 w-64 pt-4 dropdown-menu pointer-events-none group-hover:pointer-events-auto">
                                <div className="bg-[#0F1C2E] border-t-2 border-[#F4C430] shadow-2xl py-2">
                                     {tours.map((item) => (
                                         <Link key={item.name} href={item.path} className="block px-6 py-3 text-[11px] text-white hover:bg-[#F4C430]/10 hover:text-[#F4C430] transition-colors uppercase tracking-widest font-bold border-b border-white/5 last:border-0">
                                             {item.name}
                                         </Link>
                                     ))}
                                     <Link href="/tour" className="block px-6 py-3 text-[11px] text-[#F4C430] hover:bg-[#F4C430]/10 transition-colors uppercase tracking-widest font-bold border-t border-white/10">
                                         View All Tours
                                     </Link>
                                </div>
                            </div>
                        </div>

                        {/* Borders Dropdown */}
                        <div className="relative group dropdown-trigger">
                            <button className="text-white group-hover:text-[#F4C430] transition-colors text-xs font-bold uppercase tracking-widest flex items-center gap-1">
                                {t.nav.borders}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 transition-transform group-hover:rotate-180">
                                    <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                </svg>
                            </button>
                            <div className="absolute top-full left-0 w-64 pt-4 dropdown-menu pointer-events-none group-hover:pointer-events-auto">
                                <div className="bg-[#0F1C2E] border-t-2 border-[#F4C430] shadow-2xl py-2">
                                     {borders.map((item) => (
                                         <Link key={item.name} href={item.path} className="block px-6 py-3 text-[11px] text-white hover:bg-[#F4C430]/10 hover:text-[#F4C430] transition-colors uppercase tracking-widest font-bold border-b border-white/5 last:border-0">
                                             {item.name}
                                         </Link>
                                     ))}
                                     <Link href="/border" className="block px-6 py-3 text-[11px] text-[#F4C430] hover:bg-[#F4C430]/10 transition-colors uppercase tracking-widest font-bold border-t border-white/10">
                                         View All Borders
                                     </Link>
                                </div>
                            </div>
                        </div>

                        {/* Blog */}
                        <Link href="/blog" className="text-white hover:text-[#F4C430] transition-colors text-xs font-bold uppercase tracking-widest relative group">
                            {t.nav.blog}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#F4C430] transition-all duration-300 group-hover:w-full"></span>
                        </Link>

                        {/* About Us */}
                        <Link href="/about-us" className="text-white hover:text-[#F4C430] transition-colors text-xs font-bold uppercase tracking-widest relative group">
                            {t.nav.about}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#F4C430] transition-all duration-300 group-hover:w-full"></span>
                        </Link>

                        {/* Contact */}
                        <Link href="/contact" className="text-white hover:text-[#F4C430] transition-colors text-xs font-bold uppercase tracking-widest relative group">
                            {t.nav.contact}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#F4C430] transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Mobile Drawer */}
            <div className={`fixed inset-0 z-[60] lg:hidden transition-transform duration-500 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="absolute inset-0 bg-[#0F1C2E]/95 backdrop-blur-lg">
                    <div className="flex flex-col h-full p-8">
                        <div className="flex justify-between items-center mb-8">
                            <Image src="/images/logo.png" alt="ItaliaRide" width={140} height={40} className="h-10 w-auto" />
                            <div className="flex items-center gap-3">
                                {/* Language Toggle in Mobile Drawer */}
                                <div className="flex items-center bg-white/10 rounded-full p-0.5 border border-white/20">
                                    <button
                                        onClick={() => setLanguage('en')}
                                        className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-200 ${language === 'en' ? 'bg-[#F4C430] text-[#0F1C2E]' : 'text-white/70 hover:text-white'}`}
                                    >
                                        EN
                                    </button>
                                    <button
                                        onClick={() => setLanguage('it')}
                                        className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-200 ${language === 'it' ? 'bg-[#F4C430] text-[#0F1C2E]' : 'text-white/70 hover:text-white'}`}
                                    >
                                        IT
                                    </button>
                                </div>
                                <button onClick={() => setIsMobileMenuOpen(false)} className="text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col gap-6 overflow-y-auto pb-20">
                            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-lg font-bold uppercase tracking-widest">{t.nav.home}</Link>

                            {/* Services Mobile */}
                            <div className="border-t border-white/10 pt-4">
                                <p className="text-[#F4C430] text-xs font-bold uppercase tracking-widest mb-4">{t.nav.services}</p>
                                <div className="flex flex-col gap-4 pl-4">
                                    {services.map(s => (
                                        <Link key={s.name} href={s.path} onClick={() => setIsMobileMenuOpen(false)} className="text-white/80 text-sm uppercase tracking-widest">{s.name}</Link>
                                    ))}
                                    <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className="text-[#F4C430] text-sm uppercase tracking-widest font-bold mt-2">{t.nav.viewAllServices}</Link>
                                </div>
                            </div>

                            {/* Airports Mobile */}
                            <div className="border-t border-white/10 pt-4">
                                <p className="text-[#F4C430] text-xs font-bold uppercase tracking-widest mb-4">{t.nav.topItalianAirports}</p>
                                <div className="flex flex-col gap-4 pl-4">
                                    {airports.map(s => (
                                        <Link key={s.name} href={s.path} onClick={() => setIsMobileMenuOpen(false)} className="text-white/80 text-sm uppercase tracking-widest">{s.name}</Link>
                                    ))}
                                    <Link href="/airport" onClick={() => setIsMobileMenuOpen(false)} className="text-[#F4C430] text-sm uppercase tracking-widest font-bold mt-2">{t.nav.viewAllAirports}</Link>
                                </div>
                            </div>

                            {/* Cities Mobile */}
                            <div className="border-t border-white/10 pt-4">
                                <p className="text-[#F4C430] text-xs font-bold uppercase tracking-widest mb-4">{t.nav.topItalianCities}</p>
                                <div className="flex flex-col gap-4 pl-4">
                                    {cities.map(s => (
                                        <Link key={s.name} href={s.path} onClick={() => setIsMobileMenuOpen(false)} className="text-white/80 text-sm uppercase tracking-widest">{s.name}</Link>
                                    ))}
                                    <Link href="/city" onClick={() => setIsMobileMenuOpen(false)} className="text-[#F4C430] text-sm uppercase tracking-widest font-bold mt-2">{t.nav.viewAllCities}</Link>
                                </div>
                            </div>

                            {/* Borders Mobile */}
                            <div className="border-t border-white/10 pt-4">
                                <p className="text-[#F4C430] text-xs font-bold uppercase tracking-widest mb-4">{t.nav.borders}</p>
                                <div className="flex flex-col gap-4 pl-4">
                                    {borders.map(b => (
                                        <Link key={b.name} href={b.path} onClick={() => setIsMobileMenuOpen(false)} className="text-white/80 text-sm uppercase tracking-widest">{b.name}</Link>
                                    ))}
                                </div>
                            </div>

                            <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-lg font-bold uppercase tracking-widest border-t border-white/10 pt-4">{t.nav.blog}</Link>
                            <Link href="/about-us/" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-lg font-bold uppercase tracking-widest border-t border-white/10 pt-4">{t.nav.about}</Link>
                            <Link href="/contact/" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-lg font-bold uppercase tracking-widest border-t border-white/10 pt-4">{t.nav.contact}</Link>
                            <TaxiButton href="/book-now/" className="w-full mt-4" onClick={() => setIsMobileMenuOpen(false)}>
                                {t.nav.getQuote}
                            </TaxiButton>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
