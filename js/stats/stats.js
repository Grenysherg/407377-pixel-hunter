import StatsView from './stats-view';
import countTotalScore from '../count-score/count-score';
import {showScreen} from '../view-utils';
import {getHeaderElement} from '../blocks/header/header';
import {answers, getAnswersElement} from '../blocks/answers/answers';
import {AnswerTime, Score} from '../data';
import {gameState} from '../game/game';

const countBonuses = () => {
  const correctAnswerNumber = answers.filter((it) => {
    return it.isCorrect;
  }).length;
  const fastAnswerNumber = answers.filter((it) => {
    return it.time < AnswerTime.FAST;
  }).length;
  const slowAnswerNumber = answers.filter((it) => {
    return it.time > AnswerTime.SLOW;
  }).length;

  return {
    correct: {
      score: correctAnswerNumber * Score.CORRECT_ANSWER
    },
    fast: {
      number: fastAnswerNumber,
      score: fastAnswerNumber * Score.FAST_ANSWER
    },
    slow: {
      number: slowAnswerNumber,
      score: slowAnswerNumber * Score.SLOW_ANSWER
    },
    life: {
      number: gameState.lives,
      score: gameState.lives * Score.LIFE
    },
  };
};

export const initStats = () => {
  const statsView = new StatsView(countTotalScore(answers, gameState.lives), countBonuses(), getAnswersElement());

  statsView.addAnswers();
  showScreen([getHeaderElement(), statsView.element]);
};
