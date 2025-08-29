const reactSnap = require('react-snap');
const fs = require('fs');
const path = require('path');

const postsDir = path.resolve(__dirname, '../src/posts');
let postSlugs = [];
try {
  postSlugs = fs.readdirSync(postsDir)
    .filter(file => file.endsWith('.md'))
    .map(file => `/blog/${path.basename(file, '.md')}`);
} catch (e) {
  console.warn('Could not read posts directory for slug list', e);
}

console.log('Starting React Snap with custom configuration...');

// Combine static routes and dynamic blog post slugs
defaultIncludes = [
  '/',
  '/blog',
  '/collaboration',
  '/crafted-calm',
  '/designers',
  '/how-we-work',
  '/privacy',
  '/productscollection',
  '/sustainability',
  '/terms',
];

const allIncludes = [...defaultIncludes, ...postSlugs];

console.log(`Found ${postSlugs.length} blog posts to pre-render:`);
postSlugs.forEach((slug, index) => console.log(`  ${index + 1}. ${slug}`));
console.log('Total routes to pre-render:', allIncludes.length);

reactSnap.run({
  source: 'dist',
  destination: 'dist',
  minifyHtml: { collapseWhitespace: false, removeComments: false },
  inlineCss: false,
  puppeteerArgs: ['--no-sandbox', '--disable-setuid-sandbox'],
  concurrency: 1, // Using 1 to prevent race conditions
  skipThirdPartyRequests: true,
  timeout: 120000, // Increased timeout to 2 minutes
  include: allIncludes,
  // Let Puppeteer use its bundled Chromium by default. If you need to
  // override the executable (for local debugging), set the
  // CHROME_EXECUTABLE environment variable before running the build.
  puppeteer: (() => {
    const cfg = { cache: false };
    if (process.env.CHROME_EXECUTABLE && process.env.CHROME_EXECUTABLE.length) {
      cfg.executablePath = process.env.CHROME_EXECUTABLE;
    }
    return cfg;
  })(),
  // Add specific headers to simulate a real browser
  headers: {
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  },
  userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  fixWebpackChunksIssue: false,
  removeBlobs: true,
  // Wait until the React app has fully loaded and rendered
  waitFor: 2000, // Wait 2 seconds after page load
  // Custom evaluateSnapshotScript that injects blog content directly for blog pages
  evaluateSnapshotScript: () => {
    // Return a promise that resolves when the page is fully loaded
    return new Promise(resolve => {
      // Check if we're on a blog post page by looking at the URL pattern
      const isBlogPost = window.location.pathname.startsWith('/blog/') && 
        window.location.pathname !== '/blog/';
      
      if (isBlogPost) {
        console.log('Processing blog post page:', window.location.pathname);
        
        // Extract the slug from the URL
        const slug = window.location.pathname.split('/').pop();
        
        // Wait for React to render the initial component
        setTimeout(() => {
          // Set a flag on the window to indicate we're in static rendering
          window.navigator.userAgent = 'ReactSnap';

          // For blog posts, check for content rendered in the DOM
          const checkContent = () => {
            const articleElement = document.querySelector('article');
            const hasContent = document.body.getAttribute('data-blog-content-loaded') === 'true';
            const hasArticleContent = articleElement && articleElement.textContent.trim().length > 50;
            
            if (hasContent || hasArticleContent) {
              console.log('✅ Blog content detected for:', slug);
              setTimeout(resolve, 1500); // Give more time for final render
            } else {
              console.log('Waiting for blog content to load for:', slug);
              setTimeout(checkContent, 500);
            }
          };
          checkContent();
        }, 2000); // Wait 2 seconds for initial render
      } else {
        // For non-blog pages, resolve after a short delay
        setTimeout(resolve, 500);
      }
    });
  },
  onError: (error) => {
    console.error('React Snap encountered an error:', error);
    // Continue despite errors
    return true;
  },
  // Enable debugging
  enableLogging: true
}).then(() => {
  console.log('React Snap completed successfully!');
}).catch(error => {
  console.error('React Snap error:', error);
  process.exit(0);
});
