import checkRadio from "../../common/check-radio";
import {addAnswer} from "../answers";

export const initGame1Template = (content) => {
  return `<div class="game js-game-1">
      <p class="game__task">${content.text}</p>
      <form class="game__content">
        <div class="game__option js-game-option">
          <img class="js-image" src="${content.images[0].url}" alt="Option 1" width="468" height="458" data-type="${content.images[0].type}">
          <label class="game__answer game__answer--photo">
            <input class="js-game-radio" name="question1" type="radio" value="photo">
            <span>Фото</span>
          </label>
          <label class="game__answer game__answer--paint">
            <input class="js-game-radio" name="question1" type="radio" value="paint">
            <span>Рисунок</span>
          </label>
        </div>
        <div class="game__option js-game-option">
          <img class="js-image" src="${content.images[1].url}" alt="Option 2" width="468" height="458" data-type="${content.images[1].type}">
          <label class="game__answer  game__answer--photo">
            <input class="js-game-radio" name="question2" type="radio" value="photo">
            <span>Фото</span>
          </label>
          <label class="game__answer  game__answer--paint">
            <input class="js-game-radio" name="question2" type="radio" value="paint">
            <span>Рисунок</span>
          </label>
        </div>
      </form>
  </div>`;
};

export const initGame1Events = () => {
  const game1Element = document.querySelector(`.js-game-1`);
  const optionCollection = game1Element.querySelectorAll(`.js-game-option`);

  const checkAnswer = () => {
    for (let it of optionCollection) {
      const imageElement = it.querySelector(`.js-image`);
      const radioElement = it.querySelector(`.js-game-radio:checked`);

      if (!(imageElement.dataset.type === radioElement.value)) {
        return false;
      }
    }

    return true;
  };

  const checkOptions = () => {
    for (let it of optionCollection) {
      if (!checkRadio(it)) {
        return false;
      }
    }

    return true;
  };

  game1Element.addEventListener(`change`, () => {
    if (checkOptions()) {
      addAnswer(checkAnswer());
    }
  });
};


