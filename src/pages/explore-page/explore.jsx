import React from "react";
import { Link } from "react-router-dom";
// import ReactPlayer from "react-player";
// import VideoLibrary from "../../components/videoLibrary/videoLibrary";

import { useVideo } from "../../context/video-context/video-context";
import VideoCard from "../../components/card/videoCard";

function Explore() {
  const { state } = useVideo();
  return (
    <div className="flex flex-wrap items-center ">
      <div className="flex flex-wrap justify-start mx-10 mt-28 mb-5 gap-1  border-slate-800 ">
        {state.initialVideo.map((video) => {
          return <VideoCard video={video} />;
        })}
      </div>
    </div>
  );
}

export default Explore;
