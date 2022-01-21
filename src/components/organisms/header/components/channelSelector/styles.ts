import styled, { css } from "styled-components";
import { layout, space, SpaceProps, LayoutProps } from "styled-system";
import { StyleContainer } from "components/atoms/container";
import { breakpoints } from "styles";

interface IconContainerProps {
  open: boolean;
}

interface TypeSpaceProps extends SpaceProps, LayoutProps { }

export const CustomContainer = styled(StyleContainer)`
  ${layout}
   ${({ theme, display }) => {
    return (display === 'menu')
      ? (`
        padding: 0 16px;
        @media screen and (max-width: ${breakpoints.lg}) {
          display: none;
        }
        border-left: 1px solid ${theme.colors.grey["800"]}
      `)
      : (`
        @media screen and (min-width: ${breakpoints.lg}) {
          display: none;
        }
      `)
  }};
  align-items: center;
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

export const ChannelItem = styled.li<SpaceProps>`
  ${space}
  cursor: pointer;
  user-select: none;

  :hover {
    background: ${({ theme }) => theme.colors.blue["300"]};
  }
`;

export const SearchContainer = styled(StyleContainer)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey["700"]};
`;
