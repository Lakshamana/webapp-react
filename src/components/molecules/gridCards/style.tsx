import styled from "styled-components"
import { Props } from "./types"
import { breakpoints } from "styles"

export const GridContent = styled.div<Props>`
	${(props: Props) => `
    width: 100%;
    display: grid;
    grid-template-columns: repeat(${props.xl}, 1fr);
    grid-column-gap: ${props.columnGap}px;
    grid-row-gap: ${props.rowGap}px;

    @media screen and (max-width: ${breakpoints.lg}) {
    grid-template-columns: repeat(${props.lg}, 1fr);
    }

    @media screen and (max-width: ${breakpoints.md}) {
    grid-template-columns: repeat(${props.md}, 1fr);
    }

    @media screen and (max-width: ${breakpoints.sm}) {
    grid-template-columns: repeat(${props.sm}, 1fr);
    }

    @media screen and (max-width: ${breakpoints.ssm}) {
    grid-template-columns: repeat(${props.ssm}, 1fr);
    }
  `}
`
