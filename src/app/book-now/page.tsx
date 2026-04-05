import Navbar from '@/components/Navbar';
import BookingForm from '@/components/BookingForm';
import Footer from '@/components/Footer';
import FAQSection from '@/components/FAQSection';
import Link from 'next/link';
import { Metadata } from 'next';
import { CheckCircle, Shield, Clock, CreditCard, Star, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: "Book Your Private Taxi in Italy | Instant Confirmation",
  description: "Book a private taxi transfer in Italy in under 2 minutes. Fixed prices, instant confirmation, professional English-speaking drivers. Airport, hotel, city-to-city and tours.",
  alternates: { canonical: "/book-now" }
};

const bookingFaqs = [
  { q: "How long does it take to complete a booking?", a: "Less than 2 minutes. Fill in your pickup location, destination, date, and passenger count. You'll receive instant confirmation by email with your driver's details and your fixed price." },
  { q: "Can I modify or cancel my booking after submitting?", a: "Yes. Contact us via WhatsApp or email and we'll update your booking. Free cancellation is available up to 24 hours before your scheduled pickup." },
  { q: "Is my payment secure?", a: "Yes. Our booking platform uses industry-standard SSL encryption. Card payments are processed securely through our payment provider. We never store card details." },
  { q: "What information do I need to book?", a: "You'll need: your pickup address (or airport/hotel name), destination, travel date and time, number of passengers, and a contact email. If booking an airport pickup, your flight number is also needed." },
];

export default function BookNowPage() {
  return (
    <main className="min-h-screen bg-[#0F1C2E] font-inter">
      <Navbar />

      {/* Hero booking section */}
      <section className="pt-40 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#F4C430 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">Instant Quote & Confirmation</p>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-5 leading-tight">
              Book Your <span className="text-gold">Private Taxi</span> in Italy
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Fixed prices · Professional drivers · 24/7 availability. Fill out the form below and receive your confirmed booking in under 2 minutes.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <BookingForm />
          </div>
        </div>
      </section>

      {/* Trust signals */}
      <section className="py-20 bg-white font-inter">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-14">
            <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">Why Book With Us</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy leading-tight">Everything You Need to Know Before You Book</h2>
            <div className="w-20 h-1 bg-gold mx-auto mt-6" />
          </div>
          <div className="grid md:grid-cols-2 gap-5 mb-16">
            {[
              "Your price is fixed at booking — no meters, no surcharges",
              "Flight tracking included — delays are never your problem",
              "Meet-and-greet service inside the airport arrivals hall",
              "60 minutes free waiting time for international flights",
              "English-speaking professional licensed drivers",
              "Free cancellation up to 24 hours before pickup",
              "All tolls, motorway fees, and road taxes included",
              "Child seats available free on request",
              "Premium Mercedes-Benz fleet — sedans to 8-seat minivans",
              "Invoice and corporate billing available on request",
              "Secure online payment or cash to driver on arrival",
              "24/7 customer support via WhatsApp, email, and phone",
            ].map((b, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-gold transition-all group">
                <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="text-navy font-semibold text-sm leading-snug">{b}</span>
              </div>
            ))}
          </div>

          {/* Quick icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <Clock className="w-7 h-7 text-gold" />, label: "24/7 Available", sub: "Any time, any day" },
              { icon: <CreditCard className="w-7 h-7 text-gold" />, label: "Fixed Price", sub: "No hidden charges" },
              { icon: <Shield className="w-7 h-7 text-gold" />, label: "Secure Booking", sub: "SSL encrypted" },
              { icon: <Star className="w-7 h-7 text-gold fill-gold" />, label: "4.9★ Rated", sub: "500+ reviews" },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl border border-gray-100 text-center shadow-sm hover:shadow-md hover:border-gold transition-all">
                <div className="flex justify-center mb-3">{item.icon}</div>
                <p className="font-bold text-navy text-sm">{item.label}</p>
                <p className="text-gray-400 text-xs mt-1">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#F8F9FA] font-inter">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">Trusted by Travellers</p>
            <h2 className="text-3xl font-extrabold text-navy">What Guests Say About Booking With Us</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Emily R.", country: "🇬🇧 UK", text: "Booking took literally 3 minutes and the driver was waiting at FCO with my name on a sign. Couldn't have been easier.", date: "March 2025" },
              { name: "Francesco B.", country: "🇮🇹 Italy", text: "I use Italy Taxi Service every time I travel. The online booking system is perfect — straightforward, instant confirmation, and always reliable.", date: "Feb 2025", featured: true },
              { name: "Samantha K.", country: "🇦🇺 Australia", text: "Booked for our family of 5 from the airport to our hotel in Rome. The minivan was spotless and the price was exactly as quoted.", date: "Jan 2025" },
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

      <FAQSection faqs={bookingFaqs} title="Booking Questions" badge="Before You Book" />

      {/* Related Services */}
      <section className="py-16 bg-white font-inter">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-6">Browse Our Services</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: "Airport Transfers", href: "/services/airport-transfers" },
              { label: "City-to-City", href: "/services/city-to-city" },
              { label: "Hotel Transfers", href: "/services/hotel-transfers" },
              { label: "Private Tours", href: "/services/private-tours" },
              { label: "Business Taxi", href: "/services/business-taxi" },
              { label: "Cruise Port Transfers", href: "/services/cruise-port-transfers" },
            ].map((l, i) => (
              <Link key={i} href={l.href} className="flex items-center gap-2 px-5 py-3 rounded-full border border-gray-200 text-navy font-semibold text-sm bg-white hover:border-gold hover:text-gold hover:shadow-md transition-all">
                <ChevronRight className="w-4 h-4" />{l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
