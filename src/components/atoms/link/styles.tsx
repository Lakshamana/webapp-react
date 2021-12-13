import styled from 'styled-components'
import { Link } from '@chakra-ui/react'
import { StyleProps } from './types'

export const LinkStyled: any = styled(Link)`
  &:hover, &:active, &:visited {
    box-shadow: none;
    text-decoration: none;
  }
`

export const RouterLinkStyled: any = styled.div<StyleProps>`

`
