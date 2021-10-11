import { VideoPostProps, defaultProps } from './types';
import { PostContent, ExclusiveBlocked, GeolockedBlocked } from './style';

const VideoPostCard = ({ ...props }: VideoPostProps) => {
    return <>
        <PostContent {...props}>
            {props.isExclusive ? <ExclusiveBlocked /> : '' || props.isGeolocked ? <GeolockedBlocked /> : ''}
        </PostContent>
    </>
}

VideoPostCard.defaultProps = defaultProps

export { VideoPostCard }