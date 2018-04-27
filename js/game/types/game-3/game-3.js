import Game3View from './game-3-view';
import {pushAnswer} from "../../../blocks/answers/answers";
import {checkClickedElement} from "../../../view-utils";

const checkAnswer = (imageType, correctType) => {
  return imageType === correctType;
};

export const getGame3Element = (content) => {
  const game3View = new Game3View(content);

  game3View.onImageClick = (event) => {
    const clickedElement = event.target;

    if (checkClickedElement(clickedElement, `.js-image`)) {
      pushAnswer(checkAnswer(event.target.dataset.type, content.type));
    }
  };

  return game3View.element;
};
