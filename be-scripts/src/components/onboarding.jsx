import fb from '../firebase/config';
import React from 'react';

export default function Onboarding() {
  const seed = () => {
    const questions = [
      {
        prompt:
          'Welcome! Tell us a little about yourself so we can save you time by finding tailored matches for you!',
        onboarding_step: 0
      },
      {
        prompt: 'What is your first name?',
        input_placeholder: 'First Name',
        field_name: 'first_name',
        onboarding_step: 1,
        input_type: 'text'
      },
      {
        prompt: 'What is your last name?',
        input_placeholder: 'Last Name',
        field_name: 'last_name',
        onboarding_step: 1,
        input_type: 'text'
      },
      {
        prompt: 'What is your gender?',
        input_placeholder: 'Gender',
        fiel_name: 'gender',
        onboarding_step: 2,
        input_type: 'multi_select'
      },
      {
        prompt: "When's your birthday?",
        input_placeholder: 'MM/DD/YYYY',
        field_name: 'date_of_birth',
        onboarding_step: 2,
        input_type: 'date_input'
      },
      {
        prompt: 'What is your zip code',
        input_placeholder: 'Zip Code',
        field_name: 'zip_code',
        onboarding_step: 3,
        input_type: 'number'
      },
      {
        prompt: 'How old are you?',
        input_placeholder: 'Age',
        field__name: 'age',
        onboarding_step: 3,
        input_type: 'number'
      },
      {
        prompt: 'Gender',
        input_placeholder: 'Gender',
        field_name: 'match_gender',
        onboarding_step: 4,
        input_type: 'multi_select'
      },
      {
        prompt: 'Distance',
        input_placeholder: 'Distance Range',
        field_name: 'match_distance',
        onboarding_step: 4,
        input_type: 'number'
      },
      {
        prompt: 'I am open to...',
        input_placeholder: 'Match Conditions',
        field_name: 'match_conditions',
        onboarding_step: 5,
        input_type: 'multi_select'
      },
      {
        prompt: 'I have...',
        input_placeholder: 'Condition(s)',
        field_name: 'conditions',
        onboarding_step: 6,
        input_type: 'multi_select'
      },
      {
        prompt: 'Condition(s) Description',
        input_placeholder: 'Description',
        field_name: 'condition_description',
        onboarding_step: 6,
        input_type: 'text_area'
      },
      {
        prompt: 'Show us what you look like!',
        field_name: 'profile_picture',
        onboarding_step: 7,
        input_type: 'image'
      },
      {
        prompt:
          'GREAT JOB! You are ready to date! Swipe this card to jump in with both feet! Good luck!',
        onboarding_step: 8
      }
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