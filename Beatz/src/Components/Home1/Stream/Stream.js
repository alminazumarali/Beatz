import React,{useState,useEffect} from 'react'
import'./Stream.scss';
import { setActiveSong } from '../../../slices/playerSlice';

function Stream(nanoSongId) {
    console.log("Stream open")
    console.log(nanoSongId)
    // const [playSong,setPlaySong]=useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [song, setSong] = useState(null);
    const [songSrc,setSongSrc]=useState(null);
    useEffect(() => {
      fetchData();
    }, []);

    const fetchData = async () => {
      try {
        const response = await fetch(`http://192.168.1.122:8081/songList/getOneSong/${nanoSongId.songId.nanoId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setSong(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    useEffect(() => {
      if (song && song.songImageData && song.songImageType) {
        const base64Image = `data:${song.songType};base64,${song.finalSong}`;
        console.log(base64Image)
        setSongSrc(base64Image);
        // console.log(audioSrc)
      }
    }, [song]);
    const handleButtonClick = () => {
    const audio = document.getElementById('audio');
    if (!audio) {
      return;
    }

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    setIsPlaying(!isPlaying);
  };
  return (
    <div className='stream-home1'>
      <button onClick={handleButtonClick}>
        {isPlaying ? 'Pause' : 'Play'} Sound
      </button>
      <audio id='audio' src={songSrc}/>
    </div>
  )
}

export default Stream