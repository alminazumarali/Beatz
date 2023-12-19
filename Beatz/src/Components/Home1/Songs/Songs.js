import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import SongsCards from '../../Common/Cards/SongsCards/SongsCards'
import './Songs.scss'
import Stream from '../Stream/Stream'

function Songs() {
  const data= useSelector((state)=>state.song.songs)
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const [playSong,setPlaySong]=useState(false)
  const [songId,setSongId]=useState(null)
  const handlePlaySong=(nanoSongId)=>{
    console.log("handling play song")
    setPlaySong(true)
    setSongId(nanoSongId)
  }
  return (
    <div className='songs-container'>
      <div className='title-song'>
        Songs
      </div>  
      {/* <div className='SongsContent'>
      {songs[0] ? (
        songs[0].map((song) => (
          <SongsCards key={song.id} song={song} onSongClick={handlePlaySong}/>
        ))
      ) : null}
      </div> */}
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song, i) => (
          <SongsCards
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </div>
      {/* <div className='songs-stream'>
        {playSong&&<Stream songId={songId}/>}
        dfjneijvier
      </div> */}
    </div>
  )
}

export default Songs