import styled from "styled-components";

import { Props } from "./types"
import { breakpoints, sizes } from 'styles';
import { StyleContainer } from "components";

export const ChildContainer = styled(StyleContainer) <Props>`
    display: flex;
    height: max-content;
    background: ${(props: Props) => (props.backgroundImage ? `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8)), url(${props.backgroundImage})` : '')} center/cover fixed;
    padding-bottom: ${sizes.footerDesktopHeight};
    padding-top: 20px;
    @media screen and (max-width: ${breakpoints.md}) {
      height: auto;
      min-height: auto;
      padding-bottom: ${sizes.footerMobileHeight};
  }
`;

export const LayoutContainer = styled(StyleContainer)`
  display: flex;
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  position: relative;
`;
