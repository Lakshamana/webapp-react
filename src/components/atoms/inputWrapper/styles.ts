import styled from 'styled-components'
import { layout, border, space } from 'styled-system'
import { PropsStyle } from './types'

const getStyleDisabled = (disabled: boolean | undefined) =>
  disabled && 'opacity: 0.7;'

export const Box = styled.div<PropsStyle>`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: ${({ error }) => (error ? '76px;' : '64px;')};
`

export const BoxWrapper = styled.div<PropsStyle>`
  ${space}
  ${layout}
  ${border}
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
  color: ${({ theme }) => theme.colors.inputText[theme.colorMode]};
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  ${({ onClick, disabled }: PropsStyle) =>
    !disabled && !!onClick && 'cursor: pointer;'}
  ${({ disabled }: PropsStyle) => getStyleDisabled(disabled)}
  ${({ error }) => error && `border: 1px solid red;`}
  svg {
    margin-right: 16px;
    padding-right: 8px;
    padding-left: 8px;
  }
`

export const BoxWrapperError = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 3px;
`

export const LabelError = styled.label`
  color: red;
  font-size: 0.8rem;
`
