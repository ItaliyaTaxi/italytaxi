"use client";

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQ {
    q: string;
    a: string;
}

interface FAQSectionProps {
    faqs?: FAQ[];
    title?: string;
    badge?: string;
    variant?: 'dark' | 'light';
}

export default function FAQSection({
    faqs: customFaqs,
    title = "Travel Frequently Asked Questions",
    badge = "Common Questions",
    variant = 'dark'
}: FAQSectionProps) {
    const isDark = variant === 'dark';
    const defaultFaqs = [
        {
            q: "Do you track flight delays?",
            a: "Yes, we monitor all flights in real-time. If your flight is delayed or arrives early, your driver will adjust the pickup time accordingly at no extra cost."
        },
        {
            q: "Is the price fixed?",
            a: "Absolutely. Once your booking is confirmed, the price is fixed. There are no hidden fees for luggage, wait times (within the grace period), or tolls."
        },
        {
            q: "Do drivers speak English?",
            a: "Yes, all our drivers are English-speaking and professionally trained to provide high-quality service to international travelers."
        },
        {
            q: "Can I cancel my booking?",
            a: "Yes, you can cancel your booking according to our policy. Cancellations made more than 24 hours before the service time are usually free of charge."
        }
    ];

    const faqs = customFaqs || defaultFaqs;
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
            }
        }))
    };

    return (
        <section className={`py-24 ${isDark ? 'bg-navy' : 'bg-[#F8F9FA]'} relative overflow-hidden font-inter`}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            {/* Pattern Overlay */}
            <div className={`absolute inset-0 ${isDark ? 'opacity-10' : 'opacity-[0.03]'}`} style={{ backgroundImage: `radial-gradient(${isDark ? '#F4C430' : '#0F1C2E'} 0.5px, transparent 0.5px)`, backgroundSize: '24px 24px' }} />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">{badge}</p>
                    <h2 className={`text-4xl md:text-5xl font-bold ${isDark ? 'text-white' : 'text-navy'}`}>{title}</h2>
                    <div className="w-20 h-1 bg-gold mx-auto mt-6" />
                </div>

                <div className="max-w-4xl mx-auto grid gap-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className={`${isDark ? 'uiverse-card' : 'bg-white border border-gray-100 shadow-sm'} group animate-slide-left transition-all w-full text-left overflow-hidden rounded-2xl`}
                                style={{ animationDelay: `${index * 0.1}s`, flexDirection: 'column', alignItems: 'stretch' }}
                            >
                                {/* Question row — single line with chevron always on the right */}
                                <button
                                    className="w-full flex items-center justify-between gap-4 text-left focus:outline-none px-8 py-6"
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    aria-expanded={isOpen}
                                >
                                    <span className={`font-bold text-base md:text-lg leading-snug transition-colors flex-1 ${isOpen ? 'text-gold' : isDark ? 'text-white group-hover:text-gold' : 'text-navy group-hover:text-gold'}`}>
                                        {faq.q}
                                    </span>
                                    <div className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all ${isOpen ? 'bg-gold text-navy border-gold' : isDark ? 'border-white/20 text-white group-hover:border-gold group-hover:text-gold' : 'border-gray-200 text-gray-400 group-hover:border-gold group-hover:text-gold'}`}>
                                        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                                    </div>
                                </button>

                                {/* Answer — appears below on expand */}
                                <div
                                    className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                                >
                                    <div className="overflow-hidden">
                                        <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'} leading-relaxed text-sm px-8 pb-6 pt-0`}>
                                            {faq.a}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
