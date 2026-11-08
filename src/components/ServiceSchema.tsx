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
        }
        /* The second object here re-declared the #organization @id as
           ["LocalBusiness","AutoRental"], colliding with the Organization that
           JsonLd.tsx already renders site-wide on these same pages, and adding
           a wrong entity type (AutoRental is self-drive car rental), a per-page
           business description, a conflicting logo and priceRange, plus an
           unverified address and foundingDate. It has been removed. The
           business identity belongs to JsonLd.tsx; the Service entity above
           references it correctly through provider.@id. */
    ];

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
        />
    );
}
