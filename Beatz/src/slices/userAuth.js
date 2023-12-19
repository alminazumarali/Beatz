import {createSlice} from '@reduxjs/toolkit';
const initialState={
    username:'',
    password:'',
    isAuthenticated:false,
};
const userAuth=createSlice({
    name:'auth',
    initialState,
    reducers:{
        setUsername:(state,action)=>{
            state.username=action.payload;
        },
        setPassword:(state,action)=>{
            state.password=action.payload;
        },
        setAuthenticated:(state,action)=>{
            state.isAuthenticated=action.payload;
        },
    },
});
export const {setUsername,setPassword,setAuthenticated}=userAuth.actions;
export default userAuth.reducer;