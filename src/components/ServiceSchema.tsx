import React from 'react';

interface ServiceSchemaProps {
    name: string;
    description: string;
    url: string;
    image?: string;
}

export default function ServiceSchema({ name, description, url, image }: ServiceSchemaProps) {
    const schemas = [
        {
            "@context": "https://schema.org",
            "@id": `${url}/#service`,
            "@type": "Service",
            "name": name,
            "description": description,
            "provider": {
                "@id": "https://www.italytaxiservice.com/#organization"
            },
            "url": url,
            "image": image || "https://www.italytaxiservice.com/images/hero.png",
            "areaServed": {
                "@type": "Country",
                "name": "Italy"
            },
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Taxi Services",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Airport Transfer"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "City to City Transfer"
                        }
                    }
                ]
            }
        },
        {
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "AutoRental"],
            "@id": "https://www.italytaxiservice.com/#organization",
            "name": "Italy Taxi Service",
            "url": "https://www.italytaxiservice.com",
            "logo": "https://www.italytaxiservice.com/images/logo.png",
            "image": image || "https://www.italytaxiservice.com/images/hero.png",
            "description": description,
            "telephone": "+9231489326310",
            "email": "booking@italytaxiservice.com",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Via della Conciliazione, 1",
                "addressLocality": "Roma",
                "addressRegion": "RM",
                "postalCode": "00193",
                "addressCountry": "IT"
            },
            "priceRange": "$$$",
            "foundingDate": "2010"
        }
    ];

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
        />
    );
}
