import styled from 'styled-components'
import { space, fontSize } from 'styled-system'

export const Label = styled.div`
  ${space}
  ${fontSize}
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  align-self: flex-start;
  ${({ disabled }) => disabled && 'opacity: 0.7;'}
`

export default Label
