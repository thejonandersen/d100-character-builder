/* eslint-disable react/forbid-prop-types */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import IncrementInput from '../incrementInput/IncrementInput';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    backgroundColor: theme.palette.secondary.dark,
    border: `1px solid ${theme.palette.primary.dark}`,
  },
  mainGridDark: {
    backgroundColor: theme.palette.primary.light,
    border: `1px solid ${theme.palette.primary.dark}`,
    color: theme.palette.primary.contrastText,
  },
  borderBottom: {
    borderBottom: `1px solid ${theme.palette.primary.dark}`,
  },
  borderLeft: {
    borderLeft: `1px solid ${theme.palette.primary.dark}`,
  },
  inputGrid: {
    backgroundColor: theme.palette.background.default,
  },
  label: {
    textTransform: 'uppercase',
    padding: 2,
  },
  totalScore: {
    paddingTop: 9,
  },
  inputClass: {
    textAlign: 'center',
    fontSize: '1.25rem',
    fontWeight: 500,
  },
}));

const SkillBlock = ({
  label,
  baseScore,
  initialValue,
  onChange,
  calculate,
  dark,
  stats,
  skillId,
  cost,
}) => {
  const [totalScore, setTotalScore] = useState(baseScore + initialValue + calculate(stats));
  const [score, setScore] = useState(initialValue);
  const [initialized, setInitialized] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const onChangeHandler = (value) => {
    console.log(skillId, 'onChangeHandler', value);

    setScore(value);
  };


  useEffect(() => {
    setTotalScore(baseScore + score + calculate(stats));
    setDisabled(score <= initialValue);
    setInitialized(true);
  }, [score, baseScore]);

  useEffect(() => {
    if (initialized) {
      onChange({ skillId, diff: (score - initialValue) * cost, totalScore });
    }
  }, [totalScore]);

  const classes = useStyles();
  const mainClass = dark ? classes.mainGridDark : classes.mainGrid;

  return (
    <Grid container classes={{ root: mainClass }}>
      <Grid item xs classes={{ root: classes.borderBottom }}>
        <Typography variant="subtitle1" align="center" className={classes.label}>{label}</Typography>
      </Grid>
      <Grid container item direction="row">
        <Grid container item xs={6} classes={{ root: classes.inputGrid }} alignContent="center">
          <IncrementInput
            initialValue={score}
            onChangeHandler={onChangeHandler}
            outlined={false}
            disableDecrement={disabled}
            inputClass={classes.inputClass}
          />
        </Grid>
        <Grid item xs={6} className={classes.borderLeft}>
          <Typography align="center" variant="h6" className={classes.totalScore}>{totalScore}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

SkillBlock.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  stats: PropTypes.object.isRequired,
  skillId: PropTypes.string.isRequired,
  cost: PropTypes.number,
  baseScore: PropTypes.number,
  initialValue: PropTypes.number,
  calculate: PropTypes.func,
  dark: PropTypes.bool,
};

SkillBlock.defaultProps = {
  initialValue: 0,
  baseScore: 0,
  dark: false,
  cost: 1,
  calculate: () => 0,
};

export default SkillBlock;
