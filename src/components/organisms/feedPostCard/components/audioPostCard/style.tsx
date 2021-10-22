import { SpaceProps, space } from "styled-system"
import styled from "styled-components"
import { colors, breakpoints } from "styles"

export const AudioContent: any = styled.div`
	display: flex;
	position: relative;
	width: 100%;
	height: 160px;

	@media screen and (max-width: ${breakpoints.md}) {
		height: 128px;
	}
`

export const PlayContent = styled.div`
	width: 25%;
	height: 100%;
	position: relative;
	${({ coverImage }: any) => `background: url(${coverImage});`}
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	cursor: pointer;
	z-index: 1;

	@media screen and (max-width: ${breakpoints.md}) {
		width: 35%;
	}
`

export const DetailsContent = styled.div`
  width: 75%;
  position: inherit;
  ${({ coverImage }: any) => `background: url(${coverImage});`}
  background-size: inherit;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: inherit;
    filter: blur(3px);

  @media screen and (max-width: ${breakpoints.md}) {
    width: 65%;
  }
`

export const Details = styled.div<SpaceProps>`
	${space}
	width: 100%;
	height: 100%;
	position: absolute;
	z-index: 5;
`

export const VideoItemPlay = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	width: 48px;
	height: 48px;
	background: ${colors.whiteTransparent["300"]};
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	border: 2px solid ${colors.white};
	border-radius: 50%;

	@media screen and (max-width: ${breakpoints.sm}) {
		width: 48px;
		height: 48px;
	}
`

export const CountView = styled.div<SpaceProps>`
	${space}
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	bottom: 0px;
	right: 0px;
	font-size: 12px;
`

export const MediaLength = styled.div<SpaceProps>`
	${space}
	position: absolute;
	bottom: 0px;
	left: 0px;
	font-size: 12px;
`

export const ExclusiveBlocked: any = styled.div`
	width: 41px;
	height: 40px;
	border-radius: 50%;
	margin: auto;
	background-color: ${colors.blue["300"]};
`

export const GeolockedBlocked: any = styled.div`
	width: 41px;
	height: 40px;
	border-radius: 50%;
	margin: auto;
	background-color: ${colors.blue["300"]};
	pointer-events: none;
`
