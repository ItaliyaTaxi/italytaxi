import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getAllDistancePages, findDistancePage } from '@/lib/distance-pages-data';
import DistancePageContent from '@/components/DistancePageContent';

const SITE = 'https://www.italytaxiservice.com';

export function generateStaticParams() {
    return getAllDistancePages().map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const dp = findDistancePage(slug);
    if (!dp) return { title: 'Page Not Found' };

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

export default async function DistanceRoutePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const dp = findDistancePage(slug);
    if (!dp) notFound();
    return <DistancePageContent page={dp} />;
}
