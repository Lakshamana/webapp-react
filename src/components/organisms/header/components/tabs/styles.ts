import styled from "styled-components";
import { StyleContainer } from "components";

export const TabContainer = styled(StyleContainer)`
  a:nth-child(n + 1):nth-child(-n + 10) {
    display: none;
  }
  @media (min-width: 64em) and (max-width: 80em) {
    a:nth-child(n + 1):nth-child(-n + 4) {
      display: block;
    }
  }
  @media (min-width: 80em) {
    a:nth-child(n + 1):nth-child(-n + 10) {
      display: block;
    }
  }
`;
