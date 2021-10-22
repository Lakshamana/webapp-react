import { Props } from '../../types';
import { ImageContent, ExclusiveBlocked, GeolockedBlocked} from './style';

const ImagePost = ({ ...props }: Props) => (
  <ImageContent {...props}>
    {props.isExclusive ? <ExclusiveBlocked /> : '' || props.isGeolocked ? <GeolockedBlocked /> : ''}
  </ImageContent>
)

export { ImagePost }