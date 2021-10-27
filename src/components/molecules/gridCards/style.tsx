import styled from 'styled-components';
import { Props } from './types'
import { breakpoints } from 'styles';

export const GridContent = styled.div<Props>`
  width: 100%;
  display: grid;
  ${(props: Props) => `grid-template-columns: repeat(${props.xl}, 1fr);`}
  ${(props: Props) => `grid-column-gap: ${props.columnGap}px;`}
  ${(props: Props) => `grid-row-gap: ${props.rowGap}px;`}

  @media screen and (max-width: ${breakpoints.lg}) {
    ${(props: Props) => `grid-template-columns: repeat(${props.lg}, 1fr);`}
  }

  @media screen and (max-width: ${breakpoints.md}) {
    ${(props: Props) => `grid-template-columns: repeat(${props.md}, 1fr);`}
  }

  @media screen and (max-width: ${breakpoints.sm}) {
    ${(props: Props) => `grid-template-columns: repeat(${props.sm}, 1fr);`}
  }

  @media screen and (max-width: ${breakpoints.ssm}) {
    ${(props: Props) => `grid-template-columns: repeat(${props.ssm}, 1fr);`}
  }
`