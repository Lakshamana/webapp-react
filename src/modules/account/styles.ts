import styled from 'styled-components'
import {
  space,
  layout,
  typography,
  LayoutProps,
  TypographyProps,
  SpaceProps,
} from 'styled-system'
import { RegularText } from 'components/atoms/text/styles'
import { colors } from 'styles'

interface ActionLinkProps {
  underline?: boolean
}

export const Section = styled.div``

export const ActionLink = styled(RegularText)<ActionLinkProps>`
  color: ${({ theme }) => theme.colors.brand.accent[theme.colorMode]};
  user-select: none;
  cursor: pointer;
  text-decoration: ${({ underline }) => (underline ? 'underline' : 'none')};
`

export const TextWrapper = styled.div<LayoutProps>`
  ${layout}
  display: flex;
`

export const Separator = styled.div<SpaceProps>`
  ${space}
  height: 1px;
  width: 100%;
  background: ${colors.grey['200']};
`

export const BackTextBox = styled.div<SpaceProps>`
  ${space}
  display: flex;
  align-items: center;
  border-left: 1px solid
    ${({ theme }) => theme.colors.generalText[theme.colorMode]};
`

export const Label = styled.span<TypographyProps>`
  ${typography}
  color: ${({ theme }) => theme.colors.generalText[theme.colorMode]};
`

export const WrapperIcon = styled.div`
  cursor: pointer;
`
