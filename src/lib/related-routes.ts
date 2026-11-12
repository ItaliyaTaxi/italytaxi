/**
 * Internal-linking helpers for the route, city and day-trip templates.
 *
 * Why: the route template used to show the same first six routes on every
 * route page, so ~130 route pages and most day trips had only one in-content
 * link pointing at them and sat in "Crawled – currently not indexed". These
 * helpers pick genuinely related pages (reverse journey, same origin, same
 * destination, onward from the destination) and ROTATE which siblings each
 * page shows, so every route is linked from several others instead of the
 * same handful.
 */
import { routes, type RouteData } from './page-data';
import { dayTrips, type DayTrip } from './day-trips-data';

// Route endpoints are written inconsistently ("Rome", "Rome Fiumicino Airport",
// "Napoli Centrale", "Lake Como"), so compare on a normalised place key.
const ALIAS: Record<string, string> = {
    roma: 'rome', milano: 'milan', firenze: 'florence', napoli: 'naples',
    venezia: 'venice', torino: 'turin', genova: 'genoa', fiumicino: 'rome', ciampino: 'rome',
    malpensa: 'milan', linate: 'milan',
};
const TWO_WORD = new Set(['lake', 'mount', 'san', 'santa', 'porto', 'monte', 'val', 'costa']);

export function placeKey(name: string): string {
    const w = name.toLowerCase().replace(/[()]/g, ' ').split(/[\s-]+/).filter(Boolean);
    const first = TWO_WORD.has(w[0]) && w[1] ? `${w[0]} ${w[1]}` : w[0] ?? '';
    return ALIAS[first] ?? first;
}

/** Small deterministic hash so each page gets a different, stable ordering. */
function seeded(seed: string, s: string): number {
    let h = 2166136261;
    for (const c of seed + '|' + s) { h ^= c.charCodeAt(0); h = Math.imul(h, 16777619); }
    return h >>> 0;
}

function pick<T extends { slug?: string; slugEn?: string }>(pool: T[], seed: string, n: number, taken: Set<string>): T[] {
    const key = (x: T) => (x.slug ?? x.slugEn) as string;
    return pool
        .filter((x) => !taken.has(key(x)))
        .sort((a, b) => seeded(seed, key(a)) - seeded(seed, key(b)))
        .slice(0, n)
        .map((x) => { taken.add(key(x)); return x; });
}

/** Up to `limit` routes related to this one, most relevant tier first. */
export function relatedRoutesFor(route: RouteData, limit = 6): RouteData[] {
    const from = placeKey(route.from), to = placeKey(route.to);
    const taken = new Set([route.slug]);
    const out: RouteData[] = [];
    const tiers: ((r: RouteData) => boolean)[] = [
        (r) => placeKey(r.from) === to && placeKey(r.to) === from, // the return journey
        (r) => placeKey(r.from) === from,                          // same origin
        (r) => placeKey(r.to) === to,                              // same destination
        (r) => placeKey(r.from) === to,                            // onward from the destination
        (r) => placeKey(r.to) === from,                            // into the origin
    ];
    for (const tier of tiers) {
        if (out.length >= limit) break;
        out.push(...pick(routes.filter(tier), route.slug, limit - out.length, taken));
    }
    // Fallback so a route with no siblings still shows a full grid.
    if (out.length < limit) out.push(...pick(routes, route.slug, limit - out.length, taken));
    return out;
}

/** Routes starting (first) or ending in a place — for city and day-trip pages. */
export function routesForPlace(name: string, limit = 12, seed = name): RouteData[] {
    const k = placeKey(name);
    const taken = new Set<string>();
    const out = pick(routes.filter((r) => placeKey(r.from) === k), seed, limit, taken);
    if (out.length < limit) out.push(...pick(routes.filter((r) => placeKey(r.to) === k), seed, limit - out.length, taken));
    return out;
}

/** Day trips that start or end in a place. */
export function dayTripsForPlace(name: string, exclude?: string): DayTrip[] {
    const k = placeKey(name);
    return dayTrips.filter((t) => t.slugEn !== exclude && (placeKey(t.from) === k || placeKey(t.to) === k));
}
