import fb from '../firebase/config';
import React from 'react';

export default function OnBoarding() {
  const seeds = () => {

    fb.firestore().collection('onboarding').doc('eJYcGXuBJSrSYlLZhHO9').set({
      prompt: "What is your first name?",
      inputPlaceholder: "First Name",
      fieldName: 'firstName',
      onboardingStep: 1
    });

    fb.firestore().collection('onboarding').doc('Gl4NcAPLec4gUkDtGwaV').set({
      prompt: "What is your last name?",
      inputPlaceholder: "Last Name",
      fieldName: 'lastName',
      onboardingStep: 1
    });

    fb.firestore().collection('onboarding').doc('plzR2n89ekKPnxLCGSyP').set({
      prompt: "What is your gender?",
      inputPlaceholder: "Gender",
      fieldName: 'gender',
      onboardingStep: 2
    });

    fb.firestore().collection('onboarding').doc('ZCRBzXVsPwBt0GlorgHj').set({
      prompt: "When's your birthday?",
      inputPlaceholder: "MM/DD/YYYY",
      fieldName: 'dateOfBirth',
      onboardingStep: 2
    });
  

  };


  return (
    <div>
      <button onClick={seeds}>Questions</button>
    </div>
  );
}