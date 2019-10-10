import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import MovieForm from './MovieForm';

afterEach(cleanup);

const onSubmit = jest.fn();

test('<MovieForm submitForm={mocked} />', () => {
  const {
    queryByTestId, getByText, getByLabelText, container
  } = render(<MovieForm submitForm={onSubmit} />);
  expect(queryByTestId('new-movie-form')).toBeTruthy();

  const submitButton = getByText('Submit')
  const input = getByLabelText('Text') as HTMLInputElement

  fireEvent.change(input, { target: { value: 'hello' } })

  fireEvent.submit(submitButton)

  expect(onSubmit).toHaveBeenCalledTimes(1)
  expect(onSubmit).toHaveBeenCalledWith({
    text: 'hello'
  })




});

