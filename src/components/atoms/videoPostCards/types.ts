export interface VideoPostProps {
    id: string;
    postTitle?: string;
    postUrl?: string;
    coverImage?: string;
    mediaLength?: number;
    views?: number;
    isExclusive?: boolean;
    isGeolocked?: boolean;
}

export const defaultProps = {
    isExclusive: false,
    isGeolocked: false,
}