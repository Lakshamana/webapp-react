import styled from "styled-components";
import { space } from "styled-system";
import { colors } from "styles";

export const TextFooter: any = styled.div`
  ${space}
  display: flex;
  justify-content: center;
  @media screen and (max-width: 40em) {
    width: 100%;
    border-top: 1px solid ${colors.grey["200"]};
    border-radius: 1px;
    font-size: 12px;
  }
`;