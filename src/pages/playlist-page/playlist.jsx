import React from "react";
import Button from "../../components/button/button";

function Playlist() {
  return (
    <div className="flex h-screen flex-col">
      <div className=" flex flex-col  mt-28 w-full h-full ">
        <div className=" shadow-lg h-20 w-60 flex flex-col justify-center items-center border border-blue-500 rounded-md ml-10">
          {/* count of playlist */}
          <h3>Playlists: 3</h3>
        </div>
        <div className=" flex justify-center items-center mt-20">
          {/* playlists */}
          <div className="border shadow-lg h-60 w-auto p-20 flex flex-col justify-center items-center gap-2 rounded-md  border-blue-500">
            <h2 className="flex flex-col text-lg">Your Playlist is Empty !</h2>
            <Button>Watch Now</Button>
          </div>

          {/* div with same above style, inside this div there will be added playlist, first the playlist will be created. */}
        </div>
      </div>
    </div>
  );
}

export default Playlist;
