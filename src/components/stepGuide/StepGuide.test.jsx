import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import StepGuide from './StepGuide';
import Steps from '../../store/models/Steps';

describe('StepGuide', () => {
  it('should only allow clicks on enabled steps', () => {
    const { state: steps } = Steps;
    const mockFn = jest.fn();
    const { getAllByRole } = render(<StepGuide steps={steps} onStepChange={mockFn} currentPath="/" />);
    const buttons = getAllByRole('button');
    fireEvent.click(buttons[0]);
    fireEvent.click(buttons[1]);

    expect(mockFn).toHaveBeenCalledWith('/');
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
