/**
 * Review metadata for the distance guides (/distance/* and /it/distance/*).
 *
 * DISTANCE_GUIDES_LAST_REVIEWED is the single source for both the visible
 * "Last reviewed" line on every distance page and the Article schema's
 * dateModified, so the two can never disagree. Update this one value after
 * each review of the distances, journey times and route notes.
 */
export const DISTANCE_GUIDES_LAST_REVIEWED = '2026-11-11';

const SITE = 'https://www.italytaxiservice.com';

/** "11 November 2026" / "11 novembre 2026". UTC, so server and client agree. */
export function formatReviewDate(iso: string, lang: 'en' | 'it'): string {
    return new Date(`${iso}T00:00:00Z`).toLocaleDateString(lang === 'it' ? 'it-IT' : 'en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        timeZone: 'UTC',
    });
}

/**
 * Article JSON-LD for a distance guide, built only from what the page itself
 * shows. No datePublished: the guides have no recorded publication date, and
 * one is not invented here.
 */
export function distanceArticleSchema({ url, headline, description, image, lang }: {
    url: string;
    headline: string;
    description: string;
    image?: string;
    lang: 'en' | 'it';
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline,
        description,
        url,
        mainEntityOfPage: { '@type': 'WebPage', '@id': url },
        inLanguage: lang === 'it' ? 'it-IT' : 'en',
        // encodeURI: some hero files have spaces in their names ("Lake Como.webp").
        ...(image ? { image: encodeURI(image.startsWith('http') ? image : `${SITE}${image}`) } : {}),
        dateModified: DISTANCE_GUIDES_LAST_REVIEWED,
        author: { '@type': 'Organization', name: 'Italy Taxi Service', url: SITE },
        publisher: {
            '@type': 'Organization',
            name: 'Italy Taxi Service',
            logo: { '@type': 'ImageObject', url: `${SITE}/icon.svg` },
        },
    };
}
