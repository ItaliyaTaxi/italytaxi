import { MetadataRoute } from 'next';
import { supabase } from '@/lib/supabase/client';
import { getAllAirportHotelTransfers } from '@/lib/airport-hotel-data';
import { getAllFlorenceTransfers } from '@/lib/florence-transfer-data';
import { routes as pageRoutes, airports, cities, tours, borderSlugs } from '@/lib/page-data';
import { clusterRoutes } from '@/lib/new-regions-routes-data';
import { existingRouteItTranslations } from '@/lib/it-translations-existing-routes';
import { dayTrips } from '@/lib/day-trips-data';
import { getAllMilanTransfers } from '@/lib/milan-transfer-data';
import { getAllVenetoTransfers } from '@/lib/veneto-transfer-data';
import { getAllCrossBorderTransfers } from '@/lib/cross-border-data';
import { getAllDistancePages } from '@/lib/distance-pages-data';
import { getAllBolognaHotelTransfers, getAllBolognaCruiseTransfers } from '@/lib/bologna-transfer-data';
import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://www.italytaxiservice.com';

// Without this, sitemap.xml has no cache signal at all — since it fetches
// from Supabase, Next.js treats it as fully dynamic, meaning EVERY hit
// (crawlers request this constantly) triggers a full recursive filesystem
// walk of src/app plus a live Supabase query, and transfers the entire
// ~1100-URL XML body uncached, every single time. This was very likely the
// single largest contributor to both Fast Origin Transfer and ISR Reads.
export const revalidate = 3600;

// Routes to exclude from the sitemap (admin, api, auth, internal)
const EXCLUDED_SEGMENTS = new Set([
  'crm', 'api', '_next', 'admin', 'auth',
  '(auth)', '(admin)', '(protected)',
]);

// Priority/frequency config per route pattern
function routeConfig(urlPath: string) {
  if (urlPath === '/') return { priority: 1.0, changeFrequency: 'daily' as const };
  if (urlPath === '/it') return { priority: 1.0, changeFrequency: 'daily' as const };
  if (['/book-now', '/contact', '/services', '/rome-airport-transfer', '/milan-chauffeur-service', '/florence-private-taxi', '/it/contatti', '/it/servizi'].includes(urlPath)) return { priority: 0.9, changeFrequency: 'weekly' as const };
  if (['/about-us', '/faq', '/coverage-areas', '/airport-transfer', '/it/domande-frequenti'].includes(urlPath)) return { priority: 0.8, changeFrequency: 'weekly' as const };
  if (urlPath.startsWith('/airport/') || urlPath.startsWith('/city/')) return { priority: 0.9, changeFrequency: 'weekly' as const };
  if (urlPath.startsWith('/route/')) return { priority: 0.9, changeFrequency: 'weekly' as const };
  if (urlPath.startsWith('/services/') || urlPath.startsWith('/tour/') || urlPath.startsWith('/it/servizi/')) return { priority: 0.8, changeFrequency: 'weekly' as const };
  if (urlPath.startsWith('/blog/')) return { priority: 0.8, changeFrequency: 'weekly' as const };
  if (urlPath.startsWith('/attraction-transfer/') || urlPath.startsWith('/beach-transfer/')) return { priority: 0.7, changeFrequency: 'monthly' as const };
  if (urlPath.startsWith('/border/')) return { priority: 0.7, changeFrequency: 'monthly' as const };
  if (['/drivers', '/airport', '/route', '/city', '/tour', '/border', '/attraction-transfer', '/beach-transfer'].includes(urlPath)) return { priority: 0.6, changeFrequency: 'monthly' as const };
  return { priority: 0.5, changeFrequency: 'monthly' as const };
}

/**
 * Recursively walk the Next.js app directory and collect all routable paths.
 * - Skips excluded segments, files, and dynamic [slug] directories (handled separately).
 * - Walks INTO route groups like (site) — they don't add a URL segment, but
 *   the routes nested inside them (which is most of the site, post-refactor
 *   into two root layouts — see src/app/(site)/layout.tsx) still need discovering.
 * - Returns URL paths like ['/', '/about-us', '/services/airport-transfers', ...]
 */
function discoverStaticRoutes(appDir: string): string[] {
  const routes: string[] = [];

  function walk(dir: string, urlParts: string[]) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    const hasPage = entries.some(
      (e) => e.isFile() && (e.name === 'page.tsx' || e.name === 'page.ts')
    );

    if (hasPage) {
      routes.push('/' + urlParts.join('/'));
    }

    for (const entry of entries) {
      if (!entry.isDirectory()) continue;
      const name = entry.name;
      if (EXCLUDED_SEGMENTS.has(name) || name.startsWith('_') || name.startsWith('[')) continue;

      if (name.startsWith('(')) {
        // Route group — organisational only, contributes no URL segment.
        walk(path.join(dir, name), urlParts);
      } else {
        walk(path.join(dir, name), [...urlParts, name]);
      }
    }
  }

  walk(appDir, []);
  return routes;
}

/**
 * For a dynamic [slug] route (e.g. /beach-transfer/[slug]), read all
 * subdirectory names as slugs directly from the filesystem. `appDir` is
 * searched directly and then one level into any route group (covers the
 * (site) group every such route now lives under), so this keeps working
 * regardless of which group a given segment is nested in.
 */
function discoverDynamicSlugs(appDir: string, routeSegment: string): string[] {
  const direct = path.join(appDir, routeSegment);
  if (fs.existsSync(direct)) return readSlugDirs(direct);

  const groups = fs.readdirSync(appDir, { withFileTypes: true }).filter((e) => e.isDirectory() && e.name.startsWith('('));
  for (const group of groups) {
    const nested = path.join(appDir, group.name, routeSegment);
    if (fs.existsSync(nested)) return readSlugDirs(nested);
  }
  return [];
}

function readSlugDirs(routeDir: string): string[] {
  return fs
    .readdirSync(routeDir, { withFileTypes: true })
    .filter((e) => e.isDirectory() && !e.name.startsWith('[') && !e.name.startsWith('_'))
    .map((e) => e.name);
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const appDir = path.join(process.cwd(), 'src', 'app');

  // ── 1. Static pages auto-discovered from filesystem ──────────────────────
  const staticRoutes = discoverStaticRoutes(appDir);
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((urlPath) => ({
    url: `${BASE_URL}${urlPath === '/' ? '' : urlPath}`,
    lastModified: now,
    ...routeConfig(urlPath),
  }));

  // ── 2. Dynamic [slug] routes discovered from filesystem subdirectories ────
  // Only segments with a real per-slug folder on disk belong here. airport,
  // city, tour, and border are data-driven via generateStaticParams (like
  // /route/[slug] — see step 6), so this walker finds zero slugs for them;
  // they're added explicitly below instead.
  const dynamicSegments = [
    'attraction-transfer',
    'beach-transfer',
  ];

  const dynamicEntries: MetadataRoute.Sitemap = dynamicSegments.flatMap((segment) => {
    const slugs = discoverDynamicSlugs(appDir, segment);
    return slugs.map((slug) => {
      const urlPath = `/${segment}/${slug}`;
      return {
        url: `${BASE_URL}${urlPath}`,
        lastModified: now,
        ...routeConfig(urlPath),
      };
    });
  });

  // ── 2b. Data-driven airport/city/tour/border pages (page-data.ts) ─────────
  // These use generateStaticParams from static arrays, so — like /route/[slug]
  // — they have no physical per-slug folder for the filesystem walker to find.
  const airportEntries: MetadataRoute.Sitemap = airports.map((a) => ({
    url: `${BASE_URL}/airport/${a.slug}`,
    lastModified: now,
    ...routeConfig('/airport/'),
  }));
  const cityEntries: MetadataRoute.Sitemap = cities.map((c) => ({
    url: `${BASE_URL}/city/${c.slug}`,
    lastModified: now,
    ...routeConfig('/city/'),
  }));
  const tourEntries: MetadataRoute.Sitemap = tours.map((t) => ({
    url: `${BASE_URL}/tour/${t.slug}`,
    lastModified: now,
    ...routeConfig('/tour/'),
  }));
  const borderEntries: MetadataRoute.Sitemap = borderSlugs.map((slug) => ({
    url: `${BASE_URL}/border/${slug}`,
    lastModified: now,
    ...routeConfig('/border/'),
  }));

  // ── 3. Blog posts from Supabase ───────────────────────────────────────────
  let blogEntries: MetadataRoute.Sitemap = [];
  try {
    const { data: blogs, error } = await supabase
      .from('blogs')
      .select('slug, updated_at, language')
      .eq('status', 'published');

    if (!error && blogs) {
      // English posts live at /blog/<slug>; Italian translations at /it/blog/<slug>.
      blogEntries = blogs.map((blog) => ({
        url: `${BASE_URL}${blog.language === 'it' ? '/it/blog/' : '/blog/'}${blog.slug}`,
        lastModified: blog.updated_at ? new Date(blog.updated_at) : now,
        ...routeConfig('/blog/'),
      }));
    }
  } catch (err) {
    console.error('Sitemap: error fetching blogs from Supabase:', err);
  }

  // ── 4. Programmatic Rome airport → hotel transfer pages (root-level slugs) ──
  const airportHotelEntries: MetadataRoute.Sitemap = getAllAirportHotelTransfers().map((t) => ({
    url: `${BASE_URL}/${t.slug}`,
    lastModified: now,
    priority: 0.8,
    changeFrequency: 'monthly' as const,
  }));

  // ── 5. Programmatic Florence/Pisa → hotel/resort/landmark transfer pages ──
  const florenceEntries: MetadataRoute.Sitemap = getAllFlorenceTransfers().map((t) => ({
    url: `${BASE_URL}/florence-transfer/${t.slug}`,
    lastModified: now,
    priority: 0.8,
    changeFrequency: 'monthly' as const,
  }));

  // ── 6. Data-driven /route/[slug] pages (page-data.ts) ─────────────────────
  // These are generated via generateStaticParams, so the filesystem walker in
  // step 2 misses them — add them explicitly so every route page is indexed.
  const routeEntries: MetadataRoute.Sitemap = pageRoutes.map((r) => ({
    url: `${BASE_URL}/route/${r.slug}`,
    lastModified: now,
    priority: 0.9,
    changeFrequency: 'weekly' as const,
  }));

  // ── 6c. Day Trips & Tours cluster (EN + IT) ────────────────────────────────
  const dayTripEnEntries: MetadataRoute.Sitemap = dayTrips.map((t) => ({
    url: `${BASE_URL}/day-trips/${t.slugEn}`,
    lastModified: now,
    priority: 0.9,
    changeFrequency: 'weekly' as const,
  }));
  const dayTripItEntries: MetadataRoute.Sitemap = dayTrips.map((t) => ({
    url: `${BASE_URL}/it/day-trips/${t.slugIt}`,
    lastModified: now,
    priority: 0.9,
    changeFrequency: 'weekly' as const,
  }));

  // ── 6b. Italian route pages: the 22 bilingual Amalfi/Sicily/Sardinia
  // cluster routes, plus the 30 Route Expansion 2026 Phase B translations of
  // existing English routes (the other 62 legacy /route/* pages have no
  // dedicated Italian version yet).
  const itRouteEntries: MetadataRoute.Sitemap = [...clusterRoutes, ...existingRouteItTranslations].map((r) => ({
    url: `${BASE_URL}/it/route/${r.slugIt}`,
    lastModified: now,
    priority: 0.9,
    changeFrequency: 'weekly' as const,
  }));

  // ── 7. Programmatic Milan airport ⇄ hotel transfer pages (root-level slugs) ─
  const milanEntries: MetadataRoute.Sitemap = getAllMilanTransfers().map((t) => ({
    url: `${BASE_URL}/${t.slug}`,
    lastModified: now,
    priority: 0.8,
    changeFrequency: 'monthly' as const,
  }));

  // ── 8. Programmatic Venice/Verona (Veneto) airport ⇄ destination pages ────
  const venetoEntries: MetadataRoute.Sitemap = getAllVenetoTransfers().map((t) => ({
    url: `${BASE_URL}/${t.slug}`,
    lastModified: now,
    priority: 0.8,
    changeFrequency: 'monthly' as const,
  }));

  // ── 9. Programmatic Italy cross-border transfer pages (root-level slugs) ───
  const crossBorderEntries: MetadataRoute.Sitemap = getAllCrossBorderTransfers().map((t) => ({
    url: `${BASE_URL}/${t.slug}`,
    lastModified: now,
    priority: 0.8,
    changeFrequency: 'monthly' as const,
  }));

  // ── 10. Programmatic Bologna airport ⇄ hotel transfer pages ────────────────
  const bolognaHotelEntries: MetadataRoute.Sitemap = getAllBolognaHotelTransfers().map((t) => ({
    url: `${BASE_URL}/bologna-transfer/${t.slug}`,
    lastModified: now,
    priority: 0.8,
    changeFrequency: 'monthly' as const,
  }));

  // ── 11. Programmatic Bologna ⇄ Ravenna Cruise Port transfer pages ──────────
  const bolognaCruiseEntries: MetadataRoute.Sitemap = getAllBolognaCruiseTransfers().map((t) => ({
    url: `${BASE_URL}/bologna-transfer/${t.slug}`,
    lastModified: now,
    priority: 0.8,
    changeFrequency: 'monthly' as const,
  }));

  // ── 12. Informational distance pages (root-level slugs) ────────────────────
  const distanceEntries: MetadataRoute.Sitemap = getAllDistancePages().map((d) => ({
    url: `${BASE_URL}/${d.slug}`,
    lastModified: now,
    priority: 0.7,
    changeFrequency: 'monthly' as const,
  }));

  const combined = [
    ...staticEntries,
    ...dynamicEntries,
    ...airportEntries,
    ...cityEntries,
    ...tourEntries,
    ...borderEntries,
    ...blogEntries,
    ...airportHotelEntries,
    ...florenceEntries,
    ...routeEntries,
    ...itRouteEntries,
    ...dayTripEnEntries,
    ...dayTripItEntries,
    ...milanEntries,
    ...venetoEntries,
    ...crossBorderEntries,
    ...bolognaHotelEntries,
    ...bolognaCruiseEntries,
    ...distanceEntries,
  ];

  // Set of known redirected/non-canonical slugs to guarantee they never enter sitemap.xml
  const EXCLUDED_PATHS = new Set([
    '/city/rome-taxi-service', '/city/milan-taxi-service', '/city/florence-taxi-service',
    '/city/venice-taxi-service', '/city/naples-taxi-service', '/city/bologna-taxi-service',
    '/city/palermo-taxi-service', '/city/amalfi-taxi-service', '/city/como-taxi-service',
    '/blog/do-taxis-in-italy-accept-credit-cards-a-complete-guide',
    '/blog/do-taxis-in-italy-accept-credit-cards-complete-guide',
    '/blog/essential-travel-tips-for-firsttime-visitors-to-italy',
    '/blog/what-to-expect-booking-airport-transfer-italy',
    '/blog/taxi-vs-train-from-italian-airports-better-option',
    '/blog/travel-time-major-italian-airports-city-centers',
    '/blog/transportation-guide-for-traveling-across-italy',
    '/blog/what-tourists-should-know-before-taking-taxi-italy',
    '/blog/how-to-plan-comfortable-city-to-city-travel-italy',
    '/blog/private-taxi-vs-public-transport-in-italy-which-is-better',
    // Attraction stub redirected to beach page — must not appear in sitemap
    '/attraction-transfer/costa-smeralda-taxi-transfer',
  ]);

  // De-duplicate by URL and filter out non-canonical / redirected / admin URLs.
  const seen = new Set<string>();
  return combined.filter((e) => {
    const pathOnly = e.url.replace(BASE_URL, '');
    if (EXCLUDED_PATHS.has(pathOnly) || pathOnly.startsWith('/crm')) return false;
    if (seen.has(e.url)) return false;
    seen.add(e.url);
    return true;
  });
}
