import { Flex } from "@chakra-ui/react";
import styled from "styled-components";

export const ButtonSelectOption = styled(Flex)`
  background: ${({ theme }) => theme.colors.inputBg[theme.colorMode]};
  color: ${({ theme }) => theme.colors.generalText[theme.colorMode]};
  font-size: 1.2rem;
  font-weight: 400;
  width: 100%;
  height: 80px;
  border-radius: 8px;
  justify-content: space-between;
  align-items: center;
  padding: 14px 26px;
  cursor: pointer;
`

export const CardSelectPlan = styled(Flex)`
  max-width: 800px;
  width: 100%;
  height: fit-content;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.cardBg[theme.colorMode]};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  flex-direction: column;
  padding: 24px;
  align-items: center;
`