"use client";

import { Plane, Briefcase, MapPin, Anchor, Clock, Heart } from 'lucide-react';
import TaxiButton from './TaxiButton';
import { useLanguage } from '@/context/LanguageContext';

const serviceLinks = [
    "/services/airport-transfers",
    "/services/city-to-city",
    "/services/hotel-transfers",
    "/services/business-taxi",
    "/services/hourly-taxi",
    "/services/wedding-transfers",
    "/services/cruise-port-transfers",
];

const serviceIcons = [
    <Plane key="plane" className="w-10 h-10 text-gold group-hover:scale-110 transition-transform duration-300" />,
    <MapPin key="mappin" className="w-10 h-10 text-gold group-hover:scale-110 transition-transform duration-300" />,
    <MapPin key="mappin2" className="w-10 h-10 text-gold group-hover:scale-110 transition-transform duration-300" />, // Hotel
    <Briefcase key="briefcase" className="w-10 h-10 text-gold group-hover:scale-110 transition-transform duration-300" />,
    <Clock key="clock" className="w-10 h-10 text-gold group-hover:scale-110 transition-transform duration-300" />,
    <Heart key="heart" className="w-10 h-10 text-gold group-hover:scale-110 transition-transform duration-300" />,
    <Anchor key="anchor" className="w-10 h-10 text-gold group-hover:scale-110 transition-transform duration-300" />,
];

export default function Services() {
    const { t } = useLanguage();
    const services = t.services.items.map((item, i) => ({
        ...item,
        icon: serviceIcons[i],
        link: serviceLinks[i],
    }));

    const itemListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": t.services.heading,
        "itemListElement": services.map((service, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": service.title,
            "url": `https://www.italytaxiservice.com${service.link}`
        }))
    };

    return (
        <section suppressHydrationWarning className="py-24 bg-white font-inter cv-section">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
            />
            <div className="container mx-auto px-6" suppressHydrationWarning>
                <div className="text-center mb-20">
                    <p className="text-[#F4C430] text-sm font-bold uppercase tracking-[0.4em] mb-4">{t.services.badge}</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#0F1C2E]">{t.services.heading}</h2>
                    <div className="w-20 h-1 bg-[#F4C430] mx-auto mt-6" />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12" suppressHydrationWarning>
                    {services.map((service, index) => (
                        <div
                            key={index}
                            suppressHydrationWarning
                            className="group uiverse-card p-10 min-h-[380px] animate-slide-left shadow-2xl"
                            style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                        >
                            <div className="flex flex-col items-center text-center h-full">
                                <div className="mb-8 p-5 rounded-full bg-white/5 border border-white/10 group-hover:bg-white/10 transition-all duration-500 shadow-lg">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gold transition-colors">{service.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-10">
                                    {service.description}
                                </p>
                                <TaxiButton href={service.link} className="scale-90 mt-auto">
                                    {t.services.learnMore} {service.title}
                                </TaxiButton>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
