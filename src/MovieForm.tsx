import React, { useState } from 'react';

interface Props {
  submitForm: ({ text: string }) => void
}


const MovieForm: React.FC<Props> = ({ submitForm }: Props) => {
  const [text, setText] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value)
  };


  return (
    <form data-testid="new-movie-form" onSubmit={() => submitForm({ text })}>
      <label htmlFor="text">
        Text
      </label>
      <input type="text" id="text" value={text} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};


export default MovieForm