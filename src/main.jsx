import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

import { GoogleOAuthProvider } from '@react-oauth/google';

// Goudy Bookletter 1911 (Only weight 400)
import '@fontsource/goudy-bookletter-1911/400.css';

// Poppins (Supports 300–700 and more — importing 300 to 700)
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';

// Dela Gothic One (Only weight 400)
import '@fontsource/dela-gothic-one/400.css';

// Baloo Bhai 2 (Supports 400–800)
import '@fontsource/baloo-bhai-2/400.css';
import '@fontsource/baloo-bhai-2/500.css';
import '@fontsource/baloo-bhai-2/600.css';
import '@fontsource/baloo-bhai-2/700.css';
import '@fontsource/baloo-bhai-2/800.css';

// Archivo Black (Only weight 400)
import '@fontsource/archivo-black/400.css';

// Titan One (Only weight 400)
import '@fontsource/titan-one/400.css';

// Sofia (Only weight 400)
import '@fontsource/sofia/400.css';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <GoogleOAuthProvider clientId={import.meta.env.GOOGLE_CLIENT_ID}>
      <App />
    </GoogleOAuthProvider>
    </BrowserRouter>
  </StrictMode>
);
