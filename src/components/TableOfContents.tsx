"use client";

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

/**
 * Server component — parses headings from stored HTML and renders a sticky TOC.
 * Headings must have id attributes in the stored HTML for links to work.
 */

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

function parseHeadings(html: string): TOCItem[] {
  const headingRegex = /<h([23])[^>]*\sid="([^"]+)"[^>]*>(.*?)<\/h[23]>/gi;
  const items: TOCItem[] = [];
  let match;
  while ((match = headingRegex.exec(html)) !== null) {
    const level = parseInt(match[1], 10);
    const id = match[2];
    // Strip any inner HTML tags to get plain text
    const text = match[3].replace(/<[^>]+>/g, '').trim();
    if (id && text) items.push({ id, text, level });
  }
  return items;
}

export default function TableOfContents({ content }: { content: string }) {
  const [isExpanded, setIsExpanded] = useState(true);
  const headings = parseHeadings(content);
  if (headings.length < 2) return null;

  return (
    <nav aria-label="Table of contents" className="bg-slate-50 border border-slate-200 p-7 rounded-2xl mb-12">
      <div 
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F4C430] mb-2">In This Article</p>
          <h3 className="text-lg font-bold text-[#0F1C2E]">Table of Contents</h3>
        </div>
        <button 
          type="button"
          className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-gray-500 hover:text-[#F4C430] hover:border-[#F4C430] transition-colors"
          aria-expanded={isExpanded}
          aria-label={isExpanded ? "Collapse Table of Contents" : "Expand Table of Contents"}
        >
          {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>
      </div>
      
      {isExpanded && (
        <ol className="space-y-4 mt-6 pt-6 border-t border-slate-200">
          {headings.map((h, i) => (
            <li
            key={h.id}
            style={{ paddingLeft: h.level === 3 ? '1.25rem' : '0' }}
            className="leading-snug"
          >
            <a
              href={`#${h.id}`}
              className="group flex items-start gap-2 text-sm text-gray-600 hover:text-[#F4C430] transition-colors"
            >
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#F4C430]/50 group-hover:bg-[#F4C430] flex-shrink-0 transition-colors" />
              <span>{h.level === 3 && <span className="text-gray-400 mr-1">{i + 1}.</span>}{h.text}</span>
            </a>
          </li>
        ))}
      </ol>
      )}
    </nav>
  );
}
