import styled from 'styled-components'
import { Props } from './types'
import { variant } from "styled-system";

export const Container = styled.div<Props>`
    border-radius: 8px;
    max-width: 500px;
    background-color: ${({ theme }) => theme.colors.cardBg[theme.colorMode]};
    color: ${({ theme }) => theme.colors.generalText[theme.colorMode]};
    text-align: -webkit-center;
    overflow: hidden;
`

export const Header: any = styled.div<Props>`
    padding: 50px;

    ${variant({
    variants: {
        success: {
            bg: theme => `${theme.colors.alerts.success.default}`
        },
        error: {
            bg: theme => `${theme.colors.alerts.error.default}`
        },
    }
})}
`

export const Body = styled.div`
    padding: 28px 50px;
`