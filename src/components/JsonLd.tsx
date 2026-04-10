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
    "email": "booking@italytaxiservice.com",
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
    </>
  );
};

export default JsonLd;
