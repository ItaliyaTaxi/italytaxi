import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import StorySection from '@/components/StorySection';
import MissionValues from '@/components/MissionValues';
import StatsSection from '@/components/StatsSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Metadata } from 'next';
import { CheckCircle, Star, MessageCircle, ChevronRight, Award, Heart, Globe, Clock } from 'lucide-react';
import TaxiButton from '@/components/TaxiButton';

export const metadata: Metadata = {
  title: "About Italy Taxi Service | Professional Private Transfers Since 2013",
  description: "Learn about Italy Taxi Service — Italy's premier private transfer operator. Over a decade of professional service, 500+ verified reviews, and a commitment to excellence in every journey.",
  alternates: { canonical: "/about-us" }
};

const aboutFaqs = [
  { q: "What makes Italy Taxi Service different from regular taxis?", a: "Unlike street taxis and metered cabs, every Italy Taxi Service booking is pre-arranged with a fixed price, a named driver, and a confirmed vehicle. You know exactly what you're paying before you travel — no meters, no surge pricing, no negotiation." },
  { q: "Are all your drivers licensed and insured?", a: "Yes. Every driver in our network holds a professional N.C.C. (Noleggio Con Conducente) license — Italy's professional private hire licence — and is fully insured according to Italian transport regulations. You are always in safe, legal hands." },
  { q: "How long has Italy Taxi Service been operating?", a: "We have been providing premium private transfers since 2013 — over a decade of service, thousands of satisfied clients, and a consistent 4.9-star rating across all review platforms." },
  { q: "Do you work with travel agencies and wedding planners?", a: "Yes. We maintain active partnerships with travel agencies, destination wedding coordinators, tour operators, and corporate travel managers across Europe. Contact us directly to discuss a partnership or affiliate arrangement." },
  { q: "What is your commitment to passenger safety?", a: "All vehicles undergo regular maintenance inspections and are registered with Italian transport authorities. Drivers are background-checked, professionally trained, and held to our internal service standards. Your safety is our highest priority." },
  { q: "Do you cover all regions of Italy?", a: "Yes. Our driver network spans the entire Italian peninsula — from the Alps in the north to Sicily in the south. We cover every major city, airport, cruise port, and tourist destination, ensuring reliable service wherever your Italian journey takes you." },
];

export default function AboutUsPage() {
  return (
    <main className="min-h-screen text-navy-rich font-inter">
      <Navbar />

      <PageHero
        titleTop="About Italy"
        titleBottom="Taxi Service"
        description="Over a decade of professional private transfers across Italy. Born from a passion for hospitality, built on a commitment to excellence in every mile."
        backgroundImage="/images/hero.png"
        breadcrumbs={[{ name: "About Us", item: "/about-us" }]}
      />

      <StorySection />
      <MissionValues />
      <StatsSection />

      {/* Core Values Deep-Dive */}
      <section className="py-24 bg-white font-inter">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">Our Foundation</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy leading-tight">The Principles That Guide Every Journey</h2>
            <div className="w-20 h-1 bg-gold mx-auto mt-6" />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Award className="w-8 h-8 text-gold" />,
                title: "Professional Excellence",
                body: "We recruit only the top tier of professional drivers — those with extensive Italian road experience, English language fluency, and a genuine commitment to customer service. Every driver represents the Italy Taxi Service brand in every interaction."
              },
              {
                icon: <Clock className="w-8 h-8 text-gold" />,
                title: "Reliability First",
                body: "We understand that a missed airport pickup or a late arrival to a wedding ceremony is more than an inconvenience — it can ruin a trip or a moment that can't be recovered. Punctuality is not just a goal for us; it's an operating standard we enforce across every booking."
              },
              {
                icon: <Heart className="w-8 h-8 text-gold" />,
                title: "Genuine Hospitality",
                body: "Italy is world-famous for its warmth and hospitality, and we carry that tradition into every journey. Our drivers are not just transporters — they are knowledgeable, friendly locals who genuinely want your time in Italy to be extraordinary."
              },
              {
                icon: <Globe className="w-8 h-8 text-gold" />,
                title: "Transparent Pricing",
                body: "Hidden charges erode trust. We provide fixed, all-inclusive quotes at the time of booking — no meters, no toll surcharges, no night premiums that appear at the end of the journey. What you see when you book is exactly what you pay."
              },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:border-gold transition-all group">
                <div className="mb-5 p-3 rounded-full bg-gold/10 w-fit">{item.icon}</div>
                <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-gold transition-colors">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Reviews */}
      <section className="py-24 bg-[#F8F9FA] font-inter">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">What Clients Say</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy leading-tight">Trusted by Thousands of Travellers</h2>
            <div className="flex items-center justify-center gap-1 mt-6">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-gold text-gold" />)}
              <span className="text-gray-500 text-sm ml-2">4.9 / 5 — 500+ verified reviews</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Rachel B.", country: "🇬🇧 UK", text: "Professional, punctual, and the vehicle was immaculate. Our driver met us at FCO and took us straight to our hotel in Rome. No stress whatsoever.", date: "March 2025" },
              { name: "David & Anna K.", country: "🇺🇸 USA", text: "Booked the Rome-to-Florence transfer for our family of five. Comfortable minivan, super friendly driver who even recommended a great lunch stop. Will book again.", date: "February 2025", featured: true },
              { name: "Thomas H.", country: "🇩🇪 Germany", text: "Used Italy Taxi Service for a full week of business meetings across Milan. Every pickup was exactly on time. Exceptional reliability.", date: "January 2025" },
            ].map((r, i) => (
              <div key={i} className={`p-8 rounded-[2rem] border shadow-xl relative ${r.featured ? 'border-gold shadow-gold/10' : 'border-gray-100 bg-white'}`}>
                <div className="absolute -top-5 left-8 bg-gold text-white w-10 h-10 rounded-full flex items-center justify-center font-serif text-2xl">"</div>
                <div className="flex gap-1 mb-4 pt-4 text-gold">{[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-gold" />)}</div>
                <p className="text-gray-700 leading-relaxed text-sm mb-6 italic">"{r.text}"</p>
                <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
                  <div>
                    <p className="font-bold text-navy text-sm">{r.name}</p>
                    <p className="text-xs text-gray-400">{r.country}</p>
                  </div>
                  <span className="text-xs text-gray-400">{r.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits List */}
      <section className="py-24 bg-white font-inter">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-14">
            <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">Why Travel With Us</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy leading-tight">Everything Included. Nothing Hidden.</h2>
            <div className="w-20 h-1 bg-gold mx-auto mt-6" />
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              "Licensed N.C.C. drivers on every booking",
              "Fixed prices confirmed the moment you book",
              "All tolls, motorway fees, and fuel included",
              "Meet-and-greet service at every airport",
              "Real-time flight tracking — adjusts automatically for delays",
              "60 minutes free waiting time at international airports",
              "Child seats and booster seats free on request",
              "24/7 customer support via WhatsApp",
              "English-speaking professional drivers across Italy",
              "Free cancellation up to 24 hours before travel",
              "Premium Mercedes-Benz sedans and minivans",
              "Corporate invoice and account services available",
            ].map((b, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-gold transition-all group">
                <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="text-navy font-semibold text-sm leading-snug">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={aboutFaqs} title="Questions About Our Company" badge="About Italy Taxi Service" />

      {/* Explore Services */}
      <section className="py-16 bg-[#F8F9FA] font-inter">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-6 text-center">What We Offer</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: "Airport Transfers", href: "/services/airport-transfers" },
              { label: "City-to-City Transfers", href: "/services/city-to-city" },
              { label: "Hotel Transfers", href: "/services/hotel-transfers" },
              { label: "Business Taxi", href: "/services/business-taxi" },
              { label: "Private Tours", href: "/services/private-tours" },
              { label: "Cruise Port Transfers", href: "/services/cruise-port-transfers" },
            ].map((l, i) => (
              <Link key={i} href={l.href} className="flex items-center gap-2 px-5 py-3 rounded-full border border-gray-200 text-navy font-semibold text-sm bg-white hover:border-gold hover:text-gold hover:shadow-md transition-all">
                <ChevronRight className="w-4 h-4" />{l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy font-inter relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#F4C430 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />
        <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
          <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">Start Your Journey</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Ready to Travel in Comfort Across Italy?</h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">Join thousands of travellers who trust Italy Taxi Service for every trip. Book now for instant confirmation.</p>
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
