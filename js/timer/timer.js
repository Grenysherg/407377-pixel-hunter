class Timer {
  constructor(time) {
    this.initialTime = time;
    this.remainingTime = this.initialTime;
  }

  tick() {
    return --this.remainingTime > 0 ? this.remainingTime : 0;
  }
}

export const initTimer = (time) => {
  return new Timer(time);
};
