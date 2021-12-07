import styled from 'styled-components'
import { Props } from './types'
import { Alert } from '@chakra-ui/react'

export const Container = styled.div<Props>`
  width: 100%;
`

export const AlertStyled: any = styled(Alert)`
  color: #000000;
  border-radius: 4px;
  border: 1px solid
    ${({ theme, status }) => theme.colors.alerts[status].default};
  background-color: ${({ theme, status }) => theme.colors.alerts[status].bg};
`
