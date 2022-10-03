import { Box } from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import { Post } from 'generated/graphql'
import { ThumborInstanceTypes, ThumborParams, useThumbor } from 'services/hooks'
import { useThemeStore } from 'services/stores'
import { colors } from 'styles'

const PhotoPost = ({ ...postData }: Post) => {
  const { generateImage } = useThumbor()
  const { colorMode } = useThemeStore()

  const getImageUrl = () => {
    const imageOptions: ThumborParams = {
      size: {
        width: 0,
        height: 600,
      },
    }
    const imgPath =
      postData.media?.__typename === 'MediaPhoto' ? postData.media?.imgPath : ''

    const image = generateImage(
      ThumborInstanceTypes.IMAGE,
      imgPath || '',
      imageOptions
    )

    return image
  }

  const postImage = getImageUrl()

  if (!postImage)
    return (
      <Box pt={20} pb={10}>
        <Icon
          width={100}
          color={colors.secondaryText[colorMode]}
          icon={`mdi:image-off-outline`}
        />
      </Box>
    )

  return <img alt={postData.title} src={postImage} />
}

export { PhotoPost }
