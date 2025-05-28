// This script reads all markdown files in src/posts, parses frontmatter and content, and writes posts.json
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const postsDir = path.resolve(__dirname, '../src/posts');
const outFile = path.resolve(__dirname, '../src/data/posts.json');

const posts = {};

fs.readdirSync(postsDir).forEach(file => {
  if (file.endsWith('.md')) {
    const slug = path.basename(file, '.md');
    const raw = fs.readFileSync(path.join(postsDir, file), 'utf-8');
    const { data, content } = matter(raw);
    posts[slug] = { data, content };
  }
});

fs.writeFileSync(outFile, JSON.stringify(posts, null, 2));
console.log('posts.json generated with', Object.keys(posts).length, 'posts.');
