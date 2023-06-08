import React from "react";
import { toast } from "react-toastify";
import Button from "../../components/button/button";
import { useNavigate, Link } from "react-router-dom";
import { useVideo } from "../../context/video-context/video-context";

function Playlist() {
  const navigate = useNavigate();
  const { state, dispatch } = useVideo();
  function handleClick() {
    navigate("/explore");
  }
  return (
    <div className="flex h-screen flex-col ">
      <div className=" flex flex-col  mt-28 w-full h-full ">
        <div className=" shadow-lg h-20 w-60 flex flex-col justify-center items-center border border-blue-500 rounded-md ml-10">
          <h3>Playlists:{state.playlists.length}</h3>
        </div>
        <div className=" flex  items-center mt-20 mx-10">
          {state.playlists.length === 0 ? (
            <div className="flex justify-center w-full mx-auto">
              <div className="border shadow-lg h-60 w-auto p-20 flex flex-col justify-center items-center gap-2 rounded-md  border-blue-500">
                <h2 className="flex flex-col text-lg">
                  Your Playlist is Empty !
                </h2>
                <Button onClick={handleClick}>Watch Now</Button>
              </div>
            </div>
          ) : (
            <div className="flex flex-wrap gap-2 justify-start items-center mx-3">
              {state.playlists.map((playlist) => {
                return (
                  <div
                    key={playlist.id}
                    className=" rounded overflow-hidden shadow-lg flex-col w-72 h-20"
                  >
                    <div className=" bg-blue-500 h-1/2">
                      <Link
                        to={`/playlistDetail/${playlist.id}`}
                        className="h-full"
                      >
                        <div className="h-full"></div>
                      </Link>
                    </div>
                    <div className="flex justify-between  p-2">
                      <h3 className="">{playlist.playlistName}</h3>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 cursor-pointer"
                        onClick={() => {
                          dispatch({
                            type: "REMOVE_PLAYLIST",
                            payload: playlist.id,
                          });
                          toast.success("Playlist Removed");
                        }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Playlist;
