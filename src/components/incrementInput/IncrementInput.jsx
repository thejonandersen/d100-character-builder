import React, { useState, useEffect } from 'react';
import Proptypes from 'prop-types';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl'
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  buttonGroupRoot: {

  },
  inputAdornedEnd: {
    paddingRight: 0
  }
});

const IncrementInput = ({ initialValue, onChangeHandler, label }) => {
  const [value, setValue] = useState(initialValue);

  const increment = () => setValue(value + 1);

  const decrement = () => setValue(value - 1);

  let classes = useStyles();

  useEffect(() => {
    if (value) {
      onChangeHandler(value);
    }
  }, [onChangeHandler, value]);

  return (
    <FormControl variant="outlined">
      <InputLabel htmlFor={label}>{label}</InputLabel>
      <OutlinedInput
        label={label}
        id={label}
        value={value}
        classes={
          { adornedEnd: classes.inputAdornedEnd }
        }
        endAdornment={
        <InputAdornment>
          <ButtonGroup
            orientation="vertical"
            variant="outlined"
            size="small"
          >
            <IconButton onClick={increment}><AddIcon /></IconButton>
            <IconButton onClick={decrement}><RemoveIcon /></IconButton>
          </ButtonGroup>
        </InputAdornment>
      }/>
    </FormControl>
  )
}

IncrementInput.propTypes = {
  initialValue: Proptypes.number,
  onChangeHandler: Proptypes.func.isRequired,
  label: Proptypes.string.isRequired,
}

IncrementInput.defaultProps = {
  initialValue: 0,
}

export default IncrementInput;
