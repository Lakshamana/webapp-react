import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { Icon } from '@iconify/react'
import { Spinner, Flex } from '@chakra-ui/react'
import { ThumborInstanceTypes, useThumbor } from 'services/hooks/useThumbor'
import { Channel } from 'generated/graphql'
import { Container, Text, Avatar } from 'components'
import { ChannelItem, ChannelList } from './styles'
import { colors } from 'styles'
import { PropsChannels } from './types'
import { QUERY_MEDIA } from 'services/graphql'

const Channels = ({
  selected,
  onSelect,
  colorMode,
  channels,
  mediasId,
  isLoading,
}: PropsChannels) => {
  const { generateImage } = useThumbor()
  const [medias, setMedias] = useState<any[]>([''])

  const { loading, data } = useQuery(QUERY_MEDIA(mediasId), {
    onCompleted: (result) => {
      const arr = Object.values(result)
      setMedias(arr)
    },
  })

  const generateChannelImage = (path) =>
    generateImage(ThumborInstanceTypes.IMAGE, path, {
      size: { height: 80 },
    })

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
            const itemMedia = medias?.find(
              (el) => el.id === channel.customization?.thumbnail
            )
            const itemImage = generateChannelImage(itemMedia?.imgPath)

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
                    src={itemImage}
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
