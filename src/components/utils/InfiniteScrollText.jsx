import React from 'react';
import styles from '../styles/InfiniteScrollText.module.css';

const InfiniteScrollText = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div className={styles.marquee}>
        <p className="font-stretchFont"> ABOUT MUSICAW3 ABOUT MUSICAW3 ABOUT MUSICAW3 ABOUT MUSICAW3 ABOUT MUSICAW3 ABOUT MUSICAW3 ABOUT MUSICAW3 ABOUT MUSICAW3 ABOUT MUSICAW3 ABOUT MUSICAW3 ABOUT MUSICAW3 ABOUT MUSICAW3 </p>
      </div>
    </div>
  );
};

export default InfiniteScrollText;
