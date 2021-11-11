import styled from "styled-components"
import { Flex, Center } from "@chakra-ui/react"

export const List: any = styled(Flex)`
  width: 500px;
  flex-direction: column;
`

export const Wrapper: any = styled(Flex)`
  flex: 1;
  padding: 12px;
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
  padding: 0 12px;
`

export const Title: any = styled(Flex)`
  color: ${({ theme }) => theme.colorMode !== 'dark' ? 'black' : 'white'};
  font-size: 20px;
  font-weight: 600;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const Subtitle: any = styled(Flex)`
  color: ${({ theme }) => theme.colorMode !== 'dark' ? 'black' : 'white'};
  font-size: 14px;
  font-weight: 300;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`