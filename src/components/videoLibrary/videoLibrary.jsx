import React from "react";
import ReactPlayer from "react-player";
function VideoLibrary({ video }) {
  return (
    <ReactPlayer url={video.src} controls={true} width="800px" height="450px" />
  );
}

export default VideoLibrary;
