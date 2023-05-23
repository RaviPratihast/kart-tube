import "tailwindcss/tailwind.css";
import React from "react";
// import imageSrc from "/public/images/comic.jpg";
import "../../index.css";

function Home() {
  return (
    <div className="flex flex-col  flex-wrap shadow-lg text-white bg-slate-950 border h-auto w-18">
      <div className=" flex justify-between items-center mx-auto my-6 ">
        {/* title and image */}
        <div className="flex flex-col justify-center items-center  w-1/2 h-full gap-4"></div>

        <div className="w-1/2">
          <h1 className="text-4xl">kartTube</h1>
          <button className="border h-8 w-32 hover:text-blue-600 bg-blue-600 hover:bg-white rounded-md">
            Explore More
          </button>
          <img
            className="h-full h-full object-cover"
            src="/public/images/comic.jpg"
            alt="galaxy"
          />
        </div>
      </div>
      <div className=" mx-auto my-6 border">
        {/* three divs that will have png or gif, which will played when hovered */}
        <div>222</div>
      </div>
    </div>
  );
}

export default Home;
