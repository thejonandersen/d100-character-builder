import { init } from '@rematch/core';
import characterPoints from './CharacterPoints';

describe('characterPoints', () => {
  let dispatch;
  let getState;
  let store;

  beforeEach(() => {
    store = init({
      models: {
        characterPoints,
      },
    });
    dispatch = store.dispatch;
    getState = store.getState;
  });

  it('should set points', () => {
    dispatch.characterPoints.setPoints(1000);
    expect(getState().characterPoints.remaining).toEqual(1000);
  });

  it('should track spent points', () => {
    dispatch.characterPoints.spendPoints(5);
    expect(getState().characterPoints.remaining).toEqual(495);
  });

  it('should track refunded points', () => {
    dispatch.characterPoints.spendPoints(5);
    dispatch.characterPoints.refundPoints(5);
    expect(getState().characterPoints.remaining).toEqual(500);
  });

  it('should not refund points beyond those spent', () => {
    dispatch.characterPoints.spendPoints(5);
    dispatch.characterPoints.refundPoints(10);
    expect(getState().characterPoints.remaining).toEqual(500);
  });

  it.skip('should reset character when base points are set', () => {

  });
});
