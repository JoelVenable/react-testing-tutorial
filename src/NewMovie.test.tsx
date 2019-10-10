import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import NewMovie from './NewMovie';

afterEach(cleanup);

test('<NewMovie />', () => {
  const {
    getByTestId, queryByTestId, container, getByText,
  } = render(<NewMovie />);
  const header = getByTestId('page-title');
  expect(header.textContent).toBe('New Movie');
  expect(queryByTestId('new-movie-form')).toBeTruthy();
  expect(container.firstChild).toMatchSnapshot();
});
