import React from 'react';
import './App.css';
import Profiles from './components/ProfileSeeds';
import Seeds from './components/UserSeeds';
import OnBoarding from './components/onboarding';
import Settings from './components/settingsSeeds';

function App() {
  return (
    <div className='App'>
      <Profiles />
      <Seeds />
      <OnBoarding />
      <Settings />
    </div>
  );
}

export default App;
