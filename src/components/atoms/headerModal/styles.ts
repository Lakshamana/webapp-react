import styled from "styled-components";
import { layout, space } from "styled-system";
import { PropsStyle } from "./types";

export const Title = styled.span<PropsStyle>`
  font-family: Helvetica Neue;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
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
