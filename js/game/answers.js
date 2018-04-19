import {ANSWER_TIME, GAME_NUMBER, switchGame, gameState} from './game-data';

export const answers = [];

export const addAnswer = (isCorrect) => {
  if (!isCorrect) {
    gameState.lives--;
  }

  answers.push({
    isCorrect,
    time: gameState.time
  });

  switchGame();
};

export const initAnswersTemplate = () => {
  const answerTypes = [];

  for (const it of answers) {
    if (!it.isCorrect) {
      answerTypes.push(`<li class="stats__result stats__result--wrong"></li>`);
    } else {
      if (it.time < ANSWER_TIME.FAST) {
        answerTypes.push(`<li class="stats__result stats__result--fast"></li>`);
      } else if (it.time > ANSWER_TIME.SLOW) {
        answerTypes.push(`<li class="stats__result stats__result--slow"></li>`);
      } else {
        answerTypes.push(`<li class="stats__result stats__result--correct"></li>`);
      }
    }
  }

  return `<ul class="stats">
          ${answerTypes.join(``)}
          ${Array(GAME_NUMBER - answerTypes.length).fill(`<li class="stats__result stats__result--unknown"></li>`)}
        </ul>`;
};
