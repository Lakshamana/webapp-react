import { Icon } from '@iconify/react'
import { Props } from './types'
import { ChannelContent, BlockedContent } from './styles'
import { colors } from 'styles'

const ChannelCard = ({
  isExclusive,
  isGeolocked,
  onSelectChannel,
  ...props
}: Props) => {
  
  const selectChannel = () => {
    onSelectChannel(props.id || '')
  }
  return (
    <ChannelContent {...props} onClick={selectChannel}>
      {(isExclusive || isGeolocked) && (
        <BlockedContent>
          <Icon
            width={20}
            color={colors.white}
            icon={`mdi:${isExclusive ? 'lock' : 'earth'}`}
          ></Icon>
        </BlockedContent>
      )}
    </ChannelContent>
  )
}

export { ChannelCard }
