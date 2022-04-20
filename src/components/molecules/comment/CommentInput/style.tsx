import styled from 'styled-components'
import { Text } from '@chakra-ui/react'
import { Icon } from '@iconify/react'

export const CharacterCounter = styled(Text)`
  color: ${({ theme }) => theme.colors.inputText[theme.colorMode]};
`

export const IconCustom: any = styled(Icon)`
  cursor: pointer;
  height: 21px;
  width: 21px;
`
