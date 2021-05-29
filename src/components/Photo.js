import React from 'react';

export default function Photo({ url }) {
  return (
    <li>
      <img src={url} alt="" />
    </li>
  );
}
