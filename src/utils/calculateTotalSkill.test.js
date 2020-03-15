import calculateTotals from './calculateTotals';

const data = {
  base: 10,
  raceBonus: 1,
  itemBonus: 2,
  advantageBonus: 1,
};

describe('utils: calculateTotals', () => {
  it('should add up', () => {
    expect(calculateTotals(data)).toEqual(14);
  });
});
