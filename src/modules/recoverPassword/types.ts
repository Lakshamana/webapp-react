import { LayoutProps, SpaceProps, FlexboxProps } from "styled-system"

export interface Props extends FlexboxProps, LayoutProps, SpaceProps {
	children: JSX.Element | JSX.Element[]
}

export type ResetPasswordSteps = 'Request' | 'Update' | 'Success' | 'Error'