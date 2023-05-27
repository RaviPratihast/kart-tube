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
          return <VideoCard key={video.id} video={video}>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-blue-500 cursor-pointer"
            onClick={() => console.log("clicked")}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          </VideoCard>;
        })}
      </div>
    </div>
  );
}

export default Explore;
