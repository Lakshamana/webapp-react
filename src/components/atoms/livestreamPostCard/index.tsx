import { LivePostProps, defaultProps } from './types';
import { PostContent, ExclusiveBlocked, GeolockedBlocked } from './style';

const LivestreamPostCard = ({ ...props }: LivePostProps ) => {
    return (
       <PostContent {...props}>
           {props.isExclusive ? <ExclusiveBlocked /> : '' || props.isGeolocked ? <GeolockedBlocked/> : ''}
       </PostContent>
    );
}

LivestreamPostCard.defaultProps = defaultProps

export { LivestreamPostCard }