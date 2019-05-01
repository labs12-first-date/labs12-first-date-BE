import fb from '../firebase/config';
import React from 'react';

export default function Onboarding() {
  const seed = () => {
    const questions = [
      {prompt: "What is your first name?",
      input_placeholder: "First Name",
      fiel_name: 'firstName',
      onboarding_step: 1,
      input_type: 'text'},
      {prompt: "What is your last name?",
      input_placeholder: "Last Name",
      field_name: 'lastName',
      onboarding_step: 1,
      input_type: 'text'},
      {prompt: "What is your gender?",
      input_placeholder: "Gender",
      fiel_name: 'gender',
      onboardin_step: 2,
      input_type: 'multiSelect'},
      {prompt: "When's your birthday?",
      input_placeholder: "MM/DD/YYYY",
      field_name: 'dateOfBirth',
      onboarding_step: 2,
      input_type: 'dateInput'},
      {prompt: "What is your zip code",
      input_placeholder: "Zip Code",
      field_name: 'zipCode',
      onboarding_step: 3,
      input_type: 'number'},
      {prompt: "How old are you?",
      input_placeholder: "Age",
      field__name: 'age',
      onboarding_step: 3,
      input_type: 'number'},
      {prompt: "Gender",
      input_placeholder: "Gender",
      field_name: 'matchGender',
      onboarding_step: 4,
      input_type: 'multiSelect'},
      {prompt: "Distance",
      input_placeholder: "Distance Range",
      field_name: 'matchDistance',
      onboarding_step: 4,
      input_type: 'number'},
      {prompt: "I am open to...",
      input_placeholder: "Match Conditions",
      field_name: 'matchConditions',
      onboarding_step: 5,
      input_type: 'multiSelect'},
      {prompt: "I have...",
      input_placeholder: "Condition(s)",
      field_name: 'conditions',
      onboarding_step: 6,
      input_type: 'multiSelect'},
      {prompt: "Condition(s) Description",
      input_placeholder: "Description",
      field_name: 'conditionDescription',
      onboarding_step: 6,
      input_type: 'textarea'}
    ];

    questions.forEach(element => {
      fb.firestore().collection('onboarding').add(element);
    });
  };
  

  return (
    <div>
      <button onClick={seed}>Onboarding</button>
    </div>
  );
}