import React from 'react';
import '../styles/InfiniteScrollText.module.css';

const InfiniteScrollText = ({ texts }) => {
  return (
    <div className="marquee">
      <div className="marquee-content">
        {texts.map((text, index) => (
          <span key={index} className="mx-4">
            {text}
          </span>
        ))}
        {texts.map((text, index) => (
          <span key={`duplicate-${index}`} className="mx-4">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default InfiniteScrollText;
