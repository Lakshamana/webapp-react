import styled from "styled-components";

export const BoxFooter = styled.div`
    width: 100%;
    height: 108px;
    background-color: black;
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 0;

    @media screen and (max-width: 640px) {
        height: 210px;
    }
`;

export const FooterItems = styled.div`
    width: 90%;
    height: 100%;
    display: grid;
    grid-template-columns: 70% 30%;
    align-items: center;

    @media screen and (max-width: 640px) {
        display: flex;
        padding-bottom: 34px;
        padding-top: 40px;
        flex-flow: column;
    }
`;

export const TextFooter = styled.div`
    display: flex;
    justify-content: left;
    color: white;
    font-size: 1rem;

    @media screen and (max-width: 640px) {
        width: 100%;
        padding-top: 1.5rem;
        border-top: 1px solid #666666;
        border-radius: 1px;
        justify-content: center;
        order: 2;
    }

`;