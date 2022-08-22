import { Icon } from '@iconify/react'
import { colors } from 'styles'
import { abbreviateNumber } from 'utils/helperFunctions'
import { FeedPostCardProps } from '../../types'
import {
	BlockedContent,
	CountView,
	MediaLength,
	PlayContent,
	VideoContent
} from './style'

const VideoPost = ({ ...props }: FeedPostCardProps) => (
  <VideoContent {...props}>
    {props.isExclusive || props.isGeolocked ? (
      <BlockedContent>
        <Icon
          width={20}
          color={colors.white}
          icon={`mdi:${props.isExclusive ? 'lock' : 'earth'}`}
        />
      </BlockedContent>
    ) : (
      <PlayContent>
        <Icon
          width={50}
          color={colors.white}
          icon={`mdi:play-circle-outline`}
        />
      </PlayContent>
    )}
    {props.displayViews && props.views && (
      <>
        <CountView padding={2}>
          <Icon width={18} icon="mdi:play" />
          {abbreviateNumber(props.views)}
        </CountView>
        <MediaLength padding={2}>{props.mediaLength}</MediaLength>
      </>
    )}
  </VideoContent>
)

export { VideoPost }
