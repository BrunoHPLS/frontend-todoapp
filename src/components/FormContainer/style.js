import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--secondary-color);

    ${({media})=>(media === 'large' ? `
        justify-content: center;
        grid-area: auth;
        padding: 2rem;
        gap: 2rem;
    `:`
        width: clamp(300px, 85%, 600px);
        border-radius: 0.5rem;
        padding: 0.75rem 1.5rem;
        gap: 1.15rem;
    `)}
`;

export const TitleDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`;

export const Title = styled.h2`
    cursor: default;
    align-self: center;
    font-size:  ${({media})=>(media === 'large' ? "2.75rem": "2rem")};
    color: var(--font-secondary-color);
`;

export const Description = styled.h4`
    display: flex;
    flex-direction: column;
    font-size: 0.9rem;
    white-space: pre-line;
    color: var(--font-primary-color);
`;
