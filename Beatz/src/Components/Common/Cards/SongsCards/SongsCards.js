import React,{useState,useEffect} from 'react'
import { setActiveSong,playPause } from '../../../../slices/playerSlice'
import PlayPause from '../../PlayPause/playPause'
import Image from '../../../../Images/profilepic2.jpg'
// import './SongsCards.scss'
import Audio from '../../../../Images/heeriye.mp3'
import Stream from '../../../../Components/Home1/Stream/Stream'
import {useDispatch} from 'react-redux'

function SongsCards({ song, isPlaying, activeSong, data, i }) {
    console.log(song)
    const dispatch=useDispatch()
    const [songImageSrc, setSongImageSrc] = useState(null);
    const handlePauseClick = () => {
      dispatch(playPause(false));
    };
  
    const handlePlayClick = () => {
      dispatch(setActiveSong({ song, data, i }));
      dispatch(playPause(true));
    };
  //   const [playSong,setPlaySong]=useState(false);
  //   const [isPlaying, setIsPlaying] = useState(false);
  //   const handleButtonClick = () => {
  //   const audio = document.getElementById('audio');
  //   if (!audio) {
  //     return;
  //   }

  //   if (isPlaying) {
  //     audio.pause();
  //   } else {
  //     audio.play();
  //   }

  //   setIsPlaying(!isPlaying);
  // };
    // useEffect(() => {
    //     if (song && song.songImageData && song.songImageType) {
    //       const base64Image = `data:${song.songImageType};base64,${song.finalSongImage}`;
    //       console.log(base64Image)
    //       setSongImageSrc(base64Image);
    //       console.log(songImageSrc)
    //     }
    //   }, [song]);
    //   const StreamSong=(nanoId)=>{
    //     console.log("play song")
    //     onSongClick({nanoId})
    //   }
  return (
    // <button className='songCard-cont' onClick={() => StreamSong(song.nanoSongId)}>
    //     {/* {playSong? <Stream songId={song.nanoSongId}/>:null} */}
    //     <div className='song-profiles'>
    //         {songImageSrc && (
    //         <img className='song-image' src={songImageSrc} alt="Song Image" />)}
    //         {/* <img  src={Image} alt='image'/> */}
    //     </div>
    //     <div className='song-content'>
    //         <div className='song-name'>
    //             {song.songTitle}
    //         </div>
    //         <div className='song-artist'>
    //             {song.artist}
    //         </div>
    //         {/* <div>
    //         <button onClick={handleButtonClick}>
    //     {isPlaying ? 'Pause' : 'Play'} Sound
    //   </button>
    //           <audio id='audio' src={Audio}/>
    //         </div> */}
    //     </div>
    // </button>

    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">
        <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${activeSong?.songId === song.songId ? 'flex bg-black bg-opacity-70' : 'hidden'}`}>
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div>
        {/* <img alt="song_img" src={song.profile?song.profile:songProfile} className="w-full h-full rounded-lg" /> */}
      </div>
      <div className="mt-4 flex flex-col">
        <p className="font-semibold text-lg text-white truncate">
            {song.songTitle}
        </p>
        <p className="text-sm truncate text-gray-300 mt-1">
            {song.artist}
        </p>
      </div>
    </div>




  )
}

export default SongsCards