import { useLazyQuery } from '@apollo/client'
import { Box, Flex, Text, useMediaQuery } from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

import { useCommonStore, useThemeStore } from 'services/stores'

import { firebaseDB } from 'config/firebase'
import { collection, onSnapshot, query } from 'firebase/firestore'

import { Badge, Container, Countdown, Skeleton } from 'components/atoms'
import { VideoPlayer } from 'components/molecules'
import { Livechat } from 'components/organisms'
import { VerifyContentKind } from '../components'

import { breakpoints, colors, sizes } from 'styles'
import { Live, LiveDetails, Subtitle, Title } from './style'

import { LiveEvent, PostType, Status } from 'generated/graphql'
import { QUERY_LIVE_EVENT } from 'services/graphql'
import { LivestreamBadge } from 'types/livestreams'
import { FirebaseSession } from 'utils/firebaseSession'
import { stripHTML } from 'utils/helperFunctions'
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
  const [isCommentsEnabled, setIsCommentsEnabled] = useState<boolean>(false)
  const [isReactionsEnabled, setIsReactionsEnabled] = useState<boolean>(false)
  const [isPresenceEnabled, setIsPresenceEnabled] = useState<boolean>(false)
  const [userCount, setUserCount] = useState<number>(1)
  const [liveStatus, setLiveStatus] = useState<Maybe<Status>>(null)

  const { slug } = useParams<{ slug: string }>()
  const [livestream, setLivestream] = useState<LiveEvent>()
  const [isDesktop] = useMediaQuery(`(min-width: ${breakpoints.sm})`)

  const [getLiveEvent, { loading }] = useLazyQuery(QUERY_LIVE_EVENT, {
    onCompleted: (result) => {
      setLivestream(result.liveEvent)
      setIsCommentsEnabled(result.liveEvent?.commentsEnabled)
      setIsReactionsEnabled(result.liveEvent?.reactionsEnabled)
      setIsPresenceEnabled(result.liveEvent?.presenceEnabled)
      setLiveStatus(result.liveEvent?.status)
      setHlsPlaybackUrl(result.liveEvent?.hlsPlaybackUrl)
      setPageTitle(result.liveEvent?.title)
    },
  })

  const liveCollection = collection(
    firebaseDB,
    `livestream/${livestream?.id}/control`
  )

  const liveQuery = query(liveCollection)

  const isChatVisible = isCommentsEnabled || isReactionsEnabled

  const renderEndedLiveText = () => (
    <Flex
      direction="column"
      width="100%"
      height="100%"
      alignItems="center"
      justifyContent="center"
      position="absolute"
      margin="auto"
      padding={5}
    >
      <Text
        fontSize={{ base: '1.6rem', lg: '2.5rem', xl: '3rem' }}
        fontWeight="bold"
        color={'white'}
        textAlign="center"
      >
        {t('page.post.live.ended')}
      </Text>
    </Flex>
  )

  useEffect(() => {
    const liveUnsubscriber = onSnapshot(liveQuery, (snapshot) => {
      snapshot.forEach((doc) => {
        const updatedLiveSnapshot = doc.data()

        for (const [key, value] of Object.entries(updatedLiveSnapshot)) {
          switch (key) {
            case 'hlsPlaybackUrl':
              hlsPlaybackUrl !== value && setHlsPlaybackUrl(value)
              break
            case 'commentsEnabled':
              setIsCommentsEnabled(value)
              break
            case 'reactionsEnabled':
              setIsReactionsEnabled(value)
              break
            case 'presenceEnabled':
              setIsPresenceEnabled(value)
              break
            case 'count':
              setUserCount(value)
              break
            case 'status':
              liveStatus !== value && setLiveStatus(value)
              break
          }
        }
      })
    })

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

  useEffect(() => {
    if (!isVerifyingAccessPermission) {
      getLiveEvent({ variables: { slug } })
    }
    //eslint-disable-next-line
  }, [isVerifyingAccessPermission])

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
    <FirebaseSession idLivestream={livestream?.id}>
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
            w={
              isChatVisible
                ? { sm: '100%', md: '55%', lg: '65%', xl: '70%' }
                : '100%'
            }
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
            {liveStatus === Status.Live && hlsPlaybackUrl && (
              <VideoPlayer
                isLiveStream={true}
                src={hlsPlaybackUrl}
                title={livestream?.title}
                videoId={livestream?.id}
                categoryId={livestream?.category?.id}
                post_type={PostType.OnDemand}
              />
            )}
            {(liveStatus === Status.Scheduled ||
              liveStatus === Status.Ready) && (
              <Countdown
                eventStartDate={livestream?.scheduledStartAt}
                fallbackMessage={t('page.post.live.will_start_soon')}
              />
            )}
            {liveStatus === Status.Finished && renderEndedLiveText()}
          </Box>
          {isChatVisible && (
            <Box
              height={{ base: '62vh', md: '100%' }}
              w={{ sm: '100%', md: '45%', lg: '35%', xl: '30%' }}
              borderLeft={`2px solid ${colors.bodyBg[colorMode]}`}
            >
              {livestream && (
                <Livechat
                  isCommentsEnabled={isCommentsEnabled}
                  isReactionsEnabled={isReactionsEnabled}
                  entityId={livestream?.id}
                />
              )}
            </Box>
          )}
        </Live>
        <LiveDetails>
          <Title>{stripHTML(livestream?.title!)}</Title>
          <Subtitle>
            <div
              dangerouslySetInnerHTML={{
                __html: livestream?.description || '',
              }}
            />
          </Subtitle>
        </LiveDetails>
      </Container>
    </FirebaseSession>
  )
}

export { LivePostPage }
