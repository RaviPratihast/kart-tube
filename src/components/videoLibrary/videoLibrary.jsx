import React from "react";
import ReactPlayer from "react-player";
function VideoLibrary({ video }) {
  return (
    <ReactPlayer url={video.src} controls={true} width="1118px" height="550px"/>
  );
}

export default VideoLibrary;
