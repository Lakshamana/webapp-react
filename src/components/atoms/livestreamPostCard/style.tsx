import styled from 'styled-components'
import { LivePostProps } from './types';
import { breakpoints, colors } from 'styles';

export const PostContent = styled.div <LivePostProps>`
    display: flex;
    width: 295px;
    height: 160px;
    position: relative;
    border-radius: 4px;
    ${(props: LivePostProps) => `background: url(${props.coverImage});`}
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    
    &:before {
      content: "";
      position: absolute;
      width : 100%;
      height: 100%;
      background: inherit;
      border-radius: 4px;
      ${(props: LivePostProps) => `-webkit-filter: ${props.isExclusive === true ? 'blur(4px);' : 'blur(0px);'} `}
    }
    
    @media screen and (max-width: ${breakpoints.sm}) {
      width: 250px;
      height: 150px;
    }

`;

export const ExclusiveBlocked: any = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 51px;
    height: 50px;
    border-radius: 50%;
    z-index: 1;
    margin: auto;
    background-color: ${colors.blue["300"]};

    @media screen and (max-width: ${breakpoints.sm}) {
        width: 41px;
        height: 40px;
    }

`;

export const GeolockedBlocked: any = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 51px;
    height: 50px;
    border-radius: 50%;
    z-index: 1;
    margin: auto;
    background-color: ${colors.blue["300"]};
    pointer-events: none;

    @media screen and (max-width: ${breakpoints.sm}) {
        width: 41px;
        height: 40px;
    }
`;