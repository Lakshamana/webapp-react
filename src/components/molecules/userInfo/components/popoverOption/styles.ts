import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

export const Option = styled.li<SpaceProps>`
  ${space}
  cursor: pointer;
  user-select: none;
  :hover {
    background: ${({ theme }) => theme.colors.bodyBg[theme.colorMode]};
  }
`;
