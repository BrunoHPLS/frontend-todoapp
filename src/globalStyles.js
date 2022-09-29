import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b,button, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        color: inherit;
        background-color: initial;
        text-decoration: none;
        margin: 0;
        padding: 0;
        border: none;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }

    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    }

    :root{
        --red: #F35656;
        --white: #E5E5E5;
        --gray: #576269;
        --green: #00C896;
        --aqua: #C8FCEA;
        ${({theme})=>(theme === 'dark' ? 
        `
        --inverse-primary-color: #F2ECFF;
        --inverse-secondary-color: #FAF7FF;
        --primary-color: #252525;
        --secondary-color: #3F4246;
        `:
        `
        --inverse-primary-color: #303030;
        --inverse-secondary-color: #3F4246;
        --primary-color: #D5D5D5;
        --secondary-color: #C7D0E8;
        `)}
    }

    body{
        background-color: var(--primary-color);
        color: var(--inverse-primary-color);
        font-family: 'Roboto', sans-serif;
    }
`;

export default GlobalStyles;
