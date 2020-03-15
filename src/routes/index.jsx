import React from 'react';
import { Route, Switch } from 'react-router';

import * as Containers from '../containers';
import { STEPS } from './constants';

const Routes = () => (
  <Switch>
    {STEPS.map(({
      path,
      componentName,
    }) => (<Route exact key={path} path={path} component={Containers[componentName]} />))}
  </Switch>
);

export default Routes;
