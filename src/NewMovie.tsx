import React from 'react';
import MovieForm from './MovieForm';


const NewMovie: React.FC = () => {

  const submitForm = (e: React.FormEvent): void => {
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
