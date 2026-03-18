import { MetadataRoute } from 'next';
import { airports, cities, tours } from '@/lib/page-data';
import { supabase } from '@/lib/supabase/client';

const BASE_URL = 'https://www.italytaxiservice.com';

const staticPages = [
  '/',
  '/about-us',
  '/contact',
  '/book-now',
  '/faq',
  '/drivers',
  '/coverage-areas',
  '/blog',
  '/privacy-policy',
  '/terms-and-conditions',
  '/airport',
  '/city',
  '/airport-transfer',
  '/services',
];

const servicePages = [
  '/services/airport-transfers',
  '/services/city-to-city',
  '/services/private-tours',
  '/services/hotel-transfers',
  '/services/business-taxi',
  '/services/hourly-taxi',
  '/services/wedding-transfers',
  '/services/wedding-events',
  '/services/cruise-port-transfers',
];

const attractionTransfers = [
  'amalfi-coast-taxi-transfer',
  'arena-di-verona-taxi-transfer',
  'capri-island-taxi-transfer',
  'castel-dell-ovo-taxi-transfer',
  'cinque-terre-taxi-transfer',
  'colosseum-taxi-transfer',
  'costa-smeralda-taxi-transfer',
  'dolomites-taxi-transfer',
  'elba-island-taxi-transfer',
  'florence-cathedral-taxi-transfer',
  'lake-como-taxi-transfer',
  'lake-garda-taxi-transfer',
  'lake-maggiore-taxi-transfer',
  'leaning-tower-of-pisa-taxi-transfer',
  'mole-antonelliana-taxi-transfer',
  'mount-etna-taxi-transfer',
  'paestum-temples-taxi-transfer',
  'pantheon-taxi-transfer',
  'piazza-del-campo-taxi-transfer',
  'pompeii-taxi-transfer',
  'rialto-bridge-taxi-transfer',
  'royal-palace-caserta-taxi-transfer',
  'san-gimignano-taxi-transfer',
  'sassi-matera-taxi-transfer',
  'st-marks-basilica-taxi-transfer',
  'trevi-fountain-taxi-transfer',
  'trulli-alberobello-taxi-transfer',
  'uffizi-gallery-taxi-transfer',
  'valley-of-the-temples-taxi-transfer',
  'vatican-museums-taxi-transfer',
];

const beachTransfers = [
  'amalfi-coast-taxi',
  'cala-luna-beach-transfer',
  'camogli-taxi-transfer',
  'capri-island-taxi',
  'conero-beach-taxi',
  'costa-smeralda-taxi',
  'elba-beach-taxi',
  'ischia-beach-taxi',
  'lido-venezia-beach-taxi',
  'otranto-beach-taxi',
  'polignano-a-mare-beach-taxi',
  'portofino-taxi-transfer',
  'positano-beach-taxi',
  'rimini-beach-taxi',
  'san-vito-lo-capo-taxi',
  'sardinia-beach-transfers',
  'sirolo-beach-taxi',
  'sperlonga-taxi-transfer',
  'taormina-beach-transfer',
  'tropea-beach-taxi',
];

const borderSlugs = [
  'italy-to-switzerland',
  'italy-to-france',
  'italy-to-austria',
  'italy-to-germany',
  'italy-to-slovenia',
  'italy-to-croatia',
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = [...staticPages, ...servicePages].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === '' ? 'daily' : 'weekly',
    priority: path === '' ? 1 : 0.8,
  }));

  const airportEntries: MetadataRoute.Sitemap = airports.map((a) => ({
    url: `${BASE_URL}/airport/${a.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  const cityEntries: MetadataRoute.Sitemap = cities.map((c) => ({
    url: `${BASE_URL}/city/${c.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  const tourEntries: MetadataRoute.Sitemap = tours.map((t) => ({
    url: `${BASE_URL}/tour/${t.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const borderEntries: MetadataRoute.Sitemap = borderSlugs.map((slug) => ({
    url: `${BASE_URL}/border/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const attractionEntries: MetadataRoute.Sitemap = attractionTransfers.map((slug) => ({
    url: `${BASE_URL}/attraction-transfer/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const beachEntries: MetadataRoute.Sitemap = beachTransfers.map((slug) => ({
    url: `${BASE_URL}/beach-transfer/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  let blogEntries: MetadataRoute.Sitemap = [];
  try {
    const { data: blogs, error } = await supabase
      .from('blogs')
      .select('slug, updated_at')
      .eq('status', 'published');
      
    if (!error && blogs) {
      blogEntries = blogs.map((blog) => ({
        url: `${BASE_URL}/blog/${blog.slug}`,
        lastModified: blog.updated_at ? new Date(blog.updated_at) : now,
        changeFrequency: 'weekly',
        priority: 0.8,
      }));
    }
  } catch (err) {
    console.error('Error fetching blogs for sitemap:', err);
  }

  return [
    ...staticEntries,
    ...airportEntries,
    ...cityEntries,
    ...tourEntries,
    ...borderEntries,
    ...attractionEntries,
    ...beachEntries,
    ...blogEntries,
  ];
}
