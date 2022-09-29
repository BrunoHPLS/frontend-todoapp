import styled from 'styled-components';

export const PasswordRevealLabel = styled.label`
    min-width: 2.25rem;
    box-sizing: border-box;
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--inverse-secondary-color);

    &::before{
        font-family: 'Material Symbols Outlined';
        content: "${({checked})=>(checked ? "visibility":"visibility_off")}";
    }
`;