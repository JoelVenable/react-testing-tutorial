import React from 'react'
import { render, cleanup } from 'react-testing-library'
import Counter from './Counter'

afterEach(cleanup)


test('<Counter />', () => {
    const wrapper = render(<Counter />)
    const tag = wrapper.getByText('0').tagName

    expect(tag).toBe('BUTTON')


})