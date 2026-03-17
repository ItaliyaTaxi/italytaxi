// Footer component for ItaliaRide
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Instagram, Facebook } from 'lucide-react';
import TaxiButton from './TaxiButton';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="bg-[#0a121d] text-gray-300 py-20 border-t border-navy">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <Image
                            src="/images/logo.png"
                            alt="ItaliaRide Logo"
                            width={180}
                            height={60}
                            className="mb-6 opacity-90"
                        />
                        <p className="text-sm leading-relaxed mb-8">
                            {t.footer.description}
                        </p>
                        <div className="flex gap-4">
                            <Link href="https://www.facebook.com/italytaxiservice" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook" className="w-10 h-10 rounded-full bg-navy flex items-center justify-center hover:bg-gold hover:text-white transition-all">
                                <Facebook className="w-5 h-5" />
                            </Link>
                            <Link href="https://www.instagram.com/italytaxiservice" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram" className="w-10 h-10 rounded-full bg-navy flex items-center justify-center hover:bg-gold hover:text-white transition-all">
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link href="https://www.tiktok.com/@italytaxiservice" target="_blank" rel="noopener noreferrer" aria-label="Follow us on TikTok" className="w-10 h-10 rounded-full bg-navy flex items-center justify-center hover:bg-gold hover:text-white transition-all">
                                <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className="w-5 h-5">
                                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-span-1">
                        <p className="text-white font-bold text-lg mb-8 relative">
                            {t.footer.explore}
                            <span className="absolute -bottom-2 left-0 w-8 h-1 bg-gold" />
                        </p>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="/" className="hover:text-gold transition-colors">{t.footer.home}</Link></li>
                            <li><Link href="/about-us" className="hover:text-gold transition-colors">About Us</Link></li>
                            <li><Link href="/blog" className="hover:text-gold transition-colors">Blog</Link></li>
                            <li><Link href="/services" className="hover:text-gold transition-colors">{t.footer.services}</Link></li>
                            <li><Link href="/coverage-areas" className="hover:text-gold transition-colors">Coverage Areas</Link></li>
                            <li><Link href="/drivers" className="hover:text-gold transition-colors">Our Drivers</Link></li>
                            <li><Link href="/book-now" className="hover:text-gold transition-colors">{t.footer.bookNow}</Link></li>
                            <li><Link href="/sitemap.xml" className="hover:text-gold transition-colors">Sitemap</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="col-span-1">
                        <p className="text-white font-bold text-lg mb-8 relative">
                            {t.footer.contactUs}
                            <span className="absolute -bottom-2 left-0 w-8 h-1 bg-gold" />
                        </p>
                        <ul className="space-y-6 text-sm text-gold">
                            <li className="flex items-start gap-4">
                                <Mail className="w-5 h-5 shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-gray-300 block mb-1">{t.footer.bookings}</p>
                                    <a href="mailto:booking@italytaxiservice.com" className="hover:text-white transition-colors">booking@italytaxiservice.com</a>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <Mail className="w-5 h-5 shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-gray-300 block mb-1">{t.footer.generalEnquiries}</p>
                                    <a href="mailto:info@italytaxiservice.com" className="hover:text-white transition-colors">info@italytaxiservice.com</a>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="col-span-1">
                        <p className="text-white font-bold text-lg mb-8 relative">
                            {t.footer.newsletter}
                            <span className="absolute -bottom-2 left-0 w-8 h-1 bg-gold" />
                        </p>
                        <p className="text-sm mb-6">{t.footer.newsletterDesc}</p>
                        <form className="flex">
                            <input
                                type="email"
                                placeholder={t.footer.emailPlaceholder}
                                className="bg-navy border border-gray-700 px-4 py-2 w-full text-white text-sm focus:outline-none focus:border-gold"
                            />
                            <TaxiButton type="submit" className="scale-75 origin-left">
                                {t.footer.send}
                            </TaxiButton>
                        </form>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} ItaliaRide. {t.footer.rights}</p>
                </div>
            </div>
        </footer>
    );
}
