import styled from "styled-components";
import { layout, LayoutProps } from "styled-system";
import { StyleContainer } from "components";
import { breakpoints } from "styles";

export const UserContainer = styled(StyleContainer)`
  user-select: none;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.blue["300"]};
  :border-radius: 5px;
  @media screen and (min-width: ${breakpoints.lg}) {
    display: none;
  }
`;

export const SettingsContainer = styled(StyleContainer)`
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const CircleImage = styled.img<LayoutProps>`
  ${layout}
  border-radius: 50%;
`;
