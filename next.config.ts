import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react'],
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

    // Remote domains for Unsplash images
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
    ],
  },

  async headers() {
    return [
      // ─── Security headers for all routes ───────────────────────────────────
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.clarity.ms https://c.bing.com https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https: https://www.google-analytics.com https://stats.g.doubleclick.net https://www.googletagmanager.com https://*.clarity.ms; font-src 'self' data: https://fonts.gstatic.com; connect-src 'self' https://*.supabase.co https://*.clarity.ms https://*.bing.com https://www.google-analytics.com https://stats.g.doubleclick.net;"
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
