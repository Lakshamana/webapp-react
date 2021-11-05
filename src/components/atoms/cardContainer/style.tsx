import styled from "styled-components";
import { Props } from "./types";
import { space, layout, flexbox, position } from "styled-system";
import { breakpoints } from "styles";

export const Container = styled.div<Props>`
  ${space}
  ${layout}
	${flexbox}
	${position}
	mix-blend-mode: normal;
  box-shadow: ${({ removeShadow }) =>
    !!removeShadow ? "none" : "0px 4px 4px rgba(0, 0, 0, 0.25)"};
  border-radius: 8px;
  /* TO DO: Add color variable for theme-dark or theme-light */
  background-color: ${({ backgroundColor }) => backgroundColor};
  @media screen and (max-width: ${breakpoints.sm}) {
    border-radius: 0;
  }
`;
