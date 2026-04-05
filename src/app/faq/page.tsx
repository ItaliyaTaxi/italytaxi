import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Metadata } from 'next';
import { CheckCircle, MessageCircle, Clock, Shield, CreditCard, Users, Star, ChevronRight } from 'lucide-react';
import TaxiButton from '@/components/TaxiButton';

export const metadata: Metadata = {
  title: "Taxi Service FAQ | Helpful Information",
  description: "Complete FAQ guide to Italy Taxi Service. Learn about airport transfers, pricing, cancellation, child seats, corporate accounts, and how to book across Italy.",
  alternates: { canonical: "/faq" }
};

const generalFaqs = [
  { q: "How do I book a private taxi transfer in Italy?", a: "Book directly through our online booking form, send an email to booking@italytaxiservice.com, or message us on WhatsApp. You'll receive instant confirmation with your driver's details, vehicle information, and a fixed price." },
  { q: "Is the price per person or per vehicle?", a: "All prices are per vehicle, not per person. Whether you book a sedan for 1 or a minivan for 7, the fare remains the same fixed price agreed at booking — great value for families and groups." },
  { q: "When and how do I pay for my transfer?", a: "Payment options are confirmed at booking. We accept credit and debit cards online, and cash or card payment to your driver at journey end. There are no hidden fees — what you paid is what you owe." },
  { q: "Do you provide meet-and-greet at the airport?", a: "Yes. For all airport pickups, your driver waits inside the arrivals hall holding a sign with your name. You won't need to look for a taxi outside — your driver will find you." },
  { q: "What is your cancellation policy?", a: "We offer free cancellation up to 24 hours before your scheduled pickup. Cancellations between 24 and 6 hours may incur a 50% charge. Cancellations within 6 hours of pickup are non-refundable." },
];

const airportFaqs = [
  { q: "Do you track flight delays automatically?", a: "Yes. We monitor all flights in real time. If your plane is delayed or arrives early, your driver automatically adjusts the pickup time at no extra cost to you." },
  { q: "How long is the free waiting time at the airport?", a: "We include 60 minutes of complimentary waiting after your actual landing time for international flights, and 30 minutes for domestic. This accounts for immigration, baggage, and customs." },
  { q: "Which Italian airports do you cover?", a: "We operate from all major Italian airports: Rome FCO & CIA, Milan MXP & LIN, Venice VCE, Florence FLR, Naples NAP, Catania, Palermo, Bologna, Bari, and all regional airports." },
  { q: "Can I book a return airport transfer at the same time?", a: "Yes — and we recommend it. Book both legs together for guaranteed availability and streamlined coordination. Simply add your return date and flight details during the booking process." },
];

const vehicleFaqs = [
  { q: "Are child seats available?", a: "Yes. Infant carriers, forward-facing child seats, and booster seats are provided free of charge on request. Specify the age and weight of each child when booking and the correct equipment will be pre-installed." },
  { q: "What vehicles are available?", a: "Our fleet includes: Economy Sedans (up to 3 passengers), Business Sedans (up to 3 passengers, higher spec), Minivans (up to 7–8 passengers), and SUVs. We match the vehicle to your group size and luggage count automatically." },
  { q: "Is Wi-Fi available in the vehicles?", a: "Wi-Fi is available in our executive and business-class vehicles on request. Please note this requirement in your booking and we'll assign an appropriately equipped car." },
  { q: "Can you accommodate large amounts of luggage?", a: "Yes. Our sedans fit 2 large suitcases plus cabin bags. Minivans accommodate full cruise or ski luggage. Let us know your bag count when booking and we'll ensure the right vehicle is assigned." },
];

const pricingFaqs = [
  { q: "Are there any hidden charges like night surcharges or toll fees?", a: "No. Every quote is fully all-inclusive. Tolls, motorway fees, fuel, luggage, and waiting time within the grace period are all included. Night and holiday transfers are quoted transparently — no surprise charges on arrival." },
  { q: "How do I get a price for a route not listed on the website?", a: "Contact us via WhatsApp or the contact form with your exact pickup and drop-off addresses. We'll provide a custom fixed quote within minutes." },
  { q: "Do you offer group discounts?", a: "For large groups (8+ passengers) and corporate accounts, we offer negotiated rates. Contact our team directly to discuss options." },
  { q: "Can I modify my booking after confirmation?", a: "Yes. Contact us via WhatsApp or email as early as possible. We accommodate modifications to pickup time, vehicle type, and passenger count subject to availability." },
];

export default function FaqPage() {
  return (
    <main className="min-h-screen text-navy-rich font-inter">
      <Navbar />

      <PageHero
        titleTop="Frequently Asked"
        titleBottom="Questions — Italy Taxi Service"
        description="Everything you need to know about booking, pricing, vehicles, airports, and our service across Italy. Can't find your answer? Contact us 24/7."
        backgroundImage="/images/hero.png"
        breadcrumbs={[{ name: "FAQ", item: "/faq" }]}
      />

      {/* Why Choose Us Summary */}
      <section className="py-20 bg-white font-inter">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-14">
            <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">Quick Overview</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy">What Makes Us Different</h2>
            <div className="w-20 h-1 bg-gold mx-auto mt-6" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Clock className="w-6 h-6 text-gold" />, title: "24/7 Availability", desc: "Early morning flights and midnight arrivals — we're always there." },
              { icon: <CreditCard className="w-6 h-6 text-gold" />, title: "Fixed Pricing", desc: "Your price is locked at booking. No meters, no surprises." },
              { icon: <Shield className="w-6 h-6 text-gold" />, title: "Licensed & Insured", desc: "All drivers hold professional N.C.C. licenses and full insurance." },
              { icon: <Users className="w-6 h-6 text-gold" />, title: "English-Speaking", desc: "Communicate easily with every member of our driver network." },
              { icon: <CheckCircle className="w-6 h-6 text-gold" />, title: "Flight Tracking", desc: "We monitor arrivals in real-time. Delays are never your problem." },
              { icon: <Star className="w-6 h-6 text-gold" />, title: "4.9★ Rated", desc: "Consistent 5-star service across 500+ verified guest reviews." },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-gold transition-all">
                <div className="mb-4">{item.icon}</div>
                <h3 className="font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <FAQSection faqs={generalFaqs} title="General Booking Questions" badge="Getting Started" />
      <FAQSection faqs={airportFaqs} title="Airport Transfer Questions" badge="Airports & Arrivals" />
      <FAQSection faqs={vehicleFaqs} title="Vehicle & Comfort Questions" badge="Fleet & Equipment" />
      <FAQSection faqs={pricingFaqs} title="Pricing & Payment Questions" badge="Rates & Charges" />

      {/* Still have questions */}
      <section className="py-20 bg-navy font-inter relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#F4C430 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />
        <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
          <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">Still Have Questions?</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">We're Available 24/7</h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">Can't find what you're looking for? Our team responds within minutes via WhatsApp or email — any time, day or night.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <TaxiButton href="/contact">Send Us a Message</TaxiButton>
            <a href="https://wa.me/923148932631?text=Hi%2C+I+have+a+question+about+booking+a+taxi+in+Italy." target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 rounded-full bg-[#25D366] text-white font-bold hover:bg-[#1ebe57] transition-all shadow-lg hover:scale-105">
              <MessageCircle className="w-5 h-5" /> WhatsApp Us Now
            </a>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {[
              { label: "Airport Transfers", href: "/services/airport-transfers" },
              { label: "City-to-City", href: "/services/city-to-city" },
              { label: "Hotel Transfers", href: "/services/hotel-transfers" },
              { label: "Private Tours", href: "/services/private-tours" },
              { label: "Book Now", href: "/book-now" },
            ].map((l, i) => (
              <Link key={i} href={l.href} className="flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 text-white text-sm hover:border-gold hover:text-gold transition-all">
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
