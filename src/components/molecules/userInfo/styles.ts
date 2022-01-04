import styled from 'styled-components'
import { StyleContainer } from 'components'
import { space, layout } from 'styled-system'

export const UserContainer = styled.div`
  ${space}
  display: flex;
  align-items: center;
  user-select: none;
  cursor: pointer;
`

export const OptionsList = styled.ul`
  ${layout}
  width: 100%;
  li:last-child {
    margin-bottom: 0;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  }
`

export const TextContainer = styled(StyleContainer)`
  display: flex;
  height: 100%;
  padding: 0 16px;
  border-left: ${({ theme }) => `1px solid ${theme.colors.grey['700']}`};
  align-items: center;
`
