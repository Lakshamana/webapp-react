import styled from 'styled-components';
import { Input, Text } from '@chakra-ui/react';
import { Icon } from '@iconify/react'

export const InputCustom = styled(Input)`
  background: ${({ theme }) => theme.colors.inputBg[theme.colorMode]};
  color: ${({ theme }) => theme.colors.inputText[theme.colorMode]};
  border: none;
  font-size: 0.8em;
`

export const CharacterCounter = styled(Text)`
  color: ${({ theme }) => theme.colors.inputText[theme.colorMode]};
`

export const IconCustom = styled(Icon)`
  width: 24px;
  height: 24px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.blue['300']};
`