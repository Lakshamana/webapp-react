import React, { ReactElement } from 'react'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'

import './skins/facebook.css'
import './skins/magnified.css'
import './skins/rotten-tomatoes.css'
import './skins/sunrise.css'
import './skins/techskin.css'
import './skins/twitch-tv.css'
import './skins/twitter.css'
import './skins/vsg.css'
import './skins/youtube.css'

import './skins/city.css'
import './skins/fanhero.css'
import './skins/fantasy.css'
import './skins/forest.css'
import './skins/sea.css'
import './skins/tech.css'
import './skins/tube.css'

import './styles.css'

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
    props?.skin ? `vjs-theme-${props.skin}` : 'vjs-theme-fanhero'
  } vjs-big-play-centered`

  return (
    <div data-vjs-player video-js vjs-fluid>
      <video ref={videoRef} className={classes} playsInline/>
    </div>
  )
}

export default VideoJS
