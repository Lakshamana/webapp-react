import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { SimpleGrid } from '@chakra-ui/react'
import { ChannelCard } from 'components'
import { Channel } from 'generated/graphql'
import { Props } from './types'
import { QUERY_MEDIA } from 'services/graphql'
import { useThumbor, ThumborInstanceTypes, ThumborParams } from 'services/hooks'

const ChannelsGrid = ({ channelsList, mediasId, channelSelected }: Props) => {
  const { generateImage } = useThumbor()
  const [medias, setMedias] = useState<any[]>()

  const { loading, data } = useQuery(QUERY_MEDIA(mediasId), {
    onCompleted: (result) => {
      const arr = Object.values(result)
      setMedias(arr)
    },
  })

  const getImageUrl = (path) => {
    const imageOptions: ThumborParams = {
      size: {
        height: 400,
      },
    }
    const image = generateImage(ThumborInstanceTypes.IMAGE, path, imageOptions)
    return image
  }

  const isGeolocked = (channel: Channel) =>
    channel.__typename === 'GeolockedChannel'

  return (
    <SimpleGrid width={'100%'} columns={[1, 2, 2, 3, 3, 4, 5]} spacing={3}>
      {channelsList?.map((item) => {
        const itemMedia = medias?.find(
          (el) => el.id === item.customization?.thumbnail
        )
        const itemImage = getImageUrl(itemMedia?.imgPath)
        return (
          <ChannelCard
            id={item.id}
            name={item.name}
            description={item.description}
            key={item.id}
            onClick={(value) => channelSelected(value)}
            isGeolocked={isGeolocked(item)}
            image={itemImage}
          />
        )
      })}
    </SimpleGrid>
  )
}

export { ChannelsGrid }
