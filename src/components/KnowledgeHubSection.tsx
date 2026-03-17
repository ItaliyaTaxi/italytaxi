"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase/client';
import { ChevronRight, Calendar, Clock } from 'lucide-react';

interface Blog {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    featured_image_url: string;
    published_at: string;
    read_time: string;
    category: string;
}

export default function KnowledgeHubSection() {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchBlogs() {
            try {
                const { data, error } = await supabase
                    .from('blogs')
                    .select('*')
                    .eq('status', 'published')
                    .order('published_at', { ascending: false })
                    .limit(3);

                if (data) setBlogs(data);
            } catch (err) {
                console.error('Error fetching blogs:', err);
            } finally {
                setLoading(false);
            }
        }
        fetchBlogs();
    }, []);

    if (loading || blogs.length === 0) return null;

    return (
        <section className="py-24 bg-white relative overflow-hidden font-inter">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">Italian Travel Insights</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-navy">Our Knowledge Hub</h2>
                        <div className="w-20 h-1 bg-gold mt-6" />
                    </div>
                    <Link 
                        href="/blog" 
                        className="inline-flex items-center text-navy hover:text-gold font-bold tracking-widest uppercase text-sm group transition-colors"
                    >
                        View All Articles <ChevronRight className="w-5 h-5 ml-1 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {blogs.map((blog, index) => (
                        <Link 
                            key={blog.id} 
                            href={`/blog/${blog.slug}`}
                            className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col animate-slide-left"
                            style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                        >
                            <div className="relative h-64 overflow-hidden">
                                <Image 
                                    src={blog.featured_image_url || '/images/hero.png'} 
                                    alt={blog.title} 
                                    fill 
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4 bg-gold text-navy px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg">
                                    {blog.category}
                                </div>
                            </div>
                            
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex items-center gap-4 text-xs text-gray-400 mb-4 font-bold uppercase tracking-widest">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-3.5 h-3.5 text-gold" />
                                        {new Date(blog.published_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock className="w-3.5 h-3.5 text-gold" />
                                        {blog.read_time}
                                    </div>
                                </div>
                                
                                <h3 className="text-xl font-bold text-navy mb-4 group-hover:text-gold transition-colors leading-tight line-clamp-2">
                                    {blog.title}
                                </h3>
                                
                                <p className="text-gray-500 mb-8 line-clamp-3 text-sm leading-relaxed flex-grow">
                                    {blog.excerpt}
                                </p>
                                
                                <div className="inline-flex items-center text-gold font-bold text-xs uppercase tracking-[0.2em] group-hover:gap-3 transition-all">
                                    Read Article <ChevronRight className="w-4 h-4 ml-1" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
