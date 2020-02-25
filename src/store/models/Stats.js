const stats = {
  state: {
    str: {
      base: 3,
      raceBonus: 0,
      itemBonus: 0,
      advantageBonus: 0,
    },
    con: {
      base: 3,
      raceBonus: 0,
      itemBonus: 0,
      advantageBonus: 0,
    },
    dex: {
      base: 3,
      raceBonus: 0,
      itemBonus: 0,
      advantageBonus: 0,
    },
    siz: {
      base: 3,
      raceBonus: 0,
      itemBonus: 0,
      advantageBonus: 0,
    },
    int: {
      base: 3,
      raceBonus: 0,
      itemBonus: 0,
      advantageBonus: 0,
    },
    pow: {
      base: 3,
      raceBonus: 0,
      itemBonus: 0,
      advantageBonus: 0,
    },
    cha: {
      base: 3,
      raceBonus: 0,
      itemBonus: 0,
      advantageBonus: 0,
    },
    points: 73,
  },
  reducers: {
    updateBase: (state, { key, value }) => {
      const diff = state[key].base - value;
      const points = state.points + diff;
      if (points >= 0) {
        return {
          ...state,
          [key]: {
            ...state[key],
            base: value,
          },
          points,
        };
      }

      return state;
    },
    updateBonus: (state, { key, type, delta }) => {
      const bonus = `${type}Bonus`;
      const newValue = state[key][bonus] + delta;
      return {
        ...state,
        [key]: {
          ...state.key,
          [bonus]: newValue,
        },
      };
    },
  },
};

export default stats;
