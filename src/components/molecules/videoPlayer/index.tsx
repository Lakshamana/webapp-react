import '@filmgardi/videojs-collect-data'
import '@silvermine/videojs-chromecast/dist/silvermine-videojs-chromecast.css'
import axios from 'axios'
import { Modal as ContinueModal } from 'components'
import VideoJS from 'components/molecules/videoJs'
import { memo, ReactElement, useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ThumborInstanceTypes, useThumbor } from 'services/hooks/useThumbor'
import { saveData } from 'services/storage'
import { useAuthStore, useChannelsStore, useCustomizationStore, useOrganizationStore, useVideoPlayerStore } from 'services/stores'
import { useThemeStore } from 'services/stores/theme'
import videoJsContribQualityLevels from 'videojs-contrib-quality-levels'
import videoJsHlsQualitySelector from 'videojs-hls-quality-selector'
import 'videojs-mux'
import overlay from 'videojs-overlay'
import 'videojs-overlay/dist/videojs-overlay.css'
import 'videojs-vr'
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
  video_duration
}: VideoPlayerProps): ReactElement => {
  const playerRef: any = useRef(null)
  const { t } = useTranslation()
  const [watchingPosition, setWatchingPosition] = useState({ showModal: false, position: 0 })
  const { account, isAnonymousAccess, user } = useAuthStore()
  const { activeChannelConfig, organizationConfig } = useCustomizationStore()
  const { colorMode } = useThemeStore()
  const setEndedVideo = useVideoPlayerStore((state) => state.setEndedVideo)
  const setRemainingTime = useVideoPlayerStore((state) => state.setRemainingTime)
  const { generateImage } = useThumbor()
  const { organization } = useOrganizationStore()
  const { activeChannel } = useChannelsStore()

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

  const generateOrgChannelLogo = () => {
    if (!activeChannelConfig?.SETTINGS.DISPLAY_CHANNEL_LOGO && !organizationConfig?.IMAGES?.ORGANIZATION_LOGO) return ''
    const theme = colorMode?.toUpperCase()
    const defineSource = activeChannelConfig?.IMAGES?.CHANNEL_LOGO[theme] || organizationConfig?.IMAGES?.ORGANIZATION_LOGO[theme]
    return generateImage(
      ThumborInstanceTypes.IMAGE,
      defineSource,
      { size: { height: 60 } }
    )
  }

  const handlePlayerReady = (player: any) => {
    playerRef.current = player

    player?.on('dispose', () => {
      player?.registerPlugin('qualityLevel', videoJsContribQualityLevels)
      player?.registerPlugin('hlsQualitySelector', videoJsHlsQualitySelector)
      player?.registerPlugin('overlay', overlay)
      player?.registerPlugin('vttThumbnails', videoJsVttThumbnails)
    })

    //TODO: Elaborate task (FH/Brado maybe?)
    // const fanheroButton = player?.controlBar.addChild('button')
    // fanheroButton.controlText('Visit Fanhero site!');
    // player.controlBar
    //   .el()
    //   .insertBefore(
    //     fanheroButton.el(),
    //     player.controlBar.getChild('playToggle').el()
    //   );
    // const buttonDom = fanheroButton.el();
    // buttonDom.setAttribute('style', 'width: 3rem; margin-right: 1em;')
    // buttonDom.innerHTML = "<img src='/logo-fh.png' />";
    // buttonDom.onclick = function () {
    //   window.open('https://fanhero.tv/', '_blank')
    // }

    player?.on('ready', async () => {
      if (setVolumeValue) player.volume(setVolumeValue)
      if (!isAnonymousAccess && !isLiveStream) {
        try {
          const lastPosition = await axios.get(`${ANALYTICS_API}/watching/${videoId}/${user?.id}`)
          const position = lastPosition?.data?.position
          if (position) return setWatchingPosition({ showModal: true, position })
          setWatchingPosition({ ...watchingPosition, showModal: false })
        } catch (error) {
          setWatchingPosition({ ...watchingPosition, showModal: false })
        }
      } else {
        player?.play()
      }

      player.chromecast()

      // TODO: Elaborate task
      const Watermark = {
        start: 'playing',
        end: 'ended',
        attachToControlBar: true,
        showBackground: false,
        content: `<img src="${generateOrgChannelLogo()}" />`,
        align: 'bottom-right'
      }

      player.overlay({ overlays: [...(overlays || []), Watermark] })
      if (vttSrc) {
        player.vttThumbnails({
          src: vttSrc,
          showTimestamp: true,
        })
      }
      // player.vr({
      //   projection: 'AUTO',
      //   debug: true,
      //   forceCardboard: false
      // })
    })

    player?.qualityLevels().on('addqualitylevel', function (event) {
      const qualityLevel = event.qualityLevel
      qualityLevel.enabled = qualityLevel.bitrate >= 1579131
    })
    player?.on('ended', () => {
      //TODO: clear last watching
      setEndedVideo(true)
    })
    player?.on('volumechange', () => {
      const newVolumeValue = player.volume()
      saveData(VIDEO_VOLUME, newVolumeValue)
      const defineIsMuted = player.muted()
      saveData(VIDEO_MUTED, defineIsMuted)
    })
    player?.on('timeupdate', () => {
      const remainingTime = Math.round(player.remainingTime())
      const isRemainingTime =
        Boolean(remainingTime) && remainingTime < SHOW_NEXT_VIDEO_IN
      setRemainingTime(isRemainingTime)
    })

    const defineEndpoint = {
      name: 'Analytics Watching',
      method: 'POST',
      url: `${ANALYTICS_API}/watching`,
    }
    const defineBody = {
      currentTime: player.currentTime(),
      remainingTime: player.remainingTime(),
      orgId: organization?.id,
      channelId: activeChannel?.id,
      videoDuration: video_duration,
      postId: videoId,
      userId: user?.id
    }
    const collectDataOption = {
      intervalTime: 166,
      action: { ...defineEndpoint, body: { params: { ...defineBody } } },
      altAction: [{ ...defineEndpoint, body: { params: { ...defineBody } } }]
    }
    if (!isAnonymousAccess && !isLiveStream) {
      player.collectData(collectDataOption)
    }
  }

  useEffect(() => {
    if (!watchingPosition.showModal) {
      playerRef.current?.play()
    }
  }, [watchingPosition])

  const closeModal = () => setWatchingPosition({ ...watchingPosition, showModal: false })

  const continueAction = () => {
    playerRef.current?.currentTime(watchingPosition.position)
    closeModal()
  }
  const continueCancel = () => {
    playerRef.current?.currentTime(0)
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
          ...(isLiveStream ? { playbackRates: undefined } : {}),
          ...(isLiveStream ? { liveui: true } : {}),
          ...options,
        }}
        islivestream
        skin={activeChannelConfig?.PLAYER?.SKIN}
        onReady={handlePlayerReady}
      />
    </>
  )
}

export const VideoPlayer = memo(VideoPlayerComponent)
