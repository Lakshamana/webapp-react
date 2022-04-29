import styled from 'styled-components'
import { breakpoints } from 'styles'

export const Actions: any = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  @media screen and (max-width: ${breakpoints.sm}) {
    width: 100%;
  }
`

export const ContentButton = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
  margin-right: 10px;

  @media screen and (max-width: ${breakpoints.md}) {
    margin: 0 10px;
  }
`
