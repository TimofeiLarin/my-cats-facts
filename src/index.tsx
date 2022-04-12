import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import { Global } from './Global.styles';

const container = document.getElementById('root');

const AppGlobal = (
  <React.StrictMode>
    <BrowserRouter>
      <Global />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
if (container) {
  const root = createRoot(container);
  root.render(AppGlobal);
}
