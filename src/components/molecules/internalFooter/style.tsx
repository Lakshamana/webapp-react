import styled from "styled-components";
import { breakpoints } from 'styles';
import { StyleContainer } from "components";
import { sizes } from "styles"

export const BoxFooter = styled(StyleContainer)`
    height: ${sizes.footerDesktopHeight};
    background-color: ${({ theme }) => theme.colors.footerBg[theme.colorMode]};
    bottom: 0;
    left: 0;
    right: 0;

    @media screen and (max-width: ${breakpoints.md}) {
        height: ${sizes.footerMobileHeight};
    }
`;

export const FooterItems = styled(StyleContainer)`
    display: grid;
    grid-template-columns: 70% 30%;
    align-items: center;

    @media screen and (max-width: ${breakpoints.md}) {
        display: flex;
        padding-bottom: 34px;
        padding-top: 40px;
        flex-flow: column;
    }
`;

export const TextFooter = styled.div`
    display: flex;
    justify-content: left;
    color: ${({ theme }) => theme.colors.generalText[theme.colorMode]};
    font-size: 1rem;
    align-items: center;

    @media screen and (max-width: ${breakpoints.md}) {
        width: 100%;
        padding-top: 1.5rem;
        border-top: 1px solid #666666;
        border-radius: 1px;
        justify-content: center;
        order: 2;
        flex-wrap: wrap;
    }

`;