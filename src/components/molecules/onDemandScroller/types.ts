import { VideoPostProps } from 'components/atoms/videoPostCards/types';

export interface VideoScrollerProps {
    sectionTitle?: string;
    sectionUrl?: string;
    hasMoreLink?: boolean;
    items?: VideoPostProps[];
}

export const defaultProps = {}