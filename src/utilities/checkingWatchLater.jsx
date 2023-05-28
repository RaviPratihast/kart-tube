
export function checkingWatchLater(state, videoId) {
  return state.watchLater.find(
    (watchLaterVideo) => videoId === watchLaterVideo.id
  );
}
