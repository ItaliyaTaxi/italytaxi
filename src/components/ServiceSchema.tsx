import React from 'react';

interface ServiceSchemaProps {
    name: string;
    description: string;
    url: string;
    image?: string;
}

export default function ServiceSchema({ name, description, url, image }: ServiceSchemaProps) {
    const serviceSchema = {
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
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
    );
}
