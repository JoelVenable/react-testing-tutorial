import React from 'react';
import MovieForm from './MovieForm';

interface FormInput {
  text: string
}

const NewMovie: React.FC = () => {

  const submitForm = ({ text }: FormInput): void => {
    console.log("Submitted");
  }

  return (
    <div>
      <h1 data-testid="page-title">New Movie</h1>
      <MovieForm submitForm={submitForm} />
    </div>
  )
}



export default NewMovie;
