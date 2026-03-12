import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/crm/', 
        '/crm/login/',
        '/_next/static/', // Prevent crawling of font files and other static assets
        '/favicon.ico',   // Prevent crawling of favicon with query params
      ],
    },
    sitemap: 'https://www.italytaxiservice.com/sitemap.xml',
  };
}
