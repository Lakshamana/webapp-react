import styled from 'styled-components';
import { space, typography } from 'styled-system';
import { breakpoints } from 'styles';

export const FeedContent = styled.div`
    width: 100vw;

    @media screen and (max-width: ${breakpoints.md}) {
        padding: 0px 12px;
    }
`;

export const CardContent: any = styled.div`
    position: relative;
    background-color: ${({ theme }) => theme.colors.cardBg[theme.colorMode]};
    margin: 22px auto;
    max-width: 746px;
`;

export const CardHeader: any = styled.div`
    display: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 16px 16px 0px 16px;
`;

export const Date: any = styled.span`
    color: ${({ theme }) => theme.colors.secondaryText[theme.colorMode]};  
    margin-left: auto;

    ${typography}
    ${space}
`;

export const CardDescription: any = styled.div`
    color: ${({ theme }) => theme.colors.secondaryText[theme.colorMode]};
    width: 100%;
    padding: 6px 16px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;

    ${typography}
    ${space}
`;

export const CardReactions: any = styled.div`
    width: 100%;
    padding: 16px;
`;

export const CardFooter: any = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    background-color: ${({ theme }) => theme.colors.cardBg[theme.colorMode]};
    padding: 16px;
    border-top: 1px solid ${({ theme }) => theme.colors.bodyBg[theme.colorMode]};
    ${space}
`;

export const CountComment: any = styled.span`
    ${typography}
    ${space}
    color:  ${({ theme }) => theme.colors.secondaryText[theme.colorMode]};
`;