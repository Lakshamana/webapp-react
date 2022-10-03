import styled from 'styled-components'
import { breakpoints } from 'styles'

export const Video = styled.div`
  position: relative;
  height: 72vh;
  width: 75vw;

  @media screen and (max-width: ${breakpoints.xl}) {
    width: 80vw;
    height: 65vh;
  }

  @media screen and (max-width: ${breakpoints.lg}) {
    width: 100vw;
    height: 60vh;
  }

  @media screen and (max-width: ${breakpoints.md}) {
    width: 100vw;
    height: 55vh;
  }

  @media screen and (max-width: ${breakpoints.sm}) {
    width: 100vw;
    height: 35vh;
  }
`