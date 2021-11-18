import styled from "styled-components";
import { StyleContainer } from "components/atoms/container/styles";

export const LogoContainer = styled(StyleContainer)`
  svg {
    path {
      fill: ${({ theme }) => theme.colors.generalText[theme.colorMode]};
    }
  }
`;
