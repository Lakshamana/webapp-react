import styled from 'styled-components';
import { breakpoints } from 'styles';

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
`;

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
        background: linear-gradient(90deg, #0F0F0F 0%, rgba(15, 15, 15, 0) 50%), linear-gradient(359.29deg, #0F0F0F 0.7%, rgba(15, 15, 15, 0) 64.44%)
`;

export const HeroImg: any = styled.img`
    width: 100%;
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
`;

export const Info: any = styled.div`
    color: #fff;
    position: absolute;
    top: 40%;
    bottom: 60%;
    z-index: 10;
    padding: 0 64px;
    display: flex;
    align-items: center;

    @media screen and (max-width: ${breakpoints.md}) {
        text-align: center;
        width: 100%;
        padding: 0 45px;
        align-items: flex-end;
        padding-bottom: 34px;
        height: 300px;
    }

    @media screen and (max-width: ${breakpoints.sm}) {
        text-align: center;
        padding: 0 45px;
        width: 100%;
        align-items: flex-end;
        padding-bottom: 34px;
        height: 300px;
    }
`;

export const InfoContent: any = styled.div`
    width: 100%;
`;

export const Title: any = styled.div`
    font-weight: bold;
    font-size: 98px;
    line-height: 110px;
    margin: 0px 0px 30px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;

    @media screen and (max-width: ${breakpoints.lg}) {
        font-size: 90px;
        line-height: 80px;
    }

    @media screen and (max-width: ${breakpoints.md}) {
        font-size: 45px;
        line-height: 40px;
    }

    @media screen and (max-width: ${breakpoints.sm}) {
        font-size: 32px;;
        line-height: 56px;
        margin: 12px 0;
    }
`;

export const Description: any = styled.div`
    font-size: 18px;
    line-height: 24px;
    max-width: 605px;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;

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
`;