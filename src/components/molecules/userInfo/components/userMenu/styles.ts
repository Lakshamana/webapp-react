import styled from 'styled-components'
import { StyleContainer } from 'components'

export const TextContainer = styled(StyleContainer)`
  display: flex;
  height: 100%;
  padding: 0 16px;
  border-left: ${({ theme }) => `1px solid ${theme.colors.grey['700']}`};
  align-items: center;
`
