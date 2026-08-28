import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import FAQSection from '@/components/FAQSection';
import { Ruler, Car, TrainFront, ChevronRight, Clock } from 'lucide-react';
import { distancePages } from '@/lib/distance-pages-data';
import { getAllItDistancePages, type DistanceLangContentIt } from '@/lib/distance-pages-it-data';
import { findRichDistancePage } from '@/lib/rich-distance-pages-data';
import { getAllRichDistancePagesIt, findRichDistancePageIt } from '@/lib/rich-distance-pages-it-data';
import RichDistancePageContentIt from '@/components/RichDistancePageContentIt';

const SITE = 'https://www.italytaxiservice.com';

type ItDistanceView = {
    slugEn: string;
    slugIt: string;
    origin: string;
    dest: string;
    it: DistanceLangContentIt;
};

const allItDistancePages: ItDistanceView[] = getAllItDistancePages();

// Numeric facts and hero image are never duplicated in Italian — always
// sourced from the English entry via slugEn, so the two languages can never
// state different figures for the same route.
function factsFor(slugEn: string) {
    return distancePages.find((d) => d.slug === slugEn) ?? null;
}

// Rich IT pages mirror the classic ones: static Italian editorial content in
// rich-distance-pages-it-data.ts, numeric facts + map geometry looked up
// from the EN rich page via slugEn — never duplicated.
function richFactsFor(slugEn: string) {
    return findRichDistancePage(slugEn);
}

export async function generateStaticParams() {
    return [
        ...allItDistancePages.map((d) => ({ slug: d.slugIt })),
        ...getAllRichDistancePagesIt().map((d) => ({ slug: d.slugIt })),
    ];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const page = allItDistancePages.find((d) => d.slugIt === slug);
    if (page) {
        const languages: Record<string, string> = {
            'it-IT': `/it/distance/${slug}`,
            'en': `/distance/${page.slugEn}`,
            'x-default': `/distance/${page.slugEn}`,
        };
        const facts = factsFor(page.slugEn);

        return {
            title: page.it.seoTitle,
            description: page.it.metaDescription,
            alternates: { canonical: `/it/distance/${slug}`, languages },
            openGraph: {
                title: page.it.seoTitle, description: page.it.metaDescription, url: `${SITE}/it/distance/${slug}`, type: 'website',
                images: facts ? [{ url: `${SITE}${facts.heroImage}`, width: 1200, height: 630, alt: page.it.h1 }] : undefined,
            },
            twitter: { card: 'summary_large_image', title: page.it.seoTitle, description: page.it.metaDescription },
        };
    }

    const rp = findRichDistancePageIt(slug);
    if (rp) {
        const languages: Record<string, string> = {
            'it-IT': `/it/distance/${slug}`,
            'en': `/distance/${rp.slugEn}`,
            'x-default': `/distance/${rp.slugEn}`,
        };

        return {
            title: rp.seoTitle,
            description: rp.metaDescription,
            alternates: { canonical: `/it/distance/${slug}`, languages },
            openGraph: {
                title: rp.seoTitle, description: rp.metaDescription, url: `${SITE}/it/distance/${slug}`, type: 'website',
            },
            twitter: { card: 'summary_large_image', title: rp.seoTitle, description: rp.metaDescription },
        };
    }

    return { title: 'Pagina Non Trovata' };
}

export default async function ItalianDistancePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const page = allItDistancePages.find((d) => d.slugIt === slug);

    if (!page) {
        const rp = findRichDistancePageIt(slug);
        if (rp) {
            const facts = richFactsFor(rp.slugEn);
            if (!facts) notFound();
            return <RichDistancePageContentIt page={rp} facts={facts} />;
        }
        notFound();
    }

    const facts = factsFor(page.slugEn);
    if (!facts) notFound();

    const c = page.it;

    const webPageSchema = {
        '@context': 'https://schema.org', '@type': 'WebPage',
        name: c.h1, url: `${SITE}/it/distance/${slug}`,
        description: c.metaDescription,
        isPartOf: { '@type': 'WebSite', name: 'Italy Taxi Service', url: SITE },
    };

    return (
        <main className="font-inter bg-white text-navy">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
            <Navbar />

            <PageHero
                titleTop={`${page.origin} a`}
                titleBottom="Distanza"
                description={`Quanto distano ${page.origin} e ${page.dest}? Distanza in linea d'aria, in auto e in treno a confronto, con tempi di viaggio reali.`}
                backgroundImage={facts.heroImage}
                buttonText="Richiedi un Preventivo"
                buttonLink="/book-now"
                breadcrumbs={[
                    { name: 'Home', item: '/it' },
                    { name: c.h1, item: `/it/distance/${slug}` },
                ]}
            />

            <section className="py-16">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-navy mb-6 leading-tight">{c.h1}</h1>

                    {c.intro.map((p, i) => (
                        <p key={i} className="text-gray-700 leading-relaxed mb-4">{p}</p>
                    ))}

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
                        <div className="bg-[#F8F9FA] p-5 rounded-2xl text-center">
                            <Ruler className="w-6 h-6 text-gold mx-auto mb-2" />
                            <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">Linea d&apos;Aria</p>
                            <p className="text-navy font-extrabold text-sm">{facts.straightLineDistance}</p>
                        </div>
                        <div className="bg-[#F8F9FA] p-5 rounded-2xl text-center">
                            <Car className="w-6 h-6 text-gold mx-auto mb-2" />
                            <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">Distanza in Auto</p>
                            <p className="text-navy font-extrabold text-sm">{facts.drivingDistance}</p>
                            <p className="text-xs text-gray-500 mt-1">{facts.drivingDuration}</p>
                        </div>
                        <div className="bg-[#F8F9FA] p-5 rounded-2xl text-center">
                            <TrainFront className="w-6 h-6 text-gold mx-auto mb-2" />
                            <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">In Treno</p>
                            <p className="text-navy font-extrabold text-sm">{facts.trainDuration}</p>
                        </div>
                    </div>
                    <p className="text-xs text-gray-500 italic mb-8">{facts.straightLineNote}</p>

                    <h2 className="text-2xl font-bold text-navy mt-12 mb-4">Centro-Centro o Porta a Porta</h2>
                    {c.centreVsDoorToDoor.map((p, i) => (
                        <p key={i} className="text-gray-700 leading-relaxed mb-4">{p}</p>
                    ))}

                    <h2 className="text-2xl font-bold text-navy mt-12 mb-4">{`${page.origin} - ${page.dest} in Auto`}</h2>
                    {c.byCar.map((p, i) => (
                        <p key={i} className="text-gray-700 leading-relaxed mb-4">{p}</p>
                    ))}
                    {c.byCarAlt && <p className="text-gray-700 leading-relaxed mb-4">{c.byCarAlt}</p>}

                    <h2 className="text-2xl font-bold text-navy mt-12 mb-4">{`${page.origin} - ${page.dest} in Treno`}</h2>
                    {c.byTrain.map((p, i) => (
                        <p key={i} className="text-gray-700 leading-relaxed mb-4">{p}</p>
                    ))}

                    <h2 className="text-2xl font-bold text-navy mt-12 mb-4">Transfer Privato o Taxi</h2>
                    {c.byPrivateTransfer.map((p, i) => (
                        <p key={i} className="text-gray-700 leading-relaxed mb-4">{p}</p>
                    ))}
                    {c.routePageSlugIt && c.routePageLabelIt ? (
                        <Link href={`/it/route/${c.routePageSlugIt}`} className="inline-flex items-center gap-1 text-gold font-semibold hover:underline mb-8">
                            {c.routePageLabelIt} <ChevronRight className="w-4 h-4" />
                        </Link>
                    ) : (
                        <Link href="/it/servizi/trasferimenti-citta-citta" className="inline-flex items-center gap-1 text-gold font-semibold hover:underline mb-8">
                            Scopri tutti i nostri transfer privati <ChevronRight className="w-4 h-4" />
                        </Link>
                    )}

                    {c.popularStops.length > 0 && (
                        <>
                            <h2 className="text-2xl font-bold text-navy mt-12 mb-4">Località Lungo il Percorso</h2>
                            <div className="grid sm:grid-cols-2 gap-4 mb-4">
                                {c.popularStops.map((s, i) => (
                                    <div key={i} className="bg-[#F8F9FA] p-5 rounded-2xl">
                                        <p className="font-bold text-navy mb-1">{s.name}</p>
                                        <p className="text-sm text-gray-700">{s.note}</p>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}

                    <h2 className="text-2xl font-bold text-navy mt-12 mb-4">Cosa Influisce sui Tempi di Viaggio?</h2>
                    <ul className="space-y-2 text-gray-700 mb-4 list-disc list-inside">
                        {c.travelTimeFactors.map((f, i) => <li key={i}>{f}</li>)}
                    </ul>

                    <h2 className="text-2xl font-bold text-navy mt-12 mb-4">{`Qual è il Modo Migliore per Andare da ${page.origin} a ${page.dest}?`}</h2>
                    {c.bestWay.map((p, i) => (
                        <p key={i} className="text-gray-700 leading-relaxed mb-4">{p}</p>
                    ))}

                    <div className="flex flex-wrap gap-4 mt-8">
                        <Link href="/book-now" className="inline-block bg-[#0F1C2E] text-white font-bold px-8 py-4 rounded-full hover:bg-gold hover:text-navy transition-all">Richiedi un Preventivo</Link>
                        {c.routePageSlugIt && c.routePageLabelIt && (
                            <Link href={`/it/route/${c.routePageSlugIt}`} className="inline-block bg-gold text-navy font-bold px-8 py-4 rounded-full hover:bg-[#0F1C2E] hover:text-white transition-all">{c.routePageLabelIt}</Link>
                        )}
                    </div>
                </div>
            </section>

            <FAQSection faqs={c.faqs} title={`${page.origin} - ${page.dest} Distanza — Domande Frequenti`} />

            <section className="py-12 bg-white border-t border-gray-100">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <Clock className="w-4 h-4" /> Le distanze e i tempi di percorrenza sono indicativi e possono variare in base al traffico, alle condizioni meteo e ai punti esatti di ritiro/destinazione.
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
