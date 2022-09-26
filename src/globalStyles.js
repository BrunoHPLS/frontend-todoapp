import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root{
        ${({theme})=>(theme === 'dark' ? 
        `
        --font-color: #ffffff;
        --bgcolor-df: #1F1F1F;
        `:
        `
        --font-color: #303030;
        --bgcolor-df: #D5D5D5;
        `)}
    }

    body{
        background-color: var(--bgcolor-df);
        color: var(--font-color);
    }
`;

export default GlobalStyles;
