import styled from "styled-components";
import { typography, space, color } from "styled-system";

interface TextProps {
  ellipsis?: boolean;
}

export const HeadlineText = styled.h2<TextProps>`
  ${typography}
  ${space}
  ${color}
  ${({ ellipsis }) =>
    ellipsis &&
    `
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  `}
`;

export const TitleText = styled.h3<TextProps>`
  ${typography}
  ${space}
  ${color}
`;

export const SubheadingText = styled.h4<TextProps>`
  ${typography}
  ${space}
  ${color}
  ${({ ellipsis }) =>
    ellipsis &&
    `
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  `}
`;

export const RegularText = styled.p<TextProps>`
  ${typography}
  ${space}
  ${color}
  ${({ ellipsis }) =>
    ellipsis &&
    `
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  `}
`;
