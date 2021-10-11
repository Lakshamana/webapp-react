import styled from "styled-components";
import { space, fontSize } from "styled-system";

import { PropsStyle } from "./types";

const InputLabel = styled.div`
  ${space}
  ${fontSize}
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  align-self: flex-start;
  ${({ disabled }: PropsStyle) => disabled && "opacity: 0.7;"}
`;

export { InputLabel };
