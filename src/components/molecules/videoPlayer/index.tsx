import '@silvermine/videojs-chromecast/dist/silvermine-videojs-chromecast.css'
import axios from 'axios'
import { Modal as ContinueModal } from 'components'
import VideoJS from 'components/molecules/videoJs'
import { configEnvs } from 'config/envs'
import { memo, ReactElement, useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { saveData } from 'services/storage'
import {
  PlayerEventName,
  useAuthStore,
  useChannelsStore,
  useCustomizationStore,
  useOrganizationStore,
  useVideoPlayerStore
} from 'services/stores'
import videoJsContribQualityLevels from 'videojs-contrib-quality-levels'
import videoJsHlsQualitySelector from 'videojs-hls-quality-selector'
import 'videojs-mux'
import overlay from 'videojs-overlay'
import 'videojs-overlay/dist/videojs-overlay.css'
import videoJsVttThumbnails from 'videojs-vtt-thumbnails'
import 'videojs-vtt-thumbnails/dist/videojs-vtt-thumbnails.css'

import { SHOW_NEXT_VIDEO_IN, VIDEO_MUTED, VIDEO_VOLUME } from 'config/constants'
import { getDefaultConfigs } from './settings'
import { VideoPlayerProps } from './types'

const VideoPlayerComponent = ({
  src,
  title,
  isLiveStream,
  subtitle,
  vttSrc,
  poster,
  overlays,
  muxConfig,
  options,
  isMuted,
  setVolumeValue,
  videoId,
  categoryId,
  post_type,
  video_duration,
  tracks,
}: VideoPlayerProps): ReactElement => {
  const playerRef: any = useRef(null)
  const { t } = useTranslation()
  const [watchingPosition, setWatchingPosition] = useState({
    showModal: false,
    position: 0,
    ended: false,
  })
  const { account, isAnonymousAccess, user } = useAuthStore()
  const { activeChannelConfig } = useCustomizationStore()
  const setEventUpdate = useVideoPlayerStore((state) => state.setEventUpdate)
  const setRemainingTime = useVideoPlayerStore(
    (state) => state.setRemainingTime
  )
  const { organization } = useOrganizationStore()
  const { activeChannel } = useChannelsStore()

  // TODO: Change to env-config
  const ANALYTICS_API = process.env.REACT_APP_ANALYTICS_API

  const defaultOptions = getDefaultConfigs(
    src,
    muxConfig,
    account?.id,
    videoId,
    categoryId,
    title,
    subtitle,
    isLiveStream ? 'livestream' : 'onDemand',
    video_duration,
    post_type,
    organization?.id,
    activeChannel?.id,
    organization?.web_url?.[0]
  )

  const sendContinueWatchingData = (currentTime: number) => {
    if (!isAnonymousAccess && !isLiveStream) {
      axios.post(`${ANALYTICS_API}/watching`, {
        orgId: organization?.id,
        channelId: activeChannel?.id,
        videoDuration: video_duration,
        userId: user?.id,
        currentTime,
        videoId,
      })
    }
  }

  const handlePlayerReady = (player: any) => {
    playerRef.current = player

    player?.on('dispose', () => {
      player?.registerPlugin('qualityLevel', videoJsContribQualityLevels)
      player?.registerPlugin('hlsQualitySelector', videoJsHlsQualitySelector)
      player?.registerPlugin('overlay', overlay)
      player?.registerPlugin('vttThumbnails', videoJsVttThumbnails)
    })

    player?.on('ready', async () => {
      setEventUpdate(PlayerEventName.EVENT_READY)
      if (setVolumeValue) player.volume(setVolumeValue)
      if (!isAnonymousAccess && !isLiveStream && activeChannel?.id) {
        try {
          const URL_PARAMS = `?userId=${user?.id}&channelId=${activeChannel.id}&videoId=${videoId}`
          const lastPosition = await axios.get(
            `${ANALYTICS_API}/watching${URL_PARAMS}`
          )
          const position = lastPosition?.data?.position
          if (position && position !== 0) {
            return setWatchingPosition({
              showModal: true,
              position,
              ended: false,
            })
          }
          setWatchingPosition({ ...watchingPosition, showModal: false })
        } catch (error) {
          setWatchingPosition({ ...watchingPosition, showModal: false })
        }
      } else {
        // player?.play()
      }

      player?.chromecast()

      const fanheroButton = player?.controlBar.addChild('button')
      fanheroButton.controlText(
        configEnvs?.playerLogo?.altText || 'Visit fanhero site'
      )
      player.controlBar.el(fanheroButton.el())
      const buttonDom = fanheroButton.el()
      buttonDom.setAttribute(
        'style',
        'width: 3rem; margin-right: 1em; margin-left: 1em;'
      )
      buttonDom.innerHTML = `<img src=${
        configEnvs?.playerLogo?.image ?? '/logo-fh.png'
      } />`
      buttonDom.onclick = function () {
        window.open(
          `${configEnvs?.playerLogo?.link || 'https://fanhero.tv/'}`,
          '_blank'
        )
      }

      player.overlay({ overlays: [...(overlays || [])] })
      if (vttSrc) {
        player.vttThumbnails({
          src: vttSrc,
          showTimestamp: true,
        })
      }
    })

    player?.qualityLevels().on('addqualitylevel', function (event: any) {
      const qualityLevel = event.qualityLevel
      qualityLevel.enabled = qualityLevel.bitrate >= 1579131
    })
    player?.on('ended', () => {
      async function continueWatchingEnded() {
        const URL_PARAMS = `?userId=${user?.id}&channelId=${activeChannel?.id}&videoId=${videoId}`
        await axios.delete(`${ANALYTICS_API}/watching${URL_PARAMS}`)
      }
      if (!isAnonymousAccess && !isLiveStream) {
        continueWatchingEnded()
        setWatchingPosition({ ...watchingPosition, ended: true })
      }
      setEventUpdate(PlayerEventName.EVENT_ENDED)
    })
    player?.on('volumechange', () => {
      const newVolumeValue = player.volume()
      saveData(VIDEO_VOLUME, newVolumeValue)
      const defineIsMuted = player.muted()
      saveData(VIDEO_MUTED, defineIsMuted)
    })

    let lastCurrent = 0
    player?.on('timeupdate', () => {
      const remainingTime = Math.round(player.remainingTime())
      const isRemainingTime =
        Boolean(remainingTime) && remainingTime < SHOW_NEXT_VIDEO_IN
      setRemainingTime(isRemainingTime)

      const currentTime = Math.trunc(player.currentTime())
      if (
        currentTime % 5 === 0 &&
        currentTime !== lastCurrent &&
        !watchingPosition.ended
      ) {
        lastCurrent = currentTime
        sendContinueWatchingData(player.currentTime())
      }
    })

    player?.on('seeked', () => {
      sendContinueWatchingData(player.currentTime())
      setEventUpdate(PlayerEventName.EVENT_SEEKED)
    })
    player?.on('error', () => setEventUpdate(PlayerEventName.EVENT_ERROR))
    player?.on('play', () => setEventUpdate(PlayerEventName.EVENT_PLAY))
    player?.on('pause', () => setEventUpdate(PlayerEventName.EVENT_PAUSE))
    player?.on('progress', () => {
      const playerDuration = player?.duration()
      const playerCurrentTime = player?.currentTime()
      const playerBuffered = player?.buffered()
      if (playerDuration > 0) {
        for (let i = 0; i < playerBuffered.length; i++) {
          if (
            playerBuffered.start(playerBuffered.length - 1 - i) <
            playerCurrentTime
          ) {
            const buffer =
              (playerBuffered.end(playerBuffered.length - 1 - i) * 100) /
              playerDuration
            setEventUpdate(PlayerEventName.EVENT_BUFFER, buffer)
            break
          }
        }
      }
    })
  }

  useEffect(() => {
    if (!watchingPosition.showModal) {
      // playerRef.current?.play()
    }
  }, [watchingPosition])

  const closeModal = () =>
    setWatchingPosition({ ...watchingPosition, showModal: false })

  const continueAction = () => {
    playerRef.current?.currentTime(watchingPosition.position)
    closeModal()
  }
  const continueCancel = () => {
    playerRef.current?.currentTime(0)
    sendContinueWatchingData(0)
    closeModal()
  }

  if (!src) return <></>

  return (
    <>
      <ContinueModal
        onConfirm={continueAction}
        onClose={continueCancel}
        isOpen={watchingPosition.showModal}
        isCentered
        closeButton
        title={t('page.post.modal.continue_watching')}
        subtitle={t('page.post.modal.continue_subtitle')}
        actionButton
        actionLabel={t('page.post.modal.continue_action_label')}
        cancelButton
        cancelLabel={t('page.post.modal.continue_cancel_label')}
      />
      <VideoJS
        options={{
          ...defaultOptions,
          muted: isMuted,
          ...(isLiveStream ? { playbackRates: [] } : {}),
          ...(isLiveStream ? { liveui: true } : {}),
          ...options,
          tracks,
        }}
        islivestream
        skin={activeChannelConfig?.PLAYER?.SKIN}
        onReady={handlePlayerReady}
      />
    </>
  )
}

export const VideoPlayer = memo(VideoPlayerComponent)
