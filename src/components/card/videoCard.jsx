import React from "react";

function VideoCard({ video }) {
  return (
    <div className=" h-80 w-64 flex flex-col">
      <div className="border flex-grow">
        <img
          src={video.thumbnail}
          alt="random"
          className="w-full h-full object-cover"
        />
      </div>
      <div className=" flex-shrink">

        <h4>{video.title}</h4>
        {/* Additional content */}
      </div>
    </div>
  );
}

export default VideoCard;
