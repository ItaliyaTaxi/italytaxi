import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/crm/', '/crm/login/'],
    },
    sitemap: 'https://italytaxiservice.com/sitemap.xml',
  };
}
