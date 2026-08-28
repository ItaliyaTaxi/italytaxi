import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQSection from '@/components/FAQSection';
import RouteMapLoader from '@/components/RouteMapLoader';
import { ArrowRight, MapPin, Route as RouteIcon, Clock, Info, ChevronRight } from 'lucide-react';
import type { RichDistancePage } from '@/lib/rich-distance-pages-data';
import type { RichDistancePageIt } from '@/lib/rich-distance-pages-it-data';

const SITE = 'https://www.italytaxiservice.com';

const JOURNEY_TYPE_COLOR: Record<string, string> = {
    'intercity': '#7A6A4F',
    'city-to-city': '#3A5A6B',
    'countryside': '#5C7A4F',
    'hilltown': '#8A5A3B',
};

/**
 * Italian sibling of RichDistancePageContent. Same map/timeline/table
 * grammar and palette — numeric facts (distance, time, map geometry) come
 * from the EN `facts` page (looked up by slugEn), never duplicated here;
 * every string on screen is the natively-written Italian copy from
 * rich-distance-pages-it-data.ts.
 */
export default function RichDistancePageContentIt({ page, facts }: { page: RichDistancePageIt; facts: RichDistancePage }) {
    const { origin, dest, h1 } = page;
    const accent = JOURNEY_TYPE_COLOR[facts.journeyType] ?? '#7A6A4F';

    const webPageSchema = {
        '@context': 'https://schema.org', '@type': 'WebPage',
        name: h1, url: `${SITE}/it/distance/${page.slugIt}`,
        description: page.metaDescription,
        isPartOf: { '@type': 'WebSite', name: 'Italy Taxi Service', url: SITE },
    };

    return (
        <main className="font-inter bg-[#FAF7F1] text-[#1E2A22]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
            <Navbar />

            {/* ── Hero: route strip + framing text, no banner image ─────────── */}
            <section className="pt-32 pb-10 px-6 border-b border-[#E7DFCE]">
                <div className="container mx-auto max-w-5xl">
                    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#8A8067] mb-8">
                        <Link href="/it" className="hover:text-[#1E2A22]">Home</Link>
                        <span>/</span>
                        <span className="text-[#1E2A22]">{h1}</span>
                    </nav>

                    <span
                        className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] px-3 py-1.5 rounded-full mb-6"
                        style={{ backgroundColor: `${accent}1A`, color: accent }}
                    >
                        <RouteIcon className="w-3.5 h-3.5" /> {page.journeyTypeLabel}
                    </span>

                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-4">
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#1E2A22]">{origin}</h1>
                        <ArrowRight className="w-7 h-7 md:w-9 md:h-9 text-[#B3821A] shrink-0" />
                        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#1E2A22]">{dest}</h2>
                    </div>

                    <p className="text-lg text-[#5B5744] max-w-2xl leading-relaxed mb-8">{page.heroSubtitle}</p>

                    <div className="flex flex-wrap gap-8">
                        <div>
                            <div className="text-[11px] font-bold uppercase tracking-widest text-[#8A8067] mb-1">Distanza Stradale</div>
                            <div className="text-2xl font-extrabold text-[#1E2A22]">{facts.drivingDistanceKm}</div>
                        </div>
                        <div className="w-px bg-[#E7DFCE] self-stretch hidden sm:block" />
                        <div>
                            <div className="text-[11px] font-bold uppercase tracking-widest text-[#8A8067] mb-1">Tempo di Guida</div>
                            <div className="text-2xl font-extrabold text-[#1E2A22]">{facts.drivingDurationRange}</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Route map ──────────────────────────────────────────────── */}
            <section className="py-10 px-6 border-b border-[#E7DFCE]">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-xl font-bold text-[#1E2A22] mb-1 flex items-center gap-2">
                        <MapPin className="w-5 h-5" style={{ color: accent }} /> Il Percorso
                    </h2>
                    <p className="text-sm text-[#8A8067] mb-5">Percorso stradale reale tra {origin} e {dest} — non una linea retta tra due punti.</p>
                    <RouteMapLoader origin={facts.map.origin} destination={facts.map.destination} geometry={facts.map.geometry} />
                    <p className="text-xs text-[#8A8067] mt-3 flex items-start gap-1.5">
                        <Info className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                        Il percorso mostrato riflette un tragitto stradale tipico — il tuo viaggio reale può variare in base al traffico, alle condizioni della strada e al punto esatto di ritiro o destinazione.
                    </p>
                </div>
            </section>

            {/* ── Quick journey snapshot ───────────────────────────────────── */}
            <section className="py-10 px-6 border-b border-[#E7DFCE] bg-[#F3EEE1]/60">
                <div className="container mx-auto max-w-5xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {page.snapshot.map((s, i) => (
                            <div key={i} className={i > 0 ? 'md:border-l border-[#E7DFCE] md:pl-6' : ''}>
                                <div className="text-[10px] font-bold uppercase tracking-widest text-[#8A8067] mb-1">{s.label}</div>
                                <div className="text-base font-bold text-[#1E2A22] leading-snug">{s.value}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="container mx-auto max-w-3xl px-6">

                {/* ── How far is it ─────────────────────────────────────────── */}
                <section className="py-12 border-b border-[#E7DFCE]">
                    <h2 className="text-2xl font-bold text-[#1E2A22] mb-5">Quanto Dista {dest} da {origin}?</h2>
                    {page.howFarIsIt.map((p, i) => (
                        <p key={i} className="text-[#3F3B2E] leading-relaxed mb-4">{p}</p>
                    ))}
                </section>

                {/* ── Journey timeline ──────────────────────────────────────── */}
                <section className="py-12 border-b border-[#E7DFCE]">
                    <h2 className="text-2xl font-bold text-[#1E2A22] mb-2">Quanto Tempo Ci Vuole in Auto?</h2>
                    <p className="text-[#8A8067] text-sm mb-8">{facts.drivingDurationRange} in condizioni normali.</p>

                    <div className="relative pl-8">
                        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[#E7DFCE]" />
                        {page.journeySteps.map((step, i) => (
                            <div key={i} className="relative mb-7 last:mb-0">
                                <div
                                    className="absolute -left-8 top-1 w-3.5 h-3.5 rounded-full border-2 border-[#FAF7F1]"
                                    style={{ backgroundColor: accent }}
                                />
                                <div className="text-[11px] font-bold uppercase tracking-widest mb-1" style={{ color: accent }}>{step.label}</div>
                                <p className="text-[#3F3B2E] leading-relaxed">{step.description}</p>
                            </div>
                        ))}
                    </div>

                    {page.journeyTimeNote.map((p, i) => (
                        <p key={i} className="text-sm text-[#5B5744] leading-relaxed mt-6 bg-[#F3EEE1] rounded-xl p-4">{p}</p>
                    ))}
                </section>

                {/* ── Understanding the journey ─────────────────────────────── */}
                <section className="py-12 border-b border-[#E7DFCE]">
                    <h2 className="text-2xl font-bold text-[#1E2A22] mb-5">Capire il Viaggio</h2>
                    {page.understandingJourney.map((p, i) => (
                        <p key={i} className="text-[#3F3B2E] leading-relaxed mb-4 text-[15px]">{p}</p>
                    ))}
                </section>

                {/* ── Journey highlights ────────────────────────────────────── */}
                <section className="py-12 border-b border-[#E7DFCE]">
                    <h2 className="text-2xl font-bold text-[#1E2A22] mb-6">Punti Salienti del Viaggio</h2>
                    <div className="grid sm:grid-cols-1 gap-4">
                        {page.highlights.map((h, i) => (
                            <div key={i} className="flex gap-4 p-5 rounded-2xl bg-white border border-[#E7DFCE]">
                                <div
                                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 font-bold text-sm"
                                    style={{ backgroundColor: `${accent}1A`, color: accent }}
                                >
                                    {i + 1}
                                </div>
                                <div>
                                    <p className="font-bold text-[#1E2A22] mb-1">{h.title}</p>
                                    <p className="text-sm text-[#5B5744] leading-relaxed">{h.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── Best ways to travel ───────────────────────────────────── */}
                <section className="py-12 border-b border-[#E7DFCE]">
                    <h2 className="text-2xl font-bold text-[#1E2A22] mb-6">I Modi Migliori per Viaggiare</h2>
                    <div className="overflow-x-auto -mx-6 px-6 sm:mx-0 sm:px-0">
                        <table className="w-full border-collapse text-sm min-w-[480px]">
                            <thead>
                                <tr className="border-b-2 border-[#1E2A22]">
                                    <th className="text-left py-2.5 pr-3 font-bold text-[#1E2A22]">Opzione</th>
                                    <th className="text-left py-2.5 pr-3 font-bold text-[#1E2A22]">Tempo</th>
                                    <th className="text-left py-2.5 font-bold text-[#1E2A22]">Note</th>
                                </tr>
                            </thead>
                            <tbody>
                                {page.transportOptions.map((t, i) => (
                                    <tr key={i} className="border-b border-[#E7DFCE] align-top">
                                        <td className="py-3 pr-3 font-semibold text-[#1E2A22] whitespace-nowrap">{t.mode}</td>
                                        <td className="py-3 pr-3 text-[#5B5744] whitespace-nowrap">{t.time}</td>
                                        <td className="py-3 text-[#5B5744]">{t.note}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-sm text-[#5B5744] leading-relaxed mt-5">{page.transportNote}</p>
                </section>

                {/* ── Planning your journey ─────────────────────────────────── */}
                <section className="py-12 border-b border-[#E7DFCE]">
                    <h2 className="text-2xl font-bold text-[#1E2A22] mb-6">Organizzare il Viaggio</h2>
                    <div className="space-y-4">
                        {page.planningTips.map((t, i) => (
                            <div key={i} className="flex gap-3">
                                <Clock className="w-4 h-4 mt-1 shrink-0" style={{ color: accent }} />
                                <div>
                                    <p className="font-bold text-[#1E2A22] text-sm mb-0.5">{t.title}</p>
                                    <p className="text-sm text-[#5B5744] leading-relaxed">{t.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── Contextual CTA ────────────────────────────────────────── */}
                <section className="py-12 border-b border-[#E7DFCE]">
                    <div className="rounded-2xl p-7 flex flex-col sm:flex-row sm:items-center gap-5 justify-between" style={{ backgroundColor: '#1E2A22' }}>
                        <div>
                            <p className="text-white font-bold text-lg mb-1">{page.ctaHeading}</p>
                            <p className="text-[#C7CCB8] text-sm max-w-md">{page.ctaText}</p>
                        </div>
                        <Link
                            href={page.routePageSlugIt ? `/it/route/${page.routePageSlugIt}` : '/it/servizi/trasferimenti-citta-citta'}
                            className="inline-flex items-center gap-2 bg-[#C9A84C] text-[#1E2A22] font-bold px-6 py-3 rounded-full whitespace-nowrap hover:bg-white transition-colors"
                        >
                            {page.ctaAnchor} <ChevronRight className="w-4 h-4" />
                        </Link>
                    </div>
                </section>

            </div>

            <FAQSection faqs={page.faqs} title={`${origin} - ${dest} — Domande Frequenti`} />

            {/* ── Related journeys ──────────────────────────────────────────── */}
            <section className="py-14 px-6 bg-[#F3EEE1]/60">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-xl font-bold text-[#1E2A22] mb-6">Percorsi Correlati</h2>
                    <div className="grid sm:grid-cols-3 gap-4">
                        {page.relatedLinks.map((link, i) => (
                            <Link
                                key={i}
                                href={link.href}
                                className="flex items-center justify-between gap-2 p-4 rounded-xl bg-white border border-[#E7DFCE] hover:border-[#C9A84C] transition-colors text-sm font-semibold text-[#1E2A22]"
                            >
                                {link.label} <ChevronRight className="w-4 h-4 shrink-0" style={{ color: accent }} />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
