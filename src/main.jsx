import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import '@fontsource/goudy-bookletter-1911';
import '@fontsource/poppins';
import '@fontsource/dela-gothic-one';
import '@fontsource/baloo-bhai-2';
import '@fontsource/archivo-black';
import '@fontsource/titan-one';
import '@fontsource/sofia';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
