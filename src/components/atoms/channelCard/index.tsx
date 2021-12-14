import { Icon } from '@iconify/react'
import { ChannelProps } from './types'
import { ChannelContent, BlockedContent } from './styles'
import { colors } from 'styles'

const ChannelCard = ({ isExclusive, isGeolocked, ...props }: ChannelProps) => {
  return (
    <ChannelContent {...props}>
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
