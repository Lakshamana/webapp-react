import { FeedPostCardProps } from '../../types';
import { ImageContent, ExclusiveBlocked, GeolockedBlocked} from './style';

const ImagePost = ({ ...props }: FeedPostCardProps) => (
  <ImageContent {...props}>
    {props.isExclusive ? <ExclusiveBlocked /> : '' || props.isGeolocked ? <GeolockedBlocked /> : ''}
  </ImageContent>
)

export { ImagePost }