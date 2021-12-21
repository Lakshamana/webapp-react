import React, { ReactElement } from "react";
import { Flex } from "@chakra-ui/react";
import { VideoBadge } from "components/atoms";
import videojs from "video.js";
import "video.js/dist/video-js.css"

import './facebook.css'
import './magnified.css'
import './rotten-tomatoes.css'
import './sunrise.css'
import './techskin.css'
import './twitch-tv.css'
import './twitter.css'
import './vsg.css'
import './youtube.css'
import './styles.css'
import { Icon } from "@iconify/react";

require('@silvermine/videojs-chromecast')(videojs);
require('videojs-vtt-thumbnails');

export const VideoJS = (props: any): ReactElement => {

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
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100%'
    }}>
      <Flex position={'absolute'} right={0} zIndex={100} flexDirection={'column'}>
        <VideoBadge kind={'social'}>
          <Icon icon="bx:bxl-telegram" color="white" width="21" height="24" />
        </VideoBadge>
        <VideoBadge kind={'social-end'}>
          <Icon icon="bx:bxs-share-alt" color="white" width="21" height="24" />
        </VideoBadge>
      </Flex>
      <div data-vjs-player>
        <video ref={videoRef} className={classes} style={{
          borderRadius: 0
        }} />
      </div>
    </div>
  );
}

export default VideoJS;