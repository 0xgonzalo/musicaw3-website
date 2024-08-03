"use client"
import { useEffect, useRef, useState } from "react";
import AudioPlayer from "./AudioPlayer";
import { songsdata } from "./audios";

export default function PlayerContainer() {

  const [songs, setSongs] = useState(songsdata);
  const [isplaying, setisplaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(songsdata[0]);

  const audioElem = useRef();

  useEffect(() => {
    if (isplaying) {
      audioElem.current.play();
    }
    else {
      audioElem.current.pause();
    }
  }, [isplaying, currentSong])

  const onPlaying = () => {
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;

    setCurrentSong({ ...currentSong, "progress": ct / duration * 100, "length": duration })

  }
  return(
    <div>
        <audio src='/audios/viajerito1.mp3' ref={audioElem} onTimeUpdate={onPlaying} />
        <AudioPlayer songs={songs} setSongs={setSongs} isplaying={isplaying} setisplaying={setisplaying} audioElem={audioElem} currentSong={currentSong} setCurrentSong={setCurrentSong} />
    </div>
  )
}