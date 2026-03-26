import React from 'react';

const JsonLd = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "@id": "https://www.italytaxiservice.com/#organization",
    "name": "Italy Taxi Service",
    "url": "https://www.italytaxiservice.com",
    "logo": "https://www.italytaxiservice.com/icon.svg",
    "image": "https://www.italytaxiservice.com/images/hero.png",
    "telephone": "+923148932631",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Via del Corso",
      "addressLocality": "Rome",
      "addressRegion": "RM",
      "postalCode": "00186",
      "addressCountry": "IT"
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
      }
    ],
    "sameAs": [
      "https://www.facebook.com/italytaxiservice",
      "https://www.instagram.com/italytaxiservice",
      "https://www.tiktok.com/@italytaxiservice"
    ]
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
    },
    "potentialAction": [{
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.italytaxiservice.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }]
  };

  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.italytaxiservice.com/#webpage",
    "url": "https://www.italytaxiservice.com",
    "name": "Italy Taxi Service | Private transfers and airport taxis",
    "description": "Book a premium private taxi service in Italy. We provide airport transfers, city tours, and point-to-point transportation.",
    "isPartOf": {
      "@id": "https://www.italytaxiservice.com/#website"
    },
    "about": {
      "@id": "https://www.italytaxiservice.com/#organization"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Private Taxi Transfers in Italy",
    "provider": {
      "@id": "https://www.italytaxiservice.com/#organization"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Italy"
    },
    "serviceType": "Airport Transfers, City Tours, Business Taxi",
    "description": "Premium private taxi and transfer services across Italy, including all major airports and cities."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
};

export default JsonLd;

