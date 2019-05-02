import fb from '../firebase/config';
import React from 'react';

export default function Onboarding() {
  const seed = () => {
    const questions = [
      {
        prompt:
          'Welcome! Tell us a little about yourself so we can save you time by finding tailored matches for you!',
        onboarding_step: 0,
        card_title: "We are glad you're here!"
      },
      {
        prompt: 'What is your first name?',
        input_placeholder: 'First Name',
        field_name: 'first_name',
        onboarding_step: 1,
        input_type: 'text',
        card_title: 'A little about you...',
        prompt_order: 1
      },
      {
        prompt: 'What is your last name?',
        input_placeholder: 'Last Name',
        field_name: 'last_name',
        onboarding_step: 1,
        input_type: 'text',
        card_title: 'A little about you...',
        prompt_order: 2
      },
      {
        prompt: 'How do you define your gender?',
        input_placeholder: 'Gender',
        field_name: 'gender',
        onboarding_step: 1,
        input_type: 'multi_select',
        card_title: 'A little about you...',
        prompt_order: 3
      },
      {
        prompt: 'When is your birthday?',
        input_placeholder: 'MM/DD/YYYY',
        field_name: 'date_of_birth',
        onboarding_step: 2,
        input_type: 'date_input',
        card_title: 'A little more about you...',
        prompt_order: 4
      },
      {
        prompt: 'What is your zip code',
        input_placeholder: 'Zip Code',
        field_name: 'zip_code',
        onboarding_step: 2,
        input_type: 'number',
        card_title: 'A little more about you...',
        prompt_order: 5
      },
      {
        prompt: 'What makes you tick?',
        input_placeholder: 'Bio',
        field_name: 'bio',
        onboarding_step: 2,
        input_type: 'text_area',
        card_title: 'A little more about you...',
        prompt_order: 6
      },
      {
        prompt: 'How does your ideal match define their gender?',
        input_placeholder: 'Gender',
        field_name: 'match_gender',
        onboarding_step: 3,
        input_type: 'multi_select',
        card_title: 'What do you like?',
        prompt_order: 7
      },
      {
        prompt: "I wouldn't mind meeting someone with...",
        input_placeholder: 'Match Conditions',
        field_name: 'match_conditions',
        onboarding_step: 3,
        input_type: 'multi_select',
        card_title: 'What do you like?',
        prompt_order: 8
      },
      {
        prompt: 'I have...',
        input_placeholder: 'Condition(s)',
        field_name: 'conditions',
        onboarding_step: 4,
        input_type: 'multi_select',
        card_title: 'The good stuff!',
        prompt_order: 9
      },
      {
        prompt: 'Care to elaborate?',
        input_placeholder: 'Description',
        field_name: 'condition_description',
        onboarding_step: 4,
        input_type: 'text_area',
        card_title: 'The good stuff!',
        prompt_order: 10
      },
      {
        prompt: 'Show us what you look like!',
        field_name: 'profile_picture',
        onboarding_step: 5,
        input_type: 'image',
        card_title: 'Say Cheese!!!',
        prompt_order: 11
      },
      {
        prompt:
          "GREAT JOB! Swipe this card to jump in with both feet! Good luck! Remember at any time you can go to settings to sign up for premium or change any settings you'd like",
        onboarding_step: 5,
        card_title: 'Say Cheese!!!',
        prompt_order: 12
      }
    ];

    questions.forEach(element => {
      fb.firestore()
        .collection('onboarding')
        .add(element);
    });
  };

  return (
    <div>
      <button onClick={seed}>Onboarding</button>
    </div>
  );
}
