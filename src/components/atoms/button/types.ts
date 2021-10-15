import {
	ColorProps,
	SpaceProps,
	LayoutProps,
	TypographyProps,
	BorderProps,
	VariantArgs
} from "styled-system"

type ButtonType = "submit" | "reset" | "billboard" | "disabled"

export interface ButtonProps
	extends SpaceProps,
		LayoutProps,
		TypographyProps,
		VariantArgs,
		BorderProps,
		ColorProps {
	label: string
	style?: React.CSSProperties
	type: ButtonType
	onClick?: Function
}

export const defaultProps = {
	type: "submit"
}
