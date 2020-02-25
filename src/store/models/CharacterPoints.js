import { produce } from 'immer';

const characterPoints = {
  state: {
    remaining: 500,
    spent: 0,
    tiers: [
      500,
      750,
      1000,
    ],
  },
  reducers: {
    setPoints: produce((state, points) => {
      state.remaining = points;
    }),
    gainPoints: produce((state, points) => {
      state.remaining += points;
    }),
    spendPoints: produce((state, points) => {
      state.remaining -= points;
      state.spent += points;
    }),
    refundPoints: produce((state, points) => {
      const refundPoints = state.spent >= points ? points : points - state.spent;
      if (state.spent >= refundPoints) {
        state.remaining += refundPoints;
        state.spent -= refundPoints;
      }
    }),
  },
  effects: {},
};

export default characterPoints;
