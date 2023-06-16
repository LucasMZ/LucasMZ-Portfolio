import React from 'react';

function Photo({ src, width, height, alt }) {
  return (
    <img src={src} width={width} height={height} alt={alt} />
  );
}

export default Photo;
