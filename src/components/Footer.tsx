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
                            src="/images/logo.webp"
                            alt="Italy Taxi Service Logo — Private Transfers Across Italy"
                            width={180}
                            height={60}
                            loading="lazy"
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
                                <a href="mailto:italytaxiservicee@gmail.com" className="hover:text-gold transition-colors">italytaxiservicee@gmail.com</a>
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
                            <li><Link href="/coverage-areas" className="hover:text-gold transition-colors">Service Areas</Link></li>
                            <li><Link href="/airport" className="hover:text-gold transition-colors">Airports</Link></li>
                            <li><Link href="/city" className="hover:text-gold transition-colors">Cities</Link></li>
                            <li><Link href="/blog" className="hover:text-gold transition-colors">Blog</Link></li>
                            <li><Link href="/about-us" className="hover:text-gold transition-colors">About Us</Link></li>
                            <li><Link href="/drivers" className="hover:text-gold transition-colors">Our Drivers</Link></li>
                            <li><Link href="/contact" className="hover:text-gold transition-colors">Contact Us</Link></li>
                            <li><Link href="/book-now" className="hover:text-gold transition-colors">Instant Booking Page</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: City Taxi Services + Popular Routes */}
                    <div className="col-span-1">
                        <p className="text-white font-bold text-lg mb-8 relative">
                            City Taxi Services
                            <span className="absolute -bottom-2 left-0 w-8 h-1 bg-gold" />
                        </p>
                        <ul className="space-y-3 text-sm mb-8">
                            <li><Link href="/rome-airport-transfer" className="hover:text-gold transition-colors">Rome Airport Transfer</Link></li>
                            <li><Link href="/milan-chauffeur-service" className="hover:text-gold transition-colors">Milan Chauffeur Service</Link></li>
                            <li><Link href="/florence-private-taxi" className="hover:text-gold transition-colors">Florence Private Taxi</Link></li>
                            <li><Link href="/city/rome-taxi-service" className="hover:text-gold transition-colors">Rome Taxi Service</Link></li>
                            <li><Link href="/city/milan-taxi-service" className="hover:text-gold transition-colors">Milan Taxi Service</Link></li>
                            <li><Link href="/city/florence-taxi-service" className="hover:text-gold transition-colors">Florence Taxi Service</Link></li>
                            <li><Link href="/city/venice-taxi-service" className="hover:text-gold transition-colors">Venice Taxi Service</Link></li>
                            <li><Link href="/city/naples-taxi-service" className="hover:text-gold transition-colors">Naples Taxi Service</Link></li>
                            <li><Link href="/city" className="hover:text-gold transition-colors text-gold/70">View All Cities →</Link></li>
                        </ul>

                        <p className="text-white font-bold text-sm mb-4 uppercase tracking-widest">Popular Routes</p>
                        <ul className="space-y-2 text-xs mb-8">
                            <li><Link href="/route/florence-to-pisa-taxi" className="hover:text-gold transition-colors">Florence to Pisa Taxi</Link></li>
                            <li><Link href="/route/rome-to-florence-taxi" className="hover:text-gold transition-colors">Rome to Florence Transfer</Link></li>
                            <li><Link href="/route/milan-to-lake-como-taxi" className="hover:text-gold transition-colors">Milan to Lake Como Taxi</Link></li>
                            <li><Link href="/route/rome-to-naples-taxi" className="hover:text-gold transition-colors">Rome to Naples Transfer</Link></li>
                            <li><Link href="/route/naples-to-amalfi-coast-taxi" className="hover:text-gold transition-colors">Naples to Amalfi Coast</Link></li>
                            <li><Link href="/services/city-to-city" className="hover:text-gold transition-colors text-gold/70">View All Routes →</Link></li>
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
