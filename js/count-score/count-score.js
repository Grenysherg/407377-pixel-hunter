import {ANSWER_TIME, ANSWER_SCORE, GAME_NUMBER} from "../data";

export default (answers, remainingLives) => {
  if (answers.length < GAME_NUMBER) {
    return -1;
  }

  let score = 0;

  answers.forEach((answer) => {
    if (answer.isCorrect) {
      score += ANSWER_SCORE.CORRECT;

      if (answer.time < ANSWER_TIME.FAST) {
        score += ANSWER_SCORE.FAST;
      } else if (answer.time > ANSWER_TIME.SLOW) {
        score += ANSWER_SCORE.SLOW;
      }
    } else {
      score += ANSWER_SCORE.INCORRECT;
    }
  });

  for (let i = 0; i < remainingLives; i++) {
    score += ANSWER_SCORE.LIFE;
  }

  return score;
};
