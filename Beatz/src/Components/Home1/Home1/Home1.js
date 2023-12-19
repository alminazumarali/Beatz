import React,{useState} from 'react'
import Title from '../Title/Title'
import { Outlet } from 'react-router-dom'
import './Home1.scss'

function Home1() {
  return (
    <div className='Home1-container'>
        <div className='home-title'>
            <Title/>
        </div>
        <div className='home-outlet'>
          <Outlet/>
        </div>
    </div>
  )
}

export default Home1    