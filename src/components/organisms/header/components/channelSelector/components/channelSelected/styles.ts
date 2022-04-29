import styled, { css } from "styled-components";
import { StyleContainer } from "components";
import { layout, space, SpaceProps, LayoutProps } from "styled-system";

interface IconContainerProps {
  open: boolean;
}

interface TypeSpaceProps extends SpaceProps, LayoutProps { }

export const ChannelIcon = styled.img<TypeSpaceProps>`
  ${layout}
  ${space}
  border-radius: 8px;
`;

export const IconContainer = styled.div<IconContainerProps>`
  padding-left: 2px;
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
  flex-direction: column;
  ${({ display }) => display === 'menu'
    ? css`
        display: none;
      `
    : css`
        display: flex;
        flex-direction: row;
        justify-content: right;
        gap: 6px;
        margin-right: 20px;
      `
  }

  @media screen and (min-width: 1100px) {
    display: flex;
  }
`;
