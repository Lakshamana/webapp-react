import React, { ReactElement } from "react";
import videojs from "video.js";

import './facebook.css'
import './magnified.css'
import './rotten-tomatoes.css'
import './sunrise.css'
import './techskin.css'
import './twitch-tv.css'
import './twitter.css'
import './vsg.css'
import './youtube.css'

require('@silvermine/videojs-chromecast')(videojs);
require('videojs-vtt-thumbnails');

export const VideoJS = ( props: any ): ReactElement => {

  const videoRef = React.useRef(null);
  const playerRef: any = React.useRef(null);
  const { options, onReady } = props;

  React.useEffect(() => {
    // make sure Video.js player is only initialized once
    if (!playerRef.current) {
      const videoElement = videoRef.current;
      if (!videoElement) return;

      const player = videojs(videoElement, options, () => {
        onReady && onReady(player);
      });

      playerRef.current = player
    }

    if (playerRef.current) {
      // you can update player here [update player through props]
      // const player = playerRef.current;
      // player.autoplay(options.autoplay);
      // player.src(options.sources);
    }
  }, [options]);

  // Dispose the Video.js player when the functional component unmounts
  React.useEffect(() => {
    return () => {
      if (playerRef.current) {
        playerRef.current?.dispose();
        playerRef.current = null;
      }
    };
  }, []);

  const classes = `video-js ${props?.skin || 'vjs-default-skin'} vjs-big-play-centered`

  return (
    <div data-vjs-player>
      <video ref={videoRef} className={classes} />
    </div>
  );
}

export default VideoJS;