import styled from "styled-components";
import { layout, space } from 'styled-system'

export const BoxFooter: any = styled.div`
    width: 100%;
    height: auto;
    background-color: black;
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 0;
`;

export const FooterItems: any = styled.div`
    width: 90%;
    height: 100%;
    display: grid;
    grid-template-columns: 20% 60% 20%;
    align-items: center;

    @media screen and (max-width: 640px) {
        display: grid;
        grid-template-columns: 1fr;
        padding-bottom: 50px;
        padding-top: 50px;
        justify-items: center;
    }
`;

export const LogoFooter: any = styled.img`
    ${layout}
    ${space}

    @media screen and (max-width: 640px) {
       margin-bottom: 40px;
    }
`;

export const TextFooter: any = styled.div`
    display: flex;
    justify-content: center;
    color: white;

    @media screen and (max-width: 640px) {
        width: 100%;
        padding-top: 40px;
        border-top: 2px solid #666666;
        border-radius: 1px;
        color: #E1E1E1;
    }

`;