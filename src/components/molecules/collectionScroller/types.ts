import { CollectionPostProps } from 'components/atoms/collectionPostCards/types';

export interface CollectionScrollerProps {
    sectionTitle?: string;
    sectionUrl?: string;
    hasMoreLink?: boolean;
    items?: CollectionPostProps[];
}

export const defaultProps = {}