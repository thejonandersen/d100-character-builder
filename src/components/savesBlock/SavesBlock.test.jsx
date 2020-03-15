import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SavesBlock from './SavesBlock';

import initialStats from '../../store/models/Stats';
import fieldProps from './fieldProps';

const { state: { scores: stats } } = initialStats;

describe('SavesBlock', () => {
  it('should render and calculate', () => {
    const { getAllByText, getByText, getAllByRole } = render(
      <SavesBlock stats={stats} fieldProps={fieldProps} />,
    );
    const values = getAllByText('12');
    expect(values.length).toEqual(3);
    expect(getByText('STAMINA')).toBeTruthy();
    expect(getByText('WILL')).toBeTruthy();
    expect(getByText('AGILITY')).toBeTruthy();
    fireEvent.click(getAllByRole('button')[0]);
    expect(getByText('Stamina Roll')).toBeTruthy();
  });
});
