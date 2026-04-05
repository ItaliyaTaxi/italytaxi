const fs = require('fs');
const path = require('path');

function walk(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walk(fullPath, fileList);
        } else if (file === 'page.tsx') {
            fileList.push(fullPath);
        }
    }
    return fileList;
}

const pages = walk('src/app');
let missing = [];

pages.forEach(p => {
    const content = fs.readFileSync(p, 'utf8');
    // If it doesn't have an alternates canonical block
    if (!content.includes('canonical:')) {
        missing.push(p);
    }
});

console.log('Pages missing explicit canonical:', missing);
