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
      <nav className="border-0 bg-blue-500 flex w-full h-20 justify-between items-center fixed">
        <div className="w-2/3 ml-5 space-x-4">
          <NavLink style={getActiveStyle} to="/">
            KartTube
          </NavLink>
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
        <div className="flex  w-1/2 justify-between ">
          <div className="w-5/6 space-x-2">
            <input type="text" placeholder="Search.." />
            <button type="submit">Search</button>
          </div>
          <div className="w-1/6">
            <button>Login</button>
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
