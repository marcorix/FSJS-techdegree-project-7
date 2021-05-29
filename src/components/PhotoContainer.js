import React from 'react';
import Photo from './Photo';

export default function PhotoContainer({ pictures }) {
  return (
    <div class="photo-container">
      <h2>Results</h2>
      <ul>
        {pictures.map((picture) => {
          const size = 'w';
          const url = `https://live.staticflickr.com/${picture.server}/${picture.id}_${picture.secret}_${size}.jpg`;
          return <Photo url={url} />;
        })}
      </ul>
    </div>
  );
}
