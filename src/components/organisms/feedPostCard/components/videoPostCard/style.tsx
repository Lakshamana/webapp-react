import styled from 'styled-components'
import { space, SpaceProps } from 'styled-system'
import { breakpoints, colors } from 'styles'

export const VideoContent: any = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  ${({ coverImage }: any) => `background: url("${coverImage}");`}
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #000;
  cursor: pointer;
`
export const CountView = styled.div<SpaceProps>`
  ${space}
  color: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  position: absolute;
  top: 0px;
`

export const MediaLength = styled.div<SpaceProps>`
  ${space}
  color: ${colors.white};
  position: absolute;
  bottom: 0px;
  right: 0px;
  font-size: 12px;
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

export const PlayContent: any = styled.div`
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

  @media screen and (max-width: ${breakpoints.sm}) {
    width: 41px;
    height: 40px;
  }
`
