import styled from 'styled-components'
import { breakpoints } from 'styles'

export const BannerWrapper: any = styled.div`
  position: relative;
  height: 80vh;
  width: 100vw;

  @media screen and (max-width: ${breakpoints.sm}) {
    height: 90vh;
  }
`

export const Banner: any = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
`

export const BannerItems = styled.div`
  position: relative;
  overflow: hidden;
  height: 100%;
  width: 100%;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    bottom: 0px;
    z-index: 8;
  }
`

export const HeroImageWrapper = styled.div`
  	position: absolute;
  	inset: 0px;

	&:after {
    	content: "";
    	position: absolute;
    	left: 0px;
    	right: 0px;
    	top: 0px;
    	bottom: 0px;
    	${({ theme }) =>
        `background: linear-gradient(90deg, ${
          theme.colors.bodyBg[theme.colorMode]
        } 0%, rgba(15, 15, 15, 0) 30%), linear-gradient(359.29deg, ${
          theme.colors.bodyBg[theme.colorMode]
        } 0.7%, rgba(15, 15, 15, 0) 50%)`};
`

export const HeroImg = styled.img`
  min-width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: right top;

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
    object-position: center top;
  }
`

export const Info = styled.div`
  color: #fff;
  position: absolute;
  display: flex;
  align-items: center;
  padding: 0px 0px 0px 35px;
  width: 60%;
  height: 100%;

  @media screen and (max-width: ${breakpoints.md}) {
    text-align: center;
    bottom: 0;
    align-items: flex-end;
    padding: 0 25px 100px 25px;
    width: 100%;
  }

  @media screen and (max-width: ${breakpoints.sm}) {
    padding: 0 15px 60px 15px;
  }
`

export const InfoContent = styled.div`
  width: 100%;
`

export const Title = styled.div`
  width: 100%;
  font-weight: 700;
  font-size: 4.5rem;
  line-height: 5.3rem;
  margin: 0px 0px 30px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.billboardText[theme.colorMode]};

  @media screen and (max-width: ${breakpoints.md}) {
    font-size: 2.4rem;
    line-height: 2.9rem;
  }

  @media screen and (max-width: ${breakpoints.sm}) {
    font-size: 1.4rem;
    line-height: 1.9rem;
    margin: 20px 0;
  }
`

export const Description = styled.div`
  font-size: 1.3rem;
  line-height: 1.8rem;
  margin-bottom: 40px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.billboardText[theme.colorMode]};

  h1 {
    font-size: 32pt;
  }

  h2 {
    font-size: 26pt;
  }

  h3 {
    font-size: 22pt;
  }

  h4 {
    font-size: 20pt;
  }

  @media screen and (max-width: ${breakpoints.md}) {
    font-size: 1.3rem;
    line-height: 1.7rem;
    max-width: 100%;
    margin-bottom: 40px;
  }

  @media screen and (max-width: ${breakpoints.sm}) {
    font-size: 1rem;
    line-height: 1.5rem;
    -webkit-line-clamp: 2;
    margin-bottom: 25px;
  }
`
export const BoxButtons = styled.div`
  display: flex;
  justify-content: flex-start;

  @media screen and (max-width: ${breakpoints.md}) {
    justify-content: center;
  }
`
export const ContentButton = styled.div`
  &:first-child {
    margin-right: 10px;
  }
`
