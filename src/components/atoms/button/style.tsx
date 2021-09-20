import styled from "styled-components";
import { color, space, layout, typography, border, variant } from "styled-system";

export const BoxButton: any = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Helvetica;
    font-weight: 500;
    text-transform: none;
    cursor: pointer;
    border-radius: 4px;           

    ${space}
    ${layout}
    ${typography}
    ${color}
    ${border}

    ${variant ({
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
            }
        }
    })}
`;