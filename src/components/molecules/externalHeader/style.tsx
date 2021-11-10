import styled from "styled-components";
import { StyleContainer } from "components";
import { breakpoints, sizes } from "styles";

interface BoxHeaderProps {
  mode?: string;
}

export const BoxHeader = styled(StyleContainer) <BoxHeaderProps>`
  height: ${sizes.headerDesktopHeight};
  display: flex;
  background-color: ${({ theme }) => theme.colors.headerBg[theme.colorMode]};

  @media screen and (max-width: ${breakpoints.md}) {
    height: ${sizes.headerMobileHeight};
  }
`;

export const HeaderItems = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;
