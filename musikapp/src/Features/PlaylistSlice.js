import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  songs: [],
};

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    addSongToPlaylist: (state, action) => {
      state.songs.push(action.payload);
    },
    removeSongFromPlaylist: (state, action) => {
      const songId = action.payload;
      state.songs = state.songs.filter((song) => song.id !== songId);
    },
    clearPlaylist: (state) => {
      state.songs = [];
    },
  },
});

export const { addSongToPlaylist, removeSongFromPlaylist, clearPlaylist } =
  playlistSlice.actions;

export default playlistSlice.reducer;
