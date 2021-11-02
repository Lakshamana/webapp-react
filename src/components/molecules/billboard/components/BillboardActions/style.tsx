import styled from 'styled-components';
import { breakpoints } from 'styles';

export const Actions: any = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

    @media screen and (max-width: ${breakpoints.md}) {
        justify-content: center;
        margin-right: 5px;
        margin-left: 5px;
    }

    @media screen and (max-width: ${breakpoints.sm}) {
        width: 100%;
        display: flex;
        margin-right: 5px;
        margin-left: 5px;
        justify-content: center;
    }
`;