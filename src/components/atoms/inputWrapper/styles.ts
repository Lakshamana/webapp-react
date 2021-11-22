import styled from 'styled-components'
import { layout, border, space } from 'styled-system'
import { PropsStyle } from './types'

// import { componentsColors } from "styles/colors";

const getStyleDisabled = (disabled: boolean | undefined) =>
  disabled && 'opacity: 0.7;'

export const Box = styled.div<PropsStyle>`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: ${({ error }) => (error ? '76px;' : '64px;')};
`

export const BoxWrapper = styled.div<PropsStyle>`
  ${space}
  ${layout}
  ${border}
  background-color: ${({ theme }) => theme.colors.inputBg[theme.colorMode]};
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
  color: #ff0000;
  font-size: 12px;
`
