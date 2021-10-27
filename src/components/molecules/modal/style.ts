import styled from "styled-components";
import { space, layout } from "styled-system";
import { StyledProps } from "./types";

export const BackgroundModal = styled.div<StyledProps>`
  ${space}
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #00000099;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalMain = styled.div<StyledProps>`
  ${layout}
  background: #222222;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const BodyModal = styled.div<StyledProps>`
  margin: 24px;
`;
