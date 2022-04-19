import styled from 'styled-components'
import { Input, Text } from '@chakra-ui/react'
import { Icon } from '@iconify/react'

export const InputCustom = styled(Input)`
  background: ${({ theme }) => theme.colors.inputBg[theme.colorMode]};
  color: ${({ theme }) => theme.colors.inputText[theme.colorMode]};
  border: none;
  font-size: 1rem;
`

export const CharacterCounter = styled(Text)`
  color: ${({ theme }) => theme.colors.inputText[theme.colorMode]};
`

export const IconCustom: any = styled(Icon)`
  cursor: pointer;
  height: 21px;
  width: 21px;
`
