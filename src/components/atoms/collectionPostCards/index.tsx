import { CollectionPostProps, defaultProps } from './types';
import { PostContent, ExclusiveBlocked, GeolockedBlocked } from './style';

const CollectionPostCard = ({ ...props }: CollectionPostProps ) => {
    return (
       <PostContent {...props}>
           {props.isExclusive ? <ExclusiveBlocked /> : '' || props.isGeolocked ? <GeolockedBlocked/> : ''}
       </PostContent>
    );
}

CollectionPostCard.defaultProps = defaultProps

export { CollectionPostCard }