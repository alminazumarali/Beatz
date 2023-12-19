import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './signin.scss'
import axios from 'axios';
import { setUser } from '../../../slices/UserSlice';
import { AddSongs } from '../../../slices/SongSlice';
function SignIn() {
  
  const [formData,setFormData]=useState({username:'',password:''});
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const SendDataToBackend=async(data)=>{
    const config = {
      headers: {
          'Content-Type': 'application/json',
      },
    }
    try {
      console.log(data);
      const response = await axios.post(`http://192.168.1.122:8081/user/login/${data.username}/${data.password}`, config);
      console.log("login before")
      const userData=response.data;
      console.log(userData);
      if (response.status === 200 && userData) {
          dispatch(setUser(userData));
          navigate("/home1")
          }
      else {
          console.log("login failed")
          }
        }
      catch (error) {
          console.log(error)
      }
  }
  const handleSignIn=(e)=>{
    e.preventDefault();
    SendDataToBackend(formData);
  }
  const handleSubmit=(e)=>{
    const {name,value}=e.target;
    setFormData({...formData,[name]:value})
  }
  useEffect(() => {
    console.log("inside use effect")
    const headers = {
      'Content-Type': 'application/json',
    };
    const fetchSongFiles = async () => {
      try {
        console.log("inside try")
        const response1 = await axios.get('http://192.168.1.122:8081/songList/allSongsImages',headers);
        console.log("before dispatch")
        dispatch(AddSongs(response1.data));
      } catch (error) {
        console.error('Error fetching song files:', error);
      }
    };
    fetchSongFiles();
  }, [dispatch]);
  return (
    <div className='signIn'>
      <div className='forms-signIn'>
        <div className='signIn-txt'>
        Login
        </div>
        <form className='forms1-signIn' onSubmit={handleSignIn}>
          <div className='contents-signIn'>
            <label className='label-signIn'>UserName :</label>
            <input className='input-signIn' name='username' value={formData.username} onChange={handleSubmit} label='userName'/>
          </div>
          <div className='contents-signIn'>
            <label className='label-signIn'>Password :</label>
            <input className='input-signIn' name='password' value={formData.password} onChange={handleSubmit} label='password'/>
          </div>
          <button className='submit-btn'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default SignIn;