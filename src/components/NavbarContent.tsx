"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import TaxiButton from './TaxiButton';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const services = [
        { name: 'Airport Transfers', path: '/services/airport-transfers/' },
        { name: 'City to City Transfers', path: '/services/city-to-city/' },
        { name: 'Hotel Transfers', path: '/services/hotel-transfers/' },
        { name: 'Business / Corporate', path: '/services/business-taxi/' },
        { name: 'Hourly Taxi', path: '/services/hourly-taxi/' },
        { name: 'Wedding & Events', path: '/services/wedding-events/' },
        { name: 'City Taxi', path: '/city/' },
    ];

    const airports = [
        { name: 'Rome Fiumicino', path: '/airport/rome-fiumicino-airport-taxi' },
        { name: 'Rome Ciampino', path: '/airport/rome-ciampino-airport-taxi' },
        { name: 'Milan Malpensa', path: '/airport/milan-malpensa-airport-taxi' },
        { name: 'Milan Linate', path: '/airport/milan-linate-airport-taxi' },
        { name: 'Venice Marco Polo', path: '/airport/venice-marco-polo-airport-taxi' },
        { name: 'Naples Airport', path: '/airport/naples-airport-taxi' },
        { name: 'Florence Airport', path: '/airport/florence-airport-taxi' },
        { name: 'Bologna Marconi', path: '/airport/bologna-marconi-airport-taxi' },
        { name: 'Pisa Airport', path: '/airport/pisa-airport-taxi' },
        { name: 'Verona Airport', path: '/airport/verona-airport-taxi' },
        { name: 'Palermo Airport', path: '/airport/palermo-airport-taxi' },
        { name: 'Catania Airport', path: '/airport/catania-fontanarossa-airport-taxi' },
        { name: 'Bari Airport', path: '/airport/bari-airport-taxi' },
        { name: 'Genoa Airport', path: '/airport/genoa-airport-taxi' },
    ];

    const cities = [
        { name: 'Rome', path: '/city/rome-taxi-service' },
        { name: 'Milan', path: '/city/milan-taxi-service' },
        { name: 'Venice', path: '/city/venice-taxi-service' },
        { name: 'Florence', path: '/city/florence-taxi-service' },
        { name: 'Naples', path: '/city/naples-taxi-service' },
        { name: 'Amalfi', path: '/city/amalfi-taxi-service' },
        { name: 'Positano', path: '/city/positano-taxi-service' },
        { name: 'Ravello', path: '/city/ravello-taxi-service' },
        { name: 'Sorrento', path: '/city/sorrento-taxi-service' },
        { name: 'Portofino', path: '/city/portofino-taxi-service' },
        { name: 'Lake Como', path: '/city/como-taxi-service' },
        { name: 'Taormina', path: '/city/taormina-taxi-service' },
        { name: 'Bologna', path: '/city/bologna-taxi-service' },
        { name: 'Bari', path: '/city/bari-taxi-service' },
        { name: 'Palermo', path: '/city/palermo-taxi-service' },
        { name: 'Siena', path: '/city/siena-taxi-service' },
        { name: 'Pisa', path: '/city/pisa-taxi-service' },
        { name: 'Lucca', path: '/city/lucca-taxi-service' },
        { name: 'San Gimignano', path: '/city/san-gimignano-taxi-service' },
        { name: 'Cinque Terre', path: '/city/riomaggiore-taxi-service' },
        { name: 'Agrigento', path: '/city/agrigento-taxi-service' },
        { name: 'Alberobello', path: '/city/alberobello-taxi-service' },
    ];

    const tours = [
        { name: 'Amalfi Coast Tour', path: '/tour/amalfi-coast' },
        { name: 'Tuscany Tour', path: '/tour/tuscany-wine-tour' },
        { name: 'Lake Como Tour', path: '/tour/lake-como' },
        { name: 'Vatican Tour', path: '/tour/vatican' },
        { name: 'Dolomites Tour', path: '/tour/dolomites' },
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

                        {/* DESKTOP ONLY: Book Now - Upper Right */}
                        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 animate-slide-left [animation-delay:0.4s]">
                            <TaxiButton href="/book-now/">
                                Book Now
                            </TaxiButton>
                        </div>

                        {/* MOBILE ONLY: Hamburger (Left) and Book Now (Right) - Adjusting for the layout revert */}
                        <button
                            className="lg:hidden absolute left-0 top-1/2 -translate-y-1/2 text-white p-2 animate-slide-left [animation-delay:0.4s]"
                            onClick={() => setIsMobileMenuOpen(true)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                        <div className="lg:hidden absolute right-0 top-1/2 -translate-y-1/2 scale-75 origin-right animate-slide-left [animation-delay:0.4s]">
                            <TaxiButton href="/book-now/">
                                Book Now
                            </TaxiButton>
                        </div>
                    </div>

                    {/* Bottom Section: Navigation Links (Center) */}
                    <div className="hidden lg:flex items-center gap-8 xl:gap-10 animate-slide-left [animation-delay:0.6s]">
                        {/* 2. Home */}
                        <Link href="/" className="text-white hover:text-[#F4C430] transition-colors text-xs font-bold uppercase tracking-widest relative group">
                            Home
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#F4C430] transition-all duration-300 group-hover:w-full"></span>
                        </Link>

                        {/* 3. Services Dropdown */}
                        <div className="relative group dropdown-trigger">
                            <button className="text-white group-hover:text-[#F4C430] transition-colors text-xs font-bold uppercase tracking-widest flex items-center gap-1">
                                Services
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
                                </div>
                            </div>
                        </div>

                        {/* 4. Airports Mega Menu */}
                        <div className="relative group mega-menu-trigger">
                            <button className="text-white group-hover:text-[#F4C430] transition-colors text-xs font-bold uppercase tracking-widest flex items-center gap-1">
                                Airports
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 transition-transform group-hover:rotate-180">
                                    <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                </svg>
                            </button>
                            <div className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] pt-4 mega-menu pointer-events-none group-hover:pointer-events-auto">
                                <div className="bg-[#0F1C2E] border-t-2 border-[#F4C430] shadow-2xl p-8">
                                    <p className="text-[#F4C430] text-sm font-bold uppercase tracking-[0.2em] mb-6 border-b border-[#F4C430]/20 pb-2">Top Italian Airports</p>
                                    <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                                        {airports.map((item) => (
                                            <Link key={item.name} href={item.path} className="text-white hover:text-[#F4C430] transition-colors text-[10px] uppercase tracking-widest font-semibold flex items-center gap-2">
                                                <span className="w-1 h-1 bg-[#F4C430] rounded-full"></span>
                                                {item.name}
                                            </Link>
                                        ))}
                                        <Link href="/airport/" className="text-[#F4C430] hover:underline transition-colors text-[11px] uppercase tracking-widest font-bold mt-2 col-span-2">View All Airports →</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 5. Cities Mega Menu */}
                        <div className="relative group mega-menu-trigger">
                            <button className="text-white group-hover:text-[#F4C430] transition-colors text-xs font-bold uppercase tracking-widest flex items-center gap-1">
                                Cities
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 transition-transform group-hover:rotate-180">
                                    <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                </svg>
                            </button>
                            <div className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] pt-4 mega-menu pointer-events-none group-hover:pointer-events-auto">
                                <div className="bg-[#0F1C2E] border-t-2 border-[#F4C430] shadow-2xl p-8">
                                    <p className="text-[#F4C430] text-sm font-bold uppercase tracking-[0.2em] mb-6 border-b border-[#F4C430]/20 pb-2">Top Italian Cities</p>
                                    <div className="grid grid-cols-4 gap-x-4 gap-y-3">
                                        {cities.map((item) => (
                                            <Link key={item.name} href={item.path} className="text-white hover:text-[#F4C430] transition-colors text-[9px] uppercase tracking-widest font-semibold flex items-center gap-1.5">
                                                <span className="w-1 h-1 bg-[#F4C430] rounded-full"></span>
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                    <Link href="/city/" className="text-[#F4C430] hover:underline transition-colors text-[11px] uppercase tracking-widest font-bold mt-6 inline-block">View All 100+ Cities →</Link>
                                </div>
                            </div>
                        </div>

                        {/* 6. Tours Dropdown */}
                        <div className="relative group dropdown-trigger">
                            <button className="text-white group-hover:text-[#F4C430] transition-colors text-xs font-bold uppercase tracking-widest flex items-center gap-1">
                                Tours
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
                                </div>
                            </div>
                        </div>

                        {/* 7. About Us */}
                        <Link href="/about-us/" className="text-white hover:text-[#F4C430] transition-colors text-xs font-bold uppercase tracking-widest relative group">
                            About
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#F4C430] transition-all duration-300 group-hover:w-full"></span>
                        </Link>

                        {/* 8. Contact */}
                        <Link href="/contact/" className="text-white hover:text-[#F4C430] transition-colors text-xs font-bold uppercase tracking-widest relative group">
                            Contact
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#F4C430] transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Mobile Drawer */}
            <div className={`fixed inset-0 z-[60] lg:hidden transition-transform duration-500 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="absolute inset-0 bg-[#0F1C2E]/95 backdrop-blur-lg">
                    <div className="flex flex-col h-full p-8">
                        <div className="flex justify-between items-center mb-12">
                            <Image src="/images/logo.png" alt="ItaliaRide" width={140} height={40} className="h-10 w-auto" />
                            <button onClick={() => setIsMobileMenuOpen(false)} className="text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div className="flex flex-col gap-6 overflow-y-auto pb-20">
                            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-lg font-bold uppercase tracking-widest">Home</Link>

                            {/* Services Mobile */}
                            <div className="border-t border-white/10 pt-4">
                                <p className="text-[#F4C430] text-xs font-bold uppercase tracking-widest mb-4">Services</p>
                                <div className="flex flex-col gap-4 pl-4">
                                    {services.map(s => (
                                        <Link key={s.name} href={s.path} onClick={() => setIsMobileMenuOpen(false)} className="text-white/80 text-sm uppercase tracking-widest">{s.name}</Link>
                                    ))}
                                </div>
                            </div>

                            {/* Airports Mobile */}
                            <div className="border-t border-white/10 pt-4">
                                <p className="text-[#F4C430] text-xs font-bold uppercase tracking-widest mb-4">Top Airports</p>
                                <div className="flex flex-col gap-4 pl-4">
                                    {airports.map(s => (
                                        <Link key={s.name} href={s.path} onClick={() => setIsMobileMenuOpen(false)} className="text-white/80 text-sm uppercase tracking-widest">{s.name}</Link>
                                    ))}
                                </div>
                            </div>

                            {/* Cities Mobile */}
                            <div className="border-t border-white/10 pt-4">
                                <p className="text-[#F4C430] text-xs font-bold uppercase tracking-widest mb-4">Top Cities</p>
                                <div className="flex flex-col gap-4 pl-4">
                                    {cities.map(s => (
                                        <Link key={s.name} href={s.path} onClick={() => setIsMobileMenuOpen(false)} className="text-white/80 text-sm uppercase tracking-widest">{s.name}</Link>
                                    ))}
                                </div>
                            </div>

                            <Link href="/about-us/" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-lg font-bold uppercase tracking-widest border-t border-white/10 pt-4">About</Link>
                            <Link href="/contact/" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-lg font-bold uppercase tracking-widest border-t border-white/10 pt-4">Contact</Link>
                            <TaxiButton href="/book-now/" className="w-full mt-4" onClick={() => setIsMobileMenuOpen(false)}>
                                Book Now
                            </TaxiButton>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
