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
        onReady && onReady(player);
      });

      playerRef.current = player
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
    <div data-vjs-player>
      <video ref={videoRef} className="video-js vjs-big-play-centered" />
    </div>
  );
}

export default VideoJS;