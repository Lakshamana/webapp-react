import { Container, Image } from '@chakra-ui/react'
import { Post } from 'generated/graphql'
import { ThumborInstanceTypes, ThumborParams, useThumbor } from 'services/hooks'

const PhotoPost = ({ ...postData }: Post) => {
  const { generateImage } = useThumbor()

  const getImageUrl = () => {
    const imageOptions: ThumborParams = {
      size: {
        width: 800,
        height: 0
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

  return (
    <Container>
      <Image src={getImageUrl()}></Image>
    </Container>
  )
}

export { PhotoPost }
