import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { supabase } from '@/lib/supabase/client';
import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { cache } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import TableOfContents from '@/components/TableOfContents';
import { Calendar, Clock, ArrowLeft, Tag, Phone, MessageCircle, ChevronRight, ShieldCheck, ThumbsUp, Star, HelpCircle } from 'lucide-react';

const getBlog = cache(async (slug: string) => {
  const { data } = await supabase
    .from('blogs')
    .select('*, bloggers(*)')
    .eq('slug', slug)
    .eq('status', 'published')
    .eq('language', 'en')
    .single();
  return data;
});

/** Slug of the Italian translation of this English post, if one is published. */
const getItalianTranslationSlug = cache(async (enSlug: string): Promise<string | null> => {
  const { data } = await supabase
    .from('blogs')
    .select('slug')
    .eq('translation_of', enSlug)
    .eq('language', 'it')
    .eq('status', 'published')
    .maybeSingle();
  return data?.slug ?? null;
});

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlog(slug);
  if (!blog) return { title: 'Article Not Found' };

  // hreflang: point at the Italian twin when it exists.
  const itSlug = await getItalianTranslationSlug(slug);
  const languages: Record<string, string> = { 'en': `/blog/${slug}`, 'x-default': `/blog/${slug}` };
  if (itSlug) languages['it-IT'] = `/it/blog/${itSlug}`;

  return {
    title: blog.seo_title || blog.title,
    description: blog.seo_description || blog.excerpt,
    alternates: { canonical: `/blog/${slug}`, languages },
    openGraph: {
      title: blog.seo_title || blog.title,
      description: blog.seo_description || blog.excerpt || '',
      url: `https://www.italytaxiservice.com/blog/${slug}`,
      images: [{ url: blog.featured_image_url || '/images/hero.png', width: 1200, height: 630, alt: blog.title }],
      type: 'article',
    },
  };
}

export const revalidate = 60;

interface FAQItem { question: string; answer: string }

/** Extract FAQ pairs from blog HTML — looks for <h3 id="faq-..."> followed by <p> */
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

function buildFAQSchema(items: FAQItem[], postUrl: string) {
  if (items.length === 0) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((i) => ({
      '@type': 'Question',
      name: i.question,
      acceptedAnswer: { '@type': 'Answer', text: i.answer },
    })),
  };
}

export default async function BlogPostPage({ params }: any) {
  const { slug } = await params;
  const blog = await getBlog(slug);
  if (!blog) notFound();

  const SITE = 'https://www.italytaxiservice.com';
  const postUrl = `${SITE}/blog/${slug}`;
  const rawImg = blog.featured_image_url || '/images/hero.png';
  const imageUrl = rawImg.startsWith('http') ? rawImg : `${SITE}${rawImg.startsWith('/') ? '' : '/'}${rawImg}`;

  // ImageObject — explicit image schema for the featured image
  const imageSchema = {
    '@type': 'ImageObject',
    url: imageUrl,
    contentUrl: imageUrl,
    width: 1200,
    height: 630,
    caption: blog.seo_title || blog.title,
  };

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: { '@type': 'WebPage', '@id': postUrl },
    headline: blog.title,
    description: blog.excerpt || blog.seo_description,
    image: imageSchema,
    datePublished: blog.published_at,
    dateModified: blog.updated_at || blog.published_at,
    author: {
      '@type': 'Person',
      name: blog.bloggers?.full_name || 'Italy Taxi Service Editorial Team',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Italy Taxi Service',
      logo: { '@type': 'ImageObject', url: `${SITE}/icon.svg` },
    },
  };

  // BreadcrumbList — Home › Blog › Article
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
      { '@type': 'ListItem', position: 3, name: blog.title, item: postUrl },
    ],
  };

  // LocalBusiness / TaxiService reference — reinforces the provider on every post
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'TaxiService',
    '@id': `${SITE}/#taxiservice`,
    name: 'Italy Taxi Service',
    url: SITE,
    image: `${SITE}/images/hero.png`,
    email: 'italytaxiservicee@gmail.com',
    areaServed: { '@type': 'Country', name: 'Italy' },
    provider: { '@type': 'Organization', name: 'Italy Taxi Service', url: SITE },
  };

  const faqItems = extractFAQItems(blog.content);
  const faqSchema = buildFAQSchema(faqItems, postUrl);

  const publishDate = new Date(blog.published_at).toLocaleDateString('en-US', {
    month: 'long', day: 'numeric', year: 'numeric',
  });

  return (
    <main className="min-h-screen bg-white font-inter">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      <Navbar />

      {/* ── Hero ───────────────────────────────────────────────────────────────── */}
      <div className="relative w-full bg-[#0F1C2E] pt-32 pb-16">
        <div className="container mx-auto px-6 max-w-5xl">
          {blog.category && (
            <span className="inline-block bg-[#F4C430] text-[#0F1C2E] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5">
              {blog.category}
            </span>
          )}
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-5 max-w-3xl">
            {blog.title}
          </h1>
          <div className="flex flex-wrap items-center gap-5 text-white/80 text-sm">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {publishDate}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {blog.read_time || '6 min read'}
            </span>
            {blog.bloggers?.full_name && (
              <span className="flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-[#F4C430]/60 inline-flex items-center justify-center text-[9px] font-bold text-[#0F1C2E]">
                  {blog.bloggers.full_name[0]}
                </span>
                {blog.bloggers.full_name}
              </span>
            )}
            {blog.focus_keyword && (
              <span className="flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5" />
                {blog.focus_keyword}
              </span>
            )}
          </div>

          {/* Trust Bar */}
          <div className="flex flex-wrap items-center gap-6 mt-10 pt-8 border-t border-white/20 text-white/90 text-sm">
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#F4C430]" />
              Professional NCC-Licensed Drivers
            </span>
            <span className="flex items-center gap-2">
              <Star className="w-5 h-5 text-[#F4C430]" />
              Top Rated Taxi Service
            </span>
            <span className="flex items-center gap-2">
              <ThumbsUp className="w-5 h-5 text-[#F4C430]" />
              Fixed Prices &amp; No Hidden Fees
            </span>
          </div>
        </div>
      </div>

      {/* ── Breadcrumb ──────────────────────────────────────────────────────────── */}
      <div className="container mx-auto px-6 py-5 max-w-5xl">
        <Breadcrumb
          items={[
            { name: 'Home', item: '/' },
            { name: 'Blog', item: '/blog' },
            { name: blog.title, item: `/blog/${slug}` },
          ]}
        />
      </div>

      {/* ── Body ──────────────────────────────────────────────────────────────── */}
      <div className="container mx-auto px-6 pb-20 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16">

          {/* ── Article ─────────────────────────────────────────────────────── */}
          <article className="lg:col-span-8 min-w-0">

            {/* Overview / excerpt lead */}
            {blog.excerpt && (
              <p className="text-xl text-gray-600 leading-relaxed mb-10 font-light border-l-4 border-[#F4C430] pl-5">
                {blog.excerpt}
              </p>
            )}

            {/* Table of Contents — headings parsed from stored HTML IDs */}
            <TableOfContents content={blog.content} />

            {/* Featured Image */}
            {blog.featured_image_url && (
              <figure className="my-8 rounded-2xl overflow-hidden shadow-md border border-slate-100">
                <div className="relative w-full aspect-[16/9]">
                  <Image
                    src={blog.featured_image_url}
                    alt={blog.seo_title || blog.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <figcaption className="px-5 py-3 bg-slate-50 text-sm text-center text-gray-500 border-t border-slate-100 italic">
                  {blog.seo_title || blog.title}
                </figcaption>
              </figure>
            )}

            {/* Article body */}
            <div
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            {/* ── FAQ Section ──────────────────────────────────────────────── */}
            {faqItems.length > 0 && (
              <section className="mt-14 mb-4" aria-label="Frequently Asked Questions">
                <div className="flex items-center gap-3 mb-8">
                  <HelpCircle className="w-6 h-6 text-[#F4C430] flex-shrink-0" />
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#0F1C2E]">
                    Frequently Asked Questions
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

            {/* CTA box */}
            <div className="mt-12 p-8 bg-[#0F1C2E] rounded-2xl text-white">
              <h4 className="text-xl font-bold mb-3">Ready to Travel Italy Stress-Free?</h4>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Book a professional private taxi or airport transfer anywhere in Italy. Fixed prices,
                NCC-licensed drivers, meet &amp; greet service — 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/book-now"
                  className="inline-block bg-[#F4C430] text-[#0F1C2E] font-bold px-8 py-3 rounded-full text-sm uppercase tracking-widest hover:bg-yellow-400 transition-colors text-center"
                >
                  Book a Transfer
                </Link>
                <Link
                  href="/contact"
                  className="inline-block border border-white/40 text-white font-bold px-8 py-3 rounded-full text-sm uppercase tracking-widest hover:bg-white/10 transition-colors text-center"
                >
                  Get a Custom Quote
                </Link>
              </div>
            </div>

            {/* Author */}
            {blog.bloggers && (
              <div className="mt-12 p-8 bg-slate-50 rounded-2xl flex flex-col md:flex-row items-center md:items-start gap-7">
                <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={blog.bloggers.avatar_url || '/images/team/member1.png'}
                    alt={`${blog.bloggers.full_name} — Italy Taxi Service author`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#F4C430] mb-1">Written by</p>
                  <h4 className="text-lg font-bold text-[#0F1C2E] mb-2">{blog.bloggers.full_name}</h4>
                  {blog.bloggers.bio && (
                    <p className="text-gray-600 text-sm leading-relaxed">{blog.bloggers.bio}</p>
                  )}
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="mt-10 pt-8 border-t border-slate-100 flex justify-between items-center">
              <Link href="/blog" className="flex items-center gap-2 text-[#0F1C2E] font-bold hover:text-[#F4C430] transition-colors text-sm">
                <ArrowLeft className="w-4 h-4" />
                All Articles
              </Link>
              <Link href="/book-now" className="flex items-center gap-2 text-[#F4C430] font-bold hover:underline text-sm">
                Book a Transfer
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </article>

          {/* ── Sticky Sidebar ───────────────────────────────────────────────── */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">

              {/* Book Now */}
              <div className="bg-[#0F1C2E] rounded-2xl p-7 text-white">
                <p className="text-xs font-bold uppercase tracking-widest text-[#F4C430] mb-2">Get Started</p>
                <h3 className="text-xl font-bold mb-4">Book Your Italy Transfer</h3>
                <ul className="text-gray-400 text-sm space-y-2 mb-6">
                  <li className="flex items-start gap-2"><span className="text-[#F4C430] mt-0.5">✓</span> Fixed prices, no surprises</li>
                  <li className="flex items-start gap-2"><span className="text-[#F4C430] mt-0.5">✓</span> NCC-licensed professional drivers</li>
                  <li className="flex items-start gap-2"><span className="text-[#F4C430] mt-0.5">✓</span> ZTL access — historic centres</li>
                  <li className="flex items-start gap-2"><span className="text-[#F4C430] mt-0.5">✓</span> 24/7 availability</li>
                </ul>
                <Link
                  href="/book-now"
                  className="block w-full text-center bg-[#F4C430] hover:bg-yellow-400 text-[#0F1C2E] py-3.5 rounded-xl font-bold text-sm transition-colors"
                >
                  Book Now — Instant Confirmation
                </Link>
                <a
                  href="https://wa.me/923148932631"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 flex items-center justify-center gap-2 w-full border border-white/20 hover:bg-white/10 text-white py-3 rounded-xl font-bold text-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Us
                </a>
              </div>

              {/* Popular Services */}
              <div className="border border-gray-100 rounded-2xl p-6">
                <h3 className="text-sm font-extrabold text-[#0F1C2E] mb-4 uppercase tracking-wider">Our Services</h3>
                <ul className="space-y-2.5 text-sm">
                  {[
                    { label: 'Airport Transfers', href: '/services/airport-transfers' },
                    { label: 'Rome Airport Transfer', href: '/rome-airport-transfer' },
                    { label: 'Milan Chauffeur Service', href: '/milan-chauffeur-service' },
                    { label: 'Florence Private Taxi', href: '/florence-private-taxi' },
                    { label: 'City-to-City Transfers', href: '/services/city-to-city' },
                    { label: 'Private Tours', href: '/services/private-tours' },
                    { label: 'Business Taxi', href: '/services/business-taxi' },
                    { label: 'Cruise Port Transfers', href: '/services/cruise-port-transfers' },
                  ].map((s) => (
                    <li key={s.href}>
                      <Link href={s.href} className="flex items-center gap-2 text-gray-600 hover:text-[#F4C430] transition-colors">
                        <ChevronRight className="w-3.5 h-3.5 text-[#F4C430] flex-shrink-0" />
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Coverage cities */}
              <div className="bg-slate-50 rounded-2xl p-6">
                <h3 className="text-sm font-extrabold text-[#0F1C2E] mb-4 uppercase tracking-wider">We Cover</h3>
                <div className="grid grid-cols-2 gap-y-2 gap-x-1 text-sm">
                  {['Rome', 'Milan', 'Florence', 'Venice', 'Naples', 'Bologna', 'Amalfi Coast', 'Lake Como'].map((city) => (
                    <span key={city} className="flex items-center gap-1.5 text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F4C430] flex-shrink-0" />
                      {city}
                    </span>
                  ))}
                </div>
                <Link href="/coverage-areas" className="mt-4 block text-xs text-[#F4C430] font-bold hover:underline">
                  View all coverage areas →
                </Link>
              </div>

            </div>
          </aside>
        </div>
      </div>

      {/* ── Related Posts ──────────────────────────────────────────────────────── */}
      <div className="bg-slate-50 py-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-extrabold text-[#0F1C2E]">More Travel Guides</h2>
            <Link href="/blog" className="text-sm font-bold text-[#F4C430] hover:underline flex items-center gap-1">
              All Articles <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <RelatedPosts currentSlug={slug} category={blog.category} />
        </div>
      </div>

      <Footer />
    </main>
  );
}

async function RelatedPosts({ currentSlug, category }: { currentSlug: string; category: string }) {
  const { data: posts } = await supabase
    .from('blogs')
    .select('id, title, slug, excerpt, featured_image_url, category, published_at, read_time')
    .eq('status', 'published')
    .eq('language', 'en')
    .neq('slug', currentSlug)
    .order('published_at', { ascending: false })
    .limit(3);

  if (!posts || posts.length === 0) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {posts.map((post) => (
        <Link key={post.id} href={`/blog/${post.slug}`} className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
          <div className="relative h-44 overflow-hidden">
            <Image
              src={post.featured_image_url || '/images/hero.png'}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {post.category && (
              <span className="absolute top-3 left-3 bg-[#F4C430] text-[#0F1C2E] text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                {post.category}
              </span>
            )}
          </div>
          <div className="p-6">
            <h3 className="font-bold text-[#0F1C2E] group-hover:text-[#F4C430] transition-colors leading-snug mb-2 line-clamp-2">
              {post.title}
            </h3>
            <p className="text-xs text-gray-400 flex items-center gap-2">
              <Clock className="w-3 h-3" />
              {post.read_time || '5 min read'}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
