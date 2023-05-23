import React from "react";

function VideoCard({ video }) {
  return (
    <div className="border">
      <div className="border">
        <img src="/public/images/1520921-i-7befa2909186.webp" alt="random" />
      </div>
      <div className="border">
        <h4>{video.title}</h4>
      </div>
    </div>
  );
}

export default VideoCard;
