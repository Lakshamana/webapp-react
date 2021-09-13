import styled from 'styled-components'
import { layout, border, space, fontSize } from 'styled-system'

export const Wrapper = styled.div`
  ${space}
  ${layout}
  box-sizing: border-box;
  ${({ hasBottomLine }) =>
    hasBottomLine &&
    `border-bottom: 2px solid ${({ error, theme }) =>
      error
        ? theme.colors.error[theme.mode]
        : theme.colors.text[theme.mode]}; `}
  ${({ onClick, disabled }) => !disabled && !!onClick && 'cursor: pointer;'}
  ${({ disabled }) => disabled && 'opacity: 0.7;'}
`

export const ChildrenWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding-left: 2px;
`

export const BoxWrapper = styled.div`
  ${space}
  ${layout}
  ${border}
  background-color: ${({ theme, bgColor }) => theme.name === 'studio' ? bgColor ? bgColor : theme.colors.input[theme.mode] : '#fff'};
  border-radius: ${({ theme }) => theme.name === 'studio' ? '5px' : '4px'};
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  padding-left: ${({ noPadding, customIdent }) =>
    !noPadding ? customIdent || '16' : '0'}px;
  ${({ full }) => full && 'height: 95%;'}
  ${({ onClick, disabled }) => !disabled && !!onClick && 'cursor: pointer;'}
  ${({ center }) => !!center && 'align-items: center;'}
  ${({ disabled }) => disabled && 'opacity: 0.7;'}
  ${({ theme }) => theme.name === 'studio' && `
    border: 1px solid #F4F6FA;
    align-items: center;
  `}
`

export const Label = styled.div`
  ${space}
  ${fontSize}
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  align-self: flex-start;
  ${({ disabled }) => disabled && 'opacity: 0.7;'}
`

export const BottomLabel = styled.div`
  ${space}
  ${fontSize}
  font-weight: 700;
  color: ${({ error, bottomLabelColor, theme }) =>
    error ? theme.colors.error[theme.mode] : bottomLabelColor || '#909090'};
  margin-top: 4px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  align-self: flex-start;
  letter-spacing: -0.06px;
`

export const ChildrenContainer = styled.div`
  display: flex;
`

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f3f3f3 0% 0% no-repeat padding-box;
  border: 1px solid #eaebeb;
  border-radius: 4px 0px 0px 4px;
`

export const RequiredIndicator = styled.span`
  color: #fd3995;
  margin-left: 5px;
`
