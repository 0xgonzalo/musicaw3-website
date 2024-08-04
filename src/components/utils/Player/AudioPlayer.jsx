import AudioPlayer, {RHAP_UI} from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
// import 'react-h5-audio-player/lib/styles.less' Use LESS
// import 'react-h5-audio-player/src/styles.scss' Use SASS
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
    <div className='fixed bottom-0 w-full z-50 '>
      <AudioPlayer
        src={songsdata[currentSongIndex].url}
        onEnded={handleClickNext}
        showSkipControls
        showJumpControls={false}
        onClickNext={handleClickNext}
        onClickPrevious={handleClickPrevious}
        autoPlay={true}
        layout="horizontal-reverse" 
        customControlsSection={
          [           
            <div className='text-white mr-8 transition ease-in-out delay-150 hover:-translate-x-1 w-[256px]'>        
              <Link href={`${songsdata[currentSongIndex].link}`} target="_blank"  >
               {songsdata[currentSongIndex].title}
              </Link>
            </div>,
            // RHAP_UI.ADDITIONAL_CONTROLS,
            RHAP_UI.MAIN_CONTROLS,
            RHAP_UI.VOLUME_CONTROLS,
          ]}
        className={styles.rhap_container}
      />
    </div>
  );
}