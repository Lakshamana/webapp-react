import styled from 'styled-components'
import { Flex } from '@chakra-ui/react'
import { pxToRem } from 'styles/metrics'
import { breakpoints } from 'styles'

export const Wrapper: any = styled(Flex)`
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) =>
      theme.colors?.grey[theme.colorMode !== 'dark' ? 650 : 850]};

    svg {
      display: block;
    }
  }
`

export const InfoBox: any = styled(Flex)`
  flex: 1;
  flex-direction: column;
  padding-left: ${pxToRem(12)};
`

export const Title: any = styled(Flex)`
  color: ${({ theme }) => theme.colors.generalText[theme.colorMode]};
  font-size: 1.2rem;
  font-weight: bold;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  padding-bottom: 2px;

  @media screen and (max-width: ${breakpoints.sm}) {
    font-size: 1.1rem;
    line-height: 1.5rem;
    padding-bottom: 5px;
  }
`

export const Subtitle: any = styled(Flex)`
  color: ${({ theme }) => theme.colors.secondaryText[theme.colorMode]};
  font-size: 0.9rem;
  line-height: 1.2rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media screen and (max-width: ${breakpoints.sm}) {
    font-size: 0.9rem;
  }
`
