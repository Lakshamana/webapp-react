import styled from "styled-components";
import { flexbox, layout, space } from "styled-system";
import { StyleProps } from "./types";

import { Icon as IconComponent } from "@iconify/react";

export const Icon = styled(IconComponent)`
  width: 48px;
  height: 48px;
`;

export const Image = styled.div<StyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 3px;
  ${({ backgroundUrl }) => `background-image: url(${backgroundUrl});`}

  svg {
    display: none;
  }
`;

export const VideoRelatedMain = styled.div<StyleProps>`
  ${flexbox}
  ${layout}
  padding: 13px;
  margin-top: 8px;
  display: flex;
  background: #222222;

  border-radius: 3px;

  &:hover {
    background: #444444;
    cursor: pointer;

    ${Icon} {
      display: flex;
    }

    ${Image} {
      opacity: 0.5;
    }
  }
`;

export const ImageContainer = styled.div<StyleProps>`
  flex: 1;
`;

export const InfoContainer = styled.div<StyleProps>`
  ${flexbox}
  ${space}
  flex: 1;
  display: flex;
  flex-direction: column;
`;
