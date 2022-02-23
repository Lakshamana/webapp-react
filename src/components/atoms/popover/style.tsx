import { Popover, PopoverContent, PopoverBody } from '@chakra-ui/react'
import { Props } from './types'
import styled from 'styled-components'

export const PopoverStyled: any = styled(Popover)<Props>``

export const PopoverContentStyled: any = styled(PopoverContent)<Props>`
  background: ${({ theme }) => theme.colors.cardBg[theme.colorMode]};
`

export const PopoverBodyStyled: any = styled(PopoverBody)<Props>`
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`
