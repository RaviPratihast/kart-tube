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

    default:
      return state; // Return the current state for unrecognized actions
  }
}

export default reducer;
