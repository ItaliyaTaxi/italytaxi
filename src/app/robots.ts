import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Default rule: allow all crawlers to access everything except CRM
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/crm/',
          '/crm/login/',
        ],
      },
      // Googlebot: explicitly allow all public content including Next.js assets
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/crm/',
          '/crm/login/',
        ],
      },
      // Bingbot: same policy
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: [
          '/crm/',
          '/crm/login/',
        ],
      },
    ],
    sitemap: 'https://www.italytaxiservice.com/sitemap.xml',
    host: 'https://www.italytaxiservice.com',
  };
}
