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

interface BlogPageProps {
  params: {
    slug: string;
  };
}

const getBlog = cache(async (slug: string) => {
  const { data } = await supabase
    .from('blogs')
    .select('*, bloggers(*)')
    .eq('slug', slug)
    .eq('status', 'published')
    .single();
  return data;
});

// Generate metadata for SEO
export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: blog.seo_title || blog.title,
    description: blog.seo_description || blog.excerpt,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: blog.title,
      description: blog.excerpt || '',
      images: [blog.featured_image_url || '/images/hero.png'],
    },
  };
}

export const revalidate = 60;

export default async function BlogPostPage({ params }: any) {
  const { slug } = await params;

  const blog = await getBlog(slug);

  if (!blog) {
    notFound();
  }

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.italytaxiservice.com/blog/${slug}`
    },
    "headline": blog.title,
    "image": [blog.featured_image_url || 'https://www.italytaxiservice.com/images/hero.png'],
    "datePublished": blog.published_at,
    "dateModified": blog.updated_at || blog.published_at,
    "author": {
      "@type": "Person",
      "name": blog.bloggers?.full_name || 'Italy Taxi Service Team',
      "url": `https://www.italytaxiservice.com/bloggers/${blog.bloggers?.id || 'main'}`
    },
    "publisher": {
      "@type": "Organization",
      "name": "Italy Taxi Service",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.italytaxiservice.com/icon.svg"
      }
    },
    "description": blog.excerpt || blog.seo_description
  };

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <Navbar />
      
      {/* Blog Header */}
      <div className="relative h-[60vh] min-h-[400px] w-full">
        <Image 
          src={blog.featured_image_url || '/images/hero.png'}
          alt={`${blog.title} in Italy`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="container mx-auto px-6 text-center max-w-4xl">
            <div className="mb-6">
              <span className="bg-gold text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                {blog.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {blog.title}
            </h1>
            <div className="flex items-center justify-center text-white/90 text-lg">
              <span>{new Date(blog.published_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              <span className="mx-3">•</span>
              <span>{blog.read_time}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-10 px-6">
        <Breadcrumb 
          items={[
            { name: 'Blog', item: '/blog' },
            { name: blog.title, item: `/blog/${slug}` }
          ]} 
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mt-10">
          {/* Post Content */}
          <article className="lg:col-span-8">
            <TableOfContents content={blog.content} />
            <div 
              className="prose prose-lg max-w-none prose-slate prose-headings:text-navy prose-a:text-gold prose-strong:text-navy"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
            
            {/* Contextual Service Link */}
            <div className="mt-12 p-8 border border-gold/30 bg-gold/5 rounded-2xl">
              <h4 className="text-xl font-bold text-navy mb-3">Planning to explore these spots?</h4>
              <p className="text-gray-700 text-lg mb-0 text-balance">
                Make your trip across Italy stress-free and truly memorable. <Link href="/services/private-tours" className="text-gold font-bold hover:underline">Book our taxi for sightseeing</Link> and enjoy comfortable, private transfers directly to all the top destinations mentioned here.
              </p>
            </div>

            {/* Author Section */}
            {blog.bloggers && (
              <div className="mt-16 p-8 bg-slate-50 rounded-3xl flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                  <Image 
                    src={blog.bloggers.avatar_url || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200'} 
                    alt={`${blog.bloggers.full_name} in Italy`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-navy mb-2">Written by {blog.bloggers.full_name}</h4>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {blog.bloggers.bio}
                  </p>
                </div>
              </div>
            )}
            
            <div className="mt-12 pt-12 border-t border-slate-100 flex justify-between items-center">
              <Link href="/blog" className="text-navy font-bold flex items-center hover:text-gold transition-colors">
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Blog
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-12">
            <div className="p-8 bg-navy rounded-3xl text-white">
              <h3 className="text-2xl font-bold mb-6">Need a Transfer?</h3>
              <p className="text-white/80 mb-8 text-lg">
                Book your professional taxi service in Italy with us for a safe and comfortable journey.
              </p>
              <Link 
                href="/book-now"
                className="block w-full text-center bg-gold hover:bg-white hover:text-navy text-white py-4 rounded-xl font-bold transition-all duration-300"
              >
                Book Now
              </Link>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-navy mb-6">Recent Articles</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/blog" className="flex items-center text-gray-600 hover:text-gold text-lg transition-colors">
                    <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                    Browse All Tips
                  </Link>
                </li>
                <li>
                  <Link href="/city" className="flex items-center text-gray-600 hover:text-gold text-lg transition-colors">
                    <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                    City Guides
                  </Link>
                </li>
                <li>
                  <Link href="/airport" className="flex items-center text-gray-600 hover:text-gold text-lg transition-colors">
                    <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                    Airport Info
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>

      <div className="bg-slate-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-navy mb-12">More from the Hub</h2>
          <RecentPosts currentSlug={slug} />
        </div>
      </div>

      <Footer />
    </main>
  );
}

async function RecentPosts({ currentSlug }: { currentSlug: string }) {
  const { data: posts } = await supabase
    .from('blogs')
    .select('*')
    .eq('status', 'published')
    .neq('slug', currentSlug)
    .order('published_at', { ascending: false })
    .limit(3);

  if (!posts || posts.length === 0) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {posts.map((post) => (
        <Link key={post.id} href={`/blog/${post.slug}`} className="group block">
          <div className="relative h-48 rounded-2xl overflow-hidden mb-4">
            <Image 
              src={post.featured_image_url || '/images/hero.png'} 
              alt={`${post.title} in Italy`} 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <h3 className="text-xl font-bold text-navy group-hover:text-gold transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="text-gray-500 text-sm mt-2">{new Date(post.published_at).toLocaleDateString()}</p>
        </Link>
      ))}
    </div>
  );
}
