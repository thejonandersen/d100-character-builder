import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import PopoverInfo from './PopoverInfo';

import theme from '../../modules/Theme/theme';

export default {
  title: 'components/PopoverInfo',
  component: PopoverInfo,
};

export const Horizontal = () => (
  <ThemeProvider theme={theme}>
    <PopoverInfo
      primaryText="Stamina Roll"
      secondaryText="(STR+CON)x2"
      orientation="horizontal"
      popoverId="stamina-popover"
    />
  </ThemeProvider>
);

export const Vertical = () => (
  <ThemeProvider theme={theme}>
    <PopoverInfo
      primaryText="Stamina Roll"
      secondaryText="(STR+CON)x2"
      popoverId="stamina-popover"
    />
  </ThemeProvider>
);
