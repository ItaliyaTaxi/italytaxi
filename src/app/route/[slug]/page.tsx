import { Metadata } from 'next';
export default function RoutePage({ params }: { params: { slug: string } }) {
    return (
        <div>
            <h1>Route: {params.slug}</h1>
        </div>
    );
}

export async function generateMetadata({ params }: any) {
    const { slug } = await params;
    return {
        alternates: { canonical: `/route/${slug}` },
        robots: { index: false } // Default for unconfigured dynamic routes
    };
}
