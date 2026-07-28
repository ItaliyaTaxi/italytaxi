import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react', 'react-icons'],
  },
  // Disable the "X-Powered-By: Next.js" header to reduce response size and hide stack info
  poweredByHeader: false,

  // Enable gzip/brotli compression for all responses
  compress: true,

  images: {
    // Serve modern formats first: AVIF (~50% smaller than WebP), then WebP, then original
    formats: ['image/avif', 'image/webp'],

    // Responsive breakpoints for mobile-first optimization
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],

    // Sizes for fixed-width images
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    // Cache optimized images for 1 year
    minimumCacheTTL: 31536000,

    // Remote domains for Unsplash and Custom Images
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
      {
        protocol: 'https',
        hostname: 'en.kampaoh.com',
      },
      {
        protocol: 'https',
        hostname: 'www.italia.it',
      },
      {
        protocol: 'https',
        hostname: 'www.sardegnaturismo.it',
      },
      {
        protocol: 'https',
        hostname: 'a.storyblok.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.mos.cms.futurecdn.net',
      },
      // aprilmunday.wordpress.com removed — replaced with local /images/hero.png across all pages
    ],
  },

  // 301s for the legacy "-taxi-service" city slugs — duplicate-content pages
  // that competed with the clean /city/{slug} URL for the same keyword.
  // Keep these permanently; do not remove even after the old pages are gone
  // from generateStaticParams, since external backlinks/bookmarks persist.
  async redirects() {
    return [
      { source: '/city/rome-taxi-service', destination: '/city/rome', permanent: true },
      { source: '/city/milan-taxi-service', destination: '/city/milan', permanent: true },
      { source: '/city/florence-taxi-service', destination: '/city/florence', permanent: true },
      { source: '/city/venice-taxi-service', destination: '/city/venice', permanent: true },
      { source: '/city/naples-taxi-service', destination: '/city/naples', permanent: true },
      { source: '/city/bologna-taxi-service', destination: '/city/bologna', permanent: true },
      { source: '/city/palermo-taxi-service', destination: '/city/palermo', permanent: true },
      { source: '/city/amalfi-taxi-service', destination: '/city/amalfi', permanent: true },
      { source: '/city/como-taxi-service', destination: '/city/como', permanent: true },

      // Legacy static route structures removed when the site moved to the
      // dynamic /city/[slug] and /airport/[slug] systems (see cleanup.py,
      // which deleted src/app/city-transfer/* and src/app/airport-transfer/*
      // per-city sub-pages). Google Search Console still shows crawl attempts
      // against these old URLs — redirect rather than leave them 404ing.
      { source: '/city-transfer', destination: '/city', permanent: true },
      { source: '/city-transfer/:path*', destination: '/city', permanent: true },
      // /airport-transfer itself is a real, current page (src/app/(site)/airport-transfer) —
      // only its old per-city sub-paths (e.g. /airport-transfer/rome-taxi-service) are gone.
      { source: '/airport-transfer/:path+', destination: '/airport', permanent: true },
    ];
  },

  async headers() {
    return [
      // ─── Agent discovery Link headers for homepage ─────────────────────────
      {
        source: '/',
        headers: [
          {
            key: 'Link',
            value: [
              '</.well-known/api-catalog>; rel="api-catalog"',
              '</.well-known/agent-skills/index.json>; rel="https://agentskills.io/rel/skills-index"',
              '</.well-known/mcp/server-card.json>; rel="https://modelcontextprotocol.io/rel/server-card"',
            ].join(', '),
          },
        ],
      },

      // ─── Security headers for all routes ───────────────────────────────────
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.clarity.ms https://scripts.clarity.ms https://c.bing.com https://www.googletagmanager.com https://www.google-analytics.com https://translate.google.com https://translate.googleapis.com https://translate-pa.googleapis.com https://www.gstatic.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://www.gstatic.com https://translate.googleapis.com; img-src 'self' data: https: https://www.google-analytics.com https://stats.g.doubleclick.net https://www.googletagmanager.com https://*.clarity.ms; font-src 'self' data: https://fonts.gstatic.com https://www.gstatic.com; connect-src 'self' https://*.supabase.co https://*.clarity.ms https://*.bing.com https://www.google-analytics.com https://stats.g.doubleclick.net https://translate.googleapis.com https://translate.google.com https://translate-pa.googleapis.com; frame-src 'self' https://translate.google.com https://translate.googleapis.com https://www.google.com https://maps.google.com;"
          },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
          },
        ],
      },

      // ─── CRM routes: block indexing at HTTP header level ───────────────────
      {
        source: '/crm/:path*',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex, nofollow' },
        ],
      },

      // ─── Immutable cache for hashed Next.js static assets ──────────────────
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },

      // ─── Long-lived cache for public images ────────────────────────────────
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate=604800',
          },
        ],
      },

      // ─── Optimized image endpoint ───────────────────────────────────────────
      {
        source: '/_next/image(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
