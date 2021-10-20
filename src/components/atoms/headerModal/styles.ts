import styled from "styled-components";
import { layout, space, fontSize } from "styled-system";
import { PropsStyle } from "./types";

export const Title = styled.span<PropsStyle>`
  ${fontSize}
  font-family: Helvetica Neue;
  font-style: normal;
  font-weight: bold;
  line-height: 40px;
`;

export const BoxWrapper = styled.div<PropsStyle>`
  ${space}
  ${layout}
  height: 81px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background: #0660f9;
`;
