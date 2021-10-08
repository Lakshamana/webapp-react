import styled from 'styled-components'

export const PostContent: any = styled.div`
    display: flex;
    position: relative;
    width: 295px;
    height: 160px;
    border-radius: 4px;
    ${({ coverImage }: any) => `background: ${coverImage};`}
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    @media screen and (max-width: 640px) {
        width: 240px;
        height: 140px;
    }
`;

export const ExclusiveBlocked: any = styled.div`
    width: 41px;
    height: 40px;
    border-radius: 50%;
    position: inherit;
    top: 55px;
    margin: 0 auto;
    background-color: #035EFB;
`;

export const GeolockedBlocked: any = styled.div`
    width: 41px;
    height: 40px;
    border-radius: 50%;
    position: inherit;
    top: 55px;
    margin: 0 auto;
    background-color: #035EFB;
    pointer-events: none;
`;