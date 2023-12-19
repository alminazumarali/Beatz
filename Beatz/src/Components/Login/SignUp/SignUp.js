import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import './SignUp.scss'

function SignUp() {
  const navigate=useNavigate();
  const [formData,setFormData]=useState({
    nanoId:nanoid(),
    username:'',
    password:'',
    firstName:'',
    lastName:'',
    email:'',
    phNo:''
  })
  const handleSignUp = ()=>{
    navigate('/personalInfo',{state:formData})
  }
  const handleChange = (e)=>{
    const {name,value}=e.target;
    setFormData({...formData,[name]:value});
  }
  return (
    <div className='signUp'>
      <div className='forms-signUp'>
        <div className='signUp-txt'>
        SignUp
        </div>
        <form className='forms1-signUp'>
        <div className='content-signUp'>
            <label className='label-signUp'>UserName :</label>
            <input type="text" className='input-signUp' name='username' value={formData.username} onChange={handleChange} label='username'/>
        </div>
          <div className='content-signUp'>
            <label className='label-signUp'>First Name :</label>
            <input type="text" className='input-signUp' name='firstName' value={formData.firstName} onChange={handleChange} label='firstName'/>
          </div>
          <div className='content-signUp'>
            <label className='label-signUp'>Last Name :</label>
            <input type="text" className='input-signUp' name='lastName' value={formData.lastName} onChange={handleChange} label='lastName'/>
          </div>
          <div className='content-signUp'>
            <label className='label-signUp'>Password :</label>
            <input type="text" className='input-signUp' name='password' value={formData.password} onChange={handleChange} label='password'/>
          </div>
          <div className='content-signUp'>
            <label className='label-signUp'>Phone Number :</label>
            <input type="text" className='input-signUp' name='phNo' value={formData.phNo} onChange={handleChange} label='phNo'/>
          </div>
          <div className='content-signUp'>
            <label className='label-signUp'>Email :</label>
            <input type="text" className='input-signUp' name='email' value={formData.email} onChange={handleChange} label='email'/>
          </div>
          <button type='submit' onClick={handleSignUp} className='submit-btn'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default SignUp