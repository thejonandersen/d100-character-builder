import { init } from '@rematch/core';
import stats from './Stats';

describe('Stats', () => {
  let dispatch;
  let getState;
  let store;

  beforeEach(() => {
    store = init({
      models: {
        stats,
      },
    });
    dispatch = store.dispatch;
    getState = store.getState;
  });

  it('should update strength and subtract points', () => {
    dispatch.stats.updateBase({ key: 'str', value: 5 });
    const { scores: { str }, points } = getState().stats;
    expect(str.base).toEqual(5);
    expect(points).toEqual(71);
  });

  it('should update charisma and add points', () => {
    dispatch.stats.updateBase({ key: 'cha', value: 1 });
    const { scores: { cha }, points } = getState().stats;
    expect(cha.base).toEqual(1);
    expect(points).toEqual(75);
  });

  it('should not allow spending more than your total points', () => {
    dispatch.stats.updateBase({ key: 'cha', value: 76 });
    expect(getState().stats.scores.cha.base).toEqual(76);
    dispatch.stats.updateBase({ key: 'cha', value: 77 });
    expect(getState().stats.scores.cha.base).toEqual(76);
  });

  it('should update bonuses', () => {
    dispatch.stats.updateBonus({ key: 'str', type: 'race', delta: 1 });
    const { scores: { str }, points } = getState().stats;
    expect(str.raceBonus).toEqual(1);
    expect(points).toEqual(73);
  });
});
