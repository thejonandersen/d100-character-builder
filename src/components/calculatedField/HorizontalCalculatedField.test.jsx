import React from 'react';
import { render } from '@testing-library/react';

import HorizontalCalculatedField from './HorizontalCalculatedField';
import * as props from './mockData';

describe('HorizontalCalculatedField', () => {
  it('should display properly', () => {
    const { getByText } = render(<HorizontalCalculatedField {...props} />);
    const hp = getByText('HP');
    const value = getByText('3');
    expect(hp).toBeTruthy();
    expect(value).toBeTruthy();
  });
});
