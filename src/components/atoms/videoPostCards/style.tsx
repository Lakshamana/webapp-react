import styled from 'styled-components'
import { VideoPostCardProps } from 'types/posts'
import { breakpoints, colors } from 'styles'

export const CardWrapper = styled.div`
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease-in-out;

	&:hover {
		z-index: 1;
		transform: scale(1.3);
		margin-top: -30%;

  .postContent {
   	border-radius: 4px 4px 0 0 !important;
   	margin-bottom: -1px;
  }

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

  .infoCard {
    display: flex;
    border-radius: 0 0 4px 4px;
    height: 80px;
    transition: all .2s ease-in-out;
    }
  }
`

export const PostContent = styled.div<VideoPostCardProps>`
  display: flex;
  width: auto;
  padding-top: 56.25%;
  height: auto;
  position: relative;
  border-radius: 4px;
  ${(props: VideoPostCardProps) =>
    `background: url('${props.thumbnail}'), black;`}
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
