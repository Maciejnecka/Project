import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Reset } from 'styled-reset';
import { ThemeProvider } from 'styled-components';
import App from './components/App.js';
import GlobalFonts from './fonts/GlobalFonts.js';
import GlobalStyles from './styled/GlobalStyles.js';
import theme from './styled/theme.js';
import { Provider } from 'react-redux';
import store from './components/redux/store.js';

const root = createRoot(document.querySelector('#root'));
root.render(
  <>
    <Reset />
    <GlobalFonts />
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </StrictMode>
    </ThemeProvider>
  </>
);
