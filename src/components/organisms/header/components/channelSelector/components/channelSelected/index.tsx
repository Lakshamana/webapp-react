import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { Icon } from '@iconify/react'
import { useMediaQuery } from '@chakra-ui/react'
import { useChannelsStore } from 'services/stores'
import { ThumborInstanceTypes, useThumbor } from 'services/hooks'
import { QUERY_SINGLE_MEDIA } from 'services/graphql'
import { Container, Avatar } from 'components'
import { colors, breakpoints } from 'styles'
import { IconContainer } from './styles'
import { PropsChannelSelected } from './types'

const ChannelSelected = ({ open, colorMode }: PropsChannelSelected) => {
  const { activeChannel } = useChannelsStore()
  const { generateImage } = useThumbor()
  const [isDesktop] = useMediaQuery(`(min-width: ${breakpoints.sm})`)
  const [iconPath, setIconPath] = useState<any>()

  //TODO: Get icon with Media Query is a temporary solution, it should be removed when the API is working properly
  const { data, loading } = useQuery(QUERY_SINGLE_MEDIA, {
    variables: {
      id:
        activeChannel?.customization?.icon &&
        activeChannel?.customization?.icon[colorMode],
    },
    onCompleted: (result) => {
      setIconPath(generateChannelImage(result?.media?.imgPath))
    },
  })

  const generateChannelImage = (path: string) => {
    const channel_img = generateImage(
      ThumborInstanceTypes.IMAGE,
      path as string,
      {
        size: { height: 80 },
      }
    )
    return channel_img
  }

  return (
    <Container alignItems="center">
      {activeChannel && (
        <Container alignItems="center">
          <Avatar
            name={activeChannel.name}
            height={isDesktop ? '45px' : '38px'}
            width={isDesktop ? '45px' : '38px'}
            borderRadius={'8px'}
            src={iconPath}
          />
        </Container>
      )}
      <IconContainer {...{ open }}>
        <Icon
          width={20}
          height={20}
          icon="mdi:chevron-down"
          color={colors.secondaryText[colorMode]}
        />
      </IconContainer>
    </Container>
  )
}

export { ChannelSelected }
