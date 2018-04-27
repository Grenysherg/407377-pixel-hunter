import Game2View from './game-2-view';
import {pushAnswer} from "../../../blocks/answers/answers";
import {checkRadioOptions, checkRadioAnswer} from "../../game";

const GAME_OPTIONS = 1;

export const getGame2Element = (content) => {
  const game2View = new Game2View(content);

  game2View.onRadioClick = () => {
    if (checkRadioOptions(GAME_OPTIONS, game2View)) {
      pushAnswer(checkRadioAnswer(GAME_OPTIONS, game2View));
    }
  };

  return game2View.element;
};
