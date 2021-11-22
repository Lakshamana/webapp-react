import styled from "styled-components";
import { breakpoints } from 'styles';
import { StyleContainer } from "components";

export const BoxFooter = styled(StyleContainer)`
    height: ${({ theme }) => theme.sizes.footerMobileHeight};
    background-color: ${({ theme }) => theme.colors.footerBg[theme.colorMode]};
    bottom: 0;
    left: 0;
    right: 0;

    padding: 0 ${({ theme }) => theme.sizes.paddingSm};

    @media screen and (min-width: ${breakpoints.md}) {
        padding: 0 ${({ theme }) => theme.sizes.paddingMd};
        height: ${({ theme }) => theme.sizes.footerDesktopHeight};
    }

    @media screen and (min-width: ${breakpoints.lg}) {
        padding: 0 ${({ theme }) => theme.sizes.paddingLg};
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