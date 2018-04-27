import AnswersView from './answers-view';
import {AnswerTime} from "../../data";
import {gameState, updateGameState, switchGame} from "../../game/game";

const getType = (isCorrect) => {
  if (isCorrect) {
    if (gameState.time < AnswerTime.FAST) {
      return `fast`;
    }

    if (gameState.time > AnswerTime.SLOW) {
      return `slow`;
    }

    return `correct`;
  }

  return `wrong`;
};

export const answers = [];

export const pushAnswer = (isCorrect) => {
  answers.push({
    type: getType(isCorrect),
    isCorrect,
    time: gameState.time,
  });

  updateGameState(isCorrect);
  switchGame();
};

export const getAnswersElement = () => {
  const answersView = new AnswersView(answers.map((it) => {
    return it.type;
  }));

  return answersView.element;
};
