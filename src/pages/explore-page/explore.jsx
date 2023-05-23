import React from "react";
import { Link } from "react-router-dom";
// import ReactPlayer from "react-player";
// import VideoLibrary from "../../components/videoLibrary/videoLibrary";

import { useVideo } from "../../context/video-context/video-context";
import VideoCard from "../../components/card/videoCard";

function Explore() {
  const { state } = useVideo();
  return (
    <div className="flex flex-wrap gap-5">
      {state.initialVideo.map((video) => {
        return (
          <Link key={video.id} to={`/video/${video.id}`}>
            <VideoCard video={video} />
          </Link>
        );
        //  return <VideoLibrary key={video.id} video={video}/>
      })}
    </div>
  );
}

export default Explore;
