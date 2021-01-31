import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import 'normalize.css';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import GlobalStyle from './GlobalStyle';

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Routes />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);
