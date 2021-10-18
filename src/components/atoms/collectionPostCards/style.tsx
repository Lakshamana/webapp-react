import styled from "styled-components"
import { CollectionPostProps } from "./types"

export const PostContent= styled.div <CollectionPostProps>`
	display: flex;
	width: 295px;
	height: 160px;
	border-radius: 4px;
	${(props: CollectionPostProps) => `background: url(${props.coverImage});`}
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;

	&:before {
		content: "";
		position: absolute;
		width: 100%;
		height: 100%;
		background: inherit;
		border-radius: 4px;
		${(props: CollectionPostProps) =>
			`-webkit-filter: ${
				props.isExclusive === true ? "blur(4px);" : "blur(0px);"
			} `}
		z-index: 1;
	}

	@media screen and (max-width: 640px) {
		width: 250px;
		height: 150px;
	}
`

export const ExclusiveBlocked: any = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 51px;
	height: 50px;
	border-radius: 50%;
	margin: auto;
	background-color: #035efb;

	@media screen and (max-width: 640px) {
		width: 41px;
		height: 40px;
	}
`

export const GeolockedBlocked: any = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 51px;
	height: 50px;
	border-radius: 50%;
	margin: auto;
	background-color: #035efb;
	pointer-events: none;

	@media screen and (max-width: 640px) {
		width: 41px;
		height: 40px;
	}
`
