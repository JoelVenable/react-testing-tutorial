import React from 'react'
import { render, cleanup } from '@testing-library/react'
import Counter from './Counter'

afterEach(cleanup)


test('<Counter />', () => {
    const { getByTestId } = render(<Counter />)

    const button = getByTestId('counter-button')



    expect(button.tagName).toBe('BUTTON')
    expect(button.textContent).toBe('0')



})
