import React from "react";

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
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Watch Later
          </button>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
