import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './styles/index.css';

const rootElement = document.getElementById('root')!;

// Standard React rendering - Netlify prerender handles SEO server-side
createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);