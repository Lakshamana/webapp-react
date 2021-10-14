import {
	LayoutProps,
	SpaceProps,
	FlexboxProps,
	PositionProps
} from "styled-system"

export interface Props extends SpaceProps, LayoutProps, FlexboxProps, PositionProps {
	children?: JSX.Element | JSX.Element[]
}

export const defaultProps = {
	paddingY: 32,
	paddingX: 48
};
