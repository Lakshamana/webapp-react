import styled from "styled-components"
import { LivePostProps } from "./types"
import { breakpoints, colors } from "styles"

export const PostContent = styled.div<LivePostProps>`
	display: flex;
	width: auto;
	padding-top: 56.25%;
	height: auto;
	position: relative;
	border-radius: 4px;
	cursor: pointer;
	${(props: LivePostProps) => `background: url('${props.coverImage}');`}
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`

export const ExclusiveBlocked: any = styled.div`
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
	background-color: ${colors.blue["300"]};

	@media screen and (max-width: ${breakpoints.sm}) {
		width: 41px;
		height: 40px;
	}
`

export const GeolockedBlocked: any = styled.div`
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
	background-color: ${colors.blue["300"]};
	pointer-events: none;

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
	background-color: ${colors.red["700"]};
	border-radius: 2px;
	position: absolute;
	top: 8px;
	left: 10px;
	text-transform: uppercase;
`
