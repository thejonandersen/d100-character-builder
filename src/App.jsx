import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import { push } from 'connected-react-router';
import Grid from '@material-ui/core/Grid';

import theme from './modules/Theme/theme';
import Routes from './routes';
import StepGuide from './components/stepGuide/StepGuide';

import './App.css';

function App({
  currentPath,
  onStepChange,
  steps,
}) {
  return (
    <ThemeProvider theme={theme}>
      <Grid container>
        <Grid item sm={12}>
          <StepGuide steps={steps} onStepChange={onStepChange} currentPath={currentPath} />
        </Grid>
        <Grid item sm={12}>
          <Routes />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

App.propTypes = {
  currentPath: PropTypes.string.isRequired,
  onStepChange: PropTypes.func.isRequired,
  steps: PropTypes.array.isRequired,
};

const mapState = ({ router, steps }) => ({ currentPath: router.location.pathname, steps });

const mapDispatch = (dispatch) => ({
  onStepChange: (path) => dispatch(push(path)),
});

export default connect(
  mapState,
  mapDispatch,
)(App);
