import React from 'react';

const JsonLd = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Italy Taxi Service",
    "url": "https://www.italytaxiservice.com",
    "logo": "https://www.italytaxiservice.com/icon.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+923148932631",
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

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "name": "Private Taxi Transfers in Italy",
    "provider": {
      "@type": "Organization",
      "name": "Italy Taxi Service"
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
};

export default JsonLd;
