import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import ServiceSchema from '@/components/ServiceSchema';
import Link from 'next/link';
import { Metadata } from 'next';
import { CheckCircle, ChevronRight, MessageCircle, Star, Clock, Car, Users } from 'lucide-react';
import TaxiButton from '@/components/TaxiButton';

export const metadata: Metadata = {
  title: "Event Transportation Italy | Corporate & Private Event Taxi Service",
  description: "Professional private taxi and transportation for corporate events, gala dinners, fashion shows, anniversary celebrations, and private parties across Italy. Luxury fleet, suited drivers, real-time logistics.",
  alternates: {
    canonical: "/services/wedding-events",
  },
  openGraph: {
    title: "Event Transportation Italy | Corporate & Private Event Taxi",
    description: "Luxury private taxi for corporate events, galas, and private parties across Italy. Suited drivers, multi-vehicle coordination, fixed pricing.",
    url: "https://www.italytaxiservice.com/services/wedding-events",
    images: [{ url: '/images/hero.webp', width: 1200, height: 630, alt: 'Italy Event Transportation' }],
  },
};

const eventTypes = [
  { title: "Corporate Gala Dinners", desc: "Multi-vehicle coordination for executive guest arrivals and departures at Italy's most prestigious venues — from Milanese rooftop restaurants to Roman palazzos." },
  { title: "Fashion Shows & Brand Events", desc: "Discreet, punctual transport for guests, models, and executives during Milan Fashion Week, Florence fashion events, and private brand launches." },
  { title: "Anniversary & Milestone Celebrations", desc: "Private group transfers for birthday milestones, anniversary dinners, retirement parties, and family reunion events at exclusive Italian venues." },
  { title: "Conference & Seminar Transfers", desc: "Coordinated shuttle services between hotels, conference centres, and gala venues for multi-day corporate programmes across Rome, Milan, and Venice." },
  { title: "Private Parties & Villa Events", desc: "Point-to-point guest transportation for private villa parties, estate events, and exclusive countryside celebrations in Tuscany, Lake Como, and Puglia." },
  { title: "Film & Production Transfers", desc: "On-call vehicles for production crew, talent transport, and location-to-location logistics during film shoots and commercial productions across Italy." },
];

const eventFaqs = [
  {
    q: "What types of events do you cover with private transportation?",
    a: "We provide tailored ground transportation for corporate galas, fashion shows, conference programmes, anniversary dinners, film productions, private parties, and any event requiring coordinated multi-vehicle logistics. Weddings are covered by our dedicated wedding transfers service."
  },
  {
    q: "Can you manage transfers for guests arriving from multiple airports?",
    a: "Yes — coordinating arrivals from multiple airports or hotels on the same event schedule is one of our core specialisms. We manage driver dispatch timing centrally and communicate proactively if any guest's travel is delayed."
  },
  {
    q: "How many vehicles can you deploy for a single event?",
    a: "Our network can deploy multiple vehicles simultaneously across Italy. For large events, we scale from 3 to 20+ vehicles with centrally coordinated logistics. Vehicle allocation, routing, and timing are managed as a unified operation."
  },
  {
    q: "Can drivers remain on standby at a venue during an event?",
    a: "Yes. We offer an 'at disposal' hourly service where one or more drivers remain at the venue throughout the event to accommodate spontaneous departures, VIP movements, and post-event returns."
  },
  {
    q: "Do event drivers dress formally?",
    a: "Yes. Drivers assigned to events wear a dark suit and tie as standard. For specific corporate uniform requirements or branded dress codes, contact us in advance and we will coordinate appropriately."
  },
  {
    q: "What is the lead time needed to book event transportation?",
    a: "For events requiring 3 or more vehicles, we recommend at least 4 weeks notice. For smaller events (1–2 vehicles), 48–72 hours is usually sufficient. Peak periods in Milan (Fashion Week) and Rome (June–September) require longer lead times."
  },
  {
    q: "Are receipts and VAT invoices available for corporate events?",
    a: "Yes. We issue professional VAT invoices suitable for corporate expense reporting. Corporate accounts with monthly billing are available for organisations requiring regular event transportation across Italy."
  },
];

export default function WeddingEventsPage() {
  const url = "https://www.italytaxiservice.com/services/wedding-events";

  return (
    <main className="min-h-screen font-inter">
      <ServiceSchema
        name="Corporate & Private Event Transportation Italy"
        description="Professional private taxi and multi-vehicle coordination for corporate galas, fashion events, conferences, and private parties across Italy."
        url={url}
      />
      <Navbar />

      <PageHero
        titleTop="Corporate & Private"
        titleBottom="Event Transportation in Italy"
        description="Luxury multi-vehicle logistics for corporate galas, fashion shows, conferences, and private celebrations across Rome, Milan, Florence, Venice, and beyond."
        backgroundImage="/images/hero.png"
        buttonText="Request Event Quote"
        breadcrumbs={[
          { name: "Services", item: "/services" },
          { name: "Event Transportation", item: "/services/wedding-events" }
        ]}
      />

      {/* Intro */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">Seamless Event Logistics</p>
              <h2 className="text-4xl font-extrabold text-navy mb-6 leading-tight">
                Ground Transportation That Elevates Every Event
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                Events in Italy demand transportation that reflects their standard. Whether you're hosting a corporate gala in a Milanese palazzo, managing guest logistics for a fashion week showcase, or coordinating arrivals for a multi-day conference, the quality of your ground transportation is visible to every attendee.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Italy Taxi Service deploys coordinated private vehicle fleets for events of any scale. We handle driver briefings, departure timing, venue access logistics, and real-time communication — so your event runs without a single transport delay.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Multi-Vehicle Coordination", "Suited Drivers", "ZTL Access", "Corporate Invoicing"].map((tag, i) => (
                  <span key={i} className="px-4 py-2 bg-gold/10 text-navy font-bold text-sm rounded-full border border-gold/20">{tag}</span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Users className="w-6 h-6 text-gold mx-auto mb-2" />, stat: "3–20+", label: "Vehicles Per Event" },
                { icon: <Star className="w-6 h-6 text-gold mx-auto mb-2" />, stat: "4.9★", label: "Client Rating" },
                { icon: <Clock className="w-6 h-6 text-gold mx-auto mb-2" />, stat: "24/7", label: "On-Event Support" },
                { icon: <Car className="w-6 h-6 text-gold mx-auto mb-2" />, stat: "Luxury", label: "Mercedes Fleet" },
              ].map((s, i) => (
                <div key={i} className="p-6 rounded-2xl border border-gray-100 text-center shadow-sm hover:border-gold hover:shadow-md transition-all">
                  {s.icon}
                  <p className="text-2xl font-extrabold text-navy">{s.stat}</p>
                  <p className="text-gray-500 text-sm font-semibold mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">Events We Cover</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy leading-tight">Event Transportation for Every Occasion</h2>
            <div className="w-20 h-1 bg-gold mx-auto mt-6" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {eventTypes.map((event, i) => (
              <div key={i} className="p-8 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:border-gold transition-all group">
                <h3 className="font-extrabold text-navy text-lg mb-3 group-hover:text-gold transition-colors">{event.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{event.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#F4C430 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <div className="text-center mb-14">
            <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">Standard Inclusions</p>
            <h2 className="text-4xl font-extrabold text-white">Everything Included in Every Event Booking</h2>
            <div className="w-20 h-1 bg-gold mx-auto mt-6" />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Dedicated event logistics coordinator on the day",
              "Formally suited drivers for all event bookings",
              "Multi-vehicle fleet coordination from a single point of contact",
              "ZTL-permitted access to historic and restricted venues",
              "Real-time vehicle tracking throughout the event",
              "Guest arrivals from airports, hotels, and train stations",
              "Post-event shuttle rotation management",
              "Corporate VAT invoices and expense documentation",
              "Standby 'at disposal' service during the event",
              "Proactive communication if any vehicle or guest is delayed",
              "Child seats and accessibility vehicles on request",
              "Multi-day event packages at preferential rates",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-gold transition-all group">
                <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="text-gray-300 font-medium text-sm leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-10">
            <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-3">Related Services</p>
            <h2 className="text-3xl font-extrabold text-navy">More Private Transfer Options</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: "Wedding Transfers", href: "/services/wedding-transfers" },
              { label: "Business Taxi", href: "/services/business-taxi" },
              { label: "Airport Transfers", href: "/services/airport-transfers" },
              { label: "Hourly Taxi Service", href: "/services/hourly-taxi" },
              { label: "Hotel Transfers", href: "/services/hotel-transfers" },
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

      <FAQSection faqs={eventFaqs} title="Event Transportation FAQs" badge="Event Planning" />

      {/* CTA */}
      <section className="py-20 bg-gold">
        <div className="container mx-auto px-6 max-w-4xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-navy text-2xl font-extrabold mb-1">Plan your event transportation in Italy</h3>
            <p className="text-navy/70 text-sm">Multi-vehicle logistics · Suited drivers · Corporate invoicing · 24/7 coordination</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <TaxiButton href="/contact">Request a Quote</TaxiButton>
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
