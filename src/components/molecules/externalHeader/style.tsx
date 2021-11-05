import styled from "styled-components";
import { StyleContainer } from "components";
import { colors, breakpoints, sizes } from "styles";

interface BoxHeaderProps {
  mode?: string;
}

export const BoxHeader = styled(StyleContainer)<BoxHeaderProps>`
  height: ${sizes.headerDesktopHeight};
  display: flex;
  ${({ mode }) =>
    mode === "light"
      ? `
background-color: ${colors.white};
border-bottom: 1px solid ${colors.grey["200"]};
`
      : `
  background-color: ${colors.black};
  `}
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
