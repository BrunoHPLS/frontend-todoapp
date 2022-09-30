import styled from 'styled-components';
import AuthBG from '../../assets/img/AuthImage.png';

export const MainBody = styled.section`


    ${({media})=>(media!=='large' ? `
        height: 100vh;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        align-items: center;
        justify-content: center;
    `: `
        width: clamp(1400px,85%,2000px);
        height: 900px;
        margin: auto;
        overflow: hidden;
        box-sizing: border-box;
        border-radius: 0.5rem;
        box-shadow: 0px 0px 4px rgba(0,0,0,0.5);
        display: grid;
        grid-template-columns: 25% 25% 25% 25%;
        grid-template-areas: 
        "screen screen screen auth";
    `)}
`;

export const ScreenDiv = styled.div`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    grid-area: screen;
    background-color: var(--secondary-color);
    background-image: url(${AuthBG});
    background-position: center;
    background-size: cover;
    position: relative;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: 
    "logo  . ." 
    ". . ." 
    ". . ." ;
    padding: 2rem;
`;

export const ScreenCopyRight = styled.a`
    position: absolute;
    bottom: 2rem;
    left: 2rem;
    font-style: italic;
    color: var(--gray);

    &:hover {
      color:  var(--white);
    }
`;