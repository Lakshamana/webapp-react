import styled from "styled-components"
import { Flex, Center } from "@chakra-ui/react"
import { pxToRem } from "styles/metrics"

export const List: any = styled(Flex)`
  width: ${pxToRem(500)};
  flex-direction: column;
`

export const Wrapper: any = styled(Flex)`
  flex: 1;
  padding: ${pxToRem(12)};
  border-radius: 3px;
  cursor: pointer;

  svg {
    display: none;
  }

  &:hover {
    background-color: ${({theme}) => theme.colors?.grey[theme.colorMode !== 'dark' ? 650 : 700]};

    svg {
      display: block;
    }
  }
`

export const VideoThumb: any = styled(Center)`
  flex: 1;
  border-radius: 3px;
  background-image: url('${({image}) => image}');
  background-position: center center;
`

export const InfoBox: any = styled(Flex)`
  flex: 1;
  flex-direction: column;
  padding: 0 ${pxToRem(12)};
`

export const Title: any = styled(Flex)`
  color: ${({ theme }) => theme.colorMode !== 'dark' ? 'black' : 'white'};
  font-size: ${pxToRem(20)};
  font-weight: 600;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const Subtitle: any = styled(Flex)`
  color: ${({ theme }) => theme.colorMode !== 'dark' ? 'black' : 'white'};
  font-size: ${pxToRem(14)};
  font-weight: 300;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`