import { ImageProps } from '../../types';
import { ImageContent, ExclusiveBlocked, GeolockedBlocked} from './style';

const ImagePost = ({ ...props }: ImageProps) => (
  <ImageContent {...props}>
    {props.isExclusive ? <ExclusiveBlocked /> : '' || props.isGeolocked ? <GeolockedBlocked /> : ''}
  </ImageContent>
)

export { ImagePost }