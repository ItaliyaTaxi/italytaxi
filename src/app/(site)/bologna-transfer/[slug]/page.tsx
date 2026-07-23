import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import {
    getAllBolognaHotelTransfers,
    findBolognaHotelTransfer,
    getAllBolognaCruiseTransfers,
    findBolognaCruiseTransfer,
} from '@/lib/bologna-transfer-data';
import BolognaTransferContent from '@/components/BolognaTransferContent';
import BolognaCruiseContent from '@/components/BolognaCruiseContent';

const SITE = 'https://www.italytaxiservice.com';
const HERO_IMG = '/images/Bologna.webp';

// Only the curated Bologna hotel/cruise transfer slugs render here.
export const dynamicParams = false;

export function generateStaticParams() {
    return [
        ...getAllBolognaHotelTransfers().map((t) => ({ slug: t.slug })),
        ...getAllBolognaCruiseTransfers().map((t) => ({ slug: t.slug })),
    ];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const url = `${SITE}/bologna-transfer/${slug}`;

    const t = findBolognaHotelTransfer(slug);
    if (t) {
        const dep = t.direction === 'hotel-to-airport';
        const title = dep
            ? `${t.hotel.name} to ${t.airport.short} Airport Transfer`
            : `${t.airport.short} Airport to ${t.hotel.name} Transfer`;
        const description = dep
            ? `Private departure transfer from the ${t.hotel.name} (${t.hotel.district}) to ${t.airport.name}. Fixed price, on-time pickup, ${t.leg.duration} (${t.leg.distance}), luggage assistance.`
            : `Private transfer from ${t.airport.name} to the ${t.hotel.name} (${t.hotel.district}). Fixed price, ${t.leg.duration} (${t.leg.distance}), meet & greet and flight monitoring.`;
        const shortTitle = dep ? `${t.hotel.name} to ${t.airport.short} Transfer` : `${t.airport.short} to ${t.hotel.name} Transfer`;
        const alt = dep ? `Private transfer from ${t.hotel.name} to ${t.airport.name}` : `Private transfer from ${t.airport.name} to ${t.hotel.name}`;
        return {
            title: title.length > 60 ? shortTitle : title,
            description: description.slice(0, 160),
            alternates: { canonical: `/bologna-transfer/${slug}` },
            openGraph: { title, description, url, type: 'website', images: [{ url: `${SITE}${HERO_IMG}`, width: 1200, height: 630, alt }] },
            twitter: { card: 'summary_large_image', title, description },
        };
    }

    const c = findBolognaCruiseTransfer(slug);
    if (c) {
        const dep = c.direction === 'origin-to-port';
        const title = dep ? `${c.origin.name} to Ravenna Cruise Port Transfer` : `Ravenna Cruise Port to ${c.origin.name} Transfer`;
        const description = dep
            ? `Private transfer from ${c.origin.name} to Ravenna Cruise Port. Fixed price, ${c.leg.duration} (${c.leg.distance}), luggage assistance, embarkation-aware scheduling.`
            : `Private transfer from Ravenna Cruise Port to ${c.origin.name}. Fixed price, ${c.leg.duration} (${c.leg.distance}), meet & greet at the terminal.`;
        const shortTitle = dep ? `${c.origin.name} to Ravenna Port` : `Ravenna Port to ${c.origin.name}`;
        const alt = dep ? `Private transfer from ${c.origin.name} to Ravenna Cruise Port` : `Private transfer from Ravenna Cruise Port to ${c.origin.name}`;
        return {
            title: title.length > 60 ? shortTitle : title,
            description: description.slice(0, 160),
            alternates: { canonical: `/bologna-transfer/${slug}` },
            openGraph: { title, description, url, type: 'website', images: [{ url: `${SITE}${HERO_IMG}`, width: 1200, height: 630, alt }] },
            twitter: { card: 'summary_large_image', title, description },
        };
    }

    return { title: 'Page Not Found' };
}

export default async function BolognaTransferPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const t = findBolognaHotelTransfer(slug);
    if (t) return <BolognaTransferContent combo={t} />;

    const c = findBolognaCruiseTransfer(slug);
    if (c) return <BolognaCruiseContent combo={c} />;

    notFound();
}
