import styled from 'styled-components';

export const Container = styled.form`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;

    ${({formTitle})=>(formTitle && `
        &::before{
            font-size: 1.25rem;
            align-self: center;
            content: "${formTitle}";
        }
    `)}
`;

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
