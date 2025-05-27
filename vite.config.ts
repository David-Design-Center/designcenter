import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [react(), visualizer()],
  css: {
    postcss: './postcss.config.js',
    devSourcemap: true,
  },
  build: {
    minify: 'esbuild', // Or 'terser' if you prefer
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          blog: ['./src/pages/Blog.tsx'],
          blogPost: ['./src/components/blog/BlogPostPage.tsx'],
          collaboration: ['./src/pages/collaboration.tsx'],
          product: ['./src/pages/ProductsCollection.tsx'],
          howwework: ['./src/pages/HowWeWork.tsx'],
          sustainability: ['./src/pages/Sustainability.tsx'],
        },             
      },
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
