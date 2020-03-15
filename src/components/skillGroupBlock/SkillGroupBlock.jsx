/* eslint-disable react/forbid-prop-types */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import SkillBlock from '../skillBlock/SkillBlock';

const SkillGroupBlock = ({
  stats,
  skillData,
  onChange,
}) => {
  const [
    baseScore,
    setBaseScore,
  ] = useState(skillData.skillGroup.calculate(stats) + skillData.skillGroup.baseScore);

  const onBaseChange = ({ skillId, diff, totalScore }) => {
    setBaseScore(totalScore);
    onChange({ skillId, diff, totalScore });
  };

  const onSkillChange = ({ skillId, diff }) => {
    onChange({ skillId, diff });
  };

  return (
    <Grid container direction="column">
      <Grid item>
        <SkillBlock
          {...skillData.skillGroup}
          stats={stats}
          onChange={onBaseChange}
          dark
        />
      </Grid>
      {skillData.skills.map((data) => (
        <Grid item>
          <SkillBlock
            key={data.skillId}
            baseScore={baseScore}
            {...data}
            stats={stats}
            onChange={onSkillChange}
          />
        </Grid>
      ))}
    </Grid>
  );
};

SkillGroupBlock.propTypes = {
  stats: PropTypes.object.isRequired,
  skillData: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SkillGroupBlock;
