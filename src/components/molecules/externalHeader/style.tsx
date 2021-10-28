import styled from "styled-components";
import { StyleContainer } from "components";
import { breakpoints, sizes } from 'styles';

export const BoxHeader = styled(StyleContainer)`
    height: ${sizes.headerDesktopHeight};
    background-color: black;
    display: flex;

    @media screen and (max-width: ${breakpoints.md}) {
        min-height: ${sizes.headerMobileHeight};
    }
`;

export const HeaderItems = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
`;
