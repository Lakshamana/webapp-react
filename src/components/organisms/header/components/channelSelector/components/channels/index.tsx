import { Icon } from '@iconify/react'
import { Spinner, Flex } from '@chakra-ui/react'
import { ThumborInstanceTypes, useThumbor } from 'services/hooks/useThumbor'
import { Channel } from 'generated/graphql'

import { Container, Text, Avatar } from 'components'

import { ChannelItem, ChannelList } from './styles'
import { colors } from 'styles'

import { PropsChannels } from './types'

const Channels = ({
  selected,
  onSelect,
  colorMode,
  channels,
  isLoading,
}: PropsChannels) => {
  const { generateImage } = useThumbor()

  const generateChannelImage = (channel: Channel) => {
    const imgPath = channel?.customization?.logo
      ? channel?.customization?.logo[colorMode]
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
    <Container flexDirection="column" width={1}>
      <ChannelList>
        {isLoading && (
          <Flex alignItems="center" justifyContent="center" py={20}>
            <Spinner size="lg" color={colors.brand.primary[colorMode]} />
          </Flex>
        )}
        {channels &&
          channels.map((channel: Channel) => {
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
                    name={channel?.name}
                    borderRadius={'8px'}
                    height={10}
                    width={10}
                    src={generateChannelImage(channel)}
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
