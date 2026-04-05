const fs = require('fs');

const files = [
    'src/app/crm/page.tsx',
    'src/app/crm/login/page.tsx'
];

files.forEach(p => {
    let content = fs.readFileSync(p, 'utf8');
    
    // Remove import { Metadata } from 'next';
    content = content.replace(/import { Metadata } from 'next';\r?\n/, '');
    
    // Ensure 'use client'; is the very first line
    // If it's not at the very top but exists, remove it and put it at the very top
    if (content.includes("'use client';")) {
        content = content.replace(/'use client';\r?\n/, '');
        content = "'use client';\n" + content;
    }
    
    // Remove the export const metadata block entirely
    content = content.replace(/export const metadata: Metadata = \{[\s\S]*?\};\r?\n?/, '');

    fs.writeFileSync(p, content, 'utf8');
    console.log(`Repaired ${p}`);
});
