import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import ContactInfoCards from '@/components/ContactInfoCards';
import ContactFormSection from '@/components/ContactFormSection';
import FAQSection from '@/components/FAQSection';
import MapEmbed from '@/components/MapEmbed';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Metadata } from 'next';
import { CheckCircle, MessageCircle, Star, Clock, ChevronRight, MapPin, ShieldCheck, ThumbsUp, PhoneCall, ArrowRight } from 'lucide-react';
import TaxiButton from '@/components/TaxiButton';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Contact Us in Italy | Private Taxi Service",
  description: "Contact Italy Taxi Service for 24/7 private transfers across Italy. Serving Rome, Milan, Venice, Florence & Naples airports and city centers. Instant quotes via WhatsApp or email.",
  alternates: { canonical: "/contact" }
};

const contactSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.italytaxiservice.com/#localbusiness",
      "name": "Italy Taxi Service",
      "image": "https://www.italytaxiservice.com/images/hero.png",
      "telephone": "+923148932631",
      "email": "booking@italytaxiservice.com",
      "priceRange": "$$$",
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
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+923148932631",
        "contactType": "customer service",
        "areaServed": ["IT", "Rome", "Milan", "Venice", "Florence", "Naples"],
        "availableLanguage": ["English", "Italian"]
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How quickly will I receive a response to my enquiry?",
          "acceptedAnswer": { "@type": "Answer", "text": "Via WhatsApp, we typically respond within 5–15 minutes, 24 hours a day. For email enquiries, our target response time is within 2 hours during business hours and within 4 hours at night or on weekends." }
        },
        {
          "@type": "Question",
          "name": "Can I book a same-day transfer by contacting you directly?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. Same-day bookings are often possible when contacted via WhatsApp or phone. Please provide your pickup location, destination, time, and passenger count and we'll confirm availability immediately." }
        },
        {
          "@type": "Question",
          "name": "Do you handle corporate or group booking enquiries?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. Corporate accounts, wedding transportation, conference logistics, and group bookings of 10+ passengers are best handled directly by our team. Email us at booking@italytaxiservice.com with your event details." }
        }
      ]
    }
  ]
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
  { icon: <PhoneCall className="w-6 h-6 text-gold" />, channel: "Direct Call", time: "Instant Answer" },
];

const serviceAreas = [
  { city: "Rome", locations: "Fiumicino (FCO), Ciampino (CIA), Termini Station", img: "/images/hero.png" },
  { city: "Milan", locations: "Malpensa (MXP), Linate (LIN), Bergamo (BGY)", img: "/images/hero.png" },
  { city: "Venice", locations: "Marco Polo (VCE), Piazzale Roma, Mestre", img: "/images/hero.png" },
  { city: "Florence", locations: "Peretola (FLR), Santa Maria Novella", img: "/images/hero.png" }
];

export default function ContactPage() {
  return (
    <main className="min-h-screen font-inter pb-20 md:pb-0">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      <Navbar />

      <PageHero
        titleTop="Contact Italy Taxi Service"
        titleBottom="Book Your Private Transfer"
        description="Available 24 hours a day, 7 days a week. Instant quotes via WhatsApp, detailed enquiries by email, and real-time support for active bookings in Rome, Milan, Venice, and beyond."
        backgroundImage="/images/hero.png"
        breadcrumbs={[{ name: "Contact", item: "/contact" }]}
      />

      {/* Response time promises & Instant Contact Visibility */}
      <section className="py-16 bg-white font-inter">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold text-navy leading-tight mb-4">We're Always Here — How to Reach Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">For the fastest response regarding airport transfers, city tours, or corporate bookings, we highly recommend using WhatsApp.</p>
            <div className="w-20 h-1 bg-gold mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {responsePromises.map((r, i) => (
              <div key={i} className="p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-gold transition-all text-center group bg-white">
                <div className="flex justify-center mb-4 p-4 bg-gold/10 rounded-full w-fit mx-auto group-hover:bg-gold/20 transition-colors">{r.icon}</div>
                <h3 className="font-bold text-navy text-xl mb-1">{r.channel}</h3>
                <p className="text-gold font-extrabold text-2xl mb-2">{r.time}</p>
                <p className="text-gray-500 text-sm font-medium">{r.note}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="https://wa.me/923148932631?text=Hi%2C+I'd+like+to+book+a+private+taxi+in+Italy." target="_blank" rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex justify-center items-center gap-3 px-8 py-4 rounded-full bg-[#25D366] text-white font-bold text-lg hover:bg-[#1ebe57] transition-all shadow-xl hover:shadow-green-500/30 hover:-translate-y-1">
              <MessageCircle className="w-6 h-6" /> Chat With Us on WhatsApp
            </a>
            <a href="tel:+923148932631"
              className="w-full sm:w-auto inline-flex justify-center items-center gap-3 px-8 py-4 rounded-full bg-navy text-white font-bold text-lg hover:bg-navy/90 transition-all shadow-xl hover:-translate-y-1">
              <PhoneCall className="w-6 h-6" /> Call Us Directly
            </a>
          </div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className="py-12 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 text-center max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center gap-2">
              <div className="bg-white p-3 rounded-full shadow-sm"><ShieldCheck className="w-6 h-6 text-gold" /></div>
              <p className="font-bold text-navy text-sm">Licensed Drivers</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="bg-white p-3 rounded-full shadow-sm"><ThumbsUp className="w-6 h-6 text-gold" /></div>
              <p className="font-bold text-navy text-sm">5-Star Rated Service</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="bg-white p-3 rounded-full shadow-sm"><Clock className="w-6 h-6 text-gold" /></div>
              <p className="font-bold text-navy text-sm">Punctuality Guarantee</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="bg-white p-3 rounded-full shadow-sm"><CheckCircle className="w-6 h-6 text-gold" /></div>
              <p className="font-bold text-navy text-sm">Free Cancellation*</p>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[#F8F9FA]">
        <ContactInfoCards />
      </div>

      {/* Localized Services / Service Areas */}
      <section className="py-20 bg-white font-inter">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy leading-tight mb-4">Our Primary Service Hubs in Italy</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">We provide premium taxi and taxi services across all major Italian cities, airports, and train stations.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceAreas.map((area, idx) => (
              <div key={idx} className="group relative rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-gray-50">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-6 h-6 text-gold" />
                    <h3 className="font-bold text-xl text-navy">{area.city}</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-4 h-10">{area.locations}</p>
                  <Link href={`/city/${area.city.toLowerCase()}`} className="text-gold font-bold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
                    Explore Routes <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to include in your message */}
      <section className="py-20 bg-[#F8F9FA] font-inter border-y border-gray-200">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 p-8 md:p-12 bg-navy rounded-[2.5rem] text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3"><Star className="w-6 h-6 text-gold" /> Specialized Booking Requests</h3>
                <div className="space-y-6">
                  {[
                    { label: "Corporate Accounts", sub: "Monthly billing, priority booking, dedicated manager" },
                    { label: "Wedding Transportation", sub: "Multi-vehicle coordination, guest logistics" },
                    { label: "Conference Transfers", sub: "Group arrivals, delegate shuttle services" },
                    { label: "Long-Distance Custom Routes", sub: "Cross-country and cross-border transfers" },
                    { label: "Travel Agency Partnerships", sub: "API integration and bulk booking rates" },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-white text-lg">{item.label}</p>
                        <p className="text-gray-400 text-sm mt-1">{item.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-[3px] bg-gold rounded-full" />
                <p className="text-gold text-sm font-bold uppercase tracking-[0.2em]">Quick Guide</p>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-6 leading-tight">What to Include in Your Enquiry</h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">To receive your fixed, all-inclusive quote as quickly as possible, please include the following details in your WhatsApp message or contact form submission:</p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Exact Pickup Address",
                  "Destination Details",
                  "Travel Date & Time",
                  "Passenger Count",
                  "Luggage Amount",
                  "Flight No. (for Airports)",
                  "Child Seat Requests",
                  "Special Requirements"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                    <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="text-navy font-semibold text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactFormSection />
      <MapEmbed />

      <FAQSection faqs={contactFaqs} title="Contact & Booking FAQs" badge="Common Client Queries" />

      {/* Related Internal Links for SEO */}
      <section className="py-16 bg-navy font-inter text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Book Your Italian Transfer?</h2>
          <p className="text-gray-300 mb-10 max-w-2xl mx-auto">Fast, reliable, and comfortable. Browse our specific services or secure your ride instantly.</p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {[
              { label: "Airport Transfers", href: "/services/airport-transfers" },
              { label: "City-to-City", href: "/services/city-to-city" },
              { label: "Coverage Areas", href: "/coverage-areas" },
            ].map((l, i) => (
              <Link key={i} href={l.href} className="px-6 py-3 rounded-full border border-white/20 text-white font-medium text-sm hover:bg-gold hover:text-navy hover:border-gold transition-all duration-300">
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex justify-center">
            <TaxiButton href="/book-now">Request Instant Quote Now</TaxiButton>
          </div>
        </div>
      </section>


      <Footer />
    </main>
  );
}
