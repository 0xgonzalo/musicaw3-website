import AudioPlayer, {RHAP_UI} from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { songsdata } from './audios';
import { useState } from 'react';
import Link from 'next/link';
import styles from "../../styles/player.module.css"

export default function Player() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const handleClickNext = () => {
    setCurrentSongIndex((currentSongIndex + 1) % songsdata.length);
  };

  const handleClickPrevious = () => {
    setCurrentSongIndex((currentSongIndex - 1 + songsdata.length) % songsdata.length);
  };

  return (
    <div className='fixed bottom-0 w-full z-50 hidden md:block'>
      <AudioPlayer
        src={songsdata[currentSongIndex].url}
        onEnded={handleClickNext}
        showSkipControls
        showJumpControls={false}
        onClickNext={handleClickNext}
        onClickPrevious={handleClickPrevious}
        autoPlay={true}
        layout="horizontal-reverse" 
        customControlsSection={[           
          <div key="song-title" className='text-white mr-2 md:mr-8 transition ease-in-out delay-150 hover:-translate-x-1 max-w-[120px] md:max-w-[256px] truncate'>        
            <Link href={`${songsdata[currentSongIndex].link}`} target="_blank">
              {songsdata[currentSongIndex].title}
            </Link>
          </div>,
          RHAP_UI.MAIN_CONTROLS,
          RHAP_UI.VOLUME_CONTROLS,
        ]}
        className={`${styles.rhap_container} responsive-player`}
      />
    </div>
  );
}