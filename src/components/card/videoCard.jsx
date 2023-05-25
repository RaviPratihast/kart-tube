import React from "react";
import Button from "../button/button";

function VideoCard({ video }) {
  return (
    <div className="flex flex-col rounded overflow-hidden shadow-lg">
      <div className="relative">
        <img
          src={video.thumbnail}
          alt="Video Thumbnail"
          className="w-full h-auto"
        />
      </div>
      <div className="flex  justify-between bg-white p-4">
        <div className="mb-2">
          <h2 className="text-lg font-bold">{video.title}</h2>
        </div>
        <div>
          {/* <button className=" flex  gap-1 bg-blue-500 border hover:border-blue-500 hover:bg-white text-white hover:text-blue-700 py-2 px-4 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Watch Later
          </button> */}
          <Button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Watch Later
          </Button>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
