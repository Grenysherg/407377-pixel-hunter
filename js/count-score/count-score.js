import {GameParameter, Score, AnswerTime} from "../data";

export default (answers, remainingLives) => {
  if (answers.length < GameParameter.GAMES) {
    return -1;
  }

  let score = Score.LIFE * remainingLives;

  answers.forEach((answer) => {
    if (answer.isCorrect) {
      score += Score.CORRECT_ANSWER;

      if (answer.time < AnswerTime.FAST) {
        score += Score.FAST_ANSWER;
      } else if (answer.time > AnswerTime.SLOW) {
        score += Score.SLOW_ANSWER;
      }
    } else {
      score += Score.INCORRECT_ANSWER;
    }
  });

  return score;
};
