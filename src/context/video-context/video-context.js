import {
  createContext,
  useContext,
  useReducer,
  //   useState,
  //   useEffect,
} from "react";
import videos from "../../userData/userData";
import reducer from "../../reducer/reducer";

// creating the context
const VideoContext = createContext(null);

// using the context abstracting it from the normal user.
const useVideo = () => useContext(VideoContext);

let initialState = {
  initialVideo: videos,
  liked: [],
  watchLater: [],
  playlists: [],
};

const VideoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <VideoContext.Provider value={{ state, dispatch }}>
      {children}
    </VideoContext.Provider>
  );
};

export { VideoProvider, useVideo };
