import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import ContactInfoCards from '@/components/ContactInfoCards';
import ContactFormSection from '@/components/ContactFormSection';
import FAQSection from '@/components/FAQSection';
import MapEmbed from '@/components/MapEmbed';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Metadata } from 'next';
import { CheckCircle, MessageCircle, Star, Clock, ChevronRight } from 'lucide-react';
import TaxiButton from '@/components/TaxiButton';

export const metadata: Metadata = {
  title: "Contact Italy Taxi Service | 24/7 Support & Custom Quotes",
  description: "Get in touch with Italy Taxi Service for instant quotes, booking assistance, or corporate inquiries. Available 24/7 via WhatsApp, email, and phone across all of Italy.",
  alternates: { canonical: "/contact" }
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.italytaxiservice.com/#localbusiness",
  "name": "Italy Taxi Service",
  "image": "https://www.italytaxiservice.com/images/hero.png",
  "telephone": "+923148932631",
  "email": "booking@italytaxiservice.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Via dell'Aeroporto, s/n",
    "addressLocality": "Fiumicino",
    "addressRegion": "RM",
    "postalCode": "00054",
    "addressCountry": "IT"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 41.7999, "longitude": 12.2462 },
  "url": "https://www.italytaxiservice.com",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    "opens": "00:00",
    "closes": "23:59"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+923148932631",
    "contactType": "customer service",
    "areaServed": "IT",
    "availableLanguage": ["English","Italian"]
  }
};

const contactFaqs = [
  { q: "How quickly will I receive a response to my enquiry?", a: "Via WhatsApp, we typically respond within 5–15 minutes, 24 hours a day. For email enquiries, our target response time is within 2 hours during business hours and within 4 hours at night or on weekends." },
  { q: "Can I book a same-day transfer by contacting you directly?", a: "Yes. Same-day bookings are often possible when contacted via WhatsApp or phone. Please provide your pickup location, destination, time, and passenger count and we'll confirm availability immediately." },
  { q: "How do I get a custom quote for a route not on your website?", a: "Simply send us your exact pickup address, destination address, travel date, and number of passengers via WhatsApp or the contact form. We'll provide a fixed all-inclusive price within minutes." },
  { q: "Do you handle corporate or group booking enquiries?", a: "Yes. Corporate accounts, wedding transportation, conference logistics, and group bookings of 10+ passengers are best handled directly by our team. Email us at booking@italytaxiservice.com with your event details." },
  { q: "Can I modify an existing booking through your contact channels?", a: "Yes. Contact us via WhatsApp with your booking reference number and the changes you need. We handle modifications to pickup time, vehicle type, destination, and passenger count quickly." },
  { q: "What should I do if there is an issue during my transfer?", a: "Call or WhatsApp us immediately. Our operations team monitors all active transfers and can communicate directly with your driver to resolve any issue — route deviation, vehicle problem, or emergency — in real time." },
];

const responsePromises = [
  { icon: <MessageCircle className="w-6 h-6 text-gold" />, channel: "WhatsApp", time: "Under 15 minutes", note: "24/7 · Most recommended" },
  { icon: <Clock className="w-6 h-6 text-gold" />, channel: "Email", time: "Within 2 hours", note: "booking@italytaxiservice.com" },
  { icon: <Star className="w-6 h-6 text-gold" />, channel: "Contact Form", time: "Within 4 hours", note: "On this page below" },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen font-inter">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      <Navbar />

      <PageHero
        titleTop="Get in Touch With"
        titleBottom="Our Professional Team"
        description="Available 24 hours a day, 7 days a week. Instant quotes via WhatsApp, detailed enquiries by email, and real-time support for active bookings."
        backgroundImage="/images/hero.png"
        breadcrumbs={[{ name: "Contact", item: "/contact" }]}
      />

      {/* Response time promises */}
      <section className="py-16 bg-white font-inter">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">Response Times</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy leading-tight">We're Always Here — How to Reach Us</h2>
            <div className="w-20 h-1 bg-gold mx-auto mt-6" />
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {responsePromises.map((r, i) => (
              <div key={i} className="p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-gold transition-all text-center group">
                <div className="flex justify-center mb-4 p-3 bg-gold/10 rounded-full w-fit mx-auto group-hover:bg-gold/20 transition-colors">{r.icon}</div>
                <p className="font-bold text-navy text-lg mb-1">{r.channel}</p>
                <p className="text-gold font-extrabold text-2xl mb-2">{r.time}</p>
                <p className="text-gray-500 text-xs">{r.note}</p>
              </div>
            ))}
          </div>
          {/* WhatsApp button */}
          <div className="text-center">
            <a href="https://wa.me/923148932631?text=Hi%2C+I'd+like+to+book+a+private+taxi+in+Italy." target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-[#25D366] text-white font-bold text-lg hover:bg-[#1ebe57] transition-all shadow-2xl hover:shadow-green-500/30 hover:scale-105">
              <MessageCircle className="w-6 h-6" /> Chat With Us on WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      <div className="bg-[#F8F9FA]">
        <ContactInfoCards />
      </div>

      {/* What to include in your message */}
      <section className="py-20 bg-white font-inter">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[2px] bg-gold" />
                <p className="text-gold text-sm font-bold uppercase tracking-[0.4em]">Quick Guide</p>
              </div>
              <h2 className="text-3xl font-extrabold text-navy mb-6 leading-tight">What to Include in Your Booking Request</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">To receive your fixed price quote as quickly as possible, include the following details in your message or form submission:</p>
              <div className="space-y-4">
                {[
                  "Pickup address (hotel name, airport code, or full address)",
                  "Destination (hotel name or full address)",
                  "Travel date and preferred pickup time",
                  "Number of passengers",
                  "Number of suitcases or bags",
                  "Flight number (for airport pickups)",
                  "Any special requirements (child seats, Wi-Fi, etc.)"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8 bg-navy rounded-[2rem] text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#F4C430 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }} />
              <div className="relative z-10">
                <p className="text-gold text-sm font-bold uppercase tracking-widest mb-4">We Also Handle</p>
                <div className="space-y-4">
                  {[
                    { label: "Corporate Accounts", sub: "Monthly billing, priority booking, dedicated manager" },
                    { label: "Wedding Transportation", sub: "Multi-vehicle coordination, guest logistics" },
                    { label: "Conference Transfers", sub: "Group arrivals, delegate shuttle services" },
                    { label: "Long-Distance Custom Routes", sub: "Cross-country and cross-border transfers" },
                    { label: "Travel Agency Partnerships", sub: "API integration and bulk booking rates" },
                    { label: "Emergency Same-Day Bookings", sub: "Subject to driver availability — call us directly" },
                  ].map((item, i) => (
                    <div key={i} className="border-b border-white/10 pb-4 last:border-0">
                      <p className="font-bold text-white">{item.label}</p>
                      <p className="text-gray-400 text-xs mt-0.5">{item.sub}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactFormSection />
      <MapEmbed />

      <FAQSection faqs={contactFaqs} title="Contact & Support FAQs" badge="Getting in Touch" />

      {/* Related links */}
      <section className="py-16 bg-[#F8F9FA] font-inter">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-6">Ready to Book?</p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[
              { label: "Book Now", href: "/book-now" },
              { label: "Airport Transfers", href: "/services/airport-transfers" },
              { label: "City-to-City", href: "/services/city-to-city" },
              { label: "FAQ", href: "/faq" },
              { label: "Coverage Areas", href: "/coverage-areas" },
            ].map((l, i) => (
              <Link key={i} href={l.href} className="flex items-center gap-2 px-5 py-3 rounded-full border border-gray-200 text-navy font-semibold text-sm bg-white hover:border-gold hover:text-gold hover:shadow-md transition-all">
                <ChevronRight className="w-4 h-4" />{l.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <TaxiButton href="/book-now">Book Now — Instant Confirmation</TaxiButton>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
