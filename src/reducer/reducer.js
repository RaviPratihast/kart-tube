function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_LIKED":
      // Perform logic to add the video to the liked object
      console.log("Adding to liked:", action.payload);
      // return {
      //   ...state, // Spread the current state
      //   liked: [...state.liked, action.payload], // Add the video to the liked array
      // };

      if (
        state.liked.some((likedVideo) => likedVideo.id === action.payload.id)
      ) {
        return state;
      } else {
        return {
          ...state, // Spread the current state
          liked: [...state.liked, action.payload], // Add the video to the liked array
        };
      }
    case "REMOVE_FROM_LIKED":
      return {
        ...state,
        liked: state.liked.filter(
          (likedVideo) => likedVideo.id !== action.payload.id
        ),
      };

    // Handle other action types here
    default:
      return state; // Return the current state for unrecognized actions
  }
}

export default reducer;
