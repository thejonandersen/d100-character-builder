import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import PopoverInfo from '../popoverInfo/PopoverInfo';

const useStyles = makeStyles((theme) => ({
  headText: {
    textAlign: 'center',
    margin: -16,
    padding: 6,
    backgroundColor: theme.palette.secondary.dark,
    width: 'inherit',
  },
  popoverPaper: {
    padding: 6,
  },
  iconButton: {
    margin: '-5px 0 0',
  },
  leftAlign: {
    textAlign: 'left',
  },
}));

const VerticalCalculatedField = ({
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
    <Card variant="outlined">
      <CardHeader
        title={(
          <Grid
            alignContent="space-around"
            container
            classes={{ root: classes.headText }}
          >
            <Grid item xs={6}>
              <Typography
                variant="h5"
                align="right"
              >
                {shortName}
              </Typography>
            </Grid>
            <Grid item xs={6} classes={{ root: classes.leftAlign }}>
              <PopoverInfo
                primaryText={longName}
                secondaryText={formula}
                popoverId={popoverId}
                iconButtonClass={classes.iconButton}
              />
            </Grid>
          </Grid>
          )}
      />
      <CardContent>
        <Typography variant="h3" align="center">{calculate(stats)}</Typography>
      </CardContent>
    </Card>
  );
};

VerticalCalculatedField.propTypes = {
  fieldProps: PropTypes.shape({
    shortName: PropTypes.string.isRequired,
    longName: PropTypes.string.isRequired,
    formula: PropTypes.string.isRequired,
    calculate: PropTypes.func.isRequired,
  }).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  stats: PropTypes.object.isRequired,
};

export default VerticalCalculatedField;
