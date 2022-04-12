import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import App from './App';

import { Global, theme } from './Global.styles';

const container = document.getElementById('root');

const AppGlobal = (
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Global />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
if (container) {
  const root = createRoot(container);
  root.render(AppGlobal);
}
