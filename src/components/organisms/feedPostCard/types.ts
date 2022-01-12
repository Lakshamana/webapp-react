import {
	LayoutProps,
	SpaceProps,
	TypographyProps,
	FlexboxProps
} from "styled-system"

export interface Props extends SpaceProps, LayoutProps, TypographyProps, FlexboxProps {
	postTitle: string
	postDescription: string
	date: string
	postUrl?: string
	countMessages: number
	hasActivity: boolean
	coverImage: string
	type: MediaType
	mediaLength: string
	views: number
	displayViews: boolean
	audioTitle: string
	audioArtist: string
	voteCount: number
	timeRemaining: string
	itemQuestion: string
	percentage: string
	winning: boolean
	voted: boolean
	isExclusive: boolean
	isGeolocked: boolean
	itensQuestions?: Array<any|itensQuestions>
}

export interface itensQuestions {
	id: number,
	item: string,
	percentage: string,
	winner: boolean
}

export const defaultProps = {
	isExclusive: false,
	isGeolocked: false,
	hasActivity: true,
	displayViews: true,
	winning: true
}

export interface MediaTypeProps {
	mediaType: MediaType
}

type MediaType = "Audio" | "Video" | "Blog" | "Image" | "Poll"
