import styled from "styled-components";
import { flex, space, layout, flexbox } from "styled-system";
import { StyledProps } from "./types";

import { Text as TextComponent } from "components/atoms";

export const HeaderMain = styled.div<StyledProps>`
  ${layout}
  ${space}
  ${flexbox}
  background:#222;
  align-items: center;
`;

export const AvatarContainer = styled.div<StyledProps>`
  ${layout}
  ${flexbox}
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextContainer = styled.div<StyledProps>`
  ${layout}
  ${flexbox}
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Text = styled(TextComponent)<StyledProps>`
  text-transform: uppercase;
`;

export const DotsContainer = styled.div<StyledProps>`
  ${flexbox}
`;