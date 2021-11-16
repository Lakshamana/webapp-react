import styled from "styled-components"
import { breakpoints } from "styles"

export const BillboardItems: any = styled.div`
	position: relative;
	overflow: hidden;
	height: 100%;
	width: 100%;

	&:after {
		content: "";
		position: absolute;
		width: 100%;
		bottom: 0px;
		height: 95px;
		z-index: 8;
	}
`

export const HeroImageWrapper: any = styled.div`
  position: absolute;
  inset: 0px;

	&:after {
    content: "";
    position: absolute;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
    ${({ theme }) => `background: linear-gradient(90deg, ${theme.colors.bodyBg[theme.colorMode]} 0%, rgba(15, 15, 15, 0) 30%), linear-gradient(359.29deg, ${theme.colors.bodyBg[theme.colorMode]} 0.7%, rgba(15, 15, 15, 0) 50%`}
`

export const HeroImg: any = styled.img`
	min-width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: right bottom;

	&:after {
		display: block;
		position: absolute;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 100%;
		background-color: #0f0f0f;
		content: attr(alt);
	}

	@media screen and (max-width: ${breakpoints.md}) {
		object-position: center center;
	}
`

export const Info: any = styled.div`
	color: #fff;
	position: absolute;
	top: 112px;
	z-index: 10;
	padding: 0px 0px 0px 65px;
	display: flex;
	align-items: center;

	@media screen and (max-width: ${breakpoints.md}) {
		text-align: center;
		width: 100%;
		padding: 0 45px;
		top: 375px;
		bottom: 0;
		align-items: center;
		padding-bottom: 34px;
		height: 300px;
	}

	@media screen and (max-width: ${breakpoints.sm}) {
		text-align: center;
		padding: 0px 20px;
		top: 180px;
		bottom: 0;
		width: 100%;
		align-items: flex-end;
		padding-bottom: 34px;
		height: 300px;
	}
`

export const InfoContent: any = styled.div`
	width: 100%;
`

export const Title: any = styled.div`
	font-weight: 700;
	font-size: 115px;
	line-height: 120px;
  text-transform: uppercase;
  max-width: 870px;
	margin: 0px 0px 30px;
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
	overflow: hidden;
	color: ${({ theme }) => theme.colors.billboardText[theme.colorMode]};

	@media screen and (max-width: ${breakpoints.lg}) {
		font-size: 90px;
		line-height: 80px;
    max-width: 500px;
	}

	@media screen and (max-width: ${breakpoints.md}) {
		font-size: 65px;
    line-height: 50px;
		max-width: 100%;
	}

	@media screen and (max-width: ${breakpoints.sm}) {
		font-size: 32px;
		line-height: 56px;
		margin: 12px 0;
	}
`

export const Description: any = styled.div`
	font-size: 22px;
	line-height: 26.25px;
	max-width: 640px;
  margin-bottom: 80px;
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
	overflow: hidden;
	color: ${({ theme }) => theme.colors.billboardText[theme.colorMode]};

	@media screen and (max-width: ${breakpoints.md}) {
		font-size: 19px;
		line-height: 25px;
		max-width: 100%;
	}

	@media screen and (max-width: ${breakpoints.sm}) {
		font-size: 16px;
		line-height: 16px;
		max-width: 100%;
		margin-bottom: 16px;
		-webkit-line-clamp: 2;
	}
`
export const ContentButtons = styled.div`
	display: flex;
	justify-content: flex-start;

	@media screen and (max-width: ${breakpoints.md}) {
		justify-content: center;
	}
`
