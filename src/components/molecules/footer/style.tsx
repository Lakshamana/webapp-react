import styled from "styled-components";

export const BoxFooter: any = styled.div`
    width: 100%;
    height: 100px;
    background-color: black;
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 0;

    @media screen and (max-width: 640px) {
        height: 315px;
    }
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
        padding-bottom: 34px;
        padding-top: 40px;
        justify-items: center;
    }
`;

export const TextFooter: any = styled.div`
    display: flex;
    justify-content: center;
    color: white;
    font-size: 16px;

    @media screen and (max-width: 640px) {
        width: 100%;
        padding-top: 50px;
        border-top: 1px solid #666666;
        border-radius: 1px;
        color: #E1E1E1;
        font-size: 12px;
    }

`;