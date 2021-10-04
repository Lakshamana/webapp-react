import styled, { css } from "styled-components";
import { StyleContainer } from "components";

interface PropsSideContainer {
  open: boolean;
}

export const SideContainer = styled(StyleContainer)<PropsSideContainer>`
  width: 100%;
  position: absolute;
  z-index: 1000;
  top: 100px;
  height: 100%;
  ${({ open }) =>
    open
      ? css`
          width: 200px;
          transition: ease-in 0.25s;
        `
      : `
      width: 0px;
      transition: ease-in 0.25s;`}
`;
