import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    currentSongs: [],
    currentIndex: 0,
    isActive: false,
    isPlaying: false,
    activeSong: {},
  };

  const playerSlice=createSlice({
    name:'player',
    initialState,
    reducers:{
        setActiveSong: (state, action) => {
        state.activeSong = action.payload.song;
        state.currentIndex=state.playload.i;
        state.currentSongs=state.payload.songs
        state.isActive=true;
        state.isPlaying=true;
        },
        playPause: (state, action) => {
            state.isPlaying = action.payload;
          },
    }
  })
  export const { setActiveSong,playPause }=playerSlice.actions
  export default playerSlice.reducer;