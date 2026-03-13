import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/crm/', 
        '/crm/login/',
        '/favicon.ico',   // Prevent crawling of favicon with query params
      ],
    },
    sitemap: 'https://www.italytaxiservice.com/sitemap.xml',
  };
}
