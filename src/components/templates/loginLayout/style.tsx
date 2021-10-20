import styled from "styled-components";
import { Props } from "./types";
import { StyleContainer } from "components";
import { breakpoints } from "styles";

export const ChildContainer = styled(StyleContainer)<Props>`
  display: flex;
  min-height: auto;
  background: ${(props: Props) =>
      props.backgroundImage
        ? `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8)), url(${props.backgroundImage})`
        : ""}
    center/cover fixed;
`;

export const LayoutContainer = styled(StyleContainer)`
  display: flex;
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
`;
