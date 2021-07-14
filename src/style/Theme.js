import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
 
    body {
        font-family: 'Roboto' ,'Helvetica', 'Arial', sans-serif;;
        font-size: 1rem;
        background: #fafafa;
        min-height: 100vh;
        height: 100%;
        /* position: relative; */
        /* width: 90%; */
        margin: 0 auto;
        color: rgba(0, 0, 0, 0.85)
    }
`;

export const colors = {
    blue: '#6E81D5',
    ricardoOrange: '#EF7310'
}

export const lightTheme = {
    body: '#f1f1f1',
    text: '#121620'
}

export const darkTheme = {
    body: '#121620',
    text: '#f1f1f1'
}