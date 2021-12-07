import styled from 'styled-components'
import { Link } from '@chakra-ui/react'
import { LinkProps } from './types'

export const LinkStyled: any = styled(Link)`
  color: ${({ ...props }: LinkProps) =>
    ({ theme }) =>
      props.defaultColor
        ? theme.colors.generalText[theme.colorMode]
        : theme.colors.brand.accent[theme.colorMode]};
`
