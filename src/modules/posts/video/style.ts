import { Text } from '@chakra-ui/react'
import styled from 'styled-components'
import { pxToRem } from 'styles/metrics'
import { breakpoints, sizes } from 'styles'

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

export const VideoDetails = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 75vw;

  @media screen and (max-width: ${breakpoints.xl}) {
    width: 80vw;
  }

  @media screen and (max-width: ${breakpoints.lg}) {
    width: 100vw;
    padding: 0 ${sizes.paddingMd};
  }

  @media screen and (max-width: ${breakpoints.md}) {
    padding: 0 ${sizes.paddingSm};
  }
`

export const Title = styled(Text)`
  color: ${({ theme }) => theme.colors.generalText[theme.colorMode]};
  width: 100%;
  font-size: ${pxToRem(32)};
  font-weight: 700;
  margin-top: ${pxToRem(25)};

  @media screen and (max-width: ${breakpoints.md}) {
    font-size: ${pxToRem(24)};
  }

  @media screen and (max-width: ${breakpoints.sm}) {
    font-size: ${pxToRem(20)};
    margin-top: ${pxToRem(20)};
  }
`

export const Subtitle = styled(Text)`
  color: ${({ theme }) => theme.colors.secondaryText[theme.colorMode]};
  width: 100%;
  font-size: ${pxToRem(20)};
  font-weight: 300;
  margin-top: ${pxToRem(10)};

  @media screen and (max-width: ${breakpoints.md}) {
    font-size: ${pxToRem(18)};
  }

  @media screen and (max-width: ${breakpoints.sm}) {
    font-size: ${pxToRem(16)};
    margin-top: ${pxToRem(10)};
  }
`

export const VideoComments = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBg[theme.colorMode]};
  display: flex;
  margin-top: 30px;
  width: 75vw;

  @media screen and (max-width: ${breakpoints.xl}) {
    width: 80vw;
  }

  @media screen and (max-width: ${breakpoints.lg}) {
    width: 100vw;
    padding: 0 ${sizes.paddingMd};
  }

  @media screen and (max-width: ${breakpoints.md}) {
    padding: 0 ${sizes.paddingSm};
    flex-flow: column-reverse;
  }
`

export const CommentCount = styled(Text)`
  color: ${({ theme }) => theme.colors.generalText[theme.colorMode]};
  align-text: left;
  font-size: ${pxToRem(28)};
  font-weight: 500;
`
