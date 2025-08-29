#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

/**
 * Auto-convert markdown files in root to blog posts
 * Usage: node scripts/add-blog-post.js [filename.md]
 */

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}

function extractTitleFromContent(content) {
  // Look for first # heading
  const headingMatch = content.match(/^#\s+(.+)$/m);
  if (headingMatch) {
    return headingMatch[1].trim();
  }
  
  // Look for title in filename
  const lines = content.split('\n');
  const firstLine = lines[0]?.trim();
  if (firstLine && !firstLine.startsWith('#')) {
    return firstLine;
  }
  
  return 'Untitled Post';
}

function extractExcerpt(content) {
  // Remove frontmatter if exists
  const withoutFrontmatter = content.replace(/^---[\s\S]*?---\n/, '');
  
  // Remove headings and get first paragraph
  const paragraphs = withoutFrontmatter
    .split('\n')
    .filter(line => line.trim() && !line.startsWith('#'))
    .map(line => line.trim());
  
  const firstParagraph = paragraphs[0] || '';
  
  // Clean up quotes and special characters for YAML safety
  let excerpt = firstParagraph
    .replace(/["']/g, '') // Remove quotes that break YAML
    .replace(/_/g, '') // Remove markdown emphasis
    .replace(/\*/g, '') // Remove markdown bold
    .replace(/\\/g, '') // Remove backslashes
    .trim();
  
  // Limit to ~150 characters
  if (excerpt.length > 150) {
    excerpt = excerpt.substring(0, 147) + '...';
  }
  
  return excerpt;
}

function generateSlugFromFilename(filename) {
  const nameWithoutExt = path.basename(filename, '.md');
  return slugify(nameWithoutExt);
}

function createFrontmatter(title, excerpt, slug) {
  const today = new Date().toISOString().split('T')[0];
  
  return `---
title: "${title}"
excerpt: "${excerpt}"
category: "Design"
date: "${today}"
readTime: 8
image:
  url: "https://storage.googleapis.com/48877118-7272-4a4d-b302-0465d8aa4548/82a39242-0101-4672-9473-4b58cfed4a4f/44ca43ce-5b00-40e9-b581-7547bb45b8ae.jpg"
  alt: "${title}"
---

`;
}

async function convertMarkdownToBlogPost(filename) {
  const filePath = path.join(rootDir, filename);
  
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filename}`);
    return;
  }
  
  console.log(`Converting ${filename} to blog post...`);
  
  // Read the markdown content
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Extract metadata
  const title = extractTitleFromContent(content);
  const excerpt = extractExcerpt(content);
  const slug = generateSlugFromFilename(filename);
  
  console.log(`Title: ${title}`);
  console.log(`Slug: ${slug}`);
  console.log(`Excerpt: ${excerpt}`);
  
  // Create frontmatter
  const frontmatter = createFrontmatter(title, excerpt, slug);
  
  // Combine frontmatter with content
  const finalContent = frontmatter + content;
  
  // Create the blog post file
  const blogPostPath = path.join(rootDir, 'src', 'posts', `${slug}.md`);
  fs.writeFileSync(blogPostPath, finalContent);
  
  console.log(`✅ Blog post created: ${blogPostPath}`);
  
  // Remove the original file from root
  fs.unlinkSync(filePath);
  console.log(`✅ Original file removed from root`);
  
  // Regenerate posts.json
  console.log('🔄 Regenerating posts.json...');
  const { execSync } = await import('child_process');
  execSync('node scripts/generate-posts-json.cjs', { cwd: rootDir });
  console.log('✅ posts.json updated');
  
  console.log(`\n🎉 Blog post ready at: /blog/${slug}`);
  
  return slug;
}

// Main execution
async function main() {
const filename = process.argv[2];

if (!filename) {
  // Auto-detect markdown files in root
  const files = fs.readdirSync(rootDir)
    .filter(file => file.endsWith('.md') && !['README.md', 'README_React_snap.md'].includes(file));
  
  if (files.length === 0) {
    console.log('No markdown files found in root directory.');
    process.exit(0);
  }
  
  console.log(`Found ${files.length} markdown file(s) to convert:`);
  files.forEach(file => console.log(`  - ${file}`));
  
  // Convert all found files
  for (const file of files) {
    await convertMarkdownToBlogPost(file);
  }
} else {
  // Convert specific file
  await convertMarkdownToBlogPost(filename);
}
}

// Run the main function
main().catch(console.error);
