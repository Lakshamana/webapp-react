import { LivePostProps } from 'components/atoms/livestreamPostCard/types';

export interface LiveScrollerProps {
    sectionTitle?: string;
    sectionUrl?: string;
    hasMoreLink?: boolean;
    items?: LivePostProps[];
}