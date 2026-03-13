import Link from 'next/link';
import Image from 'next/image';
import { Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import TaxiButton from './TaxiButton';

export default function Footer() {
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
                            taxi Italian taxi service providing taxi transfers across the peninsula. Experience the finest travel in Rome, Milan, Florence, and beyond.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" aria-label="Follow us on Facebook" className="w-10 h-10 rounded-full bg-navy flex items-center justify-center hover:bg-gold hover:text-white transition-all">
                                <Facebook className="w-5 h-5" />
                            </Link>
                            <Link href="#" aria-label="Follow us on Instagram" className="w-10 h-10 rounded-full bg-navy flex items-center justify-center hover:bg-gold hover:text-white transition-all">
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link href="#" aria-label="Follow us on Twitter" className="w-10 h-10 rounded-full bg-navy flex items-center justify-center hover:bg-gold hover:text-white transition-all">
                                <Twitter className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-span-1">
                        <p className="text-white font-bold text-lg mb-8 relative">
                            Explore
                            <span className="absolute -bottom-2 left-0 w-8 h-1 bg-gold" />
                        </p>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="/" className="hover:text-gold transition-colors">Home</Link></li>
                            <li><Link href="/services" className="hover:text-gold transition-colors">Services</Link></li>
                            <li><Link href="/book-now" className="hover:text-gold transition-colors">Book Now</Link></li>
                            <li><Link href="/faq" className="hover:text-gold transition-colors">FAQ</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="col-span-1">
                        <p className="text-white font-bold text-lg mb-8 relative">
                            Contact Us
                            <span className="absolute -bottom-2 left-0 w-8 h-1 bg-gold" />
                        </p>
                        <ul className="space-y-6 text-sm text-gold">
                            <li className="flex items-start gap-4">
                                <Mail className="w-5 h-5 shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-gray-300 block mb-1">Bookings</p>
                                    <a href="mailto:booking@italytaxiservice.com" className="hover:text-white transition-colors">booking@italytaxiservice.com</a>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <Mail className="w-5 h-5 shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-gray-300 block mb-1">General Enquiries</p>
                                    <a href="mailto:info@italytaxiservice.com" className="hover:text-white transition-colors">info@italytaxiservice.com</a>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="col-span-1">
                        <p className="text-white font-bold text-lg mb-8 relative">
                            Newsletter
                            <span className="absolute -bottom-2 left-0 w-8 h-1 bg-gold" />
                        </p>
                        <p className="text-sm mb-6">Subscribe to receive updates on taxi travel in Italy.</p>
                        <form className="flex">
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="bg-navy border border-gray-700 px-4 py-2 w-full text-white text-sm focus:outline-none focus:border-gold"
                            />
                            <TaxiButton type="submit" className="scale-75 origin-left">
                                Send
                            </TaxiButton>
                        </form>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} ItaliaRide. All rights reserved. Private Transfers Italy.</p>
                </div>
            </div>
        </footer>
    );
}
