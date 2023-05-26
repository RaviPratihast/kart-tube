import React from 'react'
import Button from '../../components/button/button'

function Liked() {
  return (
  
    <div className=" flex flex-col  mt-28 w-full h-full ">
      <div className=" shadow-lg h-20 w-60 flex flex-col justify-center items-center border border-blue-500 rounded-md ml-10">
        {/* count of playlist */}
        <h3>Liked: 3</h3>
      </div>
      <div className="m-20 flex justify-center items-center">
        {/* playlists */}
        <div className="shadow-lg h-60 w-auto p-20 flex flex-col justify-center items-center gap-2 rounded-md  border border-blue-500 ml-10">
          <h2 className="flex flex-col text-lg">Looks like you haven't liked anything yet.</h2>
          <Button>Watch Now</Button>
        </div>

        {/* div with same above style, inside this div there will be added playlist, first the playlist will be created. */}
      </div>
    </div>
  )
}

export default Liked