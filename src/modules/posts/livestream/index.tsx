import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Icon } from '@iconify/react'
import { Box, Flex } from '@chakra-ui/react'
import { useThemeStore } from 'services/stores/theme'
import { QUERY_LIVESTREAM } from 'services/graphql'

import { VideoPlayer } from 'components/molecules'
import { Container, Text, Badge, Countdown, Skeleton } from 'components/atoms'
import {
  Bar,
  OpenLivechat,
  IconOpen,
  LiveDetails,
  Title,
  Subtitle,
  Live,
} from './style'
import { colors, sizes } from 'styles'

import { LivestreamBadge } from 'types/livestreams'

import { Livechat } from 'components'
import { LivestreamEvent, LivestreamStatus } from 'generated/graphql'
import { useEffect } from 'react'

const LivePostView = () => {
  const { t } = useTranslation()
  const [optionsState, setOptionsState] = useState()
  const [liveBadge, setLiveBadge] = useState<LivestreamBadge>()
  const { colorMode } = useThemeStore()
  const [livechatState, setlivechatState] = useState(true)
  const { id } = useParams<{ channel: string; id: string }>()
  const [livestream, setLivestream] = useState<LivestreamEvent>()

  const { data, loading } = useQuery(QUERY_LIVESTREAM, {
    variables: {
      id: id,
    },
    onCompleted: (result) => {
      setLivestream(result.livestream)
    },
  })

  const isLive = livestream?.status === LivestreamStatus.Active

  const statusBadge = (status: LivestreamStatus): LivestreamBadge => {
    const Badge = {
      ACTIVE: { label: 'LIVE', color: colors.brand.primary[colorMode] },
      SCHEDULED: { label: 'UPCOMING', color: colors.brand.accent[colorMode] },
      PREPARING: { label: 'UPCOMING', color: colors.brand.accent[colorMode] },
      default: { label: 'UPCOMING', color: colors.brand.primary[colorMode] },
    }

    return Badge[status] || Badge.default
  }
  useEffect(() => {
    setLiveBadge(statusBadge(livestream?.status || LivestreamStatus.Scheduled))
  }, [livestream])

  return (
    <>
      <Container
        flexDirection={'column'}
        justifyContent="center"
        alignItems="center"
      >
        {loading ? (
          <Box p={sizes.paddingSm} width="100%">
            <Skeleton kind="cards" numberOfCards={4} />
          </Box>
        ) : (
          <>
            <Live>
              <Box
                position="relative"
                backgroundColor={'black'}
                height={{ base: '30vh', md: '100%' }}
                w={{ sm: '100%', md: '55%', lg: '65%', xl: '70%' }}
              >
                <Flex
                  gridGap={1}
                  m={4}
                  position={'absolute'}
                  zIndex={999}
                  justifyContent="flex-start"
                >
                  <Badge background={liveBadge?.color} color="white">
                    {liveBadge?.label}
                  </Badge>
                  <Badge background={colors.inputBg.dark} color="white">
                    <Text>99k</Text>
                  </Badge>
                </Flex>
                {isLive ? (
                  <VideoPlayer
                    isLiveStream={true}
                    src={livestream?.hlsPlaybackUrl || ''}
                  />
                ) : (
                  <Countdown
                    eventStartDate={livestream?.scheduledStartAt}
                    fallbackMessage={t('page.post.live.will_start_soon')}
                  ></Countdown>
                )}
              </Box>
              <Box
                height={{ base: '62vh', md: '100%' }}
                w={{ sm: '100%', md: '45%', lg: '35%', xl: '30%' }}
                borderLeft={`2px solid ${colors.bodyBg[colorMode]}`}
              >
                <Livechat
                  entityId={id}
                  dataChat={[]}
                  onChangeChat={(e) => setOptionsState(e)}
                  onCloseChat={(e) => setlivechatState(!e)}
                />
              </Box>
            </Live>
            <LiveDetails>
              <Title>{livestream?.title}</Title>
              <Subtitle>{livestream?.description}</Subtitle>
            </LiveDetails>
          </>
        )}
      </Container>
    </>
  )
}

export { LivePostView }
