import React from 'react';
import './App.css';
import Profiles from './components/ProfileSeeds';
import Conditions from './components/Conditions';
import OnBoarding from './components/onboarding';

function App() {
  return (
    <div className="App">
      <Profiles />
      <Conditions />
      <OnBoarding />
    </div>
  );
}

export default App;
