import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import IncrementInput from '../incrementInput/IncrementInput';
import InfoBlock from '../infoBlock/InfoBlock';
import calculateTotal from '../../utils/calculateTotals';

const useStyles = makeStyles({
  paper: {
    padding: 5,
  },
});

const StatBlock = ({
  scores: initialScores,
  points: initialPoints,
  onUpdate,
}) => {
  const [scores, setScores] = useState(initialScores);
  const [points, setPoints] = useState(initialPoints);
  const [disableIncrement, setDisableIncrement] = useState(points <= 0);
  const [disableDecrement, setDisableDecrement] = useState(true);

  const scoreKeys = Object.keys(scores);
  const classes = useStyles();

  const updateScore = (key, value) => {
    const {
      base, raceBonus, itemBonus, advantageBonus,
    } = scores[key];
    const newBase = value - (raceBonus + itemBonus + advantageBonus);
    const difference = base - newBase;
    const newPoints = points + difference;
    const incrementEnabled = newPoints > 0;
    const decrementEnabled = newPoints !== initialPoints;

    if (newPoints >= 0) {
      setScores({
        ...scores,
        [key]: {
          ...scores[key],
          base: newBase,
        },
      });

      setPoints(newPoints);

      onUpdate({ key, newBase });
    }

    setDisableIncrement(!incrementEnabled);
    setDisableDecrement(!decrementEnabled);
  };

  return (
    <Paper classes={{ root: classes.paper }}>
      <Grid container direction="row" spacing={1}>
        {scoreKeys.map((key) => {
          const statScores = scores[key];
          return (
            <Grid item key={key} xs>
              <IncrementInput
                label={key}
                initialValue={calculateTotal(statScores)}
                onChangeHandler={(value) => updateScore(key, value)}
                disableIncrement={disableIncrement}
                disableDecrement={disableDecrement}
              />
            </Grid>
          );
        })}
        <Grid item xs>
          <InfoBlock value={points} label="remaining" />
        </Grid>
      </Grid>
    </Paper>
  );
};

const StatShape = PropTypes.shape({
  base: PropTypes.number.isRequired,
  raceBonus: PropTypes.number.isRequired,
  itemBonus: PropTypes.number.isRequired,
  advantageBonus: PropTypes.number.isRequired,
}).isRequired;

StatBlock.propTypes = {
  scores: PropTypes.shape({
    str: StatShape,
  }).isRequired,
  points: PropTypes.number.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default StatBlock;
