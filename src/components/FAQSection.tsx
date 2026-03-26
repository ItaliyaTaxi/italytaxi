interface FAQ {
    q: string;
    a: string;
}

interface FAQSectionProps {
    faqs?: FAQ[];
    title?: string;
    badge?: string;
}

export default function FAQSection({
    faqs: customFaqs,
    title = "Travel Frequently Asked Questions",
    badge = "Common Questions"
}: FAQSectionProps) {
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
        <section className="py-24 bg-navy relative overflow-hidden font-inter">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#F4C430 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">{badge}</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">{title}</h2>
                    <div className="w-20 h-1 bg-gold mx-auto mt-6" />
                </div>

                <div className="max-w-4xl mx-auto grid gap-6">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="uiverse-card p-10 group animate-slide-left cursor-pointer transition-all w-full text-left"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="w-full">
                                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gold transition-colors">{faq.q}</h3>
                                <p className="text-gray-400 leading-relaxed text-sm">
                                    {faq.a}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
