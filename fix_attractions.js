const fs = require('fs');
const path = require('path');

function walk(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walk(fullPath);
        } else if (file === 'page.tsx') {
            let content = fs.readFileSync(fullPath, 'utf8');
            let changed = false;
            
            // Fix Castel Dell Ovo Syntax Error
            if (content.includes('title: "Taxi for Castel Dell Ovo Visits"Ovo Private Taxi | Naples Waterfront Transfers"')) {
                content = content.replace('title: "Taxi for Castel Dell Ovo Visits"Ovo Private Taxi | Naples Waterfront Transfers"', 'title: "Castel Dell Ovo Private Taxi | Naples Waterfront Transfers"');
                changed = true;
            }

            // Fix St Marks Basilica Syntax Error
            if (content.includes('title: "Taxi for St Marks Basilica Visits"s Basilica Private Transfer | Venice City Access"')) {
                content = content.replace('title: "Taxi for St Marks Basilica Visits"s Basilica Private Transfer | Venice City Access"', 'title: "St Marks Basilica Private Transfer | Venice City Access"');
                changed = true;
            }

            if (changed) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Fixed syntax in ${fullPath}`);
            }
        }
    }
}

walk('src/app');
