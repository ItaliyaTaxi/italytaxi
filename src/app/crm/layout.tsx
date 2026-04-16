import type { Metadata } from 'next';

// Prevent all search engines from indexing or following links on any /crm/* page.
// This is required because /crm/page.tsx is a client component ('use client')
// and cannot export metadata itself.
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function CRMLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
