import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    gap: 0.5rem;
`;

export const Button = styled.input.attrs({type: 'submit'})`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2rem;
    font-size: 1.15rem;
    border: none;
    padding: 0;
    outline: none;
    border-radius: 0.25rem;
    background-color: var(--green);
    color: var(--inverse-secondary-color);
`;

export const ResetButton = styled(Button).attrs({type: 'reset'})`
background-color: var(--inverse-secondary-color);
color: var(--secondary-color);
`