export interface Props {
    postTitle: string;
    postDescription: string;
    Date: string;
    postUrl?: string;
    CountMessages: number;
    isExclusive?: boolean;
    isGeolocked?: boolean;
    hasActivity?: boolean;
    coverImage?: string;
    type: MediaType;
}

export const defaultProps = {
    isExclusive: false,
    isGeolocked: false,
    hasActivity: true
}

export interface ImageProps {
    coverImage: string;
    isExclusive?: boolean;
    isGeolocked?: boolean;
}

export interface MediaTypeProps {
    mediaType: MediaType;
}

type MediaType = "Audio" | "Video" | "Blog" | "Image" | "Poll"

