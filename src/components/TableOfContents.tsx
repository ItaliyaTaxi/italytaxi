"use client";

import React, { useEffect, useState } from 'react';

interface TOCItem {
    id: string;
    text: string;
    level: number;
}

export default function TableOfContents({ content }: { content: string }) {
    const [headings, setHeadings] = useState<TOCItem[]>([]);

    useEffect(() => {
        const doc = new DOMParser().parseFromString(content, 'text/html');
        const headingElements = Array.from(doc.querySelectorAll('h2, h3'));
        
        const items = headingElements.map((el, index) => {
            const text = el.textContent || '';
            const id = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
            return {
                id: `heading-${index}`,
                text,
                level: parseInt(el.tagName[1])
            };
        });
        
        setHeadings(items);

        // Actual implementation would need to modify the IDs in the main article too
        // For now, we'll just show the list
    }, [content]);

    if (headings.length === 0) return null;

    return (
        <div className="bg-slate-50 p-8 rounded-3xl mb-12 border border-slate-100">
            <h3 className="text-xl font-bold text-navy mb-6">Table of Contents</h3>
            <ul className="space-y-3">
                {headings.map((heading, index) => (
                    <li 
                        key={index} 
                        style={{ marginLeft: `${(heading.level - 2) * 1.5}rem` }}
                    >
                        <a 
                            href={`#${heading.id}`}
                            className="text-gray-600 hover:text-gold transition-colors text-sm font-medium flex items-start"
                        >
                            <span className="w-1.5 h-1.5 bg-gold/40 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                            {heading.text}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
