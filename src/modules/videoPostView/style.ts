import { Text } from "@chakra-ui/react"
import styled from "styled-components";
import { pxToRem } from "styles/metrics";

export const Title = styled(Text)`
  color: ${({ theme }) => theme.darkMode ? 'white' : 'black'};
  font-size: ${pxToRem(36)};
  font-weight: 700;
  margin-top: ${pxToRem(44)};
`;

export const Subtitle = styled(Text)`
  color: ${({ theme }) => theme.darkMode ? 'white' : 'black'};
  font-size: ${pxToRem(16)};
  font-weight: 300;
  margin-top: ${pxToRem(20)};
`;