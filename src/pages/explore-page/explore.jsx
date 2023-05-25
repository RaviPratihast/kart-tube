import React from "react";
import { Link } from "react-router-dom";
// import ReactPlayer from "react-player";
// import VideoLibrary from "../../components/videoLibrary/videoLibrary";

import { useVideo } from "../../context/video-context/video-context";
import VideoCard from "../../components/card/videoCard";

function Explore() {
  const { state } = useVideo();
  return (
    <div className="flex flex-wrap flex-4 justify-start items-start gap-5  mt-10 mb-10 mx-36  ">
      {state.initialVideo.map((video) => {
        return (
          
            <div>
              <VideoCard video={video} />
            </div>
        );
        //  return <VideoLibrary key={video.id} video={video}/>
      })}
    </div>
  );
}

export default Explore;
