// @ts-nocheck
import { useCallback, useEffect, useState } from 'react'
import 'videojs-youtube'
const videoJS = require('video.js');

const VideoLivestream = (props: any) => {
  const [videoEl, setVideoEl] = useState(null)
  const onVideo = useCallback((el) => {
    setVideoEl(el)
  }, [])

  useEffect(() => {
    if (videoEl == null) return
    const player = videoJS(videoEl, props)
    return () => {
      player.dispose()
    }
  }, [props, videoEl])

  return (
    <>
      <h1>Implementation for Video JS Livestream</h1>
      <div data-vjs-player>
        <video ref={onVideo} className="video-js" playsInline />
      </div>
    </>
  )
}

export { VideoLivestream }
