import React from 'react';
import Photo from './Photo';

export default function PhotoContainer({ pictures, title }) {
  let photos;

  // Check if there are results
  if (pictures.length > 0) {
    // Create a Photo component for each photo in the result
    photos = pictures.map((picture) => {
      const size = 'w';
      // Create the url for the picture to display
      const url = `https://live.staticflickr.com/${picture.server}/${picture.id}_${picture.secret}_${size}.jpg`;
      return <Photo key={picture.id} url={url} />;
    });
  } else {
    title = 'Sorry no photos match your search';
  }

  return (
    <div class="photo-container">
      <h2>{title}</h2>
      <ul>{photos}</ul>
    </div>
  );
}
