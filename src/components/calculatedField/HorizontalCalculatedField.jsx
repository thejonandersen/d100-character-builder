import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PopoverInfo from '../popoverInfo/PopoverInfo';

import fieldType from './CalculatedField.type';

const useStyles = makeStyles(() => ({
  popoverPaper: {
    padding: 6,
  },
  caption: {
    marginTop: 3,
  },
  icon: {
    verticalAlign: 'middle',
    fontSize: '1rem',
  },
}));

const HorizontalCalculatedField = ({
  fieldProps,
  stats,
}) => {
  const {
    shortName,
    longName,
    formula,
    calculate,
  } = fieldProps;

  const classes = useStyles();
  const popoverId = `${shortName}-popover`;

  return (
    <Grid container direction="row">
      <Grid item container xs={6} direction="row">
        <Grid
          item
        >
          <Typography
            classes={{ root: classes.headText }}
          >
            {shortName}
          </Typography>
        </Grid>
        <Grid item>
          <PopoverInfo
            primaryText={longName}
            secondaryText={formula}
            orientation="horizontal"
            popoverId={popoverId}
            iconClass={classes.icon}
          />
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <Typography align="center">{calculate(stats)}</Typography>
      </Grid>
    </Grid>
  );
};

HorizontalCalculatedField.propTypes = {
  fieldProps: fieldType.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  stats: PropTypes.object.isRequired,
};

export default HorizontalCalculatedField;
