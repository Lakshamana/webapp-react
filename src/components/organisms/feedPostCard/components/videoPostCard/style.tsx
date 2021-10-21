import styled from "styled-components"
import { colors, breakpoints } from "styles"

export const VideoContent: any = styled.div`
	position: relative;
	width: 100%;
	padding-top: 56.25%;
	${({ coverImage }: any) => `background: url(${coverImage});`}
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	cursor: pointer;
`

export const VideoItemPlay = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	width: 62px;
	height: 62px;
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

export const CountView = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 14px;
	position: absolute;
	top: 0px;
	padding: 4px;
`

export const MediaLength = styled.div`
	position: absolute;
	bottom: 0px;
	right: 0px;
	padding: 4px;
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
