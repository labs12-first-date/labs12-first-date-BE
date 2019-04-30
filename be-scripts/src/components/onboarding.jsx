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

    fb.firestore().collection('onboarding').doc('Y439L9LgiKsp0lnxOyZB').set({
      prompt: "What is your zip code",
      inputPlaceholder: "Zip Code",
      fieldName: 'zipCode',
      onboardingStep: 3
    });

    fb.firestore().collection('onboarding').doc('AtW0SiPGenoPRJahY3lH').set({
      prompt: "How old are you?",
      inputPlaceholder: "Age",
      fieldName: 'age',
      onboardingStep: 3
    });

    fb.firestore().collection('onboarding').doc('5iANPwUgUAk2ZkXv3Viy').set({
      prompt: "Gender",
      inputPlaceholder: "Gender",
      fieldName: 'matchGender',
      onboardingStep: 4
    });

    fb.firestore().collection('onboarding').doc('SNFQiCKGfyn0yn41ylxf').set({
      prompt: "Distance",
      inputPlaceholder: "Distance Range",
      fieldName: 'matchDistance',
      onboardingStep: 4
    });
  

  };


  return (
    <div>
      <button onClick={seeds}>Questions</button>
    </div>
  );
}