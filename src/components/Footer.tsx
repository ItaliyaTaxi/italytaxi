// Footer component for ItaliaRide
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Instagram, Facebook, MapPin, Phone } from 'lucide-react';
import TaxiButton from './TaxiButton';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="bg-[#0a121d] text-gray-300 py-20 border-t border-navy">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    {/* Column 1: Brand & Contact */}
                    <div className="col-span-1">
                        <Image
                            src="/images/logo.png"
                            alt="ItaliaRide Logo"
                            width={180}
                            height={60}
                            className="mb-6 opacity-90"
                        />
                        <p className="text-xs leading-relaxed mb-8">
                            {t.footer.description}
                        </p>
                        <ul className="space-y-4 text-xs mb-8">
                            <li className="flex items-center gap-3">
                                <MapPin className="w-4 h-4 text-gold shrink-0" />
                                <span>Via della Conciliazione, 1, 00193 Roma RM, Italy</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-4 h-4 text-gold shrink-0" />
                                <a href="https://wa.me/923148932631" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">WhatsApp Chat</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-4 h-4 text-gold shrink-0" />
                                <a href="mailto:info@italytaxiservice.com" className="hover:text-gold transition-colors">info@italytaxiservice.com</a>
                            </li>
                        </ul>
                        <div className="flex gap-4">
                            <Link href="https://www.facebook.com/italytaxiservice" target="_blank" rel="nofollow noopener noreferrer" className="w-8 h-8 rounded-full bg-navy flex items-center justify-center hover:bg-gold hover:text-white transition-all">
                                <Facebook className="w-4 h-4" />
                            </Link>
                            <Link href="https://www.instagram.com/italytaxiservice" target="_blank" rel="nofollow noopener noreferrer" className="w-8 h-8 rounded-full bg-navy flex items-center justify-center hover:bg-gold hover:text-white transition-all">
                                <Instagram className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                    {/* Column 2: Explore */}
                    <div className="col-span-1">
                        <p className="text-white font-bold text-lg mb-8 relative">
                            {t.footer.explore}
                            <span className="absolute -bottom-2 left-0 w-8 h-1 bg-gold" />
                        </p>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/" className="hover:text-gold transition-colors">{t.footer.home}</Link></li>
                            <li><Link href="/services" className="hover:text-gold transition-colors">{t.footer.services}</Link></li>
                            <li><Link href="/coverage-areas" className="hover:text-gold transition-colors">Coverage Areas</Link></li>
                            <li><Link href="/airport" className="hover:text-gold transition-colors">Airports</Link></li>
                            <li><Link href="/city" className="hover:text-gold transition-colors">Cities</Link></li>
                            <li><Link href="/blog" className="hover:text-gold transition-colors">Blog</Link></li>
                            <li><Link href="/about-us" className="hover:text-gold transition-colors">About Us</Link></li>
                            <li><Link href="/drivers" className="hover:text-gold transition-colors">Our Drivers</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Transfers & Legal */}
                    <div className="col-span-1">
                        <p className="text-white font-bold text-lg mb-8 relative">
                            Popular Transfers
                            <span className="absolute -bottom-2 left-0 w-8 h-1 bg-gold" />
                        </p>
                        <ul className="space-y-3 text-sm mb-8">
                            <li><Link href="/services/wedding-events" className="hover:text-gold transition-colors">Wedding & Events</Link></li>
                            <li><Link href="/services/business-taxi" className="hover:text-gold transition-colors">Business / Corporate</Link></li>
                            <li><Link href="/border" className="hover:text-gold transition-colors">Border Transfers</Link></li>
                            <li><Link href="/tour" className="hover:text-gold transition-colors">Sightseeing Tours</Link></li>
                        </ul>
                        <p className="text-white font-bold text-sm mb-4 uppercase tracking-widest">Help & Legal</p>
                        <ul className="space-y-2 text-xs">
                            <li><Link href="/faq" className="hover:text-gold transition-colors">FAQs</Link></li>
                            <li><Link href="/privacy-policy" className="hover:text-gold transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms-and-conditions" className="hover:text-gold transition-colors">Terms & Conditions</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Newsletter */}
                    <div className="col-span-1">
                        <p className="text-white font-bold text-lg mb-8 relative">
                            {t.footer.newsletter}
                            <span className="absolute -bottom-2 left-0 w-8 h-1 bg-gold" />
                        </p>
                        <p className="text-xs mb-6 leading-relaxed">{t.footer.newsletterDesc}</p>
                        <form className="flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder={t.footer.emailPlaceholder}
                                className="bg-navy border border-gray-700 px-4 py-2 w-full text-white text-xs focus:outline-none focus:border-gold"
                            />
                            <TaxiButton type="submit" className="w-full">
                                {t.footer.send}
                            </TaxiButton>
                        </form>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-800 text-center text-[10px] text-gray-600">
                    <p>&copy; {new Date().getFullYear()} ItaliaRide. {t.footer.rights}</p>
                </div>
            </div>
        </footer>
    );
}
