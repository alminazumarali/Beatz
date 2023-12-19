import {createSlice } from '@reduxjs/toolkit';
const initialState={user:null};

const UserSlice=createSlice({
    name:'UserSlice',
    initialState: {
        user: null,
    },
    reducers: {
            setUser: (state, action) => {
                state.user = action.payload;
                console.log(action.payload)
            },
            clearUser: (state) => {
                state.user = null;
            },
        }
    });
export const {setUser,clearUser}=UserSlice.actions;
export default UserSlice.reducer;
