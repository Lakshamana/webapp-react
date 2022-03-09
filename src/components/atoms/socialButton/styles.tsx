import styled from "styled-components";
import { color, space } from "styled-system";

export const BoxButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 50%;
    width: 56px;
    height: 56px;
    color: white;
    background: #444444 ${({ theme })=>(theme.colors.inputBg[theme.colorMode])};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    ${space}
    ${color}

    &:hover {
        background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0 0);
    }
`;
