import { Icon } from '@iconify/react'
import { useMediaQuery } from '@chakra-ui/react'
import { useChannelsStore } from 'services/stores'
import { ThumborInstanceTypes, useThumbor } from 'services/hooks'
import { Container, Avatar } from 'components'
import { colors, breakpoints } from 'styles'
import { IconContainer } from './styles'

import { PropsChannelSelected } from './types'

const ChannelSelected = ({ open, colorMode }: PropsChannelSelected) => {
  const { activeChannel } = useChannelsStore()
  const { generateImage } = useThumbor()
  const [isDesktop] = useMediaQuery(`(min-width: ${breakpoints.sm})`)

  const generateChannelImage = () => {
    const imgPath = activeChannel?.customization?.logo
      ? activeChannel?.customization?.logo[colorMode]
      : ''
    const channel_img = generateImage(
      ThumborInstanceTypes.IMAGE,
      imgPath as string,
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
            src={generateChannelImage()}
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
