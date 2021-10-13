import styled from "styled-components";

export const BoxHeader = styled.div`
    width: 100%;
    height: 100px;
    background-color: black;
    display: flex;
    justify-content: center;
    position: absolute;
    top: 0;

    @media screen and (max-width: 640px) {
        height: 72px;
    }
`;

export const HeaderItems = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    align-items: center;
`;
