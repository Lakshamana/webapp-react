import styled from 'styled-components';
import { breakpoints } from 'styles';

export const BillboardWrapper: any = styled.div`
    position: relative;
    height: 90vh;
    margin-top: -48px;
    width: 100vw;
    min-height: 500px;
    max-height: 800px;

    @media screen and (max-width: ${breakpoints.sm}) {
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