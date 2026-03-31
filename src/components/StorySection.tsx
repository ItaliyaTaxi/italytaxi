import Image from 'next/image';
import { ShieldCheck, CalendarCheck, MapPin } from 'lucide-react';

export default function StorySection() {
    return (
        <section className="py-24 bg-navy relative overflow-hidden font-inter">
            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#F4C430 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Text column */}
                    <div className="w-full lg:w-1/2 animate-slide-left">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-[2px] bg-gold" />
                            <p className="text-gold text-sm font-bold uppercase tracking-[0.4em]">Our Story</p>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
                            Italy's Private Taxi Service —<br />
                            <span className="text-gold italic font-serif">Built on a Decade of Trust</span>
                        </h2>

                        <div className="space-y-5 text-gray-300 text-base leading-relaxed">
                            <p>
                                Italy Taxi Service was founded in 2013 with one clear purpose: to give every international traveller arriving in Italy the same seamless, stress-free ground transport experience that was previously reserved for luxury tour groups and corporate executives.
                            </p>
                            <p>
                                Our founders had experienced first-hand the chaos of Italian taxi stands — the aggressive haggling, the hidden surcharges, the language barriers, the uncertainty of not knowing if a driver would actually show up. They knew there was a better way, and they built it.
                            </p>
                            <p>
                                Starting with a single vehicle and a handful of airport routes, we grew — journey by journey, review by review — into a nationwide network of professional NCC-licensed drivers covering every major airport, city, cruise port, and tourist destination in Italy.
                            </p>
                            <p className="font-bold text-white text-lg">
                                Today, Italy Taxi Service has completed over 10,000 private transfers across Rome, Milan, Florence, Venice, Naples, and beyond — and our mission has never changed.
                            </p>
                        </div>

                        {/* Credential pills */}
                        <div className="flex flex-wrap gap-3 mt-8">
                            {[
                                { icon: <CalendarCheck className="w-4 h-4" />, text: "Operating since 2013" },
                                { icon: <ShieldCheck className="w-4 h-4" />, text: "NCC Licensed & Insured" },
                                { icon: <MapPin className="w-4 h-4" />, text: "Nationwide coverage" },
                            ].map((p, i) => (
                                <div key={i} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-white text-sm font-semibold">
                                    <span className="text-gold">{p.icon}</span>
                                    {p.text}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image column */}
                    <div className="w-full lg:w-1/2 relative h-[450px] md:h-[550px] animate-slide-left" style={{ animationDelay: '0.3s' }}>
                        {/* Mission card overlaid */}
                        <div className="absolute -bottom-6 -left-6 z-10 bg-navy rounded-2xl p-6 shadow-2xl max-w-[240px]">
                            <p className="text-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-2">Our Mission</p>
                            <p className="text-white text-sm leading-relaxed font-semibold">
                                To make every journey across Italy safe, punctual, and genuinely enjoyable — for every passenger, every time.
                            </p>
                        </div>
                        <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl">
                            <Image
                                src="/images/about.jpg"
                                alt="Italy Taxi Service professional driver — private transfers in Italy"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gold/10 rounded-full -z-10" />
                        <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-gold/20 rounded-full -z-10" />
                    </div>

                </div>

                {/* Vision strip */}
                <div className="mt-20 bg-white/5 border border-white/10 rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 shadow-2xl relative z-10 backdrop-blur-sm">
                    <div className="shrink-0 text-center">
                        <p className="text-gold text-[10px] font-bold uppercase tracking-[0.4em] mb-1">Our Vision</p>
                        <p className="text-4xl font-extrabold text-white">#1</p>
                        <p className="text-gray-400 text-xs mt-1">Private Taxi in Italy</p>
                    </div>
                    <div className="w-px h-16 bg-white/10 hidden md:block" />
                    <p className="text-gray-300 text-base leading-relaxed flex-1">
                        To be Italy's most trusted private transfer company — the brand that every traveller, travel agent, wedding planner, and business traveller thinks of first when they need ground transportation anywhere in Italy. We are building that reputation one perfect journey at a time.
                    </p>
                </div>
            </div>
        </section>
    );
}
