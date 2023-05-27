import "tailwindcss/tailwind.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/button";
// import imageSrc from "/public/images/comic.jpg";
import "../../index.css";

function Home() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/explore");
  }
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="   h-auto w-1/2 p-2 mt-48 flex gap-10 justify-center items-center  rounded-md  mx-10">
        <div className=" p-3 w-3/2 h-full flex flex-col justify-center items-center">
          <div className=" w-3/2  p-4 gap-2">
            <h1 className="flex flex-col text-3xl font-bold ">kartTube</h1>
            <p className="mt-2 text-justify">
              "Explore, Discover, and Unwind with kartTube - Your Ultimate Video
              Library"
            </p>
          </div>
          <div className=" w-full h-auto flex justify-end p-2">
            <Button onClick={handleClick}>Watch Now</Button>
          </div>
        </div>
        <div className="">
          <img
            src="/image/undraw_video_streaming_re_v3qg.svg"
            alt="media player"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
