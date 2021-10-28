import styled from "styled-components"
import { StyleContainer } from "components"

export const ChildContainer = styled(StyleContainer)`
	display: flex;
	height: auto;
`

export const LayoutContainer = styled(StyleContainer)`
	position: relative;
	display: flex;
	width: 100%;
	height: 100vh;
	overflow-y: auto;
	overflow-x: hidden;
`