import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import {
  Home,
  Explore,
  VideoDetails,
  Playlist,
  WatchLater,
  Liked,
  History,
  Login,
} from "./pages/index-pages";
import Button from "./components/button/button";
// import {Header,Navbar} from "./components/index-components"
import "./index.css";

function App() {
  function getActiveStyle({ isActive }) {
    return {
      color: isActive ? "white" : "black",
    };
  }
  return (
    <div className="App">
      <nav className=" bg-blue-500 flex w-screen h-20 justify-between gap-2 items-center fixed inset-0">
        <div className="w-1/2 ml-5 p-2 flex items-center gap-4 text-lg">
          <div className="font-bold text-xl">
            <NavLink style={getActiveStyle} to="/">
              KartTube
            </NavLink>
          </div>
          <NavLink style={getActiveStyle} to="/explore">
            Explore
          </NavLink>
          <NavLink style={getActiveStyle} to="/playlist">
            Playlist
          </NavLink>
          <NavLink style={getActiveStyle} to="/watch-later">
            Watch Later
          </NavLink>
          <NavLink style={getActiveStyle} to="/Liked">
            Liked
          </NavLink>
          <NavLink style={getActiveStyle} to="/History">
            History
          </NavLink>
        </div>
        <div className="flex w-1/2 justify-between mr-3">
          {/* <div className="w-5/6 space-x-2">
            <input type="text" placeholder="Search.." />
            <button type="submit">Search</button>
          </div> */}
          <div className="w-1/2 flex justify-center items-center p-2 bg-white rounded">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-2 pr-2 outline-none"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
          <div className="w-1/6">
            <Button>Login</Button>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/video/:videoId" element={<VideoDetails />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/watch-later" element={<WatchLater />} />
        <Route path="/liked" element={<Liked />} />
        <Route path="/history" element={<History />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
