import { Flex } from "@chakra-ui/react";
import styled from "styled-components";

export const InputSpreedly = styled(Flex)`
  background-color: ${({ theme }) => theme.colors.inputBg[theme.colorMode]};
  border-radius: 4px;
  height: 56px;
  padding: 16px;
  font-size: 16px;
`