import showScreen from '../common/show-screen';
import countScore from '../count-score/count-score';
import {answers, initAnswersTemplate} from "../game/answers";
import {initHeaderTemplate, initHeaderEvents} from '../blocks/header';
import {ANSWER_TIME, ANSWER_SCORE} from "../game/game-data";
import {gameState} from "../game/game-data";

const countBonuses = () => {

  const correctAnswerNumber = answers.filter((it) => {
    return it.isCorrect;
  }).length;
  const fastAnswerNumber = answers.filter((it) => {
    return it.time < ANSWER_TIME.FAST;
  }).length;
  const slowAnswerNumber = answers.filter((it) => {
    return it.time > ANSWER_TIME.SLOW;
  }).length;

  return {
    correct: {
      score: correctAnswerNumber * ANSWER_SCORE.CORRECT
    },
    fast: {
      number: fastAnswerNumber,
      score: fastAnswerNumber * ANSWER_SCORE.FAST
    },
    slow: {
      number: slowAnswerNumber,
      score: slowAnswerNumber * ANSWER_SCORE.SLOW
    },
    life: {
      number: gameState.lives,
      score: gameState.lives * ANSWER_SCORE.LIFE
    },
  };
};

const initStatsTemplate = () => {
  const totalScore = countScore(answers, gameState.lives);
  const bonuseScore = countBonuses();

  const bonusFastTemplate = bonuseScore.fast.number
    ? `<tr>
          <td></td>
          <td class="result__extra">Бонус за скорость:</td>
          <td class="result__extra">${bonuseScore.fast.number}&nbsp;<span class="stats__result stats__result--fast"></span></td>
          <td class="result__points">×&nbsp;${ANSWER_SCORE.FAST}</td>
          <td class="result__total">${bonuseScore.fast.score}</td>
        </tr>` : ``;

  const bonusLifeTemplate = bonuseScore.life.number
    ? `<tr>
          <td></td>
          <td class="result__extra">Бонус за жизни:</td>
          <td class="result__extra">${bonuseScore.life.number}&nbsp;<span class="stats__result stats__result--alive"></span></td>
          <td class="result__points">×&nbsp;${ANSWER_SCORE.LIFE}</td>
          <td class="result__total">${bonuseScore.life.score}</td>
        </tr>` : ``;

  const bonusSlowTemplate = bonuseScore.slow.number
    ? `<tr>
          <td></td>
          <td class="result__extra">Штраф за медлительность:</td>
          <td class="result__extra">${bonuseScore.slow.number}&nbsp;<span class="stats__result stats__result--slow"></span></td>
          <td class="result__points">×&nbsp;${ANSWER_SCORE.SLOW}</td>
          <td class="result__total">${bonuseScore.slow.score}</td>
        </tr>` : ``;

  const resultTemplate = totalScore !== -1
    ? `<tr>
         <td class="result__number">1.</td>
         <td colspan="2">
            ${initAnswersTemplate()}
          </td>
          <td class="result__points">×&nbsp;${ANSWER_SCORE.CORRECT}</td>
          <td class="result__total">${bonuseScore.correct.score}</td>
       </tr>
       ${bonusFastTemplate}
       ${bonusLifeTemplate}
       ${bonusSlowTemplate}
       <tr>
          <td colspan="5" class="result__total result__total--final">${totalScore}</td>
        </tr>`
    : `<tr>
          <td class="result__number">1.</td>
          <td colspan="2">
            ${initAnswersTemplate()}
          </td>
          <td class="result__total"></td>
          <td class="result__total  result__total--final">fail</td>
          </tr>`;

  return `<div class="result">
      ${totalScore !== -1 ? `<h1>Победа!</h1>` : ``}
      <table class="result__table">
        ${resultTemplate}
      </table>
    </div>`;
};

export const initStats = () => {
  showScreen(initHeaderTemplate() + initStatsTemplate(), () => {
    initHeaderEvents();
  });
};
