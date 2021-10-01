import styled from 'styled-components'

export const PostContent: any = styled.div`
    display: flex;
    position: relative;
    width: 360px;
    height: 208px;
    border-radius: 4px;
    ${({ coverImage }: any) => `background: ${coverImage};`}
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

export const ExclusiveBlocked: any = styled.div`
    width: 60px;
    height: 59px;
    border-radius: 50%;
    position: inherit;
    top: 75px;
    margin: 0 auto;
    background-color: #035EFB;
`;

export const GeolockedBlocked: any = styled.div`
    width: 60px;
    height: 59px;
    border-radius: 50%;
    position: inherit;
    top: 75px;
    margin: 0 auto;
    background-color: #035EFB;
    pointer-events: none;
`;