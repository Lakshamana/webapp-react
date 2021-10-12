import styled from 'styled-components';

export const BillboardWrapper: any = styled.div`
    position: relative;
    height: 90vh;
    margin-top: -48px;
    width: 100vw;
    min-height: 500px;
    max-height: 800px;

    @media screen and (max-width: 640px) {
        height: 50vh;
    }
`;

export const Billboard: any = styled.div`
    position: absolute;
    background: #0f0f0f;
    height: 100%;
    width: 100%;
    z-index: 0;
`;

export const BillboardItems: any = styled.div`
    position: relative;
    overflow: hidden;
    height: 100%;
    width: 100%;

    &:after {
        content: "";
        position: absolute;
        width: 100%;
        bottom: 0;
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
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
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
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #0f0f0f;
        content: attr(alt);
      }

    @media screen and (max-width: 640px) {
        object-position: center center;
    }
`;

export const Info: any = styled.div`
    color: #fff;
    position: absolute;
    top: 40%;
    bottom: 60%;
    width: 65%;
    z-index: 10;
    padding: 0 1.69rem;
    display: flex;
    align-items: center;

    @media screen and (max-width: 640px) {
        text-align: center;
        width: 100%;
        display: flex;
        align-items: flex-end;
        padding-bottom: 2.18rem;
        height: 300px;
    }
`;

export const InfoContent: any = styled.div`
    width: 100%;
`;

export const Title: any = styled.div`
    font-weight: bold;
    font-size: 120px;
    line-height: 6.89rem;
    margin: 0px 0px 1.9rem;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;

    @media screen and (min-width: 640px) and (max-width: 768px) {
        font-size: 2.3rem;
        line-height: 2.5rem;
    }

    @media screen and (max-width: 640px) {
        font-size: 2.2rem;
        line-height: 3.5rem;
        margin: 0.7rem 0;
    }
`;

export const Description: any = styled.div`
    font-size: 1.125rem;
    line-height: 1.5rem;
    max-width: 605px;
    margin-bottom: 1.22rem;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;

    @media screen and (min-width: 640px) and (max-width: 768px) {
        font-size: 1rem;
        line-height: 1.1875rem;
    }

    @media screen and (max-width: 640px) {
        font-size: 0.8rem;
        line-height: 1rem;
        margin-bottom: 1rem;
        -webkit-line-clamp: 2;
    }
`;

export const Actions: any = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 1.25rem;

    @media screen and (max-width: 640px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-items: center;
    }
`;