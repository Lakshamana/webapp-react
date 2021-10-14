import styled from "styled-components";
import { StyleContainer } from "components";

export const ChildContainer = styled(StyleContainer)`
  display: flex;
  min-height: calc(100vh - 70px - 100px);
`;

export const LayoutContainer = styled(StyleContainer)`
  display: flex;
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
`;
