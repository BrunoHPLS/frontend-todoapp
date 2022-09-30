import styled, { keyframes } from 'styled-components';

export const InputContainer = styled.div`
    display: flex;
    align-items: stretch;
    width: 100%;
    box-sizing: border-box;
    border: 2px solid ${({focused})=>(focused ? "var(--gray)":"var(--primary-color)")};
    border-radius: 0.25rem;
    overflow: hidden;
    transition: all 0.3s ease-in-out;
    background-color: ${({focused})=>(focused ? "var(--gray)":"var(--primary-color)")};
`;

const bounceAnimation = keyframes`
    0%{ transform: rotate(0deg) }
    20%{ transform: rotate(30deg) }
    60%{ transform: rotate(-30deg) }
    100%{ transform: rotate(0deg) }
`;

export const InputIcon = styled.label`
    font-family: 'Material Symbols Outlined';
    min-width: ${({media})=>(media !== 'mobile' ? "2.7rem":"2.25rem")};
    box-sizing: border-box;
    font-size:${({media})=>(media !== 'mobile' ? "1.75rem":"1.4rem")};
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--font-secondary-color);
`

export const AnimatedInputIcon = styled(InputIcon)`
    animation-name: ${bounceAnimation};
    animation-duration: 0.4s;
    animation-iteration-count: 1;
`;

export const InputArea = styled.input`
    outline: none;
    width: 100%;
    box-sizing: border-box;
    padding: 0.4rem 0.25rem;
    font-size: ${({media})=>(media !== 'mobile' ? "1.5rem":"1.15rem")};
    border: 2px solid transparent;
    background-color: var(--font-secondary-color);
    border-radius: 0.25rem;

    &:required{
        border: 2px solid var(--red);
    }
`;
