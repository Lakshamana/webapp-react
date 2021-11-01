import styled from "styled-components";
import { flexbox, layout } from "styled-system";
import { StyleProps } from "./types";

export const VideoRelatedMain = styled.div<StyleProps>`
  ${flexbox}
  ${layout}
  padding: 13px;
  display: flex;
  background: #222222;

  &:hover {
    background: #444444;
    cursor: pointer;
  }
`;

export const ImageContainer = styled.div<StyleProps>`
  flex: 1;
`;

export const InfoContainer = styled.div<StyleProps>`
  ${flexbox}
  flex: 1;
  display: flex;
  flex-direction: column;
`;
