const fs = require('fs');

function walk(dir) {
    let results = [];
    if (!fs.existsSync(dir)) return results;
    const list = fs.readdirSync(dir);
    list.forEach(function (file) {
        file = dir + '/' + file;
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else {
            if (file.endsWith('.tsx') || file.endsWith('.ts')) results.push(file);
        }
    });
    return results;
}

const files = walk('./src');
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let changed = false;

    // Add "use client" if not present and the file uses useDocumentTitle hook, making it a client component
    if (file.endsWith('.tsx') && content.includes('useDocumentTitle') && !content.includes('"use client"')) {
        content = '"use client";\n' + content;
        changed = true;
    }

    // Replace <Link to= with <Link href= and update imports
    if (content.includes('react-router-dom') || content.includes('<Link to=')) {
        content = content.replace(/import\s+{\s*Link\s*}\s+from\s+["']react-router-dom["']\s*;/g, 'import Link from "next/link";');
        content = content.replace(/<Link\s+to=/g, '<Link href=');
        changed = true;
    }

    if (changed) {
        fs.writeFileSync(file, content, 'utf8');
        console.log('Fixed ' + file);
    }
});

let docHook = fs.readFileSync('./src/hooks/useDocumentTitle.ts', 'utf8');
if (!docHook.includes('"use client"')) {
    fs.writeFileSync('./src/hooks/useDocumentTitle.ts', '"use client";\n' + docHook);
    console.log('Fixed useDocumentTitle.ts');
}
