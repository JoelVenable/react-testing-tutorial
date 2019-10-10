import React, { useState } from 'react';

interface Props {
  submitForm: (e: React.FormEvent<HTMLFormElement>) => void
}


const MovieForm: React.FC<Props> = ({ submitForm }: Props) => {
  const [text, setText] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };


  return (
    <form data-testid="new-movie-form" onSubmit={submitForm}>
      <input type="text" value={text} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};


export default MovieForm