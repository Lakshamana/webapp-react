import styled from "styled-components";

import { StyleContainer } from "components";
import { colors } from "styles";

export const UserContainer = styled(StyleContainer)`
  user-select: none;
  cursor: pointer;
  background-color: ${colors.blue["300"]};
  border-radius: 5px;
`;

export const SettingsContainer = styled(StyleContainer)`
  border-radius: 50%;
  background-color: ${colors.white};
`;

export const CircleImage = styled.img<LayoutProps>`
  ${layout}
  border-radius: 50%;
`;
