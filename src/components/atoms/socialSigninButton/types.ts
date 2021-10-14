import { SpaceProps, LayoutProps } from "styled-system"

export interface SocialSigninButtonProps extends SpaceProps, LayoutProps {
	type: ButtonType
}

type ButtonType = "facebook" | "google" | "apple" | "linkedin"
