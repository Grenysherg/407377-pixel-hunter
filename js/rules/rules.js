import RulesView from './rules-view';
import {showScreen} from '../view-utils';
import {getHeaderElement} from "../blocks/header/header";
import {initGame} from "../game/game";

export const initRules = () => {
  const rulesView = new RulesView();

  rulesView.onNameInput = (event) => {
    if (event.target.value.trim()) {
      rulesView.changeButtonStable(false);
    } else {
      rulesView.changeButtonStable(true);
    }
  };

  rulesView.onButtonClick = () => {
    initGame();
  };

  showScreen([getHeaderElement(), rulesView.element]);
};
