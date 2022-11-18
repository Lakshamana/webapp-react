import { Flex } from '@chakra-ui/react'
import styled from 'styled-components'

export const ButtonSelectOption = styled(Flex)`
  background: ${({ theme }) =>
    theme.colorMode === 'dark'
      ? theme.colors.cardBg[theme.colorMode]
      : theme.colors.bodyBg[theme.colorMode]};
  color: ${({ theme }) => theme.colors.generalText[theme.colorMode]};
  width: 100%;
  border-radius: 8px;
  justify-content: space-between;
  align-items: center;
  padding: 14px 26px;
  cursor: pointer;
`
