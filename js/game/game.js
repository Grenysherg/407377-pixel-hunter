import {GameParameter, QUESTIONS} from '../data';
import {showScreen, getCheckedRadio, getCheckedRadioType, getImageType} from "../view-utils";
import {getHeaderElement} from '../blocks/header/header';
import {getAnswersElement} from '../blocks/answers/answers';
import {getGame1Element} from './types/game-1/game-1';
import {getGame2Element} from './types/game-2/game-2';
import {getGame3Element} from './types/game-3/game-3';
import {initStats} from '../stats/stats';

const gameType = {
  1: getGame1Element,
  2: getGame2Element,
  3: getGame3Element,
};

export const gameState = {
  number: 1,
  time: 11,
  lives: GameParameter.LIVES,
};

export const updateGameState = (isLastAnswerCorrect) => {
  gameState.number++;

  if (!isLastAnswerCorrect) {
    gameState.lives--;
  }
};

export const switchGame = () => {
  if (gameState.number > GameParameter.GAMES || gameState.lives < 0) {
    initStats();
  } else {
    initGame();
  }
};

export const initGame = () => {
  const question = QUESTIONS[gameState.number - 1];

  showScreen([getHeaderElement(gameState), gameType[question.type](question.content), getAnswersElement()]);
};

export const checkRadioOptions = (optionNumber) => {
  for (let i = 1; i <= optionNumber; i++) {
    if (!getCheckedRadio(i)) {
      return false;
    }
  }

  return true;
};

export const checkRadioAnswer = (optionNumber) => {
  for (let i = 1; i <= optionNumber; i++) {
    if (getCheckedRadioType(i) !== getImageType(i)) {
      return false;
    }
  }

  return true;
};

