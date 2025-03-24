import { configureStore } from "@reduxjs/toolkit";
import musicReducer from "../Features/musicSlice";
import Themereducer from "../Features/ThemeSlice";

export const store = configureStore({
  reducer: {
    music: musicReducer,
    theme: Themereducer,
  },
});
