import styled, { css } from "styled-components";
import { layout } from "styled-system";
import { StyleContainer } from "components/atoms/container";

interface IconContainerProps {
  open: boolean;
}

export const CustomContainer = styled(StyleContainer)`
  border-left: 1px solid white;
  border-right: 1px solid white;
`;

export const ChannelIcon = styled.img`
  ${layout}
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
