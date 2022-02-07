import styled from "styled-components";
import { StyleContainer } from "components";
import { breakpoints } from "styles";

interface BoxHeaderProps {
  mode?: string;
}

export const BoxHeader = styled(StyleContainer) <BoxHeaderProps>`
  height: ${({ theme }) => theme.sizes.headerMobileHeight};
  background-color: ${({ theme }) => theme.colors.headerBg[theme.colorMode]};

  padding: 0 ${({ theme }) => theme.sizes.paddingSm};

  @media screen and (min-width: ${breakpoints.md}) {
    padding: 0 ${({ theme }) => theme.sizes.paddingMd};
    height: ${({ theme }) => theme.sizes.headerDesktopHeight};
  }
`;

export const HeaderItems = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;
