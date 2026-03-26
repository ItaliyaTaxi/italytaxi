import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
    name: string;
    item: string;
}

interface BreadcrumbProps {
    items: { name: string; item: string }[];
    variant?: 'default' | 'light';
}

export default function Breadcrumb({ items, variant = 'default' }: BreadcrumbProps) {
    const isLight = variant === 'light';
    
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.italytaxiservice.com"
            },
            ...items.map((item, index) => ({
                "@type": "ListItem",
                "position": index + 2,
                "name": item.name,
                "item": item.item.startsWith('http') ? item.item : `https://www.italytaxiservice.com${item.item}`
            }))
        ]
    };

    return (
        <nav className={`flex ${isLight ? 'mb-4' : 'mb-8'}`} aria-label="Breadcrumb">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                    <Link 
                        href="/" 
                        className={`inline-flex items-center text-sm font-medium transition-colors ${isLight ? 'text-white/80 hover:text-gold' : 'text-gray-700 hover:text-gold'}`}
                    >
                        <Home className="w-4 h-4 mr-2" />
                        Home
                    </Link>
                </li>
                {items.map((item, index) => (
                    <li key={index}>
                        <div className="flex items-center">
                            <ChevronRight className={`w-4 h-4 mx-1 ${isLight ? 'text-white/40' : 'text-gray-400'}`} />
                            {index === items.length - 1 ? (
                                <span className={`ml-1 text-sm font-bold md:ml-2 ${isLight ? 'text-gold' : 'text-navy'}`}>
                                    {item.name}
                                </span>
                            ) : (
                                <Link 
                                    href={item.item} 
                                    className={`ml-1 text-sm font-medium transition-colors md:ml-2 ${isLight ? 'text-white/80 hover:text-gold' : 'text-gray-700 hover:text-gold'}`}
                                >
                                    {item.name}
                                </Link>
                            )}
                        </div>
                    </li>
                ))}
            </ol>
        </nav>
    );
}

