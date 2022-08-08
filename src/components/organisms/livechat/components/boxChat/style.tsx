import { Container } from '@chakra-ui/react'
import styled from 'styled-components'
import { color, flexbox, layout } from 'styled-system'
import { colors } from 'styles'
import { Theme } from './types'

export const BoxChatMain: any = styled.div`
  ${flexbox}
  ${layout}
  ${color}
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
  max-width: 100%;
`

export const MainContainer: any = styled.div`
  ${layout}
  ${flexbox}
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 89%;
`

export const DateText: any = styled.div`
  ${({ theme }) => `color: ${theme.colors.secondaryText[theme.colorMode]};`}
  font-size: 0.75rem;
  margin: 3px 12px;
`

export const NameUserText: any = styled.div`
  color: ${({ isOwnUser }: Theme) => (isOwnUser ? 'white' : 'black')};
  font-size: 0.8rem;
  font-weight: bolder;
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  justify-content: ${({ isOwnUser }: Theme) =>
    isOwnUser ? 'flex-end' : 'flex-start'};
`

export const BoxContainer: any = styled.div`
  ${layout}
  display: flex;
  flex-direction: column;
  min-width: 180px;
  ${({ isOwnUser, theme: { colorMode } }: Theme) => {
    return `background: ${isOwnUser ? colors.brand.indicator[colorMode] : colors.inputBg[colorMode]};`
  }}
  border-radius: 8px;
  padding: 7px 12px;
  min-height: 0;
`

export const MessageText: any = styled.span`
  font-size: 0.9rem;
  color: ${({ isOwnUser }: Theme) => (isOwnUser ? 'white' : 'black')};
  text-align: ${({ isOwnUser }: Theme) => (isOwnUser ? 'end' : 'start')};
`

export const ContainerCustom = styled(Container)`
  max-width: 100%;
  padding: 0;
  gap: 12px;
  -webkit-align-items: flex-end;
`
