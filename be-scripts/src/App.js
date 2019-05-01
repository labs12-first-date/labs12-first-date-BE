import React from 'react';
import './App.css';
import Profiles from './components/ProfileSeeds';
import Conditions from './components/Conditions';
import OnBoarding from './components/onboarding';
import Settings from './components/settingsSeeds';

function App() {
  return (
    <div className='App'>
      <Profiles />
      <Conditions />
      <OnBoarding />
      <Settings />
    </div>
  );
}

export default App;
