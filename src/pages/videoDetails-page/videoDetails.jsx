import React from "react";
import { useParams } from "react-router-dom";
import { useVideo } from "../../context/video-context/video-context";
import VideoLibrary from "../../components/videoLibrary/videoLibrary";
function VideoDetails() {
  const { videoId } = useParams();
  const { state } = useVideo();
  return (
    <div>
      {state.initialVideo.map(
        (video) =>
          video.id === videoId && (
            <div key={video.id}>
              <VideoLibrary video={video} />
            </div>
          )
      )}
    </div>
  );
}

export default VideoDetails;
