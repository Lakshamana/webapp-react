import React from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

require('@silvermine/videojs-chromecast')(videojs);
require('videojs-vtt-thumbnails');

export const VideoJS = ( props: any ) => {

  const videoRef = React.useRef(null);
  const playerRef: any = React.useRef(null);
  const { options, onReady } = props;

  React.useEffect(() => {
    // make sure Video.js player is only initialized once
    if (!playerRef.current) {
      const videoElement = videoRef.current;
      if (!videoElement) return;

      const player = videojs(videoElement, options, () => {
        console.log("player is ready", player);
        onReady && onReady(player);
      });

      playerRef.current = player
    } else {
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

  return (
    <div data-vjs-player style={{ width: '120vh', height: '50vh' }}>
      <video ref={videoRef} className="video-js vjs-big-play-centered" />
    </div>
  );
}

export default VideoJS;