import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import Footer from '@/components/Footer';
import Coverage from '@/components/Coverage';
import CoverageDirectory from '@/components/CoverageDirectory';
import FAQSection from '@/components/FAQSection';
import Link from 'next/link';
import { Metadata } from 'next';
import { MapPin, CheckCircle, ChevronRight, MessageCircle } from 'lucide-react';
import TaxiButton from '@/components/TaxiButton';

export const metadata: Metadata = {
  title: "Taxi Service Coverage Areas in Italy",
  description: "Italy Taxi Service covers every major city, airport, cruise port, and region — Rome, Milan, Florence, Venice, Naples, Amalfi Coast, Lake Como and more. Private transfers nationwide.",
  alternates: { canonical: "/coverage-areas" }
};

const coverageFaqs = [
  { q: "Do you cover transfers to small towns and rural areas?", a: "Yes. Our driver network extends beyond major cities to cover smaller towns, countryside villas, agriturismo properties, and remote coastal villages. If you can name the address, we can get you there." },
  { q: "Do you provide cross-border transfers from Italy?", a: "Yes. We cover cross-border routes to Switzerland (Geneva, Zurich, Lugano), Monaco, France (Nice, Paris), Slovenia, and Austria. International transfers are quoted with all border crossing logistics included." },
  { q: "Is the Amalfi Coast covered despite difficult road access?", a: "Yes. Our drivers are specialists in the narrow, winding roads of the Amalfi Coast. We cover all villages including Positano, Ravello, Praiano, and Atrani — areas where non-local drivers routinely struggle." },
  { q: "Do you serve all Italian cruise ports?", a: "Yes. We cover Civitavecchia (Rome), Livorno (Florence), Naples, Venice, Genoa, Salerno, Bari, Catania, and Messina — with drivers permited to enter port facilities for direct pier pickup." },
  { q: "What is the furthest single transfer you offer?", a: "We have completed transfers from Rome to France and from Sicily to northern Italy. No Italian destination is beyond our network — contact us with your specific route for a custom quote." },
  { q: "Can I book a transfer between any combination of Italian cities?", a: "Yes. Any two addresses in Italy can be connected with a private transfer. Use our booking form or WhatsApp us with your specific origin and destination for an instant fixed price." },
];

const majorCities = [
  { city: "Rome", href: "/city/rome", tag: "Capital City" },
  { city: "Milan", href: "/city/milan", tag: "Fashion & Finance" },
  { city: "Florence", href: "/city/florence", tag: "Art & History" },
  { city: "Venice", href: "/city/venice", tag: "Canals & Culture" },
  { city: "Naples", href: "/city/naples", tag: "Southern Italy" },
  { city: "Bologna", href: "/city/bologna", tag: "Gastronomy Hub" },
  { city: "Amalfi Coast", href: "/city/amalfi-coast", tag: "Coastal Beauty" },
  { city: "Lake Como", href: "/city/como", tag: "Lakeside Luxury" },
];

const airports = [
  { name: "Rome Fiumicino (FCO)", href: "/airport/rome-fiumicino" },
  { name: "Rome Ciampino (CIA)", href: "/airport/rome-ciampino" },
  { name: "Milan Malpensa (MXP)", href: "/airport/milan-malpensa" },
  { name: "Milan Linate (LIN)", href: "/airport/milan-linate" },
  { name: "Venice Marco Polo (VCE)", href: "/airport/venice" },
  { name: "Florence Peretola (FLR)", href: "/airport/florence" },
  { name: "Naples Capodichino (NAP)", href: "/airport/naples" },
  { name: "Catania Fontanarossa (CTA)", href: "/airport/catania-fontanarossa" },
];

export default function CoverageAreasPage() {
  return (
    <main className="min-h-screen font-inter">
      <Navbar />

      <PageHero
        titleTop="Serving Every Corner"
        titleBottom="of Italy — Nationwide Coverage"
        description="From Rome to Sicily, from the Dolomites to the Amalfi Coast — Italy Taxi Service covers every city, airport, cruise port, and village across the entire peninsula."
        backgroundImage="/images/hero.png"
        breadcrumbs={[{ name: "Coverage Areas", item: "/coverage-areas" }]}
      />

      {/* Intro content */}
      <section className="py-24 bg-white font-inter">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-gold" />
            <p className="text-gold text-sm font-bold uppercase tracking-[0.4em]">Where We Operate</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-navy mb-8 leading-tight">Italy's Most Comprehensive Private Transfer Network</h2>
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-5">
              <p className="text-gray-600 text-lg leading-relaxed">Italy Taxi Service operates the most extensive private transfer network in Italy, with professional drivers located in every major city, serving every major airport, and reaching destinations that other operators simply don't cover.</p>
              <p className="text-gray-600 text-lg leading-relaxed">Whether you need a transfer from Rome Fiumicino to the city centre, a long-distance private taxi from Milan to Florence, a coastal village pickup on the Amalfi Coast, or a cross-border transfer into Switzerland — we have a driver nearby and a fixed price ready.</p>
              <p className="text-gray-600 text-lg leading-relaxed">Our coverage is nationwide and all-inclusive. Toll roads, mountain passes, restricted ZTL city centre zones, remote island ferry connections — our experienced drivers navigate all of it professionally every day.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: "20+", label: "Major Cities Covered" },
                { stat: "30+", label: "Airports Serviced" },
                { stat: "10+", label: "Cruise Ports" },
                { stat: "All", label: "Italian Regions" },
              ].map((s, i) => (
                <div key={i} className="p-6 rounded-2xl border border-gray-100 text-center shadow-sm hover:shadow-md hover:border-gold transition-all">
                  <p className="text-4xl font-extrabold text-gold mb-1">{s.stat}</p>
                  <p className="text-navy font-semibold text-sm">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Major cities grid */}
      <section className="py-24 bg-navy font-inter">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-14">
            <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">City Guides</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">Major Cities We Serve</h2>
            <p className="text-gray-400 mt-4">Click any city for routes, pricing, and local taxi information.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {majorCities.map((c, i) => (
              <Link key={i} href={c.href} className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-gold hover:bg-white/10 transition-all group text-center">
                <MapPin className="w-6 h-6 text-gold mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <p className="font-bold text-white group-hover:text-gold transition-colors">{c.city}</p>
                <p className="text-gray-500 text-xs mt-1">{c.tag}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Airport links */}
      <section className="py-24 bg-[#F8F9FA] font-inter">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-14">
            <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">Airport Transfers</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy leading-tight">All Major Italian Airports</h2>
            <div className="w-20 h-1 bg-gold mx-auto mt-6" />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {airports.map((a, i) => (
              <Link key={i} href={a.href} className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-gold hover:shadow-md transition-all group">
                <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-navy group-hover:text-gold transition-colors">{a.name}</span>
                <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-gold ml-auto transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="py-20">
        <Coverage />
      </div>

      <CoverageDirectory />

      <FAQSection faqs={coverageFaqs} title="Coverage Area FAQs" badge="Destination Questions" />

      {/* CTA */}
      <section className="py-20 bg-navy font-inter relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#F4C430 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />
        <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
          <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">Ready to Book?</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Your Destination Is Covered</h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">Enter your route and get an instant fixed price. No hidden charges, no metered surprises.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <TaxiButton href="/book-now" className="md:scale-110">Get My Fixed Quote</TaxiButton>
            <a href="https://wa.me/923148932631" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 rounded-full bg-[#25D366] text-white font-bold hover:bg-[#1ebe57] transition-all shadow-lg hover:scale-105">
              <MessageCircle className="w-5 h-5" /> WhatsApp for Custom Route
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
