import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import FAQSection from '@/components/FAQSection';
import { Ruler, Car, TrainFront, Clock, ChevronRight } from 'lucide-react';
import type { DistancePage } from '@/lib/distance-pages-data';

const SITE = 'https://www.italytaxiservice.com';

export default function DistancePageContent({ page }: { page: DistancePage }) {
    const { origin, dest, h1, slug } = page;
    const cell = 'px-4 py-3 border border-gray-100 text-sm';

    const webPageSchema = {
        '@context': 'https://schema.org', '@type': 'WebPage',
        name: page.h1, url: `${SITE}/${slug}`,
        description: page.metaDescription,
        isPartOf: { '@type': 'WebSite', name: 'Italy Taxi Service', url: SITE },
    };

    return (
        <main className="font-inter bg-white text-navy">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
            <Navbar />

            <PageHero
                titleTop={`${origin} to ${dest}`}
                titleBottom="Distance"
                description={`How far apart are ${origin} and ${dest}? Straight-line, driving and train distances compared, with real travel times.`}
                backgroundImage={page.heroImage}
                buttonText="Get a Transfer Quote"
                buttonLink="/book-now"
                breadcrumbs={[
                    { name: 'Home', item: '/' },
                    { name: h1, item: `/${slug}` },
                ]}
            />

            <section className="py-16">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-navy mb-6 leading-tight">{h1}</h1>

                    {page.intro.map((p, i) => (
                        <p key={i} className="text-gray-700 leading-relaxed mb-4">{p}</p>
                    ))}

                    {/* Quick distance table */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
                        <div className="bg-[#F8F9FA] p-5 rounded-2xl text-center">
                            <Ruler className="w-6 h-6 text-gold mx-auto mb-2" />
                            <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">Straight-Line</p>
                            <p className="text-navy font-extrabold text-sm">{page.straightLineDistance}</p>
                        </div>
                        <div className="bg-[#F8F9FA] p-5 rounded-2xl text-center">
                            <Car className="w-6 h-6 text-gold mx-auto mb-2" />
                            <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">Driving Distance</p>
                            <p className="text-navy font-extrabold text-sm">{page.drivingDistance}</p>
                            <p className="text-xs text-gray-500 mt-1">{page.drivingDuration}</p>
                        </div>
                        <div className="bg-[#F8F9FA] p-5 rounded-2xl text-center">
                            <TrainFront className="w-6 h-6 text-gold mx-auto mb-2" />
                            <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">Train Journey</p>
                            <p className="text-navy font-extrabold text-sm">{page.trainDuration}</p>
                        </div>
                    </div>
                    <p className="text-xs text-gray-500 italic mb-8">{page.straightLineNote}</p>

                    {/* City-centre vs door-to-door */}
                    <h2 className="text-2xl font-bold text-navy mt-12 mb-4">City-Centre vs. Door-to-Door Distance</h2>
                    {page.centreVsDoorToDoor.map((p, i) => (
                        <p key={i} className="text-gray-700 leading-relaxed mb-4">{p}</p>
                    ))}

                    {/* By car */}
                    <h2 className="text-2xl font-bold text-navy mt-12 mb-4">By Car</h2>
                    {page.byCar.map((p, i) => (
                        <p key={i} className="text-gray-700 leading-relaxed mb-4">{p}</p>
                    ))}
                    {page.byCarAlt && <p className="text-gray-700 leading-relaxed mb-4">{page.byCarAlt}</p>}

                    {/* By train */}
                    <h2 className="text-2xl font-bold text-navy mt-12 mb-4">By Train</h2>
                    {page.byTrain.map((p, i) => (
                        <p key={i} className="text-gray-700 leading-relaxed mb-4">{p}</p>
                    ))}

                    {/* By private transfer */}
                    <h2 className="text-2xl font-bold text-navy mt-12 mb-4">By Private Transfer</h2>
                    {page.byPrivateTransfer.map((p, i) => (
                        <p key={i} className="text-gray-700 leading-relaxed mb-4">{p}</p>
                    ))}
                    <div className="flex flex-wrap gap-x-8 gap-y-2 mb-8">
                        <Link href={`/route/${page.routePageSlug}`} className="inline-flex items-center gap-1 text-gold font-semibold hover:underline">
                            {page.routePageLabel} <ChevronRight className="w-4 h-4" />
                        </Link>
                        {page.secondaryRoutePageSlug && page.secondaryRoutePageLabel && (
                            <Link href={`/route/${page.secondaryRoutePageSlug}`} className="inline-flex items-center gap-1 text-gold font-semibold hover:underline">
                                {page.secondaryRoutePageLabel} <ChevronRight className="w-4 h-4" />
                            </Link>
                        )}
                    </div>

                    {/* Popular stops */}
                    {page.popularStops.length > 0 && (
                        <>
                            <h2 className="text-2xl font-bold text-navy mt-12 mb-4">Places Along the Way</h2>
                            <div className="grid sm:grid-cols-2 gap-4 mb-4">
                                {page.popularStops.map((s, i) => (
                                    <div key={i} className="bg-[#F8F9FA] p-5 rounded-2xl">
                                        <p className="font-bold text-navy mb-1">{s.name}</p>
                                        <p className="text-sm text-gray-700">{s.note}</p>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}

                    {/* What affects travel time */}
                    <h2 className="text-2xl font-bold text-navy mt-12 mb-4">What Affects Travel Time</h2>
                    <ul className="space-y-2 text-gray-700 mb-4 list-disc list-inside">
                        {page.travelTimeFactors.map((f, i) => <li key={i}>{f}</li>)}
                    </ul>

                    {/* Best way */}
                    <h2 className="text-2xl font-bold text-navy mt-12 mb-4">Which Way Should You Choose?</h2>
                    {page.bestWay.map((p, i) => (
                        <p key={i} className="text-gray-700 leading-relaxed mb-4">{p}</p>
                    ))}

                    <div className="flex flex-wrap gap-4 mt-8">
                        <Link href="/book-now" className="inline-block bg-[#0F1C2E] text-white font-bold px-8 py-4 rounded-full hover:bg-gold hover:text-navy transition-all">Get a Transfer Quote</Link>
                        <Link href={`/route/${page.routePageSlug}`} className="inline-block bg-gold text-navy font-bold px-8 py-4 rounded-full hover:bg-[#0F1C2E] hover:text-white transition-all">{page.routePageLabel}</Link>
                    </div>
                </div>
            </section>

            <FAQSection faqs={page.faqs} title={`${origin} to ${dest} Distance — FAQ`} />

            <section className="py-12 bg-white border-t border-gray-100">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <Clock className="w-4 h-4" /> Distances and journey times are approximate and can vary with traffic, weather and your exact pickup/drop-off points.
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
