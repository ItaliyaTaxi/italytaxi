"use client";

import Image from 'next/image';
import { ShieldCheck, Clock, UserCheck, MapPin } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const icons = [
    <ShieldCheck key="shield" className="w-8 h-8 text-[#F4C430]" />,
    <Clock key="clock" className="w-8 h-8 text-[#F4C430]" />,
    <UserCheck key="user" className="w-8 h-8 text-[#F4C430]" />,
    <MapPin key="map" className="w-8 h-8 text-[#F4C430]" />,
];

export default function WhyChooseUs() {
    const { t } = useLanguage();
    const features = t.whyChooseUs.features.map((f, i) => ({ ...f, icon: icons[i] }));

    return (
        <section suppressHydrationWarning className="relative py-24 font-inter overflow-hidden min-h-screen flex items-center">
            {/* Parallax Star Background */}
            <div className="stars-container" suppressHydrationWarning>
                <div id="stars"></div>
                <div id="stars2"></div>
                <div id="stars3"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">

                {/* Top Center Headings */}
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <div className="flex items-center justify-center gap-4 mb-4 animate-slide-left [animation-delay:0.1s]">
                        <div className="w-8 h-[2px] bg-[#F4C430]" />
                        <p className="text-[#F4C430] text-sm font-bold uppercase tracking-[0.4em]">{t.whyChooseUs.badge}</p>
                        <div className="w-8 h-[2px] bg-[#F4C430]" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6 animate-slide-left [animation-delay:0.2s]">
                        {t.whyChooseUs.heading} <span className="text-[#F4C430]">{t.whyChooseUs.headingHighlight}</span> {t.whyChooseUs.headingEnd}
                    </h2>
                    <p className="text-gray-300 text-lg leading-relaxed animate-slide-left [animation-delay:0.3s]">
                        {t.whyChooseUs.description}
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">

                    {/* Left Side: Points */}
                    <div className="w-full lg:w-1/3 space-y-16 order-2 lg:order-1">
                        {features.slice(0, 2).map((feature, index) => (
                            <div
                                key={index}
                                className="flex flex-col lg:items-end lg:text-right gap-4 group feature-point-group animate-slide-left"
                                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                            >
                                <div className="p-5 rounded-full bg-white/5 border border-white/10 text-[#F4C430] feature-icon-container transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-[360deg] shadow-lg shadow-black/20">
                                    <div className="feature-icon">{feature.icon}</div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#F4C430] transition-colors">{feature.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed max-w-sm lg:ml-auto">
                                        {feature.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Center: Image */}
                    <div className="w-full lg:w-1/3 relative group order-1 lg:order-2 animate-slide-left [animation-delay:0.4s]">
                        <div className="relative h-[480px] w-full max-w-[420px] mx-auto overflow-hidden rounded-full shadow-[0_0_50px_rgba(244,196,48,0.2)] border-[10px] border-white/10 p-2">
                            <div className="relative w-full h-full overflow-hidden rounded-full border-4 border-[#F4C430]/30">
                                <Image
                                    src="/images/about.jpg"
                                    alt="Professional taxi driver in Italy"
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                            </div>
                        </div>
                        {/* Decorative Rings */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[115%] border border-[#F4C430]/10 rounded-full -z-10 animate-pulse" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] border border-[#F4C430]/5 rounded-full -z-10 animate-[ping_3s_linear_infinite]" />
                    </div>

                    {/* Right Side: Points */}
                    <div className="w-full lg:w-1/3 space-y-16 order-3">
                        {features.slice(2, 4).map((feature, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-start text-left gap-4 group feature-point-group animate-slide-left"
                                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                            >
                                <div className="p-5 rounded-full bg-white/5 border border-white/10 text-[#F4C430] feature-icon-container transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-[360deg] shadow-lg shadow-black/20">
                                    <div className="feature-icon">{feature.icon}</div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#F4C430] transition-colors">{feature.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                                        {feature.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
