import fb from '../firebase/config';

import React from 'react';

export default function Condition() {
  const seed = () => {
    const conditions = [
      { condition: 'AIDS', enabled: true, value: 'AIDS', label: 'AIDS' },
      {
        condition: 'Chlamydia',
        enabled: true,
        value: 'Chlamydia',
        label: 'Chlamydia'
      },
      {
        condition: 'Gonorrhea',
        enabled: true,
        value: 'Gonorrhea',
        label: 'Gonorrhea'
      },
      { condition: 'HIV', enabled: true, value: 'HIV', label: 'HIV' },
      { condition: 'HepC', enabled: true, value: 'Hep C', label: 'Hep C' },
      { condition: 'Herpes', enabled: true, value: 'Herpes', label: 'Herpes' },
      { condition: 'HepD', enabled: true, value: 'Hep D', label: 'Hep D' },
      { condition: 'HepB', enabled: true, value: 'Hep B', label: 'Hep B' },
      {
        condition: 'Syphyllis',
        enabled: true,
        value: 'Syphyllis',
        label: 'Syphyllis'
      },
      { condition: 'Crabs', enabled: true, value: 'Crabs', label: 'Crabs' },
      {
        condition: 'Genital Warts',
        enabled: true,
        value: 'Genital Warts',
        label: 'Genital Warts'
      }
    ];

    conditions.forEach(element => {
      fb.firestore()
        .collection('stds')
        .add(element);
    });
  };

  return (
    <div>
      <button onClick={seed}>STDS</button>
    </div>
  );
}
