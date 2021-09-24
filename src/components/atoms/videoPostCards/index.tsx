import { videoPostProps, defaultProps } from './types';
import { PostContent, ExclusiveBlocked, GeolockedBlocked } from './style';

const VideoPostCard = ({ ...props }: videoPostProps ) => {
    return (
       <PostContent {...props}>
           {props.isExclusive ? <ExclusiveBlocked /> : '' || props.isGeolocked ? <GeolockedBlocked/> : ''}
       </PostContent>
    );
}

VideoPostCard.defaultProps = defaultProps

export { VideoPostCard }