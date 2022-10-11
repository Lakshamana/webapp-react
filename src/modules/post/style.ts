import { Text } from '@chakra-ui/react'
import styled from 'styled-components'
import { breakpoints, sizes } from 'styles'
import { pxToRem } from 'styles/metrics'

export const PostDetails = styled.div`
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

  a {
    color: ${({ theme }) => theme.colors.brand.action_link[theme.colorMode]};
    font-weight: bolder;
  }

  @media screen and (max-width: ${breakpoints.md}) {
    font-size: ${pxToRem(18)};
  }

  @media screen and (max-width: ${breakpoints.sm}) {
    font-size: ${pxToRem(16)};
    margin-top: ${pxToRem(10)};
  }
`

export const PostComments = styled.div`
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
