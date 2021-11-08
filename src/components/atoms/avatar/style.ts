import styled from "styled-components";
import { layout, color } from "styled-system";
import { StyledProps } from "./types";

export const Main: any = styled.div<StyledProps>`
  ${layout}
  ${({ background }) => `background: ${background};`}
  border-radius: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image: any = styled.img`
  ${layout}
  border-radius: 200px;
`;