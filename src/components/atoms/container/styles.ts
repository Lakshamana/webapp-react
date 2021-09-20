import styled from "styled-components";
import { space, flexbox, layout, color } from "styled-system";

import { Props } from "./types";

export const StyleContainer = styled.div<Props>`
  ${space}
  ${color}
  ${layout}
  ${flexbox}
`;
