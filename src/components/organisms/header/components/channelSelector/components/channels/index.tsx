import { Badge, Flex, Spinner } from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import { Avatar, Container, Text } from 'components'
import { Channel } from 'generated/graphql'
import { useTranslation } from 'react-i18next'
import { ThumborInstanceTypes, useThumbor } from 'services/hooks/useThumbor'
import { useCustomizationStore } from 'services/stores'
import { colors } from 'styles'
import {
  isEntityBlocked,
  isEntityGeolocked,
  isEntityOnPaywall,
  isEntityPrivate
} from 'utils/accessVerifications'
import { ChannelItem, ChannelList } from './styles'
import { PropsChannels } from './types'

const Channels = ({
  selected,
  onSelect,
  colorMode,
  channels,
  isLoading,
}: PropsChannels) => {
  const { generateImage } = useThumbor()
  const { customizationData } = useCustomizationStore()
  const { t } = useTranslation()

  const generateChannelImage = (icon: any) => {
    const theme = colorMode?.toUpperCase()
    if (!icon) return ''
    return generateImage(ThumborInstanceTypes.IMAGE, icon[theme], {
      size: { height: 80 },
    })
  }

  const getBadgeLabel = (channel) => {
    if (isEntityPrivate(channel)) return t('common.private')
    if (isEntityGeolocked(channel)) return t('common.geolocked')
    if (isEntityOnPaywall(channel)) return t('common.paywall')
    return ''
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
            const channelConfig = customizationData.CHANNELS[channel.id]
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
                  {isEntityBlocked(channel) && (
                    <Badge
                      ml={2}
                      backgroundColor={colors.brand.indicator[colorMode]}
                      color="white"
                      display="flex"
                      alignItems="center"
                    >
                      <Icon color="white" icon="mdi:lock" />
                      <Text ml={1}>{getBadgeLabel(channel)} </Text>
                    </Badge>
                  )}
                </Container>
              </ChannelItem>
            )
          })}
      </ChannelList>
    </Container>
  )
}

export { Channels }
