import styled from 'styled-components'
import { breakpoints } from 'styles'

export const ImageContent = styled.div`
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
