import React from 'react';

const JsonLd = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.italytaxiservice.com/#organization",
    "name": "Italy Taxi Service",
    "url": "https://www.italytaxiservice.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.italytaxiservice.com/icon.svg",
      "width": 200,
      "height": 60
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+39-02-0000-0000",
      "contactType": "customer service",
      "areaServed": "IT",
      "availableLanguage": ["English", "Italian"]
    },
    "sameAs": [
      "https://www.facebook.com/italytaxiservice",
      "https://www.instagram.com/italytaxiservice",
      "https://www.tiktok.com/@italytaxiservice"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "TaxiService"],
    "@id": "https://www.italytaxiservice.com/#localbusiness",
    "name": "Italy Taxi Service",
    "description": "Professional private taxi and transfer service across Italy. NCC-licensed drivers, fixed prices, airport transfers, city-to-city rides, and private tours.",
    "url": "https://www.italytaxiservice.com",
    "telephone": "+39-02-0000-0000",
    "email": "italytaxiservicee@gmail.com",
    "logo": "https://www.italytaxiservice.com/icon.svg",
    "image": "https://www.italytaxiservice.com/images/hero.webp",
    "priceRange": "€€€",
    "currenciesAccepted": "EUR",
    "paymentAccepted": "Cash, Credit Card",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Italy"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Via della Conciliazione, 1",
      "addressLocality": "Roma",
      "addressRegion": "RM",
      "postalCode": "00193",
      "addressCountry": "IT"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.8719,
      "longitude": 12.5674
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500",
      "bestRating": "5",
      "worstRating": "1"
    },
    "foundingDate": "2013",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Italy Private Transfer Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Airport Transfer", "url": "https://www.italytaxiservice.com/services/airport-transfers" }
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "City-to-City Transfer", "url": "https://www.italytaxiservice.com/services/city-to-city" }
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Private Tours", "url": "https://www.italytaxiservice.com/services/private-tours" }
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Business Taxi", "url": "https://www.italytaxiservice.com/services/business-taxi" }
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Cruise Port Transfer", "url": "https://www.italytaxiservice.com/services/cruise-port-transfers" }
        }
      ]
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.italytaxiservice.com/#website",
    "url": "https://www.italytaxiservice.com",
    "name": "Italy Taxi Service",
    "description": "Premium private taxi and transfer services across Italy",
    "publisher": {
      "@id": "https://www.italytaxiservice.com/#organization"
    }
    // NOTE: SearchAction/sitelinks-searchbox removed — the site has no /search
    // page, so the template URL (/search?q=…) was being crawled and 404ing.
  };

  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.italytaxiservice.com/#webpage",
    "url": "https://www.italytaxiservice.com",
    "name": "Italy Taxi Service | Private Transfers and Airport Taxis",
    "description": "Book a premium private taxi service in Italy. We provide airport transfers, city tours, and point-to-point transportation.",
    "isPartOf": {
      "@id": "https://www.italytaxiservice.com/#website"
    },
    "about": {
      "@id": "https://www.italytaxiservice.com/#organization"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.italytaxiservice.com"
        }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why choose a private transfer over a standard Italian taxi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our service offers fixed, transparent pricing with no hidden fees, professional multi-lingual drivers, and pre-booked guaranteed pickups. Unlike standard taxis, we provide a premium Meet & Greet service and luxury vehicles suited for comfort."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide airport transfers from any city in Italy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer nationwide coverage across Italy. Whether you need a transfer from Rome, Milan, Venice, or a remote village in Tuscany, our network of professional drivers is available 24/7."
        }
      },
      {
        "@type": "Question",
        "name": "What types of vehicles are available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer a range of luxury vehicles including Mercedes E-Class/S-Class sedans for up to 3 passengers, V-Class minivans for up to 8 passengers, and larger Sprinter buses for group travel."
        }
      },
      {
        "@type": "Question",
        "name": "Are your drivers licensed to enter restricted traffic zones (ZTL)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all our drivers are professionally licensed (N.C.C.) which allows them to enter restricted city centers (ZTL) and bus/taxi lanes, ensuring a direct and efficient door-to-door service."
        }
      },
      {
        "@type": "Question",
        "name": "How far in advance should I book my Italian transfer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We recommend booking at least 24 hours in advance to guarantee availability. For last-minute requests, you can contact our 24/7 WhatsApp support team for immediate assistance."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
};

export default JsonLd;
