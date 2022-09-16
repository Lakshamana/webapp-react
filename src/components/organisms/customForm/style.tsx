import InputMask from 'react-input-mask';
import styled from "styled-components";
import { colors } from 'styles';

export const InputMaskStyled = styled(InputMask)`
  color: ${({ theme }) => colors.inputText[theme.colorMode]};
  background: ${({ theme })=> colors.inputBg[theme.colorMode]};
  border: none;
  border-radius: 4px;
  width: 100%;
  padding-top: 8px;
  padding-bottom: 8px;
  height: 56px;
  box-shadow: none;
`