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
import { Input as ChakraInput } from '@chakra-ui/react'

const commonStyles = `
  &:focus {
    outline: none;
  }
`

interface PropsStyle extends LayoutProps, SpaceProps, FontSizeProps {
  background?: string
  color?: string
  placeholderColor?: string
  inverted?: boolean,
  placeholderFontStyle?: string
}

export const Input: any = styled(ChakraInput)<PropsStyle>`
  ${layout}
  ${space}
  ${fontSize}
  ${commonStyles}
  background-color: ${({ theme, inverted, background }) => {
    if(background===''){
      if (!inverted) {
        return theme.colors.inputBg[theme.colorMode];
      }
      const invertedColor = theme.colorMode === 'dark' ? 'light' : 'dark'
      return theme.colors.inputBg[invertedColor];
    }
    return background;
  }};
  color: ${ ({ color }) => color };
  width: 100%;
  padding-left: 16px;
  font-size: 16px;
  width: 100%;
  &::placeholder {
    color: ${({ theme }) => theme.colors.inputText[theme.colorMode]};
    font-size: 1.08rem;
    opacity: 0.5;
  }
`

export const InputMask: any = styled(InputMasked)<PropsStyle>`
  ${layout}
  ${space}
  ${commonStyles}
  ${fontSize}
`
