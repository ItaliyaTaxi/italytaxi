"use client";

import { Star, Quote } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export interface Review {
    name: string;
    location?: string;
    text: string;
    rating: number;
    date: string;
}

const defaultReviews: Review[] = [
    {
        name: "Zohar Argov",
        text: "We recently used the Taxi service between Rome airport and our hotel in Florence. The driver was friendly and communicated well in English. We had a nice conversation for most of the way. He arrived on time to collect us (despite very long passport control in Fiumicino) and was responsive on the phone before collecting us at the arrival Hall. The car was very comfortable (and clean).",
        rating: 5,
        date: "Recent trip"
    },
    {
        name: "Marie",
        text: "We had a pleasant journey with Maurizio today, despite we had to be dropped off near the destination with a 2-min walk, due to a road closure. He arrived on time. The car was very clean, tidy and well maintained throughout. He was polite and spoke very little to us, which was fine with us. Not all of us would like a very chatty driver! Overall, a very good experience and would be happy to recommend.",
        rating: 5,
        date: "Recent trip"
    },
    {
        name: "Matthew Johnson",
        text: "Ari was an exceptional driver who welcomed us to Rome with true Roman grace. From the moment he greeted us at the airport, his kindness and professionalism were evident. The ride was comfortable and beautifully paced, and along the way he offered a charming mini-tour of the city, pointing out historic sites and sharing small insights that only a local would know. His gentle manner, thoughtful explanations, and sincere pride in Rome made our arrival unforgettable.",
        rating: 5,
        date: "Recent trip"
    }
];

export default function Testimonials({ reviews = defaultReviews }: { reviews?: Review[] }) {
    const { t } = useLanguage();

    return (
        <section className="py-24 bg-navy relative overflow-hidden font-inter cv-section">
            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#F4C430 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">{t.testimonials.badge}</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">{t.testimonials.heading}</h2>
                    <div className="flex items-center justify-center gap-2 mt-6">
                        <div className="flex text-gold">
                            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                        </div>
                        <span className="text-white/80 text-sm font-bold uppercase tracking-widest ml-2">{t.testimonials.trusted}</span>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="uiverse-card p-10 group animate-slide-left relative shadow-2xl min-h-[400px]"
                            style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                        >
                            <div className="flex flex-col h-full w-full">
                                <div className="flex items-center justify-between mb-8">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-gold font-bold text-xl uppercase shadow-lg">
                                            {review.name.charAt(0)}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white text-sm tracking-tight">{review.name}</h3>
                                            {review.location && (
                                                <p className="text-[10px] font-bold text-gold/60 uppercase tracking-widest">{review.location}</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-lg shrink-0">
                                        <GoogleIcon className="w-5 h-5" />
                                    </div>
                                </div>

                                <div className="flex text-gold mb-6 gap-1">
                                    {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current drop-shadow-[0_0_8px_rgba(244,196,48,0.4)]" />)}
                                </div>

                                <div className="relative mb-8">
                                    <Quote className="absolute -top-4 -left-2 w-10 h-10 text-gold/5" />
                                    <p className="text-gray-300 leading-relaxed italic relative z-10 text-sm font-medium">
                                        &ldquo;{review.text}&rdquo;
                                    </p>
                                </div>

                                <div className="mt-auto pt-6 border-t border-white/5 flex justify-between items-center text-[10px] font-bold uppercase tracking-wider">
                                    <span className="text-gold/40">{t.testimonials.verified}</span>
                                    <span className="text-gray-500">{review.date}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function GoogleIcon({ className = "" }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className={className}>
            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
            <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
            <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
            <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
        </svg>
    );
}
