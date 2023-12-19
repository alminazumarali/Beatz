import React, { useState } from 'react'
import './Library.scss'
import LibCards from '../../Common/Cards/LibCards/LibCards'
import Profile from '../../../Images/profilepic1.jpg'

function Library() {
  const [playlist,setPlaylist]=useState({playlistName:"my playlist",playlistProfile:Profile})
  return (
    <div className='lib-container'>
      <div className='lib-title'>
        Library
      </div>
      <div className='lib-content'>
      {/* {playlists[0].map((playlist) => (
            <LibCards key={playlist.id} playlist={playlist} />
          ))} */}
      </div>
    </div>
  )
}

export default Library