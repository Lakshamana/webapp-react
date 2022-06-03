import {
	LayoutProps,
	SpaceProps,
	TypographyProps,
	FlexboxProps
} from "styled-system"

export interface FeedPostCardProps extends SpaceProps, LayoutProps, TypographyProps, FlexboxProps {
	id: string
	slug: string
	postTitle: string
	postDescription: string
	date: string | undefined
	postUrl?: string
	countReactions: number
	myReactions: Array<myReactions>
	reactions: Array<reactions>
	countMessages: number
	hasActivity: boolean
	coverImage?: string
	type: MediaType
	mediaLength: string
	views: number
	displayViews: boolean
	audioTitle: string
	audioArtist: string
	voteCount?: number
	timeRemaining: string
	itemQuestion: string
	percentage: string
	winning: boolean
	voted: boolean
	isExclusive: boolean
	isGeolocked: boolean
	itensQuestions?: Array<any | itensQuestions>
	updateState: Function
	addMyReaction: Function
	removeMyReaction: Function
}

export interface reactions {
	count: number,
	name: string
}

export interface myReactions {
	name: string
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

type MediaType = "AUDIO" | "VIDEO" | "BLOG" | "IMAGE" | "POLL" | "ON_DEMAND"
