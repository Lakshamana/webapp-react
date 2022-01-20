import styled, { css } from 'styled-components'
import { layout } from "styled-system";
import { StyleContainer } from 'components'
import { breakpoints, sizes } from 'styles'

interface PropsSideContainer {
  open: boolean
}

export const SideContainer = styled(StyleContainer) <PropsSideContainer>`
  position: absolute;
  top: ${sizes.headerMobileHeight};
  z-index: 1000;
  overflow: auto;
  height: calc(100% - 70px);
  background-color: ${({ theme }) => theme.colors.headerBg[theme.colorMode]};
  ${({ open }) =>
    open
      ? css`
          width: 300px;
          transition: ease-in 0.25s;
        `
      : `
      width: 0px;
      transition: ease-in 0.25s;`}

  @media (min-width: ${breakpoints.md}) {
    top: 100px;
    height: calc(100% - 100px);
  }
`

export const ScrollContainer = styled(StyleContainer)`
  overflow: auto;
  a:nth-child(n + 1):nth-child(-n + 10) {
    display: block;
  }
  @media (min-width: ${breakpoints.lg}) {
    a:nth-child(n + 1):nth-child(-n + 4) {
      display: none;
    }
  }
  @media (min-width: 1350px) {
    a:nth-child(n + 1):nth-child(-n + 10) {
      display: none;
    }
  }
`

export const ExitContainer = styled(StyleContainer)`
  cursor: pointer;
`

export const Circle = styled.div`
  ${layout}
  background-color: ${({ theme }) => theme.colors.brand.primary[theme.colorMode]};
  border-radius: 50%;
  width: 8px;
  height: 8px;
  margin-right: 8px;
`
