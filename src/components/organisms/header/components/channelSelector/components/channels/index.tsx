import { Icon } from '@iconify/react'
import { Spinner, Flex } from '@chakra-ui/react'
import { ThumborInstanceTypes, useThumbor } from 'services/hooks/useThumbor'
import { Channel } from 'generated/graphql'
import { Container, Text, Avatar } from 'components'
import { ChannelItem, ChannelList } from './styles'
import { colors } from 'styles'
import { PropsChannels } from './types'
import { useFlags } from 'contexts/flags'

const Channels = ({
  selected,
  onSelect,
  colorMode,
  channels,
  isLoading,
}: PropsChannels) => {
  const { generateImage } = useThumbor()
  const { CHANNELS } = useFlags()

  const generateChannelImage = (icon: any) => {
    const theme = colorMode.toUpperCase()
    if (!icon) return ''
    return generateImage(ThumborInstanceTypes.IMAGE, icon[theme], {
      size: { height: 80 },
    })
  }

  return (
    <Container flexDirection="column" width={1}>
      <ChannelList>
        {isLoading && (
          <Flex alignItems="center" justifyContent="center" py={20}>
            <Spinner size="lg" color={colors.brand.primary[colorMode]} />
          </Flex>
        )}
        {channels &&
          channels.map((channel: Channel) => {
            const channelConfig = CHANNELS[channel.id]
            const channelThumbnail = generateChannelImage(
              channelConfig?.IMAGES?.CHANNEL_ICON
            )

            return (
              <ChannelItem
                key={channel.id}
                py={2}
                onClick={() => onSelect(channel)}
              >
                <Container alignItems="center">
                  <Container width="25px" justifyContent="center">
                    {selected?.id === channel.id && (
                      <Icon
                        width={15}
                        height={15}
                        icon="mdi:check"
                        color={colors.generalText[colorMode]}
                      />
                    )}
                  </Container>
                  <Avatar
                    ml={1}
                    name={channel.name}
                    borderRadius={'8px'}
                    height={10}
                    width={10}
                    src={channelThumbnail}
                  />
                  <Text
                    ml={3}
                    color={colors.generalText[colorMode]}
                    fontSize={'1rem'}
                  >
                    {channel.name}
                  </Text>
                </Container>
              </ChannelItem>
            )
          })}
      </ChannelList>
    </Container>
  )
}

export { Channels }
