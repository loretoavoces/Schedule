import React from 'react'
import { render, screen } from '@testing-library/react'
import ScheduleHooks from '../components/pages/ScheduleHooks/ScheduleHooks'
import '@testing-library/jest-dom/extend-expect'

test('<ScheduleHooks/> ', () => {
    // const wrapper = render(<ScheduleHooks />)
    // wrapper.debug()

    render(<ScheduleHooks />)
    expect(screen.getByText('Calendar 2021.01')).toBeInTheDocument()

    //Heading
    expect(screen.getByTestId('title').tagName).toBe('H1')
    expect(screen.getByTestId('title').tagName).not.toBe('H2')
    expect(screen.getByTestId('title').textContent).toBe('Calendar 2021.01')

})