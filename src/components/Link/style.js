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
    font-size: 0.9rem;
    font-style: italic;

    &::before{
        font-size: 1.2rem;
        font-family: 'Material Symbols Outlined';
        content: "exit_to_app";
    }
`;
