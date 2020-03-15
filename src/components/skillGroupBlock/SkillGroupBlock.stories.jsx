import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import { ThemeProvider } from '@material-ui/core/styles';
import SkillGroupBlock from './SkillGroupBlock';

import theme from '../../modules/Theme/theme';
import initialStats from '../../store/models/Stats';
import data from './mockData';

const { state: { scores: stats } } = initialStats;

export default {
  title: 'components/SkillGroupBlock',
  component: SkillGroupBlock,
};

export const Basic = () => (
  <ThemeProvider theme={theme}>
    <SkillGroupBlock
      skillData={data}
      onChange={action('onChange, value:')}
      stats={stats}
    />
  </ThemeProvider>
);
