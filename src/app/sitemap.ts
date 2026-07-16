import { MetadataRoute } from 'next';
import { supabase } from '@/lib/supabase/client';
import { getAllAirportHotelTransfers } from '@/lib/airport-hotel-data';
import { getAllFlorenceTransfers } from '@/lib/florence-transfer-data';
import { routes as pageRoutes } from '@/lib/page-data';
import { getAllMilanTransfers } from '@/lib/milan-transfer-data';
import { getAllVenetoTransfers } from '@/lib/veneto-transfer-data';
import { getAllCrossBorderTransfers } from '@/lib/cross-border-data';
import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://www.italytaxiservice.com';

// Routes to exclude from the sitemap (admin, api, auth, internal)
const EXCLUDED_SEGMENTS = new Set([
  'crm', 'api', '_next', 'admin', 'auth',
  '(auth)', '(admin)', '(protected)',
]);

// Priority/frequency config per route pattern
function routeConfig(urlPath: string) {
  if (urlPath === '/') return { priority: 1.0, changeFrequency: 'daily' as const };
  if (['/book-now', '/contact', '/services', '/rome-airport-transfer', '/milan-chauffeur-service', '/florence-private-taxi'].includes(urlPath)) return { priority: 0.9, changeFrequency: 'weekly' as const };
  if (['/about-us', '/faq', '/coverage-areas', '/airport-transfer'].includes(urlPath)) return { priority: 0.8, changeFrequency: 'weekly' as const };
  if (urlPath.startsWith('/airport/') || urlPath.startsWith('/city/')) return { priority: 0.9, changeFrequency: 'weekly' as const };
  if (urlPath.startsWith('/route/')) return { priority: 0.9, changeFrequency: 'weekly' as const };
  if (urlPath.startsWith('/services/') || urlPath.startsWith('/tour/')) return { priority: 0.8, changeFrequency: 'weekly' as const };
  if (urlPath.startsWith('/blog/')) return { priority: 0.8, changeFrequency: 'weekly' as const };
  if (urlPath.startsWith('/attraction-transfer/') || urlPath.startsWith('/beach-transfer/')) return { priority: 0.7, changeFrequency: 'monthly' as const };
  if (urlPath.startsWith('/border/')) return { priority: 0.7, changeFrequency: 'monthly' as const };
  if (['/drivers', '/airport', '/route', '/city', '/tour', '/border', '/attraction-transfer', '/beach-transfer'].includes(urlPath)) return { priority: 0.6, changeFrequency: 'monthly' as const };
  return { priority: 0.5, changeFrequency: 'monthly' as const };
}

/**
 * Recursively walk the Next.js app directory and collect all routable paths.
 * - Skips excluded segments, files, and dynamic [slug] directories (handled separately).
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
      // Skip excluded, special Next.js folders, and dynamic segments
      if (
        EXCLUDED_SEGMENTS.has(name) ||
        name.startsWith('_') ||
        name.startsWith('(') ||
        name.startsWith('[') // dynamic — handled separately
      ) continue;

      walk(path.join(dir, name), [...urlParts, name]);
    }
  }

  walk(appDir, []);
  return routes;
}

/**
 * For a dynamic [slug] route (e.g. /beach-transfer/[slug]),
 * read all subdirectory names as slugs directly from the filesystem.
 */
function discoverDynamicSlugs(appDir: string, routeSegment: string): string[] {
  const routeDir = path.join(appDir, routeSegment);
  if (!fs.existsSync(routeDir)) return [];
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
  const dynamicSegments = [
    'airport',
    'city',
    'route',
    'tour',
    'border',
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

  const combined = [
    ...staticEntries,
    ...dynamicEntries,
    ...blogEntries,
    ...airportHotelEntries,
    ...florenceEntries,
    ...routeEntries,
    ...milanEntries,
    ...venetoEntries,
    ...crossBorderEntries,
  ];

  // De-duplicate by URL (a data-driven route may also have a physical folder).
  const seen = new Set<string>();
  return combined.filter((e) => {
    if (seen.has(e.url)) return false;
    seen.add(e.url);
    return true;
  });
}
