import { notFound } from 'next/navigation';
import { dayTrips } from '@/lib/day-trips-data';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import ServiceSchema from '@/components/ServiceSchema';
import BookingForm from '@/components/BookingForm';
import FAQSection from '@/components/FAQSection';
import Link from 'next/link';
import { MapPin, Clock, ChevronRight, MessageCircle, CheckCircle, Car, Camera, Utensils, ShoppingBag, Wine, Sun, Luggage, Sparkles, Users, Info } from 'lucide-react';

// Italian counterpart of /day-trips/[slug] — reads the Italian half of the
// same bilingual entries in day-trips-data.ts. See the English page for the
// architectural notes (why this is a distinct URL from /route/*).

const STANDARD_VEHICLES: { name: string; desc: string }[] = [
    { name: 'Berlina', desc: '1–3 passeggeri · comoda auto berlina' },
    { name: 'Berlina Executive', desc: 'Comfort business (Mercedes Classe E o simile)' },
    { name: 'Minivan', desc: '4–8 passeggeri con bagagli' },
    { name: 'Mercedes Classe V', desc: 'Van premium per gruppi e famiglie' },
    { name: 'Van di Lusso', desc: 'Viaggi di gruppo VIP nel massimo comfort' },
    { name: 'Minibus di Gruppo', desc: 'Comitive più numerose su richiesta' },
];

// Shared EN/IT place-name lookups used for slug-matching against `cities` —
// most names are identical in Italian; only these need translating for display.
const IT_PLACE_NAMES: Record<string, string> = {
    'Rome': 'Roma',
    'Florence': 'Firenze',
    'Naples': 'Napoli',
    'Venice': 'Venezia',
    'Milan': 'Milano',
    'Amalfi Coast': 'Costiera Amalfitana',
};
function itPlaceName(name: string): string {
    return IT_PLACE_NAMES[name] || name;
}

export async function generateStaticParams() {
    return dayTrips.map((trip) => ({ slug: trip.slugIt }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const trip = dayTrips.find((t) => t.slugIt === slug);
    if (!trip) return {};
    const c = trip.it;

    return {
        title: c.metaTitle,
        description: c.metaDescription,
        alternates: {
            canonical: `/it/day-trips/${slug}`,
            languages: { 'it-IT': `/it/day-trips/${slug}`, 'en': `/day-trips/${trip.slugEn}`, 'x-default': `/day-trips/${trip.slugEn}` },
        },
        openGraph: {
            title: c.title,
            description: c.metaDescription,
            url: `https://www.italytaxiservice.com/it/day-trips/${slug}`,
            images: [{ url: trip.hero_image, alt: trip.imageAlt, width: 1200, height: 630 }],
            type: 'website',
            locale: 'it_IT',
        },
        twitter: { card: 'summary_large_image', title: c.title, description: c.metaDescription },
    };
}

export default async function ItalianDayTripPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const trip = dayTrips.find((t) => t.slugIt === slug);
    if (!trip) notFound();
    const c = trip.it;
    const fromIt = itPlaceName(trip.from);
    const toIt = itPlaceName(trip.to);

    return (
        <main className="font-inter bg-white text-navy-rich">
            <ServiceSchema
                name={c.title}
                description={c.overview[0]}
                url={`https://www.italytaxiservice.com/it/day-trips/${slug}`}
                image={trip.hero_image}
            />

            <Navbar />

            <PageHero
                titleTop={`${fromIt} a`}
                titleBottom={`${toIt} in Giornata`}
                description={c.heroSubtitle}
                backgroundImage={trip.hero_image}
                buttonText="Prenota Questa Gita"
                breadcrumbs={[
                    { name: 'Tour Privati', item: '/it/servizi/tour-privati' },
                    { name: `${fromIt} - ${toIt} in Giornata`, item: `/it/day-trips/${slug}` },
                ]}
            />

            {/* Risposta rapida */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="bg-[#F8F9FA] border-l-4 border-gold rounded-r-2xl p-8">
                        <p className="text-gold text-xs font-bold uppercase tracking-[0.3em] mb-3 flex items-center gap-2"><Info className="w-4 h-4" /> Risposta Rapida</p>
                        <p className="text-gray-700 text-lg leading-relaxed">{c.featuredSnippet}</p>
                    </div>
                </div>
            </section>

            {/* Panoramica + dati rapidi + prenotazione */}
            <section className="pb-20 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">Panoramica del Tour</p>
                            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-8 leading-tight">{c.title}</h2>
                            {c.overview.map((p, i) => <p key={i} className="text-gray-600 text-lg leading-relaxed mb-5">{p}</p>)}

                            <div className="grid grid-cols-2 gap-4 my-10">
                                <div className="bg-[#F8F9FA] p-6 rounded-2xl text-center">
                                    <MapPin className="w-6 h-6 text-gold mx-auto mb-2" />
                                    <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">Distanza</p>
                                    <p className="text-navy font-extrabold text-lg">{trip.distance}</p>
                                </div>
                                <div className="bg-[#F8F9FA] p-6 rounded-2xl text-center">
                                    <Clock className="w-6 h-6 text-gold mx-auto mb-2" />
                                    <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">Tempo di Guida</p>
                                    <p className="text-navy font-extrabold text-lg">{trip.drivingTime}</p>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-navy mb-5">Perché Scegliere una Gita Privata</h3>
                            {c.whyPrivate.map((p, i) => <p key={i} className="text-gray-600 leading-relaxed mb-4">{p}</p>)}
                        </div>

                        <div className="bg-[#0F1C2E] p-10 rounded-[3rem] shadow-2xl lg:sticky lg:top-24">
                            <h2 className="text-2xl font-bold text-white mb-2">Prenota Questa Gita</h2>
                            <p className="text-gray-400 text-sm mb-8">Conferma immediata · Autisti professionisti · Cancellazione gratuita</p>
                            <BookingForm sourceName="Day Trip Page IT" />
                            <div className="mt-8 flex flex-col items-center gap-4">
                                <p className="text-gray-400 text-xs text-center">Serve aiuto a pianificare? Contattaci 24/7</p>
                                <a href="https://wa.me/923148932631" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#25D366] text-white font-bold py-3 px-6 rounded-xl hover:bg-[#128C7E] transition-colors w-full justify-center">
                                    <MessageCircle className="w-5 h-5" /> Assistenza WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Itinerario suggerito */}
            <section className="py-20 bg-[#F8F9FA]">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="text-center mb-12">
                        <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-3">Itinerario Suggerito</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-navy">Una Giornata Tipo, Ora per Ora</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                            <thead>
                                <tr className="bg-navy text-white text-left">
                                    <th className="p-5 font-bold text-sm uppercase tracking-widest w-1/5">Orario</th>
                                    <th className="p-5 font-bold text-sm uppercase tracking-widest w-1/5">Tappa</th>
                                    <th className="p-5 font-bold text-sm uppercase tracking-widest">Cosa Succede</th>
                                </tr>
                            </thead>
                            <tbody>
                                {c.itinerary.map((stop, i) => (
                                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F8F9FA]'}>
                                        <td className="p-5 font-bold text-navy align-top">{stop.time}</td>
                                        <td className="p-5 font-bold text-gold align-top">{stop.title}</td>
                                        <td className="p-5 text-gray-600 align-top">{stop.description}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-center text-gray-500 text-sm mt-6">Ogni itinerario è completamente personalizzabile — comunica al tuo autista ciò che conta di più per te e il programma si adatta di conseguenza.</p>
                </div>
            </section>

            {/* Migliori soste fotografiche */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="flex items-center gap-3 mb-8">
                        <Camera className="w-7 h-7 text-gold" />
                        <h2 className="text-3xl font-bold text-navy">Le Migliori Soste Fotografiche</h2>
                    </div>
                    <ul className="grid sm:grid-cols-2 gap-4">
                        {c.photoStops.map((stop, i) => (
                            <li key={i} className="flex items-start gap-3 bg-[#F8F9FA] p-5 rounded-xl">
                                <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                                <span className="text-gray-700">{stop}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Cenni storici */}
            <section className="py-20 bg-[#F8F9FA]">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl font-bold text-navy mb-8">Un Po' di Storia</h2>
                    {c.historicalBackground.map((p, i) => <p key={i} className="text-gray-600 leading-relaxed mb-5 text-lg">{p}</p>)}
                </div>
            </section>

            {/* Cosa fare */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold text-navy mb-10 text-center">Cosa Fare</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {c.thingsToDo.map((item, i) => (
                            <div key={i} className="p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-gold transition-all">
                                <h3 className="font-bold text-navy text-lg mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Ristoranti */}
            <section className="py-20 bg-[#F8F9FA]">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="flex items-center gap-3 mb-10 justify-center">
                        <Utensils className="w-7 h-7 text-gold" />
                        <h2 className="text-3xl font-bold text-navy">Dove Mangiare</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {c.restaurants.map((r, i) => (
                            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                <h3 className="font-bold text-navy mb-2">{r.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{r.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Famiglia / Lusso / Shopping / Vino */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-5xl grid md:grid-cols-2 gap-8">
                    <div className="p-8 bg-[#F8F9FA] rounded-2xl">
                        <div className="flex items-center gap-3 mb-4"><Users className="w-6 h-6 text-gold" /><h3 className="text-xl font-bold text-navy">Adatto alle Famiglie</h3></div>
                        <p className="text-gray-600 leading-relaxed">{c.familyFriendly}</p>
                    </div>
                    <div className="p-8 bg-[#0F1C2E] rounded-2xl text-white">
                        <div className="flex items-center gap-3 mb-4"><Sparkles className="w-6 h-6 text-gold" /><h3 className="text-xl font-bold">L&apos;Esperienza di Lusso</h3></div>
                        <p className="text-gray-300 leading-relaxed">{c.luxuryExperience}</p>
                    </div>
                    {c.shopping && (
                        <div className="p-8 bg-[#F8F9FA] rounded-2xl">
                            <div className="flex items-center gap-3 mb-4"><ShoppingBag className="w-6 h-6 text-gold" /><h3 className="text-xl font-bold text-navy">Shopping</h3></div>
                            <p className="text-gray-600 leading-relaxed">{c.shopping}</p>
                        </div>
                    )}
                    {c.wineTasting && (
                        <div className="p-8 bg-[#F8F9FA] rounded-2xl">
                            <div className="flex items-center gap-3 mb-4"><Wine className="w-6 h-6 text-gold" /><h3 className="text-xl font-bold text-navy">Degustazione di Vini</h3></div>
                            <p className="text-gray-600 leading-relaxed">{c.wineTasting}</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Consigli stagionali + cosa portare */}
            <section className="py-20 bg-[#F8F9FA]">
                <div className="container mx-auto px-6 max-w-5xl grid md:grid-cols-2 gap-10">
                    <div>
                        <div className="flex items-center gap-3 mb-4"><Sun className="w-6 h-6 text-gold" /><h3 className="text-xl font-bold text-navy">Periodo Migliore e Consigli Stagionali</h3></div>
                        <p className="text-gray-600 leading-relaxed mb-3">{c.bestTimeToVisit}</p>
                        <p className="text-gray-600 leading-relaxed">{c.seasonalTips}</p>
                    </div>
                    <div>
                        <div className="flex items-center gap-3 mb-4"><Luggage className="w-6 h-6 text-gold" /><h3 className="text-xl font-bold text-navy">Cosa Portare</h3></div>
                        <ul className="space-y-2">
                            {c.whatToBring.map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-gray-600"><CheckCircle className="w-4 h-4 text-gold mt-1 shrink-0" /><span>{item}</span></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Veicoli + prenotazione/prezzi/cancellazione */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold text-navy mb-4">Opzioni di Veicolo e il Tuo Autista di Lingua Inglese</h2>
                    <p className="text-gray-600 leading-relaxed mb-8">Ogni autista è un professionista, autista-guida di lingua inglese, non solo un semplice conducente — il ritiro e il rientro in hotel sono inclusi, e l&apos;itinerario sopra è solo un punto di partenza, completamente personalizzabile in base a ciò che desideri vedere.</p>
                    <ul className="grid sm:grid-cols-2 gap-3 mb-12">
                        {STANDARD_VEHICLES.map((v, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-700">
                                <Car className="w-4 h-4 text-gold mt-1 shrink-0" />
                                <span><strong>{v.name}</strong> — {v.desc}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 bg-[#F8F9FA] rounded-2xl">
                            <h3 className="font-bold text-navy mb-3">Prezzi</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{c.pricingExplanation}</p>
                        </div>
                        <div className="p-6 bg-[#F8F9FA] rounded-2xl">
                            <h3 className="font-bold text-navy mb-3">Come Funziona la Prenotazione</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{c.bookingProcess}</p>
                        </div>
                        <div className="p-6 bg-[#F8F9FA] rounded-2xl">
                            <h3 className="font-bold text-navy mb-3">Politica di Cancellazione</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{c.cancellationPolicy}</p>
                        </div>
                    </div>
                </div>
            </section>

            <FAQSection faqs={c.faqs} title={`${fromIt} - ${toIt} in Giornata — Domande Frequenti`} />

            {/* Link correlati */}
            <section className="py-16 bg-[#F8F9FA] border-y border-gray-100">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-2xl font-bold text-navy mb-6">Pagine Correlate</h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {c.relatedLinks.map((link, i) => (
                            <Link key={i} href={link.href} className="flex items-center gap-2 p-4 bg-white rounded-xl text-gray-700 hover:text-gold hover:shadow-md border border-transparent hover:border-gold/30 transition-all font-medium text-sm">
                                <ChevronRight className="w-4 h-4 text-gold shrink-0" /> {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA finale */}
            <section className="py-20 bg-[#0F1C2E]">
                <div className="container mx-auto px-6 max-w-3xl text-center">
                    <p className="text-white text-xl leading-relaxed mb-8">{c.ctaText}</p>
                    <Link href="/book-now" className="inline-block bg-gold text-navy font-bold px-10 py-4 rounded-full hover:bg-white transition-all uppercase tracking-widest text-sm">
                        Prenota la Tua Gita Ora
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
