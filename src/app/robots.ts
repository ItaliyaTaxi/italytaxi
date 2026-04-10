import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/crm/',
          '/crm/login/',
          '/api/',
          '/_next/',
        ],
      },
      // Allow Googlebot and Bingbot full access (including above-the-fold content)
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/crm/', '/api/'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/crm/', '/api/'],
      },
    ],
    sitemap: 'https://www.italytaxiservice.com/sitemap.xml',
    host: 'https://www.italytaxiservice.com',
  };
}
