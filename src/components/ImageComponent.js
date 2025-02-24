import React, { useState, useEffect } from 'react';
import { Blurhash } from 'react-blurhash';

export default function ImageComponent({ src, blHash, cssClass }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = src;
  }, [src]);
  return (
    <>
      <div style={{ display: imageLoaded ? 'none' : 'inline' }}>
        <Blurhash
          hash={blHash}
          width='100%'
          height='100%'
          resolutionX={32}
          resolutionY={32}
          punch={1}
          className={cssClass}
        />
      </div>
      <img
        src={src}
        alt=''
        style={{ display: !imageLoaded ? 'none' : 'inline' }}
        className={cssClass}
      />
    </>
  );
}
