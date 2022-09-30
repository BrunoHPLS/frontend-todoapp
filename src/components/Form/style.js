import styled, { keyframes } from 'styled-components';

const rotateAnimation = keyframes`
    from{transform: rotate(0deg)}
    to{transform: rotate(360deg)}
`

export const Container = styled.form`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
    

    &::after{
        display: none;
        position: absolute;
        z-index: 2;
        content: "";
        top: calc(50% - 4rem);
        left: calc(50% - 4rem);
        
        width: 8rem;
        height: 8rem;
        border-radius: 100%;
        border-bottom: 2px solid white;
        animation: ${rotateAnimation} 0.5s linear infinite;
    }

    ${({isLoading})=>(isLoading && `
        &::before{
            position: absolute;
            z-index: 1;
            content: "Carregando...";
            top: -0.25rem;
            left: -0.25rem;
            width: calc(100% + 0.5rem);
            height: calc(100% + 0.5rem);
            box-sizing: border-box;
            background-color: var(--primary-color);
            border-radius: 0.5rem;
            opacity: 0.9;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        &::after{
            display: initial;
        }
    `)}

`;

export const FormTitle = styled.h2`
    font-size: 1.25rem;
    align-self: center;
`

export const FormMessage = styled.span`
    align-self: center;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0.75rem 0.5rem;
    font-size: 0.85rem;
    color: white;
    background-color: ${({code})=>((code >= 200 && code < 300) ? "#318285":"var(--red)")};
    border-radius: 0.25rem;
`;
