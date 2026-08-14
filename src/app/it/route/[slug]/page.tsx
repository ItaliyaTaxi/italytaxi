import { notFound } from 'next/navigation';
import { clusterRoutes } from '@/lib/new-regions-routes-data';
import { existingRouteItTranslations } from '@/lib/it-translations-existing-routes';
import { cities } from '@/lib/page-data';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import ServiceSchema from '@/components/ServiceSchema';
import BookingForm from '@/components/BookingForm';
import FAQSection from '@/components/FAQSection';
import Link from 'next/link';
import { MapPin, Clock, ChevronRight, MessageCircle, CheckCircle, Car, ShieldCheck } from 'lucide-react';

// Italian counterpart of /route/[slug] — reads Italian content from two
// sources: the 22 bilingual entries in new-regions-routes-data.ts (which
// also carry their own English content, spread separately into routes[] in
// page-data.ts), plus the 30 translations in it-translations-existing-
// routes.ts (Route Expansion 2026 Phase B), which attach Italian content to
// EXISTING English routes without duplicating or touching their EN data.
// Together that's 52 Italian pages; the other 62 legacy /route/* pages have
// no dedicated Italian version yet.
type ItRouteView = {
    slugEn: string;
    slugIt: string;
    from: string;
    to: string;
    hero_image: string;
    imageAlt: string;
    distance: string;
    duration: string;
    it: (typeof clusterRoutes)[number]['it'];
};
const allItRoutes: ItRouteView[] = [...clusterRoutes, ...existingRouteItTranslations];

const STANDARD_VEHICLES: { name: string; desc: string }[] = [
    { name: 'Berlina', desc: '1–3 passeggeri · comoda auto berlina' },
    { name: 'Berlina Executive', desc: 'Comfort business (Mercedes Classe E o simile)' },
    { name: 'Minivan', desc: '4–8 passeggeri con bagagli' },
    { name: 'Mercedes Classe V', desc: 'Van premium per gruppi e famiglie' },
    { name: 'Van di Lusso', desc: 'Viaggi di gruppo VIP nel massimo comfort' },
    { name: 'Minibus di Gruppo', desc: 'Comitive più numerose su richiesta' },
];

/** Returns a /city/{slug} href only if that city page exists (same slugs serve both languages); else null. */
function cityServiceHref(name: string): string | null {
    const slug = name.toLowerCase().trim().replace(/\s+/g, '-');
    return cities.some((c) => c.slug === slug) ? `/city/${slug}` : null;
}

// `route.from`/`route.to` are shared English labels used for slug-matching
// against `cities` on both language pages — most place names are identical
// in Italian, but a handful of airport/place labels need translating for
// display on this page.
const IT_PLACE_NAMES: Record<string, string> = {
    'Naples Airport': 'Aeroporto di Napoli',
    'Catania Airport': 'Aeroporto di Catania',
    'Palermo Airport': 'Aeroporto di Palermo',
    'Olbia Airport': 'Aeroporto di Olbia',
    'Cagliari Airport': 'Aeroporto di Cagliari',
    'Syracuse': 'Siracusa',
    'Mount Etna': 'Etna',
    'Baia Sardinia': 'Baia Sardegna',
    // Added for Route Expansion 2026 Phase B (existingRouteItTranslations) —
    // these 30 entries reuse plain English city/place names as from/to (so
    // cityServiceHref's slug-matching against `cities` keeps working), so
    // their Italian display forms are mapped here instead.
    'Rome': 'Roma',
    'Florence': 'Firenze',
    'Milan': 'Milano',
    'Venice': 'Venezia',
    'Naples': 'Napoli',
    'Pompeii': 'Pompei',
    'Rome Fiumicino Airport': 'Aeroporto di Roma Fiumicino',
    'Milan Malpensa Airport': 'Aeroporto di Milano Malpensa',
    'Verona Airport': 'Aeroporto di Verona',
    'Bari Airport': 'Aeroporto di Bari',
    'Pisa Airport': 'Aeroporto di Pisa',
    'Civitavecchia Port': 'Porto di Civitavecchia',
    'Civitavecchia Cruise Port': 'Civitavecchia',
    'Chianti Wine Region': 'Chianti',
    'Lake Como': 'Lago di Como',
    'Lake Garda': 'Lago di Garda',
    'Colosseum': 'Colosseo',
};
function itPlaceName(name: string): string {
    return IT_PLACE_NAMES[name] || name;
}

export async function generateStaticParams() {
    return allItRoutes.map((route) => ({ slug: route.slugIt }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const route = allItRoutes.find((r) => r.slugIt === slug);
    if (!route) return {};

    const description = route.it.metaDescription;
    const languages: Record<string, string> = {
        'it-IT': `/it/route/${slug}`,
        'en': `/route/${route.slugEn}`,
        'x-default': `/route/${route.slugEn}`,
    };
    return {
        title: `${route.it.metaTitle} | Transfer Privato Italia`,
        description,
        alternates: {
            canonical: `/it/route/${slug}`,
            languages,
        },
        openGraph: {
            title: `${route.it.title} | Italy Taxi Service`,
            description,
            images: [{ url: route.hero_image, alt: route.imageAlt }],
            locale: 'it_IT',
        },
    };
}

export default async function ItalianRoutePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const route = allItRoutes.find((r) => r.slugIt === slug);

    if (!route) notFound();

    const c = route.it;

    return (
        <main className="font-inter bg-white text-navy-rich">
            <ServiceSchema
                name={c.title}
                description={c.description}
                url={`https://www.italytaxiservice.com/it/route/${slug}`}
                image={route.hero_image}
            />
            <Navbar />

            <PageHero
                titleTop={`${itPlaceName(route.from)} a`}
                titleBottom={`${itPlaceName(route.to)} Transfer`}
                description={`Taxi privato porta a porta da ${itPlaceName(route.from)} a ${itPlaceName(route.to)}. ${route.distance} · ${route.duration} · Autisti professionisti`}
                backgroundImage={route.hero_image}
                buttonText={`Prenota Taxi ${itPlaceName(route.from)} - ${itPlaceName(route.to)}`}
                breadcrumbs={[
                    { name: 'Percorsi', item: '/it/servizi/trasferimenti-citta-citta' },
                    { name: `${itPlaceName(route.from)} - ${itPlaceName(route.to)}`, item: `/it/route/${slug}` },
                ]}
            />

            {/* Panoramica del Percorso */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">Transfer Privato</p>
                            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-8 leading-tight">
                                Taxi {itPlaceName(route.from)} - {itPlaceName(route.to)}
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-10">{c.description}</p>

                            <div className="grid grid-cols-2 gap-4 mb-10">
                                <div className="bg-[#F8F9FA] p-6 rounded-2xl text-center">
                                    <MapPin className="w-6 h-6 text-gold mx-auto mb-2" />
                                    <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">Distanza</p>
                                    <p className="text-navy font-extrabold text-lg">{route.distance}</p>
                                </div>
                                <div className="bg-[#F8F9FA] p-6 rounded-2xl text-center">
                                    <Clock className="w-6 h-6 text-gold mx-auto mb-2" />
                                    <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">Durata</p>
                                    <p className="text-navy font-extrabold text-lg">{route.duration}</p>
                                </div>
                            </div>

                            <h2 className="text-2xl font-bold text-navy mb-6">Cosa è Incluso</h2>
                            <ul className="space-y-3 mb-10">
                                {c.highlights.map((highlight, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-gold shrink-0" />
                                        <span className="text-gray-700 font-medium">{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Modulo di Prenotazione */}
                        <div className="bg-[#0F1C2E] p-10 rounded-[3rem] shadow-2xl">
                            <h2 className="text-2xl font-bold text-white mb-2">Prenota Questo Transfer</h2>
                            <p className="text-gray-400 text-sm mb-8">Conferma immediata · Autisti professionisti · Cancellazione gratuita</p>
                            <BookingForm sourceName="Route Page IT" />
                            <div className="mt-8 flex flex-col items-center gap-4">
                                <p className="text-gray-400 text-xs text-center">Serve aiuto? Contattaci 24/7</p>
                                <a
                                    href="https://wa.me/923148932631"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 bg-[#25D366] text-white font-bold py-3 px-6 rounded-xl hover:bg-[#128C7E] transition-colors w-full justify-center"
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    Assistenza WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contenuto lungo (sezioni) */}
            {c.sections && c.sections.length > 0 && (
                <section className="pb-8 bg-white">
                    <div className="container mx-auto px-6 max-w-4xl">
                        {c.sections.map((sec, i) => (
                            <div key={i} className="mb-8">
                                <h2 className="text-2xl font-bold text-navy mb-4">{sec.h2}</h2>
                                {sec.p.map((para, j) => (
                                    <p key={j} className="text-gray-700 leading-relaxed mb-4">{para}</p>
                                ))}
                            </div>
                        ))}

                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-navy mb-4">Opzioni di Veicolo</h2>
                            <ul className="grid sm:grid-cols-2 gap-3">
                                {STANDARD_VEHICLES.map((v, i) => (
                                    <li key={i} className="flex items-start gap-2 text-gray-700">
                                        <Car className="w-4 h-4 text-gold mt-1 shrink-0" />
                                        <span><strong>{v.name}</strong> — {v.desc}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-[#0F1C2E] text-white rounded-2xl p-6 grid sm:grid-cols-2 gap-3 text-sm">
                            {['Prezzo fisso — concordato prima del viaggio', 'Monitoraggio del volo in tempo reale', 'Accoglienza con cartello personalizzato', 'Autisti professionisti di lingua inglese', 'Disponibilità 24/7', 'Attesa gratuita dopo l\'atterraggio', 'Veicoli puliti e moderni', 'Prenotazione online sicura'].map((s, i) => (
                                <p key={i} className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-gold shrink-0" /> {s}</p>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Link correlati (hub-and-spoke) */}
            {c.relatedLinks && c.relatedLinks.length > 0 && (
                <section className="py-16 bg-white border-b border-gray-100">
                    <div className="container mx-auto px-6 max-w-5xl">
                        <h2 className="text-2xl font-bold text-navy mb-6">Pagine Correlate</h2>
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {c.relatedLinks.map((link, i) => (
                                <Link
                                    key={i}
                                    href={link.href}
                                    className="flex items-center gap-2 p-4 bg-[#F8F9FA] rounded-xl text-gray-700 hover:text-gold hover:bg-white hover:shadow-md border border-transparent hover:border-gold/30 transition-all font-medium text-sm"
                                >
                                    <ChevronRight className="w-4 h-4 text-gold shrink-0" /> {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <FAQSection faqs={c.faqs} title={`${itPlaceName(route.from)} - ${itPlaceName(route.to)} Transfer — Domande Frequenti`} />

            {/* Altri percorsi del cluster */}
            <section className="py-16 bg-[#F8F9FA] border-y border-gray-100">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="text-center mb-10">
                        <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-3">Altri Transfer</p>
                        <h2 className="text-3xl font-bold text-navy">Altri Percorsi Popolari in Italia</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {allItRoutes
                            .filter((r) => r.slugIt !== slug)
                            .slice(0, 6)
                            .map((r, idx) => (
                                <Link
                                    key={idx}
                                    href={`/it/route/${r.slugIt}`}
                                    className="block p-5 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-gold hover:shadow-md transition-all group"
                                >
                                    <p className="font-bold text-navy group-hover:text-gold transition-colors text-sm">{itPlaceName(r.from)} → {itPlaceName(r.to)}</p>
                                    <p className="text-xs text-gray-400 mt-1">{r.distance} · {r.duration}</p>
                                </Link>
                            ))}
                    </div>
                    <div className="text-center mt-8">
                        <Link href="/it/servizi/trasferimenti-citta-citta" className="inline-flex items-center text-gold hover:text-navy font-bold tracking-widest uppercase text-sm border-b-2 border-gold/30 hover:border-navy transition-all pb-1">
                            Vedi Tutti i Trasferimenti Città-Città <ChevronRight className="w-4 h-4 ml-1" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Link a città e servizi */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-xl font-bold text-navy mb-6">Servizio Taxi a {itPlaceName(route.from)}</h3>
                            <ul className="space-y-3">
                                {cityServiceHref(route.from) && (
                                    <li>
                                        <Link href={cityServiceHref(route.from)!} className="flex items-center gap-2 text-gray-700 hover:text-gold transition-colors font-medium">
                                            <ChevronRight className="w-4 h-4 text-gold" /> Servizio Taxi {itPlaceName(route.from)}
                                        </Link>
                                    </li>
                                )}
                                <li>
                                    <Link href="/it/servizi/trasferimenti-aeroportuali" className="flex items-center gap-2 text-gray-700 hover:text-gold transition-colors font-medium">
                                        <ChevronRight className="w-4 h-4 text-gold" /> Trasferimenti Aeroportuali in Italia
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/it/servizi/trasferimenti-citta-citta" className="flex items-center gap-2 text-gray-700 hover:text-gold transition-colors font-medium">
                                        <ChevronRight className="w-4 h-4 text-gold" /> Trasferimenti Città-Città
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/it/servizi/tour-privati" className="flex items-center gap-2 text-gray-700 hover:text-gold transition-colors font-medium">
                                        <ChevronRight className="w-4 h-4 text-gold" /> Tour Privati con Autista
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-navy mb-6">Servizio Taxi a {itPlaceName(route.to)}</h3>
                            <ul className="space-y-3">
                                {cityServiceHref(route.to) && (
                                    <li>
                                        <Link href={cityServiceHref(route.to)!} className="flex items-center gap-2 text-gray-700 hover:text-gold transition-colors font-medium">
                                            <ChevronRight className="w-4 h-4 text-gold" /> Servizio Taxi {itPlaceName(route.to)}
                                        </Link>
                                    </li>
                                )}
                                <li>
                                    <Link href="/it/servizi/trasferimenti-hotel" className="flex items-center gap-2 text-gray-700 hover:text-gold transition-colors font-medium">
                                        <ChevronRight className="w-4 h-4 text-gold" /> Servizio Transfer Hotel
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/it/servizi/taxi-a-ore" className="flex items-center gap-2 text-gray-700 hover:text-gold transition-colors font-medium">
                                        <ChevronRight className="w-4 h-4 text-gold" /> Servizio Taxi a Ore
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/book-now" className="flex items-center gap-2 text-gold hover:text-navy transition-colors font-bold">
                                        <ChevronRight className="w-4 h-4" /> Prenota il Tuo Transfer Ora
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
