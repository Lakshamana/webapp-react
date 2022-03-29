import { useState } from 'react'
import { Icon } from '@iconify/react'
import { ChannelProps } from 'types/channel'
import { ChannelContent, BlockedContent } from './styles'
import { QUERY_MEDIA } from 'services/graphql'
import { colors } from 'styles'
import { useQuery } from '@apollo/client'
import { useThumbor, ThumborInstanceTypes, ThumborParams } from 'services/hooks'

const ChannelCard = ({ image, ...props }: ChannelProps) => {
  const { generateImage } = useThumbor()
  const selectChannel = () => props.id && props.onClick(props.id)
  const [thumbPath, setThumbPath] = useState<any>()

  //TODO: Get thumb with Media Query is a temporary solution, it should be removed when the API is working properly
  const { data, loading } = useQuery(QUERY_MEDIA, {
    variables: { id: props.mediaId },
    onCompleted: (result) => {
      setThumbPath(getImageUrl(result?.media?.imgPath))
    },
  })

  const getImageUrl = (path: string) => {
    const imageOptions: ThumborParams = {
      size: {
        height: 400,
      },
    }

    if (props.isGeolocked) {
      imageOptions.blur = 20
    }

    const image = generateImage(
      ThumborInstanceTypes.IMAGE,
      path as string,
      imageOptions
    )

    return image
  }

  return (
    <>
      {!loading && (
        <ChannelContent
          {...props}
          onClick={selectChannel}
          style={{ backgroundImage: `url('${thumbPath}')` }}
        >
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
      )}
    </>
  )
}

export { ChannelCard }
