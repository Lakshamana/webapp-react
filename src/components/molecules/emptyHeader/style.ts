import styled from "styled-components";
import { StyleContainer } from "components";
import { breakpoints } from "styles";

interface BoxHeaderProps {
  mode?: string;
}

export const BoxHeader = styled(StyleContainer) <BoxHeaderProps>`
  overflow-y: hidden;
  height: ${({ theme }) => theme.sizes.headerMobileHeight};
  background-color: ${({ theme }) => theme.colors.headerBg[theme.colorMode]};
  box-shadow: 1px 0px 1px rgb(0 0 0 / 38%);

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
