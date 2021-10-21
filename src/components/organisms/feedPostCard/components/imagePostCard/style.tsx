import styled from "styled-components"

export const ImageContent = styled.div`
  width: 100%;
	padding-top: 56.25%;
	${({ coverImage }: any) => `background: url(${coverImage});`}
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	cursor: pointer;
`

export const ExclusiveBlocked: any = styled.div`
	width: 41px;
	height: 40px;
	border-radius: 50%;
	margin: auto;
	background-color: #035efb;
`

export const GeolockedBlocked: any = styled.div`
	width: 41px;
	height: 40px;
	border-radius: 50%;
	margin: auto;
	background-color: #035efb;
	pointer-events: none;
`
