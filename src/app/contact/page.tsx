import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import ContactInfoCards from '@/components/ContactInfoCards';
import ContactFormSection from '@/components/ContactFormSection';
import FAQSection from '@/components/FAQSection';
import CTA from '@/components/CTA';
import MapEmbed from '@/components/MapEmbed';
import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Us | Italy Taxi Service | 24/7 Support",
  description: "Get in touch with ItaliaRide for custom taxi quotes, booking assistance, or any inquiries about our airport and city transfer services in Italy.",
  alternates: {
    canonical: "/contact",
  }
};

export default function ContactPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "@id": "https://www.italytaxiservice.com/#organization",
    "name": "Italy Taxi Service",
    "image": "https://www.italytaxiservice.com/images/hero.png",
    "url": "https://www.italytaxiservice.com",
    "telephone": "+923148932631",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Via del Corso",
      "addressLocality": "Rome",
      "addressRegion": "RM",
      "postalCode": "00186",
      "addressCountry": "IT"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.8902,
      "longitude": 12.4922
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+923148932631",
      "contactType": "customer service",
      "areaServed": "IT",
      "availableLanguage": ["English", "Italian"]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "128",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "James Wilson"
        },
        "datePublished": "2024-01-01",
        "reviewBody": "Exceptional service from Fiumicino to our hotel. The driver was waiting for us with a clear sign, the Mercedes S-Class was spotless, and the ride was perfectly smooth. Highly recommended!",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Sarah Jenkins"
        },
        "datePublished": "2024-02-15",
        "reviewBody": "Professional and punctual. We used ItaliaRide for our wedding group transport and they were flawless. The minivans were very comfortable.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5",
          "worstRating": "1"
        }
      }
    ]
  };

  const contactFaqs = [
    {
      q: "How can I request a custom taxi quote?",
      a: "You can use our online contact form, send us an email at booking@italytaxiservice.com, or message us directly on WhatsApp for an immediate response."
    },
    {
      q: "Is your customer support team available 24/7?",
      a: "Yes, our support team is available around the clock to assist you with active bookings, last-minute changes, or emergency assistance across Italy."
    },
    {
      q: "Can I book a taxi through WhatsApp?",
      a: "Absolutely! WhatsApp is one of our most popular booking channels. Just send us your pickup and drop-off details, and we'll provide a fixed quote."
    },
    {
      q: "Do you offer same-day booking services?",
      a: "While we recommend booking at least 24 hours in advance, we do accommodate same-day requests based on driver availability. Please call or WhatsApp us for urgent rides."
    },
    {
      q: "How do I change or cancel my existing booking?",
      a: "You can modify or cancel your booking by contacting our support team via email or WhatsApp. Please refer to our terms and conditions for our cancellation policy."
    }
  ];

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Navbar />

      <div className="container mx-auto px-6 pt-10">
        <Breadcrumb 
          items={[
            { name: "Contact", item: "/contact" }
          ]} 
        />
      </div>

      <PageHero
        titleTop="Get in Touch With"
        titleBottom="Our Professional Team"
        description="Available 24/7 for airport transfers and city rides across Italy. We ensure that every traveler's request is handled with world-class precision."
        backgroundImage="/images/hero.png"
      />

      <div className="bg-[#F8F9FA]">
        <ContactInfoCards />
      </div>

      <ContactFormSection />

      <MapEmbed />

      <FAQSection faqs={contactFaqs} title="Contact & Support FAQs" />

      <CTA />

      <Footer />
    </main>
  );
}


