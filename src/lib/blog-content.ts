import { marked } from 'marked';

/**
 * Normalises stored blog bodies to HTML before anything renders or parses them.
 *
 * Why this exists: `blogs.content` is not one format. Audited across all 298
 * records, it is three:
 *   - 285 records  pure HTML            → must pass through untouched
 *   -   4 records  pure Markdown        → rendered as literal text before this
 *   -   9 records  HTML + one stray ATX heading line ("## Additional Practical
 *                  Insights" at line 42), which showed as visible "##" text
 *
 * Both blog routes render the body with `dangerouslySetInnerHTML` and both the
 * table of contents and the FAQ-schema extractor parse it as an HTML string, so
 * converting to HTML here keeps every downstream consumer working unchanged.
 * Running Markdown through a React renderer instead would have left the TOC and
 * schema parsers with nothing to read.
 *
 * Idempotent by construction: once converted, the output contains block-level
 * HTML, so a second pass takes the pass-through branch and finds no ATX lines.
 */

/** Block-level HTML means the record was authored as HTML, not Markdown. */
const BLOCK_HTML = /<(?:p|div|h[1-6]|ul|ol|li|table|thead|tbody|tr|td|th|section|article|figure|blockquote|pre|hr|br)\b/i;

/** A standalone ATX heading line, e.g. "## Additional Practical Insights".
 *  Anchored without /m: applied per line after splitting. */
const ATX_LINE = /^[ \t]{0,3}(#{1,6})[ \t]+(.+?)[ \t]*#*[ \t]*$/;
/** Same, for testing whether a multi-line document contains one anywhere. */
const ATX_ANYWHERE = /^[ \t]{0,3}#{1,6}[ \t]+\S/m;

/** Markers that indicate Markdown when no block HTML is present. */
const MARKDOWN_HINT = [
    ATX_ANYWHERE,
    /^[ \t]{0,3}(?:-{3,}|\*{3,}|_{3,})[ \t]*$/m, // thematic break
    /^[ \t]*[-*+][ \t]+\S/m,                      // unordered list
    /^[ \t]*\d+\.[ \t]+\S/m,                      // ordered list
    /^[ \t]{0,3}>[ \t]?/m,                        // blockquote
    /^[ \t]{0,3}```/m,                            // fenced code
    /^[ \t]{0,3}\|.*\|[ \t]*$/m,                  // table row
    /\[[^\]]+\]\([^)\s]+\)/,                      // link
    /\*\*[^*\n]+\*\*/,                            // bold
];

marked.use({ gfm: true, breaks: false });

/** True when the record should be treated as a Markdown document. */
export function isMarkdownDocument(content: string): boolean {
    if (!content) return false;
    if (BLOCK_HTML.test(content)) return false;
    const normalised = content.replace(/\r\n?/g, '\n');
    return MARKDOWN_HINT.some((re) => re.test(normalised));
}

function slugify(text: string): string {
    return text
        .replace(/<[^>]+>/g, '')
        .normalize('NFD')
        .replace(/[̀-ͯ]/g, '')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '')
        .slice(0, 60);
}

/**
 * Give h2/h3 an `id` when they lack one, so the existing table of contents
 * (which requires `<h2 id="…">`) works for converted documents. Only ever
 * applied to markup this module generated — stored HTML keeps its own ids.
 */
function addHeadingIds(html: string): string {
    const used = new Set<string>();
    return html.replace(
        /<h([23])([^>]*)>([\s\S]*?)<\/h\1>/gi,
        (whole, level: string, attrs: string, inner: string) => {
            if (/\sid\s*=/i.test(attrs)) return whole;
            const base = slugify(inner) || 'section';
            let id = base;
            for (let n = 2; used.has(id); n++) id = `${base}-${n}`;
            used.add(id);
            return `<h${level}${attrs} id="${id}">${inner}</h${level}>`;
        },
    );
}

/**
 * Convert only standalone ATX heading lines, leaving all surrounding HTML
 * byte-identical. Used for the 9 records that are HTML apart from one stray
 * Markdown heading; running the full Markdown parser over them would rewrite
 * their hand-authored markup.
 */
function convertStrayAtxHeadings(content: string): string {
    const lines = content.split('\n');
    const used = new Set<string>();
    let changed = false;
    const out = lines.map((line) => {
        const m = line.match(ATX_LINE);
        if (!m) return line;
        const level = Math.min(m[1].length, 6);
        const text = m[2].trim();
        if (!text) return line;
        changed = true;
        // Only this line gets an id. Running addHeadingIds over the whole
        // document would also stamp ids onto the record's hand-authored
        // headings, which would make a table of contents appear on pages that
        // never had one — a layout change well beyond fixing a stray "##".
        // One record carries this stray heading twice, so ids are de-duplicated
        // to keep them unique within the document.
        const base = slugify(text) || 'section';
        let id = base;
        for (let n = 2; used.has(id); n++) id = `${base}-${n}`;
        used.add(id);
        return `<h${level} id="${id}">${text}</h${level}>`;
    });
    return changed ? out.join('\n') : content;
}

/**
 * Return the record body as HTML, ready for the existing render and parse path.
 * Pure-HTML records are returned unchanged.
 */
export function normalizeBlogContent(content: string | null | undefined): string {
    if (!content) return '';

    if (isMarkdownDocument(content)) {
        const html = marked.parse(content.replace(/\r\n?/g, '\n'), { async: false }) as string;
        return addHeadingIds(html);
    }

    // HTML record: fix stray Markdown headings only if any are actually present.
    if (ATX_ANYWHERE.test(content.replace(/\r\n?/g, '\n')) && BLOCK_HTML.test(content)) {
        return convertStrayAtxHeadings(content.replace(/\r\n?/g, '\n'));
    }

    return content;
}
