import styled from "styled-components";

import { Props } from "./types"
import { breakpoints } from 'styles';
import { StyleContainer } from "components";

export const ChildContainer = styled(StyleContainer) <Props>`
    display: flex;
    height: 100%;
    min-height: 770px;
    background: ${(props: Props) => (props.backgroundImage ? `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8)), url(${props.backgroundImage})` : '')} center/cover fixed;
    overflow: auto;

    @media screen and (max-width: ${breakpoints.md}) {
      height: auto;
      min-height: auto;
  }
`;

export const LayoutContainer = styled(StyleContainer)`
  display: flex;
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
`;
