import React, { useState, useEffect } from 'react';
import Proptypes from 'prop-types';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  inputAdornedEnd: {
    paddingRight: 0,
  },
  allCaps: {
    textTransform: 'uppercase',
  },
  root: {
    padding: '4px 0 4px 10px',
  }
});

const IncrementInput = ({
  initialValue, onChangeHandler, label, disableIncrement, disableDecrement,
}) => {
  const [value, setValue] = useState(initialValue);
  const [initialized, setInitialized] = useState(false);

  const increment = () => setValue(value + 1);

  const decrement = () => setValue(value - 1);

  const classes = useStyles();

  useEffect(() => {
    if (initialized) {
      onChangeHandler(value);
    }

    setInitialized(true);
  }, [value]);

  return (
    <TextField
      className={classes.allCaps}
      variant="outlined"
      id={label}
      label={label}
      value={value}
      InputProps={{
        endAdornment: (
          <InputAdornment>
            <ButtonGroup
              orientation="vertical"
              size="small"
            >
              <IconButton disabled={disableIncrement} color="success" onClick={increment}><AddIcon /></IconButton>
              <IconButton disabled={disableDecrement} color="secondary" onClick={decrement}><RemoveIcon /></IconButton>
            </ButtonGroup>
          </InputAdornment>
        ),
        classes: {
          adornedEnd: classes.inputAdornedEnd,
          root: classes.root,
        }
      }}

    />
  );
};

IncrementInput.propTypes = {
  initialValue: Proptypes.number,
  onChangeHandler: Proptypes.func.isRequired,
  label: Proptypes.string.isRequired,
  disableIncrement: Proptypes.bool,
  disableDecrement: Proptypes.bool,
};

IncrementInput.defaultProps = {
  initialValue: 0,
  disableIncrement: false,
  disableDecrement: true,
};

export default IncrementInput;
