import styled from "styled-components";
import { layout } from "styled-system";
import { PropsStyle } from "./types";

export const Main: any = styled.div<PropsStyle>`
  ${layout}
  border-radius: 200px;
  background: #e1e1e1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image: any = styled.img<PropsStyle>`
  ${layout}
  border-radius: 200px;
`;
