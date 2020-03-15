import React from 'react';
import Proptypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  allCaps: {
    textTransform: 'uppercase',
  },
}));

const InfoBlock = ({ value, label }) => {
  const classes = useStyles();


  return (
    <TextField
      label={label}
      id={label}
      value={value}
      className={classes.allCaps}
      variant="outlined"
    />
  );
};

InfoBlock.propTypes = {
  value: Proptypes.number.isRequired,
  label: Proptypes.string.isRequired,
};


export default InfoBlock;
