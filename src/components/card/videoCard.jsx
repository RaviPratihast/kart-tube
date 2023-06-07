import React from "react";
import { Link } from "react-router-dom";
import { useVideo } from "../../context/video-context/video-context";

// import Button from "../button/button";

function VideoCard({ video, children }) {
  const { dispatch } = useVideo();
  return (
    <div className="flex  flex-col w-56 h-56  rounded overflow-hidden shadow-lg">
      <Link to={`/video/${video.id}`}>
        <div
          className=""
          onClick={() => dispatch({ type: "ADD_TO_HISTORY", payload: video })}
        >
          <img
            src={video.thumbnail}
            alt="Video Thumbnail"
            className="w-full h-auto"
          />
        </div>
      </Link>

      <div className="flex  justify-between bg-white mx-2 mt-2">
        <div className="mb-2">
          <h2 className="text-sm">{video.title}</h2>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default VideoCard;
