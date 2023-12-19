import {createSlice} from '@reduxjs/toolkit'
const initialState= {songs:[]}
const SongSlice=createSlice({
    name:'SongSlice',
    initialState,
    reducers:{
        AddSongs:(state,action)=>{
            state.songs.push(action.payload)
        },
        DeleteSong:(state,action)=>{

        }
    }
})
export const {AddSongs,DeleteSong}=SongSlice.actions;
export default SongSlice.reducer