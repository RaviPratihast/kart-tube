import React, { useState } from "react";
import { Routes, Route, NavLink, useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
import {
  Home,
  Explore,
  VideoDetails,
  Playlist,
  PlaylistDetail,
  WatchLater,
  Liked,
  History,
  Login,
  SignUp,
} from "./pages/index-pages";
import Button from "./components/button/button";
import { useVideo } from "./context/video-context/video-context";
// import {Header,Navbar} from "./components/index-components"
import "./index.css";
// import { useAuth } from "./context/auth-context";
import RequiresAuth from "./requiresAuth";
import { useAuth } from "./context/auth-context/auth-context";

function App() {
  const navigate = useNavigate();
  // const { loggedIn, setLoggedIn } = useAuth();
  const { state, dispatch } = useVideo();
  const { stateAuth, dispatchAuth } = useAuth();
  const [search, setSearch] = useState("");
  function getActiveStyle({ isActive }) {
    return {
      color: isActive ? "white" : "black",
    };
  }

  function handleClick(event) {
    if (event.target.innerHTML === "Logout") {
      dispatchAuth({ type: "USER_LOGOUT" });
      navigate("/login");
    }
    if (event.target.innerHTML === "Login") {
      navigate("/login");
    }
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
          <div className="w-1/2 flex justify-center items-center p-2 bg-white rounded">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-2 pr-2 outline-none"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 cursor-pointer"
              onClick={() =>
                dispatch({ type: "SEARCH_VIDEO", payload: search })
              }
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
          <div className="w-1/6">
            <Button onClick={handleClick}>
              {stateAuth.loggedIn ? "Logout" : "Login"}
            </Button>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/video/:videoId" element={<VideoDetails />} />
        <Route
          path="/playlist"
          element={
            <RequiresAuth>
              <Playlist />
            </RequiresAuth>
          }
        />
        <Route
          path="playlistDetail/:playlistDetailId"
          element={<PlaylistDetail />}
        />
        <Route
          path="/watch-later"
          element={
            <RequiresAuth>
              <WatchLater />
            </RequiresAuth>
          }
        />
        <Route
          path="/liked"
          element={
            <RequiresAuth>
              <Liked />
            </RequiresAuth>
          }
        />
        <Route
          path="/history"
          element={
            <RequiresAuth>
              <History />
            </RequiresAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

      {/* <ToastContainer /> */}
    </div>
  );
}

export default App;
