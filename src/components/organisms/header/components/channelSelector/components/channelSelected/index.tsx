import { useMediaQuery } from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import { Avatar, Container } from 'components'
import { ThumborInstanceTypes, useThumbor } from 'hooks/useThumbor'
import { useChannelsStore, useCustomizationStore } from 'services/stores'
import { breakpoints, colors } from 'styles'
import { IconContainer } from './styles'
import { PropsChannelSelected } from './types'

const ChannelSelected = ({ open, colorMode }: PropsChannelSelected) => {
  const { activeChannel } = useChannelsStore()
  const { generateImage } = useThumbor()
  const [isDesktop] = useMediaQuery(`(min-width: ${breakpoints.sm})`)
  const { activeChannelConfig } = useCustomizationStore()

  const generateChannelImage = () => {
    const theme = colorMode?.toUpperCase()
    if (!activeChannelConfig?.IMAGES?.CHANNEL_ICON[theme]) return ''
    return generateImage(
      ThumborInstanceTypes.IMAGE,
      activeChannelConfig?.IMAGES?.CHANNEL_ICON[theme],
      {
        size: { height: 80 },
      }
    )
  }

  const channelImage = generateChannelImage()

  return (
    <Container alignItems="center">
      {activeChannel && (
        <Container alignItems="center">
          <Avatar
            name={activeChannel.name}
            height={isDesktop ? '45px' : '38px'}
            width={isDesktop ? '45px' : '38px'}
            borderRadius={'8px'}
            {...(channelImage ? { background: 'transparent' } : {})}
            src={channelImage}
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
