import {configureStore,getDefaultMiddleware} from '@reduxjs/toolkit';
import UserSlice from '../slices/UserSlice';
import userAuth from '../slices/userAuth';
import SongSlice from '../slices/SongSlice'
import playerSlice from '../slices/playerSlice'

export const store=configureStore({
    reducer:{
        auth:UserSlice,
        authAction:userAuth,
        song:SongSlice,
        player:playerSlice
    },
})