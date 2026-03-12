import { MetadataRoute } from 'next';
import { airports, cities, tours } from '@/lib/page-data';

const BASE_URL = 'https://www.italytaxiservice.com';

const staticPages = [
  '',
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
  '/services/airport-transfers',
  '/services/city-to-city',
  '/services/private-tours',
  '/services/hotel-transfers',
  '/services/business-taxi',
  '/services/hourly-taxi',
  '/services/wedding-transfers',
  '/services/wedding-events',
  '/services/cruise-port-transfers',
  '/attraction-transfer/amalfi-coast-taxi-transfer',
  '/attraction-transfer/arena-di-verona-taxi-transfer',
  '/attraction-transfer/capri-island-taxi-transfer',
  '/attraction-transfer/castel-dell-ovo-taxi-transfer',
  '/attraction-transfer/cinque-terre-taxi-transfer',
  '/attraction-transfer/colosseum-taxi-transfer',
  '/attraction-transfer/costa-smeralda-taxi-transfer',
  '/attraction-transfer/dolomites-taxi-transfer',
  '/attraction-transfer/elba-island-taxi-transfer',
  '/attraction-transfer/florence-cathedral-taxi-transfer',
  '/attraction-transfer/lake-como-taxi-transfer',
  '/attraction-transfer/lake-garda-taxi-transfer',
  '/attraction-transfer/lake-maggiore-taxi-transfer',
  '/attraction-transfer/leaning-tower-of-pisa-taxi-transfer',
  '/attraction-transfer/mole-antonelliana-taxi-transfer',
  '/attraction-transfer/mount-etna-taxi-transfer',
  '/attraction-transfer/paestum-temples-taxi-transfer',
  '/attraction-transfer/pantheon-taxi-transfer',
  '/attraction-transfer/piazza-del-campo-taxi-transfer',
  '/attraction-transfer/pompeii-taxi-transfer',
  '/attraction-transfer/rialto-bridge-taxi-transfer',
  '/attraction-transfer/royal-palace-caserta-taxi-transfer',
  '/attraction-transfer/san-gimignano-taxi-transfer',
  '/attraction-transfer/sassi-matera-taxi-transfer',
  '/attraction-transfer/st-marks-basilica-taxi-transfer',
  '/attraction-transfer/trevi-fountain-taxi-transfer',
  '/attraction-transfer/trulli-alberobello-taxi-transfer',
  '/attraction-transfer/uffizi-gallery-taxi-transfer',
  '/attraction-transfer/valley-of-the-temples-taxi-transfer',
  '/attraction-transfer/vatican-museums-taxi-transfer',
  '/beach-transfer/amalfi-coast-taxi',
  '/beach-transfer/cala-luna-beach-transfer',
  '/beach-transfer/camogli-taxi-transfer',
  '/beach-transfer/capri-island-taxi',
  '/beach-transfer/conero-beach-taxi',
  '/beach-transfer/costa-smeralda-taxi',
  '/beach-transfer/elba-beach-taxi',
  '/beach-transfer/ischia-beach-taxi',
  '/beach-transfer/lido-venezia-beach-taxi',
  '/beach-transfer/otranto-beach-taxi',
  '/beach-transfer/polignano-a-mare-beach-taxi',
  '/beach-transfer/portofino-taxi-transfer',
  '/beach-transfer/positano-beach-taxi',
  '/beach-transfer/rimini-beach-taxi',
  '/beach-transfer/san-vito-lo-capo-taxi',
  '/beach-transfer/sardinia-beach-transfers',
  '/beach-transfer/sirolo-beach-taxi',
  '/beach-transfer/sperlonga-taxi-transfer',
  '/beach-transfer/taormina-beach-transfer',
  '/beach-transfer/tropea-beach-taxi',
];

const borderSlugs = [
  'italy-to-switzerland',
  'italy-to-france',
  'italy-to-austria',
  'italy-to-germany',
  'italy-to-slovenia',
  'italy-to-croatia',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticPages.map((path) => ({
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

  return [
    ...staticEntries,
    ...airportEntries,
    ...cityEntries,
    ...tourEntries,
    ...borderEntries,
  ];
}
