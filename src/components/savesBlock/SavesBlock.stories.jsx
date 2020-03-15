import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import SavesBlock from './SavesBlock';

import theme from '../../modules/Theme/theme';
import initialStats from '../../store/models/Stats';
import fieldProps from './fieldProps';

const { state: { scores: stats } } = initialStats;

export default {
  title: 'components/SavesBlock',
  component: SavesBlock,
};

export const Basic = () => (
  <ThemeProvider theme={theme}>
    <SavesBlock stats={stats} fieldProps={fieldProps} />
  </ThemeProvider>
);
