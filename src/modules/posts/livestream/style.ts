import { Box, Text } from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import styled from 'styled-components'
import { LayoutProps, space, SpaceProps } from 'styled-system'
import { breakpoints, sizes } from 'styles'
import { pxToRem } from 'styles/metrics'

interface SpaceLayoutProps extends SpaceProps, LayoutProps { }

export const Bar = styled.div<SpaceLayoutProps>`
  ${space}
  border: 1px solid #444444;
  width: 90%;
  align-self: center;
  margin: 2.5em 0;
`

export const OpenLivechat = styled.div`
  position: absolute;
  padding: 0.5em 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px 0 0 4px;
  right: 0px;
  opacity: 0.7;
  cursor: pointer;
  background: ${({ theme }) =>
    theme.colors === 'light'
      ? theme.colors.inputBg[theme.colorMode]
      : theme.colors.cardBg[theme.colorMode]};
  &:hover {
    opacity: 1;
  }
`

export const IconOpen = styled(Icon)`
  color: ${({ theme }) => theme.colors.generalText[theme.colorMode]};
`

export const LiveDetails = styled.div`
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

export const Subtitle = styled(Box)`
  color: ${({ theme }) => theme.colors.secondaryText[theme.colorMode]};
  width: 100%;
  font-weight: 300;
  margin-top: ${pxToRem(10)};

  h1 {
    font-size: 32pt;
  }

  h2 {
    font-size: 26pt;
  }

  h3 {
    font-size: 22pt;
  }

  h4 {
    font-size: 20pt;
  }

  @media screen and (max-width: ${breakpoints.sm}) {
    margin-top: ${pxToRem(10)};
  }
`

export const Live = styled.div`
  display: flex;
  width: 100vw;
  height: 70vh;

  @media screen and (max-width: ${breakpoints.xl}) {
    height: 65vh;
  }

  @media screen and (max-width: ${breakpoints.lg}) {
    height: 60vh;
  }

  @media screen and (max-width: ${breakpoints.lg}) and (orientation: landscape) {
    height: 80vh;
  }

  @media screen and (max-width: ${breakpoints.md}) {
    flex-flow: column;
    height: 100%;
  }

  @media screen and (max-width: ${breakpoints.sm}) {
    flex-flow: column;
    height: 100%;
  }
`

export const CustomBox = styled(Box)`
  @media screen and (max-width: ${breakpoints.md}) and (orientation: landscape) {
    height: 50vh;
  }
`
