import React from 'react';
import { render, cleanup } from '@testing-library/react';
import NewMovie from './NewMovie';

afterEach(cleanup);

test('<NewMovie />', () => {
  const { getByTestId } = render(<NewMovie />);
  const header = getByTestId('page-title');

  expect(header.textContent).toBe('New Movie');
});
