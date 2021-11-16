import styled from 'styled-components'
import { breakpoints } from 'styles'

export const Actions: any = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  @media screen and (max-width: ${breakpoints.md}) {
    justify-content: center;
  }

  @media screen and (max-width: ${breakpoints.sm}) {
    max-width: 360px;
    display: flex;
    margin-right: 5px;
    margin-left: 5px;
    justify-content: center;
  }
`

export const ContentButton = styled.div`
  width: 267px;
  height: 54px;

  &:first-child {
    margin-right: 15px;
  }

  @media screen and (max-width: ${breakpoints.md}) {
    width: 146px;
    height: 40px;
  }

  @media screen and (max-width: ${breakpoints.sm}) {
    margin-bottom: 10px;

    &:first-child {
      margin-right: 10px;
    }
  }
`
