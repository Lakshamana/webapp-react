import styled from 'styled-components'
import { CategoryPostCardProps } from 'types/categories'
import { breakpoints } from 'styles'

export const CardWrapper = styled.div`
  cursor: pointer;
  position: relative;
  transition: transform 1s;
  transition-delay: 2s;
  background-color: black;
`

export const PostContent = styled.div<CategoryPostCardProps>`
  display: flex;
  width: auto;
  padding-top: 56.25%;
  height: auto;
  position: relative;
  border-radius: 4px;
  ${(props: CategoryPostCardProps) => `background: url('${props.thumbnail}');`}
  cursor: pointer;
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
