import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import {
  Home,
  Explore,
  Playlist,
  WatchLater,
  Liked,
  History,
} from "./pages/index-pages";
// import {Header,Navbar} from "./components/index-components"
import "./App.css";

function App() {
  function getActiveStyle({ isActive }) {
    return {
      color: isActive ? "blue" : "black",
    };
  }
  return (
    <div className="App">
      <nav>
        <NavLink style={getActiveStyle} to="/">
          Home
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
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/watch-later" element={<WatchLater />} />
        <Route path="/liked" element={<Liked />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </div>
  );
}

export default App;
