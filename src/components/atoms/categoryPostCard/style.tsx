import styled from 'styled-components'
import { CategoryPostCardProps } from 'types/categories'
import { breakpoints } from 'styles'

export const CardWrapper = styled.div`
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease-in-out;

  &:hover {
    z-index: 1;
    transform: scale(1.3);
    margin-top: -30%;

    .addMyListIconBg,
    .addMyListIcon {
      display: block !important;
    }

    @media screen and (max-width: ${breakpoints.sm}) {
      .closeCardMobileIconBg,
      .closeCardMobileIcon {
        display: block !important;
      }
    }

    .postContent {
      border-radius: 4px 4px 0 0 !important;
    }

    .infoCard {
      display: flex;
      border-radius: 0 0 4px 4px;
      height: 80px;
      transition: all 0.2s ease-in-out;
    }
  }
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
`
