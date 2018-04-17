import checkClickedElement from '../../common/check-clicked-element';
import {addAnswer} from "../answers";

const IMAGE_CLASS = `.js-image`;

export const initGame3Template = (content) => {
  return `<div class="game js-game-3" data-type="${content.type}">
      <p class="game__task">${content.text}</p>
      <form class="game__content  game__content--tripl">
        <div class="game__option">
          <img class="js-image" src="${content.images[0].url}" alt="Option 1" width="304" height="455" data-type="${content.images[0].type}">
        </div>
        <div class="game__option  game__option--selected">
          <img class="js-image" src="${content.images[1].url}" alt="Option 1" width="304" height="455" data-type="${content.images[1].type}">
        </div>
        <div class="game__option">
          <img class="js-image" src="${content.images[2].url}" alt="Option 1" width="304" height="455" data-type="${content.images[2].type}">
        </div>
      </form>
  </div>`;
};

export const initGame3Events = () => {
  const game3Element = document.querySelector(`.js-game-3`);

  const checkImage = (clickedElement) => {
    return checkClickedElement(clickedElement, IMAGE_CLASS);
  };

  const checkAnswer = (image) => {
    return image.dataset.type === game3Element.dataset.type;
  };

  game3Element.addEventListener(`click`, (event) => {
    if (checkImage(event.target)) {
      addAnswer(checkAnswer(event.target));
    }
  });
};
