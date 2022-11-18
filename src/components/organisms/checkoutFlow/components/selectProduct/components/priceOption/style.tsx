import { Flex } from '@chakra-ui/react'
import styled from 'styled-components'

export const ButtonSelectOption = styled(Flex)`
  color: ${({ theme }) => theme.colors.generalText[theme.colorMode]};
  width: 100%;
  border-radius: 8px;
  justify-content: space-between;
  align-items: center;
  padding: 8px 20px;
  cursor: pointer;
`
