import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import stats from './mockData';
import StatBlock from './StatBlock';

describe('StatBlock', () => {
  let props;
  let onUpdate;

  beforeEach(() => {
    onUpdate = jest.fn();
    props = {
      ...stats,
      onUpdate,
    };
  });

  it('should update remaining on increment', () => {
    const { getAllByRole, getByLabelText } = render(<StatBlock {...props} />);
    const buttons = getAllByRole('button');
    const remaining = getByLabelText('remaining');

    fireEvent.click(buttons[0]);

    expect(onUpdate).toHaveBeenCalledWith({ key: 'str', newBase: 4 });
    expect(remaining).toHaveValue('72');
  });

  it('should update remaining on decrement', () => {
    const { getAllByRole, getByLabelText } = render(<StatBlock {...props} />);
    const buttons = getAllByRole('button');
    const remaining = getByLabelText('remaining');

    // button should initially be disabled
    fireEvent.click(buttons[1]);
    expect(onUpdate).not.toHaveBeenCalled();
    expect(remaining).toHaveValue('73');

    // after increment, decrement can happen
    fireEvent.click(buttons[0]);
    fireEvent.click(buttons[1]);

    expect(onUpdate).toHaveBeenLastCalledWith({ key: 'str', newBase: 3 });
    expect(remaining).toHaveValue('73');
  });

  it('should not update remaining on increment beyond 0', () => {
    props.points = 1;

    const { getAllByRole, getByLabelText } = render(<StatBlock {...props} />);
    const buttons = getAllByRole('button');
    const remaining = getByLabelText('remaining');

    fireEvent.click(buttons[0]);
    fireEvent.click(buttons[0]);

    expect(onUpdate).toHaveBeenCalledTimes(1);
    expect(remaining).toHaveValue('0');
  });
});
