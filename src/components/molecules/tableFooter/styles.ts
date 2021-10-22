import styled from "styled-components";
import { SpaceProps, space, layout } from "styled-system";

export const Wrapper = styled.div<SpaceProps>`
  ${space}
  background: white;
  border-radius: 8px;
`;

export const WrapperPagination = styled.div<SpaceProps>`
  ${space}
  display: flex;
`;
