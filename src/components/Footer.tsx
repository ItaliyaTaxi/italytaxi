// Footer component for Italy Taxi Service
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
                            <Link href="https://www.facebook.com/profile.php?id=61588708420164" target="_blank" rel="nofollow noopener noreferrer" className="w-8 h-8 rounded-full bg-navy flex items-center justify-center hover:bg-gold hover:text-white transition-all">
                                <Facebook className="w-4 h-4" />
                            </Link>
                            <Link href="https://www.instagram.com/italytaxiservicee/" target="_blank" rel="nofollow noopener noreferrer" className="w-8 h-8 rounded-full bg-navy flex items-center justify-center hover:bg-gold hover:text-white transition-all">
                                <Instagram className="w-4 h-4" />
                            </Link>
                            <Link href="https://pin.it/5HupU1fjM" target="_blank" rel="nofollow noopener noreferrer" className="w-8 h-8 rounded-full bg-navy flex items-center justify-center hover:bg-gold hover:text-white transition-all">
                                <PinterestIcon className="w-4 h-4" />
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
                            <li><Link href="/airport-transfer" className="hover:text-gold transition-colors">Airport Transfers</Link></li>
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
                            <li><Link href="/city/rome" className="hover:text-gold transition-colors">Rome Taxi Service</Link></li>
                            <li><Link href="/city/milan" className="hover:text-gold transition-colors">Milan Taxi Service</Link></li>
                            <li><Link href="/city/florence" className="hover:text-gold transition-colors">Florence Taxi Service</Link></li>
                            <li><Link href="/city/venice" className="hover:text-gold transition-colors">Venice Taxi Service</Link></li>
                            <li><Link href="/city/naples" className="hover:text-gold transition-colors">Naples Taxi Service</Link></li>
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
                    <p>&copy; {new Date().getFullYear()} Italy Taxi Service. {t.footer.rights}</p>
                </div>
            </div>
        </footer>
    );
}

function PinterestIcon({ className = "" }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M12.017 0C5.396 0 0 5.396 0 12.017c0 5.081 3.163 9.422 7.627 11.174-.105-.949-.2-2.405.042-3.441.219-.937 1.406-5.957 1.406-5.957s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.739a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.379l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.621 0 12.017-5.396 12.017-12.017C24.034 5.396 18.638 0 12.017 0z" />
        </svg>
    );
}
