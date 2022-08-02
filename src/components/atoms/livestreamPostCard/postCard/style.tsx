import styled from 'styled-components'
import { breakpoints, colors } from 'styles'
import { LivestreamPostCardProps } from 'types/livestreams'

export const CardWrapper = styled.div`
  cursor: pointer;
  position: relative;
  transition: transform 1s;
  transition-delay: 2s;
  background-color: black;
`

export const PostContent = styled.div<LivestreamPostCardProps>`
  display: flex;
  width: auto;
  padding-top: 56.25%;
  height: auto;
  position: relative;
  border-radius: 4px;
  cursor: pointer;
  ${(props: LivestreamPostCardProps) =>
    `background: url('${props.thumbnail}');`}
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  &:hover {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`

export const BlockedContent: any = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 51px;
  height: 50px;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) =>
    theme.colors.brand.primary[theme.colorMode]};

  @media screen and (max-width: ${breakpoints.sm}) {
    width: 41px;
    height: 40px;
  }
`

export const Live: any = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 20px;
  background-color: ${colors.red['700']};
  border-radius: 2px;
  position: absolute;
  top: 8px;
  right: 10px;
  text-transform: uppercase;
  font-weight: bolder;
`
