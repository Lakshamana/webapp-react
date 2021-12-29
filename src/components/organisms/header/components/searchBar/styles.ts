import styled, { css } from "styled-components";
import { StyleContainer } from "components";
import { breakpoints } from "styles";

interface PropsContainer {
  background?: string;
  open: boolean;
}

export const SearchContainer = styled(StyleContainer)<PropsContainer>`
  display: ${({ open }) => (open ? "none" : "flex")};
  align-items: center;
  cursor: pointer;
  background-color: ${({ background = "none" }) => background};
  padding: 0 16px;
  @media screen and (min-width: ${breakpoints.xl}) {
    padding: 0 32px;
  }
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
        `
      : css`
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
