import styled from "styled-components";
import { layout } from "styled-system";
import { StyledProps } from "./types";

export const MainChatBody = styled.div<StyledProps>`
  ${layout}
  width: 100%;
  background: #000;
  height: 100%;
  overflow-y: scroll;
  scroll-snap-align: end;
`;