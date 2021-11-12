import styled from "styled-components";
import { StyleContainer } from "components";
import { breakpoints } from "styles";

export const TabContainer = styled(StyleContainer)`
  a:nth-child(n + 1):nth-child(-n + 10) {
    display: none;
  }
  @media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xl}) {
    a:nth-child(n + 1):nth-child(-n + 3) {
      display: block;
    }
  }
  @media (min-width: 1350px) and (max-width: ${breakpoints.xl}) {
    a:nth-child(n + 1):nth-child(-n + 5) {
      display: block;
    }
  }
  @media (min-width: ${breakpoints.xl}) {
    a:nth-child(n + 1):nth-child(-n + 10) {
      display: block;
    }
  }
`;
