import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Box, Flex } from '@chakra-ui/react'

import { useThemeStore } from 'services/stores/theme'

import { Container, Text, Badge, Countdown, Skeleton } from 'components/atoms'
import { VideoPlayer } from 'components/molecules'
import { Livechat } from 'components/organisms'
import { LiveDetails, Title, Subtitle, Live } from './style'
import { colors, sizes } from 'styles'

import { LivestreamBadge } from 'types/livestreams'

const LivePostPage = () => {
  const { t } = useTranslation()
  const [optionsState, setOptionsState] = useState()
  const [liveBadge, setLiveBadge] = useState<LivestreamBadge>()
  const { colorMode } = useThemeStore()
  const [livechatState, setlivechatState] = useState(true)
  const { id } = useParams<{ channel: string; id: string }>()
  const [livestream, setLivestream] = useState<any>()

  // const { data, loading } = useQuery(QUERY_LIVESTREAM, {
  //   variables: {
  //     id: id,
  //   },
  //   onCompleted: (result) => {
  //     setLivestream(result.livestream)
  //   },
  // })
  const loading = false
  const isLive = livestream?.status === 'active'

  const statusBadge = (status: any): LivestreamBadge => {
    const Badge = {
      ACTIVE: { label: 'LIVE', color: colors.brand.live_badges.live },
      SCHEDULED: { label: 'UPCOMING', color: colors.brand.live_badges?.upcoming },
      PREPARING: { label: 'UPCOMING', color: colors.brand.live_badges?.upcoming },
      default: { label: 'UPCOMING', color: colors.brand.primary[colorMode] },
    }

    return Badge[status] || Badge.default
  }
  useEffect(() => {
    setLiveBadge(statusBadge(livestream?.status || 'scheduled'))
    // eslint-disable-next-line
  }, [livestream])

  const renderVideoPlayer = () => (
    <VideoPlayer isLiveStream={true} src={livestream?.hlsPlaybackUrl || ''} />
  )

  const renderCountdown = () => (
    <Countdown
      eventStartDate={livestream?.scheduledStartAt}
      fallbackMessage={t('page.post.live.will_start_soon')}
    ></Countdown>
  )

  return (
    <Container
      flexDirection={'column'}
      justifyContent="center"
      alignItems="center"
    >
      {loading && (
        <Box p={sizes.paddingSm} width="100%">
          <Skeleton kind="cards" numberOfCards={4} />
        </Box>
      )}
      {!loading && (
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
            {isLive ? renderVideoPlayer() : renderCountdown()}
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
      )}
      {!loading && (
        <LiveDetails>
          <Title>{livestream?.title}</Title>
          <Subtitle>{livestream?.description}</Subtitle>
        </LiveDetails>
      )}
    </Container>
  )
}

export { LivePostPage }
