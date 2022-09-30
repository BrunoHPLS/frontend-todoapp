import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Anchor = styled(Link)`
    align-self: flex-start;
    display: flex;
    align-items:center;
    gap: 0.25rem;
    width: auto;
    padding: 0;
    margin: 0;
    color: var(--aqua);
    font-size: ${({media})=>( media !== 'mobile' ? "1.2rem":"0.9rem")};
    font-style: italic;

    &::before{
        font-size: ${({media})=>( media !== 'mobile' ? "1.4rem":"1.2rem")};
        font-family: 'Material Symbols Outlined';
        content: "exit_to_app";
    }

    &:hover{
        transition: all 0.2s ease-in-out;
        transform: scale(1.05);
        text-shadow: 0px 0px 2px ;
    }
`;
