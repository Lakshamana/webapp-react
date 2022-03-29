import { SimpleGrid } from '@chakra-ui/react'
import { ChannelCard } from 'components'
import { ThumborInstanceTypes, useThumbor, ThumborParams } from 'services/hooks'
import { Channel } from 'generated/graphql'
import { Props } from './types'

const ChannelsGrid = ({ channelsList, channelSelected }: Props) => {
  const { generateImage } = useThumbor()

  const getImageUrl = (channel: Channel) => {
    const imageOptions: ThumborParams = {
      size: {
        height: 400,
      },
    }

    if (isGeolocked(channel)) {
      imageOptions.blur = 20
    }

    const image = generateImage(
      ThumborInstanceTypes.IMAGE,
      channel.customization?.thumbnail?.imgPath as string,
      imageOptions
    )

    return image
  }

  const isGeolocked = (channel: Channel) =>
    channel.__typename === 'GeolockedChannel'

  return (
    <SimpleGrid width={'100%'} columns={[1, 2, 2, 3, 3, 4, 5]} spacing={3}>
      {channelsList?.map((item) => (
        <ChannelCard
          id={item.id}
          name={item.name}
          description={item.description}
          key={item.id}
          onClick={(value) => channelSelected(value)}
          isGeolocked={isGeolocked(item)}
          image={getImageUrl(item)}
        ></ChannelCard>
      ))}
    </SimpleGrid>
  )
}

export { ChannelsGrid }
