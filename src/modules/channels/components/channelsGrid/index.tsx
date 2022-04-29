import { SimpleGrid } from '@chakra-ui/react'
import { ChannelCard } from 'components'
import { Channel } from 'generated/graphql'
import { Props } from './types'

import { useThumbor, ThumborInstanceTypes, ThumborParams } from 'services/hooks'
import { useFlags } from 'contexts/flags'

const ChannelsGrid = ({ channelsList, channelSelected }: Props) => {
  const { generateImage } = useThumbor()
  const { CHANNELS } = useFlags()

  const getImageUrl = (path) => {
    const imageOptions: ThumborParams = {
      size: {
        height: 400,
      },
    }
    return generateImage(ThumborInstanceTypes.IMAGE, path, imageOptions)
  }

  const isGeolocked = (channel: Channel) =>
    channel.__typename === 'GeolockedChannel'

  return (
    <SimpleGrid width={'100%'} columns={[1, 2, 2, 3, 3, 4, 5]} spacing={3}>
      {channelsList?.map((item) => {
        const channelConfig = CHANNELS[item.id]
        const channelThumbnail = getImageUrl(channelConfig?.IMAGES?.THUMBNAIL)
        return (
          <ChannelCard
            id={item.id}
            name={item.name}
            description={item.description}
            key={item.id}
            onClick={(value) => channelSelected(value)}
            isGeolocked={isGeolocked(item)}
            image={channelThumbnail}
          />
        )
      })}
    </SimpleGrid>
  )
}

export { ChannelsGrid }
