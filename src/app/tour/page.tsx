import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Compass, ChevronRight, Star, Clock, MapPin } from 'lucide-react';
import { tours } from '@/lib/page-data';
import FAQSection from '@/components/FAQSection';
import TaxiButton from '@/components/TaxiButton';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Private Sightseeing Tours Italy | Amalfi, Tuscany, Rome, Venice",
  description: "Book private taxi tours across Italy's most iconic destinations. Expert local drivers, flexible itineraries, fixed prices. Amalfi Coast, Tuscany, Vatican, Lake Como and more.",
  alternates: { canonical: "/tour" }
};

const tourFaqs = [
  { q: "How do I book a private sightseeing tour?", a: "Browse our tour pages and click 'Book This Tour', or contact us via WhatsApp with your preferred destination and date. We'll confirm availability and send a fixed price within minutes." },
  { q: "Can I combine multiple destinations in one day?", a: "Yes. For example, you can combine Pompeii and the Amalfi Coast in a single full-day tour from Naples, or see Pisa and Lucca in one trip from Florence. Let us know your wish list and we'll design the optimal route." },
  { q: "Are the tour prices per person or per vehicle?", a: "All tour prices are per vehicle — not per person. Whether you are a couple, a family of five, or a group of seven friends, the price for the vehicle remains the same fixed amount." },
  { q: "Can I book a shore excursion tour during a cruise layover?", a: "Absolutely. We specialise in cruise port excursions and build every shore tour around your ship's all-aboard time. We guarantee your return to the pier with a comfortable margin — always." },
  { q: "Can we stop for lunch and photography during tours?", a: "Yes — all our tours include time for meals, photography stops, and relaxed exploration. We schedule sufficient time at each location so you never feel rushed." },
  { q: "Are the tours available year-round?", a: "Yes. We operate tours 365 days a year. Summer tours often require more advance booking due to high demand. Winter tours are quieter and often offer better access to popular sites with smaller crowds." },
];

const tourHighlights = [
  { label: "Fixed Departure", desc: "Hotel or cruise port pickup" },
  { label: "Flexible Itinerary", desc: "Your pace, your priorities" },
  { label: "Per Vehicle", desc: "Not per person — great for groups" },
  { label: "All-Inclusive", desc: "No hidden tolls or extras" },
];

export default function ToursHubPage() {
  return (
    <main className="min-h-screen bg-gray-50 font-inter">
      <Navbar />

      <PageHero
        titleTop="Private Sightseeing Tours"
        titleBottom="Across Beautiful Italy"
        description="Explore Italy's most breathtaking landscapes and historic landmarks with a professional private driver. Custom itineraries, flexible pace, fixed prices."
        backgroundImage="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&q=80&w=2070"
        buttonText="Browse All Tours"
        breadcrumbs={[{ name: "Private Tours", item: "/tour" }]}
      />

      {/* Intro */}
      <section className="py-24 bg-white font-inter">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-gold" />
            <p className="text-gold text-sm font-bold uppercase tracking-[0.4em]">Why Private Tours</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-navy mb-8 leading-tight">Italy on Your Terms — Not a Tour Group's</h2>
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-5">
              <p className="text-gray-600 text-lg leading-relaxed">Italy is a country that rewards exploration — but it punishes rushed itineraries. The best experiences here are found by moving at your own pace, stopping when something catches your eye, and taking a scenic detour on a whim.</p>
              <p className="text-gray-600 text-lg leading-relaxed">Our private taxi tours give you all of that freedom. Your expert local driver picks you up at your hotel and takes you wherever you want to go — with insider knowledge of the best routes, viewpoints, and hidden spots that no group tour will ever show you.</p>
              <p className="text-gray-600 text-lg leading-relaxed">All tours are priced per vehicle, making them exceptional value for families, couples, and small groups. Every quote is fixed and all-inclusive — no surprises when you arrive at your destination.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {tourHighlights.map((h, i) => (
                <div key={i} className="p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-gold transition-all">
                  <p className="font-bold text-navy mb-1">{h.label}</p>
                  <p className="text-gray-500 text-sm">{h.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tour Cards */}
      <section className="py-24 bg-[#F8F9FA] font-inter">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-14">
            <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">Our Tour Collection</p>
            <h2 className="text-4xl font-extrabold text-navy text-center">Exclusive Private Tours</h2>
            <div className="w-20 h-1 bg-gold mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <Link
                key={tour.slug}
                href={`/tour/${tour.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:border-gold hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={tour.hero_image}
                    alt={tour.alt_text}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-6">
                    <span className="text-gold text-xs font-bold uppercase tracking-widest bg-navy/80 px-3 py-1 rounded-full">{tour.city}</span>
                  </div>
                  <div className="absolute top-4 right-4 flex gap-1">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-gold text-gold" />)}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-gold transition-colors">{tour.name}</h3>
                  <p className="text-gray-600 text-sm mb-6 line-clamp-2">{tour.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gold font-bold text-sm">
                      <Compass className="w-4 h-4" />
                      <span>View Full Tour</span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-gold group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular destinations */}
      <section className="py-20 bg-white font-inter">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">By Region</p>
            <h2 className="text-3xl font-extrabold text-navy">Popular Regions for Private Tours</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { region: "Rome & Lazio", note: "Colosseum, Vatican, Ostia Antica", href: "/city/rome" },
              { region: "Tuscany", note: "Siena, Chianti, Pisa, San Gimignano", href: "/city/florence" },
              { region: "Amalfi Coast", note: "Positano, Ravello, Sorrento", href: "/city/amalfi-coast" },
              { region: "Venice & Veneto", note: "Verona, Padua, Murano Island", href: "/city/venice" },
              { region: "Lake Como & Lombardy", note: "Bellagio, Varenna, Lecco", href: "/city/como" },
              { region: "Sicily & the South", note: "Taormina, Agrigento, Palermo", href: "/city/naples" },
            ].map((r, i) => (
              <Link key={i} href={r.href} className="p-6 border border-gray-100 rounded-2xl hover:border-gold hover:shadow-xl transition-all group bg-white">
                <MapPin className="w-5 h-5 text-gold mb-3 group-hover:scale-110 transition-transform" />
                <p className="font-bold text-navy group-hover:text-gold transition-colors">{r.region}</p>
                <p className="text-gray-500 text-xs mt-1">{r.note}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-[#F8F9FA] font-inter">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">Client Experiences</p>
            <h2 className="text-3xl font-extrabold text-navy">What Our Tour Guests Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Maria C.", country: "🇺🇸 USA", text: "The Amalfi Coast tour was the highlight of our entire Italy trip. Our driver knew every viewpoint and even arranged a boat trip recommendation.", date: "March 2025" },
              { name: "Oliver W.", country: "🇬🇧 UK", text: "Best way to see Tuscany. We stopped at three wineries, had lunch in Montalcino, and still made it back to Florence in time for dinner. Perfetto!", date: "Feb 2025", featured: true },
              { name: "Kenji T.", country: "🇯🇵 Japan", text: "The Vatican and Rome tour was exceptional. Driver explained the history at each location. It felt personal rather than a tourist experience.", date: "Jan 2025" },
            ].map((r, i) => (
              <div key={i} className={`p-8 rounded-[2rem] border shadow-xl relative bg-white ${r.featured ? 'border-gold shadow-gold/10' : 'border-gray-100'}`}>
                <div className="absolute -top-5 left-8 bg-gold text-white w-10 h-10 rounded-full flex items-center justify-center font-serif text-2xl">"</div>
                <div className="flex gap-1 mb-4 pt-4">{[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-gold text-gold" />)}</div>
                <p className="text-gray-700 leading-relaxed text-sm mb-6 italic">"{r.text}"</p>
                <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
                  <div><p className="font-bold text-navy text-sm">{r.name}</p><p className="text-xs text-gray-400">{r.country}</p></div>
                  <span className="text-xs text-gray-400">{r.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={tourFaqs} title="Private Tour FAQs" badge="Your Questions" />

      {/* Custom Tour CTA */}
      <section className="py-24 bg-navy font-inter relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#F4C430 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />
        <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
          <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">Don't See Your Tour?</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Craft Your Custom Italy Itinerary</h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">Tell us where you want to go and we'll build a bespoke tour around your interests, timings, and budget. No obligation, no extra charge for customization.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <TaxiButton href="/contact" className="md:scale-110">Request Custom Tour</TaxiButton>
            <Link href="/services/private-tours" className="flex items-center gap-2 px-8 py-4 rounded-full border border-white/30 text-white font-bold hover:border-gold hover:text-gold transition-all">
              <Clock className="w-5 h-5" /> Hourly Chauffeur Option
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
