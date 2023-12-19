import React from 'react'
// import SpotifyGif from '../styles/spotify.gif';
import './dashboard.scss';
import { Outlet } from 'react-router-dom';

function Dashboard() {
    return (
        // <div className='dashboard'>
        //     <div className='gif'>
        //         {/* <img className='image' src={SpotifyGif} alt='spotify'/> */}
        //     </div>
        //     <div className='outlet'>
        //         <Outlet/>
        //     </div>
        // </div>


        <div className='dashboard'>
            <section className='section-dash'>
                <div className='div1'></div>
                <div className='div2'></div>
                <div className='div3'></div>
                <div className='div4'></div>
                <div className='div5'></div>
                <div className='div6'></div>
                <div className='content1'>
                    <Outlet/>
                </div>
            </section>
        </div>


        // <div className='dashboard'>
        //     {/* <div className='div1'></div>
        //     <div className='div2'></div>
        //     <div className='div3'></div> */}
        //     <div className='no-white-back'>
        //         <div className='text'>Purple</div>
        //     </div>
        // </div>


    )
}

export default Dashboard