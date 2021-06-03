import React from 'react';
import Photo from './Photo';

export default function PhotoContainer({ pictures, title }) {
  return (
    <div class="photo-container">
      <h2>{title}</h2>
      <ul>
        {pictures.map((picture) => {
          const size = 'w';
          const url = `https://live.staticflickr.com/${picture.server}/${picture.id}_${picture.secret}_${size}.jpg`;
          return <Photo key={picture.id} url={url} />;
        })}
      </ul>
    </div>
  );
}
