import styled from "styled-components";
import { layout, LayoutProps } from "styled-system";
import { StyleContainer } from "components";

export const UserContainer = styled(StyleContainer)`
  user-select: none;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.blue["300"]};
  :border-radius: 5px;
`;

export const SettingsContainer = styled(StyleContainer)`
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const CircleImage = styled.img<LayoutProps>`
  ${layout}
  border-radius: 50%;
`;
