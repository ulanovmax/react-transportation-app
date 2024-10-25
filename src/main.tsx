import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './assets/tailwind.css';
import './assets/postcss/style.pcss'

// Height of viewport
import './utils/vh.utils.ts'

import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
