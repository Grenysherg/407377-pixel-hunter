import checkRadio from "../../common/check-radio";
import {addAnswer} from "../answers";

export const initGame2Template = (content) => {
  return `<div class="game js-game-2">
      <p class="game__task">${content.text}</p>
      <form class="game__content  game__content--wide">
        <div class="game__option js-game-option">
          <img class="js-image" src="${content.images[0].url}" alt="Option 1" width="705" height="455" data-type="${content.images[0].type}">
          <label class="game__answer  game__answer--photo">
            <input class="js-game-radio" name="question1" type="radio" value="photo">
            <span>Фото</span>
          </label>
          <label class="game__answer  game__answer--wide  game__answer--paint">
            <input class="js-game-radio" name="question1" type="radio" value="paint">
            <span>Рисунок</span>
          </label>
        </div>
      </form>
  </div>`;
};

export const initGame2Events = () => {
  const game2Element = document.querySelector(`.js-game-2`);
  const option = game2Element.querySelector(`.js-game-option`);

  const checkAnswer = () => {
    const imageElement = option.querySelector(`.js-image`);
    const radioElement = option.querySelector(`.js-game-radio:checked`);

    return imageElement.dataset.type === radioElement.value;
  };

  game2Element.addEventListener(`change`, () => {
    if (checkRadio(option)) {
      addAnswer(checkAnswer());
    }
  });
};
