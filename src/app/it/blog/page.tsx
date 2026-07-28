import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { supabase } from '@/lib/supabase/client';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, ChevronRight } from 'lucide-react';

const SITE = 'https://www.italytaxiservice.com';

export const metadata: Metadata = {
  title: 'Blog di Viaggio in Italia | Italy Taxi Service',
  description: 'Guide, consigli e informazioni pratiche per viaggiare in Italia: transfer aeroportuali, città, itinerari e molto altro, in italiano.',
  alternates: { canonical: '/it/blog', languages: { 'it-IT': '/it/blog', 'en': '/blog', 'x-default': '/blog' } },
  openGraph: {
    title: 'Blog di Viaggio in Italia | Italy Taxi Service',
    description: 'Guide e consigli pratici per viaggiare in Italia, in italiano.',
    url: `${SITE}/it/blog`, type: 'website', locale: 'it_IT',
  },
};

// Same reasoning as the English blog listing: batch-seeded content, long
// window is safe and cuts ISR reads/regenerations sharply (was 60s).
export const revalidate = 3600;

export default async function ItalianBlogIndex() {
  const { data: blogs } = await supabase
    .from('blogs')
    .select('title, slug, excerpt, featured_image_url, category, read_time, published_at')
    .eq('status', 'published')
    .eq('language', 'it')
    .order('published_at', { ascending: false });

  return (
    <main className="font-inter bg-white text-navy">
      <Navbar />

      <section className="pt-32 pb-12">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <p className="text-[10px] font-bold text-gold uppercase tracking-[0.3em] mb-3">Blog</p>
          <h1 className="text-3xl md:text-5xl font-extrabold text-navy leading-tight mb-4">Guide di Viaggio in Italia</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Consigli pratici, itinerari e informazioni sui transfer privati in Italia — scritti per chi viaggia.
          </p>
          <Link href="/blog" className="inline-flex items-center gap-1 text-sm font-semibold text-gold hover:text-navy transition-colors mt-4">
            Read in English <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-6 max-w-5xl">
          {!blogs || blogs.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-sm font-bold text-navy opacity-40 uppercase tracking-widest">Nessun articolo disponibile al momento.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {blogs.map((p: any) => (
                <Link key={p.slug} href={`/it/blog/${p.slug}`} className="group bg-white rounded-[1.5rem] overflow-hidden border border-gray-100 hover:shadow-xl transition-all">
                  <div className="relative h-48">
                    <Image src={p.featured_image_url || '/images/hero.png'} alt={p.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 360px" />
                  </div>
                  <div className="p-6">
                    <p className="text-[9px] font-bold text-gold uppercase tracking-[0.25em] mb-2">{p.category}</p>
                    <h2 className="font-bold text-navy group-hover:text-gold transition-colors leading-snug mb-2 line-clamp-2">{p.title}</h2>
                    {p.excerpt && <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 mb-3">{p.excerpt}</p>}
                    {p.read_time && <span className="inline-flex items-center gap-1 text-xs text-gray-400"><Clock className="w-3.5 h-3.5 text-gold" /> {p.read_time}</span>}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
