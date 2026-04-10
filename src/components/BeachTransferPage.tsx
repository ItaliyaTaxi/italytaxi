import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { CheckCircle, ChevronRight, MessageCircle, MapPin } from 'lucide-react';
import TaxiButton from '@/components/TaxiButton';

export interface BeachTransferData {
  slug: string;
  name: string;
  region: string;
  heroImage: string;
  intro: string;
  whySection: string;
  highlights: string[];
  nearbyAttractions: { name: string; distance: string }[];
  faqs: { q: string; a: string }[];
  relatedLinks: { label: string; href: string }[];
}

interface BeachTransferPageProps {
  data: BeachTransferData;
}

export default function BeachTransferPage({ data }: BeachTransferPageProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Private Taxi to ${data.name}`,
    "provider": { "@id": "https://www.italytaxiservice.com/#organization" },
    "url": `https://www.italytaxiservice.com/beach-transfer/${data.slug}`,
    "description": data.intro,
    "areaServed": { "@type": "Place", "name": data.region, "containedInPlace": { "@type": "Country", "name": "Italy" } },
    "serviceType": "Beach Transfer"
  };

  return (
    <main className="min-h-screen font-inter">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Navbar />

      <PageHero
        titleTop="Private Taxi Transfer to"
        titleBottom={data.name}
        description={`Professional door-to-door beach transfer to ${data.name} with an English-speaking driver. Fixed price, no hidden costs.`}
        backgroundImage={data.heroImage}
        buttonText={`Book ${data.name} Transfer`}
        breadcrumbs={[
          { name: "Beach Transfers", item: "/beach-transfer" },
          { name: data.name, item: `/beach-transfer/${data.slug}` }
        ]}
      />

      {/* Intro */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">{data.region}, Italy</p>
              <h2 className="text-4xl font-extrabold text-navy mb-6 leading-tight">
                Your Private Transfer to {data.name}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">{data.intro}</p>
              <p className="text-gray-600 leading-relaxed mb-8">{data.whySection}</p>
              <div className="flex gap-3">
                <TaxiButton href="/book-now">Book Now</TaxiButton>
                <a href="https://wa.me/923148932631" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-full bg-[#25D366] text-white font-bold hover:bg-[#1ebe57] transition-all text-sm">
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-extrabold text-navy mb-4">What's Included</h3>
              {data.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-[#F8F9FA] rounded-xl border border-gray-100 hover:border-gold transition-all group">
                  <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="text-navy font-semibold text-sm leading-snug">{h}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nearby attractions */}
      {data.nearbyAttractions.length > 0 && (
        <section className="py-16 bg-[#F8F9FA] border-y border-gray-100">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-10">
              <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-3">Explore the Area</p>
              <h2 className="text-3xl font-extrabold text-navy">Nearby Attractions from {data.name}</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {data.nearbyAttractions.map((attr, i) => (
                <div key={i} className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-gold hover:shadow-md transition-all group">
                  <MapPin className="w-5 h-5 text-gold shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-bold text-navy text-sm">{attr.name}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{attr.distance}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Pricing */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">Transparent Pricing</p>
          <h2 className="text-3xl font-extrabold text-white mb-12">Fixed Transfer Rates</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { label: "Standard Sedan", capacity: "Up to 3 passengers", price: "From €50*" },
              { label: "Luxury Minivan", capacity: "Up to 7 passengers", price: "From €80*", popular: true },
              { label: "Premium Van", capacity: "Up to 8 passengers", price: "From €100*" },
            ].map((tier, i) => (
              <div key={i} className={`p-7 rounded-2xl ${tier.popular ? 'bg-gold text-navy transform md:-translate-y-2 shadow-2xl' : 'bg-white/5 border border-white/10 text-white hover:border-gold'} transition-all`}>
                {tier.popular && <p className="text-xs font-bold uppercase tracking-widest mb-2 text-navy/70">Most Popular</p>}
                <h3 className="text-lg font-bold mb-1">{tier.label}</h3>
                <p className={`text-sm mb-4 ${tier.popular ? 'text-navy/70' : 'text-gray-400'}`}>{tier.capacity}</p>
                <p className="text-3xl font-extrabold mb-4">{tier.price}</p>
                <TaxiButton href="/book-now" className="w-full text-center">Select</TaxiButton>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-xs mt-6">*Final price depends on exact pickup/drop-off location and distance</p>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-10">
            <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-3">Related Services</p>
            <h2 className="text-3xl font-extrabold text-navy">More Beach & Coastal Transfers</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {data.relatedLinks.map((l, i) => (
              <Link key={i} href={l.href}
                className="flex items-center gap-2 p-4 bg-[#F8F9FA] rounded-xl border border-gray-100 hover:border-gold hover:shadow-md transition-all group text-sm font-semibold text-navy hover:text-gold">
                <ChevronRight className="w-4 h-4 text-gold shrink-0" />{l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={data.faqs} title={`${data.name} Transfer FAQ`} badge="Coastal Travel" />

      <Footer />
    </main>
  );
}
