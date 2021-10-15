import { LayoutProps, SpaceProps, FlexboxProps } from "styled-system"

export interface Props extends FlexboxProps, LayoutProps, SpaceProps {
	children: JSX.Element | JSX.Element[];
	backgroundImage?: string
}

export const defaultProps = {
	display: "flex",
	alignItems: "flex-start",
	padding: 0
}
