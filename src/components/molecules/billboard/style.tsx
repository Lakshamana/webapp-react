import styled from 'styled-components'
import { breakpoints } from 'styles'

export const BillboardWrapper: any = styled.div`
  position: relative;
  height: 80vh;
  width: 100%;

  @media screen and (max-width: ${breakpoints.sm}) {
    height: 90vh;
  }
`

export const Billboard: any = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
`
