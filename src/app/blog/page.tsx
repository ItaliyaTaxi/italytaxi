import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import Footer from '@/components/Footer';
import FAQSection from '@/components/FAQSection';
import { Metadata } from 'next';
import { supabase } from '@/lib/supabase/client';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Italy Travel Blog | Guides & Taxi Tips | ItaliaRide",
  description: "Travel tips, destination guides, and the latest news about taxi transfers in Italy. Plan your perfect Italian journey with our expert blog.",
  alternates: {
    canonical: "/blog",
  }
};

export const revalidate = 60; // Revalidate every minute

export default async function BlogPage() {
  const { data: blogs, error } = await supabase
    .from('blogs')
    .select('*')
    .eq('status', 'published')
    .order('published_at', { ascending: false });

  const blogFaqs = [
    {
      q: "What kind of travel tips do you share on your Italy blog?",
      a: "Our blog covers everything from navigating Italian airports and railway stations to hidden gems in Tuscany, the Amalfi Coast, and major cities like Rome and Milan."
    },
    {
      q: "How often is the Italy travel blog updated?",
      a: "We update our blog weekly with fresh content, including seasonal travel advice, new transportation regulations, and updated destination guides."
    },
    {
      q: "Do you provide transportation guides for all Italian regions?",
      a: "Yes, we strive to cover all 20 regions of Italy, providing specific advice on private transfers, local taxi services, and regional travel logistics."
    },
    {
      q: "Can I find information on Italian festival and holiday travel?",
      a: "Absolutely! We create special guides for holidays like Easter and Christmas, as well as major events like the Venice Carnival and Milan Fashion Week."
    },
    {
      q: "Is the information on your blog verified by locals?",
      a: "Yes, our content is written and reviewed by Italian travel experts and professional drivers who have first-hand knowledge of the roads and destinations."
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 font-inter text-navy-rich">
      <Navbar />

      <PageHero
        titleTop="Italian Travel"
        titleBottom="Insights & Knowledge"
        description="Expert tips, local guides, and transportation stories to help you navigate Italy in comfort and style."
        backgroundImage="/images/hero.png"
        breadcrumbs={[{ name: "Blog", item: "/blog" }]}
      />
      
      <div className="container mx-auto py-24 px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy">Latest From the Hub</h2>
          <div className="w-20 h-1 bg-gold mx-auto mt-6" />
        </div>

        {error || !blogs || blogs.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-navy mb-4">No Articles Found</h2>
            <p className="text-gray-600">We are currently updating our knowledge hub. Please check back shortly.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogs.map((blog) => (
              <article key={blog.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col">
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src={blog.featured_image_url || '/images/hero.png'} 
                    alt={`Cover image for ${blog.title}`} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-gold text-white px-4 py-1 rounded-full text-sm font-semibold">
                    {blog.category}
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center text-sm text-gray-500 mb-4 font-medium">
                    <span>{new Date(blog.published_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                    <span className="mx-2">•</span>
                    <span>{blog.read_time}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-navy mb-4 group-hover:text-gold transition-colors leading-tight">
                    {blog.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 line-clamp-3 text-lg leading-relaxed flex-grow">
                    {blog.excerpt}
                  </p>
                  
                  <Link 
                    href={`/blog/${blog.slug}`}
                    className="inline-flex items-center text-gold font-bold hover:gap-2 transition-all group/link"
                  >
                    Read More 
                    <svg className="w-5 h-5 ml-1 transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      <FAQSection faqs={blogFaqs} title="Travel Hub FAQs" />
      
      <Footer />
    </main>
  );
}

