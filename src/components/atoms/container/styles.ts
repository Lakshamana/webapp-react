import styled from "styled-components";
import { space, flexbox, layout } from "styled-system";

import { Props } from "./types";

export const StyleContainer = styled.div<Props>`
  ${space}
  ${layout}
  ${flexbox}
`;
