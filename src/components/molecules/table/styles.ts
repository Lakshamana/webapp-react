import styled from "styled-components";
import { space, layout } from "styled-system";
import { colors } from "styles";

export const Tr = styled.tr`
  ${space}
`;

export const Th = styled.th`
  ${layout}
  ${space}
  text-align: initial;
`;

export const Td = styled.td`
  ${space}
`;

export const Thead = styled.thead`
  background: ${colors.grey["800"]};
  color: ${colors.white};
`;

export const Tbody = styled.div`
  display: table-row-group;
  vertical-align: middle;
  background: ${colors.grey["850"]};
  color: ${colors.white};
  tr:nth-child(even) {
    background-color: ${colors.grey["900"]};
  }
`;
