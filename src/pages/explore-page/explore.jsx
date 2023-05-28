import React from "react";
import { Link } from "react-router-dom";
// import ReactPlayer from "react-player";
// import VideoLibrary from "../../components/videoLibrary/videoLibrary";

import { useVideo } from "../../context/video-context/video-context";
import VideoCard from "../../components/card/videoCard";
import { checkingWatchLater } from "../../utilities/checkingWatchLater";

function Explore() {
  const { state, dispatch } = useVideo();
  return (
    <div className="flex flex-wrap items-center ">
      <div className="flex flex-wrap justify-start mx-10 mt-28 mb-5 gap-1  border-slate-800 ">
        {state.initialVideo.map((video) => {
          const isAddedToWatchLater = checkingWatchLater(state, video.id);
          return (
            <VideoCard key={video.id} video={video}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={isAddedToWatchLater ? "#f1f5f9" : "none"}
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke={isAddedToWatchLater ? "#3b82f6" : "currentColor"}
                // stroke={isAddedToWatchLater ? "#3b82f6" : "currentColor"}
                className="w-6 h-6 cursor-pointer"
                onClick={() =>
                  isAddedToWatchLater
                    ? dispatch({
                        type: "REMOVE_FROM_WATCH_LATER",
                        payload: video,
                      })
                    : dispatch({
                        type: "ADD_TO_WATCH_LATER",
                        payload: video,
                      })
                }
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </VideoCard>
          );
        })}
      </div>
    </div>
  );
}

export default Explore;
