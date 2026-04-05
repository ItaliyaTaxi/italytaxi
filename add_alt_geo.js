const fs = require('fs');
const path = require('path');

function walk(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stats = fs.statSync(fullPath);
        if (stats.isDirectory()) {
            walk(fullPath);
        } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let changed = false;

            // Simple parser to find <Image ... /> or <img ... />
            // Since attributes can span multiple lines, we'll use a match that accounts for whitespace and newlines.
            // Using a simple replace function directly on the content:

            // 1. First, let's fix missing 'alt' attributes by inserting a generic one, which we'll then geo-tag.
            // This regex tries to find <Image tags without alt.
            const imageWithoutAltRegex = /<Image\b(?![^>]*\balt=)[^>]*>/g;
            content = content.replace(imageWithoutAltRegex, (match) => {
                changed = true;
                return match.replace('<Image', '<Image alt="Taxi service vehicle in Italy"');
            });
            const imgWithoutAltRegex = /<img\b(?![^>]*\balt=)[^>]*>/g;
            content = content.replace(imgWithoutAltRegex, (match) => {
                changed = true;
                return match.replace('<img', '<img alt="Taxi service vehicle in Italy"');
            });

            // 2. Now Geo-tag existing alt attributes, including those dynamically added above
            // Match alt="something" | alt='something' | alt={`something`}
            // Group 1: opening quote, Group 2: inner text
            const altAttrRegex = /alt=(["'`])(.*?)\1/g;
            content = content.replace(altAttrRegex, (match, quote, altText) => {
                // If it's empty, give it a base text
                if (altText.trim() === '') {
                    altText = "Taxi service";
                }
                
                // If it already has Italy or Italian, leave it to avoid "Italy in Italy"
                const lowerAlt = altText.toLowerCase();
                if (!lowerAlt.includes("italy") && !lowerAlt.includes("italian")) {
                    changed = true;
                    // Append geographical tagging
                    return `alt=${quote}${altText.trim()} in Italy${quote}`;
                }
                
                return match; // no change
            });

            // Handle TSX dynamic template string alt attributes: alt={`Description of ${city}`}
            // We've already grabbed these via the backtick match above.

            // Wait, what about alt={variable}? It won't match the quotes above.
            // Let's find alt={dynamicVar} and append " - Italy"
            const altDynamicRegex = /alt=\{([^"'`{}]+)\}/g;
            content = content.replace(altDynamicRegex, (match, variable) => {
                // We shouldn't strictly change standard variable bindings like alt={blog.title} 
                // to a string template without backticks, but we can do: alt={`${variable} in Italy`}
                if (variable.trim() !== '' && !variable.includes('Italy') && !variable.includes('`')) {
                    changed = true;
                    return `alt={\`\${${variable}} in Italy\`}`;
                }
                return match;
            });


            if (changed) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Geotagged alts in: ${fullPath}`);
            }
        }
    }
}

const targetDir = path.join(__dirname, 'src');
console.log(`Starting SEO image geo-tagging cleanup in: ${targetDir}`);
walk(targetDir);
console.log('SEO Image geo-tagging complete.');
