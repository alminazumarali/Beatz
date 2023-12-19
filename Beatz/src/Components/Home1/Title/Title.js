import React,{useState,useEffect} from 'react'
import Logo from '../../../Images/Logo/Logo-beatz.png'
import { IoIosSearch } from "react-icons/io";
import './title.scss'
import Profile from '../../../Images/profilepic2.jpg'
import { RiArrowDropDownLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import {useSelector} from 'react-redux'
import Upload from '../Upload/Upload'
import Popup from 'reactjs-popup';
import ReactModal from 'react-modal'
import axios from 'axios';

function Title({ onUploadClick }) {
    const navigate=useNavigate();
    const user = useSelector((state) => state.auth.user);
    const [isDropDownVisible,setDropDownVisible]=useState(false);
    const [imageSrc, setImageSrc] = useState(null);
    const [isPopupOpen, setPopupOpen] = useState(false);
    
    const DropDown=()=>{
        setDropDownVisible(!isDropDownVisible);
    }
    const handleDropDown=(e)=>{
        setDropDownVisible(false);
        if(e.target.value=='edit1')
        {
            navigate("edit");
        }
    }
    
    useEffect(() => {
        const imageUrl = `http://192.168.1.122:8081/user/image/${user.nanoId}/${user.name}`;
        fetch(imageUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'image/jpeg',
            },
            })
            .then((response) => {
                if (!response.ok) {
                throw new Error('Network response was not ok');
                }
                console.log(response.data)
                return response.blob();
            })
            .then((blob) => {
                const imageUrl = URL.createObjectURL(blob);
                setImageSrc(imageUrl);
            })
            .catch((error) => {
                console.error('Error fetching image:', error);
            });
        }, []);
        const uploadData=(SongData,SongFileData)=>{
            console.log(SongData)
            sendDataToBackend(SongData,SongFileData);
        }
        const sendDataToBackend = async (SongData,SongFileData) => {
            console.log(SongData,SongFileData)
            const formConfig = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };
            const imageConfig = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            };
            try{
                const response=await axios.post('http://192.168.1.122:8081/songList/addSongDetails',SongData,formConfig)
                if(response!=null)
                {
                    console.log("song data is sent")
                    console.log(SongData.nanoSongId)
                }
                else{
                    console.log(response)
                    console.log("song data not sent")
                }
                console.log(SongFileData,SongData.nanoSongId)
                const response1=await axios.post(`http://192.168.1.122:8081/songList/addSong/${SongData.nanoSongId}`,SongFileData,imageConfig)
                if(response1!=null)
                {
                    console.log("image data sent")
                }
                else{
                    console.log("image data not sent")
                }
        } catch (error) {
            console.log(error);
        }}
        const handleClosePopup=()=>{
            setPopupOpen(false)
       }
       const handleOpenPopup=()=>{
           console.log("open")
           setPopupOpen(true)
       }
  return (
    <div className='Title-Home1'>
        <div className='logo-home1'>
            <img className='Logo-image' src={Logo} alt='image'/>
        </div>
        <div className='search-cont'>
            <div className='search-home1' onClick="handleChange">
                <IoIosSearch/>
                <p>Search here</p>
            </div>
        </div>
        <div className='lib-upload-home1'>
            <button className='My-lib button1' >My Library</button>
            <button className='Upload button1' onClick={handleOpenPopup}>Upload</button>
                {isPopupOpen&&<Upload uploadData={uploadData} handleClosePopup={handleClosePopup}/>}
        </div>
        <div className='profile-home1'>
            <button onClick={DropDown} className='home1-dropdown'>
            {imageSrc ? (
            <img className='profile-pic' src={imageSrc} alt="Profile" />
          ) : (
            <img className='profile-pic' src={Profile} alt="Default Profile" />
          )}
                <RiArrowDropDownLine/>
            </button>
            {isDropDownVisible && (
                    <div className='dropdown1'>
                        <ul className='dropdown'>
                            <button className='edit-btn' value="edit1" onClick={handleDropDown}>Edit</button>
                            {/* <Button className='edit-btn' value="create1" onClick={handleAddSong}>Sign Out</Button> */}
                        </ul>
                    </div>
                )}
        </div>
    </div>
  )
}

export default Title