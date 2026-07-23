import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import Footer from '@/components/Footer';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import { Plane, ChevronRight, Shield, Clock, CheckCircle, Star, MessageCircle } from 'lucide-react';
import TaxiButton from '@/components/TaxiButton';

export const metadata: Metadata = {
  title: "Airport Transfers Italy | Private Taxi to All Italian Airports",
  description: "Book professional private airport taxi transfers to and from all major Italian airports. Fixed prices, meet & greet service, flight tracking — FCO, MXP, VCE, NAP, FLR and 30+ airports.",
  alternates: {
    canonical: "/airport-transfer",
  },
  openGraph: {
    title: "Airport Transfers Italy | Private Taxi to All Airports",
    description: "Professional fixed-price private taxi transfers to all Italian airports. Flight tracking, meet & greet, 24/7 availability.",
    url: "https://www.italytaxiservice.com/airport-transfer",
    images: [{ url: '/images/hero.webp', width: 1200, height: 630, alt: 'Italy Airport Transfers' }],
  },
};

const airports = [
  { name: "Rome Fiumicino (FCO)", link: "/airport/rome-fiumicino", code: "FCO", city: "Rome" },
  { name: "Milan Malpensa (MXP)", link: "/airport/milan-malpensa", code: "MXP", city: "Milan" },
  { name: "Venice Marco Polo (VCE)", link: "/airport/venice", code: "VCE", city: "Venice" },
  { name: "Naples Capodichino (NAP)", link: "/airport/naples", code: "NAP", city: "Naples" },
  { name: "Florence Peretola (FLR)", link: "/airport/florence", code: "FLR", city: "Florence" },
  { name: "Milan Linate (LIN)", link: "/airport/milan-linate", code: "LIN", city: "Milan" },
  { name: "Rome Ciampino (CIA)", link: "/airport/rome-ciampino", code: "CIA", city: "Rome" },
  { name: "Catania Fontanarossa (CTA)", link: "/airport/catania-fontanarossa", code: "CTA", city: "Sicily" },
  { name: "Bologna Guglielmo Marconi (BLQ)", link: "/airport/bologna", code: "BLQ", city: "Bologna" },
];

const airportFaqs = [
  { q: "How does meet and greet work at Italian airports?", a: "Your driver waits inside the arrivals hall holding a sign with your name. You won't need to search for a taxi rank — just walk out of customs and your driver will find you." },
  { q: "What happens if my flight is delayed?", a: "We track all flights in real-time. Your driver automatically adjusts their arrival to match your actual landing time. Delays are never charged extra — it's our standard service." },
  { q: "How much free waiting time is included?", a: "We include 60 minutes of complimentary waiting after your actual landing time for international flights, and 30 minutes for domestic arrivals. This covers immigration, baggage reclaim, and customs." },
  { q: "Can I book airport transfers for a large group?", a: "Yes. We offer Mercedes V-Class minivans (up to 8 passengers) and Sprinter group vehicles. Simply specify your passenger count at booking and we assign the right vehicle." },
  { q: "Are child seats available for airport pickups?", a: "Yes — infant carriers, forward-facing child seats, and booster seats are provided free on request. Specify your child's age and weight when booking." },
  { q: "Which Italian airports do you cover?", a: "We cover all major airports: Rome FCO & CIA, Milan MXP & LIN, Venice VCE, Florence FLR, Naples NAP, Bologna BLQ, Catania CTA, Palermo PMO, Bari BRI, Turin TRN, Genoa GOA, and 20+ regional airports across Italy." },
];

export default function AirportTransfersPage() {
  return (
    <main className="min-h-screen bg-white font-inter">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Italy Airport Transfer Service",
            "provider": { "@id": "https://www.italytaxiservice.com/#organization" },
            "areaServed": { "@type": "Country", "name": "Italy" },
            "url": "https://www.italytaxiservice.com/airport-transfer",
            "description": "Professional private airport taxi transfers to and from all major Italian airports. Fixed prices, meet & greet, and real-time flight tracking.",
            "serviceType": "Airport Transfer"
          })
        }}
      />
      <Navbar />

      <PageHero
        titleTop="Private Airport Transfers"
        titleBottom="Across All of Italy"
        description="Professional meet & greet service at every major Italian airport. Fixed prices, real-time flight tracking, and luxury vehicles — 24 hours a day."
        backgroundImage="/images/hero.png"
        buttonText="Book Airport Transfer"
        breadcrumbs={[
          { name: "Services", item: "/services" },
          { name: "Airport Transfers", item: "/airport-transfer" }
        ]}
      />

      {/* Trust Signals */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: <Plane className="w-6 h-6 text-gold mx-auto mb-2" />, stat: "30+", label: "Airports Covered" },
              { icon: <Clock className="w-6 h-6 text-gold mx-auto mb-2" />, stat: "60 min", label: "Free Wait Time" },
              { icon: <Shield className="w-6 h-6 text-gold mx-auto mb-2" />, stat: "NCC", label: "Licensed Drivers" },
              { icon: <Star className="w-6 h-6 text-gold mx-auto mb-2" />, stat: "4.9★", label: "Average Rating" },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl border border-gray-100 bg-[#F8F9FA] hover:border-gold transition-all">
                {item.icon}
                <p className="text-2xl font-extrabold text-navy">{item.stat}</p>
                <p className="text-gray-500 text-sm font-semibold mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-14">
            <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">Every Booking Includes</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy">Premium Airport Transfer Service</h2>
            <div className="w-20 h-1 bg-gold mx-auto mt-6" />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Meet & greet inside the arrivals hall with name sign",
              "Real-time flight tracking — driver adjusts for any delay",
              "60 minutes free waiting time for international flights",
              "All motorway tolls and airport parking included",
              "Child seats and booster seats at no extra charge",
              "Professional NCC-licensed English-speaking drivers",
              "Fixed price confirmed at booking — no meters",
              "24/7 WhatsApp and email support",
              "Free cancellation up to 24 hours before pickup",
              "Luxury Mercedes-Benz sedans and minivans",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-5 rounded-2xl border border-gray-100 bg-white shadow-sm hover:border-gold hover:shadow-md transition-all group">
                <CheckCircle className="w-5 h-5 text-gold shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-navy font-semibold text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Airport Directory */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">Major Airports</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy">Italian Airport Transfers</h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">Click any airport for routes, pricing, and specific pickup information.</p>
            <div className="w-20 h-1 bg-gold mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {airports.map((airport, idx) => (
              <Link
                key={idx}
                href={airport.link}
                className="group bg-white p-7 rounded-2xl shadow-sm border border-gray-100 hover:border-gold hover:shadow-xl transition-all duration-300 flex items-center justify-between"
              >
                <div className="flex items-center gap-5">
                  <div className="p-3 rounded-xl bg-gold/10 text-gold group-hover:bg-gold group-hover:text-white transition-colors shrink-0">
                    <Plane className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-base font-bold text-navy group-hover:text-gold transition-colors block">{airport.name}</span>
                    <span className="text-xs text-gray-400 font-semibold">{airport.city}</span>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-gold group-hover:translate-x-1 transition-all shrink-0" />
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm mb-4">Don't see your airport? We cover 30+ airports across Italy.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 text-gold font-bold hover:text-navy transition-colors border-b-2 border-gold/30 hover:border-navy pb-1">
              Request a Custom Airport Quote <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-navy">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-14">
            <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">Simple Process</p>
            <h2 className="text-4xl font-extrabold text-white">How Your Airport Transfer Works</h2>
            <div className="w-20 h-1 bg-gold mx-auto mt-6" />
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Book Online", body: "Complete our form in under 2 minutes. Enter your flight number, route, and date." },
              { step: "02", title: "Get Confirmed", body: "Instant email with driver name, vehicle details, and your meeting point inside arrivals." },
              { step: "03", title: "We Track Your Flight", body: "Our team monitors your flight in real-time. The driver departs timed to your actual landing." },
              { step: "04", title: "Travel Comfortably", body: "Your driver meets you inside the terminal with a name sign and handles your luggage." },
            ].map((s, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-gold transition-all">
                <div className="text-5xl font-extrabold text-gold/20 mb-3">{s.step}</div>
                <h3 className="text-white font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-10">
            <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-3">More Services</p>
            <h2 className="text-3xl font-extrabold text-navy">Other Transfer Services in Italy</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "City-to-City Transfers", href: "/services/city-to-city" },
              { label: "Cruise Port Transfers", href: "/services/cruise-port-transfers" },
              { label: "Private Tours", href: "/services/private-tours" },
              { label: "Hotel Transfers", href: "/services/hotel-transfers" },
              { label: "Business Taxi", href: "/services/business-taxi" },
              { label: "Rome Airport Taxi", href: "/airport/rome-fiumicino" },
              { label: "Milan Airport Taxi", href: "/airport/milan-malpensa" },
              { label: "Book Now", href: "/book-now" },
            ].map((l, i) => (
              <Link key={i} href={l.href}
                className="flex items-center gap-2 p-4 bg-[#F8F9FA] rounded-xl border border-gray-100 hover:border-gold hover:shadow-md transition-all group text-sm font-semibold text-navy hover:text-gold">
                <ChevronRight className="w-4 h-4 text-gold shrink-0" />{l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={airportFaqs} title="Airport Transfer FAQs" badge="Your Questions Answered" />

      {/* CTA */}
      <section className="py-20 bg-gold">
        <div className="container mx-auto px-6 max-w-4xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-navy text-2xl font-extrabold mb-1">Ready to book your airport transfer?</h3>
            <p className="text-navy/70 text-sm">Fixed prices · Meet & greet · Flight tracking · 24/7 support</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <TaxiButton href="/book-now">Book Now</TaxiButton>
            <a href="https://wa.me/923148932631" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-navy text-white font-bold hover:bg-white hover:text-navy transition-all text-sm">
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

