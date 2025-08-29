# Easy Blog Post Creation

This system allows you to easily convert any markdown file into a blog post without dealing with complex styling or metadata.

## How It Works

### 1. Simple Process
1. Drop any `.md` file in the root directory of your project
2. Run `npm run add-blog`
3. Your blog post is automatically created and ready!

### 2. What Happens Automatically
- **Title extraction**: Pulls the title from the first `# heading` or filename
- **Excerpt creation**: Uses the first paragraph as the excerpt
- **URL generation**: Creates a clean URL slug from the filename
- **Metadata addition**: Adds all necessary frontmatter (date, category, image, etc.)
- **File organization**: Moves the file to the correct blog directory
- **Posts.json update**: Automatically regenerates the blog index
- **Sitemap update**: You can manually add to sitemap if needed

### 3. Example Usage

```bash
# Place your markdown file in the root directory
# Example: "NYC's Go-To for Lighting Inspiration.md"

# Run the conversion script
npm run add-blog

# Your blog post is now available at:
# /blog/nycs-go-to-for-lighting-inspiration
```

### 4. What You Don't Need to Worry About
- ✅ Frontmatter syntax
- ✅ Image URLs (uses default D&D image)
- ✅ Metadata formatting
- ✅ File naming conventions
- ✅ URL slugs
- ✅ Blog styling (uses existing blog page styles)

### 5. Your Markdown File Just Needs
- Content in markdown format
- A title (as `# heading` or in filename)
- That's it!

### 6. Advanced Options

#### Convert specific file:
```bash
npm run add-blog "your-file.md"
```

#### Convert all markdown files in root:
```bash
npm run add-blog
```

### 7. File Structure After Conversion
```
your-project/
├── src/
│   └── posts/
│       └── your-blog-post.md  ← Your file ends up here
├── src/data/
│   └── posts.json  ← Automatically updated
└── public/
    └── sitemap.xml  ← Manually update if needed
```

## The Result
Your markdown content is now a fully functional blog post with:
- Professional styling (hero image, typography, etc.)
- SEO optimization
- Social sharing
- Reading progress bar
- Mobile responsive design
- All the features of the existing blog system

**No styling work required on your part!**
