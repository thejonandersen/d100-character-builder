import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import VerticalCalculatedField from './VerticalCalculatedField';
import HorizontalCalculatedField from './HorizontalCalculatedField';

import theme from '../../modules/Theme/theme';

import * as props from './mockData';

export default {
  title: 'components/CalculatedField',
};

export const Vertical = () => (
  <ThemeProvider theme={theme}>
    <div style={{ margin: 20 }}>
      <VerticalCalculatedField
        {...props}
      />
    </div>
  </ThemeProvider>
);

export const Horizontal = () => (
  <ThemeProvider theme={theme}>
    <div style={{ margin: 20 }}>
      <HorizontalCalculatedField
        {...props}
      />
    </div>
  </ThemeProvider>
);
