import React from "react";
import { Link } from "react-router-dom";
// import Button from "../button/button";

function VideoCard({ video }) {
  return (
    <div className="flex  flex-col w-56 h-56  rounded overflow-hidden shadow-lg">
      <Link to={`/video/${video.id}`}>
        <div className="">
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
        <div>
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
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
