import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import NewMovie from './NewMovie';

afterEach(cleanup);

test('<NewMovie />', () => {
  const { debug } = render(<NewMovie />);
  debug();
});
