export interface CollectionPostProps {
    id: string;
    collectionUrl?: string;
    coverImage?: string;
    collectionTitle?: string;
    isNew?: string;
    newTag?: string;
    isExclusive?: boolean;
    isGeolocked?: boolean;
}

export const defaultProps = {
    isExclusive: false,
    isGeolocked: false,
}