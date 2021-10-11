export interface LivePostProps {
    postTitle?: string;
    postUrl?: string;
    coverImage?: string;
    mediaLength?: number;
    views?: number;
    isExclusive?: boolean;
    isGeolocked?: boolean;
}

export const defaultProps = {
    isExclusive: true,
    isGeolocked: false,
}