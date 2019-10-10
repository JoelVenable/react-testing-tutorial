import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import MovieForm from './MovieForm';

afterEach(cleanup);

const onSubmit = jest.fn((e: React.FormEvent<HTMLFormElement>) => { });

test('<MovieForm />', () => {
  const {
    queryByTestId, getByText,
  } = render(<MovieForm submitForm={onSubmit} />);
  expect(queryByTestId('new-movie-form')).toBeTruthy();

  const submitButton = getByText('Submit')

  fireEvent.submit(submitButton)



});

