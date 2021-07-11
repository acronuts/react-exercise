import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
 
    body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 1rem;
        background: #FAFAFA;
        min-height: 100vh;
        height: 100%;
        /* position: relative; */
        /* width: 90%; */
        /* margin: 0 auto; */
        color: rgba(0, 0, 0, 0.85)
    }
`;

export const colors = {
    blue: '#6E81D5',
    ricardoOrange: '#EF7310'
}