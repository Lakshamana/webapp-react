import styled from 'styled-components'
import {
  layout,
  space,
  fontSize,
  LayoutProps,
  SpaceProps,
  FontSizeProps,
} from 'styled-system'
import InputMasked from 'react-input-mask'

const commonStyles = `
  &:focus {
    outline: none;
  }
`

interface PropsStyle extends LayoutProps, SpaceProps, FontSizeProps {
  background?: string
  color?: string
  placeholderColor?: string
  inverted?: boolean
}

export const Input: any = styled.input<PropsStyle>`
  ${layout}
  ${space}
  ${fontSize}
  ${commonStyles}
  width: 100%;
  padding-left: 16px;
  font-size: 16px;
  width: 100%;
  ${({ theme, inverted }) => {
    if (!inverted) {
      return `background-color: ${theme.colors.inputBg[theme.colorMode]};`
    }
    const invertedColor = theme.colorMode === 'dark' ? 'light' : 'dark'
    return `background-color: ${theme.colors.inputBg[invertedColor]};`
  }}
  ${({ theme, inverted }) => {
    if (!inverted) {
      return `color: ${theme.colors.inputText[theme.colorMode]};`
    }
    const invertedColor = theme.colorMode === 'dark' ? 'light' : 'dark'
    return `color: ${theme.colors.inputText[invertedColor]};`
  }}
  &::placeholder {
    color: ${({ theme }) => theme.colors.inputText[theme.colorMode]};
  }
`

export const InputMask: any = styled(InputMasked)<PropsStyle>`
  ${layout}
  ${space}
  ${commonStyles}
  ${fontSize}
`
