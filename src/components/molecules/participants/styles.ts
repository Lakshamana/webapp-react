import styled from "styled-components";
import { space, layout } from "styled-system";

export const Participant = styled.img<any>`
  ${space}
  ${layout}
  width: 35px;
  height: 35px;
  border-radius: 35px;
  margin-right: -0.5em;
`;

export const Button = styled.button<any>`
  ${space}
  ${layout}
  height: 35px;
  border-radius: 35px;
  background: ${({ theme }) => theme.colors.reaction.hover.background};
  color: ${({ theme }) => theme.colors.reaction.hover.color};
  padding: 0 0.6em;
  font-size: 14px;
`;
