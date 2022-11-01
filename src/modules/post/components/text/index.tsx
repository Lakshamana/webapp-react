import { Image } from '@chakra-ui/react'
import { Post } from 'generated/graphql'
import { ThumborInstanceTypes, ThumborParams, useThumbor } from 'hooks/useThumbor'

const TextPost = ({ ...postData }: Post) => {
  const { generateImage } = useThumbor()

  // TODO: Transform getImageUrl on a hook
  const getImageUrl = () => {
    const imageOptions: ThumborParams = {
      size: {
        width: 0,
        height: 500,
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

  if (!postImage) return <></>

  return (
    <Image
      objectPosition="center"
      boxSize={'auto'}
      alt={postData.title}
      src={postImage}
      htmlWidth="auto"
      loading="lazy"
    />
  )
}

export { TextPost }
