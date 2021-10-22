export interface Props {
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
	isExclusive: boolean,
	isGeolocked: boolean,
}

export const defaultProps = {
	isExclusive: false,
	isGeolocked: false,
	hasActivity: true
}

export interface MediaTypeProps {
	mediaType: MediaType
}

type MediaType = "Audio" | "Video" | "Blog" | "Image" | "Poll"
