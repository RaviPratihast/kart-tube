function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_LIKED":
      if (
        state.liked.some((likedVideo) => likedVideo.id === action.payload.id)
      ) {
        return state;
      } else {
        return {
          ...state,
          liked: [...state.liked, action.payload],
        };
      }
    case "REMOVE_FROM_LIKED":
      return {
        ...state,
        liked: state.liked.filter(
          (likedVideo) => likedVideo.id !== action.payload.id
        ),
      };
    case "ADD_TO_WATCH_LATER":
      if (
        state.watchLater.some(
          (watchLaterVideo) => watchLaterVideo.id === action.payload.id
        )
      ) {
        return state;
      } else {
        return {
          ...state,
          watchLater: [...state.watchLater, action.payload],
        };
      }
    case "REMOVE_FROM_WATCH_LATER":
      return {
        ...state,
        watchLater: state.watchLater.filter(
          (watchLaterVideo) => watchLaterVideo.id !== action.payload.id
        ),
      };
    case "CREATE_PLAYLIST":
      return {
        ...state,
        playlists: [...state.playlists, action.payload],
      };
    case "ADD_TO_PLAYLIST":
      const isPlaylistPresent = state.playlists.find(
        (statePlaylist) =>
          statePlaylist.playlistName === action.payload.playlistName
      );
      const videoThatisTobeAdded = state.initialVideo.find(
        (singleVideo) => singleVideo.id === action.payload.videoId
      );

      const updatedPlaylist = {
        ...isPlaylistPresent,
        videos: [...isPlaylistPresent.videos, videoThatisTobeAdded],
      };

      return {
        ...state,
        playlists: state.playlists.map((playlist) =>
          playlist.playlistName === action.payload.playlistName
            ? updatedPlaylist
            : playlist
        ),
      };
    case "REMOVE_FROM_PLAYLIST":
      const { playlistName, videoId } = action.payload;
      const updatedPlaylists = state.playlists.map((playlist) => {
        if (playlist.playlistName === playlistName) {
          const updatedVideos = playlist.videos.filter(
            (video) => video.id !== videoId
          );
          return {
            ...playlist,
            videos: updatedVideos,
          };
        }
        return playlist;
      });
      return {
        ...state,
        playlists: updatedPlaylists,
      };
    case "REMOVE_PLAYLIST":
      return {
        ...state,
        playlists: state.playlists.filter(
          (playlist) => playlist.id !== action.payload
        ),
      };
    case "ADD_TO_HISTORY":
      return {
        ...state,
        history: state.history.some(
          (historyVideo) => historyVideo.id === action.payload.id
        )
          ? state.history
          : [...state.history, action.payload],
      };
    case "REMOVE_FROM_HISTORY":
      return {
        ...state,
        history: state.history.filter(
          (historyVideo) => historyVideo.id !== action.payload
        ),
      };
    case "REMOVE_ALL_HISTORY":
      return {
        ...state,
        history: [],
      };
    case "SEARCH_VIDEO":
      return {
        ...state,
        initialVideo: state.originalData.filter((video) =>
          video.title.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };
    // case "SET_DEFAULT_VALUE_OF_VIDEOS":
    //   return {
    //     ...state,
    //     initialVideo: state.originalData,
    //   };

    default:
      return state; // Return the current state for unrecognized actions
  }
}

export default reducer;
