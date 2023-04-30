// components/Photo.js
import React from 'react';

function Photo({ src, caption }) {
  return (
    <div className='photo-card'>
      <img src={src} alt={caption} />
      <p>{caption}</p>
    </div>
  );
}

export default Photo;

