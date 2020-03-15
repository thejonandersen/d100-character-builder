import React from 'react';
import { render } from '@testing-library/react';

import VerticalCalculatedField from './VerticalCalculatedField';
import * as props from './mockData';

describe('VerticalCalculatedField', () => {
  it('should display properly', () => {
    const { getByText } = render(<VerticalCalculatedField {...props} />);
    const hp = getByText('HP');
    const value = getByText('3');
    expect(hp).toBeTruthy();
    expect(value).toBeTruthy();
  });
});
