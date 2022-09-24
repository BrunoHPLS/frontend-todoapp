import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    body{
        background-color: ${({theme})=>(theme!=undefined && theme === 'dark' ? '#151515':'#ccc')};
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: ${({media})=>(media!=undefined && media === 'large' ? 'flex-start':media!=undefined && media === 'tablet' ? 'center':'flex-end')};
    }
`;

export default GlobalStyles;
