import Game1View from './game-1-view';
import {pushAnswer} from "../../../blocks/answers/answers";
import {checkRadioOptions, checkRadioAnswer} from "../../game";

const GAME_OPTIONS = 2;

export const getGame1Element = (content) => {
  const game1View = new Game1View(content);

  game1View.onRadioClick = () => {
    if (checkRadioOptions(GAME_OPTIONS, game1View)) {
      pushAnswer(checkRadioAnswer(GAME_OPTIONS, game1View));
    }
  };

  return game1View.element;
};
