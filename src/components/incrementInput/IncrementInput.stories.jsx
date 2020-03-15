import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import IncrementInput from './IncrementInput';

export default {
  title: 'components/IncrementInput',
  component: IncrementInput,
};

export const Basic = () => (
  <IncrementInput
    onChangeHandler={action('clicked, value:')}
    label="Storybook Label"
  />
);
