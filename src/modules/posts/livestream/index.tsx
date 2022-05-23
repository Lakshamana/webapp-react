import { useState, useEffect } from 'react'
import { Icon } from '@iconify/react'
import { useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Box, Flex } from '@chakra-ui/react'
import { useMediaQuery } from '@chakra-ui/react'

import { useThemeStore, useCommonStore } from 'services/stores'

import { collection, query, onSnapshot } from 'firebase/firestore'
import { firebaseDB } from 'config/firebase'

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

const LivePostPage = () => {
  const { t } = useTranslation()
  const [liveBadge, setLiveBadge] = useState<LivestreamBadge>()
  const { colorMode } = useThemeStore()
  const { setPageTitle } = useCommonStore()
  const [isVerifyingAccessPermission, setIsVerifyingAccessPermission] =
    useState<boolean>(true)

  // snapshots
  const [hlsPlaybackUrl, setHlsPlaybackUrl] = useState<string>('')
  const [isCommentsEnabled, setIsCommentsEnabled] = useState<Maybe<boolean>>(null)
  const [isReactionsEnabled, setIsReactionsEnabled] = useState<Maybe<boolean>>(null)
  const [isPresenceEnabled, setIsPresenceEnabled] = useState<Maybe<boolean>>(null)
  const [userCount, setUserCount] = useState<number>(1)
  const [liveStatus, setLiveStatus] = useState<Maybe<Status>>(null)

  const { slug } = useParams<{ slug: string }>()
  const [livestream, setLivestream] = useState<LiveEvent>()
  const [isDesktop] = useMediaQuery(`(min-width: ${breakpoints.sm})`)

  const { loading } = useQuery(QUERY_LIVE_EVENT, {
    variables: { slug },
    onCompleted: (result) => setLivestream(result.liveEvent),
  })

  const isLive = liveStatus === Status.Live
  const isScheduled = liveStatus === Status.Scheduled
  const isFinished = liveStatus === Status.Finished

  const liveCollection = collection(
    firebaseDB,
    `livestream/${livestream?.id}/control`
  )

  const liveQuery = query(liveCollection)

  useEffect(() => {
    const liveUnsubscriber = onSnapshot(liveQuery, (snapshot) => {
      snapshot.forEach((doc) => {
        const updatedLiveSnapshot = doc.data()

        for (const [key, value] of Object.entries(updatedLiveSnapshot)) {
          switch (key) {
            case 'hlsPlaybackUrl':
              hlsPlaybackUrl !== value && setHlsPlaybackUrl(value)
              break
            case 'isCommentsEnabled':
              isCommentsEnabled !== value && setIsCommentsEnabled(value)
              break
            case 'isReactionsEnabled':
              isReactionsEnabled !== value && setIsReactionsEnabled(value)
              break
            case 'isPresenceEnabled':
              isPresenceEnabled !== value && setIsPresenceEnabled(value)
              break
            case 'count':
              userCount !== value && setUserCount(value)
              break
            case 'status':
              liveStatus !== value && setLiveStatus(value)
              break
          }
        }
      })
    })

    if (livestream) {
      setPageTitle(livestream?.title)
    }

    // Unsubscribe on unmount to avoid a memory leak
    return () => {
      liveUnsubscriber()
    }
    // eslint-disable-next-line
  }, [livestream])

  useEffect(() => {
    if (liveStatus) setLiveBadge(StatusBadge(liveStatus, colorMode))
    // eslint-disable-next-line
  }, [liveStatus])

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
            {liveStatus && (
              <Badge background={liveBadge?.color} color="white">
                {liveBadge?.label}
              </Badge>
            )}
            {isPresenceEnabled && (
              <Badge background={colors.inputBg.dark} color="white">
                <Text mr={1}>{userCount}</Text>
                <Icon icon="mdi:account"></Icon>
              </Badge>
            )}
          </Flex>
          {isLive && hlsPlaybackUrl && (
            <VideoPlayer isLiveStream={true} src={hlsPlaybackUrl} />
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
              isCommentsEnabled={isCommentsEnabled || livestream.commentsEnabled || false}
              isReactionsEnabled={isReactionsEnabled || livestream.reactionsEnabled || false}
              entityId={livestream?.id}
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
