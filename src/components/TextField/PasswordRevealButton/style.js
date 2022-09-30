import styled from 'styled-components';

export const PasswordRevealLabel = styled.label`
    min-width: ${({media})=>(media !== 'mobile' ? "2.7rem":"2.25rem")};
    box-sizing: border-box;
    font-size: ${({media})=>(media !== 'mobile' ? "1.75rem":"1.4rem")};
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--font-secondary-color);

    &::before{
        font-family: 'Material Symbols Outlined';
        content: "${({checked})=>(checked ? "visibility":"visibility_off")}";
    }
`;