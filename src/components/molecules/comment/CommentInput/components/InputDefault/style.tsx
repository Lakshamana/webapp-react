import styled from 'styled-components'
import { Input } from '@chakra-ui/react'

export const InputCustom = styled(Input)`
  background: ${({ theme }) => theme.colors.inputBg[theme.colorMode]};
  color: ${({ theme }) => theme.colors.inputText[theme.colorMode]};
  border: none;
  font-size: 1rem;
`