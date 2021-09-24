import styled, { css } from "styled-components";
import { layout, space, SpaceProps, LayoutProps } from "styled-system";
import { StyleContainer } from "components/atoms/container";

interface IconContainerProps {
  open: boolean;
}

interface TypeSpaceProps extends SpaceProps, LayoutProps {}

export const CustomContainer = styled(StyleContainer)`
  display: flex;
  alignitems: center;
  border-left: 1px solid #444444;
  border-right: 1px solid #444444;
  .chakra-popover__body {
    padding: 0;
  }
`;

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

export const ChannelList = styled.ul`
  ${layout}
  width: 100%;
  li:last-child {
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  }
`;

export const ChannelItem = styled.li<TypeSpaceProps>`
  ${space}
  cursor: pointer;
  user-select: none;
  :hover {
    background: #0660f9;
  }
`;

export const SearchContainer = styled(StyleContainer)`
  border-bottom: 1px solid #666666;
`;
