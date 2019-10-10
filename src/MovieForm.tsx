import React, { useState } from 'react';

interface Props {
  submitForm: React.FormEventHandler
}


const MovieForm: React.FC<Props> = ({ submitForm }: Props) => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    console.log(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted');
  };


  return (
    <form data-testid="new-movie-form" onSubmit={submitForm}>
      <input type="text" value={text} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};


export default MovieForm