import { Icon } from '@iconify/react'
import { ChannelProps } from 'types/channel'
import { ChannelContent, BlockedContent } from './styles'
import { colors } from 'styles'

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
          ></Icon>
        </BlockedContent>
      )}
    </ChannelContent>
  )
}

export { ChannelCard }
