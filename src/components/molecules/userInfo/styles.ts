import styled from 'styled-components'
import { layout, space } from 'styled-system'

export const UserContainer = styled.div`
  ${space}
  display: flex;
  align-items: center;
  user-select: none;
  justify-content: center;
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
