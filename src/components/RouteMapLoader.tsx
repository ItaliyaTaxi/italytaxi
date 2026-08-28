"use client";

import dynamic from 'next/dynamic';
import type { RouteMapPoint } from './RouteMap';

// Leaflet touches `window` on import, so the map itself can only ever render
// client-side. Loading it via next/dynamic with ssr:false keeps it out of the
// server-rendered HTML and off the initial JS bundle for every OTHER page —
// only pages that actually import this loader pay for Leaflet's JS weight.
const RouteMap = dynamic(() => import('./RouteMap'), {
    ssr: false,
    loading: () => (
        <div className="w-full h-full flex items-center justify-center bg-[#F3EEE1] text-[#8A8F98] text-sm">
            Loading route map…
        </div>
    ),
});

interface RouteMapLoaderProps {
    origin: RouteMapPoint;
    destination: RouteMapPoint;
    geometry: [number, number][];
}

export default function RouteMapLoader(props: RouteMapLoaderProps) {
    // Fixed aspect-ratio container reserves the space before the map (or even
    // the loading fallback) mounts, so there is no layout shift either way.
    return (
        <div className="w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden border border-[#E4DDC9] relative">
            <RouteMap {...props} />
        </div>
    );
}
