import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    songs: [
      // Exempeldata – ersätt med din egen datakälla om du vill.
      { title: "Shape of You", artist: "Ed Sheeran" },
      { title: "Blinding Lights", artist: "The Weeknd" },
      { title: "Dance Monkey", artist: "Tones and I" },
      { title: "Rolling in the Deep", artist: "Adele" },
    ],
    filteredSongs: [
      { title: "Shape of You", artist: "Ed Sheeran" },
      { title: "Blinding Lights", artist: "The Weeknd" },
      { title: "Dance Monkey", artist: "Tones and I" },
      { title: "Rolling in the Deep", artist: "Adele" },
    ],
  };
  
  export const musicSlice = createSlice({
    name: "music",
    initialState,
    reducers: {
      setSongs: (state, action) => {
        state.songs = action.payload;
        state.filteredSongs = action.payload;
      },
      filterSongs: (state, action) => {
        state.filteredSongs = state.songs.filter(song =>
          song.title.toLowerCase().includes(action.payload.toLowerCase())
        );
      },
    },
  });
  
  export const { setSongs, filterSongs } = musicSlice.actions;
  export default musicSlice.reducer;