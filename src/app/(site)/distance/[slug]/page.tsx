import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getAllDistancePages, findDistancePage } from '@/lib/distance-pages-data';
import DistancePageContent from '@/components/DistancePageContent';
import { getAllRichDistancePages, findRichDistancePage } from '@/lib/rich-distance-pages-data';
import RichDistancePageContent from '@/components/RichDistancePageContent';

const SITE = 'https://www.italytaxiservice.com';

// Two independent distance-page sources render through this one route:
//   - distance-pages-data.ts / DistancePageContent — the original 29-page
//     design, untouched.
//   - rich-distance-pages-data.ts / RichDistancePageContent — a visually
//     distinct map-driven variant, used only for the 5 Tuscany/Lazio routes
//     it was built for. Checked second so a slug collision would favour the
//     original (none exists today — verified before adding these pages).
export function generateStaticParams() {
    return [
        ...getAllDistancePages().map((d) => ({ slug: d.slug })),
        ...getAllRichDistancePages().map((d) => ({ slug: d.slug })),
    ];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const dp = findDistancePage(slug);
    if (dp) {
        const languages: Record<string, string> | undefined = dp.itSlug
            ? { 'it-IT': `/it/distance/${dp.itSlug}`, 'en': `/distance/${slug}`, 'x-default': `/distance/${slug}` }
            : undefined;

        return {
            title: dp.seoTitle,
            description: dp.metaDescription,
            alternates: {
                canonical: `/distance/${slug}`,
                ...(languages ? { languages } : {}),
            },
            openGraph: {
                title: dp.seoTitle, description: dp.metaDescription, url: `${SITE}/distance/${slug}`, type: 'website',
                images: [{ url: `${SITE}${dp.heroImage}`, width: 1200, height: 630, alt: dp.h1 }],
            },
            twitter: { card: 'summary_large_image', title: dp.seoTitle, description: dp.metaDescription },
        };
    }

    const rp = findRichDistancePage(slug);
    if (rp) {
        const languages: Record<string, string> | undefined = rp.itSlug
            ? { 'it-IT': `/it/distance/${rp.itSlug}`, 'en': `/distance/${slug}`, 'x-default': `/distance/${slug}` }
            : undefined;

        return {
            title: rp.seoTitle,
            description: rp.metaDescription,
            alternates: {
                canonical: `/distance/${slug}`,
                ...(languages ? { languages } : {}),
            },
            openGraph: {
                title: rp.seoTitle, description: rp.metaDescription, url: `${SITE}/distance/${slug}`, type: 'website',
            },
            twitter: { card: 'summary_large_image', title: rp.seoTitle, description: rp.metaDescription },
        };
    }

    return { title: 'Page Not Found' };
}

export default async function DistanceRoutePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const dp = findDistancePage(slug);
    if (dp) return <DistancePageContent page={dp} />;

    const rp = findRichDistancePage(slug);
    if (rp) return <RichDistancePageContent page={rp} />;

    notFound();
}
