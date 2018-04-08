import {ONE_SECOND} from "../data";

class Timer {
  constructor(time) {
    this.initialTime = time;
    this.remainingTime = this.initialTime;
  }

  tick() {
    this.remainingTime -= ONE_SECOND;

    return this.remainingTime > 0 ? this.remainingTime : -1;
  }
}

export const initTimer = (time) => {
  return new Timer(time);
};
