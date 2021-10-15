import styled from "styled-components";
import { StyleContainer } from "components";
import { breakpoints } from 'styles';

export const BoxHeader = styled(StyleContainer)`
    height: 100px;
    background-color: black;
    display: flex;

    @media screen and (max-width: ${breakpoints.md}) {
        min-height: 72px;
    }
`;

export const HeaderItems = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
`;
