import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0.75rem 1.5rem;
    gap: 1.5rem;
    width: clamp(300px, 85%, 500px);
    border-radius: 0.5rem;
    background-color: var(--secondary-color);
`;

export const TitleDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`;

export const Title = styled.h2`
    align-self: center;
    font-size: 2rem;
    color: var(--inverse-secondary-color);
`;

export const Description = styled.h4`
    display: flex;
    flex-direction: column;
    font-size: 0.9rem;
    white-space: pre-line;
    color: var(--inverse-primary-color);
`;
