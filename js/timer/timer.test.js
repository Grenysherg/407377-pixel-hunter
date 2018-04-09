import {assert} from "chai";
import {initTimer} from "./timer";

describe(`Check timer:`, () => {
  it(`should return an object`, () => {
    for (let i = 1; i <= 5; i++) {
      assert.isObject(initTimer(i));
    }
  });

  it(`should return remaining time reduced by one after the method tick() is called`, () => {
    for (let i = 1; i <= 5; i++) {
      assert.equal(initTimer(i + 1).tick(), i);
    }
  });

  it(`should return 0 when time is over`, () => {
    for (let i = 1; i <= 5; i++) {
      const timer = initTimer(i);

      for (let j = 1; j < i; j++) {
        timer.tick();
      }

      assert.equal(timer.tick(), 0);
    }
  });
});
