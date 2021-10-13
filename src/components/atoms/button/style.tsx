import styled from "styled-components";
import { color, space, layout, typography, border, variant } from "styled-system";

export const BoxButton: any = styled.button`
    display: flex;
    align-items: center;
    padding: 10px 15px;
    justify-content: center;
    font-weight: bold;
    cursor: pointer;
    border-radius: 6px;           

    ${space}
    ${layout}
    ${typography}
    ${color}
    ${border}

    ${variant({
    variants: {
        primary: {
            color: 'white',
            bg: '#0091D3',
            textTransform: 'uppercase'
        },
        secondary: {
            color: 'white',
            bg: '#17641e',
            textTransform: 'uppercase'
        },
        accent: {
            color: 'white',
            bg: '#e8a326',
            textTransform: 'uppercase'
        },
        grey: {
            color: 'white',
            bg: '#A4A4A4',
            textTransform: 'uppercase',
            cursor: 'inherit'
        }
    }
})}

    &:hover {
        background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0 0);
    }
`;