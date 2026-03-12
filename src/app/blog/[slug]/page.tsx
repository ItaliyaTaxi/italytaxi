import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const title = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    
    return {
        title: `${title} | ItaliaRide Blog`,
        description: `Read about ${title} on the ItaliaRide travel blog. Expert tips and guides for your Italian journey.`,
        alternates: {
            canonical: `https://www.italytaxiservice.com/blog/${slug}`,
        }
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    
    return (
        <main className="min-h-screen">
            <Navbar />
            <div className="container mx-auto py-40 px-6">
                <article className="prose lg:prose-xl mx-auto">
                    <h1 className="text-4xl font-bold mb-8 capitalize">{slug.replace(/-/g, ' ')}</h1>
                    <p className="text-gray-500 italic">Full article coming soon...</p>
                </article>
            </div>
            <Footer />
        </main>
    );
}
