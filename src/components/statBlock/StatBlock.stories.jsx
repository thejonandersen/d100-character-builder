import React from 'react';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from '../../modules/Theme/theme';
import StatBlock from './StatBlock';
import props from './mockData';

props.onUpdate = action('update')

export default {
  title: 'components/StatBlock',
};

export const Basic = () => (
  <ThemeProvider theme={theme}>
    <StatBlock {...props} />
  </ThemeProvider>
);
