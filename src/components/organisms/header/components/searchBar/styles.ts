import styled, { css } from "styled-components";
import { StyleContainer } from "components/atoms/container";

interface PropsContainer {
  background?: string;
  open: boolean;
}

export const SearchContainer = styled(StyleContainer)<PropsContainer>`
  display: ${({ open }) => (open ? "none" : "flex")};
  align-items: center;
  cursor: pointer;
  background-color: ${({ background = "none" }) => background};
`;

export const Section = styled(StyleContainer)`
  cursor: pointer;
  .chakra-popover__content,
  .chakra-popover__body {
    width: 100% !important;
  }
`;

export const CustomContainer = styled(StyleContainer)<PropsContainer>`
  display: flex;
  align-items: center;
  cursor: pointer;
  ${({ open, background = "none" }) =>
    open
      ? css`
          width: auto;
          background-color: ${background};
          transition: ease-in 0.25s;
        `
      : css`
          transition: ease-in 0.25s;
          width: 0px;
          svg {
            width: 0px;
            height: 0px;
          }
          input {
            width: 0px;
            height: 0px;
          }
        `}
`;
