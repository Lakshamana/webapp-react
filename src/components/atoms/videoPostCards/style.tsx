import styled from "styled-components"
import { VideoPostProps } from "./types"
import { breakpoints, colors } from "styles"

export const CardWrapper = styled.div`
	cursor: pointer;
	position: relative;

	&:hover {
		z-index: 1;
		transform: scale(1.3);
		margin-top: -30%;

		.addMyListIcon {
			display: block !important;
		}

		.addMyListIconBg {
			display: block !important;
		}

		.postContent {
			border-radius: 4px 4px 0 0 !important;
		}

		.infoCard {
			display: flex;
			border-radius: 0 0 4px 4px;
			height: 80px;
		}
	}	
`

export const PostContent = styled.div<VideoPostProps>`
	display: flex;
	width: auto;
	padding-top: 56.25%;
	height: auto;
	position: relative;
	border-radius: 4px;
	${(props: VideoPostProps) => `background: url('${props.coverImage}');`}
	cursor: pointer;
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
