import { configureStore } from "@reduxjs/toolkit";
import musicReducer from "../Features/musicSlice";

export const store = configureStore({
  reducer: {
    music: musicReducer,
  },
});
