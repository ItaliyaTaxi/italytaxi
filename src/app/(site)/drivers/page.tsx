import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Metadata } from 'next';
import {
  BadgeCheck, Shield, Globe, Clock, Star, ChevronRight,
  Award, MessageCircle, CheckCircle, Car
} from 'lucide-react';
import TaxiButton from '@/components/TaxiButton';

export const metadata: Metadata = {
  title: "Professional Taxi Drivers in Italy | NCC-Licensed Private Chauffeurs",
  description: "Meet Italy Taxi Service's network of NCC-licensed, English-speaking professional drivers. Background-checked, insured, and experienced across all major Italian cities and airports.",
  alternates: {
    canonical: "/drivers",
  },
  openGraph: {
    title: "Professional Taxi Drivers in Italy | NCC-Licensed Chauffeurs",
    description: "NCC-licensed, English-speaking drivers for private taxi transfers across Italy. Background-checked, insured, and locally expert.",
    url: "https://www.italytaxiservice.com/drivers",
    images: [{ url: '/images/hero.webp', width: 1200, height: 630, alt: 'Italy Taxi Service Professional Drivers' }],
  },
};

const driverFaqs = [
  {
    q: "What qualifications do your drivers have?",
    a: "Every driver in our network holds a professional NCC (Noleggio Con Conducente) licence — Italy's regulated private hire authorisation. This requires background checks, municipal registration, vehicle inspections, and ongoing compliance with Italian transport law."
  },
  {
    q: "Do all your drivers speak English?",
    a: "Yes, we guarantee English-speaking drivers for all international clients. Many of our drivers also speak French, German, and Spanish. Clear communication is considered a core service standard, not an optional extra."
  },
  {
    q: "Can I request a specific driver if I've travelled with them before?",
    a: "While we can't always guarantee a specific driver due to scheduling and location, we record preferred driver requests on your account. Returning clients can note their preference and we do our best to honor it."
  },
  {
    q: "Are the drivers knowledgeable about local Italian attractions?",
    a: "Absolutely. Our drivers are local experts with deep knowledge of landmarks, restaurant recommendations, hidden gems, and the best routes to navigate restricted traffic zones (ZTL). They're part taxi driver, part local guide."
  },
  {
    q: "Is tipping the driver mandatory in Italy?",
    a: "Tipping is not mandatory. A typical tip for excellent service is 5–10% of the fare, but it is always discretionary. Your quoted fare is all-inclusive — no pressure, no expectation."
  },
  {
    q: "How are drivers vetted and monitored for quality?",
    a: "All drivers undergo identity verification, NCC licence validation, and reference checks before joining our network. We also collect post-ride feedback on every booking. Drivers below our quality threshold are removed from the platform."
  },
  {
    q: "Are your drivers trained for corporate and VIP travel?",
    a: "Yes. Drivers assigned to business accounts and VIP bookings receive additional briefing on discretion protocols, corporate dress standards, and executive vehicle presentation. We work with multinationals, embassies, and event management companies across Italy."
  },
];

const qualities = [
  {
    icon: <BadgeCheck className="w-7 h-7 text-gold" />,
    title: "NCC Professional Licence",
    body: "Every driver holds Italy's NCC (Noleggio Con Conducente) licence — the regulated professional private hire authorisation. NCC is not a standard driving licence. It requires background checks, municipal registration, and compliance with Italian transport law.",
  },
  {
    icon: <Globe className="w-7 h-7 text-gold" />,
    title: "English-Speaking — Guaranteed",
    body: "Clear communication is a service standard, not an afterthought. All drivers in our network speak English fluently. Many also speak French, German, or Spanish. You will always be understood and kept informed throughout your journey.",
  },
  {
    icon: <Shield className="w-7 h-7 text-gold" />,
    title: "Fully Insured & Background Checked",
    body: "Every driver carries full passenger liability insurance and has passed identity verification and reference checks before joining our network. Your safety is the non-negotiable foundation of everything we do.",
  },
  {
    icon: <Clock className="w-7 h-7 text-gold" />,
    title: "Punctuality as a Core Value",
    body: "Our network maintains a 99.2% on-time arrival rate across all confirmed bookings. Drivers use real-time traffic monitoring and build buffer time into every route calculation. Being late is not acceptable — being early is the goal.",
  },
  {
    icon: <Star className="w-7 h-7 text-gold" />,
    title: "Local Route Expertise",
    body: "Our drivers are local experts — not just GPS followers. They know how to navigate ZTL restricted zones, find hotel loading bays, access private villa driveways, and take the quickest route during peak tourist season.",
  },
  {
    icon: <Car className="w-7 h-7 text-gold" />,
    title: "Immaculate Vehicle Presentation",
    body: "Vehicles are cleaned before every booking. Interior and exterior standards are checked against our guidelines. Bottled water, phone charging cables, and climate control are set before you enter the vehicle.",
  },
];

const standards = [
  "Dark suit or professional uniform on all bookings",
  "Designated name sign at arrivals hall for every airport pickup",
  "Vehicle ready 10 minutes before the scheduled pickup",
  "Assistance with all luggage — loading and unloading",
  "Mobile number shared with passenger before pickup",
  "No phone calls during drives unless essential",
  "Discretion policy for corporate and VIP travel",
  "Child seats pre-installed at no extra cost on request",
  "Local restaurant and attraction knowledge on every route",
  "Post-journey customer satisfaction follow-up",
];

export default function DriversPage() {
  return (
    <main className="min-h-screen text-navy font-inter">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Professional Taxi Drivers in Italy",
            "provider": { "@id": "https://www.italytaxiservice.com/#organization" },
            "url": "https://www.italytaxiservice.com/drivers",
            "description": "NCC-licensed, English-speaking professional drivers for private taxi transfers across Italy. Background-checked, insured, and locally expert.",
            "areaServed": { "@type": "Country", "name": "Italy" }
          })
        }}
      />
      <Navbar />

      <PageHero
        titleTop="NCC-Licensed Professional"
        titleBottom="Drivers Across Italy"
        description="Every driver in our network holds a professional NCC licence, speaks English, is fully insured, and is committed to delivering a world-class private taxi experience."
        backgroundImage="/images/hero.png"
        breadcrumbs={[{ name: "Our Drivers", item: "/drivers" }]}
      />

      {/* Intro */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">The Difference That Matters</p>
              <h2 className="text-4xl font-extrabold text-navy mb-6 leading-tight">
                Excellence Behind the Wheel — Every Single Booking
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Our drivers are more than taxi operators. They are professionally licensed local experts who take personal pride in every journey — whether it's an airport transfer at 5am or a multi-city corporate itinerary.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Italy Taxi Service maintains a strict vetting process, ongoing quality monitoring, and a clear driver code of conduct. Every driver who meets a client represents the standards that have earned us a 4.9-star rating across 500+ verified reviews.
              </p>
              <div className="flex flex-wrap gap-3">
                {["NCC Licensed", "English Speaking", "Fully Insured", "Background Checked"].map((tag, i) => (
                  <span key={i} className="px-4 py-2 bg-gold/10 text-navy font-bold text-sm rounded-full border border-gold/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: "10+", label: "Years Operating" },
                { stat: "500+", label: "Verified Reviews" },
                { stat: "4.9★", label: "Average Rating" },
                { stat: "99.2%", label: "On-Time Rate" },
              ].map((s, i) => (
                <div key={i} className="p-6 rounded-2xl border border-gray-100 text-center shadow-sm hover:border-gold hover:shadow-md transition-all">
                  <p className="text-3xl font-extrabold text-gold mb-1">{s.stat}</p>
                  <p className="text-navy font-semibold text-sm">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Driver Qualities */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">Our Driver Standards</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy leading-tight">What Every Driver Brings to Your Journey</h2>
            <div className="w-20 h-1 bg-gold mx-auto mt-6" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {qualities.map((q, i) => (
              <div key={i} className="flex flex-col gap-4 p-8 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:border-gold transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center group-hover:bg-gold group-hover:[&>svg]:text-white transition-all shrink-0">
                  {q.icon}
                </div>
                <h3 className="font-extrabold text-navy text-lg group-hover:text-gold transition-colors">{q.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{q.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Standards Checklist */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#F4C430 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <div className="text-center mb-14">
            <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">Non-Negotiable Standards</p>
            <h2 className="text-4xl font-extrabold text-white">Our Driver Code of Conduct</h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto">These are not aspirational targets. They are baseline requirements for every driver on every booking.</p>
            <div className="w-20 h-1 bg-gold mx-auto mt-6" />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {standards.map((standard, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-gold transition-all group">
                <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="text-gray-300 font-medium text-sm leading-snug">{standard}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications + Trust */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-14">
            <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">Verified & Regulated</p>
            <h2 className="text-4xl font-extrabold text-navy">Why Our Drivers Are Different</h2>
            <div className="w-20 h-1 bg-gold mx-auto mt-6" />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Award className="w-8 h-8 text-gold" />,
                title: "NCC: Italy's Professional Private Hire Standard",
                body: "The NCC (Noleggio Con Conducente) licence is Italy's professional private hire authorisation — distinct from a standard taxi licence. It requires drivers to register with a municipality, maintain clean criminal records, carry commercial vehicle insurance, and pass vehicle inspection. When you book with us, every driver holding a wheel is NCC-compliant."
              },
              {
                icon: <Shield className="w-8 h-8 text-gold" />,
                title: "Continuous Quality Monitoring",
                body: "We collect structured feedback after every booking through our platform. Ratings below 4.5 trigger a review. Drivers with persistent quality issues are suspended from the network. This isn't just about customer satisfaction — it's about holding our service accountable to a measurable standard at scale."
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-5 p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:border-gold transition-all group">
                <div className="shrink-0 p-3 rounded-full bg-gold/10 w-fit h-fit group-hover:bg-gold transition-all group-hover:[&>svg]:text-white">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-gold transition-colors">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-16 bg-[#F8F9FA] border-y border-gray-100">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-10">
            <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-3">Explore Our Services</p>
            <h2 className="text-3xl font-extrabold text-navy">Book a Private Transfer in Italy</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Airport Transfers", href: "/services/airport-transfers" },
              { label: "City-to-City Transfers", href: "/services/city-to-city" },
              { label: "Business Taxi", href: "/services/business-taxi" },
              { label: "Private Tours", href: "/services/private-tours" },
              { label: "Hotel Transfers", href: "/services/hotel-transfers" },
              { label: "Wedding Transfers", href: "/services/wedding-transfers" },
              { label: "About Italy Taxi Service", href: "/about-us" },
              { label: "Book Now", href: "/book-now" },
            ].map((l, i) => (
              <Link key={i} href={l.href}
                className="flex items-center gap-2 p-4 bg-white rounded-xl border border-gray-100 hover:border-gold hover:shadow-md transition-all group text-sm font-semibold text-navy hover:text-gold">
                <ChevronRight className="w-4 h-4 text-gold shrink-0" />{l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={driverFaqs} title="Driver Standards FAQ" badge="Your Questions Answered" />

      {/* CTA */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#F4C430 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />
        <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
          <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">Travel With Confidence</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Book a Professional Private Taxi in Italy
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Fixed prices, English-speaking drivers, 24/7 availability — confirmed in under 2 minutes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <TaxiButton href="/book-now" className="md:scale-110">Book Your Transfer</TaxiButton>
            <a href="https://wa.me/923148932631" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 rounded-full bg-[#25D366] text-white font-bold hover:bg-[#1ebe57] transition-all shadow-lg hover:scale-105">
              <MessageCircle className="w-5 h-5" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
