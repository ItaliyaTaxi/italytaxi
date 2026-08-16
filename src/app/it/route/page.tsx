import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { clusterRoutes } from '@/lib/new-regions-routes-data';
import { existingRouteItTranslations } from '@/lib/it-translations-existing-routes';
import { MapPin, Clock, ArrowRight, ChevronRight } from 'lucide-react';

// Italian counterpart of /route (src/app/(site)/route/page.tsx) — same layout
// and components, translated copy. Lists every Italian route page so the 52
// current /it/route/[slug] pages (22 bilingual cluster routes + 30 Route
// Expansion 2026 Phase B translations) all have a genuine, crawlable inbound
// link from a real hub page, not just the sitemap.
const allItRoutes = [...clusterRoutes, ...existingRouteItTranslations];

// A handful of English place names read oddly in an Italian card grid —
// same small map used on /it/route/[slug] for the same reason.
const IT_PLACE_NAMES: Record<string, string> = {
    'Naples Airport': 'Aeroporto di Napoli',
    'Catania Airport': 'Aeroporto di Catania',
    'Palermo Airport': 'Aeroporto di Palermo',
    'Olbia Airport': 'Aeroporto di Olbia',
    'Cagliari Airport': 'Aeroporto di Cagliari',
    'Syracuse': 'Siracusa',
    'Mount Etna': 'Etna',
    'Baia Sardinia': 'Baia Sardegna',
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

export const metadata: Metadata = {
    title: 'Percorsi Taxi in Italia | Trasferimenti Privati Città-Città',
    description: 'Sfoglia tutti i percorsi di taxi privato in Italia. Trasferimenti privati tra le principali città, aeroporti e destinazioni turistiche. Richiedi un preventivo oggi.',
    alternates: {
        canonical: '/it/route',
    },
    openGraph: {
        title: 'Percorsi Taxi in Italia | Trasferimenti Privati Città-Città',
        description: 'Trasferimenti privati in taxi tra le principali destinazioni italiane. Autisti professionisti, servizio porta a porta.',
        locale: 'it_IT',
    },
};

export default function ItalianRoutesIndexPage() {
    return (
        <main className="font-inter bg-white text-navy-rich">
            <Navbar />

            {/* Hero */}
            <section className="bg-[#0F1C2E] text-white py-28 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#F4C430 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }} />
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">Trasferimenti Privati</p>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">Percorsi Taxi in Italia</h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
                        Trasferimenti privati in taxi tra le migliori destinazioni italiane. Autisti professionisti, servizio porta a porta e prenotazione online immediata.
                    </p>
                    <nav aria-label="Breadcrumb" className="flex justify-center gap-2 text-sm text-gray-500">
                        <Link href="/it" className="hover:text-gold transition-colors">Home</Link>
                        <span>/</span>
                        <span className="text-gold">Percorsi</span>
                    </nav>
                </div>
            </section>

            {/* All Italian Routes Grid */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-16">
                        <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">Taxi Città-Città</p>
                        <h2 className="text-3xl md:text-5xl font-bold text-[#0F1C2E]">Tutti i Percorsi Taxi in Italia</h2>
                        <div className="w-20 h-1 bg-gold mx-auto mt-6" />
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {allItRoutes.map((route, index) => (
                            <Link
                                key={index}
                                href={`/it/route/${route.slugIt}`}
                                className="group block p-8 rounded-[2rem] border border-gray-100 hover:border-gold hover:shadow-xl transition-all duration-300 bg-white shadow-sm"
                            >
                                <div className="flex items-center gap-3 mb-5">
                                    <div>
                                        <span className="text-xs text-gray-400 font-bold uppercase tracking-widest block">Da</span>
                                        <span className="text-xl font-extrabold text-[#0F1C2E] group-hover:text-gold transition-colors">{itPlaceName(route.from)}</span>
                                    </div>
                                    <ArrowRight className="w-6 h-6 text-gold mx-2 shrink-0" />
                                    <div>
                                        <span className="text-xs text-gray-400 font-bold uppercase tracking-widest block">A</span>
                                        <span className="text-xl font-extrabold text-[#0F1C2E] group-hover:text-gold transition-colors">{itPlaceName(route.to)}</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 mb-5 text-sm text-gray-500">
                                    <span className="flex items-center gap-1">
                                        <MapPin className="w-4 h-4 text-gold" /> {route.distance}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Clock className="w-4 h-4 text-gold" /> {route.duration}
                                    </span>
                                </div>

                                <div className="flex items-center justify-end">
                                    <span className="flex items-center text-gold font-bold text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                                        Richiedi un Preventivo <ChevronRight className="w-4 h-4 ml-1" />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Internal Links Section */}
            <section className="py-16 bg-[#F8F9FA] border-y border-gray-100">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid md:grid-cols-3 gap-12 text-center">
                        <div>
                            <h3 className="text-lg font-bold text-navy mb-4">Trasferimenti Aeroportuali</h3>
                            <p className="text-sm text-gray-500 mb-4">Trasferimenti diretti da tutti i principali aeroporti italiani al tuo hotel o destinazione.</p>
                            <Link href="/it/servizi/trasferimenti-aeroportuali" className="text-gold font-bold text-sm hover:text-navy transition-colors">
                                Vedi Trasferimenti Aeroportuali →
                            </Link>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-navy mb-4">Servizi Taxi in Città</h3>
                            <p className="text-sm text-gray-500 mb-4">Servizio taxi privato a Roma, Milano, Firenze, Venezia, Napoli e nelle principali città italiane.</p>
                            <Link href="/city" className="text-gold font-bold text-sm hover:text-navy transition-colors">
                                Vedi Tutte le Città →
                            </Link>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-navy mb-4">Tour Privati</h3>
                            <p className="text-sm text-gray-500 mb-4">Tour privati di un&apos;intera giornata in Toscana, Costiera Amalfitana, Lago di Como e nelle principali attrazioni italiane.</p>
                            <Link href="/it/servizi/tour-privati" className="text-gold font-bold text-sm hover:text-navy transition-colors">
                                Vedi Tour Privati →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
