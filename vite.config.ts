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
    target: 'es2019', // ensure modern optional chaining is transpiled for headless Chrome
    minify: 'esbuild', // Or 'terser' if you prefer
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          collaboration: ['./src/pages/studio/Collaboration.tsx'],
          product: ['./src/pages/services/ProductsCollection.tsx'],
          howwework: ['./src/pages/studio/HowWeWork.tsx'],
          sustainability: ['./src/pages/studio/Sustainability.tsx'],
        },             
      },
      external: ['gatsby'], // Exclude Gatsby from the bundle
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react', 'gatsby'],
  },
});
