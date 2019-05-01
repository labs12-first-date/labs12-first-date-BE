import fb from '../firebase/config';
import React from 'react';

export default function Settings() {
  const seeds = () => {
    const settings = [
      { match_age_max: '99', match_age_min: '18', match_distance: '50' }
    ];

    settings.forEach(element => {
      fb.firestore()
        .collection('settings')
        .add(element);
    });
  };

  return (
    <div>
      <button onClick={seeds}>Settings</button>
    </div>
  );
}
