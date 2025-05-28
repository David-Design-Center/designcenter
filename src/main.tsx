import { Buffer } from "buffer";
if (typeof window !== "undefined") {
  // @ts-ignore
  window.Buffer = Buffer;
}

import { StrictMode } from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import App from './App.tsx';
import './styles/index.css';

const rootElement = document.getElementById('root')!;

if (rootElement.hasChildNodes()) {
  // If the container has HTML content from pre-rendering (React Snap),
  // hydrate it rather than creating a new tree
  hydrateRoot(
    rootElement, 
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  // If no pre-rendered content, create a new tree
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}