"use client"
import React, { useRef } from 'react';
import { PlayIcon, PauseIcon, PrevIcon, NextIcon} from '../icons.jsx';
import styles from "../../styles/player.module.css"

const AudioPlayer = ({audioElem, isplaying, setisplaying, currentSong, setCurrentSong, songs})=> {

  const clickRef = useRef();

  const PlayPause = ()=>
  {
    setisplaying(!isplaying);
  }


  const checkWidth = (e)=>
  {
    let width = clickRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;

    const divprogress = offset / width * 100;
    audioElem.current.currentTime = divprogress / 100 * currentSong.length;

  }

  const skipBack = ()=>
  {
    const index = songs.findIndex(x=>x.title == currentSong.title);
    if (index == 0)
    {
      setCurrentSong(songs[songs.length - 1])
    }
    else
    {
      setCurrentSong(songs[index - 1])
    }
    audioElem.current.currentTime = 0;
    
  }


  const skiptoNext = ()=>
  {
    const index = songs.findIndex(x=>x.title == currentSong.title);

    if (index == songs.length-1)
    {
      setCurrentSong(songs[0])
    }
    else
    {
      setCurrentSong(songs[index + 1])
    }
    audioElem.current.currentTime = 0;
    
  }

  return (
    <div className={styles.player_container}>
      <div className={styles.title}>
        <p>{currentSong.title}</p>
      </div>
      <div className={styles.navigation}>
        <div className={styles.navigation_wrapper} onClick={checkWidth} ref={clickRef}>
          <div className={styles.seek_bar} style={{width: `${currentSong.progress+"%"}`}}></div>
        </div>
      </div>
      <div className={styles.controls}>
        <PrevIcon className={styles.btn_action} onClick={skipBack}/>
        {isplaying ? <PlayIcon className={styles.btn_action} onClick={PlayPause}/> : <PauseIcon className={styles.btn_action} onClick={PlayPause}/>}
        <NextIcon className={styles.btn_action} onClick={skiptoNext}/>        
      </div>
    </div>
  
  )
}

export default AudioPlayer