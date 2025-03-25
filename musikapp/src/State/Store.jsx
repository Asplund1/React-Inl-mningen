import { configureStore } from "@reduxjs/toolkit";
import playlistReducer from "../Features/PlaylistSlice";
import Themereducer from "../Features/ThemeSlice";

export const store = configureStore({
  reducer: {
    playlist: playlistReducer,
    theme: Themereducer,
  },
});
