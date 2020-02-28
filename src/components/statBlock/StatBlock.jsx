import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

import IncrementInput from '../incrementInput/IncrementInput';
import InfoBlock from '../infoBlock/InfoBlock';

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
    <Grid container spacing={2}>
      {scoreKeys.map((key) => {
        const {
          base, raceBonus, itemBonus, advantageBonus,
        } = scores[key];
        return (
          <Grid item key={key} xs={12} md={1}>
            <IncrementInput
              label={key}
              initialValue={base + raceBonus + itemBonus + advantageBonus}
              onChangeHandler={(value) => updateScore(key, value)}
              disableIncrement={disableIncrement}
              disableDecrement={disableDecrement}
            />
          </Grid>
        );
      })}
      <Grid item xs={12} md={1}>
        <InfoBlock value={points} label="remaining" />
      </Grid>
    </Grid>
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
