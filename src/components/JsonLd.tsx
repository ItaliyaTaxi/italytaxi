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
      "telephone": "+923148932631",
      "contactType": "customer service",
      "areaServed": "IT",
      "availableLanguage": ["English", "Italian"]
    },
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61588708420164",
      "https://www.instagram.com/italytaxiservicee/",
      "https://pin.it/5HupU1fjM"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "TaxiService"],
    "@id": "https://www.italytaxiservice.com/#localbusiness",
    "name": "Italy Taxi Service",
    "description": "Professional private taxi and transfer service across Italy. NCC-licensed drivers, fixed prices, airport transfers, city-to-city rides, and private tours.",
    "url": "https://www.italytaxiservice.com",
    "telephone": "+923148932631",
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

  // NOTE: WebPage + FAQPage schema used to live here too, but that meant every
  // single page on the site (blog posts, transfer pages, etc.) emitted a
  // hardcoded homepage WebPage entity and 5 generic FAQs alongside its own,
  // correct, page-specific schema — a duplicate/contradictory structured-data
  // bug. Those two are now homepage-only, defined directly in src/app/page.tsx
  // (and its Italian counterpart src/app/it/page.tsx). Organization/
  // LocalBusiness/WebSite are language-neutral entity data, so they stay here,
  // rendered once sitewide via the root layout.

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
    </>
  );
};

export default JsonLd;
