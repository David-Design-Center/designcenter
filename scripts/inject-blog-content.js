/**
 * This script injects the blog content directly into the pre-rendered HTML files.
 * This ensures that the blog content is included in the static HTML for SEO purposes,
 * even if react-snap fails to render it correctly.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import grayMatter from 'gray-matter';
import { marked } from 'marked';
import * as cheerio from 'cheerio';

// Get the directory name properly in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configure marked options
marked.setOptions({
  breaks: true,
  gfm: true,
});

// Paths
const POSTS_DIR = path.resolve(__dirname, '../src/posts');
const DIST_DIR = path.resolve(__dirname, '../dist');

// Read all markdown files
function getAllPosts() {
  return fs.readdirSync(POSTS_DIR)
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const slug = path.basename(file, '.md');
      const filePath = path.join(POSTS_DIR, file);
      const content = fs.readFileSync(filePath, 'utf-8');
      const { data: frontmatter, content: markdownContent } = grayMatter(content);
      
      return {
        slug,
        frontmatter,
        content: markdownContent,
        htmlContent: marked.parse(markdownContent)
      };
    });
}

// Process a single blog post HTML file
function processBlogPost(post) {
  const { slug, frontmatter, htmlContent } = post;
  const blogHtmlPath = path.join(DIST_DIR, 'blog', slug, 'index.html');
  
  // Check if the HTML file exists
  if (!fs.existsSync(blogHtmlPath)) {
    console.log(`❌ HTML file not found for blog post: ${slug}`);
    return false;
  }
  
  // Read the HTML file
  const originalHtml = fs.readFileSync(blogHtmlPath, 'utf-8');
  
  // Parse the HTML
  const $ = cheerio.load(originalHtml);
  
  // Check if there's an error message in the HTML
  const errorMessage = $('div[style*="padding:4rem;text-align:center"] h2:contains("Oops, something went wrong")');
  if (errorMessage.length) {
    console.log(`🔄 Found error message in ${slug}, replacing with actual content`);
    
    // Find or create container for blog content
    let articleContainer = $('article');
    if (!articleContainer.length) {
      // Find a suitable container - this may need to be adjusted based on your HTML structure
      const mainContent = $('#root').find('#smooth-content');
      
      // Remove error message
      errorMessage.parent().remove();
      
      // Create a new structure for the blog post
      const blogContentHtml = `
        <div class="relative z-10 pt-[75vh] md:pt-[70vh]">
          <div class="max-w-xl mx-auto px-2 md:px-20">
            <article class="bg-white/90 backdrop-blur rounded-2xl shadow-md md:px-6 prose prose-[0.85rem] md:prose-sm max-w-xl mx-auto overflow-hidden mt-4 sm:px-4 mb-12">
              <div class="px-2 py-8 md:px-0">
                <h1>${frontmatter.title}</h1>
                <div id="blog-post-content">${htmlContent}</div>
              </div>
            </article>
          </div>
        </div>
      `;
      
      // Insert the blog content before the footer
      mainContent.find('footer').before(blogContentHtml);
    } else {
      // If article exists, just replace its content
      articleContainer.html(`
        <div class="px-2 py-8 md:px-0">
          <h1>${frontmatter.title}</h1>
          <div id="blog-post-content">${htmlContent}</div>
        </div>
      `);
    }
    
    // Save the modified HTML
    fs.writeFileSync(blogHtmlPath, $.html(), 'utf-8');
    console.log(`✅ Successfully injected content for blog post: ${slug}`);
    return true;
  } else {
    console.log(`⏭️ No error message found in ${slug}, skipping...`);
    return false;
  }
}

// Main function
async function main() {
  try {
    console.log('🔍 Reading blog posts...');
    const posts = getAllPosts();
    console.log(`📄 Found ${posts.length} posts`);
    
    // Process each post
    let success = 0;
    for (const post of posts) {
      if (processBlogPost(post)) {
        success++;
      }
    }
    
    console.log(`✅ Successfully processed ${success} out of ${posts.length} blog posts`);
    return success;
  } catch (error) {
    console.error('❌ Error processing blog posts:', error);
    process.exit(1);
  }
}

// Run the script
main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
