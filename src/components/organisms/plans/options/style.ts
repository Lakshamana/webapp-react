import { Flex, Input } from "@chakra-ui/react";
import styled from "styled-components";

export const ButtonSelectOption = styled(Flex)`
  background: #0660F9;
  color: #fff;
  font-size: 20px;
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
  max-width: 556px;
  width: 100%;
  height: fit-content;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.cardBg[theme.colorMode]};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  flex-direction: column;
  padding: 24px;
  align-items: center;
`

export const InputCustomCreditCard = styled(Input)`
  background: #E1E1E1;
  border: none;
  border-radius: 0;
  height: 56px;
  &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    font-weight: 400;
    color: #666666;
    opacity: 1; /* Firefox */
  }

  &:-ms-input-placeholder { /* Internet Explorer 10-11 */
    font-weight: 400;
    color: #666666;
  }

  &::-ms-input-placeholder { /* Microsoft Edge */
    font-weight: 400;
    color: #666666;
  }
`