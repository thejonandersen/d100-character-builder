import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from '../../modules/Theme/theme';
import StepGuide from './StepGuide';
import { STEPS } from '../../routes/constants';

export default {
  title: 'components/StepGuide',
};

export const Basic = () => (
  <ThemeProvider theme={theme}>
    <StepGuide currentPath="/" steps={STEPS} onStepChange={action('onStepChange')} />
  </ThemeProvider>
);
