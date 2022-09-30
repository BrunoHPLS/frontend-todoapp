import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items:center;
    justify-content: center;
    width: 4rem;
    height: 2rem;
    overflow: hidden;
    box-sizing: border-box;
    border: 0.125rem solid var(--font-secondary-color);
    border-radius: 0.5rem;
    transition: all 0.2s ease-in-out;
`;

export const Label = styled.label`
    cursor: pointer;
    width: 100%;
    height: 100%;
    background-color: var(--font-primary-color);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    transition: all 0.2s ease-in-out;

    font-family: 'Material Symbols Outlined';

    &::before{
        position: absolute;
        transition: all 0.2s ease-in-out;
        font-size: 1.5rem;
        color: var(--primary-color);
        ${({isChecked})=>(isChecked ? `
        content: "dark_mode";
        transform: translateX(0.8rem);
        `:`
        content: "sunny";
        transform: translateX(-0.8rem);
        `)}
    }

`