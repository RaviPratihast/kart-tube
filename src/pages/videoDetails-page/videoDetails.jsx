import React from "react";
import "@heroicons/react/solid";
import Button from "../../components/button/button";
import { useParams } from "react-router-dom";
import { useVideo } from "../../context/video-context/video-context";
import VideoLibrary from "../../components/videoLibrary/videoLibrary";
function VideoDetails() {
  const { videoId } = useParams();
  const { state } = useVideo();
  return (
    <div className="flex flex-col justify-center items-center w-full max-w-screen-lg mx-auto ">
      {state.initialVideo.map(
        (video) =>
          video.id === videoId && (
            <div key={video.id} className="m-20 mt-28">
              <div className="">
                <VideoLibrary video={video} />
              </div>
              <div className="flex  flex-col  text-slate">
                <div className="flex flex-col justify-between  between h-50 w-full">
                  <div className="flex  h-10 w-full mt-2">
                    <div className="flex justify-start items-center p-2 w-1/2">
                      <h2 className="">{video.title}</h2>
                    </div>
                    <div className="flex justify-between items-center   w-1/2 p-2">
                      <Button onClick={() => console.log("clicked")}>
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
                            d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                          />
                        </svg>
                        Like
                      </Button>
                      <Button onClick={() => console.log("clicked")}>
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
                      <Button onClick={() => console.log("clicked")}>
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
                            d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                          />
                        </svg>
                        Share
                      </Button>
                      <Button onClick={() => console.log("clicked")}>
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
                            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        Add To Playlist
                      </Button>
                    </div>
                  </div>
                  <div className="h-24 p-2 ">
                    <p>{video.description}</p>
                  </div>
                </div>
                {/* <p className="">{video.description}</p> */}
              </div>
            </div>
          )
      )}
    </div>
  );
}

export default VideoDetails;
