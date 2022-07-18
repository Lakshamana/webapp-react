import { SimpleGrid } from '@chakra-ui/react'
import { ChannelCard } from 'components'
import { Channel } from 'generated/graphql'
import { Props } from './types'

import { ThumborInstanceTypes, ThumborParams, useThumbor } from 'services/hooks'

import { useCustomizationStore } from 'services/stores'
import { isEntityPrivate } from 'utils/accessVerifications'

const ChannelsGrid = ({ channelsList, channelSelected }: Props) => {
  const { generateImage } = useThumbor()
  const { customizationData } = useCustomizationStore()

  const getImageUrl = (path, channel) => {
    const imageOptions: ThumborParams = {
      size: {
        height: 400,
      },
    }

    if (isEntityPrivate(channel)) {
      imageOptions.blur = 20
    }

    return generateImage(ThumborInstanceTypes.IMAGE, path, imageOptions)
  }

  return (
    <SimpleGrid width={'100%'} columns={[1, 2, 2, 3, 3, 4, 5]} spacing={3}>
      {channelsList?.map((channel: Channel) => {
        const channelConfig = customizationData.CHANNELS[channel.id]
        const channelThumbnail = getImageUrl(
          channelConfig?.IMAGES?.THUMBNAIL,
          channel
        )
        return (
          <ChannelCard
            id={channel.id}
            name={channel.name}
            description={channel.description}
            key={channel.id}
            onClick={(value) => channelSelected(value)}
            isExclusive={isEntityPrivate(channel)}
            //TODO: waiitng for API
            isGeolocked={false}
            image={channelThumbnail}
          />
        )
      })}
    </SimpleGrid>
  )
}

export { ChannelsGrid }
