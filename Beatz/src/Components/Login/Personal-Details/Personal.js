import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './personal.scss';
import { storage } from '../../Firebase'; 
import {ref,uploadBytes,getDownloadURL,listAll} from 'firebase/storage'
import {v4} from 'uuid'

function Personal() {
    const navigate = useNavigate();
    const location = useLocation();
    const userData = location.state;
    const [formData, setFormData] = useState({
        ...userData,
        displayName: "",
        bio: "",
        imageUrl:"",
        coverUrl:""
    });
    const [coverData,setCoverData]=useState(null);
    const [imageData,setImageData]=useState(null);

    const sendDataToBackend = async() => {
        await formData
        console.log(formData)
        const formConfig = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        try {
            console.log("before form data");
            const response = await axios.post('http://192.168.1.122:8081/user/signup', formData, formConfig);
            if (response.status === 200) {
                console.log("formData sent");
                if(response===null){
                    alert("userName already exists")
                    navigate("/signUp")
                }
            }else {
                console.log("data not sent");
            }
            navigate("/signIn");
        } catch (error) {
            console.log(error);
        }
    }

    const handleInfo = async (e) => {
        e.preventDefault();
        console.log(formData);
        console.log(imageData);
        if(imageData)
        {
            const imageRef = ref(storage, `images/${imageData.name + v4()}`);
            console.log(imageRef);
            try {
                await uploadBytes(imageRef, imageData);
                alert("File uploaded");
                const url = await getDownloadURL(imageRef);
                console.log(url);
                await setFormData((prevData) => ({
                  ...prevData,
                  imageUrl: url
                }));
            } catch (error) {
                console.error("Error uploading file:", error);
              }
        }
        if(coverData){
        const coverImageRef = ref(storage, `images/${coverData.name + v4()}`);
        console.log(coverImageRef);
        try{
          await uploadBytes(coverImageRef,coverData);
          const coverUrl=await getDownloadURL(coverImageRef);
          await setFormData((prevData) => ({
            ...prevData,
            coverUrl: coverUrl
          }));
        } catch (error) {
            console.error("Error uploading file:", error);
          }}
        //   sendDataToBackend();
      };
      
      useEffect(() => {
        console.log(formData);
        if (formData.imageUrl && formData.coverUrl) {
            sendDataToBackend();
        }
    }, [formData.imageUrl, formData.coverUrl]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        console.log("handle change in form", formData);
    };
    return (
        <div className='personal'>
            <div className='forms-personal'>
                <div className='personal-txt'>
                    Personal Info
                </div>
                <form className='forms1-personal' onSubmit={handleInfo}>
                    <div className='content-personal'>
                        <label className='label-personal'>Display Name:</label>
                        <input type="text" className='input-personal' value={formData.displayName} onChange={handleChange} name='displayName' />
                    </div>
                    <div className='content-personal'>
                        <label className='label-personal'>Bio:</label>
                        <input type="text" className='input-personal' value={formData.bio} onChange={handleChange} name='bio' />
                    </div>
                    <div className='content-personal'>
                        <label className='label-personal'>Profile Pic:</label>
                        <input type="file" className='input-personal' onChange={(event)=>{setImageData(event.target.files[0])}} name='image' />
                    </div>
                    <div className='content-personal'>
                        <label className='label-personal'>Cover Pic:</label>
                        <input type="file" className='input-personal' onChange={(event)=>{setCoverData(event.target.files[0])}} name='image1' />
                    </div>
                    <button type='submit' className='submit-btn'>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Personal;
