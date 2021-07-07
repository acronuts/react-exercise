import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './style/Theme';
import * as theme from './style/Theme'
import Routes from './routes';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme} />
      <GlobalStyle />
      <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
