const fs = require('fs');
const path = require('path');

const replacements = [
    { p: /\bchauffeurs\b/g, r: 'taxi drivers' },
    { p: /\bChauffeurs\b/g, r: 'Taxi Drivers' },
    { p: /\bchauffeur's\b/g, r: "taxi's" },
    { p: /\bChauffeur's\b/g, r: "Taxi's" },
    { p: /\bchauffeur\b/g, r: 'taxi' },
    { p: /\bChauffeur\b/g, r: 'Taxi' }
];

function walk(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stats = fs.statSync(fullPath);
        if (stats.isDirectory()) {
            walk(fullPath);
        } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let changed = false;
            
            for (const { p, r } of replacements) {
                if (p.test(content)) {
                    content = content.replace(p, r);
                    changed = true;
                }
            }
            
            if (changed) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Updated: ${fullPath}`);
            }
        }
    }
}

const targetDir = path.join(__dirname, 'src');
console.log(`Starting replacement in: ${targetDir}`);
walk(targetDir);
console.log('Replacement complete.');
