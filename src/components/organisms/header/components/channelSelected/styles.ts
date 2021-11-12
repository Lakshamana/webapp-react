import styled, { css } from "styled-components";
import { StyleContainer } from "components";
import { layout, space, SpaceProps, LayoutProps } from "styled-system";

interface IconContainerProps {
  open: boolean;
}

interface TypeSpaceProps extends SpaceProps, LayoutProps {}

export const ChannelIcon = styled.img<TypeSpaceProps>`
  ${layout}
  ${space}
  border-radius: 8px;
`;

export const IconContainer = styled.div<IconContainerProps>`
  ${layout}
  ${({ open }) =>
    open
      ? css`
          transform: rotate(180deg);
          transition: ease-in 0.25s;
        `
      : css`
          transition: ease-in 0.25s;
        `}
`;

export const TextContainer = styled(StyleContainer)`
  display: none;

  @media screen and (min-width: 1100px) {
    display: flex;
  }
`;
