import styled from 'styled-components'
import { ChannelProps } from 'types/channel'
import { breakpoints } from 'styles'

export const ChannelContent = styled.div<ChannelProps>`
  display: flex;
  width: 100%;
  padding-top: 56.25%;
  height: auto;
  position: relative;
  border-radius: 4px;
  ${({ image }: ChannelProps) => `background: url('${image}');`}
  background-color: ${({ theme }) => theme.colors.cardBg[theme.colorMode]};
  cursor: pointer;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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
    theme.colors.brand.indicator[theme.colorMode]};

  @media screen and (max-width: ${breakpoints.sm}) {
    width: 41px;
    height: 40px;
  }
`
