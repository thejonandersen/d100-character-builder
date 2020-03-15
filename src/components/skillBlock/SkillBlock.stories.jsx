import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import { ThemeProvider } from '@material-ui/core/styles';
import SkillBlock from './SkillBlock';

import theme from '../../modules/Theme/theme';
import initialStats from '../../store/models/Stats';
import data from '../skillGroupBlock/mockData';

const { state: { scores: stats } } = initialStats;

export default {
  title: 'components/SkillBlock',
  component: SkillBlock,
};

export const Skill = () => (
  <ThemeProvider theme={theme}>
    <SkillBlock
      {...data.skills[0]}
      onChange={action('onChange, value:')}
      stats={stats}
    />
  </ThemeProvider>
);

export const SkillGroup = () => (
  <ThemeProvider theme={theme}>
    <SkillBlock
      {...data.skillGroup}
      onChange={action('onChange, value:')}
      stats={stats}
      dark
    />
  </ThemeProvider>
);
