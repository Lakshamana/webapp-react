import { VideoPlayer } from 'components'
import { VIDEO_MUTED, VIDEO_VOLUME } from 'config/constants'
import { Post } from 'generated/graphql'
import { useEffect, useState } from 'react'
import { getData } from 'services/storage'
import { buildUrlFromPath } from 'utils/helperFunctions'
import { AlertNextVideo } from './AlertNextVideo'
import { Video } from './style'

const VideoPost = ({ ...postData }: Post) => {
  const definePlayerVolume = getData(VIDEO_VOLUME)
  const [mediaUrl, setMediaUrl] = useState('')

  const definePlayerIsMuted = getData(VIDEO_MUTED)

  const videoUrl = () => {
    const { media } = postData || {}
    const hlsPath = media?.__typename === 'MediaVideo' ? media.hlsPath : null
    if (!media || !hlsPath) {
      return ''
    }
    return buildUrlFromPath(media?.baseUrl!, hlsPath, 'https')
  }

  const getCategoryId = (post: Post) => {
    if (post && post.categories) {
      return post.categories
        .map((el) => {
          return el.id
        })
        .join(',')
    }
    return ''
  }

  useEffect(() => {
    setMediaUrl(videoUrl())
    //eslint-disable-next-line
  }, [postData])

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
      />
      <AlertNextVideo />
    </Video>
  )
}

export { VideoPost }
