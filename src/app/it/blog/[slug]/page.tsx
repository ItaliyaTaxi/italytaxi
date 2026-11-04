import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { supabase } from '@/lib/supabase/client';
import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { cache } from 'react';
import TableOfContents from '@/components/TableOfContents';
import { rankRelated } from '@/lib/related-posts';
import { normalizeBlogContent, stripFAQBlock } from '@/lib/blog-content';
import { Calendar, Clock, ArrowLeft, ChevronRight, MessageCircle, HelpCircle } from 'lucide-react';

const SITE = 'https://www.italytaxiservice.com';
const WHATSAPP = '923148932631';

interface FAQItem { question: string; answer: string; }

/** Every published Italian post, as the candidate pool for related-post
 *  ranking. One query per render (deduped by `cache`), scored in memory. */
const getItRelatedPool = cache(async () => {
  const { data } = await supabase
    .from('blogs')
    .select('title, slug, excerpt, featured_image_url, category, focus_keyword, published_at, read_time')
    .eq('status', 'published')
    .eq('language', 'it');
  return data || [];
});

/** Italian post, looked up by its Italian slug. */
const getItBlog = cache(async (slug: string) => {
  const { data } = await supabase
    .from('blogs')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'published')
    .eq('language', 'it')
    .single();
  return data;
});

/** Pre-render every published Italian post at build time — see the English
 *  blog/[slug]/page.tsx for why this matters (avoids on-demand, per-request
 *  generation for every post). */
export async function generateStaticParams() {
  const { data } = await supabase
    .from('blogs')
    .select('slug')
    .eq('status', 'published')
    .eq('language', 'it');
  return (data || []).map((b) => ({ slug: b.slug }));
}

/** Extract FAQ pairs from the HTML — <h3 id="faq-N"> followed by <p>. */
function extractFAQItems(html: string): FAQItem[] {
  const faqRegex = /<h3[^>]*id="faq-[^"]*"[^>]*>(.*?)<\/h3>\s*<p>(.*?)<\/p>/gi;
  const items: FAQItem[] = [];
  let m;
  while ((m = faqRegex.exec(html)) !== null) {
    const q = m[1].replace(/<[^>]+>/g, '').trim();
    const a = m[2].replace(/<[^>]+>/g, '').trim();
    if (q && a) items.push({ question: q, answer: a });
  }
  return items;
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getItBlog(slug);
  if (!blog) return { title: 'Articolo non trovato' };

  // hreflang back to the English original.
  const languages: Record<string, string> = { 'it-IT': `/it/blog/${slug}` };
  if (blog.translation_of) {
    languages['en'] = `/blog/${blog.translation_of}`;
    languages['x-default'] = `/blog/${blog.translation_of}`;
  } else {
    languages['x-default'] = `/it/blog/${slug}`;
  }

  return {
    title: blog.seo_title || blog.title,
    description: blog.seo_description || blog.excerpt,
    alternates: { canonical: `/it/blog/${slug}`, languages },
    openGraph: {
      title: blog.seo_title || blog.title,
      description: blog.seo_description || blog.excerpt || '',
      url: `${SITE}/it/blog/${slug}`,
      images: [{ url: blog.featured_image_url || '/images/hero.png', width: 1200, height: 630, alt: blog.title }],
      type: 'article',
      locale: 'it_IT',
    },
    twitter: { card: 'summary_large_image', title: blog.seo_title || blog.title, description: blog.seo_description || blog.excerpt || '' },
  };
}

// Same reasoning as the English post page: content is batch-seeded, not
// continuously edited, so a long revalidate window is safe and far cheaper.
export const revalidate = 3600;

export default async function ItalianBlogPage({ params }: any) {
  const { slug } = await params;
  const blog = await getItBlog(slug);
  if (!blog) notFound();

  const postUrl = `${SITE}/it/blog/${slug}`;
  const imageUrl = blog.featured_image_url?.startsWith('http')
    ? blog.featured_image_url
    : `${SITE}${blog.featured_image_url || '/images/hero.png'}`;
  // See the English route: stored bodies are HTML, Markdown, or HTML with a
  // stray Markdown heading. Normalise once and reuse for render and parsing.
  const contentHtml = normalizeBlogContent(blog.content);
  // Extract from the FULL body (feeds the FAQ section and FAQPage schema),
  // then render the body without the pairs so they appear once, not twice.
  const faqItems = extractFAQItems(contentHtml);
  const bodyHtml = stripFAQBlock(contentHtml, faqItems.length > 0);
  const published = blog.published_at ? new Date(blog.published_at) : new Date();
  const dateLabel = published.toLocaleDateString('it-IT', { day: '2-digit', month: 'long', year: 'numeric', timeZone: 'UTC' });

  const blogSchema = {
    '@context': 'https://schema.org', '@type': 'BlogPosting',
    mainEntityOfPage: { '@type': 'WebPage', '@id': postUrl },
    headline: blog.title,
    description: blog.seo_description || blog.excerpt || '',
    image: imageUrl,
    inLanguage: 'it-IT',
    datePublished: blog.published_at, dateModified: blog.updated_at || blog.published_at,
    author: { '@type': 'Organization', name: 'Italy Taxi Service', url: SITE },
    publisher: { '@type': 'Organization', name: 'Italy Taxi Service', logo: { '@type': 'ImageObject', url: `${SITE}/images/logo.png` } },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/it/blog` },
      { '@type': 'ListItem', position: 3, name: blog.title, item: postUrl },
    ],
  };

  const faqSchema = faqItems.length > 0 ? {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    inLanguage: 'it-IT',
    mainEntity: faqItems.map((i) => ({
      '@type': 'Question', name: i.question,
      acceptedAnswer: { '@type': 'Answer', text: i.answer },
    })),
  } : null;

  // Topically ranked rather than "the three newest Italian posts", which is
  // what this used to return for every article on the site.
  const related = rankRelated(
    { slug, title: blog.title, category: blog.category, focus_keyword: blog.focus_keyword },
    await getItRelatedPool(),
    3,
  );

  return (
    <main className="font-inter bg-white text-navy">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <Navbar />

      <article className="pt-32 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link href="/it/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-navy transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" /> Torna al blog
          </Link>

          <p className="text-[10px] font-bold text-gold uppercase tracking-[0.3em] mb-3">{blog.category}</p>
          <h1 className="text-3xl md:text-5xl font-extrabold text-navy leading-tight mb-5">{blog.title}</h1>
          {blog.excerpt && <p className="text-lg text-gray-600 leading-relaxed mb-6">{blog.excerpt}</p>}

          <div className="flex flex-wrap items-center gap-5 text-sm text-gray-500 mb-8">
            <span className="inline-flex items-center gap-2"><Calendar className="w-4 h-4 text-gold" /> {dateLabel}</span>
            {blog.read_time && <span className="inline-flex items-center gap-2"><Clock className="w-4 h-4 text-gold" /> {blog.read_time}</span>}
            {blog.translation_of && (
              <Link href={`/blog/${blog.translation_of}`} className="inline-flex items-center gap-1 text-gold hover:underline font-semibold">
                Read in English <ChevronRight className="w-4 h-4" />
              </Link>
            )}
          </div>

          {blog.featured_image_url && (
            <div className="relative w-full h-[280px] md:h-[420px] rounded-[2rem] overflow-hidden mb-10 shadow-xl">
              <Image src={blog.featured_image_url} alt={blog.title} fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 900px" />
            </div>
          )}

          <TableOfContents content={bodyHtml} />

          <div className="blog-content" dangerouslySetInnerHTML={{ __html: bodyHtml }} />

          {/* ── Sezione FAQ ─ i blocchi faq- sono rimossi dal corpo e resi qui,
               come nella versione inglese, così da comparire una sola volta. */}
          {faqItems.length > 0 && (
            <section className="mt-14 mb-4" aria-label="Domande Frequenti">
              <div className="flex items-center gap-3 mb-8">
                <HelpCircle className="w-6 h-6 text-[#F4C430] flex-shrink-0" />
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#0F1C2E]">
                  Domande Frequenti
                </h2>
              </div>
              <div className="space-y-4">
                {faqItems.map((faq, i) => (
                  <details
                    key={i}
                    className="group border border-slate-200 rounded-2xl overflow-hidden open:border-[#F4C430]/40"
                  >
                    <summary className="flex items-start justify-between gap-4 px-6 py-5 cursor-pointer list-none bg-white group-open:bg-slate-50 transition-colors">
                      <span className="font-bold text-[#0F1C2E] text-sm md:text-base leading-snug">
                        {faq.question}
                      </span>
                      <span className="mt-0.5 w-5 h-5 rounded-full border border-[#F4C430] text-[#F4C430] flex-shrink-0 flex items-center justify-center text-lg font-bold leading-none select-none group-open:bg-[#F4C430] group-open:text-white transition-colors">
                        <span className="group-open:hidden">+</span>
                        <span className="hidden group-open:inline">−</span>
                      </span>
                    </summary>
                    <div className="px-6 pb-5 pt-1 bg-slate-50 text-gray-600 text-sm leading-relaxed border-t border-slate-100">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>
          )}

          {/* CTA */}
          <div style={{ background: '#0F1C2E' }} className="text-white rounded-[2rem] p-8 mt-12 text-center">
            <h2 className="text-2xl font-bold mb-2">Prenota il tuo transfer privato in Italia</h2>
            <p className="text-gray-300 text-sm mb-6">Prezzo fisso, autisti professionisti, servizio porta a porta 24/7.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/book-now" className="inline-block bg-gold text-navy font-bold px-8 py-3.5 rounded-full hover:bg-white transition-all">Richiedi un preventivo</Link>
              <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold px-8 py-3.5 rounded-full hover:bg-[#1da851] transition-all">
                <MessageCircle className="w-5 h-5" /> Scrivici su WhatsApp
              </a>
            </div>
          </div>
        </div>
      </article>

      {related && related.length > 0 && (
        <section className="py-16 bg-[#F8F9FA] border-t border-gray-100">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-2xl font-bold text-navy mb-8">Articoli correlati</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((p: any) => (
                <Link key={p.slug} href={`/it/blog/${p.slug}`} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all">
                  <div className="relative h-40">
                    <Image src={p.featured_image_url || '/images/hero.png'} alt={p.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 320px" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-navy group-hover:text-gold transition-colors leading-snug mb-2 line-clamp-2">{p.title}</h3>
                    {p.read_time && <p className="text-xs text-gray-400">{p.read_time}</p>}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
