import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  songs: [], // En array av låt-objekt
};

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    addSongToPlaylist: (state, action) => {
      // action.payload är t.ex. { id: '123', title: 'Song Title', artist: 'Artist Name' }
      state.songs.push(action.payload);
    },
    removeSongFromPlaylist: (state, action) => {
      // action.payload är låtens id
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
