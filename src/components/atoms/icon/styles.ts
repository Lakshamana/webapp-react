import styled from "styled-components";
import { space } from "styled-system";
import { PropsStyle } from "./types";

const sizeObj: any = {
  small: "24px",
  medium: "32px",
  large: "48px",
};

const getSize = (size = "small"): any => {
  return sizeObj[size];
};

export const IconContainer = styled.div<PropsStyle>`
  ${space}
  ${({ clickable }: PropsStyle) => `${clickable && "cursor: pointer;"}`}
  ${({ size }: PropsStyle) =>
    `width: ${getSize(size)}; height: ${getSize(size)}`}
`;
