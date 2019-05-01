import fb from '../firebase/config';
import React from 'react';

export default function Settings() {
  const seeds = () => {
    const gender = [
      { value: 'Female', label: 'Female' },
      { value: 'Male', label: 'Male' },
      { value: 'Trans', label: 'Trans' },
      { value: 'Non-binary', label: 'Non-binary' },
      { value: 'Questioning', label: 'Questioning' },
      { value: 'Other', label: 'Other' }
    ];

    gender.forEach(element => {
      fb.firestore()
        .collection('gender')
        .add(element);
    });
  };

  return (
    <div>
      <button onClick={seeds}>Gender</button>
    </div>
  );
}
