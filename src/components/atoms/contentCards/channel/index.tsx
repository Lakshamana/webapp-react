import { Icon } from '@iconify/react'
import { colors } from 'styles'
import { ChannelProps } from 'types/channel'
import { BlockedContent, ChannelContent } from './styles'

const ChannelCard = ({ ...props }: ChannelProps) => {
  const selectChannel = () => props.id && props.onClick(props.id)
  return (
    <ChannelContent {...props} onClick={selectChannel}>
      {(props.isExclusive || props.isGeolocked) && (
        <BlockedContent>
          <Icon
            width={20}
            color={colors.white}
            icon={`mdi:${props.isExclusive ? 'lock' : 'earth'}`}
          />
        </BlockedContent>
      )}
    </ChannelContent>
  )
}

export { ChannelCard }
