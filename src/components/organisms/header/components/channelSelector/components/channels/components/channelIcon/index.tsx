import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { Avatar } from 'components'
import { QUERY_MEDIA } from 'services/graphql'
import { useThumbor, ThumborInstanceTypes, ThumborParams } from 'services/hooks'
import { Props } from './types'

const ChannelIcon = ({mediaId, channelName}: Props) => {
  const { generateImage } = useThumbor()
  const [thumbPath, setThumbPath] = useState<string>()

  //TODO: Get thumb with Media Query is a temporary solution, it should be removed when the API is working properly
  const { loading } = useQuery(QUERY_MEDIA, {
    variables: {
      id: mediaId,
    },
    onCompleted: (result) => {
      const path = getImageUrl(result?.media?.imgPath)
      setThumbPath(path)
    },
  })

  const getImageUrl = (path) => {
    const imageOptions: ThumborParams = {
      size: {
        height: 400,
      },
    }

    const image = generateImage(
      ThumborInstanceTypes.IMAGE,
      path as string,
      imageOptions
    )

    return image
  }
  return (
    <Avatar
      ml={1}
      name={channelName}
      borderRadius={'8px'}
      height={10}
      width={10}
      src={thumbPath}
    />
  )
}

export { ChannelIcon }
