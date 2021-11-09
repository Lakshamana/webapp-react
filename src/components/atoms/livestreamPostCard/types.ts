export interface LivePostProps {
    id: string,
    postTitle?: string;
    postUrl?: string;
    coverImage?: string;
    mediaLength?: number;
    views?: number;
    isLive: boolean;
    isExclusive?: boolean;
    isGeolocked?: boolean;
}

export const defaultProps = {
    isExclusive: false,
    isGeolocked: false,
}