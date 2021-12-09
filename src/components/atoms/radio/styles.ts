import styled from 'styled-components'
import { StyleContainer } from 'components/atoms'

interface RadioContainerProps {
  color?: string
}

export const RadioContainer = styled(StyleContainer)<RadioContainerProps>`
  display: flex;
  span {
    color: ${({ theme }) => theme.colors.generalText[theme.colorMode]};
  }
  .chakra-radio__label {
    line-height: 1;
  }
`
