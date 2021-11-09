import styled from 'styled-components';
import { breakpoints } from 'styles';

export const Actions: any = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

    @media screen and (max-width: ${breakpoints.md}) {
        justify-content: center;
    }

    @media screen and (max-width: ${breakpoints.sm}) {
        max-width: 360px;
        display: flex;
        margin-right: 5px;
        margin-left: 5px;
        justify-content: center;
    }
`;