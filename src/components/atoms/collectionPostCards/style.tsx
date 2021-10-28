import styled from "styled-components"
import { CollectionPostProps } from "./types"
import { breakpoints, colors } from "styles"

export const PostContent = styled.div<CollectionPostProps>`
	display: flex;
	width: auto;
	padding-top: 56.25%;
	height: auto;
	position: relative;
	border-radius: 4px;
	${(props: CollectionPostProps) => `background: url('${props.coverImage}');`}
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
