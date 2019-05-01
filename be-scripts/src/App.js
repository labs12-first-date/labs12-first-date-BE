import React from 'react';
import './App.css';
import Profiles from './components/ProfileSeeds';
import Conditions from './components/Conditions';
import OnBoarding from './components/onboarding';
import Settings from './components/settingsSeeds';
import Photo from './components/PhotoSeeds';
import Gender from './components/genderSeeds';

function App() {
  return (
    <div className='App'>
      <Profiles />
      <Conditions />
      <OnBoarding />
      <Settings />
      <Photo />
      <Gender />
    </div>
  );
}

export default App;
