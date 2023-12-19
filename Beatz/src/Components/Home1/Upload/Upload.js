import React,{useEffect,useState} from 'react'
import { nanoid } from '@reduxjs/toolkit';
import { IoIosClose } from "react-icons/io";
import {useSelector} from 'react-redux'

function Upload({uploadData,handleClosePopup}) {
    const user = useSelector((state) => state.auth.user);
    const [SongData,setSongData]=useState({nanoId:user.nanoId,nanoSongId:nanoid(),songTitle:'',artist:''})
    const [SongFileData,setSongFileData]=useState({song:null,image:null})
    const handleSongChange=(e)=>{
    const {name,value}=e.target;
    setSongData({...SongData,[name]:value})
    }
    const handleFileChange=(event)=>{
    const {name}=event.target;
    const file=event.target.files[0];

    setSongFileData({...SongFileData,[name]:file})
    }
    const handleUpload=(e)=>{
        e.preventDefault();
        console.log(SongData);
        console.log(SongFileData)
        uploadData(SongData,SongFileData)
        // window.close();
    }
    const handleClose = () => {
        handleClosePopup()
    };
    
  return (
    <div className='upload-container'>
        <div className='upload-cont'>
            <div className='close-popup'>
                <button className='close' onClick={handleClose}><IoIosClose /></button>
            </div>
            <div className='title-upload'>
                    Add Song
                </div>
            <form className='upload-content'>
                <input className='inputbox' type='text' name='songTitle' value={SongData.songTitle} onChange={handleSongChange} placeholder='Song Name'/>
                <input className='inputbox' type='text' name='artist' value={SongData.artist} onChange={handleSongChange} placeholder='Artists'/>
                <div className='file-upload'>
                    <label>Song Profile</label>
                    <input className='input-box' type='file' name='image' onChange={handleFileChange} placeholder='Song Profile'/>
                </div>
                <div className='file-upload'>
                    <label>Song</label>
                    <input className='input-box' type='file' name='song' onChange={handleFileChange} placeholder='Song'/>
                </div>
                <div>
                    <button className='upload-btn' onClick={handleUpload}>Upload</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Upload