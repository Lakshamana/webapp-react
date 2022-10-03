import { VideoPlayer } from 'components'
import { VIDEO_MUTED, VIDEO_VOLUME } from 'config/constants'
import { Post } from 'generated/graphql'
import { useEffect, useState } from 'react'
import { getData } from 'services/storage'
import { buildUrlFromPath } from 'utils/helperFunctions'
import { AlertNextVideo } from './components/AlertNextVideo'
import { Video } from './style'

const VideoPost = ({ ...postData }: Post) => {
  const [mediaUrl, setMediaUrl] = useState<string>('')
  const definePlayerVolume = getData(VIDEO_VOLUME)
  const definePlayerIsMuted = getData(VIDEO_MUTED)

  const videoUrl = () => {
    const { media } = postData || {}
    const hlsPath = media?.__typename === 'MediaVideo' ? media.hlsPath : null
    if (!media || !hlsPath) return ''
    return buildUrlFromPath(media?.baseUrl!, hlsPath, 'https')
  }

  const getTracks = () => {
    const { media } = postData || {}
    if(media?.['subtitles']) {
      return media?.['subtitles'].map((item)=>({
        src: `${media.baseUrl}/${item.vttPath}`,
        kind: 'captions',
        srclang: item.locale,
        label: item.label
      }))
    }
    return []
  }

  const getCategoryId = (post: Post) => {
    if (post && post.categories) {
      return post.categories.map((el) => el.id).join(',')
    }
    return ''
  }

  // eslint-disable-next-line
  useEffect(() => setMediaUrl(videoUrl()), [postData])

  return (
    <Video>
      <VideoPlayer
        isLiveStream={false}
        src={mediaUrl}
        title={postData?.title}
        subtitle={postData?.description}
        isMuted={definePlayerIsMuted}
        setVolumeValue={definePlayerVolume}
        videoId={postData?.id}
        categoryId={getCategoryId(postData)}
        post_type={postData?.type}
        video_duration={postData?.media?.['duration']}
        tracks={getTracks()}
      />
      <AlertNextVideo />
    </Video>
  )
}

export { VideoPost }
