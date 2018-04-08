import {assert} from "chai";
import {ONE_SECOND} from "../data";
import {initTimer} from "./timer";

describe(`Check timer:`, () => {
  it(`should return an object`, () => {
    for (let i = 1; i <= 2; i++) {
      assert.isObject(initTimer(i * ONE_SECOND));
    }
  });

  it(`should return remaining time reduced by one after the method tick() is called`, () => {
    for (let i = 1; i <= 5; i++) {
      const time = (1 + i) * ONE_SECOND;

      assert.equal(initTimer(time).tick(), time - ONE_SECOND);
    }
  });

  it(`should return -1 when time is over`, () => {
    for (let i = 1; i <= 5; i++) {
      const time = i * ONE_SECOND;
      const timer = initTimer(time);

      for (let j = 1; j < time / ONE_SECOND; j++) {
        timer.tick();
      }

      assert.equal(timer.tick(), -1);
    }
  });
});
