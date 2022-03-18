import styled from 'styled-components'
import { Text } from '@chakra-ui/react'
import { space, SpaceProps, LayoutProps } from 'styled-system'
import { pxToRem } from 'styles/metrics'
import { Icon } from '@iconify/react'
import { breakpoints, sizes } from 'styles'

interface SpaceLayoutProps extends SpaceProps, LayoutProps {}

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

  @media screen and (max-width: ${breakpoints.md}) {
    flex-flow: column;
    height: 55vh;
  }

  @media screen and (max-width: ${breakpoints.md}) {
    flex-flow: column;
    height: 100%;
  }
`
