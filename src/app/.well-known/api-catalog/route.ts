import { NextResponse } from 'next/server';

const catalog = {
  linkset: [
    {
      anchor: 'https://www.italytaxiservice.com',
      'service-doc': [{ href: 'https://www.italytaxiservice.com/docs', type: 'text/html' }],
      'https://www.iana.org/assignments/link-relations/service-desc': [],
    },
    {
      anchor: 'https://www.italytaxiservice.com/api/contact',
      'service-doc': [
        { href: 'https://www.italytaxiservice.com/contact', type: 'text/html' },
      ],
    },
  ],
};

export function GET() {
  return new NextResponse(JSON.stringify(catalog, null, 2), {
    headers: {
      'Content-Type': 'application/linkset+json',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
