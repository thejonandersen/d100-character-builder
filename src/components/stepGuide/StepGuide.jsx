import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';


const StepGuide = ({
  currentPath,
  steps,
  onStepChange,
}) => {
  const [activeStep, setActiveStep] = useState(0);
  const handleStep = (path, step) => () => {
    setActiveStep(step);
    onStepChange(path);
  };

  useEffect(() => {
    setActiveStep(steps.findIndex((element) => element.path === currentPath));
  }, [currentPath, steps]);

  return (
    <Stepper nonLinear activeStep={activeStep}>
      {steps.map(({ label, path, enabled }, index) => (
        <Step key={label}>
          <StepButton onClick={handleStep(path, index)} disabled={!enabled}>
            {label}
          </StepButton>
        </Step>
      ))}
    </Stepper>
  );
};

StepGuide.propTypes = {
  currentPath: PropTypes.string.isRequired,
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      enabled: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  onStepChange: PropTypes.func.isRequired,
};

export default StepGuide;
