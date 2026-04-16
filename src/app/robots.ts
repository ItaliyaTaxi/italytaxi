import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      disallow: ['/crm/'],
    },
    sitemap: 'https://www.italytaxiservice.com/sitemap.xml',
    host: 'https://www.italytaxiservice.com',
  };
}
