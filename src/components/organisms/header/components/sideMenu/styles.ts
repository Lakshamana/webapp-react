import styled, { css } from "styled-components";
import { StyleContainer } from "components";

interface PropsSideContainer {
  open: boolean;
}

export const SideContainer = styled(StyleContainer)<PropsSideContainer>`
  position: absolute;
  top: 70px;
  z-index: 1000;
  overflow: auto;
  height: calc(100% - 70px);
  ${({ open }) =>
    open
      ? css`
          width: 500px;
          transition: ease-in 0.25s;
        `
      : `
      width: 0px;
      transition: ease-in 0.25s;`}
  @media (min-width: 64em) {
    top: 100px;
    height: calc(100% - 100px);
  }
`;

export const ScrollContainer = styled(StyleContainer)`
  overflow: auto;
`;
