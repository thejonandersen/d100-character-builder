import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import IncrementInput from './IncrementInput';
const handler = jest.fn();

describe('IncrementInput', () => {
  test('it should increment value', () => {
    const labelText = "Test Label"
    const { getAllByRole, getByLabelText } = render(
    <IncrementInput
      onChangeHandler={handler}
      label={labelText}
    />
    )
    const buttons = getAllByRole('button');
    const input = getByLabelText(labelText);
    fireEvent.click(buttons[0])
    expect(input).toHaveValue('1');
  })
  test('it should decrement value', () => {
    const labelText = "Test Label"
    const { getAllByRole, getByLabelText } = render(
    <IncrementInput
      onChangeHandler={handler}
      label={labelText}
    />
    )
    const buttons = getAllByRole('button');
    const input = getByLabelText(labelText);
    fireEvent.click(buttons[1])
    expect(input).toHaveValue('-1');
  })
  test('it have called handled', () => {
    expect(handler).toHaveBeenCalledTimes(2);
  })
})