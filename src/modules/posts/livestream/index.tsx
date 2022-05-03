import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Box, Flex } from '@chakra-ui/react'

import { useThemeStore, useCommonStore } from 'services/stores'
import { useMediaQuery } from '@chakra-ui/react'

import { Container, Text, Badge, Countdown, Skeleton } from 'components/atoms'
import { VideoPlayer } from 'components/molecules'
import { Livechat } from 'components/organisms'
import { VerifyContentKind } from '../components'
import { LiveDetails, Title, Subtitle, Live } from './style'
import { colors, sizes, breakpoints } from 'styles'

import { LivestreamBadge } from 'types/livestreams'
import { QUERY_LIVE_EVENT } from 'services/graphql'
import { stripHTML } from 'utils/helperFunctions'
import { LiveEvent, Status } from 'generated/graphql'
import { StatusBadge } from './utils'
import { Icon } from '@iconify/react'

const LivePostPage = () => {
  const { t } = useTranslation()
  const [liveBadge, setLiveBadge] = useState<LivestreamBadge>()
  const { colorMode } = useThemeStore()
  const { setPageTitle } = useCommonStore()
  const [livechatState, setlivechatState] = useState(true)
  const [userCount, setUserCount] = useState<number>(1)
  const [isVerifyingAccessPermission, setIsVerifyingAccessPermission] =
    useState<boolean>(true)

  const { slug } = useParams<{ slug: string }>()
  const [livestream, setLivestream] = useState<LiveEvent>()
  const [isDesktop] = useMediaQuery(`(min-width: ${breakpoints.sm})`)

  const { loading } = useQuery(QUERY_LIVE_EVENT, {
    variables: { slug },
    onCompleted: (result) => setLivestream(result.liveEvent),
  })
  const isLive = livestream?.status === Status.Live
  const isScheduled = livestream?.status === Status.Scheduled
  const isFinished = livestream?.status === Status.Finished

  useEffect(() => {
    if (livestream) {
      setPageTitle(livestream?.title)
      setLiveBadge(
        StatusBadge(livestream?.status || Status.Scheduled, colorMode)
      )
    }
    // eslint-disable-next-line
  }, [livestream])

  if (isVerifyingAccessPermission)
    return (
      <VerifyContentKind
        contentSlug={slug}
        contentType={'live'}
        accessGranted={() => setIsVerifyingAccessPermission(false)}
      />
    )

  if (loading)
    <Box p={sizes.paddingSm} width="100%">
      <Skeleton kind="cards" numberOfCards={4} />
    </Box>

  return (
    <Container
      flexDirection={'column'}
      justifyContent="center"
      alignItems="center"
    >
      <Live>
        <Box
          position="relative"
          backgroundColor={'black'}
          height={{ base: '30vh', md: '100%' }}
          w={{ sm: '100%', md: '55%', lg: '65%', xl: '70%' }}
        >
          <Flex
            gridGap={1}
            m={isDesktop ? 4 : 2}
            position={'absolute'}
            zIndex={999}
            justifyContent="flex-start"
          >
            <Badge background={liveBadge?.color} color="white">
              {liveBadge?.label}
            </Badge>
            <Badge background={colors.inputBg.dark} color="white">
              <Text mr={1}>{userCount}</Text>
              <Icon icon="mdi:account"></Icon>
            </Badge>
          </Flex>
          {isLive && livestream && (
            <VideoPlayer
              isLiveStream={true}
              src={livestream?.hlsPlaybackUrl || ''}
            />
          )}
          {(isScheduled || isFinished) && (
            <Countdown
              eventStartDate={livestream?.scheduledStartAt}
              fallbackMessage={
                isScheduled
                  ? t('page.post.live.will_start_soon')
                  : t('page.post.live.ended')
              }
            />
          )}
        </Box>
        <Box
          height={{ base: '62vh', md: '100%' }}
          w={{ sm: '100%', md: '45%', lg: '35%', xl: '30%' }}
          borderLeft={`2px solid ${colors.bodyBg[colorMode]}`}
        >
          {livestream && (
            <Livechat
              entityId={livestream?.id}
              onCloseChat={(e) => setlivechatState(!e)}
            />
          )}
        </Box>
      </Live>
      <LiveDetails>
        <Title>{stripHTML(livestream?.title!)}</Title>
        <Subtitle>{stripHTML(livestream?.description!)}</Subtitle>
      </LiveDetails>
    </Container>
  )
}

export { LivePostPage }
