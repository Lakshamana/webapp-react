import styled from "styled-components";
import { space } from "styled-system";
import { PropsStyle } from "./types";

export const IconContainer = styled.div<PropsStyle>`
  ${space}
  cursor: ${(props: PropsStyle) => (props.clickable ? "pointer" : "auto")};
  -webkit-mask: ${(props: PropsStyle) => `url(${props.url})`} no-repeat center;
  mask: ${(props: PropsStyle) => `url(${props.url})`} no-repeat center;
`;
