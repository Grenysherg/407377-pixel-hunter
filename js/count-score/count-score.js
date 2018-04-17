import {ANSWER_TIME, ANSWER_SCORE, GAME_NUMBER} from "../game/game-data";
import {answers} from "../game/answers";
import {gameState} from "../game/game-data";

export default () => {
  if (answers.length < GAME_NUMBER) {
    return -1;
  }

  let score = ANSWER_SCORE.LIFE * gameState.lives;

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

  return score;
};
