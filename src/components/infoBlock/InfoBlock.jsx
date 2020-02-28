import React from 'react';
import Proptypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  allCaps: {
    textTransform: 'uppercase',
  },
  root: {
    backgroundColor: 'rgba(0, 0, 0, 0.09)',
  }
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
      classes={{ root: classes.root }}
    />
  );
};

InfoBlock.propTypes = {
  value: Proptypes.number.isRequired,
  label: Proptypes.string.isRequired,
};


export default InfoBlock;
