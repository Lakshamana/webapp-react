import React, { ReactElement } from 'react'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'

import './blue.css'
import './facebook.css'
import './flow.css'
import './magnified.css'
import './nuevo.css'
import './pinko.css'
import './rotten-tomatoes.css'
import './shaka.css'
import './styles.css'
import './sunrise.css'
import './techskin.css'
import './treso.css'
import './twitch-tv.css'
import './twitter.css'
import './vsg.css'
import './youtube.css'

require('@silvermine/videojs-chromecast')(videojs)
require('videojs-vtt-thumbnails')

export const VideoJS = (props: any): ReactElement => {
  const videoRef = React.useRef(null)
  const playerRef: any = React.useRef(null)
  const { options, onReady } = props

  React.useEffect(() => {
    // make sure Video.js player is only initialized once
    if (!playerRef.current) {
      const videoElement = videoRef.current
      if (!videoElement) return

      const player = videojs(videoElement, options, () => {
        onReady && onReady(player)
      })

      playerRef.current = player
    }

    if (playerRef.current) {
      const player = playerRef.current
      player.autoplay(options.autoplay)
      player.src(options.sources)
    }
    // eslint-disable-next-line
  }, [options])

  // Dispose the Video.js player when the functional component unmounts
  React.useEffect(() => {
    return () => {
      if (playerRef.current) {
        playerRef.current?.dispose()
        playerRef.current = null
      }
    }
  }, [])

  const classes = `video-js ${
    props?.skin ? `${props.skin}-skin` : 'vjs-default-skin'
  } vjs-big-play-centered`

  return (
    <div data-vjs-player>
      <video ref={videoRef} className={classes} />
    </div>
  )
}

export default VideoJS
