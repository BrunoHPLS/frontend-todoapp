import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    gap: 0.5rem;
`;

export const Button = styled.input.attrs({type: 'submit'})`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${({media})=>(media !== 'mobile' ? "1.5rem":"1.15rem")};
    border: none;
    padding: 0.4rem;
    outline: none;
    border-radius: 0.25rem;
    background-color: var(--green);
    color: var(--font-secondary-color);
    transition: all 0.3s ease-in-out;

    ${({media})=>(media === 'large' && `
        background-color: var(--dark-green);

        &:hover{
            background-color: var(--green);
        }
    `)}
`;

export const ResetButton = styled(Button).attrs({type: 'reset'})`
    background-color: var(--font-secondary-color);
    color: var(--secondary-color);

    ${({media})=>(media === 'large' && `
    &:hover{
        background-color: var(--font-secondary-color);
    }
    `)}
`