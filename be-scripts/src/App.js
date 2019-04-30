import React from 'react';
import './App.css';
import Profiles from './components/ProfileSeeds';
import Seeds from './components/UserSeeds';
import OnBoarding from './components/onboarding';

function App() {
  return (
    <div className="App">
      <Profiles />
      <Seeds />
      <OnBoarding />
    </div>
  );
}

export default App;
