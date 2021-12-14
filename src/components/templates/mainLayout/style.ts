import styled from "styled-components"
import { StyleContainer } from "components"
import { breakpoints, sizes } from "styles"

export const ChildContainer = styled(StyleContainer)`
	display: flex;
	height: max-content;
	min-height: calc(
		100vh - ${sizes.footerMobileHeight} - ${sizes.headerMobileHeight}
	);

	@media screen and (min-width: ${breakpoints.md}) {
		min-height: calc(
			100vh - ${sizes.footerDesktopHeight} - ${sizes.headerDesktopHeight}
		);
	  }
`

export const LayoutContainer = styled(StyleContainer)`
	display: flex;
	width: 100%;
	min-height: 100vh;
	overflow-x: hidden;
	position: relative;
	background-color: ${({ theme }) => theme.colors.bodyBg[theme.colorMode]};
`
