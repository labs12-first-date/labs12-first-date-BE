import fb from '../firebase/config';
import React from 'react';

export default function Photo() {
  const seed = () => {
    const photos = [{ user_id: '', photo_urls: ['', '', ''] }];

    photos.forEach(element => {
      fb.firestore()
        .collection('photos')
        .add(element);
    });
  };

  return (
    <div>
      <button onClick={seed}>Photos</button>
    </div>
  );
}
